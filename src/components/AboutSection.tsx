import { resumeData } from '@/content/resumeData'
import './AboutSection.css'

export function AboutSection() {
  const { summary, skillGroups } = resumeData

  return (
    <section id="about" className="about-section section-alt">
      <h2 className="section-title">About</h2>
      <p className="about-summary">{summary}</p>
      <div className="about-skills">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-row">
            <span className="skill-category">{group.category}:</span>{' '}
            <span className="skill-items">{group.items.join(', ')}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
