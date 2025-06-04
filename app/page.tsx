import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { DemoSection } from "@/components/demo-section"
import { TutorialSection } from "@/components/tutorial-section"
import { CTASection } from "@/components/cta-section"
import { ContactSection } from "@/components/contact-section"
import { StatsSection } from "@/components/stats-section"
import CookieBanner from "@/components/CookieBanner"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <DemoSection />
      <TutorialSection />
      <ContactSection />
      <CTASection />
      <CookieBanner />
    </main>
  )
}
