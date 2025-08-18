import Link from "next/link"
import { Button } from "@/components/ui/button"
import TypingEffect from "@/components/typing-effect"
import ParticlesBackground from "@/components/particles-background"
import ScrollSection from "@/components/scroll-section"
import RotatingGears from "@/components/rotating-gears"
import Carousel from "@/components/carousel";

export default function Home() {
  const mottos = [
    "Multifaceted.",
    "Driven.",
    "Inclusive.",
  ]

  return (
    <div className="relative">
      {}
      <div className="relative">
        <ParticlesBackground />
        <section className="relative pt-4 pb-16 md:pt-0 md:pb-32 overflow-hidden">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-8 lg:gap-12">
              {/* Left side - Rotating Gears */}
              <div className="hidden md:flex flex-1 justify-center lg:justify-start order-2 lg:order-1 w-full">
                <RotatingGears />
              </div>
              
              {/* Right side - Text content */}
              <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-3 md:space-y-4 lg:space-y-6 order-1 lg:order-2 w-full">
                {/* Main motto text */}
                <span
                  className="block text-orange-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic drop-shadow leading-tight px-4"
                  style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.1)' }}
                >
                  Multifaceted.<br />Driven.<br />Inclusive.
                </span>
                <p className="text-base sm:text-lg md:text-xl text-mecg-dark-blue text-center lg:text-left max-w-2xl lg:max-w-3xl font-normal px-4">
                Michigan Engineering Consulting Group is a pro-bono consulting group open to <span className="italic underline">all</span> majors at the University of Michigan.
                </p>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-12">
              <Carousel />
            </div>
          </div>
        </section>
      </div>

      {/* Scrolling Sections */}
      
      <ScrollSection />


    </div>
  )
}