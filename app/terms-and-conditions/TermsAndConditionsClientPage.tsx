"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowLeft,
  ArrowUp,
  Printer,
  Clock,
  FileText,
  Eye,
  Shield,
  Globe,
  Trash2,
  AlertTriangle,
  Lock,
  Users,
  Link2,
  Moon,
  Sun,
  Monitor,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useState, useEffect, useContext, createContext } from "react"

const ThemeContext = createContext({
  theme: "light" as "dark" | "light" | "system",
  setTheme: (theme: "dark" | "light" | "system") => {},
})

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light" | "system">(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "dark" | "light" | "system" | null
      return savedTheme || "light"
    }
    return "light"
  })

  useEffect(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDark = theme === "dark" || (theme === "system" && prefersDark)
    document.documentElement.classList.toggle("dark", isDark)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function TermsAndConditionsClientPage() {
  const { theme, setTheme } = useContext(ThemeContext)
  const [activeSection, setActiveSection] = useState("")
  const [scrollProgress, setScrollProgress] = useState<number>(0)

  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "interpretation", title: "Interpretation and Definitions", icon: Eye },
    { id: "acknowledgment", title: "Acknowledgment", icon: Shield },
    { id: "links", title: "Links to Other Websites", icon: Link2 },
    { id: "termination", title: "Termination", icon: Trash2 },
    { id: "limitation", title: "Limitation of Liability", icon: AlertTriangle },
    { id: "disclaimer", title: '"AS IS" and "AS AVAILABLE" Disclaimer', icon: Lock },
    { id: "governing-law", title: "Governing Law", icon: Globe },
    { id: "disputes", title: "Disputes Resolution", icon: Users },
    { id: "eu-users", title: "For European Union (EU) Users", icon: Users },
    { id: "us-legal", title: "United States Legal Compliance", icon: Shield },
    { id: "severability", title: "Severability and Waiver", icon: FileText },
    { id: "translation", title: "Translation Interpretation", icon: Globe },
    { id: "changes", title: "Changes to These Terms and Conditions", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Users },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollTop / docHeight) * 100
      setScrollProgress(progress)

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }))

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false
        const rect = element.getBoundingClientRect()
        return rect.top <= 100 && rect.bottom > 100
      })

      if (currentSection) {
        setActiveSection(currentSection.id)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full bg-green-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%`, backgroundColor: "#22c55e" }}
          />
        </div>

        <div className="container max-w-6xl py-12 px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar - Table of Contents */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* Header Card */}
                <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "#22c55e20" }}>
                      <Shield className="h-5 w-5" style={{ color: "#22c55e" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black dark:text-white">
                        Terms and Conditions
                      </h3>
                      <Badge
                        variant="outline"
                        className="mt-1 flex items-center gap-1 w-fit border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300"
                      >
                        <Clock className="h-3 w-3" />
                        May 20, 2025
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.print()}
                      className="flex-1 flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Printer className="h-4 w-4" />
                      Print
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      <Link href="/" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Navigation and Theme Switcher */}
                <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-4 shadow-lg">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Contents
                  </h4>
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon
                      const isActive = activeSection === section.id
                      return (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          className={`group flex items-center gap-3 p-3 rounded-lg text-sm transition-all duration-200 ${
                            isActive
                              ? "text-black dark:text-white border-l-2"
                              : "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-700 dark:hover:text-gray-200"
                          }`}
                          style={
                            isActive
                              ? {
                                  backgroundColor: "#22c55e20",
                                  borderLeftColor: "#22c55e",
                                }
                              : {}
                          }
                        >
                          <Icon
                            className={`h-4 w-4 transition-colors ${
                              isActive ? "" : "group-hover:text-gray-700 dark:group-hover:text-white"
                            }`}
                            style={isActive ? { color: "#22c55e" } : {}}
                          />
                          <span className="line-clamp-2 leading-tight">{section.title}</span>
                        </a>
                      )
                    })}
                  </nav>
                  {/* Theme Switcher */}
                  <div className="mt-4 flex justify-between">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme("light")}
                      className={`flex items-center gap-2 ${
                        theme === "light"
                          ? "border-gray-300 text-black bg-gray-100"
                          : "border-gray-600 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <Sun className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme("dark")}
                      className={`flex items-center gap-2 ${
                        theme === "dark"
                          ? "border-gray-600 text-white bg-gray-700"
                          : "border-gray-600 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <Moon className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setTheme("system")}
                      className={`flex items-center gap-2 ${
                        theme === "system"
                          ? "border-gray-600 text-white bg-gray-700"
                          : "border-gray-600 text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      <Monitor className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="space-y-8">
                {/* Hero Section */}
                <div className="text-center space-y-6 py-12">
                  <div
                    className="inline-flex items-center justify-center p-4 rounded-2xl mb-6"
                    style={{ backgroundColor: "#22c55e20" }}
                  >
                    <Shield className="h-12 w-12" style={{ color: "#22c55e" }} />
                  </div>
                  <div>
                    <h1 className="scroll-m-20 text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
                      Terms and Conditions
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
                      Please read these terms and conditions carefully before using Our Service
                    </p>
                  </div>
                </div>

                {/* Content Sections */}
                <div className="space-y-12">
                  <section id="introduction" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0">
                          <FileText className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Introduction
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>Please read these terms and conditions carefully before using Our Service.</p>
                      </div>
                    </div>
                  </section>

                  <section id="interpretation" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-green-500/10 flex-shrink-0">
                          <Eye className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Interpretation and Definitions
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Interpretation
                          </h3>
                          <p>
                            The words of which the initial letter is capitalized have meanings defined under the following
                            conditions. The following definitions shall have the same meaning regardless of whether they appear
                            in singular or in plural.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                            Definitions
                          </h3>
                          <p className="mb-4">For the purposes of these Terms and Conditions:</p>
                          <div className="grid gap-4">
                            {[
                              {
                                term: "Affiliate",
                                definition: "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.",
                              },
                              { term: "Country", definition: "refers to: Gujarat, India" },
                              {
                                term: "Company",
                                definition: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to PyShell | Docs.",
                              },
                              {
                                term: "Device",
                                definition: "means any device that can access the Service such as a computer, a cellphone or a digital tablet.",
                              },
                              { term: "Service", definition: "refers to the Website." },
                              {
                                term: "Terms and Conditions",
                                definition: "(also referred to as \"Terms\") mean these Terms and Conditions that form the entire agreement between You and the Company regarding the use of the Service. This Terms and Conditions agreement has been created with the help of the Terms and Conditions Generator.",
                              },
                              {
                                term: "Third-party Social Media Service",
                                definition: "means any services or content (including data, information, products or services) provided by a third-party that may be displayed, included or made available by the Service.",
                              },
                              {
                                term: "Website",
                                definition: (
                                  <>
                                    refers to PyShell | Docs, accessible from{" "}
                                    <a
                                      href="https://pyshelldocs.netlify.app/"
                                      className="hover:underline"
                                      style={{ color: "#22c55e" }}
                                    >
                                      PyShell Documentation
                                    </a>
                                  </>
                                ),
                              },
                              {
                                term: "You",
                                definition: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.",
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 border-l-4"
                                style={{ borderLeftColor: "#22c55e" }}
                              >
                                <div className="flex items-start gap-3">
                                  <span
                                    className="font-semibold text-sm"
                                    style={{ color: "#22c55e" }}
                                  >
                                    {item.term}:
                                  </span>
                                  <span className="text-sm text-gray-700 dark:text-gray-300">
                                    {item.definition}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="acknowledgment" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-purple-500/10 flex-shrink-0">
                          <Shield className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Acknowledgment
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <div
                          className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 border-l-4"
                          style={{ borderLeftColor: "#22c55e" }}
                        >
                          <p>
                            These are the Terms and Conditions governing the use of this Service and the agreement that operates
                            between You and the Company. These Terms and Conditions set out the rights and obligations of all users
                            regarding the use of the Service.
                          </p>
                          <p>
                            Your access to and use of the Service is conditioned on Your acceptance of and compliance with these
                            Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or
                            use the Service.
                          </p>
                          <p>
                            By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree
                            with any part of these Terms and Conditions then You may not access the Service.
                          </p>
                        </div>
                        <p>
                          You represent that you are over the age of 18. The Company does not permit those under 18 to use the
                          Service.
                        </p>
                        <p>
                          Your access to and use of the Service is also conditioned on Your acceptance of and compliance with the
                          Privacy Policy of the Company. Our Privacy Policy describes Our policies and procedures on the collection,
                          use and disclosure of Your personal information when You use the Application or the Website and tells You
                          about Your privacy rights and how the law protects You. Please read Our Privacy Policy carefully before
                          using Our Service.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="links" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-teal-500/10 flex-shrink-0">
                          <Link2 className="h-6 w-6 text-teal-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Links to Other Websites
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          Our Service may contain links to third-party web sites or services that are not owned or controlled by the
                          Company.
                        </p>
                        <p>
                          The Company has no control over, and assumes no responsibility for, the content, privacy policies, or
                          practices of any third party web sites or services. You further acknowledge and agree that the Company
                          shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be
                          caused by or in connection with the use of or reliance on any such content, goods or services available on
                          or through any such web sites or services.
                        </p>
                        <p>
                          We strongly advise You to read the terms and conditions and privacy policies of any third-party web sites
                          or services that You visit.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="termination" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-red-500/10 flex-shrink-0">
                          <Trash2 className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Termination
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          We may terminate or suspend Your access immediately, without prior notice or liability, for any reason
                          whatsoever, including without limitation if You breach these Terms and Conditions.
                        </p>
                        <p>Upon termination, Your right to use the Service will cease immediately.</p>
                      </div>
                    </div>
                  </section>

                  <section id="limitation" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-orange-500/10 flex-shrink-0">
                          <AlertTriangle className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Limitation of Liability
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          Notwithstanding any damages that You might incur, the entire liability of the Company and any of its
                          suppliers under any provision of this Terms and Your exclusive remedy for all of the foregoing shall be
                          limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased
                          anything through the Service.
                        </p>
                        <p>
                          To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be
                          liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not
                          limited to, damages for loss of profits, loss of data or other information, for business interruption, for
                          personal injury, loss of privacy arising out of or in any way related to the use of or inability to use
                          the Service, third-party software and/or third-party hardware used with the Service, or otherwise in
                          connection with any provision of this Terms), even if the Company or any supplier has been advised of the
                          possibility of such damages and even if the remedy fails of its essential purpose.
                        </p>
                        <p>
                          Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or
                          consequential damages, which means that some of the above limitations may not apply. In these states, each
                          party's liability will be limited to the greatest extent permitted by law.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="disclaimer" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-indigo-500/10 flex-shrink-0">
                          <Lock className="h-6 w-6 text-indigo-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            "AS IS" and "AS AVAILABLE" Disclaimer
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          The Service is provided to You "AS IS" and "AS AVAILABLE" and with all faults and defects without warranty
                          of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on
                          behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims
                          all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including
                          all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement,
                          and warranties that may arise out of course of dealing, course of performance, usage or trade practice.
                          Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no
                          representation of any kind that the Service will meet Your requirements, achieve any intended results, be
                          compatible or work with any other software, applications, systems or services, operate without
                          interruption, meet any performance or reliability standards or be error free or that any errors or defects
                          can or will be corrected.
                        </p>
                        <p>
                          Without limiting the foregoing, neither the Company nor any of the company's provider makes any
                          representation or warranty of any kind, express or implied: (i) as to the operation or availability of the
                          Service, or the information, content, and materials or products included thereon; (ii) that the Service
                          will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information
                          or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails
                          sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware,
                          timebombs or other harmful components.
                        </p>
                        <p>
                          Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable
                          statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to
                          You. But in such a case the exclusions and limitations set forth in this section shall be applied to the
                          greatest extent enforceable under applicable law.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="governing-law" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-cyan-500/10 flex-shrink-0">
                          <Globe className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Governing Law
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          The laws of the Country, excluding its conflicts of law rules, shall govern this Terms and Your use of the
                          Service. Your use of the Application may also be subject to other local, state, national, or international
                          laws.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="disputes" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-pink-500/10 flex-shrink-0">
                          <Users className="h-6 w-6 text-pink-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Disputes Resolution
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          If You have any concern or dispute about the Service, You agree to first try to resolve the dispute
                          informally by contacting the Company.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="eu-users" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-emerald-500/10 flex-shrink-0">
                          <Users className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            For European Union (EU) Users
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the
                          country in which You are resident.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="us-legal" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0">
                          <Shield className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            United States Legal Compliance
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          You represent and warrant that (i) You are not located in a country that is subject to the United States
                          government embargo, or that has been designated by the United States government as a "terrorist
                          supporting" country, and (ii) You are not listed on any United States government list of prohibited or
                          restricted parties.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="severability" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-green-500/10 flex-shrink-0">
                          <FileText className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Severability and Waiver
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Severability
                          </h3>
                          <p>
                            If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and
                            interpreted to accomplish the objectives of such provision to the greatest extent possible under
                            applicable law and the remaining provisions will continue in full force and effect.
                          </p>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Waiver
                          </h3>
                          <p>
                            Except as provided herein, the failure to exercise a right or to require performance of an obligation
                            under these Terms shall not affect a party's ability to exercise such right or require such performance at
                            any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="translation" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-cyan-500/10 flex-shrink-0">
                          <Globe className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Translation Interpretation
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          These Terms and Conditions may have been translated if We have made them available to You on our Service.
                          You agree that the original English text shall prevail in the case of a dispute.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="changes" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-blue-500/10 flex-shrink-0">
                          <FileText className="h-6 w-6 text-blue-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Changes to These Terms and Conditions
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision
                          is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms
                          taking effect. What constitutes a material change will be determined at Our sole discretion.
                        </p>
                        <p>
                          By continuing to access or use Our Service after those revisions become effective, You agree to be bound
                          by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the
                          website and the Service.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="contact" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-green-500/10 flex-shrink-0">
                          <Users className="h-6 w-6 text-green-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Contact Us
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>If you have any questions about these Terms and Conditions, You can contact us:</p>
                        <div className="space-y-2">
                          <p>
                            Email:{" "}
                            <a
                              href="mailto:developers.pyshell@gmail.com"
                              className="hover:underline"
                              style={{ color: "#22c55e" }}
                            >
                              developers.pyshell@gmail.com
                            </a>
                          </p>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-8">
                          Generated using TermsFeed Privacy Policy Generator
                        </p>
                      </div>
                    </div>
                  </section>
                </div>

                <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-300 dark:border-gray-700">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-200 hover:underline"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Back to Home
                  </Link>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <ArrowUp className="h-4 w-4" />
                    Back to Top
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}