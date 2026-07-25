<template>
  <div>
    <div class="mb-2.5 text-xs tracking-wide text-dimmed">
      // experience · {{ p.experiences.length }} roles
    </div>

    <ol class="m-0 grid list-none gap-3 p-0 sm:gap-3.5">
      <!-- Same client engagement: 3 Reasons ← Adapt Forward -->
      <li class="relative grid list-none gap-3 pr-0 sm:gap-3.5 sm:pr-7">
        <div
          class="exp-brace hidden sm:block"
          aria-hidden="true"
        >
          <span class="exp-brace__cap exp-brace__cap--top" />
          <span class="exp-brace__line" />
          <span class="exp-brace__label">same contract</span>
          <span class="exp-brace__cap exp-brace__cap--bottom" />
        </div>

        <UBadge
          class="w-fit sm:hidden"
          color="primary"
          variant="subtle"
          size="sm"
          label="same contract · vendor change"
        />

        <div
          v-for="(exp, i) in contractRoles"
          :key="exp.company + exp.startYear"
          class="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-2 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-3"
        >
          <div class="flex flex-col items-center pt-0.5">
            <UBadge
              :color="i === 0 ? 'primary' : 'neutral'"
              :variant="i === 0 ? 'subtle' : 'outline'"
              size="sm"
              :label="exp.startYear"
            />
            <span
              v-if="i < contractRoles.length - 1"
              class="mt-1.5 min-h-5 w-px flex-1 bg-white/15"
            />
          </div>
          <UCard
            variant="subtle"
            :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5 sm:p-4' }"
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
        </div>
      </li>

      <li
        v-for="(exp, i) in earlierRoles"
        :key="exp.company + exp.startYear"
        class="grid grid-cols-[2.75rem_minmax(0,1fr)] gap-2 sm:grid-cols-[3.25rem_minmax(0,1fr)] sm:gap-3"
      >
        <div class="flex flex-col items-center pt-0.5">
          <UBadge
            color="neutral"
            variant="outline"
            size="sm"
            :label="exp.startYear"
          />
          <span
            v-if="i < earlierRoles.length - 1"
            class="mt-1.5 min-h-5 w-px flex-1 bg-white/15"
          />
        </div>
        <UCard
          variant="subtle"
          :ui="{ root: 'bg-black/55 ring-white/10', body: 'p-3.5 sm:p-4' }"
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
const contractRoles = computed(() => p.experiences.slice(0, 2))
const earlierRoles = computed(() => p.experiences.slice(2))
</script>
