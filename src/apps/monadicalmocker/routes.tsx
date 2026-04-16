import { Route } from 'react-router-dom'
import { MonadicalMockerLayout } from './Layout'
import { CollectionsPage } from './pages/CollectionsPage'
import { EnvironmentsPage } from './pages/EnvironmentsPage'
import { MockServersPage } from './pages/MockServersPage'
import { HistoryPage } from './pages/HistoryPage'

export function MonadicalMockerRoutes() {
  return (
    <Route element={<MonadicalMockerLayout />}>
      <Route index element={<CollectionsPage />} />
      <Route path="environments" element={<EnvironmentsPage />} />
      <Route path="mock-servers" element={<MockServersPage />} />
      <Route path="history" element={<HistoryPage />} />
    </Route>
  )
}
