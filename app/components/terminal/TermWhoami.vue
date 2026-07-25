<template>
  <div class="flex min-h-[min(70dvh,36rem)] flex-col justify-center py-2 sm:min-h-[min(72dvh,40rem)] sm:py-6">
    <div class="mb-4 text-xs tracking-wide text-dimmed sm:mb-6">
      // whoami
    </div>

    <!-- ASCII name — primary brand mark -->
    <pre
      class="whoami-ascii m-0 overflow-x-auto text-primary"
      aria-label="Holden Malinchock"
    >{{ asciiName }}</pre>

    <div class="mt-5 space-y-3 sm:mt-8 sm:space-y-4">
      <div class="text-base text-muted sm:text-lg md:text-xl">
        {{ p.role }}
        <span class="text-dimmed">@</span>
        <span class="text-primary">{{ p.company }}</span>
      </div>

      <p class="max-w-2xl text-base leading-relaxed text-highlighted sm:text-lg md:text-xl md:leading-relaxed">
        {{ p.tagline }}
      </p>
    </div>

    <dl class="mt-8 grid gap-3 text-sm sm:mt-10 sm:gap-3.5 sm:text-base md:grid-cols-3">
      <div class="rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <dt class="text-xs uppercase tracking-wider text-dimmed">
          location
        </dt>
        <dd class="mt-1 text-highlighted">
          {{ p.location }}
        </dd>
      </div>
      <div class="rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <dt class="text-xs uppercase tracking-wider text-dimmed">
          focus
        </dt>
        <dd class="mt-1 text-highlighted">
          TypeScript · Nuxt · Deno
        </dd>
      </div>
      <div class="rounded-lg border border-white/10 bg-black/40 px-3.5 py-3 sm:px-4 sm:py-3.5">
        <dt class="text-xs uppercase tracking-wider text-dimmed">
          email
        </dt>
        <dd class="mt-1 min-w-0">
          <UButton
            :to="`mailto:${p.email}`"
            external
            color="primary"
            variant="link"
            size="md"
            class="h-auto max-w-full truncate px-0 text-base"
            :label="p.email"
          />
        </dd>
      </div>
    </dl>

    <p class="mt-8 text-xs text-dimmed sm:mt-10 sm:text-sm">
      session ready · try <span class="text-primary">/experience</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/skills</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/projects</span>
      <span class="text-dimmed"> · </span>
      <span class="text-primary">/help</span>
    </p>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()

// Figlet-style "HOLDEN" (Big font family) — fits terminal brand without deps
const asciiName = `
██╗  ██╗ ██████╗ ██╗     ██████╗ ███████╗███╗   ██╗
██║  ██║██╔═══██╗██║     ██╔══██╗██╔════╝████╗  ██║
███████║██║   ██║██║     ██║  ██║█████╗  ██╔██╗ ██║
██╔══██║██║   ██║██║     ██║  ██║██╔══╝  ██║╚██╗██║
██║  ██║╚██████╔╝███████╗██████╔╝███████╗██║ ╚████║
╚═╝  ╚═╝ ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚═╝  ╚═══╝
`.trim()
</script>
