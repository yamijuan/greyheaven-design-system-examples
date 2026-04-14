import { Hero } from '@/components/ui/hero'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLinkIcon } from 'lucide-react'

export function HeroSection() {
  return (
    <div id="hero" data-section="hero">
      <Hero
        variant="centered"
        background="default"
        heading="Contain and observe AI agents without friction"
        subheading="Greywall is a container-free, deny-by-default sandbox for AI coding agents. Kernel-level filesystem, network, and syscall isolation on Linux and macOS — without leaving your dev environment."
        actions={
          <>
            <Button
              size="lg"
              onClick={() => {
                const el = document.getElementById('install')
                if (el) {
                  const y = el.getBoundingClientRect().top + window.scrollY - 65
                  window.scrollTo({ top: y, behavior: 'smooth' })
                }
              }}
            >
              Get Started
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://github.com/GreyhavenHQ/greywall"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on GitHub
                <ExternalLinkIcon className="ml-2 size-4" />
              </a>
            </Button>
          </>
        }
      />
      <div className="flex flex-wrap justify-center gap-3 -mt-16 pb-8">
        <Badge variant="secondary">Open Source</Badge>
        <Badge variant="secondary">Apache 2.0</Badge>
        <Badge variant="secondary">Linux + macOS</Badge>
      </div>
    </div>
  )
}
