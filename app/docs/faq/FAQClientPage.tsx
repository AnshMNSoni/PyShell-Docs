"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useEffect, useState, useRef } from "react"
import { useSearchParams } from "next/navigation"
import type React from "react"
import { HelpCircle, Search, ChevronRight, ArrowUp } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

interface FAQ {
  id: string
  question: string
  answer: React.ReactNode
  category: "general" | "technical" | "usage"
}

export default function FAQClientPage() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([])
  const [showBackToTop, setShowBackToTop] = useState(false)
  const accordionRef = useRef<HTMLDivElement>(null)
  const searchParams = useSearchParams()
  const faqId = searchParams.get("faq")

  const faqs: FAQ[] = [
    {
      id: "terminals-vs-gui",
      question:
        "Terminals were tiring in the past, and that's why GUI was introduced. Why are you switching back to terminal now?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p>
            That's a great observation. GUI was introduced to make computing more accessible and it succeeded. But
            here's the truth: terminals never became obsolete. Every major OS Windows, macOS, Linux still includes it.
            Why? Because terminals are powerful, flexible, and fast.
          </p>
          <p>
            With PyShell, we're not replacing GUI — we're enhancing the terminal with modern features that improve
            productivity and make development fun. It's about giving the terminal the upgrade it deserves combining
            performance with intelligence, usability, and personalization.
          </p>
        </div>
      ),
    },
    {
      id: "pyshell-vs-standard-terminals",
      question: "What makes PyShell different from the standard terminals like CMD, PowerShell, or Bash?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p>
            PyShell is not 'just another terminal' — it's a developer-focused command environment. Unlike standard
            terminals, PyShell includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>User login & access control</li>
            <li>Task scheduling</li>
            <li>Weather updates</li>
            <li>Built-in calculator with calculus support</li>
            <li>Git dashboard & history</li>
            <li>Password generator</li>
            <li>Voice command input</li>
            <li>Layout change functionality</li>
            <li>Game mode and equation solver</li>
          </ul>
          <p>It's like a Swiss Army knife for developers blending functionality and flexibility in a clean UI.</p>
        </div>
      ),
    },
    {
      id: "why-python",
      question: "Why build this in Python?",
      category: "technical",
      answer: (
        <p>
          Python is versatile, expressive, and beginner-friendly, which makes it perfect for building cross-platform CLI
          applications. Plus, Python has a rich ecosystem of libraries that makes implementing features like voice
          input, scheduling, and system controls easy and modular.
        </p>
      ),
    },
    {
      id: "cross-platform",
      question: "Is PyShell only for Linux users? What about Windows or Mac?",
      category: "technical",
      answer: (
        <p>
          Nope! PyShell is cross-platform. While some Linux-specific commands may not work natively on Windows or Mac,
          we've added cross-compatibility layers and Python wrappers wherever possible to ensure consistent experience
          across all platforms.
        </p>
      ),
    },
    {
      id: "alongside-existing-terminal",
      question: "Can I use PyShell alongside my existing terminal?",
      category: "usage",
      answer: (
        <p>
          PyShell is designed to complement your existing setup. You can use it as your daily terminal or just for
          specific tasks like scheduling, Git management, or voice-controlled commands — it's modular and flexible.
        </p>
      ),
    },
    {
      id: "target-users",
      question: "What kind of developers or users is PyShell made for?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p>PyShell is perfect for:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Developers who love command-line workflows</li>
            <li>Students and educators needing calculus or equation solving</li>
            <li>System admins who need task scheduling and monitoring</li>
            <li>Beginners exploring Linux commands in a friendly interface</li>
            <li>Users who want a fun, interactive terminal experience</li>
          </ul>
        </div>
      ),
    },
    {
      id: "contribute",
      question: "Can I contribute to PyShell or suggest features?",
      category: "general",
      answer: (
        <div className="space-y-4">
          <p>Yes! We're building a community-driven platform. You can:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Suggest features</li>
            <li>Report bugs</li>
            <li>Contribute code or modules</li>
            <li>Help improve UI/UX</li>
            <li>Join brainstorming sessions</li>
          </ul>
          <p>Reach out via GitHub / Discord / Community Portal to get involved.</p>
        </div>
      ),
    },
    {
      id: "open-source",
      question: "Is PyShell open-source?",
      category: "general",
      answer: (
        <p>
          Yes, our goal is to keep PyShell open-source and community-first. This way, we ensure it remains adaptable,
          transparent, and collaborative.
        </p>
      ),
    },
    {
      id: "linux-commands",
      question: "Can PyShell run real Linux commands like ls, mkdir, or sysinfo?",
      category: "technical",
      answer: (
        <p>
          Yes! PyShell supports a range of basic Linux commands through Python's subprocess and os modules. We're
          constantly expanding support and even offer custom commands that go beyond traditional capabilities.
        </p>
      ),
    },
    {
      id: "entertainment-features",
      question:
        "Why does PyShell include things like music, games, or voice input? Isn't that distracting for developers?",
      category: "usage",
      answer: (
        <p>
          We believe development should be productive but also enjoyable. Features like music playback, games, and voice
          input are optional. They enhance the user experience without interfering with core functionality. You choose
          what you want — PyShell adapts to you.
        </p>
      ),
    },
  ]

  // Filter FAQs based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(faqs)
    } else {
      const query = searchQuery.toLowerCase()
      const filtered = faqs.filter(
        (faq) =>
          faq.question.toLowerCase().includes(query) ||
          (typeof faq.answer === "string" && faq.answer.toLowerCase().includes(query)),
      )
      setFilteredFaqs(filtered)
    }
  }, [searchQuery])

  // Handle URL hash or query parameter to open specific FAQ
  useEffect(() => {
    if (faqId) {
      const faqIndex = faqs.findIndex((faq) => faq.id === faqId)
      if (faqIndex !== -1) {
        setOpenItem(`item-${faqIndex}`)

        // Scroll to the FAQ item after a short delay to ensure it's rendered
        setTimeout(() => {
          const element = document.getElementById(`faq-${faqId}`)
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" })
          }
        }, 100)
      }
    }

    // Add scroll listener for back to top button
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [faqId, faqs])

  // Initialize filtered FAQs only once on component mount
  useEffect(() => {
    setFilteredFaqs(faqs)
  }, []) // Empty dependency array means this runs only once on mount

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const getCategoryCount = (category: string) => {
    return faqs.filter((faq) => faq.category === category).length
  }

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "general":
        return "General"
      case "technical":
        return "Technical"
      case "usage":
        return "Usage & Features"
      default:
        return category
    }
  }

  return (
    <div className="space-y-8 px-4 sm:px-6 md:px-0 max-w-full overflow-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground mt-2">Find answers to common questions about PyShell</p>
        </div>
        <div className="relative w-full md:w-64">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search FAQs..."
            className="pl-8 w-full text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
        {/* Quick Navigation */}
        <div className="md:col-span-1">
          <div className="md:sticky md:top-20 space-y-4 mb-6 md:mb-0">
            <div className="rounded-lg border p-3 md:p-4">
              <h3 className="font-medium mb-2 md:mb-3 flex items-center text-sm md:text-base">
                <HelpCircle className="h-4 w-4 mr-2" />
                Quick Navigation
              </h3>
              <div className="max-h-[200px] md:max-h-[400px] overflow-y-auto pr-1">
                <ul className="space-y-1 md:space-y-2">
                  {faqs.map((faq, index) => (
                    <li key={index}>
                      <Button
                        variant="ghost"
                        className="w-full justify-start text-sm h-auto py-1.5 px-2"
                        onClick={() => {
                          setOpenItem(`item-${index}`)
                          const element = document.getElementById(`faq-${faq.id}`)
                          if (element) {
                            element.scrollIntoView({ behavior: "smooth", block: "start" })
                          }
                        }}
                      >
                        <ChevronRight className="h-3 w-3 mr-1 shrink-0" />
                        <span className="truncate text-left">{faq.question.split("?")[0]}?</span>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Content */}
        <div className="md:col-span-3">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="mb-4 w-full overflow-x-auto flex whitespace-nowrap">
              <TabsTrigger value="all" className="flex items-center gap-2">
                All
                <Badge variant="secondary" className="ml-1">
                  {faqs.length}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="general" className="flex items-center gap-2">
                General
                <Badge variant="secondary" className="ml-1">
                  {getCategoryCount("general")}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="technical" className="flex items-center gap-2">
                Technical
                <Badge variant="secondary" className="ml-1">
                  {getCategoryCount("technical")}
                </Badge>
              </TabsTrigger>
              <TabsTrigger value="usage" className="flex items-center gap-2">
                Usage
                <Badge variant="secondary" className="ml-1">
                  {getCategoryCount("usage")}
                </Badge>
              </TabsTrigger>
            </TabsList>

            {["all", "general", "technical", "usage"].map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Accordion
                  type="single"
                  collapsible
                  className="w-full space-y-4"
                  value={openItem}
                  onValueChange={setOpenItem}
                  ref={accordionRef}
                >
                  {filteredFaqs
                    .filter((faq) => category === "all" || faq.category === category)
                    .map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`item-${index}`}
                        id={`faq-${faq.id}`}
                        className="border rounded-lg px-6 shadow-sm"
                      >
                        <AccordionTrigger className="text-left font-medium py-3 md:py-4 hover:no-underline">
                          <div className="flex items-start gap-2 md:gap-3">
                            <Badge
                              variant="outline"
                              className={cn(
                                "mt-0.5 shrink-0 text-xs",
                                faq.category === "general" &&
                                  "bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
                                faq.category === "technical" &&
                                  "bg-purple-50 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
                                faq.category === "usage" &&
                                  "bg-green-50 text-green-700 dark:bg-green-950 dark:text-green-300",
                              )}
                            >
                              {getCategoryLabel(faq.category)}
                            </Badge>
                            <span className="text-sm md:text-base">{faq.question}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pt-2 pb-4">
                          <div className="border-l-2 border-primary/20 pl-4">{faq.answer}</div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                </Accordion>

                {filteredFaqs.filter((faq) => category === "all" || faq.category === category).length === 0 && (
                  <div className="text-center py-12 border rounded-lg">
                    <HelpCircle className="h-12 w-12 mx-auto text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-medium">No FAQs Found</h3>
                    <p className="text-muted-foreground mt-2">
                      {searchQuery ? "Try adjusting your search query" : "There are no FAQs in this category yet"}
                    </p>
                    {searchQuery && (
                      <Button variant="outline" className="mt-4" onClick={() => setSearchQuery("")}>
                        Clear Search
                      </Button>
                    )}
                  </div>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>

      {/* Back to top button */}
      {showBackToTop && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-4 right-4 md:bottom-8 md:right-8 rounded-full shadow-md z-10"
          onClick={scrollToTop}
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      )}
    </div>
  )
}
