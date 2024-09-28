<template>
  <UCard class="my-2">
    <div class="flex flex-col">
      <h1 class="text-xl font-mono font-bold flex">
        {{ props.title }} <slot
          name="title-secondary"
          class="ms-4"
        />
      </h1>
      <span class="text-bold flex mt-4">{{ props.description }}</span>
      <span class="text-bold text-primary-300 mt-3">{{ languages.join(", ") }}</span>
      <ULink
        v-if="props.link"
        :to="props.link"
        :external="true"
        class="text-bold mt-4 underline"
      >
        {{ link }}
      </ULink>
      <UButton
        :padded="false"
        color="gray"
        class="mt-2"
        variant="link"
        icon="i-simple-icons-github"
        :to="props.github"
      />
    </div>
  </UCard>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string
  description: string
  languages: string[]
  link: string
  github: string
}>()
</script>
