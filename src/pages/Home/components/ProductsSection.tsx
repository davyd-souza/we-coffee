// ASSET
import drinkBanner from '@assets/drink-banner.png'
import sweetBanner from '@assets/sweet-banner.png'

export function ProductsSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 grid gap-4 pt-20">
      <h2 className="text-center font-light text-primary-700 text-sm tracking-wider uppercase">
        Aqui você encontra os melhores produtos
      </h2>

      <div className="grid grid-cols-3 gap-4">
        <article className="grid place-items-center px-4 py-32 relative overflow-hidden bg-black/30 group">
          <img
            className="absolute -z-10 min-h-full min-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover group-hover:scale-105 transition-transform"
            src={drinkBanner}
            alt="Two cups of drinks with some blueberries, strawberries, raspberries and cherries spread on table."
          />
          <h3 className="text-2xl text-white font-bold">Bebidas</h3>
        </article>

        <article className="grid place-items-center px-4 py-32 relative overflow-hidden bg-black/30 group">
          <img
            className="absolute -z-10 min-h-full min-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover group-hover:scale-105 transition-transform"
            src={sweetBanner}
            alt="Strawberries spread on top a table with a box containing a pink churro with strawberry as filling"
          />
          <h3 className="text-2xl text-white font-bold">Doces</h3>
        </article>

        <article className="bg-primary-100 grid place-items-center gap-4 px-4 py-32 text-center">
          <h3 className="text-2xl font-bold text-primary-700">
            E muito mais...
          </h3>
          <p className="text-primary-600">
            Conheça e experimente produtos exclusivos, desenvolvidos
            especialmente para você.
          </p>
          <a
            className="py-2 px-4 rounded-full text-white bg-primary-700 hocus:bg-primary-600 transition-colors outline-none focus-visible:ring ring-primary-600 ring-offset-2 ring-offset-primary-100"
            href="#"
          >
            Conheça nosso cardápio
          </a>
        </article>
      </div>
    </section>
  )
}
