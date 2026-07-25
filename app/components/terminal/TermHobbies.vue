<template>
  <div class="term-block">
    <div class="term-section-label">// hobbies · off the keyboard</div>
    <div class="term-hobbies">
      <div
        v-for="hobby in p.hobbies"
        :key="hobby.name"
        class="term-card term-hobby"
      >
        <div class="term-hobby__top">
          <span class="term-hobby__name">{{ hobby.name }}</span>
          <span class="term-tag">{{ hobby.tag }}</span>
        </div>
        <p class="term-prose">{{ hobby.detail }}</p>
      </div>
    </div>
    <div class="term-hint t-dim">
      pickleball rallies · market microstructure · golf putts that almost drop
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
