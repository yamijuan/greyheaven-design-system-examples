import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const footerVariants = cva(
  'border-t border-border bg-background font-sans',
  {
    variants: {
      variant: {
        minimal: 'py-8',
        full: 'py-12',
      },
    },
    defaultVariants: {
      variant: 'minimal',
    },
  },
)

interface FooterLinkGroup {
  title: string
  links: { label: string; href: string }[]
}

interface FooterProps
  extends React.ComponentProps<'footer'>,
    VariantProps<typeof footerVariants> {
  logo?: React.ReactNode
  copyright?: React.ReactNode
  linkGroups?: FooterLinkGroup[]
  actions?: React.ReactNode
}

function Footer({
  className,
  variant,
  logo,
  copyright,
  linkGroups,
  actions,
  children,
  ...props
}: FooterProps) {
  if (variant === 'full' && linkGroups) {
    return (
      <footer
        data-slot="footer"
        className={cn(footerVariants({ variant, className }))}
        {...props}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            {logo && (
              <div className="col-span-2 md:col-span-1">
                {logo}
              </div>
            )}
            {linkGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold mb-4">{group.title}</h4>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            {copyright && (
              <p className="text-sm text-muted-foreground">{copyright}</p>
            )}
            {actions}
          </div>
          {children}
        </div>
      </footer>
    )
  }

  return (
    <footer
      data-slot="footer"
      className={cn(footerVariants({ variant, className }))}
      {...props}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {logo && <div>{logo}</div>}
          {copyright && (
            <p className="text-sm text-muted-foreground">{copyright}</p>
          )}
          {actions}
          {children}
        </div>
      </div>
    </footer>
  )
}

export { Footer, footerVariants }
