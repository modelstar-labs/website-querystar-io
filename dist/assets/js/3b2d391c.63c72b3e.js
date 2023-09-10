"use strict";(self.webpackChunkwebsite_querystar_io=self.webpackChunkwebsite_querystar_io||[]).push([[778],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>k});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7982:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const i={},r="QueryStar \ud83c\udf1f + LlamaIndex \ud83e\udd99: Slack Bot that Understands Your Data (Draft)",l={unversionedId:"tutorials/llamaindex-doc-bot/index",id:"tutorials/llamaindex-doc-bot/index",title:"QueryStar \ud83c\udf1f + LlamaIndex \ud83e\udd99: Slack Bot that Understands Your Data (Draft)",description:"Objective",source:"@site/docs/tutorials/llamaindex-doc-bot/index.md",sourceDirName:"tutorials/llamaindex-doc-bot",slug:"/tutorials/llamaindex-doc-bot/",permalink:"/docs/tutorials/llamaindex-doc-bot/",draft:!1,tags:[],version:"current",lastUpdatedAt:1694032542,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Tutorials",permalink:"/docs/category/tutorials"},next:{title:"Triggers",permalink:"/docs/api/slack/triggers"}},s={},p=[{value:"Objective",id:"objective",level:2},{value:"Learn how to build a Slack bot that can answer questions about your own documents.",id:"learn-how-to-build-a-slack-bot-that-can-answer-questions-about-your-own-documents",level:4},{value:"About the Slack Bot",id:"about-the-slack-bot",level:2},{value:"Use Case Example",id:"use-case-example",level:3},{value:"Module Design",id:"module-design",level:3},{value:"Tech Stack",id:"tech-stack",level:2},{value:"<code>LlamaIndex</code> for the LLM Function",id:"llamaindex-for-the-llm-function",level:3},{value:"<code>QueryStar</code> for the Bot",id:"querystar-for-the-bot",level:3},{value:"<code>RAG</code> Basics",id:"rag-basics",level:2},{value:"<code>RAG</code> Function",id:"rag-function",level:2},{value:"Prep: Data Cleaning",id:"prep-data-cleaning",level:3},{value:"Prep: Document Indexing",id:"prep-document-indexing",level:3},{value:"Function Development",id:"function-development",level:3},{value:"Trigger-Action Based Slack Bot",id:"trigger-action-based-slack-bot",level:2},{value:"Prep: QueryStar Setup",id:"prep-querystar-setup",level:3},{value:"Prep: Creating <code>app.py</code>",id:"prep-creating-apppy",level:3},{value:"<code>new_message()</code> Trigger",id:"new_message-trigger",level:3},{value:"<code>add_message()</code> Action",id:"add_message-action",level:3},{value:"End-to-end Test",id:"end-to-end-test",level:3}],d={toc:p},c="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"querystar---llamaindex--slack-bot-that-understands-your-data-draft"},"QueryStar \ud83c\udf1f + LlamaIndex \ud83e\udd99: Slack Bot that Understands Your Data (Draft)"),(0,o.kt)("img",{src:n(8433).Z,style:{width:700,display:"block",margin:"0 auto"}}),(0,o.kt)("h2",{id:"objective"},"Objective"),(0,o.kt)("h4",{id:"learn-how-to-build-a-slack-bot-that-can-answer-questions-about-your-own-documents"},"Learn how to build a Slack bot that can answer questions about your own documents."),(0,o.kt)("img",{src:n(6061).Z,style:{width:500,display:"block",margin:"0 auto"}}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usefulness:")," \u2b50\u2b50\u2b50\u2b50\u2b50 |  ",(0,o.kt)("strong",{parentName:"p"},"Difficult Level:")," \u2b50\u2b50"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Source code: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot"},"https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot")," ")),(0,o.kt)("h2",{id:"about-the-slack-bot"},"About the Slack Bot"),(0,o.kt)("p",null,"This bot helps Slack users to learn a new open source project, called ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex"),'. It "learns" from the project documentation and can "answer" questions about it.'),(0,o.kt)("h3",{id:"use-case-example"},"Use Case Example"),(0,o.kt)("p",null,'When a user posts a message (starting with "ask llama") to ',(0,o.kt)("inlineCode",{parentName:"p"},"#ask-llama")," channel in a Slack workspace:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'"ask llama: can llama-index ...?"')),(0,o.kt)("p",null,"The bot sends a legit answer back to the channel:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Llama says: ...")),(0,o.kt)("h3",{id:"module-design"},"Module Design"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"AI (LLM) Function"),": After getting a question, this function should generate an answer that aligns with the context provided in the given documents."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Trigger - Action"),": ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The bot should respond to messages that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"are sent to a designated channel, AND"),(0,o.kt)("li",{parentName:"ul"},'contain trigger word "ask llama".'))),(0,o.kt)("li",{parentName:"ul"},"The bot should extract user questions from the trigger messages, and run the LLM function to generate answers."),(0,o.kt)("li",{parentName:"ul"},"The bot should post the answers back to the channel. Then, wait for future trigger events.")))),(0,o.kt)("h2",{id:"tech-stack"},"Tech Stack"),(0,o.kt)("p",null,"We want to maximize speed of learning and shipping, meanwhile, leave enough room for customization. Here, we choose the ",(0,o.kt)("inlineCode",{parentName:"p"},"LOQ")," stack (",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAI")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"Querystar"),"). This allows us to make a fully functioning bot in < 1 hour. Let's introduce the stack by module."),(0,o.kt)("h3",{id:"llamaindex-for-the-llm-function"},(0,o.kt)("inlineCode",{parentName:"h3"},"LlamaIndex")," for the LLM Function"),(0,o.kt)("p",null,"Key capability of the function is to process documents and retrieve relevant context. We will implement this function using ",(0,o.kt)("inlineCode",{parentName:"p"},"Retrieval Augmented Generation")," (",(0,o.kt)("inlineCode",{parentName:"p"},"RAG"),"). The basic concepts of ",(0,o.kt)("inlineCode",{parentName:"p"},"RAG")," are explained in ",(0,o.kt)("a",{parentName:"p",href:"#rag-basics"},"Section 1: Some Basics"),". "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenAI"),"'s LLMs give us great results with the least amount of code. Details are in ",(0,o.kt)("a",{parentName:"p",href:"#rag-function"},"Section 2: Data Indexing"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If you want to skip Section 1 and 2: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/cleaning_and_indexing.ipynb"},"this Jupyter notebook")," shows how the AI function is implemented.")),(0,o.kt)("h3",{id:"querystar-for-the-bot"},(0,o.kt)("inlineCode",{parentName:"h3"},"QueryStar")," for the Bot"),(0,o.kt)("p",null,"This module determines the bot's behavior, and provides an intuitive interface for human to use AI. "),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"QueryStar")," is used here to implement the design, with only 2 simple function calls. See details in ",(0,o.kt)("a",{parentName:"p",href:"#trigger-action-based-slack-bot"},"Section 3: Bot development)"),". "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"For those who are curious: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/modelstar-labs/querystar-demo/blob/main/ask_llamaindex_slack_bot/app.py"},"this ",(0,o.kt)("inlineCode",{parentName:"a"},"app.py")," file (24 lines of Python code)")," is all we need to ship the bot.")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rag-basics"},(0,o.kt)("inlineCode",{parentName:"h2"},"RAG")," Basics"),(0,o.kt)("p",null,"When dealing with questions, we often need some reference materials to help to find answers. In this process, we retrieve paragraphs/context that are ",(0,o.kt)("em",{parentName:"p"},"relevant")," to the questions. "),(0,o.kt)("p",null,"A big challenge we will be facing if we want a computer program to do this:\n",(0,o.kt)("strong",{parentName:"p"},"How to quantify and mathematically measure ",(0,o.kt)("inlineCode",{parentName:"strong"},"relevance")," between any two pieces of information in the format of human language.")),(0,o.kt)("p",null,"We must find a mathematical representation of text (words, sentences and paragraphs), and construct a measurement (as a proxy to ",(0,o.kt)("inlineCode",{parentName:"p"},"relevance"),") among the representations. "),(0,o.kt)("p",null,"A technique, called ",(0,o.kt)("inlineCode",{parentName:"p"},"embedding"),", is widely adopted to transform texts to vectors. With embedding vectors, we can use distance between them to quantify ",(0,o.kt)("inlineCode",{parentName:"p"},"relevance"),". "),(0,o.kt)("p",null,"A basic ",(0,o.kt)("inlineCode",{parentName:"p"},"Retrieval Augmented Generation")," (",(0,o.kt)("inlineCode",{parentName:"p"},"RAG"),") algorithm can be implemented through the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For any document, we divide the content into chunks. E.g., every 3 sentences, or every 100 words. Let's say we got 500 chunks after this step."),(0,o.kt)("li",{parentName:"ol"},"We create ",(0,o.kt)("inlineCode",{parentName:"li"},"embeddings"),' for each chunk, which gives us 500 "context vectors".'),(0,o.kt)("li",{parentName:"ol"},'With any given question, we can get its embedding as well, which gives us 1 "question vector".'),(0,o.kt)("li",{parentName:"ol"},"Use the question vector to compare with the 500 context vectors, and select top N (e.g., 5) most similar ones. Then we believe those 5 of them are the most ",(0,o.kt)("strong",{parentName:"li"},"relevant")," to the question."),(0,o.kt)("li",{parentName:"ol"},"We put the top 5 ",(0,o.kt)("strong",{parentName:"li"},"relevant"),' text chunks in a prompt along with the question, then ask LLMs "answer it only based on the given context, not other prior knowledge".')),(0,o.kt)("div",{style:{textAlign:"center"}},(0,o.kt)("img",{src:n(5708).Z,style:{width:400}}),(0,o.kt)("p",{style:{fontSize:"12px",fontStyle:"italic"}}," Image Source: LlamaIndex Docs")),(0,o.kt)("p",null,"In contrast to solely sending the question to LLMs for query, ",(0,o.kt)("inlineCode",{parentName:"p"},"RAG")," sends both question and relevant context, which can help to reduce hallucinations and improve accuracy. "),(0,o.kt)("p",null,"However, implementing all 5 steps on ourselves is not a simple task. This is where ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex")," comes in handy. It allows us to build a nice ",(0,o.kt)("inlineCode",{parentName:"p"},"RAG")," pipeline with a few function calls. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"What makes ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex")," more appealing to experienced engineers is that it provides many low-level APIs as well for customization. ")),(0,o.kt)("p",null,"Interested in giving it a try? Let's dive into the coding process."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"rag-function"},(0,o.kt)("inlineCode",{parentName:"h2"},"RAG")," Function"),(0,o.kt)("img",{src:n(7645).Z,style:{width:500,display:"block",margin:"0 auto"}}),(0,o.kt)("h3",{id:"prep-data-cleaning"},"Prep: Data Cleaning"),(0,o.kt)("p",null,"Let's start with downloading/cloning ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jerryjliu/llama_index/tree/main/docs"},"LlamaIndex's doc folder")," to a local folder ",(0,o.kt)("inlineCode",{parentName:"p"},"ask_llamaindex_slack_bot"),"."),(0,o.kt)("p",null,"There're many types of files in the folder. Some files (like ",(0,o.kt)("inlineCode",{parentName:"p"},".py")," or ",(0,o.kt)("inlineCode",{parentName:"p"},".bat"),") do not contain too much context. So, we only want to keep ",(0,o.kt)("inlineCode",{parentName:"p"},".md")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".rst")," files:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Data cleaning\ndir_path = './lidocs'  #local folder of LlamaIndex documentations\nfor root, dirs, files in os.walk(dir_path):\n    for file in files:\n        if file.endswith(('.md', '.rst')):\n            continue\n        else:\n            file_path = os.path.join(root, file)\n            os.remove(file_path)\n")),(0,o.kt)("p",null,"Once the doc folder is clean, it's very convenient to use ",(0,o.kt)("inlineCode",{parentName:"p"},"SimpleDirectoryReader")," function to load the entire folder to ",(0,o.kt)("inlineCode",{parentName:"p"},"lidocs")," object at once."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from llama_index import SimpleDirectoryReader\n\nreader = SimpleDirectoryReader(input_dir="./lidocs", recursive=True)\nlidocs = reader.load_data()\n')),(0,o.kt)("h3",{id:"prep-document-indexing"},"Prep: Document Indexing"),(0,o.kt)("p",null,"Now we're ready to build ",(0,o.kt)("inlineCode",{parentName:"p"},"index"),": dividing each document into chunks and embedding them. ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex")," has a great API for this: ",(0,o.kt)("inlineCode",{parentName:"p"},"VectorStoreIndex.from_documents()"),". Then we store  ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," in files."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import openai\nfrom llama_index import VectorStoreIndex\n\nopenai.api_key = os.getenv('OPENAI_API_KEY')\nindex = VectorStoreIndex.from_documents(lidocs)\n\n# save index to files\nindex.storage_context.persist()\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"storage")," folder automatically appears: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 ask_llamaindex_slack_bot\n\u2502   \u251c\u2500\u2500 storage\n\u2502   \u2502   \u251c\u2500\u2500 docstore.json\n\u2502   \u2502   \u251c\u2500\u2500 graph_store.json\n\u2502   \u2502   \u251c\u2500\u2500 index_store.json\n\u2502   \u2502   \u2514\u2500\u2500 vector_store.json\n\n")),(0,o.kt)("p",null,"All the ",(0,o.kt)("inlineCode",{parentName:"p"},"embedding")," vectors are saved in ",(0,o.kt)("inlineCode",{parentName:"p"},"vector_store.json"),". The file size is 33 MB, which contains a mathematical presentation of the entire LlamaIndex's documentation."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In this step, we use GPT, a commercial model service by OpenAI. "),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Before building the index, make sure you have an OpenAI API key. This step may cost you up to $1 for GPT tokens. To avoid the cost, you can skip this step and download ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/modelstar-labs/querystar-demo/tree/main/ask_llamaindex_slack_bot/storage"},"the ",(0,o.kt)("inlineCode",{parentName:"a"},"storage")," folder  from QueryStar demo repo"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"VectorStoreIndex.from_documents()")," call may take 2-5 mins to finish, highly depending on API latency in your region. "))),(0,o.kt)("h3",{id:"function-development"},"Function Development"),(0,o.kt)("p",null,"With the index file in place, we can finally build the ",(0,o.kt)("inlineCode",{parentName:"p"},"RAG")," function. Again, it's simple with ",(0,o.kt)("inlineCode",{parentName:"p"},"LlamaIndex"),". We just need to load them to the ",(0,o.kt)("inlineCode",{parentName:"p"},"index")," object, and use the built-in query engine to get ",(0,o.kt)("inlineCode",{parentName:"p"},"response"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def ask_llamaindex(question: str):\n\n    # rebuild storage context\n    storage_context = StorageContext.from_defaults(persist_dir="./storage")\n    # load index\n    index = load_index_from_storage(storage_context)\n    query_engine = index.as_query_engine()\n    response = query_engine.query(question)\n\n    return response\n')),(0,o.kt)("p",null,"Now, let's build the bot!"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"trigger-action-based-slack-bot"},"Trigger-Action Based Slack Bot"),(0,o.kt)("img",{src:n(2943).Z,style:{width:500,display:"block",margin:"0 auto"}}),(0,o.kt)("h3",{id:"prep-querystar-setup"},"Prep: QueryStar Setup"),(0,o.kt)("p",null,"QueryStar is a low code Python package to simplify ",(0,o.kt)("inlineCode",{parentName:"p"},"Trigger-Action")," based bot development. It shares the same design philosophy behind ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/streamlit/streamlit"},"Streamlit"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pywebio/PyWebIO"},"PyWebIO")," , ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gradio-app/gradio"},"Gradio"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/greppo-io/greppo"},"Greppo"),": Making it super easy for data teams and Python developers to ship interfaces between human and AI/data. These four projects are used for Web UI, while Querystar is intended for bot development (more in ",(0,o.kt)("a",{parentName:"p",href:"../../introduction"},"the introduce page"),")."),(0,o.kt)("p",null,"Before running any code in this module, please make sure you already ",(0,o.kt)("a",{parentName:"p",href:"../../quickstart/token"},"got a QueryStar token"),", ",(0,o.kt)("a",{parentName:"p",href:"../../quickstart/install"},"installed the library"),", and ",(0,o.kt)("a",{parentName:"p",href:"../../quickstart/coding"},"can run the ",(0,o.kt)("inlineCode",{parentName:"a"},"hello world")," slackbot"),". The setup process should only take you less than 10 mins."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"QueryStar automatically integrate 3rd party API services which also include Slack authorization. So, we do ",(0,o.kt)("strong",{parentName:"p"},"NOT")," need a Slack token here. "),(0,o.kt)("p",{parentName:"admonition"},"QueryStar token is free for 1 Slack workspace connection and unlimited bots in that workspace. ")),(0,o.kt)("h3",{id:"prep-creating-apppy"},"Prep: Creating ",(0,o.kt)("inlineCode",{parentName:"h3"},"app.py")),(0,o.kt)("p",null,"With QueryStar, a bot can be developed out of a single py file. Let's create a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"app.py")," in ",(0,o.kt)("inlineCode",{parentName:"p"},"ask_llamaindex_slack_bot")," folder, imports some packages, and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"ask_llamaindex()")," function here. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# app.py\nimport querystar as qs\nfrom llama_index import StorageContext, load_index_from_storage\nimport os, openai\n\nopenai.api_key = os.getenv('OPENAI_API_KEY')\n\ndef ask_llamaindex(question: str):\n\n    # rebuild storage context\n    storage_context = StorageContext.from_defaults(persist_dir=\"./storage\")\n    # load index\n    index = load_index_from_storage(storage_context)\n    query_engine = index.as_query_engine()\n    response = query_engine.query(question)\n\n    return response\n\n")),(0,o.kt)("h3",{id:"new_message-trigger"},(0,o.kt)("inlineCode",{parentName:"h3"},"new_message()")," Trigger"),(0,o.kt)("p",null,"Let's recap how we designed the trigger in the beginning of the tutorial:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The bot should respond to messages that:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"are sent to a designated channel, AND"),(0,o.kt)("li",{parentName:"ul"},'contain trigger word "ask llama".'))))),(0,o.kt)("p",null,"This Slack message ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger")," can be easily done with ",(0,o.kt)("inlineCode",{parentName:"p"},"triggers.slack.new_message()")," function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"data = qs.triggers.slack.new_message(channel_id='C05PRRJ0H4N',  # channel: llama-qa\n                                     trigger_string='ask llama') \n\n")),(0,o.kt)("p",null,"This script is quite self-explanatory. The bot is set to listen to new Slack messages. When a message matches the filter condition (",(0,o.kt)("inlineCode",{parentName:"p"},"channel_id")," ",(0,o.kt)("em",{parentName:"p"},"AND")," ",(0,o.kt)("inlineCode",{parentName:"p"},"trigger_string"),"), a ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," object of the message will return to variable ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),". "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("details",null,(0,o.kt)("summary",null,"An example message object (click to expand)"),(0,o.kt)("p",null,(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "client_msg_id":"...",\n   "type":"message",\n   "text":"ask llama: ...",\n   "user":"useid...",\n   "ts":"1693582549.746649",\n   "blocks":[...],\n   "team":"...",\n   "thread_ts":"1693536314.270179",\n   "parent_user_id":"...",\n   "channel":"C05PRRJ0H4N",\n   "event_ts":"1693582549.746649",\n   "channel_type":"group"\n}\n'))))),(0,o.kt)("h3",{id:"add_message-action"},(0,o.kt)("inlineCode",{parentName:"h3"},"add_message()")," Action"),(0,o.kt)("p",null,"This is what we designed for the actions:"),(0,o.kt)("blockquote",null,(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"The bot should extract user question from the trigger message, and run the LLM function to generate an answer."),(0,o.kt)("li",{parentName:"ul"},"The bot should post the answer back to the channel. Then, wait for future trigger events."))),(0,o.kt)("p",null,"Let's do it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"question = data.get('text', None)\nanswer = ask_llamaindex(question)\n# send answer to Slack\nqs.actions.slack.add_message(channel_id='C05PRRJ0H4N', message=f'Llama says: {answer}')\n")),(0,o.kt)("p",null,"We first parse the trigger message to get ",(0,o.kt)("inlineCode",{parentName:"p"},"question"),", which will be passed to ",(0,o.kt)("inlineCode",{parentName:"p"},"ask_llamaindex()")," to generate an answer. Then, we use ",(0,o.kt)("inlineCode",{parentName:"p"},"actions.slack.add_message()")," to post the answer back to the same channel. "),(0,o.kt)("p",null,"That's all!"),(0,o.kt)("h3",{id:"end-to-end-test"},"End-to-end Test"),(0,o.kt)("p",null,"Open your terminal, run this command in ",(0,o.kt)("inlineCode",{parentName:"p"},"ask_llamaindex_slack_bot")," folder:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"$ querystar run app.py\n")),(0,o.kt)("p",null,"Go to Slack and post a trigger message. It works \ud83e\udd29\ud83e\udd29\ud83e\udd29"),(0,o.kt)("img",{src:n(8149).Z,style:{width:500,display:"block",margin:"0 auto"}}),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Now, you can invite your entire team join this channel and learn ",(0,o.kt)("inlineCode",{parentName:"strong"},"LlamaIndex")," together!")),(0,o.kt)("hr",null),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("em",{parentName:"p"},"Acknowledgement:"),"\n",(0,o.kt)("em",{parentName:"p"},"Thanks to ",(0,o.kt)("a",{parentName:"em",href:"https://www.linkedin.com/in/dingy/"},"Yi Ding (Head of Typescript and DevRel @LlamaIndex)")," for proofreading!"),"\n",(0,o.kt)("em",{parentName:"p"},"This tutorial is inspired by ",(0,o.kt)("a",{parentName:"em",href:"https://blog.streamlit.io/build-a-chatbot-with-custom-data-sources-powered-by-llamaindex/"},"Build a chatbot with custom data sources, powered by LlamaIndex")," by ",(0,o.kt)("inlineCode",{parentName:"em"},"Streamlit")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"LlamaIndex")," teams."))))}m.isMDXComponent=!0},2943:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/bot-330ad4f94ecfa91eb2086bef800ca9d2.jpg"},8149:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/chat-test-2ba6d8dc39833a22c7b12614a6f539a5.png"},6061:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/code-c09c4829c9e20fa449f1f917778f234d.png"},5708:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rag-diagram-a0bc08b06aee05b8936a30d9cda004c3.jpg"},7645:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/rag-a58dea1c4cd8831479f7ccc7bdc50181.jpg"},8433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/title-e2a9ea722e0ade6cd34da7ad45ce8028.png"}}]);