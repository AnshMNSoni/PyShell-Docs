import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import {
    Terminal,
    Code,
    Palette,
    Smartphone,
    FileText,
    Shield,
    Zap,
    Cloud,
    Users,
    BarChart3,
    Languages,
    Paintbrush,
} from "lucide-react";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from "react";

// Embedded features data
const features = [
    {
        icon: Terminal,
        title: "Real-time Terminal Access",
        description: "Interact with a live Python terminal directly in your browser with zero latency.",
        badge: "Live Execution",
    },
    {
        icon: Code,
        title: "Code Snippet Management",
        description: "Save, organize, and reuse your Python code snippets with intelligent categorization.",
        badge: "Persistence",
    },
    {
        icon: Palette,
        title: "Syntax Highlighting",
        description: "Enjoy a crystal-clear coding experience with intelligent syntax highlighting.",
        badge: "Readability",
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description: "Access PyShell seamlessly from any device, desktop, tablet, or mobile.",
        badge: "Cross-Device",
    },
    {
        icon: FileText,
        title: "Basic File Operations",
        description: "Perform comprehensive file operations within the secure web terminal environment.",
        badge: "File System",
    },
    {
        icon: Shield,
        title: "User Authentication",
        description: "Enterprise-grade security for managing sessions and personal settings.",
        badge: "Security",
    },
];

// Embedded upcoming features data
const upcomingFeatures = [
    {
        icon: Zap,
        text: "Enhanced API Integrations for external services",
    },
    {
        icon: Cloud,
        text: "Cloud-based Terminal Access for persistent sessions",
    },
    {
        icon: Users,
        text: "Collaborative Coding Environments for team projects",
    },
    {
        icon: BarChart3,
        text: "More Robust Data Visualization Tools directly in the browser",
    },
    {
        icon: Languages,
        text: "Support for additional programming languages beyond Python",
    },
    {
        icon: Paintbrush,
        text: "Customizable User Interface themes and layouts",
    },
];

export default function WebServicesPage() {
    return (
        <main
            className="flex-1 py-8 px-4 md:px-6 lg:px-8 bg-white dark:bg-[#09090b] min-h-screen"
            role="main"
        >
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
                        Experience the future of web-based Python development
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
                    <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                        Visit Our Main Website
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                        Explore the main PyShell website for comprehensive information about our project, latest updates, and vibrant community resources.
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg rounded-lg"
                        aria-label="Visit PyShell main website"
                    >
                        <Link href="/" rel="noopener" className="flex items-center gap-2">
                            <Terminal className="w-5 h-5" aria-hidden="true" />
                            Go to PyShell.com
                        </Link>
                    </Button>
                </section>

                {/* Features Section */}
                <section className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                            Key Features Already Integrated
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300">
                            Powerful tools designed for modern developers
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {features.map(
                            (
                                feature: {
                                    title: string | number | bigint | boolean | ReactElement<any>;
                                    icon: React.ComponentType<any>;
                                    description: string | number | bigint | boolean | ReactElement<any>;
                                    badge: string | number | bigint | boolean | ReactElement<any>;
                                },
                                index: Key | null | undefined
                            ) => {
                                const Icon = feature.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="bg-muted/50 border-gray-200 dark:border-gray-700 hover:bg-muted transition-colors rounded-lg"
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
                                        <CardContent>
                                            <Badge
                                                variant="secondary"
                                                className="bg-primary/10 text-primary hover:bg-primary/20"
                                            >
                                                {feature.badge}
                                            </Badge>
                                        </CardContent>
                                    </Card>
                                );
                            }
                        )}
                    </div>
                </section>

                {/* Upcoming Features Section */}
                <section className="space-y-8">
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                            What's Next: Upcoming Features
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            We are continuously working on expanding PyShell's web service capabilities to bring you an even more powerful and integrated development experience. Here's a glimpse of what's coming soon:
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                        {upcomingFeatures.map(
                            (
                                item: {
                                    icon: React.ComponentType<any>;
                                    text: string | number | bigint | boolean | ReactElement<any>;
                                },
                                index: Key | null | undefined
                            ) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-4 p-6 bg-muted/50 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-muted transition-colors"
                                    >
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
                                        </div>
                                        <p className="text-gray-700 dark:text-gray-300 font-medium leading-relaxed">{item.text}</p>
                                    </div>
                                );
                            }
                        )}
                    </div>
                    <div className="text-center">
                        <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
                            Stay tuned for exciting new developments and updates! 🚀
                        </p>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="space-y-8 text-center">
                    <h2 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100">
                        Ready to Get Started?
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Experience the power and flexibility of PyShell's web terminal. Join thousands of developers who are already revolutionizing their Python workflow!
                    </p>
                    <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-xl rounded-lg"
                        aria-label="Try PyShell web terminal"
                    >
                        <Link href="/" rel="noopener" className="flex items-center gap-3">
                            <Terminal className="w-6 h-6" aria-hidden="true" />
                            Try Now - It's Free!
                        </Link>
                    </Button>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                        No installation required • Instant access • Secure environment
                    </p>
                </section>
            </div>
        </main >
    );
}