import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import HomepageSectionStack from "@site/src/components/HomepageSectionStack";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero", styles.heroBanner)}>
            <div className="container">
                <h1 className={clsx("", styles.heroTitle)}>
                    AI-Assisted Metrics Store and Analysis Automation
                </h1>
                <p className={clsx("", styles.heroTagline)}>
                    Tired of working on inconsistent KPIs and mundane SQL
                    queries?
                </p>
                <p className={clsx("", styles.heroTagline)}>
                    Start leveraging AI to make data analysis simple and
                    reliable.
                </p>
                {/* <div className="margin-top--lg">YouTube video</div> */}
                <div className="margin-top--lg">
                    <a
                        class="button button--primary"
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
            description="AI-Assisted metrics store and analysis automation"
        >
            <HomepageHeader />
            <main>
                <HomepageSectionStack />
                <HomepageFeatures />
            </main>
        </Layout>
    );
}
