"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/components/ui/use-toast"
import { Copy, ExternalLink, Music, Cloud, AlertCircle, Check } from "lucide-react"
import { useState } from "react"

export default function ApiReferenceContent() {
  const { toast } = useToast()
  const [copiedEndpoint, setCopiedEndpoint] = useState<string | null>(null)

  const handleCopyCode = (code: string, endpoint: string) => {
    navigator.clipboard.writeText(code)
    setCopiedEndpoint(endpoint)

    toast({
      title: "Copied to clipboard",
      description: "The code has been copied to your clipboard.",
    })

    setTimeout(() => {
      setCopiedEndpoint(null)
    }, 2000)
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="text-lg text-muted-foreground mt-2">
          Comprehensive documentation for the APIs integrated with PyShell
        </p>
      </div>

      <div className="rounded-lg border p-4 bg-amber-50 dark:bg-amber-950/30 flex gap-3 items-start">
        <AlertCircle className="h-5 w-5 text-amber-500 mt-0.5 flex-shrink-0" />
        <div>
          <h3 className="font-medium text-amber-700 dark:text-amber-400">Authentication Note</h3>
          <p className="text-sm text-amber-600 dark:text-amber-500 mt-1">
            Some APIs require authentication. Make sure to obtain the necessary API keys before using them. Environment
            variables should be used to store sensitive keys securely.
          </p>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="all">All APIs</TabsTrigger>
          <TabsTrigger value="music" className="flex items-center gap-2">
            <Music className="h-4 w-4" />
            Music APIs
          </TabsTrigger>
          <TabsTrigger value="weather" className="flex items-center gap-2">
            <Cloud className="h-4 w-4" />
            Weather APIs
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6 mt-6">
          <Card className="border-music-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    Jio Saavn API
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    >
                      Music
                    </Badge>
                  </CardTitle>
                  <CardDescription>Search for songs using the Jio Saavn API</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Endpoint</h3>
                  <div className="relative">
                    <div className="bg-muted rounded-md p-3 pr-10 font-mono text-sm overflow-x-auto">
                      https://saavn.dev/api/search/songs?query=&lt;song_name&gt;
                    </div>
                    <button
                      className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                      onClick={() => handleCopyCode("https://saavn.dev/api/search/songs?query=song_name", "saavn")}
                      aria-label="Copy to clipboard"
                    >
                      {copiedEndpoint === "saavn" ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href="https://saavn.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Official Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-weather-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    OpenWeatherMap API
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Weather
                    </Badge>
                  </CardTitle>
                  <CardDescription>Get current weather data for any location</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Endpoint</h3>
                  <div className="relative">
                    <div className="bg-muted rounded-md p-3 pr-10 font-mono text-sm overflow-x-auto">
                      http://api.openweathermap.org/data/2.5/weather?q=&lt;city&gt;&appid=&lt;api_key&gt;&units=metric
                    </div>
                    <button
                      className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                      onClick={() =>
                        handleCopyCode(
                          "http://api.openweathermap.org/data/2.5/weather?q=city&appid=your_api_key&units=metric",
                          "weather",
                        )
                      }
                      aria-label="Copy to clipboard"
                    >
                      {copiedEndpoint === "weather" ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border p-3 bg-blue-50 dark:bg-blue-950/30 text-sm">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Authentication Required</h4>
                  <p className="text-blue-600 dark:text-blue-500 text-sm mt-1">
                    This API requires an API key. You can get a free API key by signing up at{" "}
                    <a
                      href="https://openweathermap.org/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      OpenWeatherMap
                    </a>
                    .
                  </p>
                </div>

                <div className="flex justify-end">
                  <a
                    href="https://openweathermap.org/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Official Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="music" className="space-y-6 mt-6">
          <Card className="border-music-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    Jio Saavn API
                    <Badge
                      variant="outline"
                      className="bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300"
                    >
                      Music
                    </Badge>
                  </CardTitle>
                  <CardDescription>Search for songs using the Jio Saavn API</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Endpoint</h3>
                  <div className="relative">
                    <div className="bg-muted rounded-md p-3 pr-10 font-mono text-sm overflow-x-auto">
                      https://saavn.dev/api/search/songs?query=&lt;song_name&gt;
                    </div>
                    <button
                      className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                      onClick={() =>
                        handleCopyCode("https://saavn.dev/api/search/songs?query=song_name", "saavn-music")
                      }
                      aria-label="Copy to clipboard"
                    >
                      {copiedEndpoint === "saavn-music" ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end">
                  <a
                    href="https://saavn.dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Official Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="weather" className="space-y-6 mt-6">
          <Card className="border-weather-500">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <CardTitle className="flex items-center gap-2">
                    OpenWeatherMap API
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                      Weather
                    </Badge>
                  </CardTitle>
                  <CardDescription>Get current weather data for any location</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <h3 className="font-medium text-sm">Endpoint</h3>
                  <div className="relative">
                    <div className="bg-muted rounded-md p-3 pr-10 font-mono text-sm overflow-x-auto">
                      http://api.openweathermap.org/data/2.5/weather?q=&lt;city&gt;&appid=&lt;api_key&gt;&units=metric
                    </div>
                    <button
                      className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                      onClick={() =>
                        handleCopyCode(
                          "http://api.openweathermap.org/data/2.5/weather?q=city&appid=your_api_key&units=metric",
                          "weather-tab",
                        )
                      }
                      aria-label="Copy to clipboard"
                    >
                      {copiedEndpoint === "weather-tab" ? (
                        <Check className="h-5 w-5 text-green-500" />
                      ) : (
                        <Copy className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="rounded-lg border p-3 bg-blue-50 dark:bg-blue-950/30 text-sm">
                  <h4 className="font-medium text-blue-700 dark:text-blue-400">Authentication Required</h4>
                  <p className="text-blue-600 dark:text-blue-500 text-sm mt-1">
                    This API requires an API key. You can get a free API key by signing up at{" "}
                    <a
                      href="https://openweathermap.org/api"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      OpenWeatherMap
                    </a>
                    .
                  </p>
                </div>

                <div className="flex justify-end">
                  <a
                    href="https://openweathermap.org/api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-primary hover:underline"
                  >
                    Official Documentation
                    <ExternalLink className="ml-1 h-3 w-3" />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col gap-4 mt-12">
        <h2 className="text-2xl font-semibold tracking-tight">Integration Guide</h2>
        <p className="text-muted-foreground">To integrate these APIs with PyShell, follow these steps:</p>

        <ol className="space-y-4 ml-6 list-decimal">
          <li className="text-muted-foreground">
            <span className="text-foreground font-medium">Install Required Dependencies:</span>
            <pre className="bg-muted mt-2 p-3 rounded-md font-mono text-sm">pip install requests python-dotenv</pre>
          </li>

          <li className="text-muted-foreground">
            <span className="text-foreground font-medium">Set Up Environment Variables:</span>
            <p className="mt-1">
              Create a <code>.env</code> file in your project's root directory with your API keys:
            </p>
            <pre className="bg-muted mt-2 p-3 rounded-md font-mono text-sm">OPENWEATHER_API_KEY=your_api_key_here</pre>
          </li>

          <li className="text-muted-foreground">
            <span className="text-foreground font-medium">Import the API Functions:</span>
            <p className="mt-1">
              Import the API functions in your PyShell application and use them as needed. See the code examples above
              for details.
            </p>
          </li>

          <li className="text-muted-foreground">
            <span className="text-foreground font-medium">Add Error Handling:</span>
            <p className="mt-1">
              Always include proper error handling to manage network issues, API rate limits, or invalid responses.
            </p>
          </li>
        </ol>
      </div>
    </div>
  )
}
