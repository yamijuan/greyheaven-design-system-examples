import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Code } from '@/components/ui/code'
import { supportedAgents } from '../data/content'

export function AgentsSection() {
  return (
    <div id="agents" data-section="agents">
      <Section
        variant="highlighted"
        title="Works With Your Agent"
        description="Greywall wraps any CLI-based AI coding agent — no plugins, no vendor lock-in. Just prefix your command."
      >
        <div className="flex flex-wrap gap-3 mb-6">
          {supportedAgents.map((agent) => (
            <Badge key={agent.name} variant="tag" size="lg">
              {agent.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          ...and any other CLI-based coding tool. Just run{' '}
          <Code>greywall -- your-agent</Code>
        </p>
      </Section>
    </div>
  )
}
