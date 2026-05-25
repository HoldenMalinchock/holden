<template>
  <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
    <div
      v-for="(tech, index) in stack"
      :key="tech.name"
      class="reveal card-glow rounded-xl px-4 py-5 flex flex-col items-center justify-center gap-2 group"
      :style="{ transitionDelay: `${index * 40}ms` }"
    >
      <UIcon
        :name="tech.icon"
        class="size-7 text-zinc-300 group-hover:text-rose-300 transition-colors"
      />
      <span class="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors">
        {{ tech.name }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
const stack = [
  { name: "TypeScript", icon: "i-simple-icons-typescript" },
  { name: "Vue", icon: "i-simple-icons-vuedotjs" },
  { name: "Nuxt", icon: "i-simple-icons-nuxtdotjs" },
  { name: "Python", icon: "i-simple-icons-python" },
  { name: "Deno", icon: "i-simple-icons-deno" },
  { name: "Node.js", icon: "i-simple-icons-nodedotjs" },
  { name: "Postgres", icon: "i-simple-icons-postgresql" },
  { name: "Docker", icon: "i-simple-icons-docker" },
  { name: "Tailwind", icon: "i-simple-icons-tailwindcss" },
  { name: "Elasticsearch", icon: "i-simple-icons-elasticsearch" },
]
</script>
