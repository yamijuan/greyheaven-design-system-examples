import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import {
  FolderIcon,
  LayersIcon,
  ServerIcon,
  HistoryIcon,
  BellIcon,
  SettingsIcon,
  PlusIcon,
  MenuIcon,
  XIcon,
  ChevronDownIcon,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

const navItems = [
  { to: '/monadicalmocker', label: 'Collections', icon: FolderIcon, end: true },
  { to: '/monadicalmocker/environments', label: 'Environments', icon: LayersIcon },
  { to: '/monadicalmocker/mock-servers', label: 'Mock Servers', icon: ServerIcon },
  { to: '/monadicalmocker/history', label: 'History', icon: HistoryIcon },
]

const workspaces = [
  { value: 'engineering-global', label: 'Engineering_Global' },
  { value: 'platform-core', label: 'Platform_Core' },
  { value: 'qa-sandbox', label: 'QA_Sandbox' },
]

function WorkspaceSelector() {
  const [value, setValue] = useState('engineering-global')
  const current = workspaces.find((w) => w.value === value) ?? workspaces[0]

  return (
    <div className="relative flex items-center gap-2">
      <span className="hidden sm:block text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
        Workspace
      </span>
      <div className="relative">
        <div
          className={cn(
            'flex h-9 items-center gap-2 rounded-md px-3 text-sm font-medium',
            'text-foreground hover:bg-accent/60 transition-colors',
            'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px] border border-transparent',
          )}
        >
          <span className="truncate max-w-35 sm:max-w-none">{current.label}</span>
          <ChevronDownIcon className="size-4 text-muted-foreground" />
        </div>
        <select
          aria-label="Select workspace"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        >
          {workspaces.map((ws) => (
            <option key={ws.value} value={ws.value}>
              {ws.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div className="flex h-full flex-col">
      <div className="px-6 py-5 border-b border-sidebar-border">
        <Link
          to="/monadicalmocker"
          onClick={onNavigate}
          className="block font-serif text-lg font-semibold text-sidebar-foreground hover:text-sidebar-primary transition-colors"
        >
          Monadical Mocker
        </Link>
        <p className="mt-1 text-[10px] font-sans font-medium uppercase tracking-[0.14em] text-sidebar-foreground/60">
          Precision API Suite
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 flex flex-col gap-1">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink
            key={label}
            to={to}
            end={end}
            onClick={onNavigate}
            className={({ isActive }) =>
              cn(
                'group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-sans font-medium transition-colors',
                'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent/40',
                isActive &&
                  'text-sidebar-foreground bg-sidebar-accent/60 hover:bg-sidebar-accent/60',
              )
            }
          >
            {({ isActive }) => (
              <>
                <span
                  aria-hidden
                  className={cn(
                    'absolute left-0 top-1/2 -translate-y-1/2 h-5 w-0.75 rounded-r-full bg-sidebar-primary transition-opacity',
                    isActive ? 'opacity-100' : 'opacity-0',
                  )}
                />
                <Icon className="size-4 shrink-0" />
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export function MonadicalMockerLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans">
      <aside
        className={cn(
          'dark hidden md:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border',
        )}
      >
        <SidebarContent />
      </aside>

      {mobileOpen && (
        <div className="md:hidden fixed inset-0 z-40 flex">
          <div
            className="absolute inset-0 bg-foreground/40"
            onClick={() => setMobileOpen(false)}
            aria-hidden
          />
          <aside className="dark relative flex w-64 flex-col bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
            <SidebarContent onNavigate={() => setMobileOpen(false)} />
          </aside>
        </div>
      )}

      <div className="flex flex-1 min-w-0 flex-col">
        <header className="flex h-16 shrink-0 items-center gap-3 border-b border-border bg-background px-4 md:px-8">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="size-5" />
          </Button>

          <WorkspaceSelector />


          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              aria-label="Notifications"
              className="text-muted-foreground hover:text-foreground"
            >
              <BellIcon className="size-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label="Settings"
              className="text-muted-foreground hover:text-foreground"
            >
              <SettingsIcon className="size-4" />
            </Button>
            <Button size="sm" className="gap-1.5">
              <PlusIcon className="size-4" />
              <span className="hidden sm:inline">New Request</span>
              <span className="sm:hidden">New</span>
            </Button>
          </div>

          {mobileOpen && (
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <XIcon className="size-5" />
            </Button>
          )}
        </header>

        <main className="flex-1 min-w-0 overflow-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
