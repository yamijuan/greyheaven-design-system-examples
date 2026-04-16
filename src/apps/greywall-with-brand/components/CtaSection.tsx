import { CTASection } from '@/components/ui/cta-section'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'

export function GreywallCtaSection() {
  return (
    <div id="cta" data-section="cta">
      <CTASection
        variant="centered"
        background="subtle"
        heading="See how it runs in your environment"
        description="Greywall is open source under Apache 2.0. Install it and wrap one agent to see what it actually accesses on your machine."
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
                href="https://docs.greywall.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the docs
                <ExternalLinkIcon className="ml-2 size-4" />
              </a>
            </Button>
          </>
        }
      />
    </div>
  )
}
