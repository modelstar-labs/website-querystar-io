# Triggers

### `triggers.slack.new_message()`

#### Description
Listen to new messages that match trigger conditions.

#### Parameters
- `channel_id`: channel id string.
  - Trigger condition: when a new message posted to a channel that matches the given channel id.
  - Optional. Default: `None`.
- `mentioned_user_id`: user id string.
  - Trigger condition: when a user is mentioned in a new message.
  - Optional. Default: `None`.
- `trigger_string`: message string.
  - Trigger condition: when a new message contains the given string.
  - Optional. Default: `None`.
  - It's case sensitive.
- `trigger_for_bot_messages`: boolean.
  - Trigger condition: whether trigger a workflow when new message sent by bots.
  - Optional. Default: `False`.

:::info
If multiple parameters are given, the trigger condition will be constructed as 'condition 1' `AND` 'condition 2'...

Example: `triggers.slack.new_message(channel_id='C12345678', trigger_string='kudos')` -> Trigger condition: new messages that are sent to channel 'C12345678', and contains string "kudos".
:::

:::warning
Be careful to set up the trigger and action in a workflow, it may cause infinite loops. 

Example:
A workflow triggered by bot messages sent in a channel, then send new messages to the same channel.
:::

#### Return
Example data structure:

<details><summary>Expand</summary>
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


<!-- Template

### `querystar.actions.slack.`

#### Description
Get 

#### Parameters
- `p`: query string.

#### Return
Example data structure:

<details><summary>Expand</summary>
<p>

```json

```

</p>
</details>

#### Errors and Warnings
Refer to [this doc from Slack](https://api.slack.com/methods/search.messages#errors). 
-->