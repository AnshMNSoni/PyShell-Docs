import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Terminal, ArrowRight, Github } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { FAQLink } from "@/components/faq-link"

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
        <div className="my-6 rounded-lg border p-6 bg-muted/50">
          <h3 className="font-medium text-lg mb-3">Documentation Contents</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/docs" className="text-primary hover:underline">
                Introduction
              </Link>
            </li>
            <li>
              <Link href="/docs/installation" className="text-primary hover:underline">
                Installation Guide
              </Link>
            </li>
            <li>
              <Link href="/docs/features" className="text-primary hover:underline">
                Features Overview
              </Link>
            </li>
            <li className="text-muted-foreground">Commands (Coming Soon)</li>
            <li className="text-muted-foreground">API Reference (Coming Soon)</li>
            <li>
              <Link href="/docs/faq" className="text-primary hover:underline">
                Frequently Asked Questions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight">What is PyShell?</h2>
        <p className="leading-7">
          PyShell is an advanced Python-based terminal that combines the power of traditional command-line interfaces
          with modern features designed for developer productivity. It provides a clean, intuitive interface with
          enhanced capabilities beyond standard terminals.{" "}
          <FAQLink faqId="pyshell-vs-standard-terminals">What makes PyShell different?</FAQLink>
        </p>
        <div className="flex items-center p-6 border rounded-lg bg-muted/50">
          <Terminal className="h-12 w-12 text-primary mr-6" />
          <div>
            <h3 className="font-medium text-xl">PyShell: The Future of Terminals/CLI</h3>
            <p className="text-muted-foreground">
              A modern terminal experience built with Python <FAQLink faqId="why-python">Why Python?</FAQLink>
            </p>
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
                commands. <FAQLink faqId="target-users">Who is PyShell for?</FAQLink>
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
                users. <FAQLink faqId="entertainment-features">Is it just for work?</FAQLink>
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
        <p className="leading-7">
          Get PyShell up and running on your system in minutes.{" "}
          <FAQLink faqId="cross-platform">Works on all platforms!</FAQLink>
        </p>
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
