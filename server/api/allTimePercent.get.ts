/**
 * Proxy the live all-time trading return so the portfolio can read it
 * same-origin (avoids CORS when /projects mounts client-side via slash commands).
 */
export default defineEventHandler(async () => {
  try {
    const data = await $fetch<{ change: string, total?: number }>(
      "https://trading-dashboard.hmalinch.deno.net/api/allTimePercent",
    )
    return data
  }
  catch {
    // Don't break the page if the dashboard is down
    return null
  }
})
