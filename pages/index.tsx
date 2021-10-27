import Head from "next/head";
import { VStack } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Info } from "../components/Info";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Project } from "../components/ProjectCard";
import { Footer } from "../components/Footer";

const projects: Project[] = [
  {
    title: "BlazeX",
    technologies: ["Rust", "LLVM"],
    logo: "https://media.discordapp.net/attachments/713410105928056856/837727145060597810/bzs.png",
    link: "https://blazex.blazify.rocks/#/",
    description:
      "BlazeX is a Object Oriented AOT Compiled Language which is a work in progress",
    blurHash: "",
  },
  {
    title: "rustykernel",
    technologies: ["Rust", "kernel"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDneRyMLfzZSEpUiQ86C2UKGkc8oYChvldmw&usqp=CAU",
    link: "https://github.com/RoMeAh-zz/rustykernel",
    description: "A kernel made in rust",
    blurHash: "",
  },
  {
    title: "EvolveJS",
    technologies: ["Typescript", "Javascript", "Discord"],
    logo: "https://media.discordapp.net/attachments/712948948343455856/734829166821900438/EvolveJS.png",
    link: "https://github.com/BlazifyOrg/evolvejs",
    description:
      "EvolveJS is a Discord Library in which bots can be made. We provide high control over the module so that the customizability can be the top of the level. Currently isn't maintained anymore.",
    blurHash: "",
  },
  {
    title: "Blazify Discord Bot",
    technologies: ["Typescript", "Discord.JS"],
    link: "https://github.com/RoMeAh-zz/blazify-discord-bot",
    logo: "https://media.discordapp.net/attachments/836827220496220211/884397983653834762/blazif.png?width=452&height=452",
    description: "First project i ever worked on, a multi-purpose discord bot.",
    blurHash: "",
  },
  {
    title: "RoMeAhX",
    technologies: ["Python"],
    logo: "https://media1.thehungryjpeg.com/thumbs2/800_3656330_on7fdo7vex3a08il6fi1tnyf10dplkpjo4bkzfmt_monogram-ai-logo-design.jpg",
    link: "https://github.com/RoMeAh-zz/romeax",
    description:
      "A simple assistant which listens to commands and obeys them, it can do simple things for now. It's not a serious project, just for fun",
    blurHash: "",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ronit Rahaman</title>
        <meta content="width=device-width" name="viewport" />
        <meta property="og:title" content="Ronit Rahaman" />
        <meta property="og:description" content="Ronit Rahaman" />
        <link
          rel="icon"
          href="https://avatars.githubusercontent.com/u/62307220?s=400&u=753ca830e7e181cf2bbd828819d936bd6eac84c8&v=4"
          type="image/gif"
        />
      </Head>
      <VStack p={5}>
        <Header />
        <Info />
        <Projects projects={projects} />
        <Skills />
        <Footer />
      </VStack>
    </>
  );
}
