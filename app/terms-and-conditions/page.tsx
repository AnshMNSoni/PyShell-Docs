import type { Metadata } from "next"
import TermsAndConditionsClientPage from "./TermsAndConditionsClientPage"

export const metadata: Metadata = {
  title: "Terms and Conditions | PyShell Documentation",
  description: "Terms and Conditions for PyShell | Docs",
}

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClientPage />
}
