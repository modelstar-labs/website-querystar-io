import Image from "@theme/IdealImage";

# Actions

### `actions.slack.add_message()`

#### Description

Send a Slack message.

#### Parameters

-   `channel_id`: a channel id string.

    -   Required.
    -   Example: `'a12345678'`
    -   It can be found on this page:

        <Image img={require("./find_channel_id.png")} style={{ maxWidth: 400}} />

-   `message`: body of the message, string.
    -   Required.
-   `thread_ts`: a timestamp string.
    -   Optional. Default: `''` (not a reply in a thread)
    -   Usage: Provide another message's parent ts value to make this message a reply in the same thread.
-   `reply_broadcast`: boolean.
    -   Optional. Default: `False`.
    -   Usage: Used in conjunction with `thread_ts` and indicates whether reply should be made visible to everyone in the channel or conversation.

<!-- - icon_emoji: str = '',
- icon_url: str = '' -->

#### Return

Example data structure:

<details><summary>Expand</summary>
<p>

```json
{
    "ok": true,
    "channel": "C123ABC456",
    "ts": "1503435956.000247",
    "message": {
        "text": "Here's a message for you",
        "username": "ecto1",
        "bot_id": "B123ABC456",
        "attachments": [
            {
                "text": "This is an attachment",
                "id": 1,
                "fallback": "This is an attachment's fallback"
            }
        ],
        "type": "message",
        "subtype": "bot_message",
        "ts": "1503435956.000247"
    }
}
```

</p>
</details>

#### Errors and Warnings

Refer to [this doc from Slack](https://api.slack.com/methods/chat.postMessage#errors).

### `actions.slack.find_message()`

#### Description

Search for messages that matches a query

#### Parameters

-   `query`: query string.
-   `count`: int
    -   Optional. Default: `20`.
-   `sort`: string, `'score'` or `'timestamp'`.
    -   Optional. Default: `'score'`.
-   `sort_direction`: string, `asc` or `'desc'`.
    -   Optional. Default: `'desc'`.

#### Return

Example data structure:

<details><summary>Expand</summary>
<p>

```json
{
    "messages": {
        "matches": [
            {
                "channel": {
                    "id": "C12345678",
                    "is_ext_shared": false,
                    "is_mpim": false,
                    "is_org_shared": false,
                    "is_pending_ext_shared": false,
                    "is_private": false,
                    "is_shared": false,
                    "name": "general",
                    "pending_shared": []
                },
                "iid": "cb64bdaa-c1e8-4631-8a91-0f78080113e9",
                "permalink": "https://hitchhikers.slack.com/archives/C12345678/p1508284197000015",
                "team": "T12345678",
                "text": "The meaning of life the universe and everything is 42.",
                "ts": "1508284197.000015",
                "type": "message",
                "user": "U2U85N1RV",
                "username": "roach"
            },
            {
                "channel": {
                    "id": "C12345678",
                    "is_ext_shared": false,
                    "is_mpim": false,
                    "is_org_shared": false,
                    "is_pending_ext_shared": false,
                    "is_private": false,
                    "is_shared": false,
                    "name": "random",
                    "pending_shared": []
                },
                "iid": "9a00d3c9-bd2d-45b0-988b-6cff99ae2a90",
                "permalink": "https://hitchhikers.slack.com/archives/C12345678/p1508795665000236",
                "team": "T12345678",
                "text": "The meaning of life the universe and everything is 101010",
                "ts": "1508795665.000236",
                "type": "message",
                "user": "",
                "username": "robot overlord"
            }
        ],
        "pagination": {
            "first": 1,
            "last": 2,
            "page": 1,
            "page_count": 1,
            "per_page": 20,
            "total_count": 2
        },
        "paging": {
            "count": 20,
            "page": 1,
            "pages": 1,
            "total": 2
        },
        "total": 2
    },
    "ok": true,
    "query": "The meaning of life the universe and everything"
}
```

</p>
</details>

#### Errors and Warnings

Refer to [this doc from Slack](https://api.slack.com/methods/search.messages#errors).

### `actions.slack.find_user()`

#### Description

Get user information from user id.

#### Parameters

-   `user_id`: user_id string.
    -   Required.

#### Return

Example data structure:

<details><summary>Expand</summary>
<p>

```json
{
    "ok": true,
    "user": {
        "id": "W012A3CDE",
        "team_id": "T012AB3C4",
        "name": "spengler",
        "deleted": false,
        "color": "9f69e7",
        "real_name": "Egon Spengler",
        "tz": "America/Los_Angeles",
        "tz_label": "Pacific Daylight Time",
        "tz_offset": -25200,
        "profile": {
            "avatar_hash": "ge3b51ca72de",
            "status_text": "Print is dead",
            "status_emoji": ":books:",
            "real_name": "Egon Spengler",
            "display_name": "spengler",
            "real_name_normalized": "Egon Spengler",
            "display_name_normalized": "spengler",
            "email": "spengler@ghostbusters.example.com",
            "image_original": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_24": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_32": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_48": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_72": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_192": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "image_512": "https://.../avatar/e3b51ca72dee4ef87916ae2b9240df50.jpg",
            "team": "T012AB3C4"
        },
        "is_admin": true,
        "is_owner": false,
        "is_primary_owner": false,
        "is_restricted": false,
        "is_ultra_restricted": false,
        "is_bot": false,
        "updated": 1502138686,
        "is_app_user": false,
        "has_2fa": false
    }
}
```

</p>
</details>

#### Errors and Warnings

Refer to [this doc from Slack](https://api.slack.com/methods/users.info#errors).

### `actions.slack.find_permalink()`

#### Description

Return a permalink URL of a message based on `channel id` and `timestamp`

#### Parameters

-   `channel_id`: query string.

    -   Required.

-   `message_ts`: timestamp string.
    -   Required.

#### Return

Example data structure:

<details><summary>Expand</summary>
<p>

```json
{
    "ok": true,
    "channel": "C123ABC456",
    "permalink": "https://ghostbusters.slack.com/archives/C1H9RESGA/p135854651500008"
}
```

</p>
</details>

#### Errors and Warnings

Refer to [this doc from Slack](https://api.slack.com/methods/chat.getPermalink#errors).

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
Refer to [this doc from Slack](https://api.slack.com/methods/search.messages#errors). -->
