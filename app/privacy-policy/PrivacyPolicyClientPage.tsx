"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Printer,
  Clock,
  Shield,
  Eye,
  Lock,
  FileText,
  Users,
  Globe,
  Trash2,
  AlertTriangle,
  Link2,
  Moon,
  Sun,
  Monitor,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect, useContext, createContext, ReactNode } from "react";

const ThemeContext = createContext({
  theme: "light" as "dark" | "light" | "system",
  setTheme: (theme: "dark" | "light" | "system") => {},
});

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light" | "system">("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "dark"
      | "light"
      | "system"
      | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const isDark = theme === "dark" || (theme === "system" && prefersDark);
      document.documentElement.classList.toggle("dark", isDark);
      localStorage.setItem("theme", theme);
    }
  }, [theme, isMounted]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default function PrivacyPolicyClientPage() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: "introduction", title: "Introduction", icon: FileText },
    { id: "interpretation", title: "Interpretation and Definitions", icon: Eye },
    { id: "collecting-data", title: "Collecting and Using Your Personal Data", icon: Shield },
    { id: "data-retention", title: "Retention of Your Personal Data", icon: Clock },
    { id: "data-transfer", title: "Transfer of Your Personal Data", icon: Globe },
    { id: "delete-data", title: "Delete Your Personal Data", icon: Trash2 },
    { id: "disclosure", title: "Disclosure of Your Personal Data", icon: AlertTriangle },
    { id: "security", title: "Security of Your Personal Data", icon: Lock },
    { id: "childrens-privacy", title: "Children's Privacy", icon: Users },
    { id: "links", title: "Links to Other Websites", icon: Link2 },
    { id: "changes", title: "Changes to this Privacy Policy", icon: FileText },
    { id: "contact", title: "Contact Us", icon: Users },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(progress);

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-black">
        <div className="fixed top-0 left-0 w-full h-1 z-50 bg-gray-200 dark:bg-gray-800">
          <div
            className="h-full bg-green-500 transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%`, backgroundColor: "#22c55e" }}
          />
        </div>

        <div className="container max-w-6xl py-12 px-4 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg" style={{ backgroundColor: "#22c55e20" }}>
                      <Shield className="h-5 w-5" style={{ color: "#22c55e" }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-black dark:text-white">
                        Privacy Policy
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
                      className="flex-1 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => window.history.back()}
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Back
                    </Button>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-4 shadow-lg">
                  <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
                    Contents
                  </h4>
                  <nav className="space-y-1">
                    {sections.map((section) => {
                      const Icon = section.icon;
                      const isActive = activeSection === section.id;
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
                      );
                    })}
                  </nav>
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

            <div className="lg:col-span-3">
              <div className="space-y-8">
                <div className="text-center space-y-6 py-12">
                  <div
                    className="inline-flex items-center justify-center p-4 rounded-2xl mb-6"
                    style={{ backgroundColor: "#22c55e20" }}
                  >
                    <Shield className="h-12 w-12" style={{ color: "#22c55e" }} />
                  </div>
                  <div>
                    <h1 className="scroll-m-20 text-5xl font-bold tracking-tight mb-4 text-black dark:text-white">
                      Privacy Policy
                    </h1>
                    <p className="text-xl max-w-2xl mx-auto leading-relaxed text-gray-600 dark:text-gray-300">
                      This Privacy Policy describes how we collect, use, and share your information
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
                        <p>
                          This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
                          Your information when You use the Service and tells You about Your privacy rights and how the law
                          protects You.
                        </p>
                        <p>
                          We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                          collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been
                          created with the help of the Privacy Policy Generator.
                        </p>
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
                          <p className="mb-4">For the purposes of this Privacy Policy:</p>
                          <div className="grid gap-4">
                            {[
                              { term: "Account", definition: "means a unique account created for You to access our Service or parts of our Service." },
                              { term: "Affiliate", definition: "means an entity that controls, is controlled by or is under common control with a party, where \"control\" means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority." },
                              { term: "Company", definition: "(referred to as either \"the Company\", \"We\", \"Us\" or \"Our\" in this Agreement) refers to PyShell | Docs." },
                              { term: "Cookies", definition: "are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website among its many uses." },
                              { term: "Country", definition: "refers to: Gujarat, India" },
                              { term: "Device", definition: "means any device that can access the Service such as a computer, a cellphone or a digital tablet." },
                              { term: "Personal Data", definition: "is any information that relates to an identified or identifiable individual." },
                              { term: "Service", definition: "refers to the Website." },
                              { term: "Service Provider", definition: "means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used." },
                              { term: "Usage Data", definition: "refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit)." },
                              { term: "You", definition: "means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable." },
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
                            <div
                              className="p-4 rounded-lg bg-gray-100 dark:bg-gray-700/50 border-l-4"
                              style={{ borderLeftColor: "#22c55e" }}
                            >
                              <div className="flex items-start gap-3">
                                <span
                                  className="font-semibold text-sm"
                                  style={{ color: "#22c55e" }}
                                >
                                  Website:
                                </span>
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  refers to PyShell | Docs, accessible from{" "}
                                  <a
                                    href="https://pyshelldocs.netlify.app/"
                                    className="hover:underline"
                                    style={{ color: "#22c55e" }}
                                  >
                                    PyShell Documentation
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="collecting-data" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-purple-500/10 flex-shrink-0">
                          <Shield className="h-6 w-6 text-purple-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Collecting and Using Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Types of Data Collected
                          </h3>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">
                                Personal Data
                              </h4>
                              <p className="mb-3">
                                While using Our Service, We may ask You to provide Us with certain personally identifiable
                                information that can be used to contact or identify You. Personally identifiable information may
                                include, but is not limited to:
                              </p>
                              <div
                                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border-l-4"
                                style={{ borderLeftColor: "#22c55e" }}
                              >
                                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                  Usage Data
                                </span>
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3 text-black dark:text-white">
                                Usage Data
                              </h4>
                              <p className="mb-3">Usage Data is collected automatically when using the Service.</p>
                              <div className="space-y-3">
                                <p>
                                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP
                                  address), browser type, browser version, the pages of our Service that You visit, the time and
                                  date of Your visit, the time spent on those pages, unique device identifiers and other
                                  diagnostic data.
                                </p>
                                <p>
                                  When You access the Service by or through a mobile device, We may collect certain information
                                  automatically, including, but not limited to, the type of mobile device You use, Your mobile
                                  device unique ID, the IP address of Your mobile device, Your mobile operating system, the type
                                  of mobile Internet browser You use, unique device identifiers and other diagnostic data.
                                </p>
                                <p>
                                  We may also collect information that Your browser sends whenever You visit our Service or when
                                  You access the Service by or through a mobile device.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                            Tracking Technologies and Cookies
                          </h3>
                          <p className="mb-4">
                            We use Cookies and similar tracking technologies to track the activity on Our Service and store
                            certain information. Tracking technologies used are beacons, tags, and scripts to collect and track
                            information and to improve and analyze Our Service. The technologies We use may include:
                          </p>

                          <div className="space-y-3 mb-6">
                            <div className="p-4 rounded-lg bg-orange-100/20 dark:bg-orange-900/20 border-l-4 border-orange-500">
                              <p>
                                <strong>Cookies or Browser Cookies.</strong> A cookie is a small file placed on Your Device. You
                                can instruct Your browser to refuse all Cookies or to indicate when a Cookie is being sent.
                                However, if You do not accept Cookies, You may not be able to use some parts of our Service.
                                Unless you have adjusted Your browser setting so that it will refuse Cookies, our Service may use
                                Cookies.
                              </p>
                            </div>
                            <div className="p-4 rounded-lg bg-green-100/20 dark:bg-green-900/20 border-l-4 border-green-500">
                              <p>
                                <strong>Web Beacons.</strong> Certain sections of our Service and our emails may contain small
                                electronic files known as web beacons (also referred to as clear gifs, pixel tags, and
                                single-pixel gifs) that permit the Company, for example, to count users who have visited those
                                pages or opened an email and for other related website statistics (for example, recording the
                                popularity of a certain section and verifying system and server integrity).
                              </p>
                            </div>
                          </div>

                          <p className="mb-4">
                            Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on Your personal computer
                            or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web
                            browser. You can learn more about cookies on TermsFeed website article.
                          </p>
                          <p className="mb-4">
                            We use both Session and Persistent Cookies for the purposes set out below:
                          </p>

                          <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-red-100/20 dark:bg-red-900/20 border border-red-300 dark:border-red-700">
                              <h5 className="font-semibold text-red-600 dark:text-red-300 mb-2">
                                Necessary / Essential Cookies
                              </h5>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="font-medium">Type:</span> Session Cookies
                                </p>
                                <p>
                                  <span className="font-medium">Administered by:</span> Us
                                </p>
                                <p>
                                  <span className="font-medium">Purpose:</span> These Cookies are essential to provide You with
                                  services available through the Website and to enable You to use some of its features. They
                                  help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies,
                                  the services that You have asked for cannot be provided, and We only use these Cookies to
                                  provide You with those services.
                                </p>
                              </div>
                            </div>

                            <div className="p-4 rounded-lg bg-yellow-100/20 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700">
                              <h5 className="font-semibold text-yellow-600 dark:text-yellow-300 mb-2">
                                Cookies Policy / Notice Acceptance Cookies
                              </h5>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="font-medium">Type:</span> Persistent Cookies
                                </p>
                                <p>
                                  <span className="font-medium">Administered by:</span> Us
                                </p>
                                <p>
                                  <span className="font-medium">Purpose:</span> These Cookies identify if users have accepted
                                  the use of cookies on the Website.
                                </p>
                              </div>
                            </div>

                            <div className="p-4 rounded-lg bg-indigo-100/20 dark:bg-indigo-900/20 border border-indigo-300 dark:border-indigo-700">
                              <h5 className="font-semibold text-indigo-600 dark:text-indigo-300 mb-2">
                                Functionality Cookies
                              </h5>
                              <div className="space-y-1 text-sm">
                                <p>
                                  <span className="font-medium">Type:</span> Persistent Cookies
                                </p>
                                <p>
                                  <span className="font-medium">Administered by:</span> Us
                                </p>
                                <p>
                                  <span className="font-medium">Purpose:</span> These Cookies allow us to remember choices You
                                  make when You use the Website, such as remembering your login details or language preference.
                                  The purpose of these Cookies is to provide You with a more personal experience and to avoid
                                  You having to re-enter your preferences every time You use the Website.
                                </p>
                              </div>
                            </div>
                          </div>

                          <p className="mt-4">
                            For more information about the cookies we use and your choices regarding cookies, please visit our
                            Cookies Policy or the Cookies section of our Privacy Policy.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-4 text-black dark:text-white">
                            Use of Your Personal Data
                          </h3>
                          <p className="mb-4">
                            The Company may use Personal Data for the following purposes:
                          </p>
                          <div className="space-y-3">
                            {[
                              {
                                title: "To provide and maintain our Service",
                                desc: "including to monitor the usage of our Service.",
                              },
                              {
                                title: "To manage Your Account",
                                desc: "to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user.",
                              },
                              {
                                title: "For the performance of a contract",
                                desc: "the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service.",
                              },
                              {
                                title: "To contact You",
                                desc: "To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation.",
                              },
                              {
                                title: "To provide You",
                                desc: "with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information.",
                              },
                              {
                                title: "To manage Your requests",
                                desc: "To attend and manage Your requests to Us.",
                              },
                              {
                                title: "For business transfers",
                                desc: "We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred.",
                              },
                              {
                                title: "For other purposes",
                                desc: "We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience.",
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-gray-100 dark:bg-gray-700/50 border-l-4"
                                style={{ borderLeftColor: "#22c55e" }}
                              >
                                <p>
                                  <strong style={{ color: "#22c55e" }}>{item.title}:</strong>{" "}
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {item.desc}
                                  </span>
                                </p>
                              </div>
                            ))}
                          </div>

                          <p className="mt-6 mb-4">
                            We may share Your personal information in the following situations:
                          </p>
                          <div className="space-y-3">
                            {[
                              {
                                title: "With Service Providers",
                                desc: "We may share Your personal information with Service Providers to monitor and analyze the use of our Service, to contact You.",
                              },
                              {
                                title: "For business transfers",
                                desc: "We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.",
                              },
                              {
                                title: "With Affiliates",
                                desc: "We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.",
                              },
                              {
                                title: "With business partners",
                                desc: "We may share Your information with Our business partners to offer You certain products, services or promotions.",
                              },
                              {
                                title: "With other users",
                                desc: "when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.",
                              },
                              {
                                title: "With Your consent",
                                desc: "We may disclose Your personal information for any other purpose with Your consent.",
                              },
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-amber-100/20 dark:bg-amber-900/20 border-l-4 border-amber-500"
                              >
                                <p>
                                  <strong className="text-amber-600 dark:text-amber-300">
                                    {item.title}:
                                  </strong>{" "}
                                  <span className="text-gray-700 dark:text-gray-300">
                                    {item.desc}
                                  </span>
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="data-retention" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-emerald-500/10 flex-shrink-0">
                          <Clock className="h-6 w-6 text-emerald-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Retention of Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in
                          this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with
                          our legal obligations (for example, if we are required to retain your data to comply with applicable
                          laws), resolve disputes, and enforce our legal agreements and policies.
                        </p>
                        <p>
                          The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally
                          retained for a shorter period of time, except when this data is used to strengthen the security or to
                          improve the functionality of Our Service, or We are legally obligated to retain this data for longer
                          time periods.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="data-transfer" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-cyan-500/10 flex-shrink-0">
                          <Globe className="h-6 w-6 text-cyan-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Transfer of Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          Your information, including Personal Data, is processed at the Company's operating offices and in any
                          other places where the parties involved in the processing are located. It means that this information
                          may be transferred to — and maintained on — computers located outside of Your state, province, country
                          or other governmental jurisdiction where the data protection laws may differ than those from Your
                          jurisdiction.
                        </p>
                        <p>
                          Your consent to this Privacy Policy followed by Your submission of such information represents Your
                          agreement to that transfer.
                        </p>
                        <p>
                          The Company will take all steps reasonably necessary to ensure that Your data is treated securely and
                          in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an
                          organization or a country unless there are adequate controls in place including the security of Your
                          data and other personal information.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="delete-data" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-red-500/10 flex-shrink-0">
                          <Trash2 className="h-6 w-6 text-red-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Delete Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-pink-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          You have the right to delete or request that We assist in deleting the Personal Data that We have
                          collected about You.
                        </p>
                        <p>
                          Our Service may give You the ability to delete certain information about You from within the Service.
                        </p>
                        <p>
                          You may update, amend, or delete Your information at any time by signing in to Your Account, if you
                          have one, and visiting the account settings section that allows you to manage Your personal
                          information. You may also contact Us to request access to, correct, or delete any personal information
                          that You have provided to Us.
                        </p>
                        <p>
                          Please note, however, that We may need to retain certain information when we have a legal obligation
                          or lawful basis to do so.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="disclosure" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-orange-500/10 flex-shrink-0">
                          <AlertTriangle className="h-6 w-6 text-orange-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Disclosure of Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-6 leading-relaxed text-gray-700 dark:text-gray-300">
                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Business Transactions
                          </h3>
                          <p>
                            If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be
                            transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a
                            different Privacy Policy.
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Law enforcement
                          </h3>
                          <p>
                            Under certain circumstances, the Company may be required to disclose Your Personal Data if required
                            to do so by law or in response to valid requests by public authorities (e.g. a court or a government
                            agency).
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold mb-3 text-black dark:text-white">
                            Other legal requirements
                          </h3>
                          <p className="mb-3">
                            The Company may disclose Your Personal Data in the good faith belief that such action is necessary
                            to:
                          </p>
                          <div className="space-y-2">
                            {[
                              "Comply with a legal obligation",
                              "Protect and defend the rights or property of the Company",
                              "Prevent or investigate possible wrongdoing in connection with the Service",
                              "Protect the personal safety of Users of the Service or the public",
                              "Protect against legal liability",
                            ].map((item, index) => (
                              <div
                                key={index}
                                className="p-3 rounded-lg bg-orange-100/20 dark:bg-orange-900/20 border-l-4 border-orange-500"
                              >
                                <span className="text-sm text-gray-700 dark:text-gray-300">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section id="security" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-indigo-500/10 flex-shrink-0">
                          <Lock className="h-6 w-6 text-indigo-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Security of Your Personal Data
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          The security of Your Personal Data is important to Us, but remember that no method of transmission
                          over the Internet, or method of electronic storage is 100% secure. While We strive to use
                          commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute
                          security.
                        </p>
                      </div>
                    </div>
                  </section>

                  <section id="childrens-privacy" className="group">
                    <div className="rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800/80 backdrop-blur-sm p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="p-3 rounded-xl bg-pink-500/10 flex-shrink-0">
                          <Users className="h-6 w-6 text-pink-400" />
                        </div>
                        <div>
                          <h2 className="scroll-m-20 text-3xl font-bold tracking-tight mb-2 text-black dark:text-white">
                            Children's Privacy
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                          identifiable information from anyone under the age of 13. If You are a parent or guardian and You are
                          aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that
                          We have collected Personal Data from anyone under the age of 13 without verification of parental
                          consent, We take steps to remove that information from Our servers.
                        </p>
                        <p>
                          If We need to rely on consent as a legal basis for processing Your information and Your country
                          requires consent from a parent, We may require Your parent's consent before We collect and use that
                          information.
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
                          Our Service may contain links to other websites that are not operated by Us. If You click on a third
                          party link, You will be directed to that third party's site. We strongly advise You to review the
                          Privacy Policy of every site You visit.
                        </p>
                        <p>
                          We have no control over and assume no responsibility for the content, privacy policies or practices of
                          any third party sites or services.
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
                            Changes to this Privacy Policy
                          </h2>
                          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                        </div>
                      </div>
                      <div className="prose prose-gray max-w-none space-y-4 leading-relaxed text-gray-700 dark:text-gray-300">
                        <p>
                          We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
                          new Privacy Policy on this page.
                        </p>
                        <p>
                          We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming
                          effective and update the "Last updated" date at the top of this Privacy Policy.
                        </p>
                        <p>
                          You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy
                          Policy are effective when they are posted on this page.
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
                        <p>
                          If you have any questions about this Privacy Policy, You can contact us:
                        </p>
                        <div className="space-y-2">
                          <p>
                            By email: <a href="mailto:support@pyshelldocs.com" className="hover:underline" style={{ color: "#22c55e" }}>support@pyshelldocs.com</a>
                          </p>
                          <p>
                            By visiting this page on our website: <a href="https://pyshelldocs.netlify.app/contact" className="hover:underline" style={{ color: "#22c55e" }}>Contact Page</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}