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
  GraduationCap,
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

  const toggleGroup = (group: keyof typeof openGroups) => {
    setOpenGroups((prev) => ({
      ...prev,
      [group]: !prev[group],
    }))
  }

  const handleFeatureClick = (feature: string) => {
    // Navigate to features page with a hash to identify the specific feature
    router.push(`/docs/features#${feature.toLowerCase().replace(/\s+/g, "-")}`)
  }

  return (
    <Sidebar className="hidden md:flex border-r">
      <SidebarContent>
        <SidebarGroup> <br />
          <SidebarGroupLabel>Getting Started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs")}>
                  <Link href="/docs" className="flex items-center gap-2">
                    <Home className="h-4 w-4 shrink-0" />
                    <span>Introduction</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/tutorial")}>
                  <Link href="/docs/tutorial" className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 shrink-0" />
                    <span>Tutorial</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/installation")}>
                  <Link href="/docs/installation" className="flex items-center gap-2">
                    <Terminal className="h-4 w-4 shrink-0" />
                    <span>Installation</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={isActive("/docs/features")}>
                  <Link href="/docs/features" className="flex items-center gap-2">
                    <Box className="h-4 w-4 shrink-0" />
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
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("calculator")}
                      className="flex items-center gap-2"
                    >
                      <Calculator className="h-4 w-4 shrink-0" />
                      <span>Calculator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("weather-tracking")}
                      className="flex items-center gap-2"
                    >
                      <Cloud className="h-4 w-4 shrink-0" />
                      <span>Weather</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("task-scheduling")}
                      className="flex items-center gap-2"
                    >
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span>Task Scheduling</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("password-generator")}
                      className="flex items-center gap-2"
                    >
                      <Key className="h-4 w-4 shrink-0" />
                      <span>Password Generator</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("music-player")}
                      className="flex items-center gap-2"
                    >
                      <Music className="h-4 w-4 shrink-0" />
                      <span>Music Player</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("voice-input")}
                      className="flex items-center gap-2"
                    >
                      <Mic className="h-4 w-4 shrink-0" />
                      <span>Voice Input</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      onClick={() => handleFeatureClick("git-integration")}
                      className="flex items-center gap-2"
                    >
                      <GitBranch className="h-4 w-4 shrink-0" />
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
                    <SidebarMenuButton asChild isActive={isActive("/docs/commands")}>
                      <Link href="/docs/commands" className="flex items-center gap-2">
                        <Command className="h-4 w-4 shrink-0" />
                        <span>Commands</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/docs/api-reference")}>
                      <Link href="/docs/api-reference" className="flex items-center gap-2">
                        <Code className="h-4 w-4 shrink-0" />
                        <span>API Reference</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70 flex items-center gap-2">
                      <Settings className="h-4 w-4 shrink-0" />
                      <span>Configuration</span>
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
                    <SidebarMenuButton disabled className="opacity-70 flex items-center gap-2">
                      <FileCode className="h-4 w-4 shrink-0" />
                      <span>Examples</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton disabled className="opacity-70 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 shrink-0" />
                      <span>Best Practices</span>
                      <span className="ml-auto text-xs text-muted-foreground">Coming Soon</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton asChild isActive={isActive("/docs/faq")}>
                      <Link href="/docs/faq" className="flex items-center gap-2">
                        <HelpCircle className="h-4 w-4 shrink-0" />
                        <span>FAQ</span>
                      </Link>
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
