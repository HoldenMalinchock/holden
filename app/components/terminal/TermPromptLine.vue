<template>
  <div class="term-prompt-line">
    <span class="term-prompt-line__ps1">
      <span class="t-user">holden</span><span class="t-dim">@</span><span class="t-host">site</span>
      <span class="t-dim"> </span><span class="t-path">~</span>
      <span class="t-dim"> </span><span class="t-prompt-char">%</span>
    </span>
    <span class="term-prompt-line__input">{{ input }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{ input: string }>()
</script>
