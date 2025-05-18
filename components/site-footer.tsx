import Link from "next/link"
import { Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t py-12 md:py-16 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Terminal className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">PyShell</span>
            </div>
            <p className="text-sm text-muted-foreground">
              The Future of Terminals/CLI. An advanced Python-based terminal with powerful features for developers.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-primary">
                  Introduction
                </Link>
              </li>
              <li>
                <Link href="/docs/installation" className="text-sm text-muted-foreground hover:text-primary">
                  Installation
                </Link>
              </li>
              <li>
                <Link href="/docs/features" className="text-sm text-muted-foreground hover:text-primary">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-medium">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://github.com/AnshMNSoni/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href="https://linkedin.com/company/py-shell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-t border-border pt-8 mt-8">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} PyShell. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Service
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
