import { cn } from '@/lib/utils'

const NAVBAR_HEIGHT = 65

interface ScrollNavLinkProps {
  sectionId: string
  active?: boolean
  children: React.ReactNode
}

export function ScrollNavLink({ sectionId, active, children }: ScrollNavLinkProps) {
  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    e.preventDefault()
    const el = document.getElementById(sectionId)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - NAVBAR_HEIGHT
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <a
      href={`#${sectionId}`}
      onClick={handleClick}
      className={cn(
        'px-3 py-2 text-foreground transition-opacity hover:opacity-70 font-sans text-sm font-semibold cursor-pointer',
        active && 'text-primary opacity-100',
      )}
    >
      {children}
    </a>
  )
}
