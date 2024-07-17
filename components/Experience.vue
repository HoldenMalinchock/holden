<template>
    <UCard>
        <div class="mb-4" v-for="experience,index in experiences">
            <span class="text-bold text-xl">{{ experience.company + " - " + experience.title }}</span>
            <ul>
                <li class="indent-4 text-sm mb-4">{{ experience.location + " - " + experience.date}}</li>
                <li class="mb-2">{{ experience.description }}</li>
                <li class="text-bold flex justify-end text-primary-300">{{ experience.technologies.join(", ") }}</li>
            </ul>
            <UDivider v-if="index !== experiences.length - 1" class="my-4"/>
        </div>
    </UCard>
</template>

<script setup lang="ts">
const experiences = [
    {
        title: "Lead Full Stack Software Engineer",
        company: "Adapt Forward",
        location: "Charleston, SC",
        date: "Jan 2024 - Present",
        description: "Lead development role of a small team of developers working in Nuxt, typescript and python.  Maintaining a mid scale python application and developing new applications.",
        technologies: ["Python", "Docker", "Vuejs", "Typescript", "Nuxt", "Postgres"]
    },
    {
        title: "Full Stack Software Engineer",
        company: "Praxis Engineering",
        location: "Chantilly, VA",
        date: "2022 - 2024",
        description: "Software developer for a large scale VueJs application building the data analytics portion of the application. Built multiple custom components for advanced data visualization.",
        technologies: ["Vuejs", "Typescript", "Elasticsearch", "MongoDB"]
    },
    {
        title: "Software Engineer II",
        company: "Verisign",
        location: "Reston, VA",
        date: "2020 - 2022",
        description: "Software developer for the operations team. Upgraded and maintained a mid scale python application from python 2 to 3.  Designed and built an automated firewall rule system.",
        technologies: ["Python", "Flask", "Jenkins", "Groovy"]
    }
]
</script>