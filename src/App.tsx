import { Routes, Route } from 'react-router-dom'
import { PokemonRoutes } from '@/apps/pokemon/routes'
import { GreywallRoutes } from '@/apps/greywall/routes'
import { GreywallBrandRoutes } from '@/apps/greywall-with-brand/routes'
import { MonadicalRoutes } from '@/apps/monadical/routes'
import { MonadicalMockerRoutes } from '@/apps/monadicalmocker/routes'
import { HomePage } from '@/apps/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/*">{PokemonRoutes()}</Route>
      <Route path="/greywall/*">{GreywallRoutes()}</Route>
      <Route path="/greywall-with-brand/*">{GreywallBrandRoutes()}</Route>
      <Route path="/monadical/*">{MonadicalRoutes()}</Route>
      <Route path="/monadicalmocker/*">{MonadicalMockerRoutes()}</Route>
    </Routes>
  )
}

export default App


