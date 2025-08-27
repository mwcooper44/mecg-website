"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { useState, useEffect } from "react"
import { track } from '@vercel/analytics'

export default function AboutPage() {
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [isPageVisible, setIsPageVisible] = useState(false)
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())

  useEffect(() => {
    setIsPageVisible(true)
    
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
      icon: "/images/pro-dev.png",
      description: "MECG is dedicated to professional growth through resources, workshops, office visits, and networking, aiming to prepare members for consulting roles and long-term career success."
    },
    {
      title: "Education",
      icon: "/images/education.png",
      description: "MECG's educational initiatives equip members with technical and analytical skills through hands-on learning, client projects, software tools, and case workshops, bridging the gap between engineering expertise and business acumen."
    },
    {
      title: "Project Experience",
      icon: "/images/project.png",
      description: "MECG takes pride in delivering impactful solutions for clients, working on diverse projects like optimizing schedules, market research, and business strategies, providing real-world consulting experience, and fostering collaboration."
    },
    {
      title: "Community",
      icon: "/images/community.png",
      description: "MECG values community and collaboration, achieved through social events and mentorship programs, fostering a supportive environment, and creating an inclusive space for people of all majors to explore consulting and build relationships."
    }
  ]

  return (
    <div className={`min-h-screen transition-opacity duration-700 ease-out ${isPageVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Hero Section with Four Pillars */}
      <section className="relative h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/SpeakerPanelCrowd.jpeg"
            alt="MECG Speaker Panel Crowd"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-left text-mecg-orange px-4 sm:px-6 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl ml-4 sm:ml-6 md:ml-8 lg:ml-16 -mt-8 sm:-mt-12 md:-mt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight drop-shadow-lg">
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
          </h2>
        </div>
      </section>

      {/* Our Pillars Section */}
      <section 
        id="pillars" 
        data-section="pillars" 
        className={`py-12 md:py-20 bg-mecg-blue-light transition-all duration-1000 ${
          visibleSections.has('pillars') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
              Our Pillars
            </h2>
            <div className="w-40 h-1 bg-mecg-dark-blue mx-auto mb-4"></div>
            <p className="text-mecg-dark-blue text-base md:text-lg">Flip the card to learn more about why we value each pillar!</p>
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
                          <Image
                            src={pillar.icon}
                            alt={pillar.title}
                            width={128}
                            height={128}
                            className="w-full h-full object-contain filter brightness-0 invert"
                          />
                        </div>
                      </div>
                      <h3 className="text-lg md:text-xl font-bold">{pillar.title}</h3>
                    </CardContent>
                  </Card>

                  {/* Back of card */}
                  <Card className="absolute inset-0 w-full h-full bg-mecg-dark-blue text-white border-0 shadow-lg rotate-y-180 backface-hidden rounded-xl">
                    <CardContent className="flex flex-col items-center justify-center h-full p-4 md:p-6 text-center">
                      <p className="text-sm md:text-base" style={{ lineHeight: '1.1' }}>{pillar.description}</p>
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
        className={`py-12 md:py-20 bg-mecg-blue-light transition-all duration-1000 ${
          visibleSections.has('history') ? 'opacity-100 translate-y-0' : 'opacity-100 translate-y-0'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4 text-center">
              Our History
            </h2>
            <div className="w-40 h-1 bg-mecg-dark-blue mx-auto mb-6"></div>
            
            <Card className="bg-mecg-dark-blue text-white p-6 md:p-8 shadow-xl">
              <CardContent className="space-y-4 md:space-y-6">
                <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
                  <div className="flex-1 space-y-4">
                    <p className="text-base md:text-lg leading-relaxed text-left">
                      Michigan Engineering Consulting Group (MECG) was founded in 2023 by{" "}
                      <strong>Jonathan Fay</strong> (Mechanical Engineering, Class of 2026) and{" "}
                      <strong>Aaryan Singh</strong> (Industrial and Operations Engineering, Class of 2026) with the vision of creating a space where students could grow personally, professionally, and socially. What began as an idea between two students quickly took shape, and by Winter 2024, MECG welcomed its first cohort of members.
                    </p>
                    
                    <p className="text-base md:text-lg leading-relaxed text-left">
                      When MECG was founded, the University of Michigan lacked strong opportunities for non-business students to explore consulting. MECG filled that gap, offering students of all majors a chance to acquire business acumen, gain project experience, and collaborate <strong>regardless of their prior background or academic level</strong>.
                    </p>
                  </div>

                  {/* Founder Image - positioned to the right of first two paragraphs */}
                  <div className="flex-shrink-0">
                    <div className="w-full max-w-sm lg:w-80 xl:w-96 h-48 md:h-64 lg:h-80 rounded-lg overflow-hidden border-4 md:border-6 border-mecg-orange shadow-lg">
                      <Image
                        src="/images/Jon+AaryanFootball.png"
                        alt="MECG Founders Jonathan Fay and Aaryan Singh"
                        width={400}
                        height={320}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom two paragraphs that continue below the image */}
                <div className="space-y-4">
                  <p className="text-base md:text-lg leading-relaxed text-left">
                    As the club expanded, so did the opportunities. Members began taking on technical and business-focused projects, connecting through coffee chats, building cross-disciplinary teams, and touring top firms. With each semester, MECG has evolved into <strong>more than just a consulting club</strong>, it has become a place where students can create their own paths while contributing to meaningful work and building a closer community.
                  </p>

                  <p className="text-base md:text-lg leading-relaxed text-left">
                    Today, MECG reflects both the growth of its members and the rapid changes of the world around us. By meeting the growing demand to <strong>combine both hard and soft skills</strong>, MECG continues to prepare students to thrive in consulting and beyond, carrying forward the founding vision to cultivate students growth for a successful career.
                  </p>
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
            onClick={() => track('apply_now_clicked', { location: 'about_page_cta' })}
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