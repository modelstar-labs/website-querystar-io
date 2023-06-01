import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
    {
        title: "Centralized Metrics",
        description: (
            <>
                QueryStar simplifies the process of reviewing and merging metric
                updates, ensuring accurate analysis.
            </>
        ),
    },
    {
        title: "Human friendly",
        description: (
            <>
                Both technical and business teams can collaborate on metrics
                definitions and analytics.
            </>
        ),
    },
    {
        title: "Productivity",
        description: (
            <>
                Redundant and mundane tasks are taken care by AI, which frees
                you up to focus time and expertise on high-impact projects.
            </>
        ),
    },
];

function Feature({ title, description }) {
    return (
        <div className={clsx("col col--4 margin-vert--md")}>
            <div className={clsx("col card")} style={{ height: "100%" }}>
                {/* <div className="text--center padding-horiz--md">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div> */}
                <div class="card__header">
                    <h3>{title}</h3>
                </div>
                <div class="card__body">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default function HomepageFeatures() {
    return (
        <div className="container margin-vert--md">
            <section className={clsx("", styles.features)}>
                <div className={clsx("row")}>
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </section>
        </div>
    );
}
