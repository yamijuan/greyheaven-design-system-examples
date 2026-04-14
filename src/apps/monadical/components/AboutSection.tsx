import * as React from 'react'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { coreValues, officeLocations } from '../data/content'

export function AboutSection() {
  return (
    <div id="about" data-section="about">
      <Section
        title="Our Values"
        description="The principles that guide our work and our culture."
        variant="highlighted"
        width="default"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {coreValues.map((value) => (
            <Card key={value.title} className="border-none shadow-none bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-lg font-serif font-semibold mb-4">Global Presence</h3>
          <div className="flex flex-wrap gap-2">
            {officeLocations.map((office) => (
              <Badge key={office.name} variant="tag">
                {office.name}
              </Badge>
            ))}
          </div>
        </div>
      </Section>
    </div>
  )
}
