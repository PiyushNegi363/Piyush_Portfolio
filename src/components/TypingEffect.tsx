import { useState, useEffect } from 'react'
import './TypingEffect.css'

const phrases = ['ML Engineer', 'Full-Stack Developer', 'Data Enthusiast', 'NLP Practitioner']

export function TypingEffect() {
  const [index, setIndex] = useState(0)
  const [display, setDisplay] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const phrase = phrases[index]
    const speed = isDeleting ? 50 : 100

    if (!isDeleting && display === phrase) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000)
      return () => clearTimeout(timeout)
    }
    if (isDeleting && display === '') {
      setIsDeleting(false)
      setIndex((i) => (i + 1) % phrases.length)
      return
    }

    const timeout = setTimeout(
      () => setDisplay(isDeleting ? phrase.slice(0, display.length - 1) : phrase.slice(0, display.length + 1)),
      speed
    )
    return () => clearTimeout(timeout)
  }, [display, isDeleting, index])

  return (
    <span className="typing-effect">
      <span className="typing-text">{display}</span>
      <span className="typing-cursor">|</span>
    </span>
  )
}
