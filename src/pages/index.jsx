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
            // title={`${siteConfig.title}`}
            // description="Workflow Automation in a Few Lines of Python"
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
                                Trigger-Action Based Workflow Automation in a
                                Few Lines of Python
                            </h1>
                            <p>
                                Use one set of APIs to automate workflows across
                                all your SaaS tools. QueryStar Library turns
                                scripts into bots instantly.
                            </p>

                            <Link
                                className="inline-block mt-10 mx-auto bg-sky-400 text-lg font-medium
                                rounded-lg px-3 py-1 border-none text-black hover:text-black hover:no-underline no-underline"
                                to="docs/introduction/"
                            >
                                Get Started Now
                            </Link>
                        </div>
                        <div className="mt-5 md:mt-0 place-self-center">
                            {/* <Image
                                img={require("../assets/images/knowledge_h.png")}
                            /> */}
                            <img
                                className="mx-auto w-[350px] md:w-[300px] lg:w-[400px]"
                                src={useBaseUrl("/img/index_h.png")}
                            />
                        </div>
                    </div>
                    <hr className="mt-20" />
                    <div className="mt-10 md:mt-20 mb-20">
                        <div class="mt-14 grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-4 gap-y-8 md:gap-y-20">
                            {/* part 1  */}
                            <div className="md:order-2 max-w-[400px] place-self-center md:place-self-start h-full">
                                <h3 className="mt-8">
                                    Low code{" "}
                                    <span className="italic text-violet-700">
                                        Minimalism
                                    </span>
                                </h3>
                                <p className="mt-10">
                                    Add a trigger or action in just one API
                                    call. Everything else is taken care of. Not
                                    even an access token is needed.
                                </p>
                            </div>
                            <div className="md:order-1 mt-5 md:mt-0 place-self-center">
                                <img
                                    className="mx-auto w-[350px] lg:w-[400px]"
                                    src={useBaseUrl("/img/index_min.png")}
                                />
                            </div>
                            {/* part 2  */}
                            <div className="md:order-4 max-w-[400px] place-self-center md:place-self-start h-full">
                                <h3 className="mt-8">
                                    Freedom{" "}
                                    <span className="italic text-violet-700">
                                        Maximalism
                                    </span>
                                </h3>
                                <p className="mt-10">
                                    Use your favorite code editor,  Python packages, 
                                    large language models, data APIs, CI/CD. No limit 
                                    on what you can build.
                                </p>
                            </div>
                            <div className="md:order-3 mt-5 md:mt-0 place-self-center">
                                <img
                                    className="mx-auto w-[350px] lg:w-[400px]"
                                    src={useBaseUrl("/img/index_max.png")}
                                />
                            </div>

                            {/* part 3  */}
                            <div className="md:order-6 max-w-[400px] place-self-center md:place-self-start h-full">
                                <h3 className="mt-8">
                                    Automation{" "}
                                    <span className="italic text-violet-700">
                                        Hedonism
                                    </span>
                                </h3>
                                <p className="mt-10">
                                    Enjoy automation, as much as enjoy humanity. 
                                    The more we let SaaS tools and AI do, 
                                    the more we can achieve, as humans.
                                </p>
                                <Link
                                    className="inline-block mt-4 mx-auto text-sm bg-sky-400 hover:bg-sky-500 rounded 
                                    px-2 py-1 border-none text-black hover:text-black hover:no-underline no-underline"
                                    href="https://calendly.com/querystar/30min"
                                    // target="_blank"
                                    //     rel="noopener noreferrer"
                                >
                                    Tell us how to help you achieve more
                                </Link>
                            </div>
                            <div className="md:order-5 mt-5 md:mt-0 place-self-center">
                                <img
                                    className="mx-auto w-[350px] lg:w-[400px]"
                                    src={useBaseUrl("/img/index_hed.png")}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-32 md:mt-20 mb-20 py-6 bg-[#271571] text-white">
                    <div className="container flex flex-col md:flex-row">
                        <div className="px-10 md:px-20 md:mt-[-50px] mb-10 md:mb-0 flex md:flex-col">
                            <img
                                className="w-[100px] md:mb-5 md:ml-4"
                                src={useBaseUrl("/img/index_trend.png")}
                            />
                            <div className="ml-5 mt-5 md:m-0">
                                <Link
                                    className="inline-block button bg-fuchsia-600 "
                                    to="docs/tutorials/llamaindex-doc-bot/"
                                >
                                    Check it out
                                </Link>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-light">
                                QueryStar 🌟 + LlamaIndex 🦙: Slack Bot that
                                Understands Your Data
                            </h1>
                            <ul>
                                <li>Let LLM read tech docs</li>
                                <li>
                                    Make a Slack bot with 24 lines of Python
                                    code
                                </li>
                                <li>
                                    The bot can answer questions about
                                    the docs
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="container text-center">
                    <h4>QueryStar is different</h4>
                    <h2>Comparing Every Workflow</h2>
                    <img
                        className="mx-auto max-w-[300px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px]"
                        src={useBaseUrl("/img/index_comp.png")}
                    />{" "}
                </div>
            </main>
        </Layout>
    );
}
