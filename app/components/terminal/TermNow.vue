<template>
  <div class="w-full max-w-3xl">
    <div class="mb-3 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-xs tracking-wide text-dimmed">
      <span>// now</span>
      <span>— {{ asOf }}</span>
      <UBadge
        color="primary"
        variant="subtle"
        size="sm"
        label="status"
      />
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-4 sm:p-5' }"
    >
      <p class="text-sm leading-relaxed text-highlighted sm:text-base sm:leading-relaxed">
        {{ portfolio.nowBlurb }}
      </p>
    </UCard>

    <div class="mt-4 grid gap-2 sm:grid-cols-2">
      <UCard
        v-for="item in portfolio.nowItems"
        :key="item.label"
        variant="subtle"
        :ui="{ root: 'bg-black/40 ring-white/10', body: 'p-3.5 sm:p-4' }"
      >
        <div class="text-[11px] uppercase tracking-wider text-dimmed">
          {{ item.label }}
        </div>
        <div class="mt-1.5 text-sm text-highlighted">
          {{ item.detail }}
        </div>
      </UCard>
    </div>

    <div class="mt-4 font-mono text-xs text-dimmed sm:text-[13px]">
      <span class="text-primary">$</span>
      <span class="text-dimmed"> cat ~/priorities</span>
      <div class="mt-1.5 space-y-1 text-muted">
        <div>1. ship reliable full-stack systems at work</div>
        <div>2. build agentic workflows & harnesses for everyday dev</div>
        <div>3. keep side systems live (trader, screener, dashboard)</div>
      </div>
    </div>

    <p class="mt-5 text-xs text-dimmed">
      next ·
      <span class="text-primary">/experience</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/skills</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/projects</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/contact</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const portfolio = usePortfolio()
const asOf = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
</script>
