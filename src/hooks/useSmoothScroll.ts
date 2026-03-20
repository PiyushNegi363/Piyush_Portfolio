export function useSmoothScroll() {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
      // Small delay to ensure smooth completion
      setTimeout(() => {
        element.focus({ preventScroll: true })
      }, 100)
    }
  }

  return { scrollTo }
}
