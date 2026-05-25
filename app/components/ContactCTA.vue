<template>
  <div class="relative overflow-hidden rounded-3xl border border-zinc-800/80 p-8 sm:p-12">
    <div class="absolute inset-0 -z-10 opacity-60 bg-[radial-gradient(circle_at_top_left,_rgba(244,63,94,0.25),_transparent_55%),radial-gradient(circle_at_bottom_right,_rgba(99,102,241,0.22),_transparent_55%)]" />
    <div class="absolute inset-0 -z-10 grid-bg opacity-40" />

    <div class="relative max-w-2xl">
      <span class="inline-flex items-center gap-1.5 pill mb-5">
        <UIcon
          name="i-lucide-sparkles"
          class="size-4 text-rose-300"
        />
        <span class="text-zinc-300">Open to interesting work</span>
      </span>

      <h2 class="text-3xl sm:text-5xl font-bold tracking-tight text-zinc-100">
        Have a problem worth solving?
      </h2>
      <p class="mt-4 text-lg text-zinc-300/90 leading-relaxed">
        Always happy to chat about full-stack work, trading systems,
        Deno/Nuxt, or whatever it is you're shipping. Email is fastest.
      </p>

      <div class="mt-8 flex flex-wrap gap-3">
        <UButton
          to="mailto:digits_jigs.07@icloud.com"
          external
          size="lg"
          color="primary"
          icon="i-lucide-mail"
          label="digits_jigs.07@icloud.com"
        />
        <UButton
          to="https://www.linkedin.com/in/holden-malinchock-0bbbb6140/"
          target="_blank"
          external
          size="lg"
          color="neutral"
          variant="outline"
          icon="i-lucide-linkedin"
          label="LinkedIn"
        />
      </div>
    </div>
  </div>
</template>
