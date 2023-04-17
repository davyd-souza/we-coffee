// ASSET
import drinkBanner from '../../assets/drink-banner.png'
import sweetBanner from '../../assets/sweet-banner.png'
import separationBanner from '../../assets/separator-banner.webp'
import churroImg from '../../assets/churro-img.webp'
import liberdadeStore from '../../assets/liberdade-store.webp'
import lorenaStore from '../../assets/lorena-store.webp'
import liberdadeInsideStore from '../../assets/liberdade-inside-store.webp'
import teamImg from '../../assets/team-img.webp'

export function Home() {
  return (
    <main className="grid gap-20">
      <section className="max-w-6xl mx-auto px-6 grid gap-4 pt-20">
        <h2 className="text-center font-light text-primary-700 text-sm tracking-wider uppercase">
          Aqui você encontra os melhores produtos
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <article className="grid place-items-center px-4 py-32 relative overflow-hidden bg-black/30">
            <img
              className="absolute -z-10 min-h-full min-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
              src={drinkBanner}
              alt="Two cups of drinks with some blueberries, strawberries, raspberries and cherries spread on table."
            />
            <h3 className="text-2xl text-white font-bold">Bebidas</h3>
          </article>

          <article className="grid place-items-center px-4 py-32 relative overflow-hidden bg-black/30">
            <img
              className="absolute -z-10 min-h-full min-w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
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

      <section className="relative overflow-hidden bg-black/30">
        <img
          className="absolute -z-10 object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={separationBanner}
          alt="A balcon with cups piled up with the store on the background blurred"
        />
        <div className="max-w-6xl mx-auto px-6 p-40">
          <p className="text-center text-2xl font-bold text-white">
            Unidos à arquitetura conceitual, futurista e minimalista,
            proporcionamos uma experiência de imersão gastronômica diferenciada.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6">
        <h2 className="text-center font-light text-primary-700 text-sm tracking-wider uppercase">
          Compromisso com a qualidade
        </h2>
        <div className="grid gap-4 grid-cols-2 items-center">
          <img
            src={churroImg}
            alt="Two churros side by side with a label on top containing We Coffee"
          />
          <div className="grid gap-4">
            <p className="text-3xl text-primary-700 font-bold">
              Fabricação própria com reposição diária
            </p>
            <p className="text-primary-600">
              Nossos processos são otimizados para garantir que todos os
              produtos sejam entregues fresquinhos para você. Nossas bebidas são
              preparadas na hora! Nossos pães e doces são produzidos e repostos
              diariamente. Prezamos pela qualidade e excelência em cada detalhe.
            </p>
            <a
              className="py-2 px-4 rounded-full text-white bg-primary-700 hocus:bg-primary-600 transition-colors outline-none focus-visible:ring ring-primary-600 ring-offset-2 ring-offset-white justify-self-start"
              href="#"
            >
              Conheça
            </a>
          </div>
        </div>
      </section>

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
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 items-center gap-4">
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
