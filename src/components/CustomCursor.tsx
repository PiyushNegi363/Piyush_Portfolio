import { useEffect, useState } from 'react'
import './CustomCursor.css'

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    if (isTouch) return

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY })
    const enter = () => setHover(true)
    const leave = () => setHover(false)

    const targets = document.querySelectorAll('a, button, [role="button"], .project-card, .service-card')
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter)
      el.addEventListener('mouseleave', leave)
    })

    window.addEventListener('mousemove', move)
    return () => {
      window.removeEventListener('mousemove', move)
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter)
        el.removeEventListener('mouseleave', leave)
      })
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
      <div
        className={`cursor-ring ${hover ? 'hover' : ''}`}
        style={{ left: pos.x, top: pos.y }}
        aria-hidden="true"
      />
    </>
  )
}
