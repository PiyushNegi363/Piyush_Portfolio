import { resumeData } from '@/content/resumeData'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import { ThemeToggle } from '@/components/ThemeToggle'
import './Navbar.css'

export function Navbar() {
  const { scrollTo } = useSmoothScroll()

  return (
    <nav className="navbar">
      <button className="navbar-brand" onClick={() => scrollTo('hero')}>
        {resumeData.name}
      </button>
      <div className="navbar-links">
        <ThemeToggle />
        <a href={resumeData.contact.github} target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="GitHub">
          GitHub
        </a>
        <a href={resumeData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="nav-link" aria-label="LinkedIn">
          LinkedIn
        </a>
        <a href="/Piyush_Negi_Resume.pdf" download className="nav-cta">
          Resume
        </a>
        <button onClick={() => scrollTo('contact')} className="nav-cta nav-cta-primary">
          Contact
        </button>
      </div>
    </nav>
  )
}
