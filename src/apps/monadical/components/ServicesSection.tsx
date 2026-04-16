import * as React from 'react'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { aiDepartments, consultingServices } from '../data/content'

export function ServicesSection() {
  return (
    <div id="services" data-section="services">
      <Section
        title="Services"
        description="Helping organizations navigate and leverage the potential of AI."
        width="wide"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Services Card */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">AI Services</CardTitle>
              <CardDescription>AI implementation across every department</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {aiDepartments.map((dept) => (
                  <Badge key={dept.name} variant="tag" className="cursor-default">
                    {dept.name}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Full-Stack Web Dev Card */}
          <Card>
            <CardHeader>
              <CardTitle className="font-serif text-xl">Full-Stack Web Dev</CardTitle>
              <CardDescription>Decades of cumulative dev & ops experience</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {consultingServices.map((service) => (
                <div key={service.title} className="flex items-start gap-3">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-sm text-muted-foreground leading-tight">
                    {service.title}: {service.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Detailed AI Departments Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiDepartments.map((dept) => (
            <Card key={dept.name} className="border-none shadow-none bg-card/50">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-primary">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {dept.capabilities.slice(0, 3).map((cap) => (
                    <Badge key={cap} variant="tag">
                      {cap}
                    </Badge>
                  ))}
                  {dept.capabilities.length > 3 && (
                    <span className="text-xs text-muted-foreground self-center">+{dept.capabilities.length - 3} more</span>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}
