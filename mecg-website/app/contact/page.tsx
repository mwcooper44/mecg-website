"use client"

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
  const [isPageVisible, setIsPageVisible] = useState(false)

  useEffect(() => {
    setIsPageVisible(true)
  }, [])

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev: typeof formData) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setFormStatus({ success: true, message: "Message sent successfully! We'll get back to you soon." })
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setFormStatus({ success: false, message: result.error || "Failed to send message. Please try again." })
      }
    } catch (error) {
      setFormStatus({ success: false, message: "Network error. Please check your connection and try again." })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className={`min-h-screen bg-mecg-blue-light flex items-start justify-center pt-16 transition-opacity duration-700 ease-out ${
      isPageVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      <main className="w-full">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
              {/* Left: Form */}
              <div className="space-y-6">
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-mecg-orange">
                  Send us a <span className="relative inline-block font-signature text-mecg-orange">message!
                    <span className="absolute left-0 right-0 -bottom-2 h-3 pointer-events-none" style={{ zIndex: -1 }}>
                      <svg width="100%" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="110" cy="10" rx="100" ry="4" fill="#f58e4f" fillOpacity="0.4" />
                      </svg>
                    </span>
                  </span>
                </h1>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="name" className="text-mecg-dark-blue font-semibold mb-2 block text-base sm:text-lg md:text-xl">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue h-11 text-base"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="email" className="text-mecg-dark-blue font-semibold mb-2 block text-base sm:text-lg md:text-xl">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue h-11 text-base"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-mecg-dark-blue font-semibold mb-2 block text-base sm:text-lg md:text-xl">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject..."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue h-11 text-base"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-mecg-dark-blue font-semibold mb-2 block text-base sm:text-lg md:text-xl">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue resize-none text-base"
                    />
                  </div>
                  {formStatus && (
                    <div className={`p-4 rounded-md border ${
                      formStatus.success 
                        ? "bg-green-50 text-green-800 border-green-200" 
                        : "bg-red-50 text-red-800 border-red-200"
                    }`}>
                      {formStatus.message}
                    </div>
                  )}
                  <Button type="submit" className="w-full bg-mecg-dark-blue text-white hover:bg-mecg-orange h-12 text-lg font-semibold" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              {/* Right: Contact Info - Moved closer to right edge */}
              <div className="space-y-8 md:ml-8 md:pr-0">
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-mecg-orange">
                  Connect with us...
                </h2>
                <div className="space-y-6">
                  <Link href="mailto:mecg-board@umich.edu" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-mecg-dark-blue group-hover:scale-105 transition-transform">
                      <Mail className="h-7 w-7 text-white" />
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-mecg-dark-blue font-bold">mecg-board@umich.edu</span>
                  </Link>
                  <Link href="https://www.instagram.com/mecgmichigan/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-500 group-hover:scale-105 transition-transform">
                      <Instagram className="h-7 w-7 text-white" />
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-mecg-dark-blue font-bold">@mecgmichigan</span>
                  </Link>
                  <Link href="https://www.linkedin.com/company/michigan-engineering-consulting-group" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 hover:opacity-80 transition-opacity group">
                    <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-mecg-dark-blue group-hover:scale-105 transition-transform">
                      <Linkedin className="h-7 w-7 text-white" />
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-mecg-dark-blue font-bold">Michigan Engineering Consulting Group</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
