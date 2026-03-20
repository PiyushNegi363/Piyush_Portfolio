import { resumeData } from '@/content/resumeData'
import './ExperienceSection.css'

export function ExperienceSection() {
  return (
    <section id="experience" className="experience-section section-alt">
      <h2 className="section-title">Skills & Certifications</h2>
      <div className="experience-grid">
        <div className="experience-block">
          <h3 className="experience-subtitle">Education</h3>
          {resumeData.education.map((e) => (
            <div key={e.institution} className="education-item">
              <h4 className="education-institution">{e.institution}</h4>
              <p className="education-degree">{e.degree} · {e.period}</p>
              {e.detail && <p className="education-detail">{e.detail}</p>}
            </div>
          ))}
        </div>
        <div className="experience-block">
          <h3 className="experience-subtitle">Certifications</h3>
          <ul className="cert-list">
            {resumeData.certifications.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
        <div className="experience-block">
          <h3 className="experience-subtitle">Achievements</h3>
          <ul className="achievement-list">
            {resumeData.achievements.map((a, i) => (
              <li key={i}>{a}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
