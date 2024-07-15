<template>
    <div>
        <ProjectTile v-for="project in projects" :title="project.title" :description="project.description" :languages="project.languages" :github="project.github" :link="project.link"/>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    projects: {
        title: string;
        description: string;
        languages: string[];
        github: string;
        link: string
    }[]
}>();
</script>