"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/sidebar-provider"
import { Terminal, Github, Menu, Linkedin, Heart } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState } from "react"
import { DocsSearch } from "@/components/docs-search"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const isMobile = useIsMobile()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isDocsPage = pathname?.includes("/docs")

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Documentation", href: "/docs" },
    { label: "Features", href: "/docs/features" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Events", href: "/events" },
    { label: "About Us", href: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-2">
          {isDocsPage && <SidebarTrigger className="md:hidden" />}
          <Link href="/" className="flex items-center gap-2">
            <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <span className="font-bold text-lg sm:text-xl hidden sm:inline-block">PyShell</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.href ? "text-primary" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {isDocsPage && !isMobile && (
            <div className="w-[180px] lg:w-[200px] hidden lg:block">
              <DocsSearch />
            </div>
          )}
          <Button variant="outline" size="icon" className="hidden sm:flex" asChild>
            <Link href="https://github.com/AnshMNSoni/PyShell" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="icon" className="hidden sm:flex" asChild>
            <Link href="https://linkedin.com/company/py-shell" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>

          {/* ❤️ Sponsor / Like button */}
          <Link
            href="https://github.com/sponsors/AnshMNSoni"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hidden sm:inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium text-gray-900 dark:text-gray-200 transition-all border-pink-500 dark:hover:border-pink-900 hover:bg-pink-100 dark:hover:bg-[#020817]"
          >
            <Heart className="w-4 h-4 text-pink-500" />
            Like
          </Link>

          <ModeToggle />

          <DropdownMenu open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <DropdownMenuTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
                <span className="sr-only">Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              {navItems.map((item, index) => (
                <DropdownMenuItem key={index} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem asChild>
                <Link href="https://github.com/AnshMNSoni/PyShell" target="_blank" rel="noopener noreferrer">
                  GitHub
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://linkedin.com/company/py-shell" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="https://github.com/sponsors/AnshMNSoni" target="_blank" rel="noopener noreferrer">
                  Like ❤️
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
