import { HeroSection } from "@/components/hero-section"
import { FeatureSection } from "@/components/feature-section"
import { DemoSection } from "@/components/demo-section"
import { CTASection } from "@/components/cta-section"
import { TestimonialSection } from "@/components/testimonial-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main className="flex-1">
      <HeroSection />
      <StatsSection />
      <FeatureSection />
      <DemoSection />
      <TestimonialSection />
      <CTASection />
    </main>
  )
}
