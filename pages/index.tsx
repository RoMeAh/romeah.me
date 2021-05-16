import { readdirSync } from "fs";
import { GetStaticProps } from "next";
import Link from "next/link";
import Header from "next/head";

export default function Home({ blogs }) {
  return (
    <>
      <Header>
        <title>Ronit "RoMeAh" Rahaman</title>
      </Header>
      <h1>Hello there!</h1>
      {blogs.map((a, i) => (
        <div key={i}>
          <Link href={`blogs/${a}`}>{a}</Link>
        </div>
      ))}
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  let blogs = readdirSync("blogs").map((a) => a.replace(".md", ""));

  return {
    props: {
      blogs,
    },
  };
};
