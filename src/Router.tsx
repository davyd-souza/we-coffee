// DEPENDENCY
import { Route, Routes } from 'react-router-dom'

// LAYOUT
import { HomeLayout } from '@layouts/HomeLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />} />
      <Route path="/cardapio" element={<h1>Menu</h1>} />
    </Routes>
  )
}
