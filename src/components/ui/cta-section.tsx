import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const ctaSectionVariants = cva('py-16 px-6', {
  variants: {
    variant: {
      centered: 'text-center',
      'left-aligned': 'text-left',
    },
    background: {
      default: 'bg-background',
      muted: 'bg-muted',
      accent: 'bg-primary text-primary-foreground',
      subtle: 'bg-primary/5',
    },
  },
  defaultVariants: {
    variant: 'centered',
    background: 'muted',
  },
})

interface CTASectionProps
  extends React.ComponentProps<'section'>,
    VariantProps<typeof ctaSectionVariants> {
  heading: React.ReactNode
  description?: React.ReactNode
  actions?: React.ReactNode
}

function CTASection({
  className,
  variant,
  background,
  heading,
  description,
  actions,
  children,
  ...props
}: CTASectionProps) {
  return (
    <section
      data-slot="cta-section"
      className={cn(ctaSectionVariants({ variant, background, className }))}
      {...props}
    >
      <div
        className={cn(
          'max-w-3xl',
          variant === 'centered' && 'mx-auto',
        )}
      >
        <h2 className="font-serif text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
          {heading}
        </h2>
        {description && (
          <p
            className={cn(
              'text-base font-sans mb-8 leading-relaxed',
              background === 'accent'
                ? 'text-primary-foreground/80'
                : 'text-muted-foreground',
            )}
          >
            {description}
          </p>
        )}
        {actions && (
          <div
            className={cn(
              'flex flex-wrap gap-4',
              variant === 'centered' && 'justify-center',
            )}
          >
            {actions}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export { CTASection, ctaSectionVariants }
