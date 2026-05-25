<template>
  <span
    v-if="data"
    class="inline-flex items-center gap-1.5 text-sm font-mono"
    :class="isPositive ? 'text-emerald-400' : 'text-rose-400'"
  >
    <UIcon
      :name="isPositive ? 'i-lucide-trending-up' : 'i-lucide-trending-down'"
      class="size-4"
    />
    {{ data.change }}%
  </span>
</template>

<script setup lang="ts">
const { data } = await useFetch<{ change: string }>(
  "https://daily-trading-tracker.deno.dev/api/allTimePercent/",
)

const isPositive = computed(() => parseFloat(data.value?.change ?? "0") >= 0)
</script>
