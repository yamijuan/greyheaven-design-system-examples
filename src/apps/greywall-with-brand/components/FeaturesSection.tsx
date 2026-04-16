import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code } from '@/components/ui/code'
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
        title="Five isolation layers"
        description="On Linux, Greywall composes five independent kernel mechanisms. On macOS, the same deny-by-default posture is enforced through Apple's Seatbelt sandbox profiles."
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
                Run the agent once with <Code>greywall --learning</Code> to record every
                filesystem path and network endpoint it touches. Greywall writes a
                least-privilege profile from the trace. No manual allowlisting.
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
                Outbound traffic routes through a SOCKS5 and DNS proxy. A live dashboard shows
                each connection. Allow or deny them while the agent is still running.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
