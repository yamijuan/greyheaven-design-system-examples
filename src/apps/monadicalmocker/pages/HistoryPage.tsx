import { SearchIcon, FilterIcon, DownloadIcon } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { PageHeader } from '../components/PageHeader'
import { history, type HttpMethod } from '../data/mocks'
import { cn } from '@/lib/utils'

const methodStyles: Record<HttpMethod, string> = {
  GET: 'text-[#0969da] border-[#0969da]/30 bg-[#0969da]/10',
  POST: 'text-primary border-primary/30 bg-primary/10',
  PUT: 'text-[#9a6700] border-[#9a6700]/30 bg-[#9a6700]/10',
  PATCH: 'text-[#9a6700] border-[#9a6700]/30 bg-[#9a6700]/10',
  DELETE: 'text-destructive border-destructive/30 bg-destructive/10',
}

function MethodTag({ method }: { method: HttpMethod }) {
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center rounded border px-1.5 py-0.5 font-mono text-[10px] font-semibold tracking-wide',
        methodStyles[method],
      )}
    >
      {method}
    </span>
  )
}

function StatusBadge({ code }: { code: number }) {
  if (code >= 500) {
    return <Badge variant="destructive" size="sm">{code}</Badge>
  }
  if (code >= 400) {
    return <Badge variant="warning" size="sm">{code}</Badge>
  }
  return <Badge variant="success" size="sm">{code}</Badge>
}

export function HistoryPage() {
  return (
    <div className="max-w-7xl">
      <PageHeader
        title="Request History"
        description="Every mock invocation, replayable with one click. Filter by method, environment, or status range."
        actions={
          <>
            <Button variant="outline" size="sm" className="gap-1.5">
              <FilterIcon className="size-3.5" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="gap-1.5">
              <DownloadIcon className="size-3.5" />
              Export
            </Button>
          </>
        }
      />

      <Card className="py-0 mb-6">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
          <SearchIcon className="size-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search path, payload, or headers…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <div className="hidden sm:flex items-center gap-1.5">
            <Badge variant="tag" size="sm">status:2xx</Badge>
            <Badge variant="tag" size="sm">env:Global_Edge</Badge>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                <th className="text-left px-4 py-3 font-medium w-20">Method</th>
                <th className="text-left px-4 py-3 font-medium">Endpoint</th>
                <th className="text-left px-4 py-3 font-medium hidden md:table-cell">
                  Environment
                </th>
                <th className="text-right px-4 py-3 font-medium hidden sm:table-cell">
                  Latency
                </th>
                <th className="text-left px-4 py-3 font-medium w-24">Status</th>
                <th className="text-right px-4 py-3 font-medium w-24">Time</th>
              </tr>
            </thead>
            <tbody>
              {history.map((entry) => (
                <tr
                  key={entry.id}
                  className="border-b border-border/60 last:border-b-0 hover:bg-muted/30 transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3 align-middle">
                    <MethodTag method={entry.method} />
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <code className="font-mono text-xs">{entry.path}</code>
                  </td>
                  <td className="px-4 py-3 align-middle hidden md:table-cell">
                    <Badge variant="tag" size="sm">
                      {entry.environment}
                    </Badge>
                  </td>
                  <td className="px-4 py-3 align-middle text-right font-mono tabular-nums text-xs text-muted-foreground hidden sm:table-cell">
                    {entry.latencyMs}ms
                  </td>
                  <td className="px-4 py-3 align-middle">
                    <StatusBadge code={entry.statusCode} />
                  </td>
                  <td className="px-4 py-3 align-middle text-right font-mono tabular-nums text-xs text-muted-foreground">
                    {entry.timestamp}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex items-center justify-between gap-3 px-4 py-3 border-t border-border text-xs text-muted-foreground">
          <span>Showing {history.length} of 1,284 entries</span>
          <div className="flex gap-1.5">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
