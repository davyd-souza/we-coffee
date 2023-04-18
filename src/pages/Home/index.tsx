// ASSET
import liberdadeStore from '../../assets/liberdade-store.webp'
import lorenaStore from '../../assets/lorena-store.webp'
import liberdadeInsideStore from '../../assets/liberdade-inside-store.webp'
import teamImg from '../../assets/team-img.webp'

// COMPONENT
import { ProductsSection } from './components/ProductsSection'
import { BannerSection } from './components/BannerSection'
import { QualitySection } from './components/QualitySection'

export function Home() {
  return (
    <main className="grid gap-20">
      <ProductsSection />
      <BannerSection />
      <QualitySection />

      <section className="max-w-6xl w-full mx-auto px-6 grid gap-6">
        <div className="grid grid-cols-3 gap-4">
          <article className="min-h-[30rem] relative overflow-hidden group">
            <img
              className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"
              src={liberdadeStore}
              alt="Front of We Coffee store located at Liberdade, São Paulo"
            />
          </article>
          <article className="min-h-[30rem] relative overflow-hidden group">
            <img
              className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"
              src={lorenaStore}
              alt="Front of We Coffee store located at Alanieda Lorena, São Paulo"
            />
          </article>
          <article className="min-h-[30rem] relative overflow-hidden group">
            <img
              className="absolute min-w-full min-h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:scale-105 transition-transform"
              src={liberdadeInsideStore}
              alt="Balcon with glass panel where on the other side we have four chefs working on pastry for Liberdade Store"
            />
          </article>
        </div>

        <div className="grid gap-4 text-center">
          <h2 className="font-light text-primary-700 text-sm tracking-wider uppercase">
            Cada detalhe importa
          </h2>
          <p className="text-3xl text-primary-700 font-bold">
            Uma experiência única
          </p>
          <p className="text-primary-600 mx-auto w-[60ch]">
            Somos referência de cafeteria inovadora e adoramos este título!
            Nossas unidades possuem um espaço com alto potencial de
            compartilhamento e a experiência presencial é incrível!
          </p>
          <a
            className="py-2 px-4 rounded-full text-white bg-primary-700 hocus:bg-primary-600 transition-colors outline-none focus-visible:ring ring-primary-600 ring-offset-2 ring-offset-white justify-self-center"
            href="#"
          >
            Venha nos visitar
          </a>
        </div>
      </section>

      <section className="bg-primary-100">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 items-center gap-4 pt-6">
          <div className="grid gap-4">
            <h2 className="text-3xl text-primary-700 font-bold">
              Faça parte da nossa equipe
            </h2>
            <p className="text-primary-600">
              Acreditamos que pessoas fazem a diferença! Venha fazer a diferença
              conosco. Todos os talentos são bem vindos aqui, queremos te
              conhecer.
            </p>
            <a
              className="py-2 px-4 rounded-full text-white bg-primary-700 hocus:bg-primary-600 transition-colors outline-none focus-visible:ring ring-primary-600 ring-offset-2 ring-offset-primary-100 justify-self-start"
              href="#"
            >
              Junte-se a nós
            </a>
          </div>
          <img
            className="max-w-[30rem]"
            src={teamImg}
            alt="Person delivering a paper bag and a cup"
          />
        </div>
      </section>
    </main>
  )
}
