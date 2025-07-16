import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Trophy, Users, Code, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export default function EventsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">PyShell Events</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Join our community events, hackathons, and competitions. Connect with fellow developers and showcase your
          shell scripting skills.
        </p>
      </div>

      {/* ShellNova 2025 Banner */}
      <div className="mb-12">
        <Link href="/events/shellnova-2025" className="block group">
          <Card className="relative overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 cursor-pointer group-hover:shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 group-hover:from-blue-600/20 group-hover:to-purple-600/20 transition-all duration-300" />
            <div className="absolute top-4 right-4">
            </div>
            <CardContent className="relative p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">June 16- July 16, 2025</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ShellNova 2025
                  </h2>
                  <p className="text-lg text-muted-foreground mb-6">
                    ShellNova by PyShell is a collaborative developer sprint where you build impactful features and grow with the community. Earn badges, certificates, and get featured for your contributions!
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4" />
                      <span>30+ Participants</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4" />
                      <span>Certificate & Badges</span>
                    </div>
                  </div>
                  <Button className="group-hover:translate-x-1 transition-transform duration-200">
                    View Winners & Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
                    <div className="text-center">
                      <Trophy className="w-16 h-16 mx-auto mb-4 text-yellow-300" />
                      <h3 className="text-2xl font-bold mb-2">Winner Announced!</h3>
                      <p className="text-blue-100 mb-4">
                        Congratulations to Winner
                      </p>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between items-center bg-white/10 rounded px-3 py-2">
                          <span>🥇 Prince Patel - AI panel, suggestions, UI improved.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
