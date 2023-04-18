// ASSET
import { FacebookLogo, InstagramLogo, TiktokLogo } from 'phosphor-react'
import { ReactComponent as WeCoffeeLogo } from '../../assets/we-coffee.svg'

export function Footer() {
  return (
    <footer className="bg-primary-700 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 grid gap-4">
        <section className="flex items-center justify-between">
          <a
            className="p-1 flex flex-col items-center justify-center outline-none focus-visible:ring ring-primary-100 rounded group"
            href="#"
          >
            <WeCoffeeLogo className="w-10 h-10 fill-white group-hover:fill-primary-100 group-focus:fill-primary-100" />
            <p className="uppercase font-brand group-hover:text-primary-100 group-focus:text-primary-100 transition-colors">
              We Coffee
            </p>
          </a>
          <nav className="flex gap-4 items-center">
            <a
              className="p-2 border-b-2 border-b-transparent hocus:border-b-primary-100 hocus:text-primary-100 transition-all outline-none"
              href="#"
            >
              Home
            </a>
            <a
              className="p-2 border-b-2 border-b-transparent hocus:border-b-primary-100 hocus:text-primary-100 transition-all outline-none"
              href="#"
            >
              Cardápio
            </a>
          </nav>
          <div className="flex gap-2">
            <a
              className="p-1 rounded outline-none hocus:text-primary-100 focus-visible:ring ring-primary-100 transition-all"
              href="https://www.instagram.com/wecoffee.br/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramLogo weight="fill" size={24} />
            </a>
            <a
              className="p-1 rounded outline-none hocus:text-primary-100 focus-visible:ring ring-primary-100 transition-all"
              href="https://www.tiktok.com/@wecoffee.br?lang=pt-BR"
              target="_blank"
              rel="noreferrer"
            >
              <TiktokLogo weight="fill" size={24} />
            </a>
            <a
              className="p-1 rounded outline-none hocus:text-primary-100 focus-visible:ring ring-primary-100 transition-all"
              href="https://facebook.com/wecoffee.br"
              target="_blank"
              rel="noreferrer"
            >
              <FacebookLogo weight="fill" size={24} />
            </a>
          </div>
        </section>
        <p className="text-center text-sm text-primary-400">
          © 2023 | Todos os direitos reservados à{' '}
          <a
            className="py-2 border-b-2 border-transparent hocus:border-primary-100 font-bold text-primary-100 transition-all"
            href="https://wecoffee.com.br/"
            target="_blank"
            rel="noreferrer"
          >
            We Coffee
          </a>
        </p>
      </div>
    </footer>
  )
}
