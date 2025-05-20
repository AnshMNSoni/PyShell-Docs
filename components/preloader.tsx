"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { Terminal } from "lucide-react"

interface PreloaderProps {
  duration?: number
  onLoadingComplete?: () => void
}

export function Preloader({ duration = 2500, onLoadingComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (onLoadingComplete) onLoadingComplete()
    }, duration)

    return () => clearTimeout(timer)
  }, [duration, onLoadingComplete])

  return (
    <div
      className={cn(
        "fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500",
        isLoading ? "opacity-100" : "opacity-0 pointer-events-none",
      )}
    >
      <div className="flex flex-col items-center">
        {/* Terminal icon with glow */}
        <div className="text-primary animate-pulse-glow mb-6">
          <Terminal className="h-16 w-16" />
        </div>

        {/* Company name with glow effect */}
        <h1 className="text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70 relative">
          <span className="relative z-10">PyShell</span>
          <span className="absolute inset-0 blur-sm bg-primary/20 z-0 animate-pulse-slow"></span>
        </h1>

        {/* Loading text */}
        <p className="mt-4 text-sm text-primary/70 animate-pulse-text">Initializing Terminal...</p>
      </div>
    </div>
  )
}
