import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { MenuIcon, XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navbarVariants = cva(
  'fixed top-0 left-0 right-0 z-50 h-[65px] font-sans',
  {
    variants: {
      variant: {
        solid: 'bg-card dark:bg-background border-b border-border',
        transparent: 'bg-transparent',
        minimal: 'bg-card/80 dark:bg-background/80 backdrop-blur-sm border-b border-border/50',
      },
    },
    defaultVariants: {
      variant: 'solid',
    },
  },
)

interface NavbarProps
  extends React.ComponentProps<'header'>,
    VariantProps<typeof navbarVariants> {
  logo?: React.ReactNode
  actions?: React.ReactNode
}

function Navbar({
  className,
  variant,
  logo,
  actions,
  children,
  ...props
}: NavbarProps) {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <header
      data-slot="navbar"
      className={cn(navbarVariants({ variant, className }))}
      {...props}
    >
      <div className="container mx-auto px-6 h-full flex items-center justify-between">
        {logo && (
          <div data-slot="navbar-logo" className="shrink-0">
            {logo}
          </div>
        )}

        <nav
          data-slot="navbar-nav"
          className="hidden md:flex items-center gap-1 text-sm font-semibold"
        >
          {children}
        </nav>

        <div className="flex items-center gap-2">
          {actions && (
            <div
              data-slot="navbar-actions"
              className="hidden md:flex items-center gap-2"
            >
              {actions}
            </div>
          )}

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <XIcon className="size-5" />
            ) : (
              <MenuIcon className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {mobileOpen && (
        <div
          data-slot="navbar-mobile"
          className="md:hidden border-b border-border bg-card dark:bg-background"
        >
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-2 text-sm font-semibold">
            {children}
          </nav>
          {actions && (
            <div className="container mx-auto px-6 pb-4 flex flex-col gap-2">
              {actions}
            </div>
          )}
        </div>
      )}
    </header>
  )
}

function NavbarLink({
  className,
  active,
  ...props
}: React.ComponentProps<'a'> & { active?: boolean }) {
  return (
    <a
      data-slot="navbar-link"
      data-active={active || undefined}
      className={cn(
        'px-3 py-2 text-foreground transition-opacity hover:opacity-70',
        'data-active:text-primary data-active:opacity-100',
        className,
      )}
      {...props}
    />
  )
}

export { Navbar, NavbarLink, navbarVariants }
