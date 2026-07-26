<template>
  <ClientOnly>
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
    <template #fallback>
      <span class="font-mono text-xs text-dimmed">…%</span>
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
// Same-origin proxy — see server/api/allTimePercent.get.ts
// (direct dashboard fetch fails in the browser: no CORS headers)
const { data } = await useFetch<{ change: string, total?: number } | null>(
  "/api/allTimePercent",
  {
    key: "trading-all-time-percent",
    server: true,
    lazy: true,
  },
)

const isPositive = computed(() => parseFloat(data.value?.change ?? "0") >= 0)
</script>
