// DEPENDENCY
import { Route, Routes } from 'react-router-dom'

// LAYOUT
import { HomeLayout } from '@layouts/HomeLayout'
import { DefaultLayout } from '@layouts/DefaultLayout'

// PAGE
import { Cardapio } from '@pages/Cardapio'
import { Cart } from '@pages/Cart'
import { Success } from '@pages/Success'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/cardapio" element={<Cardapio />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/sucesso" element={<Success />} />
      </Route>
    </Routes>
  )
}
