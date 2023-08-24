import React from "react";

const StackList = [
    {
        item: "slack",
        title: "Slack",
        Svg: require("@site/static/img/connectors/slack.svg").default,
    },
    {
        item: "sheets",
        title: "Google Sheets",
        Svg: require("@site/static/img/connectors/sheets.svg").default,
    },
    {
        item: "openai",
        title: "OpenAI",
        Svg: require("@site/static/img/connectors/openai.svg").default,
    },
    {
        item: "gmail",
        title: "Gmail",
        Svg: require("@site/static/img/connectors/gmail.svg").default,
    },
    {
        item: "notion",
        title: "Notion",
        Svg: require("@site/static/img/connectors/notion.svg").default,
    },
];

function StackItem({ Svg, title }) {
    return (
        <div className="text-center px-5">
            {/* <p>{title}</p> */}
            <Svg className="h-[50px] w-[50px]" role="img" />
        </div>
    );
}

export default function HomepageSectionStack() {
    return (
        <div className="container mt-14">
            <section className="flex flex-row items-center justify-center w-full pc-2 py-2">
                {StackList.map((props, idx) => (
                    <StackItem key={idx} {...props} />
                ))}
            </section>
        </div>
    );
}
