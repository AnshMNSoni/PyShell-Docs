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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="example">
                    <AccordionTrigger className="text-sm font-medium">Example Usage</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Here's how to use the Jio Saavn API in PyShell's music player feature:
                        </p>
                        <div className="bg-black text-green-400 font-mono text-xs sm:text-sm p-4 rounded-md overflow-x-auto">
                          <div className="mb-2">$ music search "Shape of You"</div>
                          <div className="mb-2">Searching for "Shape of You"...</div>
                          <div className="mb-2">
                            Fetching results from Jio Saavn API: https://saavn.dev/api/search/songs?query=Shape+of+You
                          </div>
                          <div className="mb-2">Results:</div>
                          <div className="mb-2">1. Shape of You - Ed Sheeran</div>
                          <div className="mb-2">2. Shape of You (Remix) - Ed Sheeran, Stormzy</div>
                          <div className="mb-2">3. Shape of You (Acoustic) - Ed Sheeran</div>
                          <div className="mb-2">Enter number to play or 'q' to quit:</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="code-example">
                    <AccordionTrigger className="text-sm font-medium">Python Code Example</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <pre className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                          {`import requests
import json

def search_songs(query):
    """
    Search for songs using the Jio Saavn API
    """
    url = f"https://saavn.dev/api/search/songs?query={query}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200 and "data" in data and "results" in data["data"]:
            songs = data["data"]["results"]
            return songs
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return []
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def display_songs(songs):
    """
    Display song search results
    """
    if not songs:
        print("No songs found.")
        return
        
    print("Results:")
    for idx, song in enumerate(songs, 1):
        title = song.get("name", "Unknown Title")
        artists = ", ".join([artist.get("name", "") for artist in song.get("artists", [])])
        print(f"{idx}. {title} - {artists}")

# Example usage
query = input("Enter song to search: ")
print(f"Searching for \"{query}\"...")
songs = search_songs(query)
display_songs(songs)
`}
                        </pre>
                        <button
                          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            handleCopyCode(
                              `import requests
import json

def search_songs(query):
    """
    Search for songs using the Jio Saavn API
    """
    url = f"https://saavn.dev/api/search/songs?query={query}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200 and "data" in data and "results" in data["data"]:
            songs = data["data"]["results"]
            return songs
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return []
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def display_songs(songs):
    """
    Display song search results
    """
    if not songs:
        print("No songs found.")
        return
        
    print("Results:")
    for idx, song in enumerate(songs, 1):
        title = song.get("name", "Unknown Title")
        artists = ", ".join([artist.get("name", "") for artist in song.get("artists", [])])
        print(f"{idx}. {title} - {artists}")

# Example usage
query = input("Enter song to search: ")
print(f"Searching for \"{query}\"...")
songs = search_songs(query)
display_songs(songs)`,
                              "saavn-code",
                            )
                          }
                          aria-label="Copy code to clipboard"
                        >
                          {copiedEndpoint === "saavn-code" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="response">
                    <AccordionTrigger className="text-sm font-medium">Response Format</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">Here's a sample response from the API:</p>
                        <div className="relative">
                          <pre className="bg-muted rounded-md p-4 font-mono text-xs overflow-x-auto">
                            {`{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 30,
    "start": 1,
    "results": [
      {
        "id": "rCSGxsrBRF4",
        "name": "Shape of You",
        "type": "song",
        "album": {
          "id": "3906281",
          "name": "÷ (Deluxe)",
          "url": "https://www.jiosaavn.com/album/--deluxe/ABb-2v9ydL4_"
        },
        "year": "2017",
        "releaseDate": "2017-03-03",
        "duration": "234",
        "label": "Atlantic Records UK",
        "primaryArtists": [
          {
            "id": "888132",
            "name": "Ed Sheeran",
            "url": "https://www.jiosaavn.com/artist/ed-sheeran-songs/3AUaYoQ1xts_",
            "image": [
              {
                "quality": "50x50",
                "link": "https://c.saavncdn.com/artists/Ed_Sheeran_50x50.jpg"
              }
            ],
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "explicitContent": 0,
        "playCount": 3978242,
        "language": "english",
        "url": "https://www.jiosaavn.com/song/shape-of-you/NiceEhpafg0",
        "copyright": "℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/286/-English-2017-20170117093755-50x50.jpg"
          }
        ]
      }
    ]
  }
}`}
                          </pre>
                          <button
                            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                            onClick={() =>
                              handleCopyCode(
                                `{
  "status": "SUCCESS",
  "message": null,
  "data": {
    "total": 30,
    "start": 1,
    "results": [
      {
        "id": "rCSGxsrBRF4",
        "name": "Shape of You",
        "type": "song",
        "album": {
          "id": "3906281",
          "name": "÷ (Deluxe)",
          "url": "https://www.jiosaavn.com/album/--deluxe/ABb-2v9ydL4_"
        },
        "year": "2017",
        "releaseDate": "2017-03-03",
        "duration": "234",
        "label": "Atlantic Records UK",
        "primaryArtists": [
          {
            "id": "888132",
            "name": "Ed Sheeran",
            "url": "https://www.jiosaavn.com/artist/ed-sheeran-songs/3AUaYoQ1xts_",
            "image": [
              {
                "quality": "50x50",
                "link": "https://c.saavncdn.com/artists/Ed_Sheeran_50x50.jpg"
              }
            ],
            "type": "artist",
            "role": "primary_artists"
          }
        ],
        "featuredArtists": [],
        "explicitContent": 0,
        "playCount": 3978242,
        "language": "english",
        "url": "https://www.jiosaavn.com/song/shape-of-you/NiceEhpafg0",
        "copyright": "℗ 2017 Asylum Records UK, a division of Atlantic Records UK, a Warner Music Group company.",
        "image": [
          {
            "quality": "50x50",
            "link": "https://c.saavncdn.com/286/-English-2017-20170117093755-50x50.jpg"
          }
        ]
      }
    ]
  }
}`,
                                "saavn-response",
                              )
                            }
                            aria-label="Copy response to clipboard"
                          >
                            {copiedEndpoint === "saavn-response" ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="example">
                    <AccordionTrigger className="text-sm font-medium">Example Usage</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Here's how to use the OpenWeatherMap API in PyShell's weather tracking feature:
                        </p>
                        <div className="bg-black text-green-400 font-mono text-xs sm:text-sm p-4 rounded-md overflow-x-auto">
                          <div className="mb-2">$ weather</div>
                          <div className="mb-2">Enter city name: London</div>
                          <div className="mb-2">Fetching weather data for London...</div>
                          <div className="mb-2">Current Weather in London:</div>
                          <div className="mb-2">Temperature: 15.2°C</div>
                          <div className="mb-2">Feels like: 14.8°C</div>
                          <div className="mb-2">Condition: Cloudy</div>
                          <div className="mb-2">Humidity: 76%</div>
                          <div className="mb-2">Wind: 4.2 m/s NW</div>
                          <div className="mb-2">Pressure: 1012 hPa</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="code-example">
                    <AccordionTrigger className="text-sm font-medium">Python Code Example</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <pre className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                          {`import requests
import os

def get_weather(city):
    """
    Get current weather data for a city using OpenWeatherMap API
    """
    # Get your API key from environment variable (more secure)
    # You could also hardcode it as api_key = "your_api_key_here"
    api_key = os.environ.get("OPENWEATHER_API_KEY")
    
    if not api_key:
        print("Error: API key not found. Please set the OPENWEATHER_API_KEY environment variable.")
        return None
    
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            return data
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return None
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def display_weather(weather_data):
    """
    Display weather information in a readable format
    """
    if not weather_data:
        return
    
    try:
        # Extract data from the response
        city_name = weather_data["name"]
        country = weather_data["sys"]["country"]
        temp = weather_data["main"]["temp"]
        feels_like = weather_data["main"]["feels_like"]
        condition = weather_data["weather"][0]["description"].capitalize()
        humidity = weather_data["main"]["humidity"]
        pressure = weather_data["main"]["pressure"]
        wind_speed = weather_data["wind"]["speed"]
        wind_dir = get_wind_direction(weather_data["wind"]["deg"])
        
        # Display weather information
        print(f"Current Weather in {city_name}, {country}:")
        print(f"Temperature: {temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Condition: {condition}")
        print(f"Humidity: {humidity}%")
        print(f"Wind: {wind_speed} m/s {wind_dir}")
        print(f"Pressure: {pressure} hPa")
        
    except KeyError as e:
        print(f"Error parsing weather data: {e}")

def get_wind_direction(degrees):
    """
    Convert wind direction in degrees to cardinal direction
    """
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", 
                  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    index = round(degrees / (360 / len(directions))) % len(directions)
    return directions[index]

# Example usage
city = input("Enter city name: ")
print(f"Fetching weather data for {city}...")
weather_data = get_weather(city)
display_weather(weather_data)
`}
                        </pre>
                        <button
                          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            handleCopyCode(
                              `import requests
import os

def get_weather(city):
    """
    Get current weather data for a city using OpenWeatherMap API
    """
    # Get your API key from environment variable (more secure)
    # You could also hardcode it as api_key = "your_api_key_here"
    api_key = os.environ.get("OPENWEATHER_API_KEY")
    
    if not api_key:
        print("Error: API key not found. Please set the OPENWEATHER_API_KEY environment variable.")
        return None
    
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            return data
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return None
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def display_weather(weather_data):
    """
    Display weather information in a readable format
    """
    if not weather_data:
        return
    
    try:
        # Extract data from the response
        city_name = weather_data["name"]
        country = weather_data["sys"]["country"]
        temp = weather_data["main"]["temp"]
        feels_like = weather_data["main"]["feels_like"]
        condition = weather_data["weather"][0]["description"].capitalize()
        humidity = weather_data["main"]["humidity"]
        pressure = weather_data["main"]["pressure"]
        wind_speed = weather_data["wind"]["speed"]
        wind_dir = get_wind_direction(weather_data["wind"]["deg"])
        
        # Display weather information
        print(f"Current Weather in {city_name}, {country}:")
        print(f"Temperature: {temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Condition: {condition}")
        print(f"Humidity: {humidity}%")
        print(f"Wind: {wind_speed} m/s {wind_dir}")
        print(f"Pressure: {pressure} hPa")
        
    except KeyError as e:
        print(f"Error parsing weather data: {e}")

def get_wind_direction(degrees):
    """
    Convert wind direction in degrees to cardinal direction
    """
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", 
                  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    index = round(degrees / (360 / len(directions))) % len(directions)
    return directions[index]

# Example usage
city = input("Enter city name: ")
print(f"Fetching weather data for {city}...")
weather_data = get_weather(city)
display_weather(weather_data)`,
                              "weather-code",
                            )
                          }
                          aria-label="Copy code to clipboard"
                        >
                          {copiedEndpoint === "weather-code" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="response">
                    <AccordionTrigger className="text-sm font-medium">Response Format</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">Here's a sample response from the API:</p>
                        <div className="relative">
                          <pre className="bg-muted rounded-md p-4 font-mono text-xs overflow-x-auto">
                            {`{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 15.2,
    "feels_like": 14.8,
    "temp_min": 13.69,
    "temp_max": 16.52,
    "pressure": 1012,
    "humidity": 76
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.2,
    "deg": 310
  },
  "clouds": {
    "all": 75
  },
  "dt": 1651658524,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1651638637,
    "sunset": 1651692330
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}`}
                          </pre>
                          <button
                            className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                            onClick={() =>
                              handleCopyCode(
                                `{
  "coord": {
    "lon": -0.1257,
    "lat": 51.5085
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "broken clouds",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 15.2,
    "feels_like": 14.8,
    "temp_min": 13.69,
    "temp_max": 16.52,
    "pressure": 1012,
    "humidity": 76
  },
  "visibility": 10000,
  "wind": {
    "speed": 4.2,
    "deg": 310
  },
  "clouds": {
    "all": 75
  },
  "dt": 1651658524,
  "sys": {
    "type": 2,
    "id": 2019646,
    "country": "GB",
    "sunrise": 1651638637,
    "sunset": 1651692330
  },
  "timezone": 3600,
  "id": 2643743,
  "name": "London",
  "cod": 200
}`,
                                "weather-response",
                              )
                            }
                            aria-label="Copy response to clipboard"
                          >
                            {copiedEndpoint === "weather-response" ? (
                              <Check className="h-5 w-5 text-green-500" />
                            ) : (
                              <Copy className="h-5 w-5" />
                            )}
                          </button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="example">
                    <AccordionTrigger className="text-sm font-medium">Example Usage</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Here's how to use the Jio Saavn API in PyShell's music player feature:
                        </p>
                        <div className="bg-black text-green-400 font-mono text-xs sm:text-sm p-4 rounded-md overflow-x-auto">
                          <div className="mb-2">$ music search "Shape of You"</div>
                          <div className="mb-2">Searching for "Shape of You"...</div>
                          <div className="mb-2">
                            Fetching results from Jio Saavn API: https://saavn.dev/api/search/songs?query=Shape+of+You
                          </div>
                          <div className="mb-2">Results:</div>
                          <div className="mb-2">1. Shape of You - Ed Sheeran</div>
                          <div className="mb-2">2. Shape of You (Remix) - Ed Sheeran, Stormzy</div>
                          <div className="mb-2">3. Shape of You (Acoustic) - Ed Sheeran</div>
                          <div className="mb-2">Enter number to play or 'q' to quit:</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="code-example">
                    <AccordionTrigger className="text-sm font-medium">Python Code Example</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <pre className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                          {`import requests
import json

def search_songs(query):
    """
    Search for songs using the Jio Saavn API
    """
    url = f"https://saavn.dev/api/search/songs?query={query}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200 and "data" in data and "results" in data["data"]:
            songs = data["data"]["results"]
            return songs
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return []
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def display_songs(songs):
    """
    Display song search results
    """
    if not songs:
        print("No songs found.")
        return
        
    print("Results:")
    for idx, song in enumerate(songs, 1):
        title = song.get("name", "Unknown Title")
        artists = ", ".join([artist.get("name", "") for artist in song.get("artists", [])])
        print(f"{idx}. {title} - {artists}")

# Example usage
query = input("Enter song to search: ")
print(f"Searching for \"{query}\"...")
songs = search_songs(query)
display_songs(songs)
`}
                        </pre>
                        <button
                          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            handleCopyCode(
                              `import requests
import json

def search_songs(query):
    """
    Search for songs using the Jio Saavn API
    """
    url = f"https://saavn.dev/api/search/songs?query={query}"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200 and "data" in data and "results" in data["data"]:
            songs = data["data"]["results"]
            return songs
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return []
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return []

def display_songs(songs):
    """
    Display song search results
    """
    if not songs:
        print("No songs found.")
        return
        
    print("Results:")
    for idx, song in enumerate(songs, 1):
        title = song.get("name", "Unknown Title")
        artists = ", ".join([artist.get("name", "") for artist in song.get("artists", [])])
        print(f"{idx}. {title} - {artists}")

# Example usage
query = input("Enter song to search: ")
print(f"Searching for \"{query}\"...")
songs = search_songs(query)
display_songs(songs)`,
                              "saavn-music-code",
                            )
                          }
                          aria-label="Copy code to clipboard"
                        >
                          {copiedEndpoint === "saavn-music-code" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

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

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="example">
                    <AccordionTrigger className="text-sm font-medium">Example Usage</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3">
                        <p className="text-sm text-muted-foreground">
                          Here's how to use the OpenWeatherMap API in PyShell's weather tracking feature:
                        </p>
                        <div className="bg-black text-green-400 font-mono text-xs sm:text-sm p-4 rounded-md overflow-x-auto">
                          <div className="mb-2">$ weather</div>
                          <div className="mb-2">Enter city name: London</div>
                          <div className="mb-2">Fetching weather data for London...</div>
                          <div className="mb-2">Current Weather in London:</div>
                          <div className="mb-2">Temperature: 15.2°C</div>
                          <div className="mb-2">Feels like: 14.8°C</div>
                          <div className="mb-2">Condition: Cloudy</div>
                          <div className="mb-2">Humidity: 76%</div>
                          <div className="mb-2">Wind: 4.2 m/s NW</div>
                          <div className="mb-2">Pressure: 1012 hPa</div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="code-example">
                    <AccordionTrigger className="text-sm font-medium">Python Code Example</AccordionTrigger>
                    <AccordionContent>
                      <div className="relative">
                        <pre className="bg-muted rounded-md p-4 font-mono text-sm overflow-x-auto">
                          {`import requests
import os

def get_weather(city):
    """
    Get current weather data for a city using OpenWeatherMap API
    """
    # Get your API key from environment variable (more secure)
    # You could also hardcode it as api_key = "your_api_key_here"
    api_key = os.environ.get("OPENWEATHER_API_KEY")
    
    if not api_key:
        print("Error: API key not found. Please set the OPENWEATHER_API_KEY environment variable.")
        return None
    
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            return data
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return None
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def display_weather(weather_data):
    """
    Display weather information in a readable format
    """
    if not weather_data:
        return
    
    try:
        # Extract data from the response
        city_name = weather_data["name"]
        country = weather_data["sys"]["country"]
        temp = weather_data["main"]["temp"]
        feels_like = weather_data["main"]["feels_like"]
        condition = weather_data["weather"][0]["description"].capitalize()
        humidity = weather_data["main"]["humidity"]
        pressure = weather_data["main"]["pressure"]
        wind_speed = weather_data["wind"]["speed"]
        wind_dir = get_wind_direction(weather_data["wind"]["deg"])
        
        # Display weather information
        print(f"Current Weather in {city_name}, {country}:")
        print(f"Temperature: {temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Condition: {condition}")
        print(f"Humidity: {humidity}%")
        print(f"Wind: {wind_speed} m/s {wind_dir}")
        print(f"Pressure: {pressure} hPa")
        
    except KeyError as e:
        print(f"Error parsing weather data: {e}")

def get_wind_direction(degrees):
    """
    Convert wind direction in degrees to cardinal direction
    """
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", 
                  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    index = round(degrees / (360 / len(directions))) % len(directions)
    return directions[index]

# Example usage
city = input("Enter city name: ")
print(f"Fetching weather data for {city}...")
weather_data = get_weather(city)
display_weather(weather_data)
`}
                        </pre>
                        <button
                          className="absolute right-2 top-2 text-muted-foreground hover:text-foreground"
                          onClick={() =>
                            handleCopyCode(
                              `import requests
import os

def get_weather(city):
    """
    Get current weather data for a city using OpenWeatherMap API
    """
    # Get your API key from environment variable (more secure)
    # You could also hardcode it as api_key = "your_api_key_here"
    api_key = os.environ.get("OPENWEATHER_API_KEY")
    
    if not api_key:
        print("Error: API key not found. Please set the OPENWEATHER_API_KEY environment variable.")
        return None
    
    url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"
    
    try:
        response = requests.get(url)
        data = response.json()
        
        if response.status_code == 200:
            return data
        else:
            print(f"Error: {data.get('message', 'Unknown error')}")
            return None
            
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

def display_weather(weather_data):
    """
    Display weather information in a readable format
    """
    if not weather_data:
        return
    
    try:
        # Extract data from the response
        city_name = weather_data["name"]
        country = weather_data["sys"]["country"]
        temp = weather_data["main"]["temp"]
        feels_like = weather_data["main"]["feels_like"]
        condition = weather_data["weather"][0]["description"].capitalize()
        humidity = weather_data["main"]["humidity"]
        pressure = weather_data["main"]["pressure"]
        wind_speed = weather_data["wind"]["speed"]
        wind_dir = get_wind_direction(weather_data["wind"]["deg"])
        
        # Display weather information
        print(f"Current Weather in {city_name}, {country}:")
        print(f"Temperature: {temp}°C")
        print(f"Feels like: {feels_like}°C")
        print(f"Condition: {condition}")
        print(f"Humidity: {humidity}%")
        print(f"Wind: {wind_speed} m/s {wind_dir}")
        print(f"Pressure: {pressure} hPa")
        
    except KeyError as e:
        print(f"Error parsing weather data: {e}")

def get_wind_direction(degrees):
    """
    Convert wind direction in degrees to cardinal direction
    """
    directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", 
                  "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]
    index = round(degrees / (360 / len(directions))) % len(directions)
    return directions[index]

# Example usage
city = input("Enter city name: ")
print(f"Fetching weather data for {city}...")
weather_data = get_weather(city)
display_weather(weather_data)`,
                              "weather-tab-code",
                            )
                          }
                          aria-label="Copy code to clipboard"
                        >
                          {copiedEndpoint === "weather-tab-code" ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <Copy className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

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
