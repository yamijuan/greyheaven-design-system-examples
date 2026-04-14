import * as React from 'react'
import { Section } from '@/components/ui/section'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { teamMembers } from '../data/content'

export function TeamSection() {
  const founders = teamMembers.filter((m) => m.category === 'founder')
  const leadership = teamMembers.filter((m) => m.category === 'leadership')
  const engineering = teamMembers.filter((m) => m.category === 'engineering' || m.category === 'specialized')
  const operations = teamMembers.filter((m) => m.category === 'operations')

  return (
    <div id="team" data-section="team">
      <Section
        title="Our Team"
        description="A distributed international team of experts."
        width="wide"
      >
        {/* Co-Founders */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold mb-6">Co-Founders</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {founders.map((member) => (
              <Card key={member.name}>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    {member.countryFlag} {member.name}
                  </CardTitle>
                  <span className="text-sm text-primary font-medium">{member.role}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership & Engineering */}
        <div className="mb-12">
          <h3 className="text-xl font-serif font-semibold mb-6">Leadership & Engineering</h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...leadership, ...engineering].map((member) => (
              <Card key={member.name} className="border-none shadow-none bg-card/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    {member.countryFlag} {member.name}
                  </CardTitle>
                  <span className="text-xs text-muted-foreground font-medium">{member.role}</span>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground line-clamp-2">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Operations/Advisors */}
        {operations.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-serif font-semibold mb-6">Operations & Advisory</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {operations.map((member) => (
                <Card key={member.name} className="border-none shadow-none bg-card/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base flex items-center gap-2">
                      {member.countryFlag} {member.name}
                    </CardTitle>
                    <span className="text-xs text-muted-foreground font-medium">{member.role}</span>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs text-muted-foreground line-clamp-2">{member.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}


        {/* Summary Stat Card */}
        <div className="mt-12">
          <div className="p-8 rounded-2xl bg-primary/5 border border-primary/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl font-serif font-bold text-primary">22+</p>
              <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Members</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary">6</p>
              <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Countries</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-primary">5+</p>
              <p className="text-sm text-muted-foreground font-sans uppercase tracking-wider">Timezones</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
