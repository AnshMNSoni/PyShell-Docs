import type React from "react"
import { cn } from "@/lib/utils"

interface StepsProps {
  children: React.ReactNode
  className?: string
}

export function Steps({ children, className }: StepsProps) {
  return <div className={cn("space-y-8", className)}>{children}</div>
}

interface StepItemProps {
  step: number
  title: string
  children: React.ReactNode
  className?: string
}

export function StepItem({ step, title, children, className }: StepItemProps) {
  return (
    <div className={cn("relative pl-8", className)}>
      <div className="absolute left-0 top-0 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-medium">
        {step}
      </div>
      <h3 className="font-medium">{title}</h3>
      <div className="mt-2 text-muted-foreground">{children}</div>
    </div>
  )
}
