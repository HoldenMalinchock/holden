<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // contact · open channel
    </div>

    <UCard
      variant="subtle"
      :ui="{
        root: 'bg-black/55 ring-white/10',
        body: 'p-4 sm:p-6',
        header: 'px-4 pt-4 pb-0 sm:px-6 sm:pt-5',
        footer: 'px-4 pb-4 pt-0 sm:px-6 sm:pb-5',
      }"
    >
      <template #header>
        <div class="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-3">
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
            class="w-fit"
            label="open channel"
          />
        </div>
      </template>

      <p class="max-w-2xl text-sm leading-relaxed text-toned">
        Always happy to chat about full-stack work, trading systems, Deno/Nuxt,
        or whatever it is you're shipping. Email is fastest.
      </p>

      <template #footer>
        <div class="flex flex-col gap-2 pt-1 sm:flex-row sm:flex-wrap sm:items-center">
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
            variant="ghost"
            size="md"
            block
            class="sm:w-auto"
            icon="i-lucide-github"
            label="GitHub"
          />
        </div>
      </template>
    </UCard>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
