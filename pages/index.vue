<template>
  <div class="flex">
    <div class="ms-8">
      <h1 class="text-6xl font-mono font-bold flex ">
        Hi, I'm <span class="text-primary">&nbsp;Holden.</span>
      </h1>
      <span class="text-bold flex w-1/2 mt-4">I am a Lead Full Stack Software Engineer based in Charleston, SC at Adapt Forward.
        I specialize in Vuejs, Nuxt and typescript.  I am a major advocate for Deno which is what hosts this website. </span>
      <div class="mt-16 text-bold text-2xl underline  ">
        C://<ULink
          v-for="link, index in myLinks"
          :key="index"
          :to="link.link"
          :external="true"
        >
          {{ link.label + "/" }}
        </ULink>
      </div>
      <div class="mt-24 me-12">
        <Experience />
      </div>
    </div>
    <div>
      <ProjectTileDisplay :projects="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">
const projects = [
  {
    title: "Trading Calculator for ThetaGang.com",
    description: "This project was built to compile data from thetagang.com and provide statistics and analytics for the ThetaGang community.",
    languages: ["Typescript", "Deno", "Deno Fresh"],
    github: "https://github.com/HoldenMalinchock/thetagang-calc",
    link: "https://theta-gang-calculator.deno.dev",
  },
  {
    title: "Auto Trader and Analyzer - WIP",
    description: "This is a project that is currently in development.  It is a tool that is connected to Alpaca API and runs daily to analyze stocks and make trades based various factors. A website will come later.",
    languages: ["Typescript", "Deno", "Deno Deploy"],
    github: "https://github.com/HoldenMalinchock/trades",
    link: "",
  },
  {
    title: "Hangmang",
    description: "This project is a hangman game website.  It is built with Deno and uses Deno KV storage to create and track games.",
    languages: ["Typescript", "Deno", "Deno Fresh"],
    github: "https://github.com/HoldenMalinchock/hangman",
    link: "",
  },
  {
    title: "Feedback Management",
    description: "This is a simple Nuxt applications that was built for a job interview.  It is a example feedback management system built with Nuxt and Firebase.",
    languages: ["Typescript", "Vuejs", "Nuxt", "Firebase"],
    github: "https://github.com/HoldenMalinchock/feedback-management",
    link: "https://feedback-management-92e11.web.app",
  },
  {
    title: "Algorithm Visualizer",
    description: "This is an application that lets you visualize algorithms.",
    languages: ["Vuejs", "Nuxt", "Typescript"],
    github: "https://github.com/HoldenMalinchock/algo",
    link: "https://algo-visualizer.deno.dev",
  },
]
const myLinks = [
  {
    label: "Github",
    link: "https://github.com/HoldenMalinchock",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/holden-malinchock-0bbbb6140/",
  },
  {
    label: "Email",
    link: "mailto:digits_jigs.07@icloud.com",
  },
  {
    label: "Blog",
    link: "https://holden-m-blog.deno.dev",
  },
]
</script>
