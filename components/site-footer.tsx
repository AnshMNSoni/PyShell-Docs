"use client"

import Link from "next/link"
import { Terminal } from "lucide-react"
import { usePathname } from "next/navigation"

// Helper function to determine if the current page has a sidebar
function useHasSidebar() {
  const pathname = usePathname()
  // Check if the current page is a docs page or any other page that has a sidebar
  return pathname?.includes("/docs")
}

export function SiteFooter() {
  const hasSidebar = useHasSidebar()

  return (
    <footer
      className={`relative border-t py-8 sm:py-12 md:py-16 bg-muted/30 ${
        hasSidebar ? "md:ml-[var(--sidebar-width)] md:w-[calc(100%-var(--sidebar-width))]" : "w-full"
      }`}
    >
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              <span className="font-bold text-lg sm:text-xl">PyShell</span>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground">
              The Future of Terminals. An advanced Python based terminal with powerful features for developers.
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-medium">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/docs/features" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api-reference"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/docs/faq" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-medium">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/AnshMNSoni/PyShell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/py-shell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <a
                  href="mailto:developers.pyshell@gmail.com"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-primary"
                >
                  developers.pyshell@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-6 sm:pt-8 mt-6 sm:mt-8">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} <span className="text-emerald-600 dark:text-emerald-400 font-semibold">PyShell</span>. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy-policy" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-xs sm:text-sm text-muted-foreground hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
