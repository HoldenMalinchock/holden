<template>
  <div>
    <ProjectTile
      v-for="project, index in projects"
      :key="index"
      :title="project.title"
      :description="project.description"
      :languages="project.languages"
      :github="project.github"
      :link="project.link"
    >
      <template #title-secondary>
        <TradingPercent
          v-if="project.github == 'https://github.com/HoldenMalinchock/trades'"
          class="ms-4"
        />
      </template>
    </ProjectTile>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  projects: {
    title: string
    description: string
    languages: string[]
    github: string
    link: string
  }[]
}>()
</script>
