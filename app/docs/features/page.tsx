"use client"

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
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function FeaturesPage() {
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
      title: "Git Dashboard",
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

  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Features</h1>
        <p className="text-lg text-muted-foreground mt-2">Discover the powerful capabilities of PyShell</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All Features</TabsTrigger>
          <TabsTrigger value="productivity">Productivity</TabsTrigger>
          <TabsTrigger value="developer">Developer</TabsTrigger>
          <TabsTrigger value="advanced">Advanced</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...productivityFeatures, ...developerFeatures, ...advancedFeatures].map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="productivity" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {productivityFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="developer" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {developerFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advancedFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                index={index}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
