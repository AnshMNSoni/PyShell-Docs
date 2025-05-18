"use client"

import { Calculator, Calendar, Cloud, Key, Terminal, Music, GitBranch, Mic, Lock, Layout, Cpu } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function FeatureSection() {
  const features = [
    {
      icon: Lock,
      title: "User Login",
      description: "Secure access with user authentication system",
    },
    {
      icon: Calendar,
      title: "Task Scheduling",
      description: "Schedule and manage tasks for better productivity",
    },
    {
      icon: Cloud,
      title: "Weather Tracking",
      description: "Get real-time weather updates right from the terminal",
    },
    {
      icon: Calculator,
      title: "Advanced Calculator",
      description: "Perform calculations including calculus and trigonometry",
    },
    {
      icon: Key,
      title: "Password Generator",
      description: "Generate secure passwords with customizable parameters",
    },
    {
      icon: Terminal,
      title: "Linux Commands",
      description: "Use familiar Linux commands like ls, mkdir, sysinfo",
    },
    {
      icon: Cpu,
      title: "Process Control",
      description: "Process synchronization for better system control",
    },
    {
      icon: Layout,
      title: "Custom Layouts",
      description: "Customize your terminal layout to your preference",
    },
    {
      icon: Music,
      title: "Music Player",
      description: "Play your favorite songs without leaving the terminal",
    },
    {
      icon: GitBranch,
      title: "Git Integration",
      description: "Git dashboard and history visualization",
    },
    {
      icon: Mic,
      title: "Voice Input",
      description: "Control your terminal with voice commands",
    },
  ]

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([])

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setVisibleFeatures((prev) => {
          const next = [...prev, prev.length]
          if (next.length === features.length) {
            clearInterval(timer)
          }
          return next
        })
      }, 100)
      return () => clearInterval(timer)
    }
  }, [inView, features.length])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Everything You Need in One Terminal</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              PyShell combines the power of traditional terminals with modern features to enhance your development
              workflow.
            </p>
          </div>
        </div>
        <div ref={ref} className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={cn(
                "group flex flex-col items-center space-y-4 rounded-lg border p-6 transition-all hover:bg-muted",
                "transform transition-all duration-500 ease-in-out",
                visibleFeatures.includes(index) ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                index === 0 && "md:col-span-2 lg:col-span-1",
              )}
            >
              <div className="rounded-full border-2 border-primary/20 bg-primary/10 p-3 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-center text-xl font-medium">{feature.title}</h3>
              <p className="text-center text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
