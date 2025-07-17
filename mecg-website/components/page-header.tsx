"use client"
import ParticlesBackground from "@/components/particles-background"
import TypingEffect from "@/components/typing-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PageHeaderProps {
  title: string
  descriptions: string[]
  className?: string
  ctaButton?: {
    text: string
    href: string
    variant?: "default" | "outline" | "secondary"
  }
}

export default function PageHeader({ title, descriptions, className = "", ctaButton }: PageHeaderProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Particle Background */}
      <ParticlesBackground className="absolute inset-0 -z-10" />

      {/* Content */}
      <div className="relative py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-white">{title}</h1>
            <div className="h-12 md:h-16">
              <TypingEffect texts={descriptions} className="text-lg md:text-xl font-medium text-white" />
            </div>

            {ctaButton && (

                <Button
                  asChild
                  size="lg"
                  variant={ctaButton.variant || "default"}
                  className="bg-white text-mecg-dark-blue hover:bg-white/90 font-bold text-lg px-8 py-6 shadow-lg"
                >
                  <Link href={ctaButton.href}>{ctaButton.text}</Link>
                </Button>

            )}
          </div>
        </div>
      </div>
    </div>
  )
}
