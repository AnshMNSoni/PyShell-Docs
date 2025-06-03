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
      code: `# User login functionality
def login():
  print("PyShell Login")
  username = input("Username: ")
  password = input("Password: ")  # In real app, this would be masked
  
  # Validate credentials (simplified example)
  if authenticate(username, password):
      print(f"Welcome back, {username}!")
      return True
  else:
      print("Invalid credentials. Please try again.")
      return False

def authenticate(username, password):
  # In a real application, this would check against a secure database
  # and use proper password hashing
  users = {"admin": "password123", "user": "userpass"}
  return username in users and users[username] == password`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Task Scheduling": {
      code: `# Task scheduling functionality
import datetime
import json
import os

TASKS_FILE = "tasks.json"

def load_tasks():
  if os.path.exists(TASKS_FILE):
      with open(TASKS_FILE, "r") as f:
          return json.load(f)
  return []

def save_tasks(tasks):
  with open(TASKS_FILE, "w") as f:
      json.dump(tasks, f, indent=2)

def add_task():
  tasks = load_tasks()
  
  title = input("Task title: ")
  date_str = input("Due date (YYYY-MM-DD): ")
  priority = input("Priority (high/medium/low): ").lower()
  
  try:
      due_date = datetime.datetime.strptime(date_str, "%Y-%m-%d").strftime("%Y-%m-%d")
  except ValueError:
      print("Invalid date format. Please use YYYY-MM-DD.")
      return
  
  if priority not in ["high", "medium", "low"]:
      print("Invalid priority. Using 'medium' as default.")
      priority = "medium"
  
  task = {
      "id": len(tasks) + 1,
      "title": title,
      "due_date": due_date,
      "priority": priority,
      "completed": False
  }
  
  tasks.append(task)
  save_tasks(tasks)
  print(f"Task '{title}' added successfully!")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Weather Tracking": {
      code: `# Weather tracking functionality
import requests
import json

API_KEY = "your_api_key_here"  # Replace with actual API key
BASE_URL = "https://api.openweathermap.org/data/2.5/weather"

def get_weather(location):
  try:
      params = {
          "q": location,
          "appid": API_KEY,
          "units": "metric"  # Use metric by default
      }
      
      response = requests.get(BASE_URL, params=params)
      data = response.json()
      
      if response.status_code == 200:
          # Extract relevant weather information
          weather_main = data["weather"][0]["main"]
          weather_desc = data["weather"][0]["description"]
          temp = data["main"]["temp"]
          temp_f = (temp * 9/5) + 32  # Convert to Fahrenheit
          humidity = data["main"]["humidity"]
          wind_speed = data["wind"]["speed"]
          
          # Display weather information
          print(f"Current Weather in {location}:")
          print(f"Condition: {weather_desc.capitalize()}")
          print(f"Temperature: {temp:.1f}°C / {temp_f:.1f}°F")
          print(f"Humidity: {humidity}%")
          print(f"Wind Speed: {wind_speed} m/s")
      else:
          print(f"Error: {data['message']}")
  
  except Exception as e:
      print(f"An error occurred: {e}")`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "In-built Calculator": {
      code: `# Advanced calculator functionality
import math
import sympy as sp

def calculator():
  print("PyShell Calculator")
  print("Type 'help' for available operations or 'exit' to quit")
  
  while True:
      expression = input("> ")
      
      if expression.lower() == 'exit':
          break
      elif expression.lower() == 'help':
          show_help()
          continue
      
      try:
          # Check for special operations
          if expression.startswith("diff("):
              # Differentiation
              expr_str = expression[5:-1]  # Remove diff() wrapper
              result = differentiate(expr_str)
          elif expression.startswith("integrate("):
              # Integration
              expr_str = expression[10:-1]  # Remove integrate() wrapper
              result = integrate(expr_str)
          else:
              # Basic evaluation
              result = eval(expression, {"__builtins__": {}}, {
                  "sin": math.sin,
                  "cos": math.cos,
                  "tan": math.tan,
                  "sqrt": math.sqrt,
                  "pi": math.pi,
                  "e": math.e,
                  "log": math.log,
                  "log10": math.log10,
                  "pow": pow,
                  "abs": abs
              })
          
          print(result)
      except Exception as e:
          print(f"Error: {e}")

def show_help():
  print("Available operations:")
  print("  Basic: +, -, *, /, ** (power)")
  print("  Functions: sin(), cos(), tan(), sqrt(), log(), log10(), pow(), abs()")
  print("  Constants: pi, e")
  print("  Calculus: diff(expression), integrate(expression)")
  print("Example: sin(pi/2) or diff(x**2)")

def differentiate(expr_str):
  x = sp.Symbol('x')
  expr = sp.sympify(expr_str)
  return sp.diff(expr, x)

def integrate(expr_str):
  x = sp.Symbol('x')
  expr = sp.sympify(expr_str)
  return sp.integrate(expr, x)`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Password Generator": {
      code: `# Password generator functionality
import random
import string

def generate_password():
  print("PyShell Password Generator")
  
  try:
      length = int(input("Password length (8-64): "))
      if length < 8 or length > 64:
          print("Invalid length. Using default length of 16.")
          length = 16
  except ValueError:
      print("Invalid input. Using default length of 16.")
      length = 16
  
  use_uppercase = input("Include uppercase letters? (y/n): ").lower() == 'y'
  use_lowercase = input("Include lowercase letters? (y/n): ").lower() == 'y'
  use_digits = input("Include numbers? (y/n): ").lower() == 'y'
  use_special = input("Include special characters? (y/n): ").lower() == 'y'
  
  # Ensure at least one character type is selected
  if not any([use_uppercase, use_lowercase, use_digits, use_special]):
      print("At least one character type must be selected. Using lowercase letters.")
      use_lowercase = True
  
  # Define character sets
  chars = ""
  if use_uppercase:
      chars += string.ascii_uppercase
  if use_lowercase:
      chars += string.ascii_lowercase
  if use_digits:
      chars += string.digits
  if use_special:
      chars += string.punctuation
  
  # Generate password
  password = ''.join(random.choice(chars) for _ in range(length))
  
  print("\nGenerated Password:")
  print(password)
  
  # Calculate password strength
  strength = calculate_strength(password)
  print(f"Password Strength: {strength}")
  
  return password

def calculate_strength(password):
  # Simple password strength calculator
  score = 0
  
  # Length check
  if len(password) >= 12:
      score += 2
  elif len(password) >= 8:
      score += 1
  
  # Character variety checks
  if any(c.isupper() for c in password):
      score += 1
  if any(c.islower() for c in password):
      score += 1
  if any(c.isdigit() for c in password):
      score += 1
  if any(c in string.punctuation for c in password):
      score += 1
  
  # Classify strength
  if score >= 5:
      return "Strong"
  elif score >= 3:
      return "Medium"
  else:
      return "Weak"`,
      screenshot: "/placeholder.svg?height=300&width=500",
    },
    "Music Player": {
      code: `# Music player functionality
import os
import pygame
from mutagen.mp3 import MP3

class MusicPlayer:
  def __init__(self):
      pygame.mixer.init()
      self.current_track = None
      self.paused = False
      self.playlist = []
      self.current_index = 0
      
  def load_music_directory(self, directory):
      """Load all MP3 files from a directory into the playlist"""
      self.playlist = []
      
      if not os.path.exists(directory):
          print(f"Directory not found: {directory}")
          return False
          
      for file in os.listdir(directory):
          if file.endswith(".mp3"):
              self.playlist.append(os.path.join(directory, file))
              
      if not self.playlist:
          print("No MP3 files found in the directory.")
          return False
          
      print(f"Loaded {len(self.playlist)} tracks.")
      return True
      
  def play(self, index=None):
      """Play a track from the playlist"""
      if not self.playlist:
          print("Playlist is empty. Load music first.")
          return
          
      if index is not None:
          if 0 <= index < len(self.playlist):
              self.current_index = index
          else:
              print(f"Invalid track number. Please select 0-{len(self.playlist)-1}")
              return
              
      # Stop any currently playing music
      pygame.mixer.music.stop()
      
      # Load and play the selected track
      track_path = GOOD self.playlist[self.current_index]
      pygame.mixer.music.load(track_path)
      pygame.mixer.music.play()
      self.current_track = track_path
      self.paused = False
      
      # Display track info
      self._display_track_info()
      
  def pause(self):
      """Pause or unpause the current track"""
      if not self.current_track:
          print("No track is currently playing.")
          return
          
      if self.paused:
          pygame.mixer.music.unpause()
          self.paused = False
          print("Playback resumed.")
      else:
          pygame.mixer.music.pause()
          self.paused = True
          print("Playback paused.")
          
  def stop(self):
      """Stop playback"""
      pygame.mixer.music.stop()
      self.current_track = None
      self.paused = False
      print("Playback stopped.")
      
  def next_track(self):
      """Play the next track in the playlist"""
      if not self.playlist:
          print("Playlist is empty.")
          return
          
      self.current_index = (self.current_index + 1) % len(self.playlist)
      self.play()
      
  def prev_track(self):
      """Play the previous track in the playlist"""
      if not self.playlist:
          print("Playlist is empty.")
          return
          
      self.current_index = (self.current_index - 1) % len(self.playlist)
      self.play()
      
  def list_tracks(self):
      """List all tracks in the playlist"""
      if not self.playlist:
          print("Playlist is empty.")
          return
          
      print("\nPlaylist:")
      for i, track_path in enumerate(self.playlist):
          track_name = os.path.basename(track_path)
          prefix = "▶ " if i == self.current_index and self.current_track else "  "
          print(f"{prefix}{i}. {track_name}")
          
  def _display_track_info(self):
      """Display information about the current track"""
      if not self.current_track:
          return
          
      track_name = os.path.basename(self.current_track)
      print(f"\nNow playing: {track_name}")
      
      # Get track duration using mutagen
      try:
          audio = MP3(self.current_track)
          duration = audio.info.length
          minutes, seconds = divmod(int(duration), 60)
          print(f"Duration: {minutes}:{seconds:02d}")
      except:
          print("Duration: Unknown")`,
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
      code: `# Voice input functionality
import speech_recognition as sr
import pyttsx3
import time
import re
import threading

class VoiceAssistant:
  def __init__(self):
      # Initialize the speech recognizer
      self.recognizer = sr.Recognizer()
      
      # Initialize text-to-speech engine
      self.engine = pyttsx3.init()
      
      # Set properties
      self.engine.setProperty('rate', 150)  # Speed of speech
      self.engine.setProperty('volume', 1.0)  # Volume (0.0 to 1.0)
      
      # Get available voices
      voices = self.engine.getProperty('voices')
      # Set a voice (typically index 0 is male, 1 is female)
      if len(voices) > 1:
          self.engine.setProperty('voice', voices[1].id)  # Female voice
          
      self.is_listening = False
      self.commands = {
          r"open calculator|launch calculator|start calculator": "calc",
          r"check weather|weather for|weather in": "weather",
          r"schedule task|add task|new task": "schedule",
          r"generate password|new password|create password": "genpass",
          r"git dashboard|show git|git status": "git",
          r"play music|start music|music player": "music",
          r"system info|system status|show system": "sysinfo",
          r"change layout|terminal layout|customize layout": "layout",
          r"help|show help|available commands": "help",
          r"exit|quit|close": "exit"
      }
      
  def speak(self, text):
      """Convert text to speech"""
      print(f"Assistant: {text}")
      self.engine.say(text)
      self.engine.runAndWait()
      
  def listen(self):
      """Listen for voice input and convert to text"""
      with sr.Microphone() as source:
          print("Listening...")
          self.recognizer.adjust_for_ambient_noise(source, duration=0.5)
          try:
              audio = self.recognizer.listen(source, timeout=5, phrase_time_limit=5)
              print("Processing speech...")
              
              text = self.recognizer.recognize_google(audio)
              print(f"You said: {text}")
              return text.lower()
          except sr.WaitTimeoutError:
              print("No speech detected")
              return ""
          except sr.UnknownValueError:
              print("Could not understand audio")
              return ""
          except sr.RequestError as e:
              print(f"Could not request results; {e}")
              return ""`,
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
      icon: Cpu,
      title: "Process Synchronization",
      description: "Better system control with process management",
    },
    {
      icon: Layout,
      title: "Terminal Layout Customization",
      description: "Change and customize your terminal layout",
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