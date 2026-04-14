import * as React from 'react'
import { Hero } from '@/components/ui/hero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { heroContent, companyStats } from '../data/content'

export function HeroSection() {
  return (
    <div id="hero" data-section="hero">
      <Hero
        variant="centered"
        background="default"
        heading={heroContent.heading}
        subhing={heroContent.subheading}
        actions={
          <>
            <Button size="lg" asChild>
              <a href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</a>
            </Button>
          </>
        }
      />
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-8">
          {companyStats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl font-serif font-bold text-primary">{stat.value}</span>
              <span className="text-sm text-muted-foreground font-sans uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
