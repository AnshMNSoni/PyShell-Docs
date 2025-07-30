import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
  Terminal,
  Zap,
  Cloud,
  Calculator,
  TrendingUpDown,
  PlayCircle,
  BarChart,
  Command,
  PieChart,
  TrendingUp,
  Layout,
  Table,
  Network,
  MessageSquare,
  Gamepad,
} from "lucide-react";
import { Key } from "react";

// Embedded features data
const features = [
  {
    icon: TrendingUp,
    title: "Stock Data Integration",
    description: "Retrieve and analyze real-time stock market data directly within the terminal.",
    badge: "Market Insights",
  },
  {
    icon: Cloud,
    title: "Weather Data Access",
    description: "Fetch real-time weather updates and forecasts for any location in your coding environment.",
    badge: "Live Weather",
  },
  {
    icon: Calculator,
    title: "Equation Solver",
    description: "Solve algebraic and symbolic equations interactively with step-by-step solutions.",
    badge: "Math Engine",
  },
  {
    icon: Calculator,
    title: "Calculator Functions",
    description: "Perform quick arithmetic and advanced calculations directly in the terminal.",
    badge: "Instant Calc",
  },
  {
    icon: PlayCircle,
    title: "Interactive Play Mode",
    description: "Experiment with code in a sandboxed playground for rapid prototyping and testing.",
    badge: "Code Sandbox",
  },
  {
    icon: BarChart,
    title: "Data Plotting",
    description: "Generate and customize interactive plots and visualizations from your data.",
    badge: "Visual Insights",
  },
  {
    icon: Command,
    title: "Basic Linux Commands",
    description: "Execute essential Linux commands like ls, cd, and grep within the terminal.",
    badge: "System Control",
  },
  {
    icon: PieChart,
    title: "Statistical Analysis",
    description: "Perform statistical computations and data analysis with built-in tools.",
    badge: "Data Stats",
  },
];

// Embedded upcoming features data
const upcomingFeatures = [
  {
    icon: TrendingUpDown,
    title: "Differential Equations",
    description: "Solve and visualize differential equations with built-in numerical and analytical tools.",
  },
  {
    icon: Gamepad,
    title: "Game Development Toolkit",
    description: "Create interactive browser-based games with built-in development tools.",
  },
  {
    icon: Layout,
    title: "Customizable Terminal Layout",
    description: "Optimize your workflow with flexible and customizable terminal layouts.",
  },
  {
    icon: Table,
    title: "Truth Table Generator",
    description: "Generate truth tables for logical expressions and circuit design.",
  },
  {
    icon: Network,
    title: "Ping Utility",
    description: "Perform network diagnostics with an integrated ping utility.",
  },
  {
    icon: MessageSquare,
    title: "Integrated Chatbot",
    description: "Get real-time coding assistance and answers with an integrated chatbot.",
  },
];

export default function WebServicesPage() {
  return (
    <main className="flex-1 py-8 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#09090b] min-h-screen" role="main">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Disclaimer Banner */}
        <div className="bg-green-100 dark:bg-green-800 p-4 text-center rounded-lg border border-green-200 dark:border-green-700">
          <div className="flex items-center justify-center gap-2 mb-1">
            <Zap className="w-5 h-5 text-green-700 dark:text-green-300 animate-blink" aria-hidden="true" />
            <p className="text-xl font-bold tracking-wide text-gray-900 dark:text-gray-100 animate-blink">
              Pyshell Terminal Website Phase 1 is Live Now
            </p>
            <Zap className="w-5 h-5 text-green-700 dark:text-green-300 animate-blink" aria-hidden="true" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Experience the future of Web-based Python development
          </p>
        </div>

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            PyShell Web Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Revolutionizing Python development with cutting-edge web-based terminal solutions
          </p>
        </section>

        {/* PyShell Website Link */}
        <section className="space-y-6 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Visit Our Main Website</h2>
          <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Explore the main PyShell website for comprehensive information about our project, latest updates, and vibrant community resources.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg"
            aria-label="Visit PyShell main website"
          >
            <Link href="https://pyshellweb.netlify.app/" rel="noopener" className="flex items-center gap-2">
              <Terminal className="w-5 h-5" aria-hidden="true" />
              Go to PyShell Web
            </Link>
          </Button>
        </section>

        {/* Features Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">Key Features Already Integrated</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Powerful tools designed for modern developers</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-muted/50 border-gray-200 dark:border-gray-700 hover:bg-muted transition-colors rounded-lg flex flex-col"
                  role="region"
                  aria-label={String(feature.title)}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary p-2 mb-4">
                      <Icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">
                      {feature.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="mt-auto pb-4 px-6">
                    <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {feature.badge}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Upcoming Features Section */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">What's Next: Upcoming Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are continuously working on expanding PyShell's web service capabilities to bring you an even more powerful and integrated development experience. Here's a glimpse of what's coming soon:
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {upcomingFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-muted/50 border-gray-200 dark:border-gray-700 hover:bg-muted transition-colors rounded-lg flex flex-col"
                  role="region"
                  aria-label={feature.title}
                >
                  <CardHeader>
                    <div className="w-10 h-10 rounded-lg bg-primary p-2 mb-4">
                      <Icon className="w-full h-full text-white" aria-hidden="true" />
                    </div>
                    <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100">{feature.title}</CardTitle>
                    <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
          <div className="text-center">
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              Stay tuned for exciting new developments and updates!
            </p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="space-y-8 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Experience the power and flexibility of PyShell's Web terminal.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-lg"
            aria-label="Try PyShell web terminal"
          >
            <Link href="https://pyshellweb.netlify.app/" rel="noopener" className="flex items-center gap-3">
              <Terminal className="w-6 h-6" aria-hidden="true" />
              Try Now - It's Free!
            </Link>
          </Button>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            No installation required • Instant access • Secure environment
          </p>
        </section>
      </div>
    </main>
  );
}
