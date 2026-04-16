import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FileWarningIcon, GlobeIcon, TerminalIcon } from 'lucide-react'

const problems = [
  {
    icon: FileWarningIcon,
    title: 'Filesystem access',
    description:
      'A CLI agent inherits the developer\'s filesystem permissions. That includes SSH keys, shell history, credential stores, and environment files outside the project directory.',
  },
  {
    icon: GlobeIcon,
    title: 'Outbound network',
    description:
      'With no boundary between the agent and the network, source, tokens, and intermediate context can be sent to endpoints the developer never configured.',
  },
  {
    icon: TerminalIcon,
    title: 'Process and syscalls',
    description:
      'An agent running as the developer can force-push, kill processes, or remove directories — any action the shell account is authorized to perform.',
  },
]

export function ProblemSection() {
  return (
    <div id="problem" data-section="problem">
      <Section
        variant="highlighted"
        title="What an AI agent runs with by default"
        description="A CLI coding agent inherits the operating system privileges of the developer account that started it. Greywall narrows those privileges to the set the agent actually needs for the task."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((problem) => (
            <Card key={problem.title}>
              <CardHeader>
                <problem.icon className="size-8 text-primary mb-2" />
                <CardTitle className="font-serif text-lg">{problem.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
