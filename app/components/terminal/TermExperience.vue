<template>
  <div class="term-block">
    <div class="term-section-label">// experience · {{ p.experiences.length }} roles</div>
    <ol class="term-timeline">
      <li
        v-for="(exp, i) in p.experiences"
        :key="exp.company + exp.startYear"
        class="term-timeline__item"
        :class="{
          'is-current': i === 0,
          'is-contract-start': i === 0,
          'is-contract-end': i === 1,
          'is-contract': i < 2,
        }"
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

        <!-- Reserved right column on every row keeps card widths equal.
             Brace only draws for the continuous client engagement. -->
        <div
          class="term-timeline__edge"
          aria-hidden="true"
        >
          <template v-if="i < 2">
            <span class="term-timeline__edge-line" />
            <span
              v-if="i === 0"
              class="term-timeline__edge-cap is-top"
            />
            <span
              v-if="i === 1"
              class="term-timeline__edge-cap is-bottom"
            />
            <span
              v-if="i === 0"
              class="term-timeline__edge-label"
            >same contract</span>
          </template>
        </div>
      </li>
    </ol>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
