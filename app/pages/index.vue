<template>
  <div class="relative min-h-screen overflow-x-hidden">
    <AnimatedBackground />

    <main class="mx-auto max-w-5xl px-6 sm:px-10 py-20 sm:py-32">
      <!-- Hero -->
      <section class="reveal">
        <h1 class="text-5xl sm:text-7xl font-bold tracking-tight leading-[1.05]">
          <span class="block text-zinc-100">Hi, I'm</span>
          <span class="block gradient-text font-mono">Holden.</span>
        </h1>

        <p class="mt-8 max-w-2xl text-lg sm:text-xl text-zinc-300 leading-relaxed">
          Senior Software Engineer at
          <a
            href="#"
            class="text-rose-300 hover:text-rose-200 underline-offset-4 hover:underline transition"
          >3 Reasons LLC</a>,
          based in Charleston, SC. I build modern full-stack applications with
          <span class="text-zinc-100 font-medium">Vue</span>,
          <span class="text-zinc-100 font-medium">Nuxt</span>, and
          <span class="text-zinc-100 font-medium">TypeScript</span> — and I'm a major advocate
          for <span class="text-zinc-100 font-medium">Deno</span>, which hosts this site.
        </p>

        <div class="mt-10 flex flex-wrap gap-3">
          <a
            v-for="link in socialLinks"
            :key="link.label"
            :href="link.href"
            target="_blank"
            rel="noopener"
            class="pill text-zinc-200 hover:text-rose-200"
          >
            <UIcon
              :name="link.icon"
              class="size-4"
            />
            {{ link.label }}
          </a>
        </div>
      </section>

      <!-- Now -->
      <section class="mt-16 sm:mt-20 reveal">
        <NowSection />
      </section>

      <!-- Divider -->
      <div class="my-24 sm:my-32 flex items-center gap-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <span class="font-mono text-xs text-zinc-500 tracking-widest">EXPERIENCE</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <!-- Experience -->
      <section>
        <div class="reveal mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-zinc-100">
            Where I've worked
          </h2>
          <p class="mt-2 text-zinc-400">
            A timeline of the teams and problems I've shipped against.
          </p>
        </div>
        <ExperienceTimeline />
      </section>

      <!-- Divider -->
      <div class="my-24 sm:my-32 flex items-center gap-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <span class="font-mono text-xs text-zinc-500 tracking-widest">STACK</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <!-- Tech Stack -->
      <section>
        <div class="reveal mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-zinc-100">
            Tech I work with
          </h2>
          <p class="mt-2 text-zinc-400">
            The tools I reach for day-to-day — across frontend, backend, and infra.
          </p>
        </div>
        <TechStack />
      </section>

      <!-- Divider -->
      <div class="my-24 sm:my-32 flex items-center gap-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <span class="font-mono text-xs text-zinc-500 tracking-widest">PROJECTS</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <!-- Projects -->
      <section>
        <div class="reveal mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-zinc-100">
            Things I've built
          </h2>
          <p class="mt-2 text-zinc-400">
            Side projects and experiments — mostly live, mostly in TypeScript or Deno.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            class="reveal"
            :style="{ transitionDelay: `${index * 80}ms` }"
          >
            <ProjectCard v-bind="project" />
          </div>
        </div>
      </section>

      <!-- Divider -->
      <div class="my-24 sm:my-32 flex items-center gap-4">
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <span class="font-mono text-xs text-zinc-500 tracking-widest">WRITING</span>
        <div class="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
      </div>

      <!-- Blog -->
      <section>
        <div class="reveal mb-10">
          <h2 class="text-3xl sm:text-4xl font-bold text-zinc-100">
            Thoughts &amp; writing
          </h2>
          <p class="mt-2 text-zinc-400">
            Notes from the field on engineering, tooling, and the occasional rant.
          </p>
        </div>
        <BlogPosts />
      </section>

      <!-- Contact CTA -->
      <section class="mt-24 sm:mt-32 reveal">
        <ContactCTA />
      </section>

      <!-- Footer -->
      <footer class="mt-20 pt-10 border-t border-zinc-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-zinc-500">
        <div class="font-mono">
          © {{ new Date().getFullYear() }} Holden Malinchock
        </div>
        <div class="font-mono text-xs">
          Built with Nuxt 4 · Hosted on Deno Deploy
        </div>
      </footer>
    </main>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Holden Malinchock — Senior Software Engineer",
  meta: [
    {
      name: "description",
      content: "Senior Software Engineer at 3 Reasons LLC. Building modern full-stack apps with Vue, Nuxt, TypeScript, and Deno.",
    },
    { name: "theme-color", content: "#09090b" },
  ],
})

useReveal()

const socialLinks = [
  { label: "GitHub", href: "https://github.com/HoldenMalinchock", icon: "i-lucide-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/holden-malinchock-0bbbb6140/", icon: "i-lucide-linkedin" },
  { label: "Email", href: "mailto:digits_jigs.07@icloud.com", icon: "i-lucide-mail" },
  { label: "Blog", href: "https://holden-blog.hmalinch.deno.net", icon: "i-lucide-book-open" },
]

const projects = [
  {
    title: "Trading Dashboard",
    description: "Live dashboard for my Auto Trader: portfolio value and all-time return up top, a full holdings table with cost basis and per-position P&L, and a running log of executed trades.",
    languages: ["TypeScript", "Nuxt", "Deno", "Deno Deploy"],
    github: "https://github.com/HoldenMalinchock/trading-dashboard",
    link: "https://trading-dashboard.hmalinch.deno.net",
  },
  {
    title: "Auto Trader & Analyzer",
    description: "Connects to the Alpaca API and runs daily to analyze stocks and place trades based on a set of strategy signals. The all-time return shown is from this bot — visualized in the Trading Dashboard.",
    languages: ["TypeScript", "Deno", "Deno Deploy"],
    github: "https://github.com/HoldenMalinchock/trades",
    status: "Live",
    showTradingPercent: true,
  },
  {
    title: "Trading Calculator for ThetaGang.com",
    description: "Compiles data from thetagang.com for analysis of stock trades.",
    languages: ["TypeScript", "Deno", "Fresh"],
    github: "https://github.com/HoldenMalinchock/thetagang-calc",
    link: "https://theta-gang-calculator.deno.dev",
  },
  {
    title: "Algorithm Visualizer",
    description: "An interactive sandbox for visualizing classic algorithms step-by-step. Great for refreshing fundamentals or teaching them.",
    languages: ["Vue", "Nuxt", "TypeScript"],
    github: "https://github.com/HoldenMalinchock/algo",
    link: "https://algo-visualizer.deno.dev",
  },
]
</script>
