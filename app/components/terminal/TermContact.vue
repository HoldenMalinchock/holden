<template>
  <div class="term-block">
    <div class="term-section-label">// contact · open channel</div>

    <UCard
      variant="subtle"
      :ui="{
        root: 'term-u-card bg-white/2 ring-white/10',
        body: 'sm:p-6',
        header: 'sm:px-6 sm:pt-5 sm:pb-0',
        footer: 'sm:px-6 sm:pb-5 sm:pt-0',
      }"
    >
      <template #header>
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h2 class="text-base sm:text-lg font-semibold text-white tracking-tight">
              Have a problem worth solving?
            </h2>
            <p class="mt-1 text-sm text-white/55">
              Full-stack · trading systems · Deno/Nuxt · whatever you're shipping
            </p>
          </div>
          <UBadge
            color="neutral"
            variant="outline"
            size="sm"
            label="open channel"
          />
        </div>
      </template>

      <p class="text-sm text-white/65 leading-relaxed max-w-2xl">
        Always happy to chat about full-stack work, trading systems, Deno/Nuxt,
        or whatever it is you're shipping. Email is fastest.
      </p>

      <template #footer>
        <div class="flex flex-wrap items-center gap-2 pt-1">
          <UButton
            :to="`mailto:${p.email}`"
            external
            color="neutral"
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
