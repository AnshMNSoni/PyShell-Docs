import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { TypewriterEffect } from "@/components/typewriter-effect"

export function HeroSection() {
  const words = [
    { text: "The" },
    { text: "Future" },
    { text: "of" },
    { text: "Terminals" },
    { text: "/" },
    { text: "CLI", className: "text-primary" },
  ]

  return (
    <section className="w-full py-10 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-background to-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">PyShell</h1>
              <div className="h-8 sm:h-12">
                <TypewriterEffect words={words} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" />
              </div>
              <p className="max-w-[600px] text-muted-foreground text-sm sm:text-base md:text-xl mt-4">
                An advanced Python-based terminal that combines power with simplicity. Enhance your development workflow
                with modern features.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild size="lg" className="px-4 sm:px-8">
                <Link href="/docs">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/docs/features">
                  Explore Features
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                <span>Secure Login</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-blue-500" />
                <span>Git Integration</span>
              </div>
              <div className="flex items-center">
                <div className="mr-1 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-purple-500" />
                <span>Voice Control</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center mt-6 lg:mt-0">
            <div className="relative w-full max-w-[550px] overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
              <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                <div className="flex space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="ml-2 text-sm font-medium">PyShell Terminal</div>
              </div>
              <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                <div className="mb-2 break-words">$ python -m pyshell</div>
                <div className="mb-2 break-words">
                  <span className="text-blue-400">PyShell v1.4.2</span> 
                </div>
                <div className="mb-2 break-words">Welcome back, user! Type 'help' to see available commands.</div>
                <div className="mb-2 break-words">$ help</div>
                <div className="mb-1 break-words">Available commands:</div>
                <div className="hidden sm:block">
                  <div className="mb-1 break-words">- calc: Open calculator</div>
                  <div className="mb-1 break-words">- weather: Check weather</div>
                  <div className="mb-1 break-words">- schedule: Manage tasks</div>
                  <div className="mb-1 break-words">- genpass: Generate password</div>
                  <div className="mb-1 break-words">- git: Git dashboard</div>
                  <div className="mb-1 break-words">- music: Play songs</div>
                  <div className="mb-1 break-words">- voice: Activate voice input</div>
                  <div className="mb-1 break-words">- layout: Change terminal layout</div>
                </div>
                <div className="block sm:hidden mb-1 break-words">- calc, weather, git, music...</div>
                <div className="animate-blink">$&nbsp;</div>
              </div>
              <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
