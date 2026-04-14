import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { installMethods } from '../data/content'

export function InstallSection() {
  return (
    <div id="install" data-section="install">
      <Section
        variant="accent"
        title="Get Started"
        description="Install Greywall in seconds, then sandbox any agent with a single command."
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {installMethods.map((method) => (
            <Card key={method.name}>
              <CardHeader>
                <CardTitle className="font-serif text-lg">{method.name}</CardTitle>
                <Badge variant="outline" className="w-fit">{method.platform}</Badge>
              </CardHeader>
              <CardContent>
                <code className="block font-mono text-sm bg-muted text-foreground px-4 py-3 rounded-md break-all leading-relaxed">
                  {method.command}
                </code>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-sans text-muted-foreground mb-2">Then run any agent inside the sandbox:</p>
          <code className="block font-mono text-sm bg-muted text-foreground px-4 py-3 rounded-md">
            greywall -- claude
          </code>
        </div>
      </Section>
    </div>
  )
}
