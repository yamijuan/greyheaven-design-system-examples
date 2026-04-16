import {
  TrendingUpIcon,
  GaugeIcon,
  ActivityIcon,
  DiamondIcon,
  ShoppingCartIcon,
  ShieldIcon,
  WebhookIcon,
  SearchIcon,
  MoreVerticalIcon,
  SparklesIcon,
  ArrowRightIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '../components/PageHeader'
import { collections } from '../data/mocks'

const collectionIcons = [
  DiamondIcon,
  ShoppingCartIcon,
  ShieldIcon,
  WebhookIcon,
  SearchIcon,
]

function StatCard({
  label,
  value,
  trendLabel,
  trendIcon: TrendIcon,
  emphasis = false,
}: {
  label: string
  value: string
  trendLabel: string
  trendIcon: typeof TrendingUpIcon
  emphasis?: boolean
}) {
  return (
    <Card
      className={
        emphasis
          ? 'bg-foreground text-background border-transparent'
          : undefined
      }
    >
      <CardHeader>
        <p
          className={
            emphasis
              ? 'text-[10px] font-semibold uppercase tracking-[0.14em] text-background/60'
              : 'text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground'
          }
        >
          {label}
        </p>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <p
          className={
            emphasis
              ? 'font-serif text-5xl font-semibold tabular-nums'
              : 'font-serif text-5xl font-semibold tabular-nums text-primary'
          }
        >
          {value}
        </p>
        <div
          className={
            emphasis
              ? 'flex items-center gap-1.5 text-xs text-background/70'
              : 'flex items-center gap-1.5 text-xs text-muted-foreground'
          }
        >
          <TrendIcon className="size-3.5" />
          <span>{trendLabel}</span>
        </div>
      </CardContent>
    </Card>
  )
}

export function CollectionsPage() {
  return (
    <div className="max-w-7xl">
      <PageHeader
        title="Architectural Ledger"
        description="Precision-engineered API mocking environment. Your artifacts are secured and optimized for high-throughput testing."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        <StatCard
          label="Active Mocks"
          value="124"
          trendLabel="+12% this week"
          trendIcon={TrendingUpIcon}
        />
        <StatCard
          label="Requests Today"
          value="48.2k"
          trendLabel="Avg latency: 24ms"
          trendIcon={GaugeIcon}
        />
        <StatCard
          label="System Health"
          value="99.9%"
          trendLabel="All systems operational"
          trendIcon={ActivityIcon}
          emphasis
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-serif text-xl font-semibold">
              Recent Collections
            </h2>
            <Button variant="link" size="sm" className="gap-1 px-0">
              View all
              <ArrowRightIcon className="size-3.5" />
            </Button>
          </div>

          <div className="flex flex-col gap-3">
            {collections.map((collection, idx) => {
              const Icon = collectionIcons[idx % collectionIcons.length]
              return (
                <Card
                  key={collection.id}
                  className="py-0 hover:border-ring/60 transition-colors"
                >
                  <div className="flex items-center gap-4 px-4 py-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-mono text-sm font-medium truncate">
                        {collection.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {collection.updatedLabel} · {collection.endpoints} endpoints
                      </p>
                    </div>
                    <div className="hidden sm:flex -space-x-2">
                      {collection.collaborators.map((initials, i) => (
                        <div
                          key={i}
                          className="flex size-7 items-center justify-center rounded-full border-2 border-card bg-accent text-[10px] font-semibold text-accent-foreground"
                        >
                          {initials}
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Actions for ${collection.name}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <MoreVerticalIcon className="size-4" />
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </section>

        <aside>
          <Card className="bg-muted/60 border-border/60">
            <CardHeader>
              <Badge variant="default" size="sm" className="gap-1 mb-2">
                <SparklesIcon />
                System Insight
              </Badge>
              <CardTitle className="font-serif text-lg leading-snug">
                Mock Server Optimization Required
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Endpoint{' '}
                <code className="font-mono text-xs bg-background px-1.5 py-0.5 rounded border border-border text-primary">
                  /v3/transactions
                </code>{' '}
                is experiencing unusual latency spikes. We suggest migrating this to the Global Edge environment.
              </p>

              <div className="rounded-md bg-card border border-border p-3">
                <div className="flex items-end gap-1.5 h-20">
                  {[30, 42, 55, 38, 70, 95, 60].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-primary/30"
                      style={{ height: `${h}%`, opacity: i === 5 ? 1 : 0.3 + i * 0.1 }}
                    />
                  ))}
                </div>
              </div>

              <Button className="w-full">Run Diagnostics</Button>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  )
}
