<template>
  <div class="term-block term-boot">
    <pre class="term-ascii" aria-hidden="true">{{ banner }}</pre>
    <div class="term-boot__meta">
      <div><span class="t-key">host</span> <span class="t-val">holden.local</span></div>
      <div><span class="t-key">shell</span> <span class="t-val">zsh 5.9 · darwin arm64</span></div>
      <div><span class="t-key">theme</span> <span class="t-val">mac-terminal / grok-build</span></div>
      <div><span class="t-key">cwd</span> <span class="t-val">~/portfolio</span></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const banner = `
 ██╗  ██╗ ██████╗ ██╗     ██████╗ ███████╗███╗   ██╗
 ██║  ██║██╔═══██╗██║     ██╔══██╗██╔════╝████╗  ██║
 ███████║██║   ██║██║     ██║  ██║█████╗  ██╔██╗ ██║
 ██╔══██║██║   ██║██║     ██║  ██║██╔══╝  ██║╚██╗██║
 ██║  ██║╚██████╔╝███████╗██████╔╝███████╗██║ ╚████║
 ╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝
`.trimEnd()
</script>
