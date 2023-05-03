// DEPENDENCY
import { useContext } from 'react'

// COMPONENT
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CartProductCard } from './components/CartProductCard'

// CONTEXT
import { CartContext } from 'contexts/CartContext'

// ASSET
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'

export function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
      <form className="space-y-6" id="order">
        <h2 className="py-1 text-xl text-primary-700 font-bold border-b border-b-primary-700 sm:text-2xl">
          Complete seu pedido
        </h2>

        <section className="space-y-2">
          <header>
            <div className="flex gap-2 items-center text-primary-600">
              <MapPin size={32} />
              <h3 className="font-bold">Enderço de Entrega</h3>
            </div>
            <p>Informe o endereço onde o pedido será entregue:</p>
          </header>

          <div className="space-y-2">
            <input
              className="min-w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              type="text"
              placeholder="CEP"
              required
            />
            <input
              className="min-w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              type="text"
              placeholder="Rua"
              required
            />

            <div className="grid sm:grid-cols-[20ch_1fr] gap-2">
              <input
                className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                type="text"
                placeholder="Número"
                required
              />
              <div className="relative group/card">
                <input
                  className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all before:content-['Opcional'] peer/input"
                  type="text"
                  placeholder="Complemento"
                />
                <span
                  aria-hidden
                  className="group-focus-within/card:invisible peer-[&:not(:placeholder-shown)]/input:invisible text-neutral-400 text-xs absolute right-2 top-1/2 -translate-y-1/2"
                >
                  Opcional
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-[20ch_1fr_5ch] gap-2">
              <input
                className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                type="text"
                placeholder="Bairro"
                required
              />
              <input
                className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                type="text"
                placeholder="Cidade"
                required
              />
              <input
                className="w-full p-2 border-2 border-primary-600 outline-none placeholder:text-neutral-400 [&:not(:disabled)]:hocus:border-primary-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                type="text"
                placeholder="UF"
                required
              />
            </div>
          </div>
        </section>

        <section className="space-y-2">
          <header>
            <div className="flex gap-2 items-center text-primary-600">
              <CurrencyDollar size={32} />
              <h3 className="font-bold">Pagamento</h3>
            </div>
            <p>
              O pagamento é feito na entrega. Estolha a forma que deseja pagar:
            </p>
          </header>

          <ToggleGroup.Root
            className="grid sm:grid-cols-3 gap-2"
            type="single"
            aria-label="Método de Pagamento"
          >
            <ToggleGroup.Item
              className="flex gap-2 items-center justify-center px-1 py-2 bg-neutral-100 text-sm font-bold hocus:ring ring-primary-400 outline-none data-[state='on']:bg-primary-100 data-[state='on']:text-primary-700 transition-all"
              value="credit"
            >
              <CreditCard size={20} />
              Cartão Crédito
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="flex gap-2 items-center justify-center px-1 py-2 bg-neutral-100 text-sm font-bold hocus:ring ring-primary-400 outline-none data-[state='on']:bg-primary-100 data-[state='on']:text-primary-700 transition-all"
              value="debit"
            >
              <Bank size={20} />
              Cartão Débito
            </ToggleGroup.Item>
            <ToggleGroup.Item
              className="flex gap-2 items-center justify-center px-1 py-2 bg-neutral-100 text-sm font-bold hocus:ring ring-primary-400 outline-none data-[state='on']:bg-primary-100 data-[state='on']:text-primary-700 transition-all"
              value="money"
            >
              <Money size={20} />
              Dinheiro
            </ToggleGroup.Item>
          </ToggleGroup.Root>
        </section>
      </form>

      <section className="space-y-6">
        <h2 className="py-1 text-xl text-primary-700 font-bold border-b border-b-primary-700 sm:text-2xl">
          Itens selecionados
        </h2>

        <div className="grid gap-8">
          <div className="space-y-8">
            {cart &&
              cart.map(({ id, name, quantity, image, price }) => (
                <CartProductCard
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  quantity={quantity}
                />
              ))}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between gap-2 text-neutral-600">
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div className="flex justify-between gap-2 text-neutral-600">
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <div className="flex justify-between gap-2 text-neutral-800 text-xl font-bold">
              <p>Total</p>
              <p>R$ 33,20</p>
            </div>
          </div>

          <button
            className="p-2 flex items-center justify-center gap-2 bg-primary-700 text-white font-bold outline-none hocus:bg-primary-400 focus-visible:ring ring-primary-400 ring-offset-2 ring-offset-white"
            type="submit"
            form="order"
          >
            Confirmar Pedido
          </button>
        </div>
      </section>
    </main>
  )
}
