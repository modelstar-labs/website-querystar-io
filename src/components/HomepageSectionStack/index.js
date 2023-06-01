import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const StackList = [
    {
        item: "bigquery",
        title: "BigQuery",
        Svg: require("@site/static/img/connectors/bigquery.svg").default,
    },
    {
        item: "snowflake",
        title: "Snowflake",
        Svg: require("@site/static/img/connectors/snowflake.svg").default,
    },
    {
        item: "dremio",
        title: "Dremio",
        Svg: require("@site/static/img/connectors/dremio.svg").default,
    },
    {
        item: "dbt",
        title: "DBT",
        Svg: require("@site/static/img/connectors/dbt.svg").default,
    },
];

function StackItem({ Svg, title }) {
    return (
        <div className="text--center padding-horiz--md">
            {/* <p>{title}</p> */}
            <Svg className={styles.featureSvg} role="img" />
        </div>
    );
}

export default function HomepageSectionStack() {
    return (
        <div className="container">
            <p className={styles.title}>
                QueryStar supports the modern data stack
            </p>
            <section className={styles.features}>
                {StackList.map((props, idx) => (
                    <StackItem key={idx} {...props} />
                ))}
            </section>
        </div>
    );
}
