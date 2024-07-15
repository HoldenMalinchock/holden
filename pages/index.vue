<template>
    <div class="flex">
        <div class="ms-8">
            <h1 class="text-6xl font-mono font-bold flex ">Hi, I'm Holden.</h1>
            <span class="text-bold flex w-1/2 mt-4">I am a Lead Full Stack Software Engineer based in Charleston, SC at Adapt Forward.
                I specialize in Vuejs, Nuxt and typescript.  I also am a major advocate for Deno which is what hosts this website.</span>
        </div>
        <div>
            <ProjectTileDisplay :projects="projects"/>
        </div>
    </div>
</template>

<script setup lang="ts">
const projects = [
    {
        title: "ThetaGang Trading Calculator",
        description: "This project was built to compile data from thetagang.com and provide statistics and analytics for the ThetaGang community.",
        languages: ["Typescript", "Deno", "Deno Fresh"],
        github: "https://github.com/HoldenMalinchock/thetagang-calc",
        link: "https://theta-gang-calculator.deno.dev"
    },
    {
        title: "Auto Trader and Analyzer - WIP",
        description: "This is a project that is currently in development.  It is a tool that is connected to Alpaca API and runs daily to analyze stocks and make trades based various factors. A website will come later.",
        languages: ["Typescript", "Deno", "Deno Deploy"],
        github: "https://github.com/HoldenMalinchock/trades",
        link: ""
    },
    {
        title: "Hangmang",
        description: "This project is a hangman game website.  It is built with Deno and uses Deno KV storage to create and track games.",
        languages: ["Typescript", "Deno", "Deno Fresh"],
        github: "https://github.com/HoldenMalinchock/hangman",
        link: ""
    },
    {
        title: "Feedback Management",
        description: "This is a simple Nuxt applications that was built for a job interview.  It is a example feedback management system built with Nuxt and Firebase.",
        languages: ["Typescript", "Vuejs", "Nuxt", "Firebase"],
        github: "https://github.com/HoldenMalinchock/feedback-management",
        link: "https://feedback-management-92e11.web.app"
    }
]
</script>