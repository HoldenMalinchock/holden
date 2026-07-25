<template>
  <form
    class="term-input"
    @submit.prevent="submit"
  >
    <label class="sr-only" for="term-cmd">Command</label>
    <div class="term-input__row">
      <span class="term-prompt-line__ps1" aria-hidden="true">
        <span class="t-user">holden</span><span class="t-dim">@</span><span class="t-host">site</span>
        <span class="t-dim"> </span><span class="t-path">~</span>
        <span class="t-dim"> </span><span class="t-prompt-char">%</span>
      </span>
      <input
        id="term-cmd"
        ref="inputEl"
        v-model="value"
        class="term-input__field"
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
    <div class="term-input__hint t-dim">
      <span>enter ↵ run</span>
      <span class="t-sep">·</span>
      <span>tab autocomplete</span>
      <span class="t-sep">·</span>
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
