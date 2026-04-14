import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const heroVariants = cva('py-24 px-6', {
  variants: {
    variant: {
      centered: 'text-center',
      'left-aligned': 'text-left',
      split: 'text-left',
    },
    background: {
      default: 'bg-hero-bg',
      muted: 'bg-muted',
      accent: 'bg-primary/5',
      dark: 'bg-foreground text-background',
    },
  },
  defaultVariants: {
    variant: 'centered',
    background: 'default',
  },
})

interface HeroProps
  extends React.ComponentProps<'section'>,
    VariantProps<typeof heroVariants> {
  heading: React.ReactNode
  subheading?: React.ReactNode
  actions?: React.ReactNode
  media?: React.ReactNode
}

function Hero({
  className,
  variant,
  background,
  heading,
  subheading,
  actions,
  media,
  children,
  ...props
}: HeroProps) {
  const isSplit = variant === 'split'

  return (
    <section
      data-slot="hero"
      className={cn(heroVariants({ variant, background, className }))}
      {...props}
    >
      <div
        className={cn(
          'max-w-7xl mx-auto',
          isSplit && 'grid grid-cols-1 lg:grid-cols-2 gap-12 items-center',
        )}
      >
        <div
          className={cn(
            variant === 'centered' && 'max-w-3xl mx-auto',
            !isSplit && 'max-w-3xl',
          )}
        >
          <h1 className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight mb-6">
            {heading}
          </h1>
          {subheading && (
            <p className="text-lg text-muted-foreground font-sans mb-8 leading-relaxed">
              {subheading}
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
        {isSplit && media && (
          <div className="flex items-center justify-center">{media}</div>
        )}
      </div>
    </section>
  )
}

export { Hero, heroVariants }
