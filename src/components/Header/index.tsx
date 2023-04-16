// ASSETS
import { MapPin, ShoppingCart } from 'phosphor-react'
import weCoffeeLogo from '../../assets/we-coffee.svg'

export function Header() {
  return (
    <header className="py-4">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center">
          <img className="w-12 aspect-square" src={weCoffeeLogo} alt="" />

          <nav className="flex gap-2">
            <a
              className="p-2 text-white border-b-2 border-b-transparent hocus:border-b-primary-400 hocus:text-primary-400 transition-color outline-none"
              href="#"
            >
              Home
            </a>
            <a
              className="p-2 text-white border-b-2 border-b-transparent hocus:border-b-primary-400 hocus:text-primary-400 transition-color outline-none"
              href="#"
            >
              Cardápio
            </a>
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
