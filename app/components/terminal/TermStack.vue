<template>
  <div class="w-full max-w-none">
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // skills · ls -lta ~/skills
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/55 ring-white/10 overflow-x-auto', body: 'sm:p-5 font-mono text-sm leading-8' }"
      aria-label="Skills directory listing"
    >
      <div class="mb-2 text-dimmed">
        total {{ p.skills.length }}
      </div>

      <!-- min-w keeps chmod/mode columns from collapsing; scroll horizontally if needed -->
      <div class="min-w-[56rem]">
        <div
          v-for="skill in p.skills"
          :key="skill.name"
          class="grid grid-cols-[10ch_2ch_8ch_11ch_6ch_13ch_18ch_minmax(14ch,1fr)] items-baseline gap-x-3 whitespace-nowrap rounded px-1 hover:bg-primary/10"
        >
          <span class="shrink-0 tabular-nums text-dimmed">-rwxr-xr-x</span>
          <span class="shrink-0 tabular-nums text-dimmed">1</span>
          <span class="shrink-0 tabular-nums text-highlighted">holden</span>
          <span class="shrink-0 tabular-nums text-dimmed">{{ skill.category.padEnd(10, " ") }}</span>
          <span class="shrink-0 tabular-nums text-right text-dimmed">{{ skill.size.padStart(4, " ") }}</span>
          <span class="shrink-0 tabular-nums text-dimmed">{{ skill.mtime }}</span>
          <span class="shrink-0 font-medium">
            <span class="text-primary">{{ skill.name }}</span><span class="text-dimmed">.{{ skill.ext }}</span>
          </span>
          <span class="min-w-0 truncate text-dimmed"># {{ skill.note }}</span>
        </div>
      </div>
    </UCard>

    <UCard
      variant="outline"
      class="mt-4"
      :ui="{ root: 'bg-black/40 ring-white/10', body: 'sm:p-4' }"
    >
      <div class="mb-2 text-xs text-dimmed">
        // groups
      </div>
      <div class="grid grid-cols-1 gap-1.5 text-sm sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in groups"
          :key="group"
          class="flex items-baseline gap-2.5 whitespace-nowrap font-mono"
        >
          <span class="text-dimmed">drwxr-xr-x</span>
          <span class="text-primary">{{ group }}/</span>
          <span class="text-dimmed">{{ countIn(group) }}</span>
        </div>
      </div>
    </UCard>

    <p class="mt-3 text-xs text-dimmed">
      sorted like <span class="text-primary">ls -lt</span> · most-reached tools first · frontend · backend · infra
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "~/composables/usePortfolio"

const p = usePortfolio()

const groups = computed(() => {
  const seen = new Set<Skill["category"]>()
  for (const s of p.skills) seen.add(s.category)
  return [...seen]
})

function countIn(group: Skill["category"]) {
  return p.skills.filter(s => s.category === group).length
}
</script>
