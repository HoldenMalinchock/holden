<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // whoami
    </div>
    <div class="text-xl font-semibold tracking-tight text-highlighted sm:text-2xl">
      {{ p.name }}
    </div>
    <div class="mt-1 text-muted">
      {{ p.role }}
      <span class="text-dimmed">@</span>
      <span class="text-primary">{{ p.company }}</span>
    </div>
    <div class="mt-2.5 max-w-xl text-highlighted">
      {{ p.tagline }}
    </div>
    <dl class="mt-4 grid gap-1 text-[13px]">
      <div class="flex gap-3">
        <dt class="w-28 shrink-0 text-dimmed">
          location
        </dt>
        <dd class="text-highlighted">
          {{ p.location }}
        </dd>
      </div>
      <div class="flex gap-3">
        <dt class="w-28 shrink-0 text-dimmed">
          focus
        </dt>
        <dd class="text-highlighted">
          TypeScript · Nuxt · Deno
        </dd>
      </div>
      <div class="flex gap-3">
        <dt class="w-28 shrink-0 text-dimmed">
          email
        </dt>
        <dd>
          <UButton
            :to="`mailto:${p.email}`"
            external
            color="primary"
            variant="link"
            size="sm"
            class="px-0"
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
