"use client"

import React, { useState, ChangeEvent, FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Instagram, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import PageHeader from "@/components/page-header"

export default function ContactPage() {
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

  // Dummy submit handler for now
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setFormStatus({ success: true, message: "Message sent!" })
      setFormData({ name: "", email: "", subject: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen flex flex-col bg-mecg-dark-blue">
      <main className="flex-1 flex flex-col justify-center">
        <div className="w-full py-0 md:py-16 px-0" style={{ background: '#ccdeff' }}>
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 rounded-lg">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Left: Form */}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-mecg-dark-blue" style={{ fontFamily: 'Geist, Inter, sans-serif' }}>
                  Send us a <span className="relative inline-block font-signature text-mecg-dark-blue">message!
                    <span className="absolute left-0 right-0 -bottom-2 h-3 pointer-events-none" style={{ zIndex: -1 }}>
                      <svg width="100%" height="20" viewBox="0 0 220 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="110" cy="10" rx="100" ry="8" fill="#f58e4f" fillOpacity="0.4" />
                      </svg>
                    </span>
                  </span>
                </h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <Label htmlFor="name" className="text-mecg-dark-blue font-semibold">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue"
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="email" className="text-mecg-dark-blue font-semibold">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-mecg-dark-blue font-semibold">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject..."
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-mecg-dark-blue font-semibold">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Write your message here"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="bg-white text-mecg-dark-blue placeholder-mecg-dark-blue rounded-md border border-mecg-dark-blue"
                    />
                  </div>
                  {formStatus && (
                    <div className={`p-3 rounded-md ${formStatus.success ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
                      {formStatus.message}
                    </div>
                  )}
                  <Button type="submit" className="w-full bg-mecg-dark-blue text-white hover:bg-mecg-orange" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
              {/* Right: Contact Info */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-mecg-dark-blue" style={{ fontFamily: 'Geist, Inter, sans-serif' }}>
                  Connect with us...
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mecg-dark-blue">
                      <Mail className="h-6 w-6 text-white" />
                    </span>
                    <span className="text-lg text-mecg-dark-blue">mecg-board@umich.edu</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-yellow-400 to-purple-500">
                      <Instagram className="h-6 w-6 text-white" />
                    </span>
                    <span className="text-lg text-mecg-dark-blue">@mecgmichigan</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-mecg-dark-blue">
                      <Linkedin className="h-6 w-6 text-white" />
                    </span>
                    <span className="text-lg text-mecg-dark-blue">Michigan Engineering Consulting Group</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer bar as in the image */}
      <footer className="bg-mecg-dark-blue text-white py-6">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Michigan Engineering Consulting Group</span>
            <span className="hidden md:inline">|</span>
            <span>University of Michigan – Ann Arbor</span>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0">
            <Link href="mailto:mecg-board@umich.edu" className="hover:text-mecg-orange"><Mail className="h-5 w-5" /></Link>
            <Link href="https://www.instagram.com/mecgmichigan/" className="hover:text-mecg-orange"><Instagram className="h-5 w-5" /></Link>
            <Link href="https://www.linkedin.com/company/michigan-engineering-consulting-group/posts/?feedView=all" className="hover:text-mecg-orange"><Linkedin className="h-5 w-5" /></Link>
            <span className="font-semibold">Contact Us</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
