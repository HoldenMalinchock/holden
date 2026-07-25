<template>
  <div class="term-block">
    <div class="term-section-label">// contact · open channel</div>
    <div class="term-card">
      <div class="term-card__title">Have a problem worth solving?</div>
      <p class="term-prose">
        Always happy to chat about full-stack work, trading systems, Deno/Nuxt,
        or whatever it is you're shipping. Email is fastest.
      </p>
      <div class="term-actions">
        <a
          :href="`mailto:${p.email}`"
          class="term-link term-link--accent"
        >↗ {{ p.email }}</a>
        <a
          href="https://www.linkedin.com/in/holden-malinchock-0bbbb6140/"
          target="_blank"
          rel="noopener"
          class="term-link"
        >↗ LinkedIn</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
