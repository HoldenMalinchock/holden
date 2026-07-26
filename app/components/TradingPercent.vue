<template>
  <span
    v-if="data"
    class="inline-flex items-center gap-1.5 font-mono text-sm tabular-nums"
    :class="isPositive ? 'text-success' : 'text-error'"
  >
    <UIcon
      :name="isPositive ? 'i-lucide-trending-up' : 'i-lucide-trending-down'"
      class="size-4 shrink-0"
    />
    <span>{{ isPositive ? "+" : "" }}{{ data.change }}%</span>
  </span>
</template>

<script setup lang="ts">
// Live all-time return from the trading dashboard (same source as main).
// Old daily-trading-tracker.deno.dev deploy is gone post Deno Deploy Classic sunset.
const { data } = await useFetch<{ change: string, total?: number }>(
  "https://trading-dashboard.hmalinch.deno.net/api/allTimePercent",
)

const isPositive = computed(() => parseFloat(data.value?.change ?? "0") >= 0)
</script>
