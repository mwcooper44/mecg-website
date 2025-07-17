"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PresidentsWelcomeProps {
  className?: string
}

// Sample images for the carousel - replace with actual images
const presidentImages = [
  {
    src: "/images/presidentswelcome/pic1.jpeg",
    alt: "Sajni Patel, President of MECG Consulting",
    caption: "Sajni Patel, President of MECG Consulting",
  },
  {
    src: "/images/presidentswelcome/pic2.jpg",
    alt: "Sajni Patel, President of MECG Consulting",
    caption: "",
  },
  {
    src: "/images/presidentswelcome/pic3.JPEG",
    alt: "Sajni Patel, President of MECG Consulting",
    caption: "",
  },
  {
    src: "/images/presidentswelcome/pic4.JPG",
    alt: "Sajni Patel, President of MECG Consulting",
    caption: "",
  },
  {
    src: "/images/presidentswelcome/pic5.jpg",
    alt: "Sajni Patel, President of MECG Consulting",
    caption: "",
  },
]

export default function PresidentsWelcome({ className }: PresidentsWelcomeProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  // Handle image navigation
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % presidentImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + presidentImages.length) % presidentImages.length)
  }


  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextImage()
    }

    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevImage()
    }
  }

  return (
    <div className={cn("relative py-12 md:py-24 bg-gray-50 dark:bg-gray-800", className)}>
      <div className="container px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">President&apos;s Welcome</h2>
            <div className="mt-2 h-1 w-20 bg-mecg-dark-blue mx-auto"></div>
          </div>

          {/* Image Carousel */}
          <div
            className="relative mb-10 rounded-xl overflow-hidden shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="aspect-[16/11] relative">
              {presidentImages.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "absolute inset-0 transition-opacity duration-500",
                    index === currentImageIndex ? "opacity-100" : "opacity-0",
                  )}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-sm md:text-base">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full"
              onClick={(e) => {
                e.preventDefault()
                prevImage()
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous image</span>
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white rounded-full"
              onClick={(e) => {
                e.preventDefault()
                nextImage()
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next image</span>
            </Button>

            {/* Dots indicator */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
              {presidentImages.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all",
                    index === currentImageIndex ? "bg-white w-4" : "bg-white/50",
                  )}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* President's Letter Card */}
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-6 md:p-10 space-y-6">
              <div className="text-lg font-medium text-mecg-dark-blue">Hello Everyone, and Welcome!</div>

              <p className="text-muted-foreground">
                On behalf of MECG Consulting Group, thank you for taking the time to learn more about who we are and
                what we do. MECG is more than just an undergraduate consulting organization at the University of
                Michigan–it&apos;s a vibrant community of over 50 diverse members who come together to grow
                professionally and personally.
              </p>

              <div className="relative pl-4 border-l-4 border-mecg-dark-blue py-2 italic">
                <p className="text-muted-foreground">
                  For me, MECG has been one of the most rewarding aspects of my college experience. I still remember
                  walking into my first MECG event as a nervous sophomore, overwhelmed by the chaos of recruiting
                  season. Yet, from the very first interaction, I felt at home.
                </p>
              </div>

              <p className="text-muted-foreground">
                The genuine support, kindness, and encouragement I received from members made all the difference.
                Whether I needed guidance on navigating my career, someone to laugh with after a long day, or just a
                group to study with during finals, MECG was always there, turning every challenge into an opportunity to
                grow together.
              </p>

              <p className="text-muted-foreground">
                The professional development I&apos;ve gained through MECG is unparalleled. When I first joined, I knew
                very little about consulting, but the incredible people here were always willing to help. Whether it was
                teaching me the fundamentals of consulting at 2 AM, explaining what different firms look for, or casing
                with me tirelessly during my summer recruiting, they never hesitated to share their time and knowledge.
              </p>

              <p className="text-muted-foreground">
                MECG has an inspiring history that I&apos;m proud to be a part of. Since its founding in 2012, MECG has
                grown into a dynamic organization that partners with clients of all sizes – from local businesses to
                innovative startups to industry leaders – spanning industries and sectors around the country.
              </p>

              <p className="text-muted-foreground">
                If you&apos;re considering joining us, I encourage you to attend our recruiting events and connect with
                our members. These events are a great way to see firsthand what makes MECG so special.
              </p>

              <p className="text-muted-foreground">
                Thank you again for your interest, and I can&apos;t wait to meet you. MECG changed my college journey
                for the better, and I hope it can do the same for you.
              </p>

              <div className="mt-8 space-y-1 text-center">
                <div className="font-signature text-5xl text-mecg-dark-blue">Sajni Patel</div>
                <p className="text-sm font-medium">Sajni Patel</p>
                <p className="text-xs text-muted-foreground">President of MECG Consulting, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
