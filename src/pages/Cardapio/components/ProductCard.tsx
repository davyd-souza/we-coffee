// DEPENDENCY
import { ChangeEvent, useState } from 'react'

// STYLE
import { ShoppingCart } from 'phosphor-react'

export function ProductCard() {
  const [quantity, setQuantity] = useState(0)

  const handleInputQuantityChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(evt.target.value))
  }

  const handleDecrementQuantity = () => {
    if (!(quantity <= 0)) {
      setQuantity((state) => state - 1)
    }
  }

  const handleIncrementQuantity = () => {
    setQuantity((state) => state + 1)
  }

  return (
    <article className="shadow-lg p-4 [&>_*:is(:not(:first-child))]:mt-3">
      {/* <article className="shadow-xl p-4 [&>_*:is(:not(:first-child))]:mt-2"> */}
      <header className="isolate">
        <div className="grid">
          <h3 className="text-center text-xl font-bold text-primary-700 z-10">
            Nome
          </h3>
          <img
            className="mx-auto -mt-6"
            src="http://localhost:5173/assets/images/cafe/quente/mocha.webp"
            alt="cup of espresso"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <p className="py-1 px-2 text-xs font-bold text-primary-700 bg-primary-100">
            Label 1
          </p>
          <p className="py-1 px-2 text-xs font-bold text-primary-700 bg-primary-100">
            Label 2
          </p>
        </div>
      </header>

      <p className="text-primary-700 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing
      </p>

      <div className="flex gap-2 items-center justify-between">
        <em className="text-xl font-bold not-italic text-primary-700">
          <span className="text-xs font-normal">R$</span> 9,90
        </em>
        <p className="text-neutral-600 text-sm">30ml</p>
      </div>

      <footer className="flex flex-wrap gap-4 justify-between">
        <div className="flex-1 flex items-center gap-2 bg-neutral-100">
          <button
            onClick={handleDecrementQuantity}
            className="text-primary-400 font-bold outline-none px-2 hocus:text-primary-700 focus-visible:ring ring-primary-400"
          >
            -
          </button>
          <input
            className="w-full bg-transparent outline-none text-center"
            type="text"
            pattern="[0-9]*"
            inputMode="numeric"
            value={quantity}
            onChange={handleInputQuantityChange}
          />
          <button
            onClick={handleIncrementQuantity}
            className="text-primary-400 font-bold outline-none px-2 hocus:text-primary-700 focus-visible:ring ring-primary-400"
          >
            +
          </button>
        </div>
        <button className="flex-1 py-1 px-2 flex items-center justify-center gap-2 bg-primary-700 text-white font-bold outline-none hocus:bg-primary-400 focus-visible:ring ring-primary-400 ring-offset-2 ring-offset-white">
          <ShoppingCart size={24} weight="fill" />
          Cart
        </button>
      </footer>
    </article>
  )
}
