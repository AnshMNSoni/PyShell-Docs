import type React from "react"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsSearch } from "@/components/docs-search"
import { Suspense } from "react"
import { SidebarTrigger } from "@/components/sidebar-provider"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
      <DocsSidebar />
      <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
        <div className="mx-auto w-full min-w-0">
          <div className="flex items-center justify-between mb-4">
            <div className="md:hidden">
              <SidebarTrigger />
            </div>
            <div className="w-full max-w-sm ml-auto">
              <Suspense>
                <DocsSearch />
              </Suspense>
            </div>
          </div>
          {children}
        </div>
      </main>
    </div>
  )
}
