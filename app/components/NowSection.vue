<template>
  <div class="card-glow rounded-2xl p-6 sm:p-8">
    <div class="flex items-center gap-2 mb-4">
      <span class="inline-flex items-center gap-1.5 font-mono text-xs text-rose-300/90 tracking-wider uppercase">
        <span class="size-1.5 rounded-full bg-rose-400 pulse-dot" />
        Now
      </span>
      <span class="text-xs text-zinc-500 font-mono">— {{ asOf }}</span>
    </div>

    <p class="text-zinc-300 leading-relaxed">
      {{ blurb }}
    </p>

    <ul class="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
      <li
        v-for="item in items"
        :key="item.label"
        class="flex items-start gap-2.5 text-zinc-400"
      >
        <UIcon
          :name="item.icon"
          class="size-4 mt-0.5 text-rose-300/70 shrink-0"
        />
        <span><span class="text-zinc-300">{{ item.label }}:</span> {{ item.detail }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const asOf = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })

const blurb = "Building secure pipelines and automation strategies at 3 Reasons LLC, shipping full-stack TypeScript and refining my auto-trading bot. Outside of work: deploying to the edge, learning more about market microstructure and re-reading the Pragmatic Programmer."

const items = [
  { label: "Building", detail: "trading applications and utilies", icon: "i-lucide-hammer" },
  { label: "Working with", detail: "TypeScript, Nuxt 4, Deno Deploy", icon: "i-lucide-cpu" },
  { label: "Learning", detail: "agent orchestration and mcp servers", icon: "i-lucide-book-open" },
  { label: "Based in", detail: "Charleston, SC", icon: "i-lucide-map-pin" },
]
</script>
