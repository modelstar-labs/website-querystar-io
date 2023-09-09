import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
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
                                Workflow Automation and Internal Knowledge Ops
                                is Just A Few Clicks Away
                            </h1>
                            <Link
                                className="inline-block mt-10 mx-auto bg-sky-400 text-lg font-medium
                                rounded-lg px-3 py-1 border-none text-black hover:text-black hover:no-underline no-underline"
                                href="https://calendly.com/querystar/30min"
                                // target="_blank"
                                // rel="noopener noreferrer"
                            >
                                Contact Us
                            </Link>
                        </div>
                        <div className="mt-5 md:mt-0 place-self-center">
                            <img
                                className="mx-auto w-[350px] md:w-[300px] lg:w-[400px]"
                                src={useBaseUrl("/img/pricing_h.png")}
                            />
                        </div>
                    </div>
                    <div className="mt-20 mb-40">
                        <h2 className="text-center">Service Tier</h2>
                        <div class="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-4 gap-y-8">
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h4 className="px-3 py-1 inline-block rounded-md bg-green-200">
                                    Free
                                </h4>
                                <p>
                                    For individuals, peronsal projects, demos
                                    and hackathons
                                </p>
                                <hr />
                                <ul>
                                    <li>One Personal Workspace</li>
                                    <li>1 Knowledge Base</li>
                                    <li>Upto 50MB Static Data Ingestion</li>
                                    <li>Upto 100 Query and Tasks per month</li>
                                </ul>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h4 className="px-3 py-1 inline-block rounded-md bg-violet-200">
                                    Business
                                </h4>
                                <p>
                                    For companies that want to enhance internal
                                    tools with AI features
                                </p>
                                <hr />
                                <ul>
                                    <li>Unlimited Workspaces</li>
                                    <li>Unlimited Knowledge Bases</li>
                                    <li>$1 /MB Data Ingestion (Static+Live)</li>
                                    <li>$10 /1k Query and Task /Mo</li>
                                </ul>
                            </div>
                            <div className="px-5 py-5 bg-white shadow-md rounded-md">
                                <h4 className="px-3 py-1 inline-block rounded-md bg-sky-200">
                                    Self hosted
                                </h4>
                                <p>
                                    Full QueryStar Service running on your
                                    dedicated server
                                </p>
                                <hr />
                                <p className="px-3">
                                    Flexible pricing that scales with your
                                    business
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
