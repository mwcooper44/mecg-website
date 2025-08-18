"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Instagram, Linkedin, Twitter, Mail, MapPin, Phone, File, PencilIcon} from "lucide-react"

export default function EnhancedFooter() {
  return (
    <footer className="relative w-full">
      {/* Wave Divider */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute top-0 left-0 w-full h-full"
          fill="currentColor"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="text-mecg-blue-light"
          ></path>
        </svg>
      </div>

      <div className="bg-gray-900">
        <br></br>
        <br></br>
        <br></br>
      </div>

      {/* Main Footer Content */}
      <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo and About */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Image
                  src="/images/mecg-logo.png"
                  alt="MECG"
                  width={200}
                  height={200}
                  className="p-2 rounded-md"
                />
              </div>
              <p className="text-gray-300">
                Michigan Engineering Consulting Group <br />
                University of Michigan - Ann Arbor
              </p>
              <div className="flex space-x-4 mt-6">
                <Link href="" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <PencilIcon className="h-5 w-5" />
                  <span className="sr-only">PencilIcon</span>
                </Link>
                <Link href="https://www.instagram.com/mecgmichigan/" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="https://www.linkedin.com/company/michigan-engineering-consulting-group/posts/?feedView=all" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">Linkedin</span>
                </Link>
                <Link href="" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Mail</span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">Navigation</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/" className="text-gray-300 hover:text-mecg-dark-blue transition-colors">
                  Home
                </Link>
                <Link href="/team" className="text-gray-300 hover:text-mecg-dark-blue transition-colors">
                  Our Team
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-mecg-dark-blue transition-colors">
                  Projects
                </Link>
              </nav>
            </div>

            {/* More Links */}
            <div className="md:col-span-2">
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <nav className="flex flex-col space-y-3">
                <Link href="/join" className="text-gray-300 hover:text-mecg-dark-blue transition-colors">
                  Join Us
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-mecg-dark-blue transition-colors">
                  Contact
                </Link>
                <Link href="/join#faq" className="text-gray-300 hover:text-MECG-white transition-colors">
                  FAQ
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-mecg-dark-blue mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    College of Engineering
                    <br />
                    University of Michigan
                    <br />
                    1221 Beal Ave
                    <br />
                    Ann Arbor, MI 48109
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-mecg-dark-blue mr-3 flex-shrink-0" />
                  <a
                    href="mailto:info@MECGconsulting.org"
                    className="text-gray-300 hover:text-mecg-dark-blue transition-colors"
                  >
                    MECG.board2025@umich.edu
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Michigan Engineering Consulting Group. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm text-gray-400">
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}