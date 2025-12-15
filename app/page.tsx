import { BentoNavigation } from '@/components/bento-navigation'
import { BentoHero } from '@/components/bento-hero'
import { BentoGrid } from '@/components/bento-grid'
import { BentoFooter } from '@/components/bento-footer'

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <BentoNavigation />

      {/* Main Content */}
      <main className="md:px-12 max-w-[1400px] mr-auto ml-auto pt-40 pr-6 pl-6 pb-20">
        {/* Hero Header */}
        <BentoHero />

        {/* Bento Grid Layout */}
        <BentoGrid />

        {/* Footer */}
        <BentoFooter />
      </main>
    </>
  )
}
