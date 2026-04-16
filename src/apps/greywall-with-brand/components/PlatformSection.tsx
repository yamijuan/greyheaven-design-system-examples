import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckIcon, XIcon } from 'lucide-react'
import { platformFeatures } from '../data/content'

export function PlatformSection() {
  return (
    <div id="platform" data-section="platform">
      <Section
        title="Platform support"
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
                Five independent kernel mechanisms — Bubblewrap, Landlock, Seccomp, eBPF, and
                TUN networking — each enforcing deny-by-default at its own boundary.
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
                <Badge variant="tag">Supported</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-sans mb-4">
                Apple's Seatbelt sandbox facility enforces deny-by-default filesystem and syscall
                rules through custom sandbox profiles.
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
          <CardContent>
            <p className="text-sm font-sans text-foreground leading-relaxed">
              <span className="font-semibold">Not a container.</span>{' '}
              The agent runs in the developer's normal environment — the same toolchains,
              working copies, and shell config. Greywall enforces the boundaries at the OS
              layer and records every denied operation.
            </p>
          </CardContent>
        </Card>
      </Section>
    </div>
  )
}
