<template>
  <div class="term-block term-block--wide">
    <div class="term-section-label">// skills · ls -lta ~/skills</div>

    <div class="skills-ls" aria-label="Skills directory listing">
      <div class="skills-ls__meta t-dim">total {{ p.skills.length }}</div>

      <div
        v-for="skill in p.skills"
        :key="skill.name"
        class="skills-ls__row"
      >
        <span class="skills-ls__mode t-dim">-rwxr-xr-x</span>
        <span class="skills-ls__nlink t-dim">1</span>
        <span class="skills-ls__owner">holden</span>
        <span class="skills-ls__group t-dim">{{ skill.category }}</span>
        <span class="skills-ls__size t-dim">{{ skill.size.padStart(4, " ") }}</span>
        <span class="skills-ls__mtime t-dim">{{ skill.mtime }}</span>
        <span class="skills-ls__name">
          <span class="text-primary">{{ skill.name }}</span><span class="t-dim">.{{ skill.ext }}</span>
        </span>
        <span class="skills-ls__note t-dim"># {{ skill.note }}</span>
      </div>
    </div>

    <div class="skills-legend">
      <div class="skills-legend__title t-dim">// groups</div>
      <div class="skills-legend__items">
        <span
          v-for="group in groups"
          :key="group"
          class="skills-legend__item"
        >
          <span class="t-dim">drwxr-xr-x</span>
          <span class="text-primary">{{ group }}/</span>
          <span class="t-dim">{{ countIn(group) }}</span>
        </span>
      </div>
    </div>

    <div class="term-hint t-dim">
      sorted like <span class="text-primary">ls -lt</span> · most-reached tools first · frontend · backend · infra
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Skill } from "~/composables/usePortfolio"

const p = usePortfolio()

const groups = computed(() => {
  const seen = new Set<Skill["category"]>()
  for (const s of p.skills) seen.add(s.category)
  return [...seen]
})

function countIn(group: Skill["category"]) {
  return p.skills.filter(s => s.category === group).length
}
</script>
