import * as React from 'react'

import { cn } from '@/lib/utils'

interface PageLayoutProps extends React.ComponentProps<'div'> {
  navbar?: React.ReactNode
  sidebar?: React.ReactNode
  footer?: React.ReactNode
}

function PageLayout({
  className,
  navbar,
  sidebar,
  footer,
  children,
  ...props
}: PageLayoutProps) {
  return (
    <div
      data-slot="page-layout"
      className={cn('min-h-screen flex flex-col bg-background text-foreground', className)}
      {...props}
    >
      {navbar}
      <div
        className={cn(
          'flex flex-1',
          navbar && 'pt-[65px]',
        )}
      >
        {sidebar && (
          <aside
            data-slot="page-layout-sidebar"
            className="hidden lg:block w-64 border-r border-border bg-background flex-shrink-0"
          >
            {sidebar}
          </aside>
        )}
        <main
          data-slot="page-layout-main"
          className="flex-1 min-w-0"
        >
          {children}
        </main>
      </div>
      {footer}
    </div>
  )
}

export { PageLayout }
