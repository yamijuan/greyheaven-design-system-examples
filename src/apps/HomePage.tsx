import { Link } from 'react-router-dom'
import { PageLayout } from '@/components/ui/page-layout'
import { Navbar } from '@/components/ui/navbar'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ThemeToggle } from '@/components/ThemeToggle'
import { apps } from './registry'

export function HomePage() {
  return (
    <PageLayout
      navbar={
        <Navbar
          variant="solid"
          logo={
            <Link to="/" className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors">
              Greyhaven Apps
            </Link>
          }
          actions={<ThemeToggle />}
        />
      }
    >
      <Hero
        variant="centered"
        heading="Greyhaven Apps"
        subheading="Select an app to get started."
      />

      <Section width="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {apps.map((app) => (
            <Link key={app.path} to={app.path} className="group">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <CardTitle className="font-serif text-lg group-hover:text-primary transition-colors">
                    {app.name}
                  </CardTitle>
                  <CardDescription>
                    <Badge variant="default" className="text-xs">{app.path}</Badge>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                    {app.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </PageLayout>
  )
}
