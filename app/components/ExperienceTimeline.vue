<template>
  <ol class="relative border-l border-zinc-800/80 ml-4">
    <li
      v-for="(exp, index) in experiences"
      :key="index"
      class="reveal mb-10 ml-12 last:mb-0"
      :style="{ transitionDelay: `${index * 80}ms` }"
    >
      <span
        class="absolute -left-[34px] top-5 z-10 inline-flex items-center justify-center px-2 py-1 rounded-md bg-zinc-950 font-mono text-[11px] tracking-wider"
        :class="index === 0
          ? 'text-rose-200 border border-rose-500/50 shadow-[0_0_18px_-4px_rgba(244,63,94,0.55)]'
          : 'text-zinc-400 border border-zinc-800'"
      >
        <span
          v-if="index === 0"
          class="mr-1.5 size-1.5 rounded-full bg-rose-400 pulse-dot"
        />
        {{ exp.startYear }}
      </span>

      <div class="card-glow rounded-2xl p-6">
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <div>
            <h3 class="text-lg font-semibold text-zinc-100">
              {{ exp.title }}
            </h3>
            <p class="text-sm text-rose-300/90 font-medium">
              {{ exp.company }}
            </p>
          </div>
          <div class="text-xs font-mono text-zinc-400">
            <span>{{ exp.date }}</span>
            <span class="mx-2 text-zinc-600">·</span>
            <span>{{ exp.location }}</span>
          </div>
        </div>
        <p class="mt-3 text-sm text-zinc-400 leading-relaxed">
          {{ exp.description }}
        </p>
        <div class="mt-4 flex flex-wrap gap-2">
          <span
            v-for="tech in exp.technologies"
            :key="tech"
            class="px-2.5 py-1 text-xs font-mono rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>
    </li>
  </ol>
</template>

<script setup lang="ts">
const experiences = [
  {
    title: "Senior Full Stack Software Engineer",
    company: "3 Reasons LLC",
    location: "Charleston, SC",
    date: "2026 — Present",
    startYear: "2026",
    description: "Designing and building modern full-stack applications, driving technical direction and delivering high-impact features with a focus on performance, DX, and clean architecture.",
    technologies: ["TypeScript", "Python", "DevSecOps", "Elasticsearch"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Adapt Forward",
    location: "Charleston, SC",
    date: "2024 — 2026",
    startYear: "2024",
    description: "Led a small team of developers across Nuxt, TypeScript and Python. Maintained a mid-scale Python application and delivered new greenfield apps from architecture through deployment.",
    technologies: ["TypeScript", "Python", "DevSecOps", "Elasticsearch"],
  },
  {
    title: "Full Stack Software Engineer",
    company: "Praxis Engineering",
    location: "Chantilly, VA",
    date: "2022 — 2024",
    startYear: "2022",
    description: "Built the data analytics surface of a large-scale Vue application, including multiple custom components for advanced data visualization at scale.",
    technologies: ["Vue", "TypeScript", "Elasticsearch", "MongoDB"],
  },
  {
    title: "Software Engineer II",
    company: "Verisign",
    location: "Reston, VA",
    date: "2020 — 2022",
    startYear: "2020",
    description: "Operations engineering: upgraded and maintained a mid-scale Python application from Python 2 to 3, and designed and built an automated firewall rule system.",
    technologies: ["Python", "Flask", "Jenkins", "Groovy"],
  },
]
</script>
