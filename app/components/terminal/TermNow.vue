<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // now
      <span>— {{ asOf }}</span>
    </div>
    <p class="max-w-3xl text-sm leading-relaxed text-muted">
      {{ p.nowBlurb }}
    </p>
    <dl class="mt-4 grid gap-2 text-[13px] sm:grid-cols-2">
      <div
        v-for="item in p.nowItems"
        :key="item.label"
        class="flex gap-3"
      >
        <dt class="w-28 shrink-0 text-dimmed">
          {{ item.label.toLowerCase() }}
        </dt>
        <dd class="text-highlighted">
          {{ item.detail }}
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
const asOf = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
</script>
