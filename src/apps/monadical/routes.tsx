import { Route } from 'react-router-dom'
import { MonadicalLayout } from './Layout'
import { LandingPage } from './pages/LandingPage'

export function MonadicalRoutes() {
  return (
    <Route element={<MonadicalLayout />}>
      <Route index element={<LandingPage />} />
    </Route>
  )
}
