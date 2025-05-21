import type { Metadata } from "next"
import ApiReferenceContent from "./api-reference-content"

export const metadata: Metadata = {
  title: "API Reference | PyShell Documentation",
  description: "Explore the available APIs that PyShell integrates with",
}

export default function ApiReferencePage() {
  return <ApiReferenceContent />
}
