"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

export function DemoSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
              Interactive Demos
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See PyShell in Action</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore the powerful features that make PyShell the future of terminals.
            </p>
          </div>
        </div>
        <div
          ref={ref}
          className={`mx-auto max-w-4xl py-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Tabs defaultValue="calculator" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
              <TabsTrigger value="calculator">Calculator</TabsTrigger>
              <TabsTrigger value="weather">Weather</TabsTrigger>
              <TabsTrigger value="git">Git Dashboard</TabsTrigger>
              <TabsTrigger value="music" className="hidden md:inline-flex">
                Music
              </TabsTrigger>
              <TabsTrigger value="voice" className="hidden md:inline-flex">
                Voice Input
              </TabsTrigger>
            </TabsList>
            <TabsContent value="calculator" className="mt-6">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-sm font-medium">PyShell Calculator</div>
                </div>
                <div className="bg-black p-6 text-green-400 font-mono text-sm">
                  <div className="mb-2">$ calc</div>
                  <div className="mb-2">PyShell Calculator v1.0</div>
                  <div className="mb-2">
                    Available operations: +, -, *, /, ^, sqrt, sin, cos, tan, log, diff, integrate
                  </div>
                  <div className="mb-2">&gt; sin(30)</div>
                  <div className="mb-2">0.5</div>
                  <div className="mb-2">&gt; diff(x^2)</div>
                  <div className="mb-2">2x</div>
                  <div className="mb-2">&gt; integrate(2x)</div>
                  <div className="mb-2">x^2 + C</div>
                  <div className="animate-blink">&gt;&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="weather" className="mt-6">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-sm font-medium">PyShell Weather</div>
                </div>
                <div className="bg-black p-6 text-green-400 font-mono text-sm">
                  <div className="mb-2">$ weather</div>
                  <div className="mb-2">Enter location: New York</div>
                  <div className="mb-2">Fetching weather data for New York...</div>
                  <div className="mb-2">Current Weather in New York:</div>
                  <div className="mb-2">Temperature: 72°F / 22°C</div>
                  <div className="mb-2">Condition: Partly Cloudy</div>
                  <div className="mb-2">Humidity: 65%</div>
                  <div className="mb-2">Wind: 8 mph NE</div>
                  <div className="mb-2">Forecast:</div>
                  <div className="mb-2">Tomorrow: 75°F / 24°C, Sunny</div>
                  <div className="mb-2">Day After: 68°F / 20°C, Rain</div>
                  <div className="animate-blink">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="git" className="mt-6">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-sm font-medium">PyShell Git Dashboard</div>
                </div>
                <div className="bg-black p-6 text-green-400 font-mono text-sm">
                  <div className="mb-2">$ git dashboard</div>
                  <div className="mb-2">Loading Git repository information...</div>
                  <div className="mb-2">Repository: PyShell</div>
                  <div className="mb-2">Branch: main</div>
                  <div className="mb-2">Status:</div>
                  <div className="mb-2 text-blue-400">M components/feature-section.tsx</div>
                  <div className="mb-2 text-green-400">A components/demo-section.tsx</div>
                  <div className="mb-2">Recent Commits:</div>
                  <div className="mb-2">[a1b2c3d] Add voice input feature (2 days ago)</div>
                  <div className="mb-2">[e4f5g6h] Fix calculator bug (4 days ago)</div>
                  <div className="mb-2">[i7j8k9l] Update documentation (1 week ago)</div>
                  <div className="mb-2">Branches:</div>
                  <div className="mb-2">* main</div>
                  <div className="mb-2"> feature/voice-commands</div>
                  <div className="mb-2"> bugfix/calculator</div>
                  <div className="animate-blink">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="music" className="mt-6">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-sm font-medium">PyShell Music Player</div>
                </div>
                <div className="bg-black p-6 text-green-400 font-mono text-sm">
                  <div className="mb-2">$ music</div>
                  <div className="mb-2">PyShell Music Player v1.0</div>
                  <div className="mb-2">Available commands: play, pause, next, prev, list</div>
                  <div className="mb-2">&gt; list</div>
                  <div className="mb-2">1. Lofi Study Mix</div>
                  <div className="mb-2">2. Coding Beats</div>
                  <div className="mb-2">3. Ambient Focus</div>
                  <div className="mb-2">4. Deep Concentration</div>
                  <div className="mb-2">&gt; play 2</div>
                  <div className="mb-2">Now playing: Coding Beats</div>
                  <div className="mb-2">Artist: DevBeats</div>
                  <div className="mb-2">Album: Code Sessions Vol. 1</div>
                  <div className="mb-2">▶️ ━━━━━━━━━━━━━━━━━━━━━ 0:12 / 3:45</div>
                  <div className="animate-blink">&gt;&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="voice" className="mt-6">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-sm font-medium">PyShell Voice Input</div>
                </div>
                <div className="bg-black p-6 text-green-400 font-mono text-sm">
                  <div className="mb-2">$ voice</div>
                  <div className="mb-2">Voice input mode activated. Speak a command...</div>
                  <div className="mb-2">Listening...</div>
                  <div className="mb-2">Recognized: "open calculator"</div>
                  <div className="mb-2">Executing: calc</div>
                  <div className="mb-2">PyShell Calculator v1.0</div>
                  <div className="mb-2">Listening...</div>
                  <div className="mb-2">Recognized: "calculate square root of 16"</div>
                  <div className="mb-2">Result: 4.0</div>
                  <div className="mb-2">Listening...</div>
                  <div className="mb-2">Recognized: "check weather in London"</div>
                  <div className="mb-2">Executing: weather London</div>
                  <div className="mb-2">Current Weather in London:</div>
                  <div className="mb-2">Temperature: 18°C, Cloudy</div>
                  <div className="animate-blink">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
