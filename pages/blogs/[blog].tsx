import { readdirSync, readFileSync } from "fs";
import { GetStaticPaths, GetStaticProps } from "next";
import { join } from "path";
import marked from "marked";
import matter from "gray-matter";
import React from "react";
import Head from "next/head";

export default function Blog({ blog, data }) {
  return (
    <>
      <Head>
        <title>{data.title}</title>
        <meta title="Description" content={data.descriptiom} />
      </Head>
      <div dangerouslySetInnerHTML={{ __html: blog }} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = readdirSync("blogs").map((a) => ({
    params: { blog: a.replace(".md", "") },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  let raw = readFileSync(
    join("blogs", (context.params?.blog as string) + ".md")
  ).toString();
  let { content, data } = matter(raw);
  let md = marked(content);

  return {
    props: {
      blog: md,
      data,
    },
  };
};
