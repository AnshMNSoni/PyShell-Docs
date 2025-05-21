"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"

// Mock search results - in a real app, this would come from a search API
const searchResults = [
  {
    title: "Introduction",
    description: "Get started with PyShell",
    url: "/docs",
  },
  {
    title: "Installation",
    description: "Learn how to install PyShell",
    url: "/docs/installation",
  },
  {
    title: "Features",
    description: "Explore PyShell features",
    url: "/docs/features",
  },
  {
    title: "Calculator",
    description: "Use the built-in calculator",
    url: "/docs/features#calculator",
  },
  {
    title: "Weather Tracking",
    description: "Get weather updates in terminal",
    url: "/docs/features#weather",
  },
  {
    title: "Git Integration",
    description: "Manage Git repositories",
    url: "/docs/features#git",
  },
]

export function DocsSearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [open, setOpen] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setOpen(true)
    }
  }

  const handleSelect = (url: string) => {
    setOpen(false)
    router.push(url)
    toast({
      title: "Navigating to result",
      description: "Taking you to the selected documentation page.",
    })
  }

  return (
    <>
      <form onSubmit={handleSearch} className="relative w-full">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search docs... (⌘K)"
          className="w-full bg-background pl-8 pr-10 text-sm h-9"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={() => setOpen(true)}
        />
        <Button type="submit" variant="ghost" size="sm" className="absolute right-0 top-0 h-9 px-2">
          <span className="sr-only">Search</span>
        </Button>
      </form>

      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Search documentation..." value={searchQuery} onValueChange={setSearchQuery} />
        <CommandList>
          {searchQuery.trim() === "" ? (
            <CommandEmpty>Type to start searching...</CommandEmpty>
          ) : searchResults.filter(
              (result) =>
                result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                result.description.toLowerCase().includes(searchQuery.toLowerCase()),
            ).length === 0 ? (
            <CommandEmpty>No results found.</CommandEmpty>
          ) : (
            <CommandGroup heading="Results">
              {searchResults
                .filter(
                  (result) =>
                    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    result.description.toLowerCase().includes(searchQuery.toLowerCase()),
                )
                .map((result) => (
                  <CommandItem key={result.url} onSelect={() => handleSelect(result.url)}>
                    <div className="flex flex-col">
                      <span>{result.title}</span>
                      <span className="text-sm text-muted-foreground">{result.description}</span>
                    </div>
                  </CommandItem>
                ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
