import { useEffect, useState } from 'react'
import './ScrollProgress.css'

export function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setPct(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="scroll-progress" role="presentation">
      <div className="scroll-progress-bar" style={{ width: `${pct}%` }} />
    </div>
  )
}
