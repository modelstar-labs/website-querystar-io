"use strict";(self.webpackChunkwebsite_querystar_io=self.webpackChunkwebsite_querystar_io||[]).push([[73],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6121:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i="3. Develop your bot (5 mins)",s={unversionedId:"quickstart/coding/index",id:"quickstart/coding/index",title:"3. Develop your bot (5 mins)",description:"This step creates a bot file, then run it with one CLI command.",source:"@site/docs/quickstart/coding/index.md",sourceDirName:"quickstart/coding",slug:"/quickstart/coding/",permalink:"/docs/quickstart/coding/",draft:!1,tags:[],version:"current",lastUpdatedAt:1693377661,formattedLastUpdatedAt:"Aug 30, 2023",frontMatter:{},sidebar:"docs",previous:{title:"2. Install SDK and Set Environment Variable (1 min)",permalink:"/docs/quickstart/install/"},next:{title:"Tutorials",permalink:"/docs/category/tutorials"}},l={},p=[{value:"Step 1: Create a Python file",id:"step-1-create-a-python-file",level:3},{value:"Step 2: Add <code>Querystar app</code> to the channel",id:"step-2-add-querystar-app-to-the-channel",level:3},{value:"Step 3: Run the bot",id:"step-3-run-the-bot",level:3}],c={toc:p},d="wrapper";function u(e){let{components:t,...o}=e;return(0,r.kt)(d,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"3-develop-your-bot-5-mins"},"3. Develop your bot (5 mins)"),(0,r.kt)("p",null,"This step creates a bot file, then run it with one CLI command."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"Prerequisite:")," QueryStar SDK, and a QueryStar token saved as ",(0,r.kt)("inlineCode",{parentName:"p"},"QUERYSTAR_TOKEN")," as an environment variable.")),(0,r.kt)("h3",{id:"step-1-create-a-python-file"},"Step 1: Create a Python file"),(0,r.kt)("p",null,"Open your favorite code editor, paste the follow script in a file, and name the file ",(0,r.kt)("inlineCode",{parentName:"p"},"bot.py"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# bot.py\n\nimport querystar as qs\n\n# Triggered by new messages sent to channel #introduction\nqs.triggers.slack.new_message(channel_id='C05Q36Z6GGM')\n\n# Send a message to channel #introduction saying 'Hello!'\nqs.actions.slack.add_message(channel_id='C05Q36Z6GGM', \n                             message='Hello!')\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can find your channel id here:"),(0,r.kt)("img",{src:n(5664).Z,style:{width:400}})),(0,r.kt)("h3",{id:"step-2-add-querystar-app-to-the-channel"},"Step 2: Add ",(0,r.kt)("inlineCode",{parentName:"h3"},"Querystar app")," to the channel"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"On the channel config page, under ",(0,r.kt)("inlineCode",{parentName:"p"},"Integrations")," tab, click ",(0,r.kt)("inlineCode",{parentName:"p"},"Add apps")," button."),(0,r.kt)("img",{src:n(2927).Z,style:{width:400}})),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Then find ",(0,r.kt)("inlineCode",{parentName:"p"},"QueryStar")," in the app list, click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Add")," button."),(0,r.kt)("img",{src:n(8415).Z,style:{width:400}}))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Step 2 can be skipped if QueryStar has been already added to the channel of interest. You can verify it here:"),"  ",(0,r.kt)("img",{src:n(433).Z,style:{width:400}})),(0,r.kt)("h3",{id:"step-3-run-the-bot"},"Step 3: Run the bot"),(0,r.kt)("p",null,"In your terminal, make sure you are in the folder where `bot.py`` is, then run this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ querystar run bot.py\n")),(0,r.kt)("p",null,"Now switch to Slack to test. Your bot should respond to any new message now:"),(0,r.kt)("img",{src:n(6551).Z,style:{width:400}}),":::",(0,r.kt)("p",null,"And, you will see this message in the terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"Running bot.py\n\nRunning:: triggers.slack.new_message\nFinished:: triggers.slack.new_message\nRunning:: actions.slack.add_message\nFinished:: actions.slack.add_message\n\n")),(0,r.kt)("p",null,"It means a full cycle of ",(0,r.kt)("inlineCode",{parentName:"p"},"Trigger -> Action")," has been completed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\ud83e\udd73 Congratulations to you for making the bot .")),(0,r.kt)("hr",null),(0,r.kt)("p",null,"More demos can be found in page ",(0,r.kt)("inlineCode",{parentName:"p"},"Tutorials"),"."))}u.isMDXComponent=!0},2927:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-app-to-channel-615ff065203361193a8dbafe7ac36cc9.png"},8415:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/add-button-7faab3e6929fb5efa3f3c83e6e7112b2.png"},6551:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/app-running-971a7d50de8e3d68c090da573f3102b3.png"},5664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/find-channel-id-b7335384bfb4e1305d89a168cdb2e7ef.png"},433:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/verify-8bf60d42aa5b828dda7c4ad120714ead.png"}}]);