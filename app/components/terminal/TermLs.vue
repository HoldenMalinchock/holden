<template>
  <div class="term-block">
    <div class="term-section-label">// ls ~/portfolio/tools</div>
    <pre class="term-ls">{{ listing }}</pre>
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
