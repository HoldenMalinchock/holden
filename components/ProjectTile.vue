<template>
    <UCard class="my-2">
        <div class="flex flex-col">
            <h1 class="text-xl font-mono font-bold flex">{{ props.title }}</h1>
            <span class="text-bold flex mt-4">{{ props.description }}</span>
            <div class="flex-col">
                <span v-for="language in languages" class="text-bold mt-4 underline me-4">{{ language }}</span>
            </div>
            <ULink v-if="props.link" :to="props.link" :external="true" class="text-bold mt-4 underline">{{ link }}</ULink>
            <UIcon class="mt-2" name="i-simple-icons-github"/>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string;
    description: string;
    languages: string[];
    link: string;
    github: string;
}>();
</script>