import { AnimatedGridPattern } from "@/components/Hero-Components/animated-grid-pattern";
import { InteractiveHoverButton } from "@/components/Hero-Components/interactive-hover-button";
import { VelocityScroll } from "@/components/Hero-Components/scroll-based-velocity";
import { MorphingText } from "@/components/Hero-Components/morphing-text";
import { ShimmerButton } from "@/components/Hero-Components/shimmer-button";
import Link from "next/link";
// import { TypewriterEffect } from "@/components/typewriter-effect"
export function HeroSection() {
  // const words = [
  //   { text: "The" },
  //   { text: "Future" },
  //   { text: "of" },
  //   { text: "Terminals" },
  //   { text: "/" },
  //   { text: "CLI", className: "text-primary" },
  // ]

  return (
    <>
      <section className="w-full py-10 sm:py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background via-background to-muted/30 relative overflow-hidden">
        <div className="absolute inset-0">
          <AnimatedGridPattern duration={0.6} />
        </div>
        <div className="container px-4 md:px-6 relative">
          <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px] backdrop-blur-[2px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                {/* <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none">PyShell</h1> */}
                <MorphingText className="text-green-600 dark:text-green-500" texts={["Pyshell"]} />
                <MorphingText texts={["Future","of","Terminals"]} />
                {/* <div className="h-8 sm:h-12">
                   <TypewriterEffect words={words} className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold" /> 
                </div> */}
                <div className="flex flex-col items-center justify-center">
                <p className="max-w-[600px] text-sm sm:text-base md:text-xl mt-4 text-center font-bold">
                  An <a className="underline decoration-green-500"> advanced Python </a>  based terminal that combines power <a className="underline decoration-green-500">with simplicity.</a> Enhance your development workflow
                  with modern features.
                </p>
              
              <div className="mt-2 flex flex-row gap-2 min-[200px]:flex-row">
                <Link href="/docs">
                  <ShimmerButton className="shadow-2xl h-11">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 ">
                      Get Started
                    </span>
                  </ShimmerButton>
                </Link>
                <Link href="/docs/features">
                  <InteractiveHoverButton>
                    Explore Features
                  </InteractiveHoverButton>
                </Link>
              </div>
            </div>
              </div>
              <div className="justify-center flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
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
                  <div className="mb-2 break-words">Welcome back, user! Commands available in PyShell.</div>
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
                  <div className="mb-2 break-words">and many more...</div>
                  <div className="animate-blink">$&nbsp;</div>
                </div>
                <div className="absolute -bottom-6 -left-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-primary/20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative w-[98vw] h-[200px] xs:h-[150px] xs:w-[400px] flex items-center justify-center overflow-hidden">
        {/* <div className="rounded-r-full  pointer-events-none absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-black via-black/70 to-transparent backdrop-blur-sm z-10" />
        <div className="rounded-l-full  pointer-events-none absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-black via-black/70 to-transparent backdrop-blur-sm z-10" /> */}
        <div className="relative z-0 w-full">
          <VelocityScroll> Pyshell is the <span className="text-green-600 dark:text-green-500">future of Terminals </span> </VelocityScroll>
        </div>
      </div>
    </>
  )
}

