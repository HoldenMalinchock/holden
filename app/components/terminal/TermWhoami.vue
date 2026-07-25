<template>
  <div class="term-block">
    <div class="term-section-label">// whoami</div>
    <div class="term-whoami">
      <div class="term-whoami__name">{{ p.name }}</div>
      <div class="term-whoami__role">
        {{ p.role }}
        <span class="t-dim">@</span>
        <span class="t-accent">{{ p.company }}</span>
      </div>
      <div class="term-whoami__tag">{{ p.tagline }}</div>
      <div class="term-kv">
        <div><span class="t-key">location</span><span class="t-val">{{ p.location }}</span></div>
        <div><span class="t-key">focus</span><span class="t-val">TypeScript · Nuxt · Deno</span></div>
        <div><span class="t-key">email</span><span class="t-val"><a :href="`mailto:${p.email}`">{{ p.email }}</a></span></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
