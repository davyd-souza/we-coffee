// DEPENDENCY
import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

// ASSETS
import { MapPin, ShoppingCart } from 'phosphor-react'
import { ReactComponent as WeCoffeeLogo } from '../../assets/we-coffee.svg'

// TYPE
type HeaderProps = {
  variant?: 'primary' | 'transparent'
}
export function Header({ variant = 'transparent' }: HeaderProps) {
  return (
    <header className={clsx('', { 'bg-primary-700': variant === 'primary' })}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <WeCoffeeLogo className="w-12 h-12 fill-primary-400" />

          <nav aria-label="primary">
            <ul className="flex gap-2">
              <li>
                <NavLink
                  className="p-2 text-white border-b-2 border-b-transparent hocus:border-b-primary-400 hocus:text-primary-400 transition-all outline-none aria-[current=page]:text-primary-400 aria-[current=page]:border-b-primary-400"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="p-2 text-white border-b-2 border-b-transparent hocus:border-b-primary-400 hocus:text-primary-400 transition-all outline-none aria-[current=page]:text-primary-400 aria-[current=page]:border-b-primary-400"
                  to="/cardapio"
                >
                  Cardápio
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="flex items-center justify-center gap-2">
            <span className="p-2 flex  items-center justify-center gap-2 bg-primary-100 text-primary-700 font-bold">
              <MapPin size={24} weight="fill" />
              São Paulo, SP
            </span>
            <button className="p-2 text-white rounded outline-none hocus:text-primary-400 focus-visible:ring ring-primary-400">
              <ShoppingCart size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
