import { resumeData } from '@/content/resumeData'
import { useSmoothScroll } from '@/hooks/useSmoothScroll'
import './Footer.css'

export function Footer() {
  const { scrollTo } = useSmoothScroll()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copy">© {new Date().getFullYear()} {resumeData.name}. All rights reserved.</p>
        <nav className="footer-links">
          <button onClick={() => scrollTo('about')}>About</button>
          <button onClick={() => scrollTo('projects')}>Projects</button>
          <button onClick={() => scrollTo('experience')}>Experience</button>
          <button onClick={() => scrollTo('contact')}>Contact</button>
        </nav>
      </div>
    </footer>
  )
}
