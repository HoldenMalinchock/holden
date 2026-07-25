<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // hobbies · off the keyboard
    </div>

    <div class="grid gap-3">
      <UCard
        v-for="hobby in p.hobbies"
        :key="hobby.name"
        variant="subtle"
        :ui="{ root: 'bg-elevated/30 ring-default', body: 'sm:p-4' }"
      >
        <div class="flex items-center justify-between gap-3">
          <span class="font-semibold text-highlighted">{{ hobby.name }}</span>
          <UBadge
            color="primary"
            variant="subtle"
            size="sm"
            :label="hobby.tag"
          />
        </div>
        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          {{ hobby.detail }}
        </p>
      </UCard>
    </div>

    <p class="mt-3 text-xs text-dimmed">
      pickleball rallies · market microstructure · golf putts that almost drop
    </p>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
