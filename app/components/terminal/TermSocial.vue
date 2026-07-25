<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // social · outbound links
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-elevated/30 ring-default', body: 'sm:p-4' }"
    >
      <div class="flex flex-col gap-2">
        <div
          v-for="link in p.social"
          :key="link.label"
          class="flex flex-wrap items-center gap-3"
        >
          <span class="w-24 shrink-0 text-dimmed">{{ link.label.toLowerCase() }}</span>
          <UButton
            :to="link.href"
            target="_blank"
            external
            color="primary"
            variant="link"
            size="sm"
            class="px-0"
            :label="link.handle ?? link.href"
          />
        </div>
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
