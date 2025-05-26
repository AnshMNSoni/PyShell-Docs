"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  const demos = [
    {
      id: "calculator",
      title: "Calculator",
      badge: "Math",
      content: (
        <div className="space-y-2 text-xs">
          <div>$ calc</div>
          <div>PyShell Calculator v1.0</div>
          <div className="text-blue-400">Available: +, -, *, /, sin, cos, diff, integrate</div>
          <div>&gt; sin(30)</div>
          <div>0.5</div>
          <div>&gt; diff(x^2)</div>
          <div>2x</div>
          <div className="animate-blink">&gt;&nbsp;</div>
        </div>
      ),
    },
    {
      id: "weather",
      title: "Weather",
      badge: "API",
      content: (
        <div className="space-y-2 text-xs">
          <div>$ weather</div>
          <div>Enter location: New York</div>
          <div className="text-blue-400">Fetching weather data...</div>
          <div>Current Weather in New York:</div>
          <div>Temperature: 72°F / 22°C</div>
          <div>Condition: Partly Cloudy</div>
          <div>Humidity: 65%</div>
          <div className="animate-blink">$&nbsp;</div>
        </div>
      ),
    },
    {
      id: "git",
      title: "Git",
      badge: "Dev",
      content: (
        <div className="space-y-2 text-xs">
          <div>$ git dashboard</div>
          <div className="text-blue-400">Loading repository info...</div>
          <div>Repository: PyShell</div>
          <div>Branch: main</div>
          <div>Status:</div>
          <div className="text-blue-400">M components/feature.tsx</div>
          <div className="text-green-400">A components/demo.tsx</div>
          <div>Recent Commits:</div>
          <div>[a1b2c3d] Add voice input (2 days ago)</div>
          <div className="animate-blink">$&nbsp;</div>
        </div>
      ),
    },
    {
      id: "music",
      title: "Music",
      badge: "Media",
      content: (
        <div className="space-y-2 text-xs">
          <div>$ music</div>
          <div>PyShell Music Player v1.0</div>
          <div className="text-blue-400">Commands: play, pause, next, list</div>
          <div>&gt; list</div>
          <div>1. Lofi Study Mix</div>
          <div>2. Coding Beats</div>
          <div>&gt; play 2</div>
          <div className="text-green-400">Now playing: Coding Beats</div>
          <div>▶️ ━━━━━━━━━━ 0:12 / 3:45</div>
          <div className="animate-blink">&gt;&nbsp;</div>
        </div>
      ),
    },
    {
      id: "voice",
      title: "Voice",
      badge: "AI",
      content: (
        <div className="space-y-2 text-xs">
          <div>$ voice</div>
          <div className="text-blue-400">Voice input activated...</div>
          <div>Listening...</div>
          <div>Recognized: "open calculator"</div>
          <div>Executing: calc</div>
          <div>PyShell Calculator v1.0</div>
          <div>Listening...</div>
          <div>Recognized: "calculate sqrt 16"</div>
          <div>Result: 4.0</div>
          <div className="animate-blink">$&nbsp;</div>
        </div>
      ),
    },
  ]

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
          {/* Mobile View - Stacked Cards */}
          <div className="block md:hidden space-y-4">
            {demos.map((demo, index) => (
              <Card key={demo.id} className="overflow-hidden shadow-lg">
                <div className="flex items-center justify-between border-b bg-muted/50 px-3 py-2">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="h-2 w-2 rounded-full bg-red-500" />
                      <div className="h-2 w-2 rounded-full bg-yellow-500" />
                      <div className="h-2 w-2 rounded-full bg-green-500" />
                    </div>
                    <div className="text-sm font-medium">PyShell {demo.title}</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {demo.badge}
                  </Badge>
                </div>
                <CardContent className="p-0">
                  <div className="bg-black p-4 text-green-400 font-mono min-h-[200px] overflow-hidden">
                    {demo.content}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Desktop View - Tabs */}
          <div className="hidden md:block">
            <Tabs defaultValue="calculator" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-5">
                <TabsTrigger value="calculator">Calculator</TabsTrigger>
                <TabsTrigger value="weather">Weather</TabsTrigger>
                <TabsTrigger value="git">Git Dashboard</TabsTrigger>
                <TabsTrigger value="music">Music</TabsTrigger>
                <TabsTrigger value="voice">Voice Input</TabsTrigger>
              </TabsList>

              {demos.map((demo) => (
                <TabsContent key={demo.id} value={demo.id} className="mt-6 overflow-hidden">
                  <div className="rounded-lg border overflow-hidden shadow-lg">
                    <div className="flex items-center border-b bg-muted/50 px-3 py-2">
                      <div className="flex space-x-2">
                        <div className="h-3 w-3 rounded-full bg-red-500" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500" />
                        <div className="h-3 w-3 rounded-full bg-green-500" />
                      </div>
                      <div className="ml-2 text-sm font-medium">PyShell {demo.title}</div>
                    </div>
                    <div className="bg-black p-6 text-green-400 font-mono text-sm overflow-hidden">{demo.content}</div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
