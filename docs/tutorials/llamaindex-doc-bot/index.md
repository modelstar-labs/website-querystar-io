# 🌟 + LlamaIndex: Slack Bot that Understands Your Data (Draft)

<img src={require("./title.png").default} style={{width: 700}} />


## Objective
#### Learn how to build a Slack bot that can answer questions about your own documents.
<img src={require("./code.png").default} style={{width: 500}} />

**Usefulness:** ⭐⭐⭐⭐⭐ |  **Difficult Level:** ⭐⭐
:::note
Source code of this tutorial: https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot 
:::


## About the Slack Bot 

### Use Case Example
When a user posts a message (starting with "ask llama") to `#ask-llama` channel in a Slack workspace:
> "ask llama: can llama-index ...?"

The bot sends an answer back to the channel:
> Llama says: ...


### Feature Design
- **AI (LLM) function**: After getting a question, the bot should generate an answer that aligns with the context provided in the given documents.
- **Trigger - Action**: 
    - The bot should respond to messages that:
        - are sent to a designated channel, AND
        - contain trigger word "ask llama".
    - The bot should extract user question from the trigger message, call the LLM function to generate an answer.
    - Last but not least, the bot should post the answer to the channel. Then, wait for next trigger events.


## Tech Stack

When choosing tech stack, we want to maximize speed of learning and shipping, meanwhile, leave enough room for customization. Here, we choose the `LOQ` stack (`LlamaIndex` + `OpenAI` + `Querystar`), which allows us to make a fully featured bot in less than an hour.

### AI function
<img src={require("./rag.jpg").default} style={{width: 500}} />

Key capability of the function is to process documents and retrieve useful context. We will implement a technique called `Retrieval Augmented Generation` (`RAG`). The basic concepts are explained in [Section 1: Some Basics](#section-1-some-basics). 

`LlamaIndex` combined with `OpenAI`'s LLMs can give us great results with the least amount of code. We will show you how to do it in [Section 2: Data Indexing](#section-2-data-cleaning-and-indexing).

:::note
Spoiler Alert ... this notebook shows how this is done: 
https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/cleaning_and_indexing.ipynb
:::


### Trigger - Action
<img src={require("./bot.jpg").default} style={{width: 500}} />

This feature determines the bot's workflow logic, and provide an intuitive interface for human to use AI. `QueryStar` is used here to implement the design with 2 simple function calls. See [Section 3: Bot development)](#section-3-slack-bot-development). 

:::note
For who's curious: this `app.py` file (24 lines of Python code) is all we need to build the bot: https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/app.py
:::

---

## Section 1: Some Basics about `RAG`

When dealing with questions, we often need some reference materials to help to find answers. In this process, we retrieve paragraphs/context that are **relevant** to the questions. A big challenge we will be facing if we want AI to do this: to quantify and mathematically measure **relevancy** between any two pieces of information in the format of human language.

We must find a mathematical representation of text (words, sentences and paragraphs). A widely adopted technique, called `Embedding`, is invented to transform text to vectors. And then, we treat **relevancy** of 2 vectors as the distance between them. 

This leads to `Retrieval Augmented Generation` (`RAG`):
1. For any document, we divide the content into chunks. E.g., every 3 sentences, or every 100 words. Let's say we got 500 chucks after this step.
2. We create `embeddings` for each chunk, which gives us 500 "context vectors".
3. With any given question, we can get its embedding as well, which gives us 1 "question vector".
4. Use the question vector to compare with the 500 context vectors, and select top N (e.g., 5) most similar ones. Then we believe all 5 of them are **relevant** to the question.
5. We put the top 5 **relevant** text chunks in a prompt along with the question, then ask LLMs "answer it only based on the given context, not other prior knowledge".

With `RAG`, we get answers tuned towards specific contexts that are provided to LLM. This helps reducing hallucination and improving accuracy. Sounds fun? Let's code.

---

## Section 2: Data Cleaning and Indexing

### Data Cleaning

LlamaIndex's doc folder can be download from https://github.com/jerryjliu/llama_index/tree/main/docs 

There're many types of files in the folder. We only need to keep `.md` and `.rst` files. The other files (like `.py` or `.bat`) do not contain too much context. Here shows the script:

```python
# Data cleaning
dir_path = './lidocs'  #local folder of LlamaIndex documentations
for root, dirs, files in os.walk(dir_path):
    for file in files:
        if file.endswith(('.md', '.rst')):
            continue
        else:
            file_path = os.path.join(root, file)
            os.remove(file_path)
```

### Indexing

`LlamaIndex` provides `SimpleDirectoryReader` function to load a folder. Simply call it and get a `reader` object.

```python
from llama_index import SimpleDirectoryReader

reader = SimpleDirectoryReader(input_dir="./lidocs", recursive=True)
lidocs = reader.load_data()
```

Now we're ready to run `indexing`: dividing each document into `chunks` and `embed` them. Normally, we would need hundreds of lines of code to do it, and worry about many implementation details. However, `LlamaIndex` has made it so easy as making one function call: `VectorStoreIndex.from_documents()`. 

```python
import openai
from llama_index import VectorStoreIndex

openai.api_key = os.getenv('OPENAI_API_KEY')
index = VectorStoreIndex.from_documents(lidocs)

# save index to files
index.storage_context.persist()
```

After this, many vectors (totally 32.8 MB, which represent the knowledge from the docs) are obtained and saved in files. Curious how they look like? Find them in the `vector_store.json` file in the [`storage` folder](https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot/storage).

:::info
This demo uses GPT, a commercial model service by OpenAI. 
- Before running it, make sure you have an OpenAI API key. 
- This may take 2-5 mins to finish, highly depending on API latency in your region. 
- This step may cost you up to $1 for GPT tokens. To avoid the cost, you can skip this step and find the result in the "storage" folder.
:::

### `RAG` Function

With pre-processed indexing file in place, we can finally build the LLM-powered `RAG` function, which takes question and return an answer. We just need to load them to the `index` object, and use `LlamaIndex` built-in query engine to get `response`.

```python
def ask_llamaindex(question: str):

    # rebuild storage context
    storage_context = StorageContext.from_defaults(persist_dir="./storage")
    # load index
    index = load_index_from_storage(storage_context)
    query_engine = index.as_query_engine()
    response = query_engine.query(question)

    return response
```


---

## Section 3: Trigger-Action Based Slack Bot

:::note
We will use `QueryStar`. For the first time user, please set up the SDK on your computer by following this [quickstart guide](../../quickstart/token). The set up process usually takes less than 5 mins. QueryStar's integrated API service helps to take care of Slack authorization, so **NO** Slack token is required here. QueryStar token is free for 1 Slack workspace connection unlimited bots. 


Source code of the bot: https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/app.py
:::


Let's create a file `app.py`, imports some packages, and copy the `ask_llamaindex()` function here.

```python
# app.py
import querystar as qs
from llama_index import StorageContext, load_index_from_storage
import os, openai

openai.api_key = os.getenv('OPENAI_API_KEY')

def ask_llamaindex(question: str):

    # rebuild storage context
    storage_context = StorageContext.from_defaults(persist_dir="./storage")
    # load index
    index = load_index_from_storage(storage_context)
    query_engine = index.as_query_engine()
    response = query_engine.query(question)

    return response

```


### Trigger

A Slack message `trigger` can be easily setup with `querystar.triggers.slack.new_message()`:

```python
data = qs.triggers.slack.new_message(channel_id='C05PRRJ0H4N',  # channel: llama-qa
                                     trigger_string='ask llama') 

question = data.get('text', None)
```

This script is quite self-explanatory. The bot is set to listen to new Slack messages. When a message matches the filter condition (`channel_id` `AND` `trigger_string`), a `json` object of the message will return to variable `data`. Just parse the object and get message content, i.e. a user question.

:::note
<details><summary>An example message object (click to expand)</summary>
<p>

```json
{
   "client_msg_id":"...",
   "type":"message",
   "text":"ask llama: ...",
   "user":"useid...",
   "ts":"1693582549.746649",
   "blocks":[...],
   "team":"...",
   "thread_ts":"1693536314.270179",
   "parent_user_id":"...",
   "channel":"C05PRRJ0H4N",
   "event_ts":"1693582549.746649",
   "channel_type":"group"
}
```

</p>
</details>
:::



### Action

There remains the last 2 lines of code. After a trigger message is received, the bot calls `ask_llamaindex()` to get an answer, then call `add_message()` to post the answer back to the same channel.

```python
answer = ask_llamaindex(question)
# send answer to Slack
qs.actions.slack.add_message(channel_id='C05PRRJ0H4N', message=f'Llama says: {answer}')
```

That's it! Let's test it. Open your terminal, and run this command (make sure the current folder contains the `app.py` file):

```shell
$ querystar run app.py
```

It works 🤩🤩🤩

<img src={require("./chat-test.png").default} style={{width: 500}} />


**Now, you can invite your entire team join this channel to learn `LlamaIndex` together!**

---

>*Acknowledgement:*
>*This tutorial is inspired by [Build a chatbot with custom data sources, powered by LlamaIndex](https://blog.streamlit.io/build-a-chatbot-with-custom-data-sources-powered-by-llamaindex/) from `Streamlit`. Thank [...], one of the co-authors, for proof reading!*


