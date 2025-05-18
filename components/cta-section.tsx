"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Download } from "lucide-react"
import { motion } from "framer-motion"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary/5">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to Transform Your Terminal Experience?
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get started with PyShell today and experience the future of command-line interfaces.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Button asChild size="lg" className="px-8">
              <Link href="/docs">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/AnshMNSoni/PyShell" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Star on GitHub
              </Link>
            </Button>
            <Button variant="secondary" size="lg" asChild>
              <Link href="https://github.com/AnshMNSoni/PyShell/archive/refs/heads/main.zip">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
