<template>
  <div class="w-full">
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // skills · ls -lta ~/skills
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/30 ring-default overflow-x-auto', body: 'sm:p-4 font-mono text-[13px] leading-7' }"
      aria-label="Skills directory listing"
    >
      <div class="mb-1 text-dimmed">
        total {{ p.skills.length }}
      </div>

      <div
        v-for="skill in p.skills"
        :key="skill.name"
        class="grid grid-cols-[9.5ch_1.5ch_7ch_9ch_5ch_12ch_minmax(12ch,max-content)_minmax(10ch,1fr)] items-baseline gap-x-[1ch] rounded px-0.5 hover:bg-primary/10"
      >
        <span class="tabular-nums text-dimmed">-rwxr-xr-x</span>
        <span class="tabular-nums text-dimmed">1</span>
        <span class="tabular-nums text-highlighted">holden</span>
        <span class="tabular-nums text-dimmed">{{ skill.category }}</span>
        <span class="tabular-nums text-right text-dimmed">{{ skill.size.padStart(4, " ") }}</span>
        <span class="tabular-nums text-dimmed">{{ skill.mtime }}</span>
        <span class="font-medium">
          <span class="text-primary">{{ skill.name }}</span><span class="text-dimmed">.{{ skill.ext }}</span>
        </span>
        <span class="truncate text-dimmed"># {{ skill.note }}</span>
      </div>
    </UCard>

    <UCard
      variant="outline"
      class="mt-4"
      :ui="{ root: 'bg-elevated/20 ring-dashed', body: 'sm:p-4' }"
    >
      <div class="mb-2 text-xs text-dimmed">
        // groups
      </div>
      <div class="grid grid-cols-1 gap-1.5 text-[12.5px] sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="group in groups"
          :key="group"
          class="flex items-baseline gap-2.5"
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
