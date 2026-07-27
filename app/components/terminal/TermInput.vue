<template>
  <form
    class="border-t border-default bg-black/80 px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))] sm:px-5 sm:py-3"
    @submit.prevent="submit"
  >
    <label
      class="sr-only"
      for="term-cmd"
    >Command</label>
    <div class="flex min-w-0 items-center gap-2">
      <span
        class="shrink-0 whitespace-nowrap text-[12px] sm:text-[13.5px]"
        aria-hidden="true"
      >
        <span class="font-medium text-highlighted">holden</span><span class="text-dimmed">@</span><span class="text-primary">site</span>
        <span class="text-dimmed"> </span><span class="text-muted">~</span>
        <span class="text-dimmed"> </span><span class="text-highlighted">%</span>
      </span>

      <!-- Custom block caret (Mac Terminal style) -->
      <div
        class="term-input-wrap relative min-w-0 flex-1"
        :class="{ 'is-focused': focused }"
        @click="focus"
      >
        <input
          id="term-cmd"
          ref="inputEl"
          v-model="value"
          class="term-input-field relative z-1 w-full min-w-0 border-0 bg-transparent py-2 font-mono text-base text-transparent outline-none disabled:opacity-55 sm:py-0.5 sm:text-[13.5px]"
          type="text"
          autocomplete="off"
          autocapitalize="off"
          autocorrect="off"
          spellcheck="false"
          enterkeyhint="go"
          inputmode="text"
          :disabled="disabled"
          @keydown="onKeydown"
          @focus="focused = true"
          @blur="focused = false"
          @click="syncCaret"
          @keyup="syncCaret"
          @select="syncCaret"
          @input="syncCaret"
        >
        <!-- Visible text layer under transparent input text -->
        <div
          class="pointer-events-none absolute inset-0 z-0 flex items-center overflow-hidden font-mono text-base sm:text-[13.5px]"
          aria-hidden="true"
        >
          <span class="whitespace-pre text-highlighted">{{ value }}</span>
          <span
            v-if="!value && !focused"
            class="text-white/25"
          >{{ placeholder }}</span>
          <span
            class="term-block-caret"
            :class="{ 'is-on': focused }"
          />
        </div>
      </div>
    </div>
    <div class="mt-1 hidden flex-wrap gap-x-1 text-[11px] text-dimmed sm:flex">
      <span>enter ↵ run</span>
      <span>·</span>
      <span>tab autocomplete</span>
      <span>·</span>
      <span>↑↓ history</span>
    </div>
    <div class="mt-0.5 text-[10px] text-dimmed sm:hidden">
      type a command · e.g. /experience
    </div>
  </form>
</template>

<script setup lang="ts">
const props = defineProps<{
  disabled?: boolean
  placeholder?: string
  autocomplete: (partial: string) => string | null
  historyPrev: (current: string) => string
  historyNext: (current: string) => string
}>()

const emit = defineEmits<{
  submit: [value: string]
}>()

const value = ref("")
const inputEl = ref<HTMLInputElement | null>(null)
const focused = ref(false)

function submit() {
  const v = value.value
  if (!v.trim() || props.disabled) return
  emit("submit", v)
  value.value = ""
  nextTick(syncCaret)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Tab") {
    e.preventDefault()
    const hit = props.autocomplete(value.value)
    if (hit) value.value = hit
    nextTick(syncCaret)
    return
  }
  if (e.key === "ArrowUp") {
    e.preventDefault()
    value.value = props.historyPrev(value.value)
    nextTick(syncCaret)
    return
  }
  if (e.key === "ArrowDown") {
    e.preventDefault()
    value.value = props.historyNext(value.value)
    nextTick(syncCaret)
  }
}

function syncCaret() {
  // Kept for future mid-string caret; block sits at end of value (common shell feel)
}

function focus() {
  inputEl.value?.focus()
}

defineExpose({ focus })
</script>
