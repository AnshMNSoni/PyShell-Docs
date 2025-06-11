import type { Metadata } from "next"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Info, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Steps, StepItem } from "@/components/steps"
import Link from "next/link"
import { FAQLink } from "@/components/faq-link"

export const metadata: Metadata = {
  title: "Installation | PyShell Documentation",
  description: "Learn how to install PyShell on different operating systems",
}

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Installation</h1>
        <p className="text-lg text-muted-foreground mt-2">Get PyShell up and running on your system</p>
      </div>

      <Alert className="bg-muted">
        <Info className="h-5 w-5" />
        <AlertTitle className="text-base">Prerequisites</AlertTitle>
        <AlertDescription className="text-sm">
          PyShell requires Python 3.12.3 and pip package manager.{" "}
          <FAQLink faqId="why-python">Why Python?</FAQLink>
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">System Requirements</CardTitle>
            <CardDescription>Minimum specifications needed</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Python 3.12.3</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>pip package manager</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Git (for cloning)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>500MB free disk space</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Supported Platforms</CardTitle>
            <CardDescription>Operating systems compatible with PyShell</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Windows 10/11</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>macOS 10.15+</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Ubuntu 20.04+</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Other Linux distributions</span>
              </li>
            </ul>
            <div className="mt-4 text-sm text-muted-foreground">
              <FAQLink faqId="cross-platform">Learn more about cross-platform support</FAQLink>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Installation Methods</CardTitle>
            <CardDescription>Different ways to install PyShell</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Git clone (recommended)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>ZIP download</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>pip install (coming soon)</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="windows" className="mt-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="windows">Windows</TabsTrigger>
          <TabsTrigger value="macos">macOS</TabsTrigger>
          <TabsTrigger value="linux">Linux</TabsTrigger>
        </TabsList>
        <TabsContent value="windows" className="mt-6 space-y-6">
          <h2 className="text-2xl font-semibold">Installing on Windows</h2>

          <Steps>
            <StepItem step={1} title="Install Python">
              <p>
                Download and install Python 3.12.3 from{" "}
                <a
                  href="https://www.python.org/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  python.org
                </a>
                .
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Make sure to check "Add Python to PATH" during installation.
              </p>
            </StepItem>

            <StepItem step={2} title="Install Git">
              <p>
                Download and install Git from{" "}
                <a
                  href="https://git-scm.com/download/win"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  git-scm.com
                </a>
                .
              </p>
            </StepItem>

            <StepItem step={3} title="Clone the Repository">
              <p>Open Command Prompt or PowerShell and run:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>git clone https://github.com/AnshMNSoni/PyShell.git</code>
              </pre>
            </StepItem>

            <StepItem step={4} title="Navigate to Project Directory">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>cd PyShell</code>
              </pre>
            </StepItem>

            <StepItem step={5} title="Install Dependencies">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>pip install -r requirements.txt</code>
              </pre>
            </StepItem>

            <StepItem step={6} title="Run PyShell">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>python main.py</code>
              </pre>
            </StepItem>
          </Steps>
        </TabsContent>

        <TabsContent value="macos" className="mt-6 space-y-6">
          <h2 className="text-2xl font-semibold">Installing on macOS</h2>

          <Steps>
            <StepItem step={1} title="Install Python">
              <p>macOS may come with Python pre-installed. To check, open Terminal and run:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>python3 --version</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                If Python is not installed or version is below 3.8, download from{" "}
                <a
                  href="https://www.python.org/downloads/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  python.org
                </a>
                .
              </p>
            </StepItem>

            <StepItem step={2} title="Install Git">
              <p>macOS may come with Git pre-installed. To check, open Terminal and run:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>git --version</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                If Git is not installed, you'll be prompted to install it.
              </p>
            </StepItem>

            <StepItem step={3} title="Clone the Repository">
              <p>Open Terminal and run:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>git clone https://github.com/AnshMNSoni/PyShell.git</code>
              </pre>
            </StepItem>

            <StepItem step={4} title="Navigate to Project Directory">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>cd PyShell</code>
              </pre>
            </StepItem>

            <StepItem step={5} title="Install Dependencies">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>pip3 install -r requirements.txt</code>
              </pre>
            </StepItem>

            <StepItem step={6} title="Run PyShell">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>python3 main.py</code>
              </pre>
            </StepItem>
          </Steps>
        </TabsContent>

        <TabsContent value="linux" className="mt-6 space-y-6">
          <h2 className="text-2xl font-semibold">Installing on Linux</h2>

          <Steps>
            <StepItem step={1} title="Install Python">
              <p>Most Linux distributions come with Python pre-installed. To check, open Terminal and run:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>python3 --version</code>
              </pre>
              <p className="text-sm text-muted-foreground mt-2">
                If Python is not installed or version is below 3.8, install it using your package manager:
              </p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>sudo apt update && sudo apt install python3 python3-pip</code>
              </pre>
            </StepItem>

            <StepItem step={2} title="Install Git">
              <p>Install Git using your package manager:</p>
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>sudo apt install git</code>
              </pre>
            </StepItem>

            <StepItem step={3} title="Clone the Repository">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>git clone https://github.com/AnshMNSoni/PyShell.git</code>
              </pre>
            </StepItem>

            <StepItem step={4} title="Navigate to Project Directory">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>cd PyShell</code>
              </pre>
            </StepItem>

            <StepItem step={5} title="Install Dependencies">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>pip3 install -r requirements.txt</code>
              </pre>
            </StepItem>

            <StepItem step={6} title="Run PyShell">
              <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                <code>python3 main.py</code>
              </pre>
            </StepItem>
          </Steps>
        </TabsContent>
      </Tabs>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-semibold">Troubleshooting</h2>

        <div className="space-y-4">
          <div className="rounded-lg border p-6">
            <h3 className="font-medium text-lg mb-2">Common Installation Issues</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Missing Dependencies</h4>
                <p className="text-muted-foreground mt-1">
                  If you encounter errors about missing packages, try running:
                </p>
                <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                  <code>pip install -r requirements.txt --upgrade</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium">Permission Errors</h4>
                <p className="text-muted-foreground mt-1">On Linux/macOS, if you encounter permission errors, try:</p>
                <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                  <code>sudo pip install -r requirements.txt</code>
                </pre>
              </div>

              <div>
                <h4 className="font-medium">Python Version Conflicts</h4>
                <p className="text-muted-foreground mt-1">
                  If you have multiple Python versions installed, specify Python 3:
                </p>
                <pre className="bg-muted p-2 rounded-md mt-2 overflow-x-auto">
                  <code>python3 -m pip install -r requirements.txt</code>
                </pre>
              </div>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            If you continue to experience issues, please check the{" "}
            <Link href="https://github.com/AnshMNSoni/PyShell/issues" className="text-primary hover:underline">
              GitHub issues
            </Link>{" "}
            or{" "}
            <FAQLink faqId="contribute" showIcon={false}>
              contact support
            </FAQLink>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
