import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { FileWarningIcon, GlobeIcon, TerminalIcon } from 'lucide-react'

const problems = [
  {
    icon: FileWarningIcon,
    title: 'Unchecked File Access',
    description:
      'AI agents can read, write, and delete any file on your system — including SSH keys, credentials, and environment secrets.',
  },
  {
    icon: GlobeIcon,
    title: 'Network Exfiltration',
    description:
      'Without boundaries, agents can send your source code, API keys, and private data to arbitrary external endpoints.',
  },
  {
    icon: TerminalIcon,
    title: 'Privileged Syscalls',
    description:
      'Unrestricted agents can execute dangerous system calls — force-pushing code, killing processes, or wiping directories.',
  },
]

export function ProblemSection() {
  return (
    <div id="problem" data-section="problem">
      <Section
        variant="highlighted"
        title="Why Sandbox AI Agents?"
        description="AI coding agents are powerful — but they operate with your full system privileges. One hallucination away from disaster."
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
