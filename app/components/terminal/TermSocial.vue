<template>
  <div class="term-block">
    <div class="term-section-label">// social · outbound links</div>
    <div class="term-kv">
      <div
        v-for="link in p.social"
        :key="link.label"
      >
        <span class="t-key">{{ link.label.toLowerCase() }}</span>
        <span class="t-val">
          <a
            :href="link.href"
            target="_blank"
            rel="noopener"
          >{{ link.handle ?? link.href }}</a>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
