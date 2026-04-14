import { Routes, Route } from 'react-router-dom'
import { PokemonRoutes } from '@/apps/pokemon/routes'
import { GreywallRoutes } from '@/apps/greywall/routes'
import { MonadicalRoutes } from '@/apps/monadical/routes'
import { HomePage } from '@/apps/HomePage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/pokemon/*">{PokemonRoutes()}</Route>
      <Route path="/greywall/*">{GreywallRoutes()}</Route>
      <Route path="/monadical/*">{MonadicalRoutes()}</Route>
    </Routes>
  )
}

export default App


