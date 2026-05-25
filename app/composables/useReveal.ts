export function useReveal() {
  if (import.meta.server) return

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -80px 0px" },
    )

    for (const el of document.querySelectorAll(".reveal")) {
      observer.observe(el)
    }
  })
}
