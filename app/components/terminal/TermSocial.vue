<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // social · outbound links
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5 sm:p-4' }"
    >
      <div class="flex flex-col gap-3">
        <div
          v-for="link in portfolio.social"
          :key="link.label"
          class="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-3"
        >
          <span class="w-24 shrink-0 text-dimmed">{{ link.label.toLowerCase() }}</span>
          <UButton
            :to="link.href"
            target="_blank"
            external
            color="primary"
            variant="link"
            size="sm"
            class="h-auto max-w-full justify-start truncate px-0"
            :label="link.handle ?? link.href"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const portfolio = usePortfolio()
</script>
