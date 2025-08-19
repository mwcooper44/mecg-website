"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsLoaded(true)
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const toggleCard = (index: number) => {
    setFlippedCards(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const pillars = [
    {
      title: "Professional Development",
      icon: (
        <svg className="w-30 h-30 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      description: "MECG is dedicated to professional growth through resources, workshops, office visits, and networking, aiming to prepare members for consulting roles and long-term career success."
    },
    {
      title: "Education",
      icon: (
        <svg className="w-30 h-30 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      description: "MECG's educational initiatives equip members with technical and analytical skills through hands-on learning, client projects, software tools, and case workshops, bridging the gap between engineering expertise and business acumen."
    },
    {
      title: "Project Experience",
      icon: (
        <svg className="w-30 h-30 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      description: "MECG takes pride in delivering impactful solutions for clients, working on diverse projects like optimizing schedules, market research, and business strategies, providing real-world consulting experience, and fostering collaboration."
    },
    {
      title: "Community",
      icon: (
        <svg className="w-30 h-30 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 2 2 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      description: "MECG values community and collaboration, achieved through social events and mentorship programs, fostering a supportive environment, and creating an inclusive space for people of all majors to explore consulting and build relationships."
    }
  ]

  return (
    <div className={`min-h-screen transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Four Pillars */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/SpeakerPanelCrowd.jpeg"
            alt="MECG Speaker Panel Crowd"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center md:text-left text-orange-400 max-w-[800px] px-4 md:px-0 md:-ml-80">
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            MECG prides itself on the{" "}
            <span className="relative inline-block">
              four pillars
              <div className="absolute -inset-2 md:-inset-3 border-2 border-white opacity-80" style={{ 
                borderRadius: '40% 60% 55% 45% / 60% 40% 65% 35%',
                transform: 'rotate(-3deg)'
              }}></div>
              <div className="absolute -inset-1 md:-inset-2 border border-white opacity-60" style={{ 
                borderRadius: '50% 50% 45% 55% / 55% 45% 50% 50%',
                transform: 'rotate(1deg)'
              }}></div>
            </span>{" "}
            that define our approach and commitment to excellence.
          </h1>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section 
        id="pillars" 
        data-section="pillars" 
        className={`py-12 md:py-20 bg-blue-50 transition-all duration-1000 ${
          visibleSections.has('pillars') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-mecg-dark-blue mb-4 font-signature">
              Our Pillars
            </h2>
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-24 md:w-32 bg-mecg-dark-blue rounded-full"></div>
            </div>
            <p className="text-base md:text-lg text-mecg-dark-blue max-w-2xl mx-auto px-4">
              Flip the card to learn more about why we value each pillar!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="relative h-56 md:h-64 cursor-pointer perspective-1000"
                onClick={() => toggleCard(index)}
              >
                <div
                  className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
                    flippedCards.includes(index) ? 'rotate-y-180' : 'rotate-y-0'
                  }`}
                >
                  {/* Front of card */}
                  <Card className="absolute inset-0 w-full h-full bg-mecg-dark-blue text-white border-0 shadow-lg backface-hidden rounded-xl">
                    <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-6 text-center">
                      <div className="mb-3 md:mb-4 flex justify-center">
                        <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center">
                          {pillar.icon}
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">{pillar.title}</h3>
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 w-full h-full bg-mecg-dark-blue text-white border-0 shadow-lg rotate-y-180 backface-hidden rounded-xl">
                    <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-6 text-center">
                      <p className="text-xs md:text-sm leading-relaxed">{pillar.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our History Section */}
      <section 
        id="history" 
        data-section="history" 
        className={`py-12 md:py-20 bg-white transition-all duration-1000 ${
          visibleSections.has('history') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-mecg-dark-blue mb-6 font-signature">
              Our History
            </h2>
            <div className="flex items-center mb-6 md:mb-8">
              <div className="h-1 w-24 md:w-32 bg-mecg-dark-blue rounded-full"></div>
            </div>
            
            <Card className="bg-mecg-dark-blue text-white p-6 md:p-8 lg:p-12 shadow-xl">
              <CardContent className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg leading-relaxed">
                  The Michigan Engineering Consulting Group (MECG) was founded in 2023 by{" "}
                  <strong>Jonathan Fay</strong> (Mechanical Engineering Class of 2026) and{" "}
                  <strong>Aaryan Singh</strong> (Industrial and Operations Engineering Class of 2026). 
                  The first cohort of members was welcomed during the Winter 2024 semester.
                </p>
                
                <p className="text-base md:text-lg leading-relaxed">
                  Our founders set out to create an inclusive environment where members can tailor their 
                  experience based on their interests, whether that's technical or business-focused projects 
                  and networking. MECG was founded on a{" "}
                  <strong>"what you put in is what you get out"</strong>{" "}
                  <strong>philosophy</strong>, emphasizing personal growth and meaningful work. 
                  In a rapidly evolving technological world, there was a clear demand for a club that 
                  combines both soft and hard skills.
                </p>

                {/* Founder Image */}
                <div className="mt-6 md:mt-8 flex justify-center">
                  <div className="relative">
                    <div className="w-full max-w-sm md:w-96 lg:w-[600px] h-48 md:h-64 lg:h-[400px] rounded-lg overflow-hidden border-4 md:border-8 border-mecg-orange shadow-lg">
                      <Image
                        src="/images/Jon+AaryanFootball.png"
                        alt="MECG Founders Jonathan Fay and Aaryan Singh"
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        id="cta" 
        data-section="cta" 
        className={`py-12 md:py-20 bg-gradient-to-r from-mecg-dark-blue to-mecg-orange transition-all duration-1000 ${
          visibleSections.has('cta') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">
            Ready to Join MECG?
          </h2>
          <p className="text-lg md:text-xl text-white mb-6 md:mb-8 max-w-2xl mx-auto px-4">
            Become part of Michigan's premier consulting group and start your journey toward professional success.
          </p>
          <a
            href="/join"
            className="inline-block bg-white text-mecg-dark-blue px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </section>

      {/* MECG Light Blue Section */}
      <section 
        id="light-blue" 
        data-section="light-blue" 
        className={`py-8 md:py-12 bg-mecg-blue-light transition-all duration-1000 ${
          visibleSections.has('light-blue') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
       
      </section>
    </div>
  )
} 