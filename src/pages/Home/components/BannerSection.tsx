// ASSET
import separationBanner from '@assets/separator-banner.webp'

export function BannerSection() {
  return (
    <section className="relative overflow-hidden bg-black/30">
      <img
        className="absolute -z-10 min-h-full min-w-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
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
  )
}
