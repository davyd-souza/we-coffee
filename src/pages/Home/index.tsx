// COMPONENT
import { ProductsSection } from './components/ProductsSection'
import { BannerSection } from './components/BannerSection'
import { QualitySection } from './components/QualitySection'
import { LocationSection } from './components/LocationSection'
import { TeamSection } from './components/TeamSection'

export function Home() {
  return (
    <main className="grid gap-20">
      <ProductsSection />
      <BannerSection />
      <QualitySection />
      <LocationSection />
      <TeamSection />
    </main>
  )
}
