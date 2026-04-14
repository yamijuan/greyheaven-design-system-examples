import { Outlet, NavLink, useLocation } from 'react-router-dom'
import { Navbar } from '@/components/ui/navbar'
import { PageLayout } from '@/components/ui/page-layout'
import { ThemeToggle } from '@/components/ThemeToggle'
import { cn } from '@/lib/utils'

function AppNavbarLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          'px-3 py-2 text-foreground transition-opacity hover:opacity-70 font-sans text-sm font-semibold',
          isActive && 'text-primary opacity-100',
        )
      }
    >
      {children}
    </NavLink>
  )
}

export function PokemonLayout() {
  const location = useLocation()

  return (
    <PageLayout
      key={location.pathname}
      navbar={
        <Navbar
          variant="solid"
          logo={
            <NavLink to="/" className="font-serif text-lg font-semibold text-foreground hover:text-primary transition-colors">
              Pokemon Regions
            </NavLink>
          }
          actions={<ThemeToggle />}
        >
          <AppNavbarLink to="/pokemon/kanto">Kanto</AppNavbarLink>
          <AppNavbarLink to="/pokemon/johto">Johto</AppNavbarLink>
          <AppNavbarLink to="/pokemon/hoenn">Hoenn</AppNavbarLink>
          <AppNavbarLink to="/pokemon/sinnoh">Sinnoh</AppNavbarLink>
        </Navbar>
      }
    >
      <Outlet />
    </PageLayout>
  )
}
