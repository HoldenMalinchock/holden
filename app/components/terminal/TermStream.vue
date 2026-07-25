<template>
  <div
    ref="scroller"
    class="term-stream"
    @click="onStreamClick"
  >
    <div
      v-for="entry in entries"
      :key="entry.id"
      class="term-stream__entry"
    >
      <TerminalTermPromptLine
        v-if="entry.block.kind === 'prompt'"
        :input="entry.block.input"
      />
      <TerminalTermBoot v-else-if="entry.block.kind === 'boot'" />
      <TerminalTermWhoami v-else-if="entry.block.kind === 'whoami'" />
      <TerminalTermNow v-else-if="entry.block.kind === 'now'" />
      <TerminalTermExperience v-else-if="entry.block.kind === 'experience'" />
      <TerminalTermStack v-else-if="entry.block.kind === 'stack'" />
      <TerminalTermProjects v-else-if="entry.block.kind === 'projects'" />
      <TerminalTermBlog v-else-if="entry.block.kind === 'blog'" />
      <TerminalTermHobbies v-else-if="entry.block.kind === 'hobbies'" />
      <TerminalTermContact v-else-if="entry.block.kind === 'contact'" />
      <TerminalTermSocial v-else-if="entry.block.kind === 'social'" />
      <TerminalTermHelp
        v-else-if="entry.block.kind === 'help'"
        @run="(cmd) => $emit('run', cmd)"
      />
      <TerminalTermLs v-else-if="entry.block.kind === 'ls'" />
      <TerminalTermText
        v-else-if="entry.block.kind === 'text'"
        :lines="entry.block.lines"
        :tone="entry.block.tone"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { TerminalEntry } from "~/composables/useTerminal"

const props = defineProps<{
  entries: TerminalEntry[]
}>()

const emit = defineEmits<{
  run: [cmd: string]
  focus: []
}>()

const scroller = ref<HTMLElement | null>(null)

function onStreamClick(e: MouseEvent) {
  const t = e.target as HTMLElement
  if (t.closest("a, button")) return
  emit("focus")
}

watch(
  () => props.entries.length,
  async () => {
    await nextTick()
    const el = scroller.value
    if (!el) return
    el.scrollTop = el.scrollHeight
  },
)
</script>
