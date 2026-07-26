<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // ls ~/portfolio/tools
    </div>
    <UCard
      variant="subtle"
      :ui="{ root: 'bg-elevated/30 ring-default', body: 'sm:p-4' }"
    >
      <pre class="m-0 overflow-x-auto whitespace-pre text-[13px] leading-7 text-primary">{{ listing }}</pre>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const portfolio = usePortfolio()
const listing = computed(() => {
  const commandNames = portfolio.commands.map(cmd => cmd.name.replace(/^\//, ""))
  const columnCount = 3
  const columnWidth = 16
  const rows: string[] = []
  for (let index = 0; index < commandNames.length; index += columnCount) {
    const rowNames = commandNames.slice(index, index + columnCount)
    rows.push(rowNames.map(name => name.padEnd(columnWidth)).join(""))
  }
  return rows.join("\n")
})
</script>
