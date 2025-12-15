import { SplitHero } from '@/components/split-hero'
import { ProfileSection } from '@/components/profile-section'
import { PortfolioCarousel } from '@/components/portfolio-carousel'
import { ContactFooter } from '@/components/contact-footer'

export default function Home() {
  return (
    <main className="selection:bg-neutral-900 selection:text-white overflow-x-hidden text-neutral-900 bg-[#fcfbf9]">
      {/* Split Hero Section */}
      <SplitHero />

      {/* Me / About Section */}
      <ProfileSection />

      {/* Portfolio Section (Horizontal Scroll) */}
      <PortfolioCarousel />

      {/* Footer / Get in Touch */}
      <ContactFooter />
    </main>
  )
}
