import { useRef } from 'react'
import './RippleButton.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode
  className?: string
  as?: 'button'
}

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
  className?: string
  as: 'a'
}

type Props = ButtonProps | AnchorProps

export function RippleButton(props: Props) {
  const { children, className = '', ...rest } = props
  const ref = useRef<HTMLElement>(null)

  const onPointerDown = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.left = `${x}px`
    ripple.style.top = `${y}px`
    el.appendChild(ripple)
    requestAnimationFrame(() => ripple.classList.add('active'))
    const remove = () => {
      ripple.remove()
      el.removeEventListener('pointerup', remove)
      el.removeEventListener('pointerleave', remove)
    }
    el.addEventListener('pointerup', remove)
    el.addEventListener('pointerleave', remove)
  }

  if (props.as === 'a') {
    const { as, ...aProps } = rest as AnchorProps
    return (
      <a ref={ref as React.RefObject<HTMLAnchorElement>} className={`ripple-btn ${className}`} onPointerDown={onPointerDown} {...aProps}>
        {children}
      </a>
    )
  }

  const { as, ...btnProps } = rest as ButtonProps
  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} className={`ripple-btn ${className}`} onPointerDown={onPointerDown} {...btnProps}>
      {children}
    </button>
  )
}
