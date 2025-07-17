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
        <section className="relative pt-4 pb-20 md:pt-8 md:pb-32 overflow-hidden">
          <div className="container-fluid">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Left side - Rotating Gears */}
              <div className="flex-1 flex justify-start">
                <RotatingGears />
              </div>
              
              {/* Right side - Text content */}
              <div className="flex-1 flex flex-col items-start text-left space-y-6">
                {/* Remove the blue background div, keep only the styled span */}
                <span
                  className="block text-orange-400 text-5xl md:text-7xl font-bold italic drop-shadow-lg leading-tight"
                  style={{ textShadow: '2px 4px 8px rgba(0,0,0,0.15)' }}
                >
                  Multifaceted.<br />Driven.<br />Inclusive.
                </span>
                <p className="text-lg md:text-xl text-mecg-dark-blue text-left max-w-3xl font-normal">
                Michigan Engineering Consulting Group is a pro-bono consulting group open to <span className="italic underline">all</span> majors at the University of Michigan.
                </p>
              </div>
            </div>
            <div className="w-full mt-12">
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