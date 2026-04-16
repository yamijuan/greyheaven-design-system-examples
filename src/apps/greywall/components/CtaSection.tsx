import { CTASection } from '@/components/ui/cta-section'
import { Button } from '@/components/ui/button'
import { ExternalLinkIcon } from 'lucide-react'

export function GreywallCtaSection() {
  return (
    <div id="cta" data-section="cta">
      <CTASection
        variant="centered"
        background="subtle"
        heading="Ready to secure your AI workflow?"
        description="Greywall is free, open source, and ready to use today. Deny-by-default sandboxing in one command."
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
              Install Now
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <a
                href="https://docs.greywall.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read the Docs
                <ExternalLinkIcon className="ml-2 size-4" />
              </a>
            </Button>
          </>
        }
      />
    </div>
  )
}
