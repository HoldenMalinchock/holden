<template>
  <div class="term-block">
    <div class="term-section-label">// skills · day-to-day tools</div>
    <div class="term-stack">
      <div
        v-for="(tech, i) in p.stack"
        :key="tech"
        class="term-stack__item"
      >
        <span class="t-dim">{{ String(i + 1).padStart(2, "0") }}</span>
        <span class="t-val">{{ tech }}</span>
      </div>
    </div>
    <div class="term-hint t-dim">frontend · backend · infra — pick whatever ships</div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
