import Image from "@theme/IdealImage";

# Tracking Brand Sentiment on Social Media

## Objective

Learn how to build a Slack bot that automatically:
- **sends alert when a Redditor discuss `SpaceX`** using QueryStar's `reddit.new_message()` trigger;
- **runs brand sentiment analysis** using OpenAI's GPT model;
- **saves the data to a Google Sheet** using QueryStar's `google_sheets.add_row()` action.


> 
> **Usefulness:** ⭐⭐⭐⭐ | **Difficulty Level:** ⭐
:::note
Source code: https://github.com/modelstar-labs/querystar-demo/tree/main/social_alert
:::

## About the Slack Bot

### Use Cases
Product or marketing teams often need to understand how users perceive a brand or product features. There are several ways, e.g. survey, to collect such data. 

Social media is another data source. QueryStar provides one-liner social media tracking functions. The functions can be used as triggers, and data can be collected using QueryStar actions. Certainly, AI can be used to analyze the data, and provide valuable insights.

In this tutorial, we will track Reddit discussions about `SpaceX`, and analyze sentiment about the brand. 

### Spoiler Alert:
We tracked `SpaceX` mentions on Reddit for 2 days, and found negative posts are 2 times as many as positive ones. The result is interesting, but we cannot draw any meaningful conclusion yet: 
- First off, our sample size, totally 374 posts and comments, is too small. 
- Secondly, LLM cannot 100% correctly classify "brand sentiment", which is largely different than "sentiment" (we will discuss it later). 
- Last but not least, we have to be careful about "vocal minority effect". Sometimes, a small, outspoken subset of users dominates the conversation or garners a significant amount of attention, making it seem as if their views or sentiments represent the majority.

<Image
    img={require("./analysis_result.png")}
    style={{ maxWidth: 500, display: "block", margin: "0 auto" }}
/>

Nonetheless, the social media data collection and analysis, as shown in this tutorial, can be a good start for any team that is tasked to understand how their brand is perceived by the public and make informed decisions based on the learnings.

### Prerequisite

Note that social tracking is a new feature (released on v0.3.14). Make sure to update your package:

```bash
$ pip install -U querystar
```

:::note
If this is your first time using QueryStar, follow these steps to set it up in less than 10 mins.

<details><summary>Set up QueryStar (click to expand)</summary>
<p>

First off, let's [get a QueryStar token](../../quickstart/token), [installed the library](../../quickstart/install), and make sure you can [run the `hello world` Slack bot](../../quickstart/coding). The setup process should only .

Note:

-   QueryStar automatically integrate 3rd party API services which also include Slack authorization, so we do **NOT** need a Slack token here.
-   QueryStar token is free for one Slack workspace connection and unlimited bots in that workspace.

</p>
</details>
:::

---

## Social Media Alert Trigger

QueryStar provides triggers for the following platform:
- Reddit
- Quora
- Hackernews
- Stackexchange (Stackoverflow is also included as a channel)

For easy-of-use, they all have similar API designs and response data structures. 

### Integrating Social Platforms

In this tutorial, we will be tracking Reddit. Go to [QueryStar console](https://app.querystar.io/console), click Reddit to add it as an integration. 

<Image
    img={require("./add_integration.png")}
    style={{ maxWidth: 300, display: "block", margin: "0 auto" }}
/>

Next, go to your console and confirm the integration:

<Image
    img={require("./workspace.png")}
    style={{ maxWidth: 400, display: "block", margin: "0 auto" }}
/>

:::info
Social media tracking is a paid feature on QueryStar. If you're interested to activate it, send us an email at support@querystar.io.
:::

### Setting Up Triggers in Python 
Now, we can easily set up a Reddit trigger and define the keywords we're interested in tracking:

```python
import querystar as qs

post = qs.triggers.reddit.new_message("spacex")
```

This means, every time a new comment that contains "spacex" is posted on Reddit, the data will be returned, e.g.:

```json
{
    "source": "reddit",
    "channel": "r/test",
    "keyword": "ai companion",
    "permalink": "https://www.reddit.com/r/test/comments/...",
    "text": "hello spacex",
    "ts": "2023-09-23T11:23:10Z",
    "type": "comment",
    "user": "username"
}
```
Here is an example of the console log of a trigger event.
<Image
    img={require("./trigger_data.png")}
    style={{ maxWidth: 600, display: "block", margin: "0 auto" }}
/>

## Sentiment Analysis Function

### Prompt Engineering

We use GPT-3.5 to analyze brand sentiment. Before constructing a prompt, we need to make sure what we want LLM to classify is not post sentiment, but brand sentiment. The difference is that, sentiment behind a post can be negative, which may be against other redditors, not the SpaceX brand. For example, this post clearly shows frustration and even anger:

> That was not nearly as clear as you think it was. If I missed what you meant to imply, that is absolutely your fault. Right from your first response to me it seemed like you were a SpaceX hater.

However, the redditor who posted it might just want to defend the brand, so we should label it as a positive brand sentiment.

:::note
Negative post sentiment does not always mean negative brand sentiment.
:::

So, here is the prompt we will be using:

>You're a brand expert, and will be given a speaker note. Analyze if the speaker really likes SpaceX's brand. Brand includes SpaceX's founders, employees, products or business. 
> 
>Output positive if the speaker supports SpaceX brand. 
>Output negative if the speaker clearly dislike SpaceX brand.
>Otherwise, output neutral. 
>
> Note: if a speaker argues with others, without showing position about liking SpaceX or not, then it's neutral. 
>
> Only output positive, negative, neutral. Do not output extra characters. 


The code of sentiment analysis function:

```python
import openai

openai.api_key = "sk-xxx"   # add your own key

def analyze_sentiment(input_text):
    prompt = [
        {
            "role": "system",
            "content": ("You're a brand expert, and will be given a speaker note. "
                        "Analyze if the speaker really likes SpaceX's brand. "
                        "Brand includes SpaceX's founders, employees, products or business.\n"
                        "Output positive if the speaker supports the brand. "
                        "Output negative if the speaker clearly dislike SpaceX brand. "
                        "Otherwise, output neutral.\n"
                        "Note: if a speaker argues with others, without showing position "
                        "about liking SpaceX or not, then it's neutral.\n"
                        "Only output positive, negative, neutral. "
                        )
        },
        {
            "role": "user",
            "content": input_text
        },
    ]

    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=prompt,
        temperature=0,
        max_tokens=10)
    return response.choices[0].message['content']
```

** Now that the LLM function is ready, let's build the bot 💪🏽🤖 **

## Actions

### Send Alerts to Slack

It's convenient to send a real-time alert in a Slack channel so marketing teams can take immediate actions if needed. It can be done using QueryStar [`slack.add_message()` action](https://querystar.io/docs/api/slack/actions#actionsslackadd_message). Here, we send the sentiment result and post url to the channel:

```python
sentiment = analyze_sentiment(post['text'])
qs.actions.slack.add_message(
    channel_id="...", # add your channel id
    text=f"{sentiment} post alert: {post['permalink']}")
```

### Save Results in a Google Spreadsheet

The marketing team may also want to run some batch analysis, and monitor brand sentiment changes over a period of time. We can design a simple data table in Google Spreadsheet:

<Image
    img={require("./data_table.png")}
    style={{ maxWidth: 600, display: "block", margin: "0 auto" }}
/>

In this table, we will add date as well as post content and sentiment result. A data string can be obtained using `datetime`.

```python
from datetime import date

today = date.today()
date_str = today.strftime("%Y-%m-%d")
```

Now, let's call `google_sheet.add_row()` API to save new data in new rows:

```python
qs.actions.google_sheets.add_row(
    spreadsheet_id='...', # add your spreadsheet id here
    worksheet_id='Sheet1',
    data=[[post['text'], date_str, sentiment]])
```

## Result

### Full Source Code
Overall, the entire social alert and analysis workflow can be automated with 48 lines of code:

```python
import querystar as qs
import openai
from datetime import date

openai.api_key = "sk-xxx"   # add your own key

def analyze_sentiment(input_text):
    prompt = [
        {
            "role": "system",
            "content": ("You're a brand expert, and will be given a speaker note. "
                        "Analyze if the speaker really likes SpaceX's brand. "
                        "Brand includes SpaceX's founders, employees, products or business.\n"
                        "Output positive if the speaker supports the brand. "
                        "Output negative if the speaker clearly dislike SpaceX brand. "
                        "Otherwise, output neutral.\n"
                        "Note: if a speaker argues with others, without showing position "
                        "about liking SpaceX or not, then it's neutral.\n"
                        "Only output positive, negative, neutral. "
                        )
        },
        {
            "role": "user",
            "content": input_text
        },
    ]
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=prompt,
        temperature=0,
        max_tokens=500)
    return response.choices[0].message['content']


post = qs.triggers.reddit.new_message("spacex")

sentiment = analyze_sentiment(post['text'])
today = date.today()
date_str = today.strftime("%Y-%m-%d")

qs.actions.slack.add_message(
    channel_id="...", # add your channel id
    text=f"{sentiment} post alert: {post['permalink']}")

qs.actions.google_sheets.add_row(
    spreadsheet_id='...', # add your spreadsheet id here
    worksheet_id='Sheet1',
    data=[[post['text'], date_str, sentiment]])
```

### Run It
Open your terminal and run this command in the folder that contains your `app.py`:

```shell
$ querystar run app.py
```

We have sampled two days of Reddit data and saved it to this Spreadsheet: https://docs.google.com/spreadsheets/d/1ekaZiRV66ghPj6u7BOAAXZZLyv3PYwhp-3C36k4e-1w/edit?usp=sharing

