<template>
  <div
    class="term-block term-text"
    :class="toneClass"
  >
    <div
      v-for="(line, i) in lines"
      :key="i"
    >
      {{ line }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  lines: string[]
  tone?: "dim" | "ok" | "warn" | "err" | "accent"
}>()

const toneClass = computed(() => {
  switch (props.tone) {
    case "ok": return "is-ok"
    case "warn": return "is-warn"
    case "err": return "is-err"
    case "accent": return "is-accent"
    case "dim": return "is-dim"
    default: return ""
  }
})
</script>
