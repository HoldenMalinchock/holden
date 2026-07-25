<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // whoami
    </div>
    <div class="text-lg font-semibold tracking-tight text-highlighted sm:text-2xl">
      {{ p.name }}
    </div>
    <div class="mt-1 text-sm text-muted sm:text-base">
      {{ p.role }}
      <span class="text-dimmed">@</span>
      <span class="text-primary">{{ p.company }}</span>
    </div>
    <div class="mt-2.5 max-w-xl text-sm text-highlighted sm:text-base">
      {{ p.tagline }}
    </div>
    <dl class="mt-4 grid gap-2 text-[13px]">
      <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
        <dt class="w-28 shrink-0 text-dimmed">
          location
        </dt>
        <dd class="text-highlighted">
          {{ p.location }}
        </dd>
      </div>
      <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3">
        <dt class="w-28 shrink-0 text-dimmed">
          focus
        </dt>
        <dd class="text-highlighted">
          TypeScript · Nuxt · Deno
        </dd>
      </div>
      <div class="flex flex-col gap-0.5 sm:flex-row sm:gap-3 sm:items-center">
        <dt class="w-28 shrink-0 text-dimmed">
          email
        </dt>
        <dd class="min-w-0">
          <UButton
            :to="`mailto:${p.email}`"
            external
            color="primary"
            variant="link"
            size="sm"
            class="h-auto max-w-full truncate px-0"
            :label="p.email"
          />
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
