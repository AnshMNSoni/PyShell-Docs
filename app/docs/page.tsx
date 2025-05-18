import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, ArrowRight, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Documentation | PyShell",
  description: "Learn how to use PyShell, the future of terminals/CLI",
}

export default function DocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-lg text-muted-foreground mt-2">Get started with PyShell, the future of terminals/CLI</p>
      </div>
      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is PyShell?</h2>
        <p className="leading-7">
          PyShell is an advanced Python-based terminal that combines the power of traditional command-line interfaces
          with modern features designed for developer productivity. It provides a clean, intuitive interface with
          enhanced capabilities beyond standard terminals.
        </p>
        <div className="flex items-center p-6 border rounded-lg bg-muted/50">
          <Terminal className="h-12 w-12 text-primary mr-6" />
          <div>
            <h3 className="font-medium text-xl">PyShell: The Future of Terminals/CLI</h3>
            <p className="text-muted-foreground">A modern terminal experience built with Python</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>For Developers</CardTitle>
              <CardDescription>Enhance your development workflow</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                PyShell provides powerful tools for developers including Git integration, process management, and voice
                commands.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/docs/features">
                  Developer Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>For Power Users</CardTitle>
              <CardDescription>Boost your productivity</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Task scheduling, weather tracking, and advanced calculator functions make PyShell perfect for power
                users.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href="/docs/features">
                  Productivity Features
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight mt-8">Quick Start</h2>
        <p className="leading-7">Get PyShell up and running on your system in minutes.</p>
        <div className="space-y-4">
          <div className="rounded-md bg-black/90 p-6 overflow-hidden">
            <div className="flex items-center border-b border-white/10 pb-2 mb-4">
              <div className="flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>
              <div className="ml-2 text-sm font-medium text-white/70">Terminal</div>
            </div>
            <pre className="text-white overflow-x-auto">
              <code>
                {`# Clone the repository
git clone https://github.com/AnshMNSoni/PyShell.git

# Navigate to the project directory
cd PyShell

# Install dependencies
pip install -r requirements.txt

# Run PyShell
python main.py`}
              </code>
            </pre>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/docs/installation">
                Installation Guide
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="https://github.com/AnshMNSoni/PyShell" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
