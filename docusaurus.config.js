// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Querystar | Build Trigger-Action Based Workflows in a Few Lines of Python",
    tagline:
        "Use one set of APIs to automate workflows across all your SaaS tools. QueryStar Library turns scripts into bots instantly.",
    favicon: "favicon.ico",

    // Set the production url of your site here
    url: "https://querystar.io",
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: "/",

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: "modelstar-labs", // Usually your GitHub org/user name.
    projectName: "website-querystar-io", // Usually your repo name.

    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: "warn",

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: "en",
        locales: ["en"],
    },

    presets: [
        [
            "classic",
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve("./sidebars.js"),
                    showLastUpdateTime: true,
                },
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
                gtag: {
                    trackingID: "G-E66JDLT2VX",
                },
            }),
        ],
    ],

    plugins: [
        // Plugin for TailwindCSS
        async function TailwindCSSPlugin(context, options) {
            return {
                name: "docusaurus-tailwindcss",
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require("tailwindcss"));
                    postcssOptions.plugins.push(require("autoprefixer"));
                    return postcssOptions;
                },
            };
        },
    ],

    themeConfig:
        /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            colorMode: {
                defaultMode: "light",
                disableSwitch: true,
                respectPrefersColorScheme: false,
            },
            // Replace with your project's social card
            image: "og.png",
            metadata: [
                {
                    name: "keywords",
                    content:
                        "workflow, automation, python, trigger, action, saas, tools, api, unified-api, integration, llm, llama-index, langchain, slack, google, gdrive, sheets, knowledge, base",
                },
                {
                    name: "description",
                    content:
                        "Build Trigger-Action Based Workflows in a Few Lines of Python. Use one set of APIs to automate workflows across all your SaaS tools. Out of the box support to build knowledge base from your data.",
                },
                // {
                //     property: "og:title",
                //     content:
                //         "QueryStar: Build Trigger-Action Based Workflows in a Few Lines of Python.",
                // },
                // {
                //     name: "twitter:title",
                //     content:
                //         "QueryStar: Build Trigger-Action Based Workflows in a Few Lines of Python.",
                // },
                // {
                //     property: "og:description",
                //     content:
                //         "QueryStar: Build Trigger-Action Based Workflows in a Few Lines of Python.",
                // },
                // {
                //     name: "twitter:description",
                //     content:
                //         "QueryStar: Build Trigger-Action Based Workflows in a Few Lines of Python.",
                // },
                // {
                //     property: "og:type",
                //     content: "website",
                // },
                // {
                //     property: "og:url",
                //     content: "https://querystar.io",
                // },
                // {
                //     property: "og:image",
                //     content: "https://querystar.io/og.png",
                // },
                // {
                //     name: "twitter:image",
                //     content: "https://querystar.io/og.png",
                // },
                // {
                //     name: "twitter:card",
                //     content: "summary_large_image",
                // },
            ],
            navbar: {
                title: "QueryStar",
                logo: {
                    alt: "QueryStar Logo",
                    src: "logo.png",
                },
                items: [
                    {
                        to: "pricing",
                        position: "right",
                        label: "Pricing",
                    },
                    {
                        type: "docSidebar",
                        sidebarId: "docs",
                        position: "right",
                        label: "Documentation",
                    },
                    {
                        href: "https://github.com/modelstar-labs/querystar",
                        label: "GitHub",
                        position: "right",
                        className: "header-github-link",
                        "aria-label": "GitHub repository",
                    },
                    // {
                    //     to: "https://app.querystar.io",
                    //     label: "Sign in",
                    //     position: "right",
                    //     className:
                    //         "button button--primary button--outline button--md margin-horiz--sm",
                    // },
                    // {
                    //     to: "https://app.fillout.com/t/4Nh5FWvFf7us",
                    //     label: "Sign up to waitlist",
                    //     position: "right",
                    //     className:
                    //         "button button--primary button--md margin-horiz--sm",
                    // },
                ],
            },
            footer: {
                style: "light",
                links: [
                    {
                        title: "Docs",
                        items: [
                            {
                                label: "Quickstart",
                                to: "/docs/introduction/",
                            },
                            {
                                label: "Tutorials",
                                to: "/docs/tutorials/llamaindex-doc-bot",
                            },
                            // {
                            //     label: "API Reference",
                            //     to: "/docs/api",
                            // },
                        ],
                    },
                    {
                        title: "Resources",
                        items: [
                            {
                                label: "GitHub",
                                href: "https://github.com/modelstar-labs/querystar",
                            },
                            {
                                label: "Knowledge Management",
                                to: "/knowledge",
                            },
                        ],
                    },
                    {
                        title: "Legal",
                        items: [
                            {
                                label: "Privacy",
                                to: "/Privacy",
                            },
                            {
                                label: "Terms",
                                to: "/terms",
                            },
                            {
                                label: "Cookie policy",
                                to: "/cookies",
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} QueryStar`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
