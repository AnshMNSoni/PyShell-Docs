"use client"

import { useEffect, useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  duration?: number
  onLoadingComplete?: () => void
}

export function Preloader({ duration = 3500, onLoadingComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const [visibleLetters, setVisibleLetters] = useState(0)
  const particlesRef = useRef<HTMLDivElement>(null)
  const brandName = "PyShell"

  // Create particles on mount
  useEffect(() => {
    if (!particlesRef.current) return

    const particlesContainer = particlesRef.current
    const particleCount = 50

    // Clear any existing particles
    particlesContainer.innerHTML = ""

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div")
      particle.className = "absolute rounded-full bg-primary/30"

      // Random size between 2px and 6px
      const size = Math.random() * 4 + 2
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`

      // Random position
      particle.style.left = `${Math.random() * 100}%`
      particle.style.top = `${Math.random() * 100}%`

      // Random animation duration between 3s and 8s
      const animDuration = Math.random() * 5 + 3
      particle.style.animation = `float ${animDuration}s infinite ease-in-out`

      // Random delay
      particle.style.animationDelay = `${Math.random() * 5}s`

      // Random opacity
      particle.style.opacity = `${Math.random() * 0.5 + 0.1}`

      particlesContainer.appendChild(particle)
    }
  }, [])

  // Handle progress and letter reveal
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + 100 / (duration / 50)
        return newProgress > 100 ? 100 : newProgress
      })
    }, 50)

    // Reveal letters one by one
    const letterInterval = setInterval(
      () => {
        setVisibleLetters((prev) => {
          const newCount = prev + 1
          return newCount > brandName.length ? brandName.length : newCount
        })
      },
      duration / (brandName.length + 2),
    )

    // Complete loading
    const timer = setTimeout(() => {
      setIsLoading(false)
      if (onLoadingComplete) onLoadingComplete()
    }, duration)

    return () => {
      clearInterval(progressInterval)
      clearInterval(letterInterval)
      clearTimeout(timer)
    }
  }, [duration, onLoadingComplete, brandName.length])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black"
        >
          {/* Particles background */}
          <div ref={particlesRef} className="absolute inset-0 overflow-hidden opacity-70" />

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-4">
            {/* Brand name with letter-by-letter reveal */}
            <div className="relative mb-6 sm:mb-8 flex items-center justify-center h-16 sm:h-20">
              {brandName.split("").map((letter, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={index < visibleLetters ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.3 }}
                  className="relative"
                >
                  <span className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary relative z-10">
                    {letter}
                  </span>
                  {/* Glow effect */}
                  <span className="absolute inset-0 blur-md text-4xl sm:text-5xl md:text-6xl font-bold text-primary z-0">
                    {letter}
                  </span>
                </motion.div>
              ))}

              {/* Cursor effect */}
              <motion.div
                animate={{
                  opacity: [1, 0, 1],
                  height: visibleLetters >= brandName.length ? "1.5rem" : "2rem",
                }}
                transition={{
                  opacity: { repeat: Number.POSITIVE_INFINITY, duration: 0.8 },
                  height: { duration: 0.2 },
                }}
                className={cn(
                  "w-[2px] sm:w-[3px] bg-primary ml-1",
                  visibleLetters >= brandName.length ? "animate-blink" : "",
                )}
              />
            </div>

            {/* Tagline with typing effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={visibleLetters >= brandName.length ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary/70 text-xs sm:text-sm md:text-base mb-6 sm:mb-8 tracking-wider"
            >
             
            </motion.div>

            {/* Progress bar */}
            <div className="w-36 sm:w-48 md:w-64 h-1 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                style={{ width: `${progress}%` }}
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeInOut" }}
              />
            </div>

            {/* Loading text */}
            <motion.div
              className="mt-3 text-xs text-primary/50"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            >
              {progress < 33
                ? "INITIALIZING SYSTEM"
                : progress < 66
                  ? "LOADING MODULES"
                  : progress < 100
                    ? "PREPARING INTERFACE"
                    : "READY"}
            </motion.div>

            {/* Hexagon grid background effect */}
            <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 opacity-20 overflow-hidden">
              <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI0OSI+PHBhdGggZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzRkMzk5IiBzdHJva2Utd2lkdGg9IjEuNSIgZD0iTTAgNDIuNUw3LjE1IDI4LjUgMCAxNC41IDE0LjMgMGwyOC42IDE0LjUgMjguNTYtMTQuNUw4NiAwIDc4Ljg1IDE0LjUgODYgMjguNSA3MS43IDQzIDQzLjEgMjguNSAxNC41NCA0M3oiIG9wYWNpdHk9Ii4zIi8+PC9zdmc+')] bg-repeat" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
