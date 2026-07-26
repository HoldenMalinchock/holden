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
        :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5 sm:p-4' }"
      >
        <div class="flex flex-col gap-1.5 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-2">
          <div class="min-w-0 text-sm font-semibold text-highlighted sm:text-base">
            <span class="text-dimmed">{{ String(i + 1).padStart(2, "0") }}</span>
            {{ project.title }}
          </div>
          <div class="flex flex-wrap items-center gap-2.5">
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

        <p class="mt-2 text-sm leading-relaxed text-muted">
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

        <div class="mt-3 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <UButton
            v-if="project.github"
            :to="project.github"
            target="_blank"
            external
            color="neutral"
            variant="ghost"
            size="sm"
            block
            class="sm:w-auto"
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
            block
            class="sm:w-auto"
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
