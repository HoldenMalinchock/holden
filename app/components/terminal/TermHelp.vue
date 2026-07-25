<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // help · available commands
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-elevated/30 ring-default', body: 'sm:p-4 font-mono text-[13px]' }"
    >
      <div class="grid gap-1">
        <div
          v-for="cmd in p.commands"
          :key="cmd.name"
          class="flex flex-wrap items-baseline gap-2"
        >
          <span class="text-primary">{{ cmd.name }}</span>
          <span class="tracking-widest text-dimmed">{{ dots(cmd.name) }}</span>
          <span class="text-highlighted">{{ cmd.summary }}</span>
        </div>
      </div>
    </UCard>

    <p class="mt-3 text-xs text-dimmed">
      tip: type a slash command and press enter · Tab autocompletes · ↑↓ history
    </p>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()

function dots(name: string) {
  const width = 16
  const n = Math.max(2, width - name.length)
  return ".".repeat(n)
}
</script>
