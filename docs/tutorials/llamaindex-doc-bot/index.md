# 🌟 + LlamaIndex: Slack Bot that Understands Your Data

<img src={require("./title.png").default} style={{width: 700}} />

## Objective
**To build a Slack bot that can answer questions about your own documents.**

**Usefulness:** ⭐⭐⭐⭐⭐ | **Difficult Level:** ⭐⭐

## Outlines
In this tutorial, we use technical docs as an example. The same principle can be applied to other types of unstructured data. 
We will cover:
- Data indexing (with `LlamaIndex`): 4 steps in a Jupyter Notebook.
- Bot development (with `QueryStar`): 24 lines of Python.

The tutorial is composed of 3 sections. You can skip some of them:
- Already know `semantic search with embeddings` but want to learn how to do it with tech docs? If so, start from [section #2: Index Text Data](#index-text-data). 
- Already know `vector storage and query` with `LlamaIndex`? Cool, jump to [section #3: Make a Slack Bot](#make-a-slack-bot).


> *This tutorial is inspired by [Build a chatbot with custom data sources, powered by LlamaIndex](https://blog.streamlit.io/build-a-chatbot-with-custom-data-sources-powered-by-llamaindex/) from `Streamlit`. Thanks to Caroline Frasca, one of the co-authors, for proof reading!*

## Section 1: Some Basics
When faced with questions whose answers can be found within some documents, we can use large language models (LLM) to find answers via the following 3 modules:
1. Retrieve paragraphs/context **relevant** to the questions;
2. Put the question and retrieved context in a prompt, and ask LLM to generate an answer;
3. Deliver the answers back to human.

Let's check them one by one.

### Module-A: Context Retrieval

<img src={require("./retrieval.jpg").default} style={{width: 400}} />

The first challenge we will be facing is to quantify and mathematically measure **relevancy** between any two pieces of information in the format of human language.

One widely adopted technique is `embedding`. This technique transforms sentences and paragraphs to a mathematical representation: vectors. This allows us to measure distance among vectors, which is a much simpler math problem.

<!-- A key metrics we should pay attention to is `accuracy of embedding`: how well the embedding representation captures the essential information. There're many important factors:
- Language model performance. 
- Length of the paragraphs to be embedded.
- Text quality and cleanness.
- ... -->

Concretely, `context retrieval` can be done in the follow steps:
1. Divide paragraphs into chunks, and embed each chunk to a vector. After this step, we will get many vectors, say, 500.
2. Embed the question as well, which gives us 1 new vector.
3. Use the question vector to compare with the 500 context vectors, and select top N (e.g., 5) most similar ones. Then we believe all 5 of them are **relevant** to the question.

This technique is called `semantic search with embeddings`. If this starts confusing you, don't worry. Good news is that there're already commercially available language models and open source tools that can help us to achieve pretty good results with little effort. 

In this tutorial, we will be using `OpenAI`'s language models and `LlamaIndex`, an open source library to help us develop `semantic search`.

### Module-B: Retrieval Augmented Generation (RAG)
<img src={require("./rag.jpg").default} style={{width: 400}} />

A simple generation is to only show LLMs a question and ask them to generate answers. LLMs then answer it without extra "context" fed to them. All LLMs can rely on is their own massive neural networks.

The problem is that you usually cannot get the answer tuned towards some specific contexts you're having.

`RAG` is the solution to solve this problem. The idea is simple: We put all the text chunks, extracted previously from **Mudule-A**, in the prompt along with the question. Then we ask LLMs "answer it only based on the given context, not other prior knowledge", and get an answer. 

`LlamaIndex` also provides functions for us to build this module.


### Module-C: AI-Human Interface
<img src={require("./bot.jpg").default} style={{width: 400}} />

Last but not least, we need a good interface for human to consume AI-generated/augmented results. 

You can consider a web based chatbot or smart phone apps. For example, ChatGPT can be used in the browser and installed from app store. To build your own web based chatbot, check these 3 demos from [Streamlit](https://www.youtube.com/watch?v=4sPnOqeUDmk&t=23s), [PyWebIO](https://pywebio-demos.pywebio.online/chatgpt), and [Gradio](https://www.gradio.app/guides/creating-a-custom-chatbot-with-blocks). All 3 demos show you how to make a web-based chatbot in a single `.py` file, which is easy for data folks to learn.

However, sometimes you need to embed AI directly in your workplace. You do not want to switch back and forth cross many web pages and apps. For example:
- You may want to ask AI questions inside a Slack channel, so the entire team can also see what AI has to say.
- When receive an email, let AI determine its urgency. If urgent, send it to your Slack DM.

In this tutorial, we will be building this module as a Slack bot. So everyone who's interested in your company can join and use your bot. `QueryStar` helps us easily achieve this goal with 2 simple function calls.

Sounds fun? Let's code then.

## Index Text Data
:::info
Demo code can be found here: https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot 

Specifically, code for this section is in [this notebook](https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/cleaning_and_indexing.ipynb)
:::

LlamaIndex's docs can be found in [its Git repo](https://github.com/jerryjliu/llama_index/tree/main/docs). Simply clone or download it to a folder. Files are either `.md` or `.rst` types, which

## Make a Slack Bot
:::info
Code for this section is in [this `.py` file](https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/app.py)
:::

Let's test:

<img src={require("./chat-test.png").default} style={{width: 500}} />

## Deploy Your Bot
