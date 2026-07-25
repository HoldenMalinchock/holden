<template>
  <div class="term-block">
    <div class="term-section-label">
      // now
      <span class="t-dim">— {{ asOf }}</span>
    </div>
    <p class="term-prose">{{ p.nowBlurb }}</p>
    <div class="term-kv term-kv--grid">
      <div
        v-for="item in p.nowItems"
        :key="item.label"
      >
        <span class="t-key">{{ item.label.toLowerCase() }}</span>
        <span class="t-val">{{ item.detail }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
const asOf = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })
</script>
