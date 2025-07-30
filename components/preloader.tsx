"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface PreloaderProps {
  duration?: number
  onLoadingComplete?: () => void
}

export function Preloader({ duration = 3500, onLoadingComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + (100 / (duration / 50))
      })
    }, 50)

    const timer = setTimeout(() => {
      setIsLoading(false)
      onLoadingComplete?.()
    }, duration)

    return () => {
      clearTimeout(timer)
      clearInterval(progressInterval)
    }
  }, [duration, onLoadingComplete])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950"
        >
          {/* Background Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                }}
              />
            ))}
          </div>

          {/* Ring Line Animation */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center mb-8">
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 200 200">
              {/* Outer Ring Line */}
              <motion.circle
                cx="100"
                cy="100"
                r="90"
                fill="none"
                stroke="url(#gradient1)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="20 10"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 100px" }}
              />
              
              {/* Middle Ring Line */}
              <motion.circle
                cx="100"
                cy="100"
                r="75"
                fill="none"
                stroke="url(#gradient2)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="15 8"
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 100px" }}
              />
              
              {/* Inner Ring Line */}
              <motion.circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="url(#gradient3)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="10 5"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: "100px 100px" }}
              />

              {/* Logo Image Centered */}
              <foreignObject x="50" y="50" width="100" height="100" className="flex items-center justify-center">
                <motion.div
                  className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-4 ring-emerald-400/30"
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                      "0 0 40px rgba(16, 185, 129, 0.6)",
                      "0 0 20px rgba(16, 185, 129, 0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <img
                    src="/pyshellcircle.png"
                    alt="Preloader"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </foreignObject>

              {/* Gradient Definitions */}
              <defs>
                <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#34d399" stopOpacity="1" />
                  <stop offset="100%" stopColor="#6ee7b7" stopOpacity="0.6" />
                </linearGradient>
                <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#34d399" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#10b981" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#059669" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#6ee7b7" stopOpacity="0.5" />
                  <stop offset="50%" stopColor="#34d399" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="1" />
                  <stop offset="100%" stopColor="#34d399" stopOpacity="1" />
                </linearGradient>
              </defs>
            </svg>

            {/* Background Glow for Rings */}
            <motion.div
              className="absolute inset-8 rounded-full bg-gradient-to-r from-emerald-400/10 to-green-400/10 blur-2xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Spinning Borders */}
          <motion.div
            className="absolute inset-4 rounded-full border border-green-400/10"
            animate={{ rotate: 360 }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute inset-8 rounded-full border border-emerald-400/10"
            animate={{ rotate: -360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Preloader