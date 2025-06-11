"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { FeatureCard } from "@/components/feature-card"
import {
  Calculator,
  Calendar,
  Cloud,
  Key,
  Terminal,
  Music,
  GitBranch,
  GitCommit,
  Mic,
  LineChart,
  Lock,
  Layout,
  Cpu,
  X,
} from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@/components/ui/dialog"
import { useSearchParams } from "next/navigation"

// Custom hook to detect mobile devices
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768) // Mobile breakpoint at 768px
    }

    checkIsMobile()
    window.addEventListener("resize", checkIsMobile)

    return () => window.removeEventListener("resize", checkIsMobile)
  }, [])

  return isMobile
}

export default function FeaturesPage() {
  const [selectedFeature, setSelectedFeature] = useState<{
    title: string
    description: string
    code: string
  } | null>(null)

  const [dialogOpen, setDialogOpen] = useState(false)
  const processingHashChange = useRef(false)
  const searchParams = useSearchParams()
  const isMobile = useIsMobile()

  const featureDetails = {
    // [Existing featureDetails object remains unchanged]
    "User Login": {
      code: `# User Authentication
def register_user():
    users = load_users()
    username = Prompt.ask("Enter new username")
    role = Prompt.ask("Assign role (admin/user)", choices=["admin", "user"], default="user")
    if username in users:
        console.print("User already exists!", style="bold red")
        return register_user()
    password = Prompt.ask("Enter password", password=True)
    users[username] = {"password": password, "role": role}
    save_users(users)
    console.print("User registered successfully!", style="bold green")
    return username, role

def login_user():
    users = load_users()
    username = Prompt.ask("Enter username")
    password = Prompt.ask("Enter password", password=True)
    if username in users and users[username]["password"] == password:
        console.print("Login successful!", style="bold green")
        return username, users[username]["role"]
    else:
        console.print("Invalid credentials!", style="bold red")
        return login_user()`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Task Scheduling": {
      code: `def schedule_task(self, args):
        if len(args) < 3:
            console.print("Usage: schedule <interval> <unit> <command>", style="bold red")
            console.print("Example: schedule 10 seconds say 'Hello'", style="bold yellow")
            return

        try:
            interval = int(args[0])
        except ValueError:
            console.print("[bold red]Invalid interval! Must be an integer.[/bold red]")
            return

        unit = args[1].lower()

        if unit in ["seconds", "minutes", "hours"]:
            job = getattr(schedule.every(interval), unit).do(self.run_scheduled_task, args)
            job_id = len(scheduled_jobs) + 1
            scheduled_jobs[job_id] = job
            console.print(f"Task scheduled every {interval} {unit}. Task ID: {job_id}", style="bold cyan")
        else:
            console.print("[bold red]Invalid time unit! Use: seconds, minutes, or hours.[/bold red]")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Weather Tracking": {
      code: `class Weather:
    def get_weather(self, args):
        console = Console()
        if not args:
            console.print("Usage: weather <city>", style="bold red")
            return

        city = " ".join(args)
        api_key = os.getenv("API_KEY")
        url = f"http://api.openweathermap.org/data/2.5/weather?q={city}&appid={api_key}&units=metric"

        try:
            response = requests.get(url)
            data = response.json()

            if data["cod"] != 200:
                console.print(f"Error: {data['message']}", style="bold red")
                return

            weather_desc = data["weather"][0]["description"].capitalize()
            temp = data["main"]["temp"]
            humidity = data["main"]["humidity"]
            wind_speed = data["wind"]["speed"]

            console.print(f"\n[bold cyan]Weather in {city}:[/bold cyan]")
            console.print(f"🌤  {weather_desc}")
            console.print(f"🌡  Temperature: {temp}°C")
            console.print(f"💧 Humidity: {humidity} %")
            console.print(f"💨 Wind Speed: {wind_speed} m/s")

        except Exception as e:
            console.print(f"Failed to fetch weather data: {e}", style="bold red")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "In-built Calculator": {
      code: `def calculator(self, args):
        if not args:
            console.print("Usage:\n- calc <expression>\n- calc diff <expression> <variable>\n- calc integrate <expression> <variable>", style="bold red")
            return
        try:
            command = args[0]

            if command == "diff" and len(args) >= 3:
                expression = " ".join(args[1:-1])
                var = symbols(args[-1])
                result = diff(sympify(expression), var)
                console.print(f"Derivative of [bold yellow]{pretty(expression)}[/bold yellow] w.r.t [cyan]{var}[/cyan]:\n{pretty(result)}", style="bold green")


            elif command == "integrate" and len(args) >= 3:
                expression = " ".join(args[1:-1])
                var = symbols(args[-1])
                result = integrate(sympify(expression), var)
                console.print(f"Integral of [bold yellow]{pretty(expression)}[/bold yellow] w.r.t [cyan]{var}[/cyan]:\n{pretty(result)}", style="bold green")

            else:
                expression = " ".join(args)
                result = eval(expression, {"_builtins": None}, math.dict_)
                console.print(f"Result: {result}", style="bold green")

        except Exception as e:
            console.print(f"Error: {e}", style="bold red")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Password Generator": {
      code: `def generate_password(*args):
    length = Prompt.ask("Enter password length (default 12)", default="12")
    try:
        length = int(length)
    except ValueError:
        console.print("Invalid input. Using default length (12)", style="bold red")
        length = 12
        display_prompt(username)
        return
    
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for _ in range(length))
    console.print(f"Generated Password: {password}", style="bold green")
    clipboard_copy(password)`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Music Player": {
      code: `class Song:
    @staticmethod
    def play_song(args):
        if not args:
            console.print("Usage: play <song-name>", style="bold red")
            return

        song_name = "".join(args)

        try:
            # Search for the song using saavn.dev API
            url = f"https://saavn.dev/api/search/songs?query={song_name}"
            response = requests.get(url)
            data = response.json()

            # Get first song result
            results = data['data']['results']
            if not results:
                raise Exception("No results found.")

            song = results[0]
            song_title = song['name']
            song_url = song['url']

            console.print(f"🎵 Opening in browser: {song_title}", style="bold green")
            webbrowser.open(song_url)

        except Exception as e:
            console.print(f"❌ Failed to find or play the song: {e}", style="bold red")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Git Integration": {
      code: `# Git dashboard functionality
import os
import subprocess
import re
from datetime import datetime

class GitDashboard:
  def __init__(self):
      self.repo_path = os.getcwd()
      
  def is_git_repo(self):
      """Check if current directory is a git repository"""
      try:
          subprocess.run(
              ["git", "rev-parse", "--is-inside-work-tree"],
              cwd=self.repo_path,
              stdout=subprocess.PIPE,
              stderr=subprocess.PIPE,
              check=True
          )
          return True
      except subprocess.CalledProcessError:
          return False
          
  def get_repo_info(self):
      """Get basic repository information"""
      if not self.is_git_repo():
          print("Not a git repository.")
          return None
          
      try:
          # Get remote URL
          remote_url = subprocess.run(
              ["git", "config", "--get", "remote.origin.url"],
              cwd=self.repo_path,
              stdout=subprocess.PIPE,
              stderr=subprocess.PIPE,
              text=True
          ).stdout.strip()
          
          # Get current branch
          current_branch = subprocess.run(
              ["git", "rev-parse", "--abbrev-ref", "HEAD"],
              cwd=self.repo_path,
              stdout=subprocess.PIPE,
              stderr=subprocess.PIPE,
              text=True
          ).stdout.strip()
          
          # Get last commit
          last_commit = subprocess.run(
              ["git", "log", "-1", "--pretty=format:%h - %s (%ar)"],
              cwd=self.repo_path,
              stdout=subprocess.PIPE,
              stderr=subprocess.PIPE,
              text=True
          ).stdout.strip()
          
          return {
              "repository": os.path.basename(self.repo_path),
              "remote_url": remote_url,
              "current_branch": current_branch,
              "last_commit": last_commit
          }
      except subprocess.CalledProcessError as e:
          print(f"Error getting repository info: {e}")
          return None`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Voice Input": {
      code: `def git_voice_command(self, *args):
        """Executes Git commands using voice recognition."""
        recognizer = sr.Recognizer()
        with sr.Microphone() as source:
            console.print("Listening for Git command...", style="bold yellow")
            audio = recognizer.listen(source)
        try:
            command = recognizer.recognize_google(audio).lower()
            console.print(f"Executing: {command}", style="bold cyan")
            self.run_git_command(f"git {command}", f"git {command}", f"git {command}")
        except Exception:
            console.print("Could not understand command.", style="bold red")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
  }

  const productivityFeatures = [
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
      title: "In-built Calculator",
      description: "Perform quick calculations without leaving the terminal",
    },
    {
      icon: Key,
      title: "Password Generator",
      description: "Generate secure passwords with customizable parameters",
    },
    {
      icon: Music,
      title: "Music Player",
      description: "Play songs directly from your terminal",
    },
  ]

  const developerFeatures = [
    {
      icon: Terminal,
      title: "Linux Commands Support",
      description: "Use familiar Linux commands like ls, mkdir, sysinfo, etc.",
    },
    {
      icon: GitBranch,
      title: "Git Integration",
      description: "Visualize and manage your Git repositories",
    },
    {
      icon: GitCommit,
      title: "Git History",
      description: "View and navigate through your Git commit history",
    },
  ]

  const advancedFeatures = [
    {
      icon: Calculator,
      title: "Advanced Math Functions",
      description: "Perform calculus, logarithmic, and trigonometric operations",
    },
    {
      icon: Mic,
      title: "Voice Input",
      description: "Control your terminal with voice commands",
    },
    {
      icon: LineChart,
      title: "Data Visualization",
      description: "Visualize data directly in your terminal",
    },
  ]

  const allFeatures = [...productivityFeatures, ...developerFeatures, ...advancedFeatures]

  // Find a feature by its hash
  const findFeatureByHash = useCallback((hash: string) => {
    return allFeatures.find(
      (f) =>
        f.title.toLowerCase().replace(/\s+/g, "-") === hash ||
        f.title.toLowerCase().replace(/\s+/g, "-").includes(hash),
    )
  }, [])

  interface Feature {
    icon: React.ElementType
    title: string
    description: string
  }

  interface FeatureDetails {
    [key: string]: {
      code: string
      screenshot: string
    }
  }

  const handleFeatureClick = useCallback((feature: Feature) => {
    setSelectedFeature({
      title: feature.title,
      description: feature.description,
      code: (featureDetails as FeatureDetails)[feature.title]?.code || "Code example coming soon...",
    })
    setDialogOpen(true)

    // Update URL hash without triggering the hashchange event handler
    processingHashChange.current = true
    const featureHash = feature.title.toLowerCase().replace(/\s+/g, "-")
    window.history.pushState(null, "", `#${featureHash}`)
    setTimeout(() => {
      processingHashChange.current = false
    }, 0)
  }, [])

  const handleDialogClose = useCallback(() => {
    setDialogOpen(false)

    // Remove hash from URL without triggering the hashchange event handler
    processingHashChange.current = true
    window.history.pushState(null, "", window.location.pathname)
    setTimeout(() => {
      processingHashChange.current = false
    }, 0)
  }, [])

  // Initial setup based on URL hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "")
    if (hash && !dialogOpen) {
      const feature = findFeatureByHash(hash)
      if (feature) {
        setSelectedFeature({
          title: feature.title,
          description: feature.description,
          code: (featureDetails as FeatureDetails)[feature.title]?.code || "Code example coming soon...",
        })
        setDialogOpen(true)
      }
    }
  }, [findFeatureByHash, dialogOpen])

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (processingHashChange.current) return

      const hash = window.location.hash.replace("#", "")
      if (!hash) {
        setDialogOpen(false)
      } else {
        const feature = findFeatureByHash(hash)
        if (feature) {
          setSelectedFeature({
            title: feature.title,
            description: feature.description,
            code: (featureDetails as FeatureDetails)[feature.title]?.code || "Code example coming soon...",
          })
          setDialogOpen(true)
        }
      }
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [findFeatureByHash])

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Features</h1>
        <p className="text-lg text-muted-foreground mt-2">Discover the powerful capabilities of PyShell</p>
      </div>

      {isMobile ? (
        // Mobile layout: Single grid without tabs
        <div className="grid grid-cols-1 gap-6">
          {allFeatures.map((feature, index) => (
            <div key={index} onClick={() => handleFeatureClick(feature)} className="cursor-pointer">
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            </div>
          ))}
        </div>
      ) : (
        // Desktop layout: Keep tabs
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Features</TabsTrigger>
            <TabsTrigger value="productivity">Productivity</TabsTrigger>
            <TabsTrigger value="developer">Developer</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allFeatures.map((feature, index) => (
                <div key={index} onClick={() => handleFeatureClick(feature)} className="cursor-pointer">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="productivity" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productivityFeatures.map((feature, index) => (
                <div key={index} onClick={() => handleFeatureClick(feature)} className="cursor-pointer">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="developer" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {developerFeatures.map((feature, index) => (
                <div key={index} onClick={() => handleFeatureClick(feature)} className="cursor-pointer">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {advancedFeatures.map((feature, index) => (
                <div key={index} onClick={() => handleFeatureClick(feature)} className="cursor-pointer">
                  <FeatureCard
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    index={index}
                  />
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      )}

      <Dialog
        open={dialogOpen}
        onOpenChange={(open) => {
          if (!open) handleDialogClose()
        }}
      >
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedFeature?.title}</DialogTitle>
            <DialogDescription>{selectedFeature?.description}</DialogDescription>
            <DialogClose
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              onClick={handleDialogClose}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </DialogHeader>
          <div className="w-full">
            <h3 className="text-lg font-medium mb-2">Code Example</h3>
            <pre className="p-4 rounded-md bg-muted overflow-x-auto text-xs md:text-sm">
              <code>{selectedFeature?.code}</code>
            </pre>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}