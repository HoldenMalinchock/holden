<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // contact · open channel
    </div>

    <UCard
      variant="subtle"
      :ui="{
        root: 'bg-elevated/40 ring-default',
        body: 'sm:p-6',
        header: 'sm:px-6 sm:pt-5 sm:pb-0',
        footer: 'sm:px-6 sm:pb-5 sm:pt-0',
      }"
    >
      <template #header>
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 class="text-base font-semibold tracking-tight text-highlighted sm:text-lg">
              Have a problem worth solving?
            </h2>
            <p class="mt-1 text-sm text-muted">
              Full-stack · trading systems · Deno/Nuxt · whatever you're shipping
            </p>
          </div>
          <UBadge
            color="primary"
            variant="subtle"
            size="sm"
            label="open channel"
          />
        </div>
      </template>

      <p class="max-w-2xl text-sm leading-relaxed text-toned">
        Always happy to chat about full-stack work, trading systems, Deno/Nuxt,
        or whatever it is you're shipping. Email is fastest.
      </p>

      <template #footer>
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <UButton
            :to="`mailto:${p.email}`"
            external
            color="primary"
            variant="solid"
            size="md"
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
