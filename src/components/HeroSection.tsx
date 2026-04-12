import { resumeData } from '@/content/resumeData'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { TypingEffect } from '@/components/TypingEffect'
import { RippleButton } from '@/components/RippleButton'
import './HeroSection.css'

export function HeroSection() {
  const { scrollTo } = useSmoothScroll()

  return (
    <section id="hero" className="hero">
      <div className="hero-bg">
        <div className="hero-gradient" />
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
