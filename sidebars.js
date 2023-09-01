// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */

const sidebars = {
    docs: [
        {
            type: "doc",
            id: "introduction/index",
            label: "Introduction",
        },
        // {
        //     type: "doc",
        //     id: "quickstart/index",
        //     label: "Quickstart",
        // },
        {
            type: "category",
            label: "Quickstart",
        //     link: {
        //         type: "generated-index",
        //         title: "Modelstar AutoML SQL Tutorials",
        //         description:
        //             "Let's learn how to use Modelstar to run Machine Learning with SQL inside Swnoflake!",
        //     },
            collapsed: false,
            items: [
                "quickstart/token/index",
                "quickstart/install/index",
                "quickstart/coding/index",
            ],
        },
        {
            type: "category",
            label: "Tutorials",
            link: {
                type: "generated-index",
                title: "Deploy a Bot to Where You Work",
                description:
                    "Let's learn how to make bots that understand your own data and workflows. Your creativity is the only magic here.",
            },
            collapsed: false,
            items: [{
                type: "category",
                label: "LLM Bot",
                collapsed: true,
                items: [
                    "tutorials/llamaindex-doc-bot/index",
                ],
            },
            ],
        },
        {
            type: "category",
            label: "API Reference",
            // link: {
            //     type: "doc",
            //     id: "api/index",
            // },
            collapsed: true,
            items: [
                {
                    type: "category",
                    label: "Slack",
                    // link: {
                    //     type: "doc",
                    //     id: "api/slack/index",
                    // },
                    collapsed: true,
                    items: [
                        "api/slack/triggers",
                        "api/slack/actions",
                    ],
                },
                {
                    type: "category",
                    label: "CLI",
                    // link: {
                    //     type: "generated-index",
                    //     title: "QueryStar CLI Commands",
                    //     description:
                    //         "A list of all the CLI commands available in QueryStar.",
                    // },
                    collapsed: true,
                    items: [
                        "api/cli/run",                        
                    ],
                },
            ],
        },
    ],
};

module.exports = sidebars;
