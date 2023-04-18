// ASSET
import churroImg from '@assets/churro-img.webp'

export function QualitySection() {
  return (
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
            Nossos processos são otimizados para garantir que todos os produtos
            sejam entregues fresquinhos para você. Nossas bebidas são preparadas
            na hora! Nossos pães e doces são produzidos e repostos diariamente.
            Prezamos pela qualidade e excelência em cada detalhe.
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
  )
}
