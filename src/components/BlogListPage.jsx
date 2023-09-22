import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import {
    PageMetadata,
    HtmlClassNameProvider,
    ThemeClassNames,
} from "@docusaurus/theme-common";
import BlogLayout from "@theme/BlogLayout";
import BlogListPaginator from "@theme/BlogListPaginator";
import SearchMetadata from "@theme/SearchMetadata";
import Link from "@docusaurus/Link";

function BlogListPageMetadata(props) {
    const { metadata } = props;
    const {
        siteConfig: { title: siteTitle },
    } = useDocusaurusContext();
    const { blogDescription, blogTitle, permalink } = metadata;
    const isBlogOnlyMode = permalink === "/";
    const title = isBlogOnlyMode ? siteTitle : blogTitle;
    return (
        <>
            <PageMetadata title={title} description={blogDescription} />
            <SearchMetadata tag="blog_posts_list" />
        </>
    );
}

function BlogPostListItem({ post }) {
    console.log(post);
    return (
        <div className="px-3 py-3 border border-solid border-slate-300 rounded-md hover:shadow-md">
            <Link
                to={post.content.metadata.permalink}
                className={"no-underline hover:no-underline text-slate-600"}
            >
                <h3 className="">{post.content.metadata.title}</h3>
                <p className="text-sm">{post.content.metadata.description}</p>
            </Link>
            <p
                className="text-xs"
                style={{ color: "var(--ifm-color-emphasis-600)" }}
            >
                {post.content.metadata.formattedDate}
            </p>
            <div className="flex flex-row">
                {post.content.metadata.authors.map((author, idx) => (
                    <div className="flex flex-row items-center mr-5" key={idx}>
                        <img
                            src={author.imageURL}
                            alt={author.name}
                            className="w-6 h-6 rounded-full mr-1"
                        />
                        <p className="text-xs my-0">{author.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

function BlogListPageContent(props) {
    const { metadata, items, sidebar } = props;
    return (
        <BlogLayout sidebar={sidebar}>
            <div className="container flex flex-col">
                <h1 className="mb-10">Blog posts</h1>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {items.map((item, idx) => (
                        <BlogPostListItem post={item} key={idx} />
                    ))}
                </div>
            </div>
            <BlogListPaginator metadata={metadata} />
        </BlogLayout>
    );
}

export default function BlogListPage(props) {
    return (
        <HtmlClassNameProvider
            className={clsx(
                ThemeClassNames.wrapper.blogPages,
                ThemeClassNames.page.blogListPage
            )}
        >
            <BlogListPageMetadata {...props} />
            <BlogListPageContent {...props} />
        </HtmlClassNameProvider>
    );
}
