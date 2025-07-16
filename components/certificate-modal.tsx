"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Award, Download, Share2 } from "lucide-react"

interface CertificateModalProps {
  winner: {
    name: string
    position: string
    project: string
    prize: string
  }
}

export function CertificateModal({ winner }: CertificateModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleDownload = () => {
    // Construct the PDF filename based on winner's name
    const fileName = `certificate-${winner.name.replace(/\s+/g, "-").toLowerCase()}.png`
    const filePath = `/shellnova/certificates/${fileName}`
    
    // Create a link to the PDF file
    const link = document.createElement("a")
    link.href = filePath
    link.download = fileName
    
    // Check if the file exists (basic client-side check)
    fetch(filePath)
      .then((response) => {
        if (response.ok) {
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        } else {
          // Fallback to default p.pdf if specific certificate not found
          link.href = "/shellnova/certificates/certificate-Prince-Patel.png"
          link.download = "certificate-Prince-Patel.png"
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
          alert(`Certificate for ${winner.name} not found. Downloading default certificate.`)
        }
      })
      .catch((error) => {
        console.error("Error checking certificate:", error)
        alert("Error accessing certificate. Please try again later.")
      })
  }

  const handleShare = async () => {
    const shareData = {
      title: `ShellNova 2025 Event Certificate - ${winner.name}`,
      text: `Check out my ${winner.position} certificate from ShellNova 2025 Event for the project "${winner.project}"!`,
      url: window.location.href, // In a real app, this could be a unique certificate URL
    }

    try {
      if (navigator.share && navigator.canShare(shareData)) {
        await navigator.share(shareData)
      } else {
        // Fallback: Copy URL to clipboard
        await navigator.clipboard.writeText(shareData.url)
        alert("Certificate link copied to clipboard!")
      }
    } catch (err) {
      console.error("Sharing failed:", err)
      // Fallback: Copy URL to clipboard
      await navigator.clipboard.writeText(shareData.url)
      alert("Certificate link copied to clipboard!")
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm">
          <Award className="w-4 h-4 mr-2" />
          View Certificate
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95vw] max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-base sm:text-lg md:text-xl">
            <Award className="w-4 h-4 sm:w-5 sm:h-5" />
            Winner Certificate - {winner.name}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4 sm:space-y-6">
          {/* Certificate Display */}
          <div
            className="relative bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 p-4 sm:p-6 md:p-8 rounded-lg border-2 border-primary/20"
          >
            <div className="text-center space-y-4 sm:space-y-6">
              {/* Header */}
              <div className="space-y-2">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary">Certificate of Achievement</h2>
                <p className="text-sm sm:text-base md:text-lg text-muted-foreground">ShellNova 2025</p>
              </div>

              {/* Decorative Elements */}
              <div className="flex justify-center space-x-4 my-4 sm:my-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
              </div>

              {/* Main Content */}
              <div className="space-y-3 sm:space-y-4">
                <p className="text-sm sm:text-base md:text-lg">This is to certify that</p>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">{winner.name}</h3>
                <p className="text-sm sm:text-base md:text-lg">has achieved</p>
                <Badge variant="outline" className="text-base sm:text-lg md:text-xl px-4 sm:px-5 md:px-6 py-1 sm:py-2 font-semibold">
                  {winner.position}
                </Badge>
                <p className="text-sm sm:text-base md:text-lg">in the ShellNova 2025 Event</p>
                <p className="text-sm sm:text-base md:text-lg">for the Enhance</p>
                <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-primary">{winner.project}</h4>
              </div>

              {/* Footer */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-primary/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 text-xs sm:text-sm">
                  <div>
                    <p className="font-semibold">Event Date</p>
                    <p className="text-muted-foreground">June 16 - July 16, 2025</p>
                  </div>
                  <div>
                    <p className="font-semibold">Issued by</p>
                    <p className="text-muted-foreground">PyShell</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
            <Button onClick={handleDownload} className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download Certificate
            </Button>
            <Button variant="outline" onClick={handleShare} className="w-full sm:w-auto">
              <Share2 className="w-4 h-4 mr-2" />
              Share Certificate
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}