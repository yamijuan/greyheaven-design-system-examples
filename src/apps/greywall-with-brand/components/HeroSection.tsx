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
        heading="Run AI coding agents behind kernel-level boundaries"
        subheading="Greywall wraps any CLI agent in a deny-by-default sandbox. Filesystem, network, and syscall access are scoped at the kernel — the agent still sees your real toolchains, shell, and working copy."
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
              Review the install options
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://github.com/GreyhavenHQ/greywall"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the source
                <ExternalLinkIcon className="ml-2 size-4" />
              </a>
            </Button>
          </>
        }
      />
      <div className="flex flex-wrap justify-center gap-3 -mt-16 pb-8">
        <Badge variant="tag" size="lg">Open Source</Badge>
        <Badge variant="tag" size="lg">Apache 2.0</Badge>
        <Badge variant="tag" size="lg">Linux + macOS</Badge>
      </div>
    </div>
  )
}
