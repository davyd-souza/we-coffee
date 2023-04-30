// DEPENDENCY
import { Route, Routes } from 'react-router-dom'

// LAYOUT
import { HomeLayout } from '@layouts/HomeLayout'
import { DefaultLayout } from '@layouts/DefaultLayout'
import { Cardapio } from '@pages/Cardapio'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cardapio" element={<Cardapio />} />
      </Route>
    </Routes>
  )
}
