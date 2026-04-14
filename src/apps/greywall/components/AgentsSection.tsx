import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
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
            <Badge key={agent.name} variant="tag" className="text-sm px-3 py-1.5">
              {agent.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          ...and any other CLI-based coding tool. Just run{' '}
          <code className="font-mono text-foreground bg-muted px-1.5 py-0.5 rounded text-xs">
            greywall -- your-agent
          </code>
        </p>
      </Section>
    </div>
  )
}
