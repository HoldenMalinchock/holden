<template>
  <div class="term-block">
    <div class="term-section-label">// help · available tools</div>
    <div class="term-help">
      <div
        v-for="cmd in p.commands"
        :key="cmd.name"
        class="term-help__row"
      >
        <button
          type="button"
          class="term-help__cmd"
          @click="$emit('run', cmd.name)"
        >
          {{ cmd.name }}
        </button>
        <span class="t-dim term-help__pad">{{ dots(cmd.name) }}</span>
        <span class="t-val">{{ cmd.summary }}</span>
      </div>
    </div>
    <div class="term-hint t-dim">
      tip: click a tool in the sidebar, type a slash command, or use Tab to autocomplete.
    </div>
  </div>
</template>

<script setup lang="ts">
defineEmits<{ run: [cmd: string] }>()
const p = usePortfolio()

function dots(name: string) {
  const width = 16
  const n = Math.max(2, width - name.length)
  return ".".repeat(n)
}
</script>
