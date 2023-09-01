# 3. Develop your bot (5 mins)

This step creates a bot file, then run it with one CLI command.

:::info
**Prerequisite:** QueryStar SDK, and a QueryStar token saved as `QUERYSTAR_TOKEN` as an environment variable.
:::

### Step 1: Create a Python file
Open your favorite code editor, paste the follow script in a file, and name the file `bot.py`.

```python
# bot.py

import querystar as qs

# Triggered by new messages sent to channel #introduction
qs.triggers.slack.new_message(channel_id='C05Q36Z6GGM')

# Send a message to channel #introduction saying 'Hello!'
qs.actions.slack.add_message(channel_id='C05Q36Z6GGM', 
                             message='Hello!')
```

:::note
You can find your channel id here:
<img src={require("./find-channel-id.png").default} style={{width: 400}} />

:::

### Step 2: Add `Querystar app` to the channel
- On the channel config page, under `Integrations` tab, click `Add apps` button.
  <img src={require("./add-app-to-channel.png").default} style={{width: 400}} />

- Then find `QueryStar` in the app list, click the `Add` button.
  <img src={require("./add-button.png").default} style={{width: 400}} />

:::info
Step 2 can be skipped if QueryStar has been already added to the channel of interest. You can verify it here:
  <img src={require("./verify.png").default} style={{width: 400}} />
:::

### Step 3: Run the bot
In your terminal, make sure you are in the folder where `bot.py`` is, then run this command:

```shell
$ querystar run bot.py
```

Now switch to Slack to test. Your bot should respond to any new message now:

<img src={require("./app-running.png").default} style={{width: 400}} />
:::

And, you will see this message in the terminal:
```shell
Running bot.py

Running:: triggers.slack.new_message
Finished:: triggers.slack.new_message
Running:: actions.slack.add_message
Finished:: actions.slack.add_message

```
It means a full cycle of `Trigger -> Action` has been completed.

**🥳 Congratulations to you for making the bot .**

---
More demos can be found in page `Tutorials`.