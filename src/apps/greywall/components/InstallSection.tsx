import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code } from '@/components/ui/code'
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
                <Code variant="block">{method.command}</Code>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl">
          <p className="text-sm font-sans text-muted-foreground mb-2">Then run any agent inside the sandbox:</p>
          <Code variant="block">greywall -- claude</Code>
        </div>
      </Section>
    </div>
  )
}
