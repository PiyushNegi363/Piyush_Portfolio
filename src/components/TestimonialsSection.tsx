import { useState } from 'react'
import { resumeData } from '@/content/resumeData'
import './TestimonialsSection.css'

export function TestimonialsSection() {
  const [active, setActive] = useState(0)
  const testimonials = resumeData.testimonials

  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonials-container">
        <blockquote className="testimonial-card">
          <p className="testimonial-quote">"{testimonials[active].quote}"</p>
          <footer className="testimonial-footer">
            <strong>{testimonials[active].author}</strong>
            <span>{testimonials[active].role}</span>
          </footer>
        </blockquote>
        <div className="testimonials-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testimonial-dot ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`View testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
