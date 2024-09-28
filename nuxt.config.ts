// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
  ],
  eslint: {
    config: {
      stylistic: {
        semi: false,
        quotes: "double",
        indent: 2,
      },
    },
  },
  vue: {
    propsDestructure: true,
  },
  ui: {
    icons: ["simple-icons"],
  },
})
