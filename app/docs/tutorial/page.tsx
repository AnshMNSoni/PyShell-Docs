import type { Metadata } from "next"
import { TutorialSection } from "@/components/tutorial-section"

export const metadata: Metadata = {
  title: "Tutorial | PyShell Documentation",
  description: "Your step-by-step guide to mastering PyShell - from installation to advanced features",
}

export default function TutorialPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">Tutorial</h1>
        <p className="text-lg text-muted-foreground mt-2">Your comprehensive step-by-step guide to mastering PyShell</p>
      </div>

      <div className="rounded-lg border p-6 bg-gradient-to-r from-primary/5 to-primary/10">
        <h2 className="text-xl font-semibold mb-2">Welcome to PyShell Tutorial!</h2>
        <p className="text-muted-foreground">
          This interactive tutorial will guide you through everything you need to know about PyShell. Follow the 5
          essential steps below to become a PyShell expert. Each step builds on the previous one, so we recommend
          following them in order.
        </p>
      </div>

      <TutorialSection />
    </div>
  )
}
