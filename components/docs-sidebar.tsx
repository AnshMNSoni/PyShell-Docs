"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/sidebar-provider"
import {
  BookOpen,
  Box,
  Code,
  Command,
  FileCode,
  HelpCircle,
  Home,
  Settings,
  Terminal,
  Calculator,
  Cloud,
  Calendar,
  Key,
  Music,
  Mic,
  GitBranch,
  ChevronDown,
} from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

export function DocsSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [openGroups, setOpenGroups] = useState({
    features: true,
    advanced: true,
    resources: true,
  })

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleGroup = (group: string) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const handleFeatureClick = (feature: string) => {
    // Navigate to features page with a hash to identify the specific feature
    router.push(`/docs/features#${feature.toLowerCase().replace(/\s+/g, "-")}`, undefined, { shallow: true })
  }

  return (
    <Sidebar className="hidden md:flex border-r">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs")}>
                  <Link href="/docs">
                    <Home className="h-4 w-4" />
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/installation")}>
                  <Link href="/docs/installation">
                    <Terminal className="h-4 w-4" />
                    <span>Installation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/features")}>
                  <Link href="/docs/features">
                    <Box className="h-4 w-4" />
                    <span>Features</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible open={openGroups.features} onOpenChange={() => toggleGroup("features")}>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                Core Features
                <ChevronDown className={`h-4 w-4 transition-transform ${openGroups.features ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("calculator")}>
                      <Calculator className="h-4 w-4" />
                      <span>Calculator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("weather-tracking")}>
                      <Cloud className="h-4 w-4" />
                      <span>Weather</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("task-scheduling")}>
                      <Calendar className="h-4 w-4" />
                      <span>Task Scheduling</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("password-generator")}>
                      <Key className="h-4 w-4" />
                      <span>Password Generator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("music-player")}>
                      <Music className="h-4 w-4" />
                      <span>Music Player</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("voice-input")}>
                      <Mic className="h-4 w-4" />
                      <span>Voice Input</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton onClick={() => handleFeatureClick("git-integration")}>
                      <GitBranch className="h-4 w-4" />
                      <span>Git Integration</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible open={openGroups.advanced} onOpenChange={() => toggleGroup("advanced")}>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                Advanced
                <ChevronDown className={`h-4 w-4 transition-transform ${openGroups.advanced ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <Command className="h-4 w-4" />
                      <span>Commands</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <Settings className="h-4 w-4" />
                      <span>Configuration</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <Code className="h-4 w-4" />
                      <span>API Reference</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        <SidebarGroup>
          <Collapsible open={openGroups.resources} onOpenChange={() => toggleGroup("resources")}>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex w-full items-center justify-between">
                Resources
                <ChevronDown className={`h-4 w-4 transition-transform ${openGroups.resources ? "rotate-180" : ""}`} />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <FileCode className="h-4 w-4" />
                      <span>Examples</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <BookOpen className="h-4 w-4" />
                      <span>Tutorials</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70">
                      <HelpCircle className="h-4 w-4" />
                      <span>FAQ</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
