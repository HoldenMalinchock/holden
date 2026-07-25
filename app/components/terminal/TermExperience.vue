<template>
  <div class="term-block">
    <div class="term-section-label">// experience · {{ p.experiences.length }} roles</div>
    <ol class="term-timeline">
      <!-- Same client engagement: 3 Reasons ← Adapt Forward -->
      <li class="term-timeline__contract">
        <div
          class="term-timeline__contract-rail"
          aria-hidden="true"
        >
          <span class="term-timeline__contract-cap is-top" />
          <span class="term-timeline__contract-line" />
          <span class="term-timeline__contract-label">same contract</span>
          <span class="term-timeline__contract-cap is-bottom" />
        </div>

        <div
          v-for="(exp, i) in contractRoles"
          :key="exp.company + exp.startYear"
          class="term-timeline__item term-timeline__item--contract"
        >
          <div class="term-timeline__gutter">
            <span
              class="term-timeline__year"
              :class="{ 'is-current': i === 0 }"
            >{{ exp.startYear }}</span>
            <span
              v-if="i < contractRoles.length - 1"
              class="term-timeline__rail"
            />
          </div>
          <div class="term-card">
            <div class="term-card__head">
              <div>
                <div class="term-card__title">{{ exp.title }}</div>
                <div class="term-card__sub">
                  <span class="t-accent">{{ exp.company }}</span>
                  <span class="t-dim">·</span>
                  <span class="t-dim">{{ exp.location }}</span>
                </div>
              </div>
              <div class="term-card__meta">{{ exp.date }}</div>
            </div>
            <p class="term-prose">{{ exp.description }}</p>
            <div class="term-tags">
              <span
                v-for="tech in exp.technologies"
                :key="tech"
                class="term-tag"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </li>

      <li
        v-for="(exp, i) in earlierRoles"
        :key="exp.company + exp.startYear"
        class="term-timeline__item"
      >
        <div class="term-timeline__gutter">
          <span class="term-timeline__year">{{ exp.startYear }}</span>
          <span
            v-if="i < earlierRoles.length - 1"
            class="term-timeline__rail"
          />
        </div>
        <div class="term-card">
          <div class="term-card__head">
            <div>
              <div class="term-card__title">{{ exp.title }}</div>
              <div class="term-card__sub">
                <span class="t-accent">{{ exp.company }}</span>
                <span class="t-dim">·</span>
                <span class="t-dim">{{ exp.location }}</span>
              </div>
            </div>
            <div class="term-card__meta">{{ exp.date }}</div>
          </div>
          <p class="term-prose">{{ exp.description }}</p>
          <div class="term-tags">
            <span
              v-for="tech in exp.technologies"
              :key="tech"
              class="term-tag"
            >{{ tech }}</span>
          </div>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()

// First two roles are one continuous client engagement (vendor change only).
const contractRoles = computed(() => p.experiences.slice(0, 2))
const earlierRoles = computed(() => p.experiences.slice(2))
</script>
