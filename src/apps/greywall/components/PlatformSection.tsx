import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, XIcon } from 'lucide-react'
import { platformFeatures } from '../data/content'

export function PlatformSection() {
  return (
    <div id="platform" data-section="platform">
      <Section
        title="Platform Support"
        description="Full five-layer enforcement on Linux. Seatbelt-based sandboxing on macOS. Both deny-by-default."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-1">
                <CardTitle className="font-serif text-xl">Linux</CardTitle>
                <Badge variant="default">Full Support</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Five independent kernel-level isolation layers — Bubblewrap, Landlock, Seccomp,
                eBPF, and TUN networking — enforcing deny-by-default at every boundary.
              </p>
              <ul className="space-y-2">
                {platformFeatures.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-2 text-sm font-sans">
                    {feature.linux ? (
                      <CheckIcon className="size-4 text-primary shrink-0" />
                    ) : (
                      <XIcon className="size-4 text-muted-foreground shrink-0" />
                    )}
                    <span className={feature.linux ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-3 mb-1">
                <CardTitle className="font-serif text-xl">macOS</CardTitle>
                <Badge variant="secondary">Supported</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Apple's Seatbelt sandbox facility provides deny-by-default filesystem and syscall
                restrictions via custom sandbox profiles.
              </p>
              <ul className="space-y-2">
                {platformFeatures.map((feature) => (
                  <li key={feature.name} className="flex items-center gap-2 text-sm font-sans">
                    {feature.macos ? (
                      <CheckIcon className="size-4 text-primary shrink-0" />
                    ) : (
                      <XIcon className="size-4 text-muted-foreground shrink-0" />
                    )}
                    <span className={feature.macos ? 'text-foreground' : 'text-muted-foreground'}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6">
            <p className="text-sm font-sans text-foreground leading-relaxed">
              <span className="font-semibold">Not a container.</span>{' '}
              Unlike Docker, Greywall keeps your agent in the normal local dev environment with
              your actual toolchains, working copies, and shell config — while still enforcing
              OS-layer boundaries and logging every violation.
            </p>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
