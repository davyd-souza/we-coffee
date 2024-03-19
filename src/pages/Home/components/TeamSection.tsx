// ASSET
import teamImg from '@assets/team-img.webp'

export function TeamSection() {
  return (
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
          className="max-w-[30rem] w-full"
          src={teamImg}
          alt="Person delivering a paper bag and a cup"
        />
      </div>
    </section>
  )
}
