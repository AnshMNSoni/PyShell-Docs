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
          className={`mx-auto w-full max-w-4xl px-4 sm:px-6 py-8 sm:py-10 md:py-12 transition-all duration-700 ${
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
            <TabsContent value="calculator" className="mt-4 sm:mt-6 overflow-hidden">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-2 sm:px-3 py-2">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-xs sm:text-sm font-medium">PyShell Calculator</div>
                </div>
                <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                  <div className="mb-2 whitespace-pre-wrap break-words">$ calc</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">PyShell Calculator v1.0</div>
                  <div className="mb-2 break-words">
                    Available operations: +, -, *, /, ^, sqrt, sin, cos, tan, log, diff, integrate
                  </div>
                  <div className="mb-2 whitespace-pre-wrap break-words">&gt; sin(30)</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">0.5</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">&gt; diff(x^2)</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">2x</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">&gt; integrate(2x)</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">x^2 + C</div>
                  <div className="animate-blink whitespace-pre-wrap break-words">&gt;&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="weather" className="mt-4 sm:mt-6 overflow-hidden">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-2 sm:px-3 py-2">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-xs sm:text-sm font-medium">PyShell Weather</div>
                </div>
                <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                  <div className="mb-2 whitespace-pre-wrap break-words">$ weather</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Enter location: New York</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Fetching weather data for New York...</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Current Weather in New York:</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Temperature: 72°F / 22°C</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Condition: Partly Cloudy</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Humidity: 65%</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Wind: 8 mph NE</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Forecast:</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Tomorrow: 75°F / 24°C, Sunny</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Day After: 68°F / 20°C, Rain</div>
                  <div className="animate-blink whitespace-pre-wrap break-words">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="git" className="mt-4 sm:mt-6 overflow-hidden">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-2 sm:px-3 py-2">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-xs sm:text-sm font-medium">PyShell Git Dashboard</div>
                </div>
                <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                  <div className="mb-2 whitespace-pre-wrap break-words">$ git dashboard</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Loading Git repository information...</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Repository: PyShell</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Branch: main</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Status:</div>
                  <div className="mb-2 text-blue-400 whitespace-pre-wrap break-words">
                    M components/feature-section.tsx
                  </div>
                  <div className="mb-2 text-green-400 whitespace-pre-wrap break-words">
                    A components/demo-section.tsx
                  </div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Recent Commits:</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">
                    [a1b2c3d] Add voice input feature (2 days ago)
                  </div>
                  <div className="mb-2 whitespace-pre-wrap break-words">[e4f5g6h] Fix calculator bug (4 days ago)</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">
                    [i7j8k9l] Update documentation (1 week ago)
                  </div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Branches:</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">* main</div>
                  <div className="mb-2 whitespace-pre-wrap break-words"> feature/voice-commands</div>
                  <div className="mb-2 whitespace-pre-wrap break-words"> bugfix/calculator</div>
                  <div className="animate-blink whitespace-pre-wrap break-words">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="music" className="mt-4 sm:mt-6 overflow-hidden">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-2 sm:px-3 py-2">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-xs sm:text-sm font-medium">PyShell Music Player</div>
                </div>
                <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                  <div className="mb-2 whitespace-pre-wrap break-words">$ music</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">PyShell Music Player v1.0</div>
                  <div className="mb-2 break-words">Available commands: play, pause, next, prev, list</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">&gt; list</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">1. Lofi Study Mix</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">2. Coding Beats</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">3. Ambient Focus</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">4. Deep Concentration</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">&gt; play 2</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Now playing: Coding Beats</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Artist: DevBeats</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Album: Code Sessions Vol. 1</div>
                  <div className="mb-2 break-words">▶️ ━━━━━━━━━━ 0:12 / 3:45</div>
                  <div className="animate-blink whitespace-pre-wrap break-words">&gt;&nbsp;</div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="voice" className="mt-4 sm:mt-6 overflow-hidden">
              <div className="rounded-lg border overflow-hidden shadow-lg">
                <div className="flex items-center border-b bg-muted/50 px-2 sm:px-3 py-2">
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-red-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-yellow-500" />
                    <div className="h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-green-500" />
                  </div>
                  <div className="ml-2 text-xs sm:text-sm font-medium">PyShell Voice Input</div>
                </div>
                <div className="bg-black p-3 sm:p-4 md:p-6 text-green-400 font-mono text-xs sm:text-sm overflow-hidden">
                  <div className="mb-2 whitespace-pre-wrap break-words">$ voice</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">
                    Voice input mode activated. Speak a command...
                  </div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Listening...</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Recognized: "open calculator"</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Executing: calc</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">PyShell Calculator v1.0</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Listening...</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Recognized: "calculate square root of 16"</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Result: 4.0</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Listening...</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Recognized: "check weather in London"</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Executing: weather London</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Current Weather in London:</div>
                  <div className="mb-2 whitespace-pre-wrap break-words">Temperature: 18°C, Cloudy</div>
                  <div className="animate-blink whitespace-pre-wrap break-words">$&nbsp;</div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
