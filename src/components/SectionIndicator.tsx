import { useEffect, useState } from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import './SectionIndicator.css'

const SECTIONS = [
  { id: 'hero', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export function SectionIndicator() {
  const [active, setActive] = useState('hero')
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(e.target.id)
            break
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' }
    )
    els.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="section-indicator" aria-label="Page sections">
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          className={`section-dot ${active === s.id ? 'active' : ''}`}
          onClick={() => scrollTo(s.id)}
          aria-label={`Go to ${s.label}`}
          aria-current={active === s.id ? 'true' : undefined}
        >
          <span className="section-dot-tooltip">{s.label}</span>
        </button>
      ))}
    </nav>
  )
}
