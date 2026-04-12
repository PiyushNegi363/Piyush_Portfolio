import { useInView } from '@/hooks/useInView'
import './AnimateOnScroll.css'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: boolean
  animation?: 'fade-up' | 'scale-up' | 'slide-left' | 'slide-right' | 'pop-in'
}

export function AnimateOnScroll({ children, className = '', delay = 0, stagger, animation = 'fade-up' }: Props) {
  const { ref, isInView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${animation} ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-stagger={stagger || undefined}
    >
      {children}
    </div>
  )
}
