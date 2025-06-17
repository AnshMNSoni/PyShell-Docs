"use client";

import { ContactSection } from "@/components/contact-section";
import CookieBanner from "@/components/CookieBanner";
import { CTASection } from "@/components/cta-section";
import { DemoSection } from "@/components/demo-section";
import { FeatureSection } from "@/components/feature-section";
import { HeroSection } from "@/components/hero-section";
import { Preloader } from "@/components/preloader";
import { StatsSection } from "@/components/stats-section";
import { TutorialSection } from "@/components/tutorial-section";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  // Handle initial mount
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Only check for cookie consent after loading is complete and component is mounted
    if (!isLoading && mounted) {
      // Add 5 second delay before showing cookie banner
      const timer = setTimeout(() => {
        const hasMadeChoice = sessionStorage.getItem("cookieConsent");
        if (!hasMadeChoice) {
          setIsCookieBannerVisible(true);
        }
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isLoading, mounted]);

  const handleCookieChoice = () => {
    setIsCookieBannerVisible(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Don't render anything until mounted to prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen">
      <Preloader onLoadingComplete={handleLoadingComplete} />
      
      {/* Blurred overlay with slow fade-out */}
      {isCookieBannerVisible && !isLoading && (
        <div
          className={`fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-40 pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
            isCookieBannerVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <main className={`flex-1 ${isCookieBannerVisible ? "pointer-events-none" : ""} ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <DemoSection />
        <TutorialSection />
        <ContactSection />
        <CTASection />
      </main>
      {isCookieBannerVisible && !isLoading && <CookieBanner onChoice={handleCookieChoice} />}
    </div>
  );
}