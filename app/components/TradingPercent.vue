<template>
  <UBadge
    v-if="data"
    :color="isPositive ? 'success' : 'error'"
    variant="subtle"
    size="sm"
    :label="`${isPositive ? '▲' : '▼'} ${data.change}%`"
  />
</template>

<script setup lang="ts">
const { data } = await useFetch<{ change: string }>(
  "https://daily-trading-tracker.deno.dev/api/allTimePercent/",
)

const isPositive = computed(() => parseFloat(data.value?.change ?? "0") >= 0)
</script>
