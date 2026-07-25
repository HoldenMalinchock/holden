<template>
  <div
    class="term-app font-mono"
    role="application"
    aria-label="Holden portfolio terminal"
    @click="onAppClick"
  >
    <div class="relative z-1 grid h-full min-h-dvh grid-cols-1 md:grid-cols-[220px_1fr]">
      <!-- Command reference (not clickable) -->
      <aside
        class="flex min-h-0 select-none flex-col border-b border-default bg-black/55 p-2 md:border-b-0 md:border-r"
        aria-label="Available commands"
      >
        <div class="mb-2 border-b border-default px-2 pb-3 pt-1">
          <div class="text-[11px] uppercase tracking-[0.14em] text-muted">
            commands
          </div>
          <div class="mt-0.5 text-[11px] text-dimmed">
            type to run
          </div>
        </div>

        <div class="grid flex-1 grid-cols-3 gap-0.5 overflow-auto md:flex md:grid-cols-none md:flex-col">
          <div
            v-for="tool in tools"
            :key="tool.cmd"
            class="rounded-md border border-transparent px-2 py-2"
            :class="activeCommand === tool.cmd
              ? 'border-primary/40 bg-primary/10'
              : ''"
          >
            <div
              class="text-[12.5px]"
              :class="activeCommand === tool.cmd ? 'text-primary' : 'text-primary/80'"
            >
              {{ tool.cmd }}
            </div>
            <div class="hidden text-[11px] text-dimmed md:block">
              {{ tool.summary }}
            </div>
          </div>
        </div>

        <div class="mt-2 grid grid-cols-2 gap-0.5 border-t border-default pt-2 md:flex md:flex-col">
          <div class="rounded-md px-2 py-2">
            <div class="text-[12.5px] text-muted">
              /help
            </div>
            <div class="hidden text-[11px] text-dimmed md:block">
              all commands
            </div>
          </div>
          <div class="rounded-md px-2 py-2">
            <div class="text-[12.5px] text-muted">
              /clear
            </div>
            <div class="hidden text-[11px] text-dimmed md:block">
              reset screen
            </div>
          </div>
        </div>
      </aside>

      <!-- Main terminal surface -->
      <div class="term-main relative flex min-h-0 min-w-0 flex-col bg-black/35">
        <div
          ref="scroller"
          class="relative z-1 flex-1 overflow-auto px-4 py-5 sm:px-5"
        >
          <div
            v-if="view.block"
            :key="view.id"
            class="term-pop w-full max-w-6xl"
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
            class="pt-1 text-[13px] text-dimmed"
          >
            type a command to begin · /help
          </div>
        </div>

        <TerminalTermInput
          ref="inputRef"
          class="relative z-1"
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
