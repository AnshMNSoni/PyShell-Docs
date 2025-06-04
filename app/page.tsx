"use client";

import { HeroSection } from "@/components/hero-section";
import { FeatureSection } from "@/components/feature-section";
import { DemoSection } from "@/components/demo-section";
import { TutorialSection } from "@/components/tutorial-section";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";
import { StatsSection } from "@/components/stats-section";
import CookieBanner from "@/components/CookieBanner";
import { useState, useEffect } from "react";

export default function Home() {
  const [isCookieBannerVisible, setIsCookieBannerVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice in this session
    const hasMadeChoice = sessionStorage.getItem("cookieConsent");
    if (!hasMadeChoice) {
      setIsCookieBannerVisible(true);
    }
  }, []);

  const handleCookieChoice = () => {
    setIsCookieBannerVisible(false);
  };

  return (
    <div className="relative min-h-screen">
      {/* Blurred overlay with slow fade-out */}
      {isCookieBannerVisible && (
        <div
          className={`fixed inset-0 bg-white bg-opacity-80 backdrop-blur-sm z-40 pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
            isCookieBannerVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
      <main className={`flex-1 ${isCookieBannerVisible ? "pointer-events-none" : ""}`}>
        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <DemoSection />
        <TutorialSection />
        <ContactSection />
        <CTASection />
      </main>
      {isCookieBannerVisible && <CookieBanner onChoice={handleCookieChoice} />}
    </div>
  );
}