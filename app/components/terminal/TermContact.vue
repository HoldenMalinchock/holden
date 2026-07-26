<template>
  <div class="w-full max-w-2xl">
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // contact · open channel
    </div>

    <UCard
      variant="subtle"
      :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-4 sm:p-5' }"
    >
      <div class="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-3">
        <div class="min-w-0">
          <h2 class="text-base font-semibold tracking-tight text-highlighted sm:text-lg">
            Have a problem worth solving?
          </h2>
          <p class="mt-1 text-sm text-muted">
            Full-stack · trading systems · Deno/Nuxt
          </p>
        </div>
        <UBadge
          color="primary"
          variant="subtle"
          size="sm"
          class="mt-2 w-fit sm:mt-0"
          label="open channel"
        />
      </div>

      <p class="mt-4 max-w-xl text-sm leading-relaxed text-toned">
        Always happy to chat about full-stack work, trading systems, Deno/Nuxt,
        or whatever it is you're shipping. Email is fastest.
      </p>

      <div class="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
        <UButton
          :to="`mailto:${p.email}`"
          external
          color="primary"
          variant="solid"
          size="md"
          block
          class="sm:w-auto"
          icon="i-lucide-mail"
          :label="p.email"
        />
        <UButton
          to="https://www.linkedin.com/in/holden-malinchock-0bbbb6140/"
          target="_blank"
          external
          color="neutral"
          variant="outline"
          size="md"
          block
          class="sm:w-auto"
          icon="i-lucide-linkedin"
          label="LinkedIn"
        />
        <UButton
          to="https://github.com/HoldenMalinchock"
          target="_blank"
          external
          color="neutral"
          variant="outline"
          size="md"
          block
          class="sm:w-auto"
          icon="i-lucide-github"
          label="GitHub"
        />
      </div>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
