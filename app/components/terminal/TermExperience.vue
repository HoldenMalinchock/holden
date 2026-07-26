<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // experience · {{ p.experiences.length }} roles
    </div>

    <UBadge
      class="mb-3 w-fit sm:hidden"
      color="primary"
      variant="subtle"
      size="sm"
      label="same contract · vendor change (top 2)"
    />

    <!--
      CSS grid timeline:
      col1 year · col2 card · col3 brace (desktop)
      brace uses grid-row: 1 / span 2 so it runs top of card 1 → bottom of card 2
    -->
    <ol class="exp-grid m-0 list-none p-0">
      <div
        class="exp-brace hidden sm:block"
        aria-hidden="true"
      >
        <span class="exp-brace__cap exp-brace__cap--top" />
        <span class="exp-brace__line" />
        <span class="exp-brace__label">same contract</span>
        <span class="exp-brace__cap exp-brace__cap--bottom" />
      </div>

      <li
        v-for="(exp, i) in p.experiences"
        :key="exp.company + exp.startYear"
        class="exp-row contents"
      >
        <div class="exp-year flex flex-col items-center pt-0.5">
          <UBadge
            :color="i === 0 ? 'primary' : 'neutral'"
            :variant="i === 0 ? 'subtle' : 'outline'"
            size="sm"
            :label="exp.startYear"
          />
          <span
            v-if="i < p.experiences.length - 1"
            class="exp-spine mt-1.5 w-px min-h-6 flex-1 bg-white/15"
            aria-hidden="true"
          />
        </div>

        <UCard
          variant="subtle"
          class="exp-card min-w-0"
          :ui="{ root: 'bg-black/55 ring-white/10 h-full', body: 'p-3.5 sm:p-4' }"
        >
          <div class="flex flex-col gap-1 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-2">
            <div class="min-w-0">
              <div class="text-sm font-semibold text-highlighted sm:text-base">
                {{ exp.title }}
              </div>
              <div class="mt-0.5 text-xs sm:text-[12.5px]">
                <span class="text-primary">{{ exp.company }}</span>
                <span class="mx-1.5 text-dimmed">·</span>
                <span class="text-dimmed">{{ exp.location }}</span>
              </div>
            </div>
            <div class="text-xs text-dimmed">
              {{ exp.date }}
            </div>
          </div>
          <p class="mt-2 text-sm leading-relaxed text-muted">
            {{ exp.description }}
          </p>
          <div class="mt-3 flex flex-wrap gap-1.5">
            <UBadge
              v-for="tech in exp.technologies"
              :key="tech"
              color="primary"
              variant="subtle"
              size="sm"
              :label="tech"
            />
          </div>
        </UCard>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
