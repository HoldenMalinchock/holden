<template>
  <div class="w-full max-w-none">
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // skills · ls -lta ~/skills
    </div>

    <!-- Mobile: stacked skill cards (readable without horizontal scroll) -->
    <div class="grid gap-2 md:hidden">
      <UCard
        v-for="skill in portfolio.skills"
        :key="skill.name"
        variant="subtle"
        :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5' }"
      >
        <div class="flex items-start justify-between gap-2">
          <div class="min-w-0">
            <div class="font-medium">
              <span class="text-primary">{{ skill.name }}</span><span class="text-dimmed">.{{ skill.ext }}</span>
            </div>
            <div class="mt-0.5 text-xs text-muted">
              {{ skill.note }}
            </div>
          </div>
          <UBadge
            color="primary"
            variant="subtle"
            size="sm"
            :label="skill.category"
          />
        </div>
        <div class="mt-2 flex flex-wrap gap-x-3 gap-y-0.5 font-mono text-[11px] text-dimmed">
          <span>{{ skill.size }}</span>
          <span>{{ skill.mtime }}</span>
          <span class="text-highlighted/70">holden</span>
        </div>
      </UCard>
    </div>

    <!-- Desktop / tablet: full ls -lta table -->
    <UCard
      variant="subtle"
      class="hidden md:block"
      :ui="{ root: 'bg-black/55 ring-white/10 overflow-x-auto', body: 'sm:p-5 font-mono text-sm leading-8' }"
      aria-label="Skills directory listing"
    >
      <div class="mb-2 text-dimmed">
        total {{ portfolio.skills.length }}
      </div>

      <div class="min-w-[56rem]">
        <div
          v-for="skill in portfolio.skills"
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
      :ui="{ root: 'bg-black/40 ring-white/10', body: 'p-3.5 sm:p-4' }"
    >
      <div class="mb-2 text-xs text-dimmed">
        // groups
      </div>
      <div class="grid grid-cols-2 gap-1.5 text-xs sm:grid-cols-3 sm:text-sm">
        <div
          v-for="group in groups"
          :key="group"
          class="flex items-baseline gap-2 whitespace-nowrap font-mono"
        >
          <span class="hidden text-dimmed sm:inline">drwxr-xr-x</span>
          <span class="text-primary">{{ group }}/</span>
          <span class="text-dimmed">{{ countIn(group) }}</span>
        </div>
      </div>
    </UCard>

    <p class="mt-3 text-xs text-dimmed">
      sorted like <span class="text-primary">ls -lt</span> · most-reached tools first
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "~/composables/usePortfolio"

const portfolio = usePortfolio()

const groups = computed(() => {
  const categoryOrder: Skill["category"][] = ["backend", "lang", "frontend", "data", "infra", "agents"]
  const presentCategories = new Set(portfolio.skills.map(skill => skill.category))
  return categoryOrder.filter(category => presentCategories.has(category))
})

function countIn(group: Skill["category"]) {
  return portfolio.skills.filter(skill => skill.category === group).length
}
</script>
