import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  ShieldIcon,
  FolderLockIcon,
  FilterIcon,
  EyeIcon,
  NetworkIcon,
  SparklesIcon,
  RadioIcon,
} from 'lucide-react'
import { securityLayers } from '../data/content'

const layerIcons = [ShieldIcon, FolderLockIcon, FilterIcon, EyeIcon, NetworkIcon]

export function FeaturesSection() {
  return (
    <div id="features" data-section="features">
      <Section
        width="wide"
        title="Five Layers of Defense"
        description="Greywall enforces deny-by-default security through multiple independent isolation mechanisms on Linux. macOS uses Apple's Seatbelt profiles for equivalent protection."
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {securityLayers.map((layer, i) => {
            const Icon = layerIcons[i]
            return (
              <Card key={layer.name}>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Badge variant="default">Layer {i + 1}</Badge>
                    <Badge variant="outline">Linux</Badge>
                  </div>
                  <Icon className="size-6 text-muted-foreground" />
                  <CardTitle className="font-serif text-lg">{layer.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {layer.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <SparklesIcon className="size-6 text-primary mb-1" />
              <CardTitle className="font-serif text-lg">Learning Mode</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                Run your agent once with <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded text-xs">greywall --learning</code> to
                trace every filesystem path and network call it needs. Greywall auto-generates
                a least-privilege config profile — no manual allowlisting required.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <RadioIcon className="size-6 text-primary mb-1" />
              <CardTitle className="font-serif text-lg">Greyproxy Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                All network traffic routes through a transparent SOCKS5/DNS proxy with a
                live dashboard. Review, allow, or deny connections in real time — even while
                your agent is still running.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
