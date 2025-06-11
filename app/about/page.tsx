"use client"
import { Github, Linkedin, Mail, Code, Palette, Terminal, Globe, Lightbulb, Figma, Image as ImageIcon } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Ansh Soni",
      role: "Founder of PyShell",
      description: "FullStack Python Developer",
      image: "/as.jpg?height=300&width=300",
      github: "https://github.com/AnshMNSoni/",
      linkedin: "https://linkedin.com/in/anshmnsoni/",
      email: "ansh.mn.soni7505@gmail.com",
      specialties: [
        { icon: Lightbulb, label: "Turning challenges into opportunities." },
        { icon: Code, label: "Software Developer" },
        { icon: Palette, label: "UI/UX Designer" },
      ],
    },
    {
      name: "Priyank Patel",
      role: "Developer of PyShell Website",
      description: "Web and GUI developer",
      image: "/pp.jpg?height=300&width=300",
      github: "https://github.com/Patel-Priyank-1602/",
      linkedin: "https://www.linkedin.com/in/patel-priyank-945131288/",
      email: "patelpriyank2526@gmail.com",
      specialties: [
        { icon: Globe, label: "Applying skills to address real-world needs." },
        { icon: Palette, label: "Web Development" },
        { icon: Code, label: "UI/UX Designer" },
      ],
    },
    {
      name: "Zeel Trivedi",
      role: "Graphic Designer UI/UX",
      description: "Design Enthusiatic",
      image: "/zt.jpg?height=300&width=300",
      github: "https://github.com/zeel46",
      linkedin: "https://www.linkedin.com/in/zeel-t-0301ba2a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      email: "zttrivedi@gmail.com",
      specialties: [
        { icon: Globe, label: "Turning abstract ideas into visuals." },
        { icon: Figma, label: "Figma " },
        { icon: Code, label: "UI/UX Designer" },
      ],
    },
  ]

  return (
    <div className="container max-w-5xl py-4 sm:py-6 md:py-8 px-3 sm:px-4">
      <div className="space-y-4 sm:space-y-6 md:space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-2 sm:space-y-3">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight">About Us</h1>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-2xl mx-auto px-2">
            Meet the passionate developers behind PyShell, working together to revolutionize the terminal experience and
            bring the future of command-line interfaces to developers worldwide.
          </p>
        </div>

        {/* Mission Section */}
        <div className="rounded-lg border p-3 sm:p-4 md:p-6 bg-gradient-to-r from-primary/5 to-primary/10 mx-2 sm:mx-0">
          <div className="text-center space-y-2 sm:space-y-3">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">Our Mission</h2>
            <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-xl mx-auto">
              To redefine and elevate standard tools to the next level they truly deserve - making them more powerful, intuitive, and enjoyable. The terminal is just one example of how we’re transforming conventional experiences into modern, impactful solutions.
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-all duration-300">
                <CardHeader className="text-center pb-2 sm:pb-3">
                  <div className="mx-auto mb-2 sm:mb-3 group">
                    <div className="relative overflow-hidden rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={`${member.name} profile`}
                        className="w-full h-full rounded-full object-cover border-2 border-primary/20 transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement
                          target.src = "/placeholder.svg?height=100&width=100"
                        }}
                      />
                      <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardTitle className="text-base sm:text-lg md:text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-xs sm:text-sm font-medium text-primary px-2">
                    {member.role}
                  </CardDescription>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1 px-2">{member.description}</p>
                </CardHeader>

                <CardContent className="space-y-2 sm:space-y-3">
                  {/* Specialties */}
                  <div className="space-y-2">
                    <h4 className="font-medium text-xs sm:text-sm">Specialties</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {member.specialties.map((specialty, idx) => (
                        <div key={idx} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                          <specialty.icon className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                          <span>{specialty.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 sm:pt-3 border-t">
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm h-8 sm:h-9">
                      <Link href={member.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        GitHub
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="text-xs sm:text-sm h-8 sm:h-9">
                      <Link href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        LinkedIn
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="text-xs sm:text-sm h-8 sm:h-9 col-span-2 sm:col-span-1"
                    >
                      <Link href={`mailto:${member.email}`}>
                        <Mail className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        Email
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Project Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
          <Card className="text-center">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-xl md:text-2xl font-bold text-primary">15+</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Powerful Features</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-xl md:text-2xl font-bold text-primary">5000+</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Lines of Code</CardDescription>
            </CardHeader>
          </Card>
          <Card className="text-center">
            <CardHeader className="pb-2 sm:pb-3">
              <CardTitle className="text-base sm:text-xl md:text-2xl font-bold text-primary">100%</CardTitle>
              <CardDescription className="text-xs sm:text-sm">Open Source</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Timeline */}
        <div className="space-y-4 sm:space-y-6">
          <h2 className="text-base sm:text-xl md:text-2xl font-bold text-center">Our Journey</h2>
          <div className="space-y-3 sm:space-y-4 max-w-xl mx-auto">
            <div className="flex gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
                <div className="w-px h-8 sm:h-10 bg-border"></div>
              </div>
              <div className="flex-1 pb-3 sm:pb-4">
                <h3 className="font-semibold text-xs sm:text-sm">Project Inception</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                  Ansh Soni started developing PyShell with the vision of creating a modern, feature-rich terminal
                  experience.
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
                <div className="w-px h-8 sm:h-10 bg-border"></div>
              </div>
              <div className="flex-1 pb-3 sm:pb-4">
                <h3 className="font-semibold text-xs sm:text-sm">Team Formation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                  Priyank Patel joined the team to enhance the web presence and create a comprehensive documentation
                  website.
                </p>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3">
              <div className="flex flex-col items-center">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary"></div>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-xs sm:text-sm">Present Day</h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5 sm:mt-1">
                  Continuously improving PyShell with new features and maintaining an active open-source community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}