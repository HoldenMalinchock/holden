<template>
  <div class="term-block">
    <div class="term-section-label">// experience · {{ p.experiences.length }} roles</div>
    <ol class="term-timeline">
      <li
        v-for="(exp, i) in p.experiences"
        :key="exp.company + exp.startYear"
        class="term-timeline__item"
      >
        <div class="term-timeline__gutter">
          <span
            class="term-timeline__year"
            :class="{ 'is-current': i === 0 }"
          >{{ exp.startYear }}</span>
          <span
            v-if="i < p.experiences.length - 1"
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
</script>
