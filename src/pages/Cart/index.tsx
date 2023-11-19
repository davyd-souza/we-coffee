// DEPENDENCY
import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

// COMPONENT
import { CartOrderForm } from './components/CartOrderForm'
import { CartProductCard } from './components/CartProductCard'

// CONTEXT
import { CartContext } from 'contexts/CartContext'

// ASSET
import emptyCart from '@assets/empty-cart.svg'

// UTIL
import { priceFormatter } from '@utils/formatter'
import { useNavigate } from 'react-router-dom'

// TYPE
const newOrderFormValidationSchema = z.object({
  zip: z.string().min(1, 'Digite um'),
  street: z.string(),
  number: z.string(),
  complement: z.string().max(50).optional(),
  neighborhood: z.string(),
  city: z.string(),
  state: z.string(),
  paymentMethod: z.enum(['credit', 'debit', 'cash']),
})

export type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>

export function Cart() {
  const { cart, totalPriceCart, updateAddress, clearCart } =
    useContext(CartContext)

  const newOrderForm = useForm<NewOrderFormData>({
    resolver: zodResolver(newOrderFormValidationSchema),
    defaultValues: {
      zip: '',
      street: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      state: '',
      paymentMethod: 'credit',
    },
  })

  const {
    handleSubmit,
    getValues,
    formState: { isValid },
  } = newOrderForm

  const navigate = useNavigate()

  const deliveryPrice = getValues('state') ? 3.5 : 0
  const orderTotalPrice = totalPriceCart + deliveryPrice
  const isSubmitDisabled = !isValid || totalPriceCart === 0

  const handleCreateNewOrder = (data: NewOrderFormData) => {
    const { paymentMethod, ...orderAddress } = data
    updateAddress({ ...orderAddress })
    clearCart()

    const order = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      totalPrice: orderTotalPrice,
      address: { ...orderAddress },
      paymentMethod,
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
      })),
    }

    navigate('/sucesso', {
      state: {
        ...order,
      },
    })
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 grid lg:grid-cols-2 gap-8">
      <form
        className="space-y-6"
        id="order"
        onSubmit={handleSubmit(handleCreateNewOrder)}
      >
        <h2 className="py-1 text-xl text-primary-700 font-bold border-b border-b-primary-700 sm:text-2xl">
          Complete seu pedido
        </h2>
        <FormProvider {...newOrderForm}>
          <CartOrderForm />
        </FormProvider>
      </form>

      <section className="space-y-6">
        <h2 className="py-1 text-xl text-primary-700 font-bold border-b border-b-primary-700 sm:text-2xl">
          Itens selecionados
        </h2>

        <div className="grid gap-8">
          <div className="space-y-8">
            {cart.length > 0 ? (
              cart.map(({ id, name, quantity, image, price }) => (
                <CartProductCard
                  id={id}
                  key={id}
                  name={name}
                  image={image}
                  price={price}
                  quantity={quantity}
                />
              ))
            ) : (
              <div className="grid place-items-center gap-4 grayscale opacity-70">
                <img
                  width="150"
                  height="150"
                  src={emptyCart}
                  alt="A person holding a empty box while the other is looking inside"
                />
                <p>Nenhum item encontrado no carrinho</p>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex justify-between gap-2 text-neutral-600">
              <p>Total de itens</p>
              <p>{priceFormatter.format(totalPriceCart)}</p>
            </div>
            <div className="flex justify-between gap-2 text-neutral-600">
              <p>Entrega</p>
              <p>{priceFormatter.format(deliveryPrice)}</p>
            </div>
            <div className="flex justify-between gap-2 text-neutral-800 text-xl font-bold">
              <p>Total</p>
              <p>{priceFormatter.format(orderTotalPrice)}</p>
            </div>
          </div>

          <button
            className="p-2 flex items-center justify-center gap-2 bg-primary-700 text-white font-bold outline-none [&:not(:disabled)]:hocus:bg-primary-400 focus-visible:ring ring-primary-400 ring-offset-2 ring-offset-white disabled:opacity-60 disabled:cursor-not-allowed"
            type="submit"
            form="order"
            disabled={isSubmitDisabled}
          >
            Confirmar Pedido
          </button>
        </div>
      </section>
    </main>
  )
}
