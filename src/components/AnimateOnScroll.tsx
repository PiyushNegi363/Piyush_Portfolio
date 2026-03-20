import { useInView } from '@/hooks/useInView'
import './AnimateOnScroll.css'

type Props = {
  children: React.ReactNode
  className?: string
  delay?: number
  stagger?: boolean
}

export function AnimateOnScroll({ children, className = '', delay = 0, stagger }: Props) {
  const { ref, isInView } = useInView(0.15)

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${isInView ? 'visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      data-stagger={stagger || undefined}
    >
      {children}
    </div>
  )
}
