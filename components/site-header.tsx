"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { SidebarTrigger } from "@/components/sidebar-provider"
import { Terminal, Github, Menu, Linkedin, Heart, X } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { useState, useEffect } from "react"
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
    { label: "Installation", href: "/docs/installation" },
    { label: "Events", href: "/events" },
    { label: "About Us", href: "/about" },
  ]

  // Close menu when clicking outside or pressing escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 sm:h-16 items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-2">
            {isDocsPage && <SidebarTrigger className="md:hidden" />}
            <Link href="/" className="flex items-center gap-2">
              <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="font-bold text-lg sm:text-xl hidden sm:inline-block">PyShell</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  pathname === item.href ? "text-primary" : ""
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-green-500 rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {isDocsPage && !isMobile && (
              <div className="w-[180px] lg:w-[200px] hidden lg:block">
                <DocsSearch />
              </div>
            )}
            
            {/* Desktop Social Links */}
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

            {/* Sponsor Button */}
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

            {/* Mobile Menu Trigger */}
            <Button 
              variant="outline" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu className="h-4 w-4" />
              <span className="sr-only">Menu</span>
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <>
        {/* Backdrop with fade-in animation */}
        <div 
          className={`fixed inset-0 bg-black/50 z-[60] md:hidden transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        
        {/* Mobile Menu Panel with slide-in animation */}
        <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-background border-l z-[70] md:hidden transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                  <Terminal className="h-5 w-5 text-primary" />
                  <span className="font-bold text-lg">PyShell</span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <X className="h-4 w-4" />
                  <span className="sr-only">Close menu</span>
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <div className="space-y-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={handleLinkClick}
                      className={`flex items-center px-3 py-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground relative ${
                        pathname === item.href 
                          ? "bg-accent text-accent-foreground" 
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.label}
                      {pathname === item.href && (
                        <span className="absolute left-0 top-0 bottom-0 w-1 bg-green-500 rounded-r-full"></span>
                      )}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="my-6 border-t" />

                {/* Social Links */}
                <div className="space-y-1">
                  <Link
                    href="https://github.com/AnshMNSoni/PyShell"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-3 py-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Github className="h-4 w-4" />
                    GitHub
                  </Link>
                  <Link
                    href="https://linkedin.com/company/py-shell"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-3 py-3 text-base font-medium rounded-md transition-colors hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </Link>
                  <Link
                    href="https://github.com/sponsors/AnshMNSoni"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={handleLinkClick}
                    className="flex items-center gap-3 px-3 py-3 text-base font-medium rounded-md transition-colors hover:bg-pink-50 dark:hover:bg-pink-950/20 text-pink-600 dark:text-pink-400"
                  >
                    <Heart className="h-4 w-4" />
                    Like
                  </Link>
                </div>
              </nav>

              {/* Footer */}
              <div className="p-4 border-t">
                <p className="text-xs text-muted-foreground text-center">
                  © {new Date().getFullYear()} <span className="text-emerald-600 dark:text-emerald-400 font-semibold">PyShell</span>. Built with ❤️
                </p>
              </div>
            </div>
          </div>
        </>
    </>
  )
}