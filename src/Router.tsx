// DEPENDENCY
import { Route, Routes } from 'react-router-dom'

// LAYOUT
import { HomeLayout } from '@layouts/HomeLayout'
import { DefaultLayout } from '@layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cardapio" element={<h2>Cardápio</h2>} />
      </Route>
    </Routes>
  )
}
