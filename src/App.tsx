// COMPONENT
import { Router } from './Router'

// CONTEXT
import { CartContextProvider } from 'contexts/CartContext'

export function App() {
  return (
    <CartContextProvider>
      <Router />
    </CartContextProvider>
  )
}
