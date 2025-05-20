import type { Metadata } from "next"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "FAQ | PyShell Documentation",
  description: "Frequently Asked Questions about PyShell",
}

export default function FAQPage() {
  return <FAQClientPage />
}
