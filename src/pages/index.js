import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageSectionStack from "@site/src/components/HomepageSectionStack";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero", "text-center px-2 text-gray-800")}>
            <div className="container">
                <h1 className={clsx("", "text-center")}>
                    Workflow Automated in a Few Lines of Python
                </h1>
                <p
                    className={clsx(
                        "",
                        "text-center text-black text-2xl font-medium max-w-3/4 mx-auto"
                    )}
                >
                    Build Event-Trigger Based Automation Across Your SaaS Tools
                </p>
                <HomepageSectionStack />
                <div className="mt-14">
                    <a
                        class="button bg-yellow-700 hover:bg-yellow-600 text-white"
                        href="https://calendly.com/querystar/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Book a Demo
                    </a>
                </div>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`${siteConfig.title}`}
            description="Workflow Automated in a Few Lines of Python"
        >
            <HomepageHeader />
            <main className="container text-center">
                <h3>Join our private preview</h3>
                <h3 className="text-gray-800">
                    Contact us at{" "}
                    <a className="text-yellow-800" href="mailto:h@querystar.io">h@querystar.io</a>
                </h3>
            </main>
        </Layout>
    );
}
