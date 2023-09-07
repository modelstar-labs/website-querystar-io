import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import Image from "@theme/IdealImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

export default function knowledge() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Workflow Automation in a Few Lines of Python"
        >
            <main
                className="bg-slate-50"
                style={{
                    minHeight: "calc(100vh - 80px)",
                }}
            >
                <div className="container">
                    <div class="mt-14 grid md:grid-cols-2 grid-flow-row gap-4">
                        <div className="sm:px-5 md:px-0 lg:px-10 mt-5">
                            <h1>
                                Developer-First Internal Knowledge Management
                            </h1>
                            <p>
                                QueryStar automatically learns from your
                                internal wikis, technical docs, chat history,
                                tickets, manuals and other unstructured data.
                                The knowledge are exposed to developers through
                                a low code SDK.
                            </p>

                            <a
                                className="button mt-10 mx-auto bg-cyan-700 text-lg rounded-lg px-2 py-1 border-none w-40"
                                href="https://calendly.com/querystar/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Book a demo
                            </a>
                        </div>
                        <div className="mt-5 md:mt-0 place-self-center">
                            {/* <Image
                                img={require("../assets/images/knowledge_h.png")}
                            /> */}
                            <img
                                className="mx-auto w-[350px] md:w-[300px] lg:w-[400px]"
                                src={useBaseUrl("/img/knowledge_h.png")}
                            />
                        </div>
                    </div>
                    <div className="mt-20">
                        <h2 className="text-center">Powerful and Instant AI</h2>
                        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4">
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>😃</h1>
                                <h3>Happy Customer</h3>
                                <p>
                                    Build AI-powered customer support features
                                    and embed on your platform
                                </p>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>🚀</h1>
                                <h3>Competitive Product</h3>
                                <p>
                                    Ship AI features within days, not quarters
                                </p>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>🥇</h1>
                                <h3>Productive Team</h3>
                                <p>
                                    A team with better knowledge access runs
                                    faster
                                </p>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>🧰</h1>
                                <h3>Smart Internal Tools</h3>
                                <p>
                                    First-line doers can easily build tools for
                                    themselves
                                </p>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>🔒</h1>
                                <h3>Easy Access Control</h3>
                                <p>
                                    Everyone sees different results based on
                                    their roles
                                </p>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h1>🏃‍♀️</h1>
                                <h3>Healthy Culture</h3>
                                <p>
                                    Building a culture of knowledge sharing is
                                    not difficult anymore
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-20 mb-20">
                        <h2 className="text-center">
                            Learn How QueryStar Helps{" "}
                            <span>1,000+ Engineering leaders</span>
                        </h2>
                        <div class="mt-14 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-4">
                            <div className="mt-5 md:mt-0 place-self-center">
                                <img
                                    className="mx-auto w-[350px] md:w-[300px] lg:w-[400px]"
                                    src={useBaseUrl("/img/knowledge_t.png")}
                                />
                            </div>
                            <div className="max-w-[400px] flex flex-col justify-between place-self-center md:place-self-start h-full">
                                <p className="text-center mt-10">
                                    A Slack community of 1,000 CTOs and VPs has
                                    6 years of chat history, which is full of
                                    best practices and industry insights.
                                    However, Slack search can no longer serve
                                    them well. QueryStar built a knowledge base
                                    on top of the chat data, and automatically
                                    respond to questions.
                                </p>
                                <a
                                    className="button mt-5 mx-auto bg-cyan-700 text-lg rounded-lg px-2 py-1 border-none w-40"
                                    href="https://calendly.com/querystar/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Book a demo
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
