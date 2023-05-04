// DEPENDENCY
import { useContext, FocusEvent } from 'react'
import { useForm, Controller } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import axios from 'axios'

// COMPONENT
import * as ToggleGroup from '@radix-ui/react-toggle-group'
import { CartProductCard } from './components/CartProductCard'
import { Input } from '@components/Input'

// CONTEXT
import { CartContext } from 'contexts/CartContext'

// ASSET
import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'

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

type NewOrderFormData = z.infer<typeof newOrderFormValidationSchema>

type ZipCodeInfoResponse = {
  cep: string
  city: string
  neighborhood: string
  service: string
  state: string
  street: string
}

export function Cart() {
  const { cart } = useContext(CartContext)
  const {
    control,
    register,
    handleSubmit,
    setValue,
    reset,
    setError,
    clearErrors,
    formState: { errors, isValid },
  } = useForm<NewOrderFormData>({
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

  const isSubmitDisabled = !isValid

  const handleCreateNewOrder = (data: NewOrderFormData) => {
    console.log('[Cart > handleCreateNewOrder > data]', data)
    reset()
  }

  const handleFetchZipCodeInfo = (
    evt: FocusEvent<HTMLInputElement, Element>,
  ) => {
    // console.log('[Cart > handleFetchZipCodeInfo > value]', evt.target.value)
    if (evt.target.value !== '') {
      axios
        .get<ZipCodeInfoResponse>(
          `https://brasilapi.com.br/api/cep/v1/${evt.target.value}`,
        )
        .then((res) => {
          // console.log('[Cart > handleFetchZipCodeInfo > res]', res.data)
          setValue('street', res.data.street)
          setValue('neighborhood', res.data.neighborhood)
          setValue('city', res.data.city)
          setValue('state', res.data.state)
          clearErrors('zip')
        })
        .catch((err) => {
          console.log(err.response.data.message)

          setError('zip', {
            type: 'request error',
            message: 'O CEP digitado não foi encontrado!',
          })
        })
    }
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

        <section className="space-y-2">
          <header>
            <div className="flex gap-2 items-center text-primary-600">
              <MapPin size={32} />
              <h3 className="font-bold">Enderço de Entrega</h3>
            </div>
            <p>Informe o endereço onde o pedido será entregue:</p>
          </header>

          <div className="space-y-2">
            <div>
              <Input
                type="text"
                placeholder="CEP"
                required
                {...register('zip')}
                autoFocus
                onBlur={handleFetchZipCodeInfo}
              />
              {errors.zip && (
                <p className="text-xs text-red-500">{errors.zip.message}</p>
              )}
            </div>
            <Input
              type="text"
              placeholder="Rua"
              required
              disabled
              {...register('street')}
            />

            <div className="grid sm:grid-cols-[20ch_1fr] gap-2">
              <Input
                type="text"
                placeholder="Número"
                required
                {...register('number')}
              />

              <div className="relative group/input-group">
                <Input
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
                <span
                  aria-hidden
                  className="group-focus-within/input-group:invisible peer-[&:not(:placeholder-shown)]/input:invisible text-neutral-400 text-xs absolute right-2 top-1/2 -translate-y-1/2"
                >
                  Opcional
                </span>
              </div>
            </div>

            <div className="grid sm:grid-cols-[20ch_1fr_5ch] gap-2">
              <Input
                type="text"
                placeholder="Bairro"
                required
                disabled
                {...register('neighborhood')}
              />
              <Input
                type="text"
                placeholder="Cidade"
                required
                disabled
                {...register('city')}
              />
              <Input
                type="text"
                placeholder="UF"
                required
                disabled
                {...register('state')}
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
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <ToggleGroup.Root
                className="grid sm:grid-cols-3 gap-2"
                type="single"
                aria-label="Método de Pagamento"
                onValueChange={field.onChange}
                value={field.value}
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
                  value="cash"
                >
                  <Money size={20} />
                  Dinheiro
                </ToggleGroup.Item>
              </ToggleGroup.Root>
            )}
          />
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
