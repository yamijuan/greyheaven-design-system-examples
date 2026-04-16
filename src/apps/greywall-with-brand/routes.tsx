import { Route } from 'react-router-dom'
import { GreywallBrandLayout } from './Layout'
import { LandingPage } from './pages/LandingPage'

export function GreywallBrandRoutes() {
  return (
    <Route element={<GreywallBrandLayout />}>
      <Route index element={<LandingPage />} />
    </Route>
  )
}
