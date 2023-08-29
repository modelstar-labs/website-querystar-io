# Quickstart: Install Modelstar and Connect to Snowflake

In just a few minutes you can train and deploy a ML model inside your data warehouses/lakehouse.

## Step #1: Install Modelstar CLI tool

To get started, let's install the Modelstar command line tool. Modelstar is written in Python and distributed through [Pypi](https://pypi.org/), so we can simply use `pip`:  

```shell
$ pip install modelstar
```

:::tip

Modelstar has dependency on `Snowflake Python Connector`, which is [only compatible with Python 3.6-3.9](https://docs.snowflake.com/en/user-guide/python-connector-install.html#python). During our tests on M1 MacOS, we found Python 3.9 is more stable.  

:::

## Step #2: Initialize a Modelstar ML Project

This step creates a local project folder, named **_my_project_**, at the location you are running this command. The folder includes `modelstar.config.yaml` file, some sample data and some internal files.

```shell
$ modelstar init my_project
```

:::tip

`modelstar init <project_name>` is the base command, where <project_name> can be replaced with the name of your choice.

`modelstar init .` can be used to initialize the project inside the current folder location. Running this command will create all the necessary files within the current folder location and name the project using the folder's name.

** For DBT users: ** You can also initialize a Modelstar project inside a DBT project using `modelstar init . `. A more detailed tutorial on how to use DBT to orchestrate Modelstar ML will be posted.
:::

## Step #3: Handshake with Snowflake

#### Config `modelstar.config.yaml`

:::note

This step requires manual editing of a yaml file. Find the file and open it with your favorite editor.

:::

The `modelstar.config.yaml` file is used to set and configure the parameter of modelstar. This file will also be used to enter your credentials to communicate with your data platform.

The following is an example to use a Snowflake account:

```yaml title="./modelstar.config.yaml"
# MODELSTAR CONFIGURATION FILE
---
sessions:
    - name: snowflake-test
      connector: snowflake
      config:
          account: WQA6****
          username: [username]
          password: [password]
          database: MODELSTAR_TEST
          schema: PUBLIC
          stage: test
          warehouse: COMPUTE_WH
```

:::info

These credentials are never shared with Modelstar and only live on your local machine.

:::

:::danger

Don't commit this file to your version control, since it contains sensitive information. The best way is to add `modelstar.config.yaml` and `.modelstar` to `.gitignore` file.

:::

First, you configure a named session, which will contain the details of your account you will be working with. As an example, here we are using a Snowflake account, and naming the session as `snowflake-test`, which contains the account details. You will later use this session name when starting a modelstar session.

#### Ping Snowflake

We can now start a Modelstar session from your terminal. Run the following:

```shell
$ modelstar use snowflake-test
```

:::note

Make sure you are running all the `modelstar` commands from the root of your project folder and have also activated the Python virtual environment that contains the `modelstar` package.

:::

This will give the following output, which shows you the available databases for your named-session, here it is `snowflake-test`.

```
  Setting session with configuration:  snowflake-test

  Loaded session:  snowflake-test

  Showing available databases for config:  snowflake-test

+----------------------+-----------------------+-------------------------------------------------------+--------------+
|      created_on      |         name          |                        origin                         |    owner     |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
| Sep 05, 2022 - 14:19 |    MODELSTAR_TEST     |                                                       | ACCOUNTADMIN |
| Aug 15, 2022 - 23:43 |       SNOWFLAKE       |                SNOWFLAKE.ACCOUNT_USAGE                |              |
| Aug 15, 2022 - 23:43 | SNOWFLAKE_SAMPLE_DATA | SFSALESSHARED.SFC_SAMPLES_AWS_US_WEST_2_2.SAMPLE_DATA | ACCOUNTADMIN |
| Aug 19, 2022 - 17:05 | SNOWPARK_PYTHON_DEMOS |                                                       | ACCOUNTADMIN |
+----------------------+-----------------------+-------------------------------------------------------+--------------+
```

:::tip
**Congratulations!** Modelstar is correctly installed and configured. Now it's ready to use. 

The following sections show an example of using one of the Modelstar ML algorithms to build a time series model. Check our [tutorials](../category/tutorials/) for other examples.

:::
----

## Step #4: Register a Modelstar ML Algorithm

Using the `modelstar` cli you can register a builtin Modelstar Python function as a UDF/Stored-Procedure to your warehouse. Using the command `modelstar register <function_pointer>`. As an example for a Modelstar builtin forecasting function:

```
$ modelstar register forecast:univariate_time_series_forecast
```

After the registration is complete, you get the output with information about the status and, about how to use your UDF and where it is located.

```

  Registering `univariate_time_series_forecast` into MODELSTAR_TEST.PUBLIC of your data warehouse.

+----------------------------------------------------------------+
|                             status                             |
+----------------------------------------------------------------+
| Function UNIVARIATE_TIME_SERIES_FORECAST successfully created. |
+----------------------------------------------------------------+

  Stored Procedure available at:  `MODELSTAR_TEST.PUBLIC`

```

## Step #5: Use this in Snowflake

Use the following command in Snowflake to build the forecasting model (example below uses the sample data uploaded in step #6):

```sql
CALL UNIVARIATE_TIME_SERIES_FORECAST('SALES', 'DS', 'Y', 40, 'M');
```

It means: to predict the next `40` `M` (months) of `Y` value based on historical data in `SALES` table, where `DS` is the time column.

Mode information on this can be found in [**this tutorial**](/docs/tutorials/sales-forecasting-inside-snowflake/) and information about the forecasting model [here](/docs/api/ml-sql-functions/univariate-time-series-forecast/)