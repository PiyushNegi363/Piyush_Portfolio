import { useEffect, useRef, useState } from 'react'
import { resumeData } from '@/content/resumeData'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { TypingEffect } from '@/components/TypingEffect'
import { RippleButton } from '@/components/RippleButton'
import './HeroSection.css'

export function HeroSection() {
  const shapesRef = useRef<HTMLDivElement>(null)
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })
  const { scrollTo } = useSmoothScroll()

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  const dx = (mouse.x - 0.5) * 20
  const dy = (mouse.y - 0.5) * 20

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
        <div className="hero-shapes" ref={shapesRef}>
          <div
            className="shape shape-1"
            style={{ transform: `translate(${dx}px, ${dy}px)` }}
          />
          <div
            className="shape shape-2"
            style={{ transform: `translate(${-dx * 0.7}px, ${-dy * 0.7}px)` }}
          />
          <div
            className="shape shape-3"
            style={{ transform: `translate(${dx * 0.5}px, ${-dy * 0.5}px)` }}
          />
        </div>
      </div>
      <div className="hero-content">
        <div className="hero-avatar">
          <div className="avatar-placeholder">
            <span>{resumeData.name.split(' ').map((n) => n[0]).join('')}</span>
          </div>
        </div>
        <p className="hero-tagline">
          <TypingEffect />
        </p>
        <h1 className="hero-title">{resumeData.name}</h1>
        <p className="hero-summary">{resumeData.summary}</p>
        <div className="hero-ctas">
          <RippleButton as="button" onClick={() => scrollTo('projects')} className="btn btn-primary">
            View Projects
          </RippleButton>
          <RippleButton as="a" href="/Piyush_Negi_Resume.pdf" download className="btn btn-secondary">
            Download Resume
          </RippleButton>
          <RippleButton as="button" onClick={() => scrollTo('contact')} className="btn btn-secondary">
            Contact
          </RippleButton>
        </div>
      </div>
    </section>
  )
}
