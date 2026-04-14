import { Route } from 'react-router-dom'
import { GreywallLayout } from './Layout'
import { LandingPage } from './pages/LandingPage'

export function GreywallRoutes() {
  return (
    <Route element={<GreywallLayout />}>
      <Route index element={<LandingPage />} />
    </Route>
  )
}
