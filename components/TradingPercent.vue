<template>
  <div
    :class="{ 'text-green-600': parseInt(data.change) > 0, 'text-red-600': parseInt(data.change) < 0 }"
  >
    {{ data.change }}%
  </div>
</template>

<script setup lang="ts">
const { data } = await useFetch("https://daily-trading-tracker.deno.dev/api/allTimePercent/")
</script>
