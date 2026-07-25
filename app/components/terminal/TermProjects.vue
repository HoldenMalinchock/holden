<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // projects · {{ p.projects.length }} builds
    </div>

    <div class="grid gap-3">
      <UCard
        v-for="(project, i) in p.projects"
        :key="project.title"
        variant="subtle"
        :ui="{ root: 'bg-elevated/30 ring-default', body: 'sm:p-4' }"
      >
        <div class="flex flex-wrap items-baseline justify-between gap-2">
          <div class="font-semibold text-highlighted">
            <span class="text-dimmed">{{ String(i + 1).padStart(2, "0") }}</span>
            {{ project.title }}
          </div>
          <div class="flex items-center gap-2.5 text-xs">
            <TradingPercent v-if="project.showTradingPercent" />
            <UBadge
              v-if="project.status"
              color="warning"
              variant="subtle"
              size="sm"
              :label="project.status"
            />
          </div>
        </div>

        <p class="mt-2 max-w-3xl text-sm leading-relaxed text-muted">
          {{ project.description }}
        </p>

        <div class="mt-3 flex flex-wrap gap-1.5">
          <UBadge
            v-for="lang in project.languages"
            :key="lang"
            color="primary"
            variant="subtle"
            size="sm"
            :label="lang"
          />
        </div>

        <div class="mt-3 flex flex-wrap gap-2">
          <UButton
            v-if="project.github"
            :to="project.github"
            target="_blank"
            external
            color="neutral"
            variant="ghost"
            size="sm"
            icon="i-lucide-github"
            label="Code"
          />
          <UButton
            v-if="project.link"
            :to="project.link"
            target="_blank"
            external
            color="primary"
            variant="soft"
            size="sm"
            trailing-icon="i-lucide-arrow-up-right"
            label="Live"
          />
        </div>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
