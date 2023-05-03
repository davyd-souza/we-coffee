// ASSET
import { Trash } from 'phosphor-react'

// UTIL
import { priceFormatter } from '@utils/formatter'

// TYPE
type CartProductCardProps = {
  name: string
  image: string
  price: number
  quantity: number
}

export function CartProductCard({
  name,
  image,
  price,
  quantity,
}: CartProductCardProps) {
  return (
    <article className="grid grid-cols-[80px_1fr_min-content] gap-4 max-w-2xl">
      <img
        className="place-self-center"
        width="80"
        height="80"
        src={image}
        alt=""
      />

      <section className="flex flex-col justify-between gap-2">
        <p>{name}</p>

        <div className="grid sm:grid-cols-2 gap-2">
          <div className="flex items-center gap-2 bg-neutral-100">
            <button
              // onClick={handleDecrementQuantity}
              className="text-primary-400 font-bold outline-none px-2 hocus:text-primary-700 focus-visible:ring ring-primary-400"
            >
              -
            </button>
            <input
              className="w-full bg-transparent outline-none text-center"
              type="text"
              pattern="[0-9]*"
              inputMode="numeric"
              defaultValue={quantity}
              // value={quantity}
              // onChange={handleInputQuantityChange}
            />
            <button
              // onClick={handleIncrementQuantity}
              className="text-primary-400 font-bold outline-none px-2 hocus:text-primary-700 focus-visible:ring ring-primary-400"
            >
              +
            </button>
          </div>

          <button
            className="py-1 px-2 flex items-center justify-center gap-2 bg-primary-700 text-white outline-none hocus:bg-primary-400 focus-visible:ring ring-primary-400 ring-offset-2 ring-offset-white"
            // onClick={handleAddItemToCart}
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
