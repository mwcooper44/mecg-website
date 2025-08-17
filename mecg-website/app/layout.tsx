import type React from "react"
import type { Metadata } from "next"
import { Inter, Dancing_Script, Lora } from "next/font/google"
import localFont from "next/font/local"

import "./globals.css"
import Navbar from "@/components/navbar"
import EnhancedFooter from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Load Glacial Indifference as local font
const glacialIndifference = localFont({
  src: [
    {
      path: '../public/fonts/GlacialIndifference-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GlacialIndifference-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GlacialIndifference-Italic.otf',
      weight: '400',
      style: 'italic',
    },
  ],
  variable: '--font-glacial',
})

// Load Inter, Dancing Script, and Lora fonts
const inter = Inter({ subsets: ["latin"] })
const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-signature",
})
const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "MECG Consulting",
  description: "University of Michigan's Premier Consulting Group",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${glacialIndifference.className} ${dancingScript.variable} ${lora.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <EnhancedFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
