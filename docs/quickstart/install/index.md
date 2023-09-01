# 2. Install SDK and Set Environment Variable (1 min)

This section guides you through installing QueryStar SDK, and storing QueryStar token as an environment variable. After it, you will be able to do the most interesting part of the work: coding. 

:::tip
- Python best practices recommend managing packages with `virtual environment`. But this won't be covered here.
- Required Python Version: >=3.8
:::

:::info
**Prerequisite:** A QueryStar token. If you don't have one, follow last section.
:::

### Step 1: Let's install the SDK. 

In your terminal, run this command:  

```shell
$ pip install querystar
```

### Step 2: Set environment variable `QUERYSTAR_TOKEN` 

In your terminal, run this command and replace `yourtokenhere` with the token obtained from last section:
```shell
$ export QUERYSTAR_TOKEN=yourtokenhere
```
