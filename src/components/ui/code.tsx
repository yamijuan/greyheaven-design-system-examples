import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const codeVariants = cva(
  'bg-muted border border-border font-mono text-foreground',
  {
    variants: {
      variant: {
        inline: 'rounded text-xs px-1.5 py-0.5',
        block: 'block rounded-md text-sm px-4 py-3 leading-relaxed break-all whitespace-pre-wrap',
      },
    },
    defaultVariants: {
      variant: 'inline',
    },
  },
)

interface CodeProps
  extends React.ComponentProps<'code'>,
    VariantProps<typeof codeVariants> {
  language?: string
}

function Code({
  className,
  variant,
  language,
  ...props
}: CodeProps) {
  const element = (
    <code
      data-slot="code"
      data-language={language}
      className={cn(
        codeVariants({ variant, className }),
        language && `language-${language}`,
      )}
      {...props}
    />
  )

  if (variant === 'block') {
    return (
      <pre data-slot="code-block" className="not-prose">
        {element}
      </pre>
    )
  }

  return element
}

export { Code, codeVariants }
