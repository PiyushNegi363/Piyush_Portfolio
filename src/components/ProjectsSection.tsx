import { resumeData } from '@/content/resumeData'
import './ProjectsSection.css'

const projectGradients = [
  'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
]

type Project = (typeof resumeData.projects)[number]

function ProjectCard({ project: p, gradient }: { project: Project; gradient: string; index: number }) {
  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.setProperty('--tx', `${-y * 6}deg`)
    el.style.setProperty('--ty', `${x * 6}deg`)
  }
  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.setProperty('--tx', '0deg')
    e.currentTarget.style.setProperty('--ty', '0deg')
  }

  return (
    <article
      className="project-card"
      data-stagger-item
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      <div className="project-thumbnail" style={{ background: gradient }}>
        <span className="project-thumbnail-icon">{p.title[0]}</span>
      </div>
      <div className="project-body">
        <div className="project-header">
          <h3 className="project-title">{p.title}</h3>
          <span className="project-year">{p.year}</span>
        </div>
        <div className="project-tech">
          {p.tech.map((t) => (
            <span key={t} className="project-tag">{t}</span>
          ))}
        </div>
        <ul className="project-bullets">
          {p.bullets.map((b, bi) => (
            <li key={bi}>{b}</li>
          ))}
        </ul>
        <div className="project-links">
          {p.demo && p.demo !== '#' && (
            <a href={p.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {resumeData.projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} gradient={projectGradients[i % 3]} index={i} />
        ))}
      </div>
    </section>
  )
}
