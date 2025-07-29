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
    if (!isLoading && mounted) {
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

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen">
      <Preloader onLoadingComplete={handleLoadingComplete} />
      
      {/* Blurred overlay */}
      {isCookieBannerVisible && !isLoading && (
        <div
          className={`fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm z-40 pointer-events-none transition-opacity duration-[1500ms] ease-in-out ${
            isCookieBannerVisible ? "opacity-100" : "opacity-0"
          }`}
        />
      )}

      <main
        className={`flex-1 ${
          isCookieBannerVisible ? "pointer-events-none" : ""
        } ${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
      >
        {/* Scrolling Disclaimer with Continuous Loop */}
        <div className="w-full bg-green-600 text-white py-2 overflow-hidden relative">
          <div className="flex animate-marquee-infinite">
            <div className="flex-shrink-0 flex items-center justify-center min-w-full">
              <span className="px-8 whitespace-nowrap">
                Pyshell Website Phase 1 is Live Now! Experience it and share your reviews and suggestions with us. To access it, please visit the WebService page.
              </span>
            </div>
          </div>
        </div>

        <HeroSection />
        <StatsSection />
        <FeatureSection />
        <DemoSection />
        <TutorialSection />
        <ContactSection />
        <CTASection />
      </main>

      {isCookieBannerVisible && !isLoading && (
        <CookieBanner onChoice={handleCookieChoice} />
      )}

      <style jsx>{`
        @keyframes marquee-infinite {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee-infinite {
          animation: marquee-infinite 20s linear infinite;
        }

        /* Pause animation on hover */
        .animate-marquee-infinite:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}