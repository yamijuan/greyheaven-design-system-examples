import { Route, Navigate } from 'react-router-dom'
import { PokemonLayout } from './Layout'
import { KantoPage } from './pages/Kanto'
import { JohtoPage } from './pages/Johto'
import { HoennPage } from './pages/Hoenn'
import { SinnohPage } from './pages/Sinnoh'

export function PokemonRoutes() {
  return (
    <Route element={<PokemonLayout />}>
      <Route index element={<Navigate to="kanto" replace />} />
      <Route path="kanto" element={<KantoPage />} />
      <Route path="johto" element={<JohtoPage />} />
      <Route path="hoenn" element={<HoennPage />} />
      <Route path="sinnoh" element={<SinnohPage />} />
    </Route>
  )
}
