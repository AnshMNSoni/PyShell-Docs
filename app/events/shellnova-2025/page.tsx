import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { CertificateModal } from "@/components/certificate-modal"
import {
  Calendar,
  Trophy,
  Users,
  Code,
  Award,
  ExternalLink,
  Github,
  MapPin,
  Clock,
  Star,
  Zap,
  Target,
  Lightbulb,
  Globe,
  Coffee,
  Wifi,
  Video,
  Heart,
  Handshake,
  Pen,
  GitPullRequest,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ShellNova2025() {
  const winners = [
    {
      position: "Winner",
      name: "Prince Patel",
      title: "Data Science & AI Enthusiast",
      location: "Aravalli, Gujarat",
      project: "AI panel, Suggestions, UI improved.",
      description:
        "Added an AI-powered panel to PyShell CLI. Implemented a dynamic suggestion feature for user guidance. Enhanced command-line interaction with intelligent support. Improved the overall UI for clarity and ease of use. Refined layout and design for better user experience. Significantly upgraded the functionality and responsiveness.",
      prize: "$5,000",
      github: "https://github.com/AnshMNSoni/PyShell.git",
      image: "/shellnova/Prince_Patel.jpeg?height=200&width=200",
      skills: ["Python", "AI", "Natural Language Processing", "Shell Scripting", "UI/UX"],
      highlights: ["Smart Suggestion feature to Assist Users", "AI-Powered Panel", "Improved UI"],
      testimonial:
        "It was a truly great Experience being a part of this event! I had a lot of fun contributing and collaborating with such an enthusiastic community. Looking forward to the next edition—and it would be exciting to see it evolve into a tournament-style, team-based competition next time. That format could bring even more energy and innovation to the challenge!",
      projectStats: {
        linesOfCode: 1000,
        commits: 20,
        contributors: 1,
        stars: 8,
      },
    },
  ]

  const eventStats = [
    { label: "Total Registered", value: "30+", icon: Handshake, color: "text-white-600" },
    { label: "Pull Requests", value: "10+", icon: GitPullRequest, color: "text-blue-600" },
    { label: "Mentors Available", value: "3+", icon: Star, color: "text-yellow-600" },
    { label: "Prize", value: "Badge", icon: Trophy, color: "text-red-600" },
  ]

  const eventSchedule = [
    {
      day: "June 16 - 27",
      events: [
        { time: "12 Days", title: "Registration", type: "registration" },
      ],
    },
    {
      day: "June 16 - July 12",
      events: [
        { time: "26 Days", title: "Contribution Phase", type: "contribution-phase" },
      ],
    },
    {
      day: "July 12",
      events: [
        { time: "1 Day", title: "Submission Deadline", type: "submission-deadline" },
      ],
    },
    {
      day: "July 13 - 15",
      events: [
        { time: "3 Day", title: "Review & Judging", type: "review-judging" },
      ],
    },
    {
      day: "July 16",
      events: [
        { time: "1 Day", title: "Result Declared", type: "result-declared" },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner Section */}
      <div className="relative h-[65vh] sm:h-[70vh] md:h-[80vh] min-h-[500px] sm:min-h-[550px] overflow-hidden">
        <Image
          src="/bg.jpeg"
          alt="ShellNova 2025 Banner - Developers coding at hackathon"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl text-white">
              {/* Event Badge */}
              <Badge
                variant="secondary"
                className="mb-2 sm:mb-4 md:mb-6 bg-white/20 text-white border-white/30 text-[10px] xs:text-xs sm:text-lg px-2 sm:px-4 py-1 sm:py-2 flex items-center justify-center w-fit"
              >
                <Calendar className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 mr-1 xs:mr-2" />
                <span className="truncate">June 16 - July 16, 2025 • Online Event</span>
              </Badge>

              {/* Heading */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-6 md:mb-8 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent break-words">
                ShellNova 2025
              </h1>

              {/* Description */}
              <p className="text-base sm:text-xl md:text-2xl mb-4 sm:mb-8 text-gray-200 leading-relaxed max-w-3xl">
                ShellNova is a developer sprint by PyShell, focused on creative, community-driven contributions.
                Participants pick tasks, build impactful features, and grow together.
                It’s more than open-source — it’s innovation and collaboration in action.
                Earn certificates, badges, and a spotlight in the PyShell community!
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs sm:text-lg">
                {/* Participants */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <Award className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">30+ Participants</div>
                    <div className="text-xs sm:text-sm text-gray-300">Global Community</div>
                  </div>
                </div>

                {/* Contributions */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <Users className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                  <div>
                    <div className="font-semibold">15+ Contributions</div>
                    <div className="text-xs sm:text-sm text-gray-300">Top Contributor</div>
                  </div>
                </div>

                {/* Community Support */}
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-4">
                  <Handshake className="w-4 h-4 sm:w-6 sm:h-6 text-rose-400" />
                  <div>
                    <div className="font-semibold break-words">200+ Community Support</div>
                    <div className="text-xs sm:text-sm text-gray-300">Non-stop Innovation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16 max-w-7xl">
        {/* Event Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {eventStats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="p-0">
                  <IconComponent className={`w-8 h-8 sm:w-10 h-10 mx-auto mb-2 sm:mb-3 ${stat.color}`} />
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-1 sm:mb-2">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Event Description */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <Card className="overflow-hidden shadow-xl">
            <CardHeader className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-pink-950/20 p-6 sm:p-8">
              <CardTitle className="flex items-center gap-2 sm:gap-3 text-2xl sm:text-3xl">
                <Award className="w-6 h-6 sm:w-8 h-8" />
                About ShellNova 2025
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 sm:p-8 md:p-10 space-y-6 sm:space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
                <div className="space-y-4 sm:space-y-6">
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    <strong className="text-primary">ShellNova</strong> is a contributor-focused initiative by the <strong className="text-primary">PyShell</strong> - a community-driven challenge that empowers developers to innovate, collaborate, and enhance PyShell, a custom Python-based terminal.

                  </p>
                  <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                    It's not just a typical open-source contribution drive - <strong className="text-primary">ShellNova</strong> is a <strong className="text-primary">creative sprint</strong> where participants select tasks, build meaningful features, and get recognized for their work through certificates, badges, and community spotlight.
                  </p>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <Globe className="w-5 h-5 sm:w-6 h-6 text-blue-600" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Global Reach</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Participants from 10+ City</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <Coffee className="w-5 h-5 sm:w-6 h-6 text-orange-600" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">24/7 Support</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Mentors available</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                    <Wifi className="w-5 h-5 sm:w-6 h-6 text-green-600" />
                    <div>
                      <div className="font-semibold text-sm sm:text-base">Online Event</div>
                      <div className="text-xs sm:text-sm text-muted-foreground">Virtual Participation</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Event Schedule */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Event Schedule</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {eventSchedule.map((day, dayIndex) => (
              <Card key={dayIndex} className="overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-green-500 to-teal-600 text-white p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl">{day.day}</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="p-3 sm:p-4 border-b last:border-b-0 hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <Badge variant="outline" className="font-mono text-xs sm:text-sm">
                          {event.time}
                        </Badge>
                        <div className="flex-1">
                          <div className="font-medium text-sm sm:text-base">{event.title}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Winners Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 sm:mb-6 flex items-center justify-center gap-3 sm:gap-4">
              <Trophy className="w-8 h-8 sm:w-12 h-12 text-yellow-500" />
              Champion of Innovation
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl sm:max-w-4xl mx-auto leading-relaxed">
              Meet the brilliant minds who created groundbreaking solutions that will shape the future of command-line
              tools and developer productivity
            </p>
          </div>

          <div className="space-y-12 sm:space-y-16">
            {winners.map((winner, index) => (
              <Card
                key={index}
                className="relative overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20"
              >
                <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 bg-gradient-to-bl from-yellow-400 via-orange-500 to-red-500 rounded-bl-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 sm:w-10 h-10 text-white" />
                </div>
                <CardContent className="p-6 sm:p-8 md:p-10">
                  <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10 items-start">
                    {/* Winner Image and Basic Info */}
                    <div className="lg:col-span-2 flex flex-col items-center text-center space-y-4 sm:space-y-6">
                      <div className="relative w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 mb-3 sm:mb-4">
                        <Image
                          src={winner.image || "/placeholder.svg"}
                          alt={`${winner.name} - ${winner.title}`}
                          fill
                          className="rounded-full object-cover border-4 border-primary/20 shadow-xl"
                        />
                      </div>
                      <div className="space-y-2 sm:space-y-3">
                        <Badge variant="outline" className="text-sm sm:text-lg px-4 sm:px-6 py-1 sm:py-2 font-bold">
                          {winner.position}
                        </Badge>
                        <div className="text-xs sm:text-sm text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {winner.location}
                        </div>
                      </div>

                      {/* Certificate Button */}
                      <CertificateModal winner={winner} />
                    </div>

                    {/* Winner Details */}
                    <div className="lg:col-span-4 space-y-6 sm:space-y-8">
                      <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3">{winner.name}</h3>
                        <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4 sm:mb-6">{winner.title}</p>
                        <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary mb-4 sm:mb-6">{winner.project}</h4>
                      </div>

                      <p className="text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">{winner.description}</p>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">
                            {winner.projectStats.linesOfCode.toLocaleString()}
                          </div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Lines of Code</div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{winner.projectStats.commits}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Commits</div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{winner.projectStats.contributors}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">Contributors</div>
                        </div>
                        <div className="text-center p-3 sm:p-4 bg-muted/50 rounded-lg">
                          <div className="text-lg sm:text-xl md:text-2xl font-bold text-primary">{winner.projectStats.stars}</div>
                          <div className="text-xs sm:text-sm text-muted-foreground">GitHub Stars</div>
                        </div>
                      </div>

                      {/* Project Highlights */}
                      <div>
                        <h5 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Key Features:</h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                          {winner.highlights.map((highlight, highlightIndex) => (
                            <div key={highlightIndex} className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 bg-muted/50 rounded-lg">
                              <Star className="w-4 h-4 sm:w-5 h-5 text-yellow-500 flex-shrink-0" />
                              <span className="font-medium text-sm sm:text-base">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold mb-3 sm:mb-4 text-lg sm:text-xl">Technologies Used:</h5>
                        <div className="flex flex-wrap gap-2 sm:gap-3">
                          {winner.skills.map((skill, skillIndex) => (
                            <Badge key={skillIndex} variant="secondary" className="text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-2 font-medium">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Testimonial */}
                      <div className="bg-muted/30 p-4 sm:p-6 rounded-lg border-l-4 border-primary">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <Pen className="w-4 h-4 sm:w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                          <div>
                            <p className="italic text-sm sm:text-base text-muted-foreground mb-1 sm:mb-2">"{winner.testimonial}"</p>
                            <p className="text-xs sm:text-sm font-medium">- {winner.name}</p>
                          </div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 pt-4 sm:pt-6">
                        <Button size="lg" className="text-sm sm:text-base" asChild>
                          <Link href={winner.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 sm:w-5 h-5 mr-2" />
                            View Source Code
                            <ExternalLink className="w-3 h-3 sm:w-4 h-4 ml-2" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Participation Certificate Section */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Award className="w-6 h-6 text-green-600" />
              Participation Certificate
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
              Thank you for being a part of ShellNova 2025! Every participant is appreciated. Click the button below to download your participation certificate.
            </p>
          </div>

          <div className="flex justify-center">
            <Button size="lg" className="text-base sm:text-lg" asChild>
              <Link
                href="https://drive.google.com/drive/folders/1utzQ5dbx7gtEAN7Q7QYlkAKzZfxLzws9?usp=drive_link" 
                target="_blank"
                rel="noopener noreferrer"
              >
                🏅 Download Participation Certificate
                <ExternalLink className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}