<template>
  <div class="term-block">
    <div class="term-section-label">// projects · {{ p.projects.length }} builds</div>
    <div class="term-projects">
      <article
        v-for="(project, i) in p.projects"
        :key="project.title"
        class="term-card term-project"
      >
        <div class="term-card__head">
          <div class="term-card__title">
            <span class="t-dim">{{ String(i + 1).padStart(2, "0") }}</span>
            {{ project.title }}
          </div>
          <div class="term-card__meta term-project__status">
            <TradingPercent v-if="project.showTradingPercent" />
            <span
              v-if="project.status"
              class="t-warn"
            >
              <span class="t-dot" />{{ project.status }}
            </span>
          </div>
        </div>
        <p class="term-prose">{{ project.description }}</p>
        <div class="term-tags">
          <span
            v-for="lang in project.languages"
            :key="lang"
            class="term-tag"
          >{{ lang }}</span>
        </div>
        <div class="term-actions">
          <a
            v-if="project.github"
            :href="project.github"
            target="_blank"
            rel="noopener"
            class="term-link"
          >↗ code</a>
          <a
            v-if="project.link"
            :href="project.link"
            target="_blank"
            rel="noopener"
            class="term-link term-link--accent"
          >↗ live</a>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const p = usePortfolio()
</script>
