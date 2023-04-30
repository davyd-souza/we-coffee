// COMPONENT
import { ProductCard } from './components/ProductCard'

// STYLE
import {
  IconBaguette,
  IconBottle,
  IconCoffee,
  IconCup,
  IconLollipop,
  IconMilkshake,
  IconTeapot,
} from '@tabler/icons-react'

// DATA
import PRODUCT_DATA from './productData'

const CATEGORIES = [
  { name: 'cafe', label: 'Café', icon: <IconCoffee size={32} /> },
  { name: 'cha', label: 'Chá', icon: <IconTeapot size={32} /> },
  { name: 'milkshake', label: 'Milk shake', icon: <IconMilkshake size={32} /> },
  { name: 'salty-cream', label: 'Salty cream', icon: <IconCup size={32} /> },
  { name: 'salgado', label: 'Salgado', icon: <IconBaguette size={32} /> },
  { name: 'doce', label: 'Doce', icon: <IconLollipop size={32} /> },
  { name: 'agua', label: 'Água', icon: <IconBottle size={32} /> },
]

export function Cardapio() {
  return (
    <main className="grid gap-6">
      <nav
        className="w-full max-w-6xl mx-auto px-6 py-4 sticky top-0 bg-white z-10"
        aria-label="categories"
      >
        <ul className="grid gap-4 grid-flow-col auto-cols-fr">
          {CATEGORIES.map(({ name, label, icon }) => (
            <li key={name}>
              <a
                className="p-1 flex flex-col items-center justify-center gap-2 border-b-2 border-b-transparent hocus:border-b-primary-400 text-center text-primary-700 hocus:text-primary-400"
                href={`#${name}`}
              >
                {icon}
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="cafe"
          >
            Café
          </h2>

          <div className="grid gap-4 grid-cols-product-list">
            {PRODUCT_DATA.cafe.map(
              ({ id, name, description, image, amount, price, label }) => (
                <ProductCard
                  name={name}
                  description={description}
                  image={image}
                  amount={amount}
                  price={price}
                  label={label}
                  key={id}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="cha"
          >
            Chá
          </h2>
          <div className="grid gap-4 grid-cols-product-list">
            {PRODUCT_DATA.cha.map(
              ({ id, name, description, image, amount, price, label }) => (
                <ProductCard
                  name={name}
                  description={description}
                  image={image}
                  amount={amount}
                  price={price}
                  label={label}
                  key={id}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="milkshake"
          >
            Milk shake
          </h2>
          <div className="grid gap-4 grid-cols-product-list">
            {PRODUCT_DATA.milkShake.map(
              ({ id, name, description, image, amount, price, label }) => (
                <ProductCard
                  name={name}
                  description={description}
                  image={image}
                  amount={amount}
                  price={price}
                  label={label}
                  key={id}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="salty-cream"
          >
            Salty Cream
          </h2>
          <div className="grid gap-4 grid-cols-product-list">
            {PRODUCT_DATA.saltyCream.map(
              ({ id, name, description, image, amount, price, label }) => (
                <ProductCard
                  name={name}
                  description={description}
                  image={image}
                  amount={amount}
                  price={price}
                  label={label}
                  key={id}
                />
              ),
            )}
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="salgado"
          >
            Salgado
          </h2>
          <div>
            <p>Product</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="doce"
          >
            Doce
          </h2>
          <div>
            <p>Product</p>
          </div>
        </div>
      </section>

      <section className="w-full max-w-6xl mx-auto px-6">
        <div className="grid gap-4">
          <h2
            className="p-1 text-xl font-bold text-primary-700 border-b border-b-primary-700 sm:text-2xl"
            id="agua"
          >
            Água
          </h2>
          <div>
            <p>Product</p>
          </div>
        </div>
      </section>
    </main>
  )
}
