import { useEffect } from 'react'

// Shows each [data-reveal] element once it scrolls into view. Elements added later
// (e.g. when the More work filter changes) are picked up by the MutationObserver.
export function useReveal() {
  useEffect(() => {
    const reveal = (el) => el.classList.add('is-in')

    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('[data-reveal]').forEach(reveal)
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )

    const watch = (root) => {
      if (root.matches?.('[data-reveal]:not(.is-in)')) io.observe(root)
      root.querySelectorAll?.('[data-reveal]:not(.is-in)').forEach((el) => io.observe(el))
    }

    watch(document.body)

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach((node) => node.nodeType === 1 && watch(node)))
    })
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      io.disconnect()
      mo.disconnect()
    }
  }, [])
}
