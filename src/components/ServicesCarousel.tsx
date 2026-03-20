import { useState } from 'react'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import './ServicesCarousel.css'

const services = [
  {
    title: 'Full-Stack Development',
    desc: 'Building web apps with Flask, Streamlit, and modern front-end tools. Efficient, reliable software with clean UI.',
    accent: 'yellow',
    Icon: CodeIcon,
  },
  {
    title: 'Machine Learning & NLP',
    desc: 'NLP models, classification, recommendation engines. Strong foundation in scikit-learn, TF-IDF, and model tuning.',
    accent: 'blue',
    Icon: BrainIcon,
  },
  {
    title: 'Data Analytics',
    desc: 'Feature engineering, visualization, regression. Pandas, NumPy, Matplotlib for insights and prediction.',
    accent: 'pink',
    Icon: ChartIcon,
  },
]

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}

function BrainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  )
}

function ChartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10" />
      <line x1="12" y1="20" x2="12" y2="4" />
      <line x1="6" y1="20" x2="6" y2="14" />
    </svg>
  )
}

export function ServicesCarousel() {
  const [active, setActive] = useState(1)
  const { scrollTo } = useSmoothScroll()

  const prev = () => setActive((a) => (a - 1 + 3) % 3)
  const next = () => setActive((a) => (a + 1) % 3)

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <div className="services-cards">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`service-card ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <div className={`service-icon service-icon-${s.accent}`}>
                <s.Icon />
              </div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              {i === active && (
                <button onClick={(e) => { e.stopPropagation(); scrollTo('projects') }} className="service-cta">
                  Find out more
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="services-footer">
          <div className="services-nav">
            <button onClick={prev} aria-label="Previous">←</button>
            <button onClick={next} aria-label="Next">→</button>
          </div>
          <button onClick={() => scrollTo('contact')} className="services-contact-link">
            Contact me
          </button>
        </div>
      </div>
    </section>
  )
}
