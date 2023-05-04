// DEPENDENCY
import { ChangeEvent, useContext } from 'react'

// CONTEXT
import { CartContext } from 'contexts/CartContext'

// ASSET
import { Trash } from 'phosphor-react'

// UTIL
import { priceFormatter } from '@utils/formatter'

// TYPE
type CartProductCardProps = {
  id: string
  name: string
  image: string
  price: number
  quantity: number
}

export function CartProductCard({
  id,
  name,
  image,
  price,
  quantity,
}: CartProductCardProps) {
  const {
    removeCartItem,
    incrementCartItemQuantity,
    decrementCartItemQuantity,
    changeCartItemInputQuantity,
  } = useContext(CartContext)

  const handleRemoveCartItem = () => {
    removeCartItem(id)
  }

  const handleIncrementCartItemQuantity = () => {
    incrementCartItemQuantity(id)
  }

  const handleDecrementCartItemQuantity = () => {
    decrementCartItemQuantity(id)
  }

  const handleChangeCartItemInputQuantity = (
    evt: ChangeEvent<HTMLInputElement>,
  ) => {
    changeCartItemInputQuantity(id, Number(evt.target.value))
  }

  return (
    <article className="grid grid-cols-[80px_1fr_min-content] gap-4">
      <img
        className="place-self-center"
        width="80"
        height="80"
        src={image}
        alt=""
      />

      <section className="flex flex-col justify-between">
        <p>{name}</p>

        <div className="grid sm:grid-cols-2 gap-2 max-w-xs">
          <div className="flex items-center bg-neutral-100">
            <button
              onClick={handleDecrementCartItemQuantity}
              className="text-primary-700 font-bold outline-none px-2 hocus:text-primary-400 focus-visible:ring ring-primary-400"
            >
              -
            </button>
            <input
              className="flex-auto w-full bg-transparent outline-none text-center"
              type="text"
              pattern="[0-9]+"
              inputMode="numeric"
              value={quantity}
              onChange={handleChangeCartItemInputQuantity}
            />
            <button
              onClick={handleIncrementCartItemQuantity}
              className="text-primary-700 font-bold outline-none px-2 hocus:text-primary-400 focus-visible:ring ring-primary-400"
            >
              +
            </button>
          </div>

          <button
            className="py-1 px-2 flex items-center justify-center gap-2 bg-primary-700 text-white outline-none hocus:bg-primary-400 focus-visible:ring ring-primary-400 ring-offset-2 ring-offset-white"
            onClick={handleRemoveCartItem}
          >
            <Trash size={20} weight="fill" />
            Remover
          </button>
        </div>
      </section>

      <p className="font-bold text-primary-700">
        {priceFormatter.format(price)}
      </p>
    </article>
  )
}
