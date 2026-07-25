export default defineAppConfig({
  ui: {
    colors: {
      // Black/white solid primaries are set in main.css (--ui-primary).
      // Nuxt UI cannot use primary: 'black' here (no shade scale).
      primary: "neutral",
      neutral: "neutral",
    },
  },
})
