import * as React from 'react'
import { Section } from '@/components/ui/section'
import { Button } from '@/components/ui/button'
import { CTASection } from '@/components/ui/cta-section'
import { ctaContent } from '../data/content'

export function CtaSection() {
  return (
    <div id="contact" data-section="contact">
      <CTASection
        variant="centered"
        background="subtle"
        heading={ctaContent.heading}
        subheading={ctaContent.subheading}
        primaryCta={
          <Button size="lg" asChild>
            <a href={ctaContent.primaryCta.href}>{ctaContent.primaryCta.label}</a>
          </Button>
        }
        secondaryCta={
          <Button variant="secondary" size="lg" asChild>
            <a href={ctaContent.secondaryCta.href}>{ctaContent.secondaryCta.label}</a>
          </Button>
        }
      />
    </div>
  )
}
