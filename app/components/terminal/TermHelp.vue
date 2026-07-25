<template>
  <div class="term-block">
    <div class="term-section-label">// help · available commands</div>
    <div class="term-help">
      <div
        v-for="cmd in p.commands"
        :key="cmd.name"
        class="term-help__row"
      >
        <span class="term-help__cmd">{{ cmd.name }}</span>
        <span class="t-dim term-help__pad">{{ dots(cmd.name) }}</span>
        <span class="t-val">{{ cmd.summary }}</span>
      </div>
    </div>
    <div class="term-hint t-dim">
      tip: type a slash command and press enter · Tab autocompletes · ↑↓ history
    </div>
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
