import * as React from 'react'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { projects } from '../data/content'

export function ProjectsSection() {
  const clientProjects = projects.filter((p) => p.type === 'client')
  const openSourceProjects = projects.filter((p) => p.type === 'open-source')

  return (
    <div id="projects" data-section="projects">
      <Section
        title="Projects"
        description="Showcasing our work across diverse industries and open-source communities."
        variant="highlighted"
        width="wide"
      >
        {/* Client Projects */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold mb-6">Client Projects</h3>
          <div className="grid lg:grid-cols-3 gap-6">
            {clientProjects.map((project) => (
              <Card key={project.name}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Badge key={t} variant="tag">{t}</Badge>
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  {project.impact && (
                    <p className="text-xs font-medium text-primary italic">
                      Impact: {project.impact}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}

