<template>
  <div class="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
    <div class="absolute inset-0 grid-bg" />
    <div class="blob blob-rose w-[600px] h-[600px] -top-40 -left-40" />
    <div
      class="blob blob-fuchsia w-[500px] h-[500px] top-1/3 -right-32"
      style="animation-delay: -6s"
    />
    <div
      class="blob blob-indigo w-[550px] h-[550px] bottom-0 left-1/3"
      style="animation-delay: -12s"
    />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/40 to-zinc-950" />
  </div>
</template>
