import {
  GlobeIcon,
  MapPinIcon,
  LaptopIcon,
  PlusIcon,
  CopyIcon,
  MoreVerticalIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '../components/PageHeader'
import { environments } from '../data/mocks'
import { cn } from '@/lib/utils'

const regionIcon = {
  global: GlobeIcon,
  local: LaptopIcon,
  'us-east-1': MapPinIcon,
  'eu-west-2': MapPinIcon,
} as const

export function EnvironmentsPage() {
  const activeCount = environments.filter((e) => e.active).length

  return (
    <div className="max-w-7xl">
      <PageHeader
        title="Environments"
        description="Swap variable sets without touching a request. Each environment layers over the workspace defaults."
        actions={
          <Button className="gap-1.5">
            <PlusIcon className="size-4" />
            New environment
          </Button>
        }
      />

      <div className="flex flex-wrap items-center gap-2 mb-6">
        <Badge variant="muted" size="sm">
          {environments.length} total
        </Badge>
        <Badge variant="default" size="sm">
          {activeCount} active
        </Badge>
        <Badge variant="tag" size="sm">
          4 regions
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {environments.map((env) => {
          const Icon = regionIcon[env.region as keyof typeof regionIcon] ?? MapPinIcon
          return (
            <Card key={env.id} className="relative">
              <CardHeader>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-md bg-muted text-muted-foreground">
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <CardTitle className="font-mono text-sm">
                        {env.name}
                      </CardTitle>
                      <p className="text-xs text-muted-foreground mt-0.5 uppercase tracking-wide">
                        {env.region}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        'inline-flex items-center gap-1.5 text-xs font-medium',
                        env.active ? 'text-primary' : 'text-muted-foreground',
                      )}
                    >
                      <span
                        className={cn(
                          'size-1.5 rounded-full',
                          env.active ? 'bg-primary' : 'bg-muted-foreground/50',
                        )}
                      />
                      {env.active ? 'Active' : 'Idle'}
                    </span>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      aria-label={`Actions for ${env.name}`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <MoreVerticalIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                <div className="flex items-center justify-between gap-2 rounded-md border border-border bg-muted/50 px-3 py-2">
                  <code className="font-mono text-xs text-foreground truncate">
                    {env.baseUrl}
                  </code>
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    aria-label="Copy base URL"
                    className="shrink-0 text-muted-foreground hover:text-foreground"
                  >
                    <CopyIcon className="size-3.5" />
                  </Button>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    <span className="font-semibold text-foreground tabular-nums">
                      {env.variables}
                    </span>{' '}
                    variables
                  </span>
                  <Button variant="link" size="sm" className="h-auto px-0">
                    Manage variables
                  </Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
