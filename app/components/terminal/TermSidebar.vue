<template>
  <aside class="term-sidebar">
    <div class="term-sidebar__head">
      <div class="term-sidebar__title">tools</div>
      <div class="t-dim term-sidebar__sub">slash commands</div>
    </div>

    <nav class="term-sidebar__nav" aria-label="Portfolio tools">
      <button
        v-for="tool in tools"
        :key="tool.cmd"
        type="button"
        class="term-tool"
        :class="{ 'is-active': active === tool.cmd }"
        @click="$emit('run', tool.cmd)"
      >
        <span class="term-tool__cmd">{{ tool.cmd }}</span>
        <span class="term-tool__summary">{{ tool.summary }}</span>
      </button>
    </nav>

    <div class="term-sidebar__foot">
      <button
        type="button"
        class="term-tool term-tool--ghost"
        @click="$emit('run', '/help')"
      >
        <span class="term-tool__cmd">/help</span>
        <span class="term-tool__summary">all commands</span>
      </button>
      <button
        type="button"
        class="term-tool term-tool--ghost"
        @click="$emit('run', '/clear')"
      >
        <span class="term-tool__cmd">/clear</span>
        <span class="term-tool__summary">reset screen</span>
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
defineProps<{
  tools: { cmd: string, summary: string }[]
  active: string | null
}>()

defineEmits<{ run: [cmd: string] }>()
</script>
