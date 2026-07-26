<template>
  <div
    class="text-[13px]"
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
    case "ok": return "text-success"
    case "warn": return "text-warning"
    case "err": return "text-error"
    case "accent": return "text-primary"
    case "dim": return "text-dimmed"
    default: return "text-highlighted"
  }
})
</script>
