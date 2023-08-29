// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    docs: [
        {
            type: "doc",
            id: "introduction/index",
            label: "Introduction",
        },
        {
            type: "doc",
            id: "quickstart/index",
            label: "Quickstart",
        },
        // {
        //     type: "category",
        //     label: "Tutorials",
        //     link: {
        //         type: "generated-index",
        //         title: "Modelstar AutoML SQL Tutorials",
        //         description:
        //             "Let's learn how to use Modelstar to run Machine Learning with SQL inside Swnoflake!",
        //     },
        //     collapsed: false,
        //     items: [
        //         "tutorials/sales-forecasting-inside-snowflake/index",
        //         "tutorials/churn-prediction-inside-snowflake/index",
        //     ],
        // },
        {
            type: "category",
            label: "QueryStar API",
            link: {
                type: "doc",
                id: "api/index",
            },
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "CLI",
                    link: {
                        type: "generated-index",
                        title: "QueryStar CLI Commands",
                        description:
                            "A list of all the CLI commands available in QueryStar.",
                    },
                    collapsed: true,
                    items: [
                        "api/cli/run",                        
                    ],
                },
                {
                    type: "category",
                    label: "Slack",
                    link: {
                        type: "doc",
                        id: "api/slack/index",
                    },
                    collapsed: true,
                    items: [
                        "api/slack/actions",
                        "api/slack/triggers",
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
