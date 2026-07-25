<template>
  <span
    v-if="data"
    class="t-pct"
    :class="isPositive ? 'is-up' : 'is-down'"
  >
    <span class="t-pct__arrow">{{ isPositive ? "▲" : "▼" }}</span>
    {{ data.change }}%
  </span>
</template>

<script setup lang="ts">
const { data } = await useFetch<{ change: string }>(
  "https://daily-trading-tracker.deno.dev/api/allTimePercent/",
)

const isPositive = computed(() => parseFloat(data.value?.change ?? "0") >= 0)
</script>
