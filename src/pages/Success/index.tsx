// DEPENDENCY
import { useLocation } from 'react-router-dom'

// ASSET
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { ReactComponent as OnTheWay } from '@assets/on-the-way.svg'

export function Success() {
  const { state } = useLocation()

  return (
    <main className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-2 place-items-center gap-8">
      <section className="space-y-8">
        <div>
          <h2 className="text-3xl text-primary-700 font-bold">
            Uhuul! Pedido confirmado
          </h2>
          <p>Agora é só aguardar que logo o café chegará até você!</p>
        </div>

        <div
          className="
          relative after:content-[''] after:absolute after:-inset-[0.2rem] after:bg-gradient-to-tr after:from-primary-100 after:to-primary-800 after:-z-10
          before:content-[''] before:absolute before:-inset-[0.2rem] before:bg-gradient-to-tr before:from-primary-100 before:to-primary-800 before:-z-10 before:blur-lg"
        >
          <div className="space-y-4 p-4 bg-white">
            <article className="flex items-center gap-2">
              <MapPin
                className="p-2 min-h-[2.5rem] min-w-[2.5rem] bg-primary-700 text-white rounded-full"
                size={24}
              />
              <div>
                <p>
                  Entrega em{' '}
                  <span className="font-bold">
                    {state.address.street}, {state.address.number}
                  </span>
                </p>
                <p className="text-sm">
                  {state.address.neighborhood} - {state.address.city},{' '}
                  {state.address.state}
                </p>
              </div>
            </article>

            <article className="flex items-center gap-2">
              <Clock
                className="p-2 min-h-[2.5rem] min-w-[2.5rem] bg-primary-700 text-white rounded-full"
                size={24}
              />
              <div>
                <p>Previsão de entrega</p>
                <p className="font-bold">20min - 30min</p>
              </div>
            </article>

            <article className="flex items-center gap-2">
              <CurrencyDollar
                className="p-2 min-h-[2.5rem] min-w-[2.5rem] bg-primary-700 text-white rounded-full"
                size={24}
              />
              <div>
                <p>Pagamento na entrega</p>

                <p className="font-bold">
                  {state.paymentMethod === 'credit'
                    ? 'Cartão de Crédito'
                    : state.paymentMethod === 'debit'
                    ? 'Cartão de Débito'
                    : 'Dinheiro'}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section>
        <OnTheWay className="max-w-full max-h-full" />
      </section>
    </main>
  )
}
