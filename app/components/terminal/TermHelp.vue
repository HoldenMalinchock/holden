<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // help · available commands
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5 sm:p-4 font-mono text-[13px]' }"
    >
      <div class="grid gap-2">
        <div
          v-for="cmd in p.commands"
          :key="cmd.name"
          class="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:gap-2"
        >
          <span class="text-primary">{{ cmd.name }}</span>
          <span class="hidden tracking-widest text-dimmed sm:inline">{{ dots(cmd.name) }}</span>
          <span class="text-sm text-highlighted sm:text-[13px]">{{ cmd.summary }}</span>
        </div>
      </div>
    </UCard>

    <p class="mt-3 text-xs text-dimmed">
      tip: type a slash command and press enter
      <span class="hidden sm:inline"> · Tab autocompletes · ↑↓ history</span>
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
