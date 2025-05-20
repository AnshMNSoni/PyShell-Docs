import type React from "react"
import Link from "next/link"
import { HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FAQLinkProps {
  faqId: string
  children: React.ReactNode
  className?: string
  showIcon?: boolean
}

export function FAQLink({ faqId, children, className, showIcon = true }: FAQLinkProps) {
  return (
    <Link
      href={`/docs/faq?faq=${faqId}`}
      className={cn("inline-flex items-center gap-1 text-primary hover:underline", className)}
    >
      {children}
      {showIcon && <HelpCircle className="h-3 w-3" />}
    </Link>
  )
}
