<template>
  <div class="term-block">
    <div class="term-section-label">// experience · {{ p.experiences.length }} roles</div>

    <div class="exp">
      <!-- Continuous client engagement (vendor change only) -->
      <div class="exp-contract">
        <ol class="exp-list exp-list--contract">
          <li
            v-for="(exp, i) in contractRoles"
            :key="exp.company + exp.startYear"
            class="exp-row"
          >
            <div class="exp-gutter">
              <span
                class="exp-year"
                :class="{ 'is-current': i === 0 }"
              >{{ exp.startYear }}</span>
              <span
                v-if="i < contractRoles.length - 1"
                class="exp-spine"
              />
            </div>
            <article class="term-card exp-card">
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
            </article>
          </li>
        </ol>

        <div
          class="exp-brace"
          aria-label="Same client contract"
        >
          <span class="exp-brace__label">same contract</span>
        </div>
      </div>

      <!-- Earlier roles — same grid so card widths match -->
      <ol class="exp-list exp-list--rest">
        <li
          v-for="(exp, i) in earlierRoles"
          :key="exp.company + exp.startYear"
          class="exp-row exp-row--rest"
        >
          <div class="exp-gutter">
            <span class="exp-year">{{ exp.startYear }}</span>
            <span
              v-if="i < earlierRoles.length - 1"
              class="exp-spine"
            />
          </div>
          <article class="term-card exp-card">
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
          </article>
          <div class="exp-brace-spacer" aria-hidden="true" />
        </li>
      </ol>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()

// First two roles = one continuous client engagement (vendor change only).
const contractRoles = computed(() => p.experiences.slice(0, 2))
const earlierRoles = computed(() => p.experiences.slice(2))
</script>
