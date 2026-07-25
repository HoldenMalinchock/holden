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
const p = usePortfolio()
const listing = computed(() => {
  const names = p.commands.map(c => c.name.replace(/^\//, ""))
  const cols = 3
  const colWidth = 16
  const rows: string[] = []
  for (let i = 0; i < names.length; i += cols) {
    const slice = names.slice(i, i + cols)
    rows.push(slice.map(n => n.padEnd(colWidth)).join(""))
  }
  return rows.join("\n")
})
</script>
