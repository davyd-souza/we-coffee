// PAGE
import { Home } from './pages/Home'

// COMPONENT
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <div className="grid grid-rows-[max-content_1fr] relative overflow-hidden min-h-[100dvh] bg-black/50">
        <Header />
        <p className="px-6 place-self-center font-bold text-white text-6xl text-center">
          We love to make coffee for you
        </p>

        {/* VIDEO ON BACKGROUND */}
        <video
          className="absolute -z-10 min-h-full min-w-full top-1/2 left-1/2 object-cover -translate-x-1/2 -translate-y-1/2"
          autoPlay
          muted
          loop
          tabIndex={-1}
        >
          <source
            src="https://we-coffee.s3.sa-east-1.amazonaws.com/we-coffee_bg.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Home />
      <Footer />
    </>
  )
}
