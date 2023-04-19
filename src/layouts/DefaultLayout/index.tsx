// DEPENDENCY
import { Outlet } from 'react-router-dom'

// COMPONENT
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export function DefaultLayout() {
  return (
    <>
      <Header variant="primary" />
      <Outlet />
      <Footer />
    </>
  )
}
