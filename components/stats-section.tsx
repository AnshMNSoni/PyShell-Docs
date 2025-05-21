"use client"

import { motion } from "framer-motion"
import { Terminal, GitBranch, Code, Star } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Terminal,
      value: "15+",
      label: "Powerful Features",
    },
    {
      icon: GitBranch,
      value: "100+",
      label: "Git Commits",
    },
    {
      icon: Code,
      value: "5000+",
      label: "Lines of Code",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "User Rating",
    },
  ]

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-2 text-center"
            >
              <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-primary/10">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.value}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
