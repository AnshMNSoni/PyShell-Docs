"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { Mail, MessageSquare, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

export function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://formspree.io/f/meokqvrn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "We'll get back to you as soon as possible.",
        })
        setName("")
        setEmail("")
        setMessage("")
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full py-10 sm:py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Get in Touch</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter">Contact Us</h2>
            <p className="max-w-[700px] text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or feedback about PyShell? We'd love to hear from you.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-5xl py-8 sm:py-12 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl sm:text-2xl">Send us a message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you soon.</CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  id="contact-form"
                  action="https://formspree.io/f/meokqvrn"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Your message"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button type="submit" form="contact-form" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    <>
                      <span className="mr-2">Sending...</span>
                      <Send className="h-4 w-4 animate-pulse" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-4 sm:space-y-6"
          >
            <div className="rounded-lg border p-4 sm:p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium">Email Us</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">We'll respond as soon as possible</p>
                  <a
                    href="mailto:developers.pyshell@gmail.com"
                    className="text-primary hover:underline mt-2 inline-block text-sm"
                  >
                    developers.pyshell@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4 sm:p-6">
              <div className="flex items-center space-x-4">
                <div className="rounded-full bg-primary/10 p-2 sm:p-3">
                  <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-medium">Community Support</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                    Join our community for help and discussions
                  </p>
                  <a
                    href="https://linkedin.com/company/py-shell"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline mt-2 inline-block text-sm"
                  >
                    Community Discussions
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-lg border p-4 sm:p-6 bg-primary/5">
              <h3 className="text-base sm:text-lg font-medium mb-2">Office Hours</h3>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Our team is available Monday through Friday, 10:30 AM to 5:00 PM IST.
              </p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">
                For urgent inquiries, please email us with "URGENT" in the subject line.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}