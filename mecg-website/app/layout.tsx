import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Dancing_Script } from "next/font/google"
import localFont from "next/font/local"
import { Analytics } from '@vercel/analytics/react'
import { track } from '@vercel/analytics'

import "./globals.css"
import Navbar from "@/components/navbar"
import EnhancedFooter from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Load Glacial Indifference as local font
const glacialIndifference = localFont({
  src: [
    {
      path: '../fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/GlacialIndifference-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-glacial',
  display: 'swap',
})

// Load Sacrifice as local font
const sacrifice = localFont({
  src: [
    {
      path: '../fonts/sacrifice-font/SacrificeDemo-8Ox1B.ttf',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-sacrifice',
  display: 'swap',
})

// Load Inter and Dancing Script fonts
const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
})

export const metadata: Metadata = {
  title: "MECG Consulting",
  description: "University of Michigan's Premier Consulting Group",
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${glacialIndifference.className} ${sacrifice.variable} ${dancingScript.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
