<template>
  <div
    class="term-app font-mono"
    role="application"
    aria-label="Holden portfolio terminal"
    @click="onAppClick"
  >
    <div class="relative z-1 flex h-dvh min-h-0 flex-col md:grid md:h-full md:min-h-dvh md:grid-cols-[220px_1fr]">
      <!-- Desktop sidebar -->
      <aside
        class="hidden min-h-0 select-none flex-col border-r border-default bg-black/55 p-2 md:flex"
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

        <div class="flex flex-1 flex-col gap-0.5 overflow-auto">
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
            <div class="text-[11px] text-dimmed">
              {{ tool.summary }}
            </div>
          </div>
        </div>

        <div class="mt-2 flex flex-col gap-0.5 border-t border-default pt-2">
          <div class="rounded-md px-2 py-2">
            <div class="text-[12.5px] text-muted">
              /help
            </div>
            <div class="text-[11px] text-dimmed">
              all commands
            </div>
          </div>
          <div class="rounded-md px-2 py-2">
            <div class="text-[12.5px] text-muted">
              /clear
            </div>
            <div class="text-[11px] text-dimmed">
              reset screen
            </div>
          </div>
        </div>
      </aside>

      <!-- Main terminal surface -->
      <div class="term-main relative flex min-h-0 min-w-0 flex-1 flex-col bg-black/35">
        <!-- Mobile: compact horizontal command chips (tap to run — mobile only) -->
        <div
          class="relative z-1 shrink-0 border-b border-default bg-black/60 md:hidden"
          aria-label="Available commands"
        >
          <div class="flex items-center justify-between gap-2 px-3 pb-1 pt-2">
            <div class="text-[10px] uppercase tracking-[0.14em] text-muted">
              commands
            </div>
            <div class="truncate text-[10px] text-dimmed">
              tap a chip · or type below
            </div>
          </div>
          <div class="flex gap-1.5 overflow-x-auto px-3 pb-2.5 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <button
              v-for="tool in tools"
              :key="tool.cmd"
              type="button"
              class="shrink-0 rounded-full border px-2.5 py-1 text-[11px] whitespace-nowrap transition-colors active:scale-[0.98]"
              :class="activeCommand === tool.cmd
                ? 'border-primary/50 bg-primary/15 text-primary'
                : 'border-white/10 bg-white/5 text-primary/80'"
              :disabled="running"
              :aria-current="activeCommand === tool.cmd ? 'page' : undefined"
              @click.stop="runCommand(tool.cmd)"
            >
              {{ tool.cmd }}
            </button>
            <button
              type="button"
              class="shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted whitespace-nowrap transition-colors active:scale-[0.98]"
              :class="activeCommand === '/help' ? 'border-primary/50 bg-primary/15 text-primary' : ''"
              :disabled="running"
              @click.stop="runCommand('/help')"
            >
              /help
            </button>
          </div>
        </div>

        <div
          ref="scroller"
          class="relative z-1 min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 py-4 sm:px-5 sm:py-5"
        >
          <div
            v-if="view.block"
            :key="view.id"
            class="term-pop w-full max-w-6xl pb-2"
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
          class="relative z-1 shrink-0"
          :disabled="running"
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
  // Avoid fighting the soft keyboard on touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return
  focusInput()
}

async function onSubmit(value: string) {
  await execute(value)
  await nextTick()
  if (scroller.value) scroller.value.scrollTop = 0
  focusInput()
}

/** Mobile command chips only — desktop sidebar stays type-to-run. */
async function runCommand(command: string) {
  if (running.value) return
  await execute(command)
  await nextTick()
  if (scroller.value) scroller.value.scrollTop = 0
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
  // Don't auto-focus on mobile — opens keyboard and steals viewport
  if (!window.matchMedia("(pointer: coarse)").matches) {
    focusInput()
  }
})
</script>
