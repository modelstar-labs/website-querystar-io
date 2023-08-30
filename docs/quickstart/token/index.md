# 1. Get a QueryStar token (2 mins)

After this section, you will be able to install QueryStar app to your Slack Workplace, and obtain a QueryStar token to develope your own bots. 

:::tip
- It normally takes 2-3 mins to complete.
- Only do this once for every integration.
:::

:::info
**Prerequisite:** A Slack Workspace that allows you to add apps. If not, simply create one for free at https://slack.com/get-started#/createnew
:::

### Step 1: Sign up on `querystar.io`
Come to https://app.querystar.io/signup and follow the instruction to sign up or log in.

### Step 2: Connect to Slack

- In the `Workspace` page, click `Add Integration` button.
  <img src={require("./add-integration-button.png").default} style={{transform:'scale(1)'}} />

- In the next page, click `Connect to Slack` button.
  <img src={require("./connect-slack-button.png").default} style={{transform:'scale(1)'}} />

- You're redirected to the **Slack oauth page**. Select a Slack Workspace you want to add bots at, then click `Allow` to install QueryStar app to the Workspace. 
  <img src={require("./slack-oauth.png").default} style={{width: 300}} />

### Step 3: Get QueryStar token

- Now you're redirected back to the **QueryStar Workspace page**, and should see the status of your integration as `active`.
  <img src={require("./connector-status.png").default} style={{transform:'scale(1)'}} />

- Last step in this section, go to the `Account` page, click the `GENERATE` button, then copy the token.
  <img src={require("./token-gen.png").default} style={{transform:'scale(1)'}} />  
