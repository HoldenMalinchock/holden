<template>
  <div class="term-app">
    <div class="term-desktop">
      <div
        class="term-window"
        role="application"
        aria-label="Holden portfolio terminal"
        @click="focusInput"
      >
        <!-- macOS traffic lights + title -->
        <header class="term-titlebar">
          <div class="term-traffic" aria-hidden="true">
            <span class="term-traffic__btn is-close" />
            <span class="term-traffic__btn is-min" />
            <span class="term-traffic__btn is-zoom" />
          </div>
          <div class="term-titlebar__title">
            holden — zsh — ~/portfolio
          </div>
          <div class="term-titlebar__meta t-dim">
            {{ clock }}
          </div>
        </header>

        <div class="term-body">
          <TerminalTermSidebar
            class="term-body__side"
            :tools="tools"
            :active="activeCommand"
            @run="onTool"
          />

          <div class="term-body__main">
            <TerminalTermStream
              :entries="entries"
              @run="onTool"
              @focus="focusInput"
            />
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

      <p class="term-footnote">
        <span class="t-dim">Holden Malinchock</span>
        <span class="t-sep">·</span>
        <span class="t-dim">Nuxt 4 · Deno Deploy</span>
        <span class="t-sep">·</span>
        <span class="t-dim">© {{ year }}</span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
const {
  entries,
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
const clock = ref("")
const year = new Date().getFullYear()
let clockTimer: ReturnType<typeof setInterval> | undefined

function focusInput() {
  inputRef.value?.focus()
}

async function onSubmit(value: string) {
  await execute(value)
  await nextTick()
  focusInput()
}

async function onTool(cmd: string) {
  await execute(cmd)
  await nextTick()
  focusInput()
}

function tickClock() {
  clock.value = new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  })
}

onMounted(async () => {
  tickClock()
  clockTimer = setInterval(tickClock, 1000)
  await boot()
  await nextTick()
  focusInput()
})

onBeforeUnmount(() => {
  if (clockTimer) clearInterval(clockTimer)
})
</script>
