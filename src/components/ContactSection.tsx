import { FormEvent, useState } from 'react'
import emailjs from '@emailjs/browser'
import { resumeData } from '@/content/resumeData'
import './ContactSection.css'

export function ContactSection() {
  const { contact } = resumeData
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSending, setIsSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!serviceId || !templateId || !publicKey) {
      setSubmitStatus({
        type: 'error',
        message: 'Email service is not configured yet. Please add EmailJS environment variables.',
      })
      return
    }

    try {
      setIsSending(true)
      setSubmitStatus(null)

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `Portfolio inquiry from ${formData.name}`,
          message: formData.message,
          time: new Date().toLocaleString(),
          to_email: contact.email,
        },
        { publicKey },
      )

      setSubmitStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  const onChange = (field: 'name' | 'email' | 'subject' | 'message', value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-layout">
        <div className="contact-card contact-info-card">
          <div>
            <p className="contact-intro">Let&apos;s connect - send me a message.</p>
            <div className="contact-links">
              <a href={`mailto:${contact.email}`} className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">{contact.email}</span>
              </a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="contact-item">
                <span className="contact-label">Phone</span>
                <span className="contact-value">{contact.phone}</span>
              </a>
              <a href={contact.github} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-label">GitHub</span>
                <span className="contact-value">github.com/PiyushNegi363</span>
              </a>
              <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">linkedin.com/in/piyush-negi</span>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card contact-form-card">
          <form className="contact-form" onSubmit={onSubmit}>
            <label className="contact-field" htmlFor="contact-name">
              Name
              <input
                id="contact-name"
                type="text"
                value={formData.name}
                onChange={(e) => onChange('name', e.target.value)}
                placeholder="Your name"
                required
              />
            </label>

            <label className="contact-field" htmlFor="contact-email">
              Email
              <input
                id="contact-email"
                type="email"
                value={formData.email}
                onChange={(e) => onChange('email', e.target.value)}
                placeholder="you@example.com"
                required
              />
            </label>

            <label className="contact-field" htmlFor="contact-subject">
              Subject
              <input
                id="contact-subject"
                type="text"
                value={formData.subject}
                onChange={(e) => onChange('subject', e.target.value)}
                placeholder="Project discussion"
              />
            </label>

            <label className="contact-field" htmlFor="contact-message">
              Message
              <textarea
                id="contact-message"
                value={formData.message}
                onChange={(e) => onChange('message', e.target.value)}
                placeholder="Write your message"
                rows={5}
                required
              />
            </label>

            <button type="submit" className="contact-submit" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Message'}
            </button>

            {submitStatus && (
              <p className={`contact-status contact-status-${submitStatus.type}`} role="status" aria-live="polite">
                {submitStatus.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
