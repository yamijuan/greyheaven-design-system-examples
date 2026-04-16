import { PlusIcon, PlayIcon, PauseIcon, SquareIcon } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '../components/PageHeader'
import { mockServers, type MockServer } from '../data/mocks'

const statusLabel: Record<MockServer['status'], string> = {
  running: 'Running',
  paused: 'Paused',
  degraded: 'Degraded',
}

function StatusBadge({ status }: { status: MockServer['status'] }) {
  if (status === 'running') {
    return (
      <Badge variant="success" size="sm">
        {statusLabel[status]}
      </Badge>
    )
  }
  if (status === 'degraded') {
    return (
      <Badge variant="warning" size="sm">
        {statusLabel[status]}
      </Badge>
    )
  }
  return (
    <Badge variant="muted" size="sm">
      {statusLabel[status]}
    </Badge>
  )
}

function ServerAction({ status }: { status: MockServer['status'] }) {
  if (status === 'running' || status === 'degraded') {
    return (
      <Button variant="outline" size="sm" className="gap-1.5">
        <PauseIcon className="size-3.5" />
        Pause
      </Button>
    )
  }
  return (
    <Button size="sm" className="gap-1.5">
      <PlayIcon className="size-3.5" />
      Start
    </Button>
  )
}

function formatCount(n: number) {
  if (n >= 1000) return `${(n / 1000).toFixed(1)}k`
  return n.toString()
}

export function MockServersPage() {
  const running = mockServers.filter((s) => s.status === 'running').length
  const totalRequests = mockServers.reduce((acc, s) => acc + s.requestsToday, 0)

  return (
    <div className="max-w-7xl">
      <PageHeader
        title="Mock Servers"
        description="Addressable mock endpoints serving live traffic. Pause any server without losing its definition."
        actions={
          <Button className="gap-1.5">
            <PlusIcon className="size-4" />
            Deploy server
          </Button>
        }
      />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Running
            </p>
            <p className="font-serif text-3xl font-semibold text-primary tabular-nums">
              {running}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Total
            </p>
            <p className="font-serif text-3xl font-semibold tabular-nums">
              {mockServers.length}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Requests Today
            </p>
            <p className="font-serif text-3xl font-semibold tabular-nums">
              {formatCount(totalRequests)}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground mb-2">
              Avg Latency
            </p>
            <p className="font-serif text-3xl font-semibold tabular-nums">
              43<span className="text-base font-normal text-muted-foreground ml-1">ms</span>
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="overflow-hidden py-0">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <th className="text-left px-4 py-3 font-medium">Server</th>
                <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                  Collection
                </th>
                <th className="text-left px-4 py-3 font-medium">Status</th>
                <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">
                  Latency
                </th>
                <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">
                  Requests
                </th>
                <th className="px-4 py-3" />
              </tr>
            </thead>
            <tbody>
              {mockServers.map((server) => (
                <tr
                  key={server.id}
                  className="border-b border-border/60 last:border-b-0 hover:bg-muted/30 transition-colors"
                >
                  <td className="px-4 py-3 align-middle">
                    <div className="flex items-center gap-2">
                      <SquareIcon
                        className={
                          server.status === 'running'
                            ? 'size-2 fill-primary text-primary'
                            : server.status === 'degraded'
                              ? 'size-2 fill-[#9a6700] text-[#9a6700]'
                              : 'size-2 fill-muted-foreground text-muted-foreground'
                        }
                      />
                      <div>
                        <p className="font-mono text-xs font-medium">
                          {server.name}
                        </p>
                        <p className="font-mono text-[11px] text-muted-foreground truncate max-w-xs">
                          {server.url}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 align-middle hidden md:table-cell">
                    <Badge variant="tag" size="sm">
                      {server.collection}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <StatusBadge status={server.status} />
                  </td>
                  <td className="px-4 py-3 align-middle text-right font-mono tabular-nums text-xs hidden sm:table-cell">
                    {server.latencyMs}ms
                  </td>
                  <td className="px-4 py-3 align-middle text-right font-mono tabular-nums text-xs hidden sm:table-cell">
                    {formatCount(server.requestsToday)}
                  </td>
                  <td className="px-4 py-3 align-middle text-right">
                    <ServerAction status={server.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}
