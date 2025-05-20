import type { Metadata } from "next"
import PrivacyPolicyClientPage from "./PrivacyPolicyClientPage"

export const metadata: Metadata = {
  title: "Privacy Policy | PyShell Documentation",
  description: "Privacy Policy for PyShell | Docs",
}

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClientPage />
}
