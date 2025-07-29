"use client"

import type React from "react"
import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Home,
  Download,
  BookOpen,
  Code2,
  Navigation,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Target,
  Terminal,
  Eye,
  MousePointer,
  Keyboard,
  Monitor,
  Sparkles,
  Video,
  ImageIcon,
  PlayCircle,
  Github,
  RotateCcw,
  ArrowLeft,
  ChevronRight,
  Clock,
  Star,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import Link from "next/link"

interface TutorialStep {
  id: number
  title: string
  description: string
  detailedDescription: string
  icon: React.ComponentType<{ className?: string }>
  color: string
  bgColor: string
  href: string
  estimatedTime: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  keyPoints: string[]
  nextAction: string
  visualDemo: React.ReactNode
  interactiveElements: {
    type: "terminal" | "browser" | "code" | "animation"
    content: React.ReactNode
  }[]
  tips: string[]
}

const tutorialSteps: TutorialStep[] = [
  {
    id: 1,
    title: "Start at Home",
    description: "Discover PyShell's purpose and what makes it the future of terminals",
    detailedDescription:
      "Begin your journey by understanding what PyShell is all about. Learn about its core philosophy, key benefits, and how it revolutionizes the traditional terminal experience with modern features and intuitive design.",
    icon: Home,
    color: "text-blue-600",
    bgColor: "bg-blue-50 dark:bg-blue-950/30",
    href: "/",
    estimatedTime: "3 min",
    difficulty: "Beginner",
    keyPoints: [
      "Understand PyShell's core mission and vision",
      "Explore the main features overview",
      "See live terminal demonstrations",
      "Learn about cross-platform compatibility",
    ],
    nextAction: "Explore the homepage and watch the demo",
    visualDemo: (
      <div className="relative">
        <div className="rounded-lg border overflow-hidden shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950 dark:to-indigo-950">
          <div className="flex items-center border-b bg-white/50 dark:bg-black/50 px-3 py-2">
            <div className="flex space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="ml-2 text-sm font-medium">PyShell Homepage</div>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-center gap-3">
              <Terminal className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="font-bold text-lg">PyShell</h3>
                <p className="text-sm text-muted-foreground">The Future of Terminals</p>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="bg-white/70 dark:bg-black/30 p-2 rounded">
                <div className="h-2 w-2 bg-green-500 rounded-full mb-1" />
                <span>Secure Login</span>
              </div>
              <div className="bg-white/70 dark:bg-black/30 p-2 rounded">
                <div className="h-2 w-2 bg-blue-500 rounded-full mb-1" />
                <span>Git Integration</span>
              </div>
              <div className="bg-white/70 dark:bg-black/30 p-2 rounded">
                <div className="h-2 w-2 bg-purple-500 rounded-full mb-1" />
                <span>Voice Control</span>
              </div>
            </div>
          </div>
        </div>
        <motion.div
          className="absolute -top-2 -right-2 bg-blue-500 text-white p-2 rounded-full"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <Eye className="h-4 w-4" />
        </motion.div>
      </div>
    ),
    interactiveElements: [
      {
        type: "browser",
        content: (
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Monitor className="h-4 w-4" />
              What You'll See on the Homepage
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-start gap-2">
                <PlayCircle className="h-4 w-4 text-blue-500 mt-0.5" />
                <span>Interactive terminal demo</span>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-purple-500 mt-0.5" />
                <span>Feature highlights</span>
              </div>
              <div className="flex items-start gap-2">
                <Video className="h-4 w-4 text-green-500 mt-0.5" />
                <span>Live code examples</span>
              </div>
              <div className="flex items-start gap-2">
                <ImageIcon className="h-4 w-4 text-orange-500 mt-0.5" />
                <span>Visual demonstrations</span>
              </div>
            </div>
          </div>
        ),
      },
    ],
    tips: [
      "Take time to watch the animated terminal demo",
      "Scroll through all sections to get the full picture",
      "Click on feature cards to see detailed explanations",
    ],
  },
  {
    id: 2,
    title: "Visit the Installation Page",
    description: "Get PyShell up and running on your system with our comprehensive setup guide",
    detailedDescription:
      "Follow our detailed, platform-specific installation instructions. Whether you're on Windows, macOS, or Linux, we'll guide you through every step from prerequisites to your first PyShell command.",
    icon: Download,
    color: "text-green-600",
    bgColor: "bg-green-50 dark:bg-green-950/30",
    href: "/docs/installation",
    estimatedTime: "10 min",
    difficulty: "Beginner",
    keyPoints: [
      "Check system requirements and prerequisites",
      "Follow platform-specific installation steps",
      "Verify successful installation",
      "Troubleshoot common installation issues",
    ],
    nextAction: "Install PyShell on your system",
    visualDemo: (
      <div className="space-y-3">
        <div className="rounded-lg border p-4 bg-gradient-to-r from-green-50 to-emerald-100 dark:from-green-950 dark:to-emerald-950">
          <div className="flex items-center gap-2 mb-3">
            <Terminal className="h-5 w-5 text-green-600" />
            <span className="font-medium">Installation Steps</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <span>1. Clone repository</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <span>2. Install dependencies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 bg-green-500 rounded-full" />
              <span>3. Run PyShell</span>
            </div>
          </div>
        </div>
        <motion.div
          className="bg-black text-green-400 p-3 rounded font-mono text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div>$ git clone https://github.com/AnshMNSoni/PyShell.git</div>
          <div className="text-blue-400">Cloning into 'PyShell'...</div>
          <div>$ cd PyShell</div>
          <div>$ python -m pip install -r requirements.txt</div>
          <div className="text-yellow-400">Successfully installed!</div>
        </motion.div>
      </div>
    ),
    interactiveElements: [
      {
        type: "terminal",
        content: (
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Keyboard className="h-4 w-4" />
              Interactive Installation Commands
            </h4>
            <div className="bg-black text-green-400 p-4 rounded font-mono text-sm space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-blue-400">$</span>
                <span>git clone https://github.com/AnshMNSoni/PyShell.git</span>
                <motion.div
                  className="w-2 h-4 bg-green-400"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                />
              </div>
              <div className="text-gray-400">Cloning into 'PyShell'...</div>
              <div className="text-green-400">✓ Repository cloned successfully</div>
            </div>
          </div>
        ),
      },
    ],
    tips: [
      "Choose the right tab for your operating system",
      "Copy commands one by one to avoid errors",
      "Check the troubleshooting section if you encounter issues",
    ],
  },
  {
    id: 3,
    title: "Explore Commands & Features",
    description: "Dive deep into PyShell's powerful features and command reference",
    detailedDescription:
      "Discover the extensive range of built-in commands and features that make PyShell unique. From basic navigation to advanced features like voice input and Git integration, master the tools that will boost your productivity.",
    icon: BookOpen,
    color: "text-purple-600",
    bgColor: "bg-purple-50 dark:bg-purple-950/30",
    href: "/docs/features",
    estimatedTime: "15 min",
    difficulty: "Intermediate",
    keyPoints: [
      "Learn essential PyShell commands",
      "Understand advanced features like voice input",
      "Explore productivity tools (calculator, weather, etc.)",
      "Master Git integration and process management",
    ],
    nextAction: "Browse the features documentation",
    visualDemo: (
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-purple-600" />
              <span className="font-medium text-sm">Calculator</span>
            </div>
            <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
              <div>$ calc</div>
              <div>&gt; sin(30)</div>
              <div>0.5</div>
            </div>
          </div>
          <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-blue-600" />
              <span className="font-medium text-sm">Weather</span>
            </div>
            <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
              <div>$ weather</div>
              <div>NYC: 72°F ☀️</div>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-green-600" />
              <span className="font-medium text-sm">Git</span>
            </div>
            <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
              <div>$ git dashboard</div>
              <div>Branch: main ✓</div>
            </div>
          </div>
          <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="h-4 w-4 text-orange-600" />
              <span className="font-medium text-sm">Voice</span>
            </div>
            <div className="bg-black text-green-400 p-2 rounded text-xs font-mono">
              <div>$ voice</div>
              <div>🎤 Listening...</div>
            </div>
          </div>
        </div>
      </div>
    ),
    interactiveElements: [
      {
        type: "animation",
        content: (
          <div className="space-y-4">
            <h4 className="font-semibold flex items-center gap-2">
              <Sparkles className="h-4 w-4" />
              Feature Categories
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <motion.div
                className="bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 p-3 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-purple-600 font-medium">Productivity</div>
                <div className="text-xs text-muted-foreground mt-1">Calculator, Weather, Tasks</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 p-3 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-blue-600 font-medium">Developer</div>
                <div className="text-xs text-muted-foreground mt-1">Git, Commands, Process</div>
              </motion.div>
              <motion.div
                className="bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-950/30 p-3 rounded-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-green-600 font-medium">Advanced</div>
                <div className="text-xs text-muted-foreground mt-1">Voice, Music, AI</div>
              </motion.div>
            </div>
          </div>
        ),
      },
    ],
    tips: [
      "Use the feature tabs to explore different categories",
      "Click on feature cards to see detailed code examples",
      "Try the interactive demos for hands-on learning",
    ],
  },
  {
    id: 4,
    title: "Follow Examples",
    description: "Learn through practical, real-world use cases and code examples",
    detailedDescription:
      "Put theory into practice with our curated collection of examples. See how PyShell solves real development challenges and learn best practices through hands-on tutorials and code samples.",
    icon: Code2,
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    href: "/docs/api-reference",
    estimatedTime: "20 min",
    difficulty: "Intermediate",
    keyPoints: [
      "Work through practical coding examples",
      "Understand API integrations (Weather, Music)",
      "Learn workflow automation techniques",
      "Practice with real-world scenarios",
    ],
    nextAction: "Try the interactive examples",
    visualDemo: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-950/30 p-4 rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Code2 className="h-4 w-4" />
            API Integration Example
          </h4>
          <div className="bg-black text-green-400 p-3 rounded font-mono text-xs space-y-1">
            <div className="text-blue-400"># Weather API Integration</div>
            <div>import requests</div>
            <div>def get_weather(city):</div>
            <div className="ml-4">url = f"api.weather.com/london"</div>
            <div className="ml-4">response = requests.get(url)</div>
            <div className="ml-4">return response.json()</div>
            <div className="text-yellow-400"># Usage in PyShell</div>
            <div>weather_data = get_weather("London")</div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-white/70 dark:bg-black/30 p-2 rounded flex items-center gap-2">
            <div className="h-2 w-2 bg-green-500 rounded-full" />
            <span>Music API</span>
          </div>
          <div className="bg-white/70 dark:bg-black/30 p-2 rounded flex items-center gap-2">
            <div className="h-2 w-2 bg-blue-500 rounded-full" />
            <span>Weather API</span>
          </div>
        </div>
      </div>
    ),
    interactiveElements: [
      {
        type: "code",
        content: (
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Interactive Code Examples
            </h4>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Python Code Example</span>
                <Button size="sm" variant="outline">
                  Copy Code
                </Button>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`def search_music(query):
    """Search for music using API"""
    api_url = f"https://api.music.com/search?q={query}"
    response = requests.get(api_url)
    return response.json()

# Example usage in PyShell
results = search_music("Shape of You")
print(f"Found {len(results)} songs")`}</code>
              </pre>
            </div>
          </div>
        ),
      },
    ],
    tips: [
      "Copy and paste code examples to try them yourself",
      "Read the API documentation for each integration",
      "Start with simple examples before moving to complex ones",
    ],
  },
  {
    id: 5,
    title: "Navigate Like a Pro",
    description: "Master efficient navigation and get help when you need it",
    detailedDescription:
      "Learn the ins and outs of navigating PyShell's documentation and interface. Discover keyboard shortcuts, search functionality, and how to quickly find answers to your questions.",
    icon: Navigation,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
    href: "/docs/faq",
    estimatedTime: "8 min",
    difficulty: "Beginner",
    keyPoints: [
      "Master keyboard shortcuts and quick navigation",
      "Use the search functionality effectively",
      "Access help and documentation quickly",
      "Join the community for ongoing support",
    ],
    nextAction: "Explore the FAQ and community resources",
    visualDemo: (
      <div className="space-y-3">
        <div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/30 dark:to-purple-950/30 p-4 rounded-lg">
          <h4 className="font-medium mb-3 flex items-center gap-2">
            <Keyboard className="h-4 w-4" />
            Keyboard Shortcuts
          </h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white dark:bg-black rounded text-xs">⌘K</kbd>
              <span>Search docs</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white dark:bg-black rounded text-xs">Esc</kbd>
              <span>Close modal</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white dark:bg-black rounded text-xs">Tab</kbd>
              <span>Navigate</span>
            </div>
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1 bg-white dark:bg-black rounded text-xs">Enter</kbd>
              <span>Select</span>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-black border rounded-lg p-3">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-4 w-4 bg-indigo-500 rounded" />
            <span className="text-sm font-medium">Search Documentation</span>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-2 rounded text-sm">
            <span className="text-muted-foreground">Search docs... (⌘K)</span>
          </div>
        </div>
      </div>
    ),
    interactiveElements: [
      {
        type: "browser",
        content: (
          <div className="space-y-3">
            <h4 className="font-semibold flex items-center gap-2">
              <MousePointer className="h-4 w-4" />
              Navigation Tips
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="space-y-2">
                <div className="font-medium">Quick Access</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full" />
                    <span>Sidebar navigation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full" />
                    <span>Search functionality</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-indigo-500 rounded-full" />
                    <span>Breadcrumb navigation</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="font-medium">Help Resources</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span>FAQ section</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span>Community support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full" />
                    <span>GitHub issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    tips: [
      "Use ⌘K (Ctrl+K) to quickly search documentation",
      "Bookmark frequently used pages for quick access",
      "Check the FAQ before asking questions in the community",
    ],
  },
]

export function TutorialSection() {
  const [selectedStep, setSelectedStep] = useState<number | null>(null)
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set())

  const selectStep = (stepId: number) => {
    setSelectedStep(stepId)
  }

  const closeStep = () => {
    setSelectedStep(null)
  }

  const markAsCompleted = (stepId: number) => {
    setCompletedSteps((prev) => new Set([...prev, stepId]))
  }

  const resetTutorial = () => {
    setSelectedStep(null)
    setCompletedSteps(new Set())
  }

  const overallProgress = (completedSteps.size / tutorialSteps.length) * 100
  const selectedStepData = selectedStep ? tutorialSteps.find((step) => step.id === selectedStep) : null

  return (
    <section className="w-full py-8 md:py-16 lg:py-24 bg-gradient-to-b from-background to-muted/30 relative">
      <div className="container px-4 md:px-6 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center rounded-lg bg-gradient-to-r from-primary/10 to-purple/10 px-4 py-2 text-sm text-primary border border-primary/20">
              <Lightbulb className="mr-2 h-4 w-4" />
              Step-by-Step Learning Path
              <Sparkles className="ml-2 h-4 w-4" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Tutorial: Your Learning Journey
            </h2>
            <p className="max-w-3xl mx-auto text-muted-foreground text-base md:text-lg">
              Follow these 5 essential steps to master PyShell. Each step builds on the previous one, creating a
              complete learning experience.
            </p>
          </motion.div>

          {/* Overall Progress */}
          <motion.div
            className="max-w-md mx-auto mt-6"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary/5 to-purple/5 p-4 rounded-xl border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Learning Progress</span>
                <span className="text-xs text-muted-foreground">
                  {completedSteps.size}/{tutorialSteps.length} completed
                </span>
              </div>
              <Progress value={overallProgress} className="h-2" />
              <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                <span>🚀 Beginner</span>
                <span>🎓 Expert</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tutorial Content */}
        <div className="relative">
          {/* Step-by-Step Walking Layout */}
          <AnimatePresence>
            {!selectedStep && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                {/* Steps Container */}
                <div className="relative">
                  {/* Connecting Line */}
                  <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/20" />

                  {/* Steps */}
                  <div className="space-y-8">
                    {tutorialSteps.map((step, index) => {
                      const StepIcon = step.icon
                      const isCompleted = completedSteps.has(step.id)
                      const isNext = !isCompleted && completedSteps.size === step.id - 1

                      return (
                        <motion.div
                          key={step.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="relative"
                        >
                          {/* Step Number Circle */}
                          <div className="flex items-start gap-4 md:gap-6">
                            <motion.div
                              className={cn(
                                "relative z-10 flex h-12 w-12 md:h-16 md:w-16 items-center justify-center rounded-full border-4 transition-all duration-300",
                                isCompleted
                                  ? "bg-green-500 border-green-500 text-white shadow-lg"
                                  : isNext
                                    ? "bg-primary border-primary text-white shadow-lg animate-pulse"
                                    : "bg-background border-muted-foreground/30 text-muted-foreground",
                              )}
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              {isCompleted ? (
                                <CheckCircle className="h-6 w-6 md:h-8 md:w-8" />
                              ) : (
                                <StepIcon className="h-6 w-6 md:h-8 md:w-8" />
                              )}

                              {/* Glowing effect for next step */}
                              {isNext && (
                                <motion.div
                                  className="absolute inset-0 rounded-full bg-primary/20"
                                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                />
                              )}
                            </motion.div>

                            {/* Step Content */}
                            <div className="flex-1 min-w-0">
                              <motion.div
                                className={cn(
                                  "group cursor-pointer rounded-xl border p-4 md:p-6 transition-all duration-300 hover:shadow-lg",
                                  isCompleted
                                    ? "bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800"
                                    : isNext
                                      ? "bg-primary/5 border-primary/20 hover:bg-primary/10"
                                      : "bg-background border-border hover:border-primary/30",
                                )}
                                onClick={() => selectStep(step.id)}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="flex items-start justify-between gap-4">
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-3 mb-2">
                                      <h3 className="text-lg md:text-xl font-semibold">{step.title}</h3>
                                      <div className="flex gap-2">
                                        <Badge
                                          variant="outline"
                                          className={cn(
                                            "text-xs",
                                            step.difficulty === "Beginner" && "border-green-500 text-green-600",
                                            step.difficulty === "Intermediate" && "border-yellow-500 text-yellow-600",
                                            step.difficulty === "Advanced" && "border-red-500 text-red-600",
                                          )}
                                        >
                                          {step.difficulty}
                                        </Badge>
                                        <Badge variant="outline" className="text-xs">
                                          <Clock className="h-3 w-3 mr-1" />
                                          {step.estimatedTime}
                                        </Badge>
                                      </div>
                                    </div>
                                    <p className="text-muted-foreground text-sm md:text-base mb-4">
                                      {step.description}
                                    </p>

                                    {/* Status Indicators */}
                                    <div className="flex items-center justify-between">
                                      <div className="flex items-center gap-2 text-sm">
                                        {isCompleted ? (
                                          <div className="flex items-center gap-2 text-green-600">
                                            <CheckCircle className="h-4 w-4" />
                                            <span className="font-medium">Completed</span>
                                          </div>
                                        ) : isNext ? (
                                          <div className="flex items-center gap-2 text-primary">
                                            <Star className="h-4 w-4" />
                                            <span className="font-medium">Ready to start</span>
                                          </div>
                                        ) : (
                                          <div className="flex items-center gap-2 text-muted-foreground">
                                            <div className="h-4 w-4 rounded-full border-2 border-muted-foreground/30" />
                                            <span>Locked</span>
                                          </div>
                                        )}
                                      </div>

                                      <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                                    </div>
                                  </div>
                                </div>

                                {/* Preview of key points */}
                                <div className="mt-4 pt-4 border-t border-border/50">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-muted-foreground">
                                    {step.keyPoints.slice(0, 2).map((point, idx) => (
                                      <div key={idx} className="flex items-center gap-2">
                                        <div className="h-1.5 w-1.5 bg-primary rounded-full" />
                                        <span>{point}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="text-center mt-12 p-6 bg-gradient-to-r from-primary/5 to-purple/5 rounded-xl border"
                >
                  <h3 className="text-lg font-semibold mb-2">Ready to Begin Your Journey?</h3>
                  <p className="text-muted-foreground mb-4">
                    Start with Step 1 and work your way up to become a PyShell expert!
                  </p>
                  <Button onClick={() => selectStep(1)} size="lg" className="gap-2">
                    <Home className="h-4 w-4" />
                    Start with Step 1
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Expanded Step View */}
          <AnimatePresence>
            {selectedStep && selectedStepData && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                {/* Step Header */}
                <div className="mb-6 md:mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={cn(
                          "w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                          completedSteps.has(selectedStep)
                            ? "bg-green-500 border-green-500 text-white"
                            : `${selectedStepData.bgColor} border-current ${selectedStepData.color}`,
                        )}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      >
                        {completedSteps.has(selectedStep) ? (
                          <CheckCircle className="h-6 w-6 md:h-8 md:w-8" />
                        ) : (
                          <selectedStepData.icon className="h-6 w-6 md:h-8 md:w-8" />
                        )}
                      </motion.div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm text-muted-foreground">Step {selectedStep} of 5</span>
                          <div className="h-1 w-1 bg-muted-foreground rounded-full" />
                          <span className="text-sm text-muted-foreground">{selectedStepData.estimatedTime}</span>
                        </div>
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{selectedStepData.title}</h3>
                        <p className="text-muted-foreground text-sm md:text-base">{selectedStepData.description}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={closeStep} className="flex-shrink-0">
                        <ArrowLeft className="h-4 w-4 mr-1" />
                        Back to Steps
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <Card className="overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                          <Eye className="h-5 w-5" />
                          Interactive Learning Experience
                        </CardTitle>
                        <CardDescription className="text-sm md:text-base">
                          Hands-on learning with visual demonstrations
                        </CardDescription>
                      </div>
                      <div className="flex gap-2">
                        <Badge variant="outline" className={selectedStepData.color}>
                          {selectedStepData.difficulty}
                        </Badge>
                        <Badge variant="outline">{selectedStepData.estimatedTime}</Badge>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Visual Demo */}
                    <div className="space-y-4">
                      <h4 className="font-semibold flex items-center gap-2 text-base md:text-lg">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Interactive Demo
                      </h4>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {selectedStepData.visualDemo}
                      </motion.div>
                    </div>

                    {/* Learning Content */}
                    <div className="grid lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <Target className="h-4 w-4 text-primary" />
                          What You'll Learn
                        </h4>
                        <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                          {selectedStepData.detailedDescription}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          Key Learning Points
                        </h4>
                        <ul className="space-y-2">
                          {selectedStepData.keyPoints.map((point, idx) => (
                            <motion.li
                              key={idx}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.3 + idx * 0.1 }}
                              className="flex items-start gap-2 text-sm md:text-base"
                            >
                              <div className="h-2 w-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span>{point}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Interactive Elements */}
                    <div className="space-y-4">
                      <h4 className="font-semibold flex items-center gap-2">
                        <PlayCircle className="h-4 w-4 text-primary" />
                        Interactive Learning Elements
                      </h4>
                      {selectedStepData.interactiveElements.map((element, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="bg-gradient-to-r from-muted/50 to-muted/30 p-4 rounded-lg border"
                        >
                          {element.content}
                        </motion.div>
                      ))}
                    </div>

                    {/* Pro Tips */}
                    <div className="space-y-3">
                      <h4 className="font-semibold flex items-center gap-2">
                        <Lightbulb className="h-4 w-4 text-yellow-500" />
                        Pro Tips
                      </h4>
                      <div className="grid gap-2">
                        {selectedStepData.tips.map((tip, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-sm bg-yellow-50 dark:bg-yellow-950/20 p-3 rounded-lg"
                          >
                            <div className="h-2 w-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                            <span>{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Navigation & Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t">
                      <Button asChild className="flex-1" size="lg">
                        <Link href={selectedStepData.href}>
                          {selectedStepData.nextAction}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      {!completedSteps.has(selectedStep) && (
                        <Button
                          variant="outline"
                          onClick={() => markAsCompleted(selectedStep)}
                          className="sm:w-auto"
                          size="lg"
                        >
                          Mark as Complete
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                      {selectedStep < tutorialSteps.length && (
                        <Button
                          variant="ghost"
                          onClick={() => selectStep(selectedStep + 1)}
                          className="sm:w-auto"
                          size="lg"
                        >
                          Next Step
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Reset Button */}
        {(completedSteps.size > 0 || selectedStep) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
          >
            <Button variant="outline" size="sm" onClick={resetTutorial} className="bg-background/80 backdrop-blur-sm">
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset Tutorial
            </Button>
          </motion.div>
        )}

        {/* Completion Celebration */}
        <AnimatePresence>
          {completedSteps.size === tutorialSteps.length && !selectedStep && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-w-2xl mx-auto mt-8 md:mt-12"
            >
              <Card className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 border-green-200 dark:border-green-800 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-emerald-400/10" />
                <CardContent className="text-center py-8 md:py-12 relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                    className="mb-6"
                  >
                    <div className="inline-flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white mb-4 relative">
                      <CheckCircle className="h-8 w-8 md:h-10 md:w-10" />
                      <motion.div
                        className="absolute inset-0 rounded-full border-4 border-green-300"
                        animate={{ scale: [1, 1.2, 1], opacity: [1, 0, 1] }}
                        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      />
                    </div>
                  </motion.div>
                  <h3 className="text-2xl md:text-3xl font-bold text-green-700 dark:text-green-300 mb-3">
                    🎉 Congratulations! You're a PyShell Expert! 🎉
                  </h3>
                  <p className="text-green-600 dark:text-green-400 mb-6 text-base md:text-lg">
                    You've successfully completed all 5 steps of the PyShell tutorial. You now have the knowledge and
                    skills to use PyShell like a pro!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button asChild size="lg">
                      <Link href="/docs">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Explore Advanced Features
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="https://github.com/AnshMNSoni/PyShell" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Star on GitHub
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
