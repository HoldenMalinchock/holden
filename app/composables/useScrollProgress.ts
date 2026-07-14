import { ref, readonly } from "vue"

/**
 * Reactive whole-page scroll progress in the range 0..1.
 * rAF-throttled, passive listeners, SSR-safe, and reports the user's
 * reduced-motion preference so callers can freeze any motion they drive.
 */
export function useScrollProgress() {
  const progress = ref(0)
  const reduced = ref(false)
  let frame = 0

  function measure() {
    frame = 0
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  }

  function onScroll() {
    if (frame) return
    frame = requestAnimationFrame(measure)
  }

  onMounted(() => {
    reduced.value = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    measure()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll, { passive: true })
  })

  onBeforeUnmount(() => {
    if (frame) cancelAnimationFrame(frame)
    window.removeEventListener("scroll", onScroll)
    window.removeEventListener("resize", onScroll)
  })

  return { progress: readonly(progress), reduced: readonly(reduced) }
}
