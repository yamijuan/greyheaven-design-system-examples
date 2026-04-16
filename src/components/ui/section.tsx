import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const sectionVariants = cva('py-10', {
  variants: {
    variant: {
      default: '',
      highlighted: 'bg-card my-8',
      accent: 'bg-primary/5 my-8',
    },
    width: {
      narrow: 'max-w-3xl mx-auto',
      default: 'max-w-5xl mx-auto',
      wide: 'max-w-7xl mx-auto',
      full: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'default',
    width: 'default',
  },
})

interface SectionProps
  extends React.ComponentProps<'section'>,
    VariantProps<typeof sectionVariants> {
  title?: string
  description?: string
}

function Section({
  className,
  variant,
  width,
  title,
  description,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      data-slot="section"
      className={cn(sectionVariants({ variant, width, className }))}
      {...props}
    >
      <div className="px-6">
        {(title || description) && (
          <div className="mb-8">
            {title && (
              <h2 className="font-serif text-3xl font-semibold tracking-tight mb-3">
                {title}
              </h2>
            )}
            {description && (
              <p className="text-muted-foreground font-sans text-base max-w-2xl">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export { Section, sectionVariants }
