// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "AI-Assisted Metrics Store and Analysis Automation",
    tagline:
        "Tired of working on inconsistent KPIs and mundane SQL queries? Start leveraging AI to make data analysis simple and reliable.",
    // favicon: "img/favicon.ico",

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
                docs: false,
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
                },
            }),
        ],
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
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "QueryStar",
                // logo: {
                //     alt: "My Site Logo",
                //     src: "img/logo.svg",
                // },
                items: [
                    {
                        to: "https://app.querystar.io",
                        label: "Sign in",
                        position: "right",
                        className:
                            "button button--primary button--outline button--md margin-horiz--sm",
                    },
                    {
                        to: "https://app.fillout.com/t/4Nh5FWvFf7us",
                        label: "Sign up to waitlist",
                        position: "right",
                        className:
                            "button button--primary button--md margin-horiz--sm",
                    },
                ],
            },
            footer: {
                style: "dark",
                copyright: `Copyright © ${new Date().getFullYear()} QueryStar`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
