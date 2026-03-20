import { useEffect, useState } from 'react'
import { resumeData } from '@/content/resumeData'
import './LoadingScreen.css'

type Props = {
  onComplete: () => void
}

export function LoadingScreen({ onComplete }: Props) {
  const [phase, setPhase] = useState<'init' | 'fade' | 'done'>('init')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('fade'), 1200)
    const t2 = setTimeout(() => {
      setPhase('done')
      onComplete()
    }, 1800)
    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [onComplete])

  const initials = resumeData.name.split(' ').map((n) => n[0]).join('')

  return (
    <div className={`loading-screen ${phase}`} aria-hidden="true">
      <div className="loading-content">
        <div className="loading-logo">
          <span>{initials}</span>
        </div>
        <div className="loading-bar">
          <div className="loading-progress" />
        </div>
      </div>
    </div>
  )
}
