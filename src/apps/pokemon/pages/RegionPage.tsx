import type { Region } from '../data/regions'
import { Hero } from '@/components/ui/hero'
import { Section } from '@/components/ui/section'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

export function RegionPage({ region }: { region: Region }) {
  return (
    <>
      <Hero
        variant="centered"
        background="default"
        heading={region.name}
        subheading={`${region.generation} — ${region.tagline}`}
      />

      {/* About the Region */}
      <Section title={`About ${region.name}`} width="default">
        <p className="font-serif text-base leading-relaxed text-foreground max-w-3xl">
          {region.overview}
        </p>
      </Section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Featured Games */}
      <Section title="Featured Games" variant="highlighted" width="default">
        <div className="flex flex-wrap gap-3">
          {region.games.map((game) => (
            <Badge key={game} variant="secondary" className="text-sm px-3 py-1">
              {game}
            </Badge>
          ))}
        </div>
      </Section>

      {/* Legendary Pokemon */}
      <Section
        title="Legendary Pokemon"
        description="The powerful guardians and ancient forces of this region."
        width="wide"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {region.legendaries.map((pokemon) => (
            <Card key={pokemon.name}>
              <CardHeader>
                <CardTitle className="font-serif text-lg">{pokemon.name}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {pokemon.types.map((t) => (
                      <Badge key={t} variant="default" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {pokemon.description}
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  <span className="font-medium text-foreground">Location:</span>{' '}
                  {pokemon.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Mythical Pokemon */}
      <Section
        title="Mythical Pokemon"
        description="Rare and elusive Pokemon shrouded in mystery."
        variant="accent"
        width="wide"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {region.mythicals.map((pokemon) => (
            <Card key={pokemon.name}>
              <CardHeader>
                <CardTitle className="font-serif text-lg">{pokemon.name}</CardTitle>
                <CardDescription>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {pokemon.types.map((t) => (
                      <Badge key={t} variant="default" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground font-sans leading-relaxed">
                  {pokemon.description}
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  <span className="font-medium text-foreground">Location:</span>{' '}
                  {pokemon.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Key Locations */}
      <Section title="Key Locations" variant="highlighted" width="default">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {region.keyLocations.map((loc) => (
            <div key={loc.name} className="flex flex-col gap-1">
              <h3 className="font-serif text-base font-semibold text-foreground">
                {loc.name}
              </h3>
              <p className="text-sm text-muted-foreground font-sans">
                {loc.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Separator className="max-w-5xl mx-auto" />

      {/* Gym Leaders */}
      <Section
        title="Gym Leaders"
        description="The eight trainers standing between you and the Pokemon League."
        width="wide"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {region.gymLeaders.map((leader) => (
            <Card key={leader.name} className="py-4">
              <CardContent className="space-y-2">
                <h3 className="font-serif text-base font-semibold text-foreground">
                  {leader.name}
                </h3>
                <div className="flex items-center gap-2">
                  <Badge variant="default" className="text-xs">
                    {leader.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground font-sans">
                  {leader.city}
                </p>
                <p className="text-xs text-muted-foreground font-sans">
                  <span className="font-medium text-foreground">{leader.badge}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  )
}
