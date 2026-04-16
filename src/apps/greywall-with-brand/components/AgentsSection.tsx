import { Section } from '@/components/ui/section'
import { Badge } from '@/components/ui/badge'
import { Code } from '@/components/ui/code'
import { supportedAgents } from '../data/content'

export function AgentsSection() {
  return (
    <div id="agents" data-section="agents">
      <Section
        variant="highlighted"
        title="Works with any CLI agent"
        description="Greywall wraps the process. It does not require plugins, vendor integration, or changes to the agent itself. Prefix the command, and the sandbox applies."
      >
        <div className="flex flex-wrap gap-3 mb-6">
          {supportedAgents.map((agent) => (
            <Badge key={agent.name} variant="tag" size="lg">
              {agent.name}
            </Badge>
          ))}
        </div>
        <p className="text-sm text-muted-foreground font-sans">
          And any other CLI-based coding tool. Run{' '}
          <Code>greywall -- your-agent</Code>.
        </p>
      </Section>
    </div>
  )
}
