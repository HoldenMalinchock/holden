<template>
  <form
    class="border-t border-default bg-black/70 px-4 py-3 sm:px-5"
    @submit.prevent="submit"
  >
    <label
      class="sr-only"
      for="term-cmd"
    >Command</label>
    <div class="flex min-w-0 items-center gap-2.5">
      <span
        class="shrink-0 whitespace-nowrap text-[13.5px]"
        aria-hidden="true"
      >
        <span class="font-medium text-highlighted">holden</span><span class="text-dimmed">@</span><span class="text-primary">site</span>
        <span class="text-dimmed"> </span><span class="text-muted">~</span>
        <span class="text-dimmed"> </span><span class="text-highlighted">%</span>
      </span>
      <input
        id="term-cmd"
        ref="inputEl"
        v-model="value"
        class="min-w-0 flex-1 border-0 bg-transparent p-0.5 text-[13.5px] text-highlighted caret-primary outline-none placeholder:text-white/20 disabled:opacity-55"
        type="text"
        autocomplete="off"
        autocapitalize="off"
        autocorrect="off"
        spellcheck="false"
        enterkeyhint="send"
        :placeholder="placeholder"
        :disabled="disabled"
        @keydown="onKeydown"
      >
    </div>
    <div class="mt-1.5 flex flex-wrap gap-x-1 text-[11px] text-dimmed">
      <span>enter ↵ run</span>
      <span class="text-dimmed">·</span>
      <span>tab autocomplete</span>
      <span class="text-dimmed">·</span>
      <span>↑↓ history</span>
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

function submit() {
  const v = value.value
  if (!v.trim() || props.disabled) return
  emit("submit", v)
  value.value = ""
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Tab") {
    e.preventDefault()
    const hit = props.autocomplete(value.value)
    if (hit) value.value = hit
    return
  }
  if (e.key === "ArrowUp") {
    e.preventDefault()
    value.value = props.historyPrev(value.value)
    return
  }
  if (e.key === "ArrowDown") {
    e.preventDefault()
    value.value = props.historyNext(value.value)
  }
}

function focus() {
  inputEl.value?.focus()
}

defineExpose({ focus })
</script>
