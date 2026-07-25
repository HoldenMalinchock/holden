<template>
  <div
    class="term-app"
    role="application"
    aria-label="Holden portfolio terminal"
    @click="onAppClick"
  >
    <div class="term-shell">
      <aside class="term-sidebar" aria-label="Available commands">
        <div class="term-sidebar__head">
          <div class="term-sidebar__title">commands</div>
          <div class="t-dim term-sidebar__sub">type to run</div>
        </div>

        <div class="term-sidebar__nav">
          <div
            v-for="tool in tools"
            :key="tool.cmd"
            class="term-tool"
            :class="{ 'is-active': activeCommand === tool.cmd }"
          >
            <span class="term-tool__cmd">{{ tool.cmd }}</span>
            <span class="term-tool__summary">{{ tool.summary }}</span>
          </div>
        </div>

        <div class="term-sidebar__foot">
          <div class="term-tool term-tool--ghost">
            <span class="term-tool__cmd">/help</span>
            <span class="term-tool__summary">all commands</span>
          </div>
          <div class="term-tool term-tool--ghost">
            <span class="term-tool__cmd">/clear</span>
            <span class="term-tool__summary">reset screen</span>
          </div>
        </div>
      </aside>

      <div class="term-main">
        <div
          ref="scroller"
          class="term-stream"
        >
          <div
            v-if="view.block"
            :key="view.id"
            class="term-stream__entry term-pop"
          >
            <TerminalTermWhoami v-if="view.block.kind === 'whoami'" />
            <TerminalTermNow v-else-if="view.block.kind === 'now'" />
            <TerminalTermExperience v-else-if="view.block.kind === 'experience'" />
            <TerminalTermStack v-else-if="view.block.kind === 'stack'" />
            <TerminalTermProjects v-else-if="view.block.kind === 'projects'" />
            <TerminalTermBlog v-else-if="view.block.kind === 'blog'" />
            <TerminalTermHobbies v-else-if="view.block.kind === 'hobbies'" />
            <TerminalTermContact v-else-if="view.block.kind === 'contact'" />
            <TerminalTermSocial v-else-if="view.block.kind === 'social'" />
            <TerminalTermHelp v-else-if="view.block.kind === 'help'" />
            <TerminalTermLs v-else-if="view.block.kind === 'ls'" />
            <TerminalTermText
              v-else-if="view.block.kind === 'text'"
              :lines="view.block.lines"
              :tone="view.block.tone"
            />
          </div>

          <div
            v-else
            class="term-empty t-dim"
          >
            type a command to begin · /help
          </div>
        </div>

        <TerminalTermInput
          ref="inputRef"
          :disabled="running"
          placeholder="/experience"
          :autocomplete="autocomplete"
          :history-prev="historyPrev"
          :history-next="historyNext"
          @submit="onSubmit"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  view,
  tools,
  running,
  activeCommand,
  execute,
  autocomplete,
  historyPrev,
  historyNext,
  boot,
} = useTerminal()

const inputRef = ref<{ focus: () => void } | null>(null)
const scroller = ref<HTMLElement | null>(null)

function focusInput() {
  inputRef.value?.focus()
}

function onAppClick(e: MouseEvent) {
  const t = e.target as HTMLElement
  if (t.closest("a, input, textarea, button")) return
  focusInput()
}

async function onSubmit(value: string) {
  await execute(value)
  await nextTick()
  if (scroller.value) scroller.value.scrollTop = 0
  focusInput()
}

watch(
  () => view.value.id,
  async () => {
    await nextTick()
    if (scroller.value) scroller.value.scrollTop = 0
  },
)

onMounted(async () => {
  await boot()
  await nextTick()
  focusInput()
})
</script>
