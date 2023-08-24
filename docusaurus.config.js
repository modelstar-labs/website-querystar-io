// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: "Workflow Automation in a Few Lines of Python",
    tagline: "Build Event-Trigger Based Automation Across Your SaaS Tools.",
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
                docs: false,
                blog: false,
                theme: {
                    customCss: require.resolve("./src/css/custom.css"),
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
            image: "img/docusaurus-social-card.jpg",
            navbar: {
                title: "QueryStar",
                logo: {
                    alt: "QueryStar Logo",
                    src: "logo.png",
                },
                // items: [
                //     {
                //         to: "https://app.querystar.io",
                //         label: "Sign in",
                //         position: "right",
                //         className:
                //             "button button--primary button--outline button--md margin-horiz--sm",
                //     },
                //     {
                //         to: "https://app.fillout.com/t/4Nh5FWvFf7us",
                //         label: "Sign up to waitlist",
                //         position: "right",
                //         className:
                //             "button button--primary button--md margin-horiz--sm",
                //     },
                // ],
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
