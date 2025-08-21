"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [isProjectsVisible, setIsProjectsVisible] = useState(false)
  const [isPastClientsVisible, setIsPastClientsVisible] = useState(false)
  const [isTimelineVisible, setIsTimelineVisible] = useState(false)
  const [isPageVisible, setIsPageVisible] = useState(false)

const projects = [
  {
      id: 'strategy',
      name: 'Strategy',
      icon: '/images/client services/strategy.png',
      description: 'We help organizations define their vision, set strategic priorities, and create actionable roadmaps for sustainable growth and competitive advantage.'
    },
    {
      id: 'operations',
      name: 'Operations & Management',
      icon: '/images/client services/operations.png',
      description: 'Our team analyzes workflows, identifies bottlenecks, and implements solutions to streamline operations and reduce costs while maintaining quality.'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: '/images/client services/data-analytics.png',
      description: 'We help organizations make data-driven decisions, identify trends, and uncover opportunities for optimization and growth.'
    },
    {
      id: 'product-dev',
      name: 'Product Development',
      icon: '/images/client services/product-dev.png',
      description: 'We help companies develop innovative tech focus products and internal workflows that meet customer needs and drive business success.'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: '/images/client services/marketing.png',
      description: 'We help organizations build strong brand identities, reach target audiences effectively, and drive customer engagement and loyalty.'
    }
  ]

  const handleProjectClick = (serviceId: string) => {
    setSelectedProject(selectedProject === serviceId ? null : serviceId)
  }

  useEffect(() => {
    setIsPageVisible(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects-section')
      const pastClientsSection = document.getElementById('past-clients-section')
      const timelineSection = document.getElementById('timeline-section')
      
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsProjectsVisible(true)
        }
      }
      
      if (pastClientsSection) {
        const rect = pastClientsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsPastClientsVisible(true)
        }
      }
      
      if (timelineSection) {
        const rect = timelineSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsTimelineVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const startScrolling = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true)
      const container = scrollContainerRef.current
      const scrollWidth = container.scrollWidth - container.clientWidth
      
      const scrollToEnd = () => {
        if (container.scrollLeft >= scrollWidth) {
          // Stop scrolling when reaching the end
          setIsScrolling(false)
        } else {
          container.scrollLeft += 2
          requestAnimationFrame(scrollToEnd)
        }
      }
      
      scrollToEnd()
    }
  }

  const scrollToStart = () => {
    if (scrollContainerRef.current && !isScrolling) {
      setIsScrolling(true)
      const container = scrollContainerRef.current
      
      const scrollToBeginning = () => {
        if (container.scrollLeft <= 0) {
          // Stop scrolling when reaching the start
          setIsScrolling(false)
        } else {
          container.scrollLeft -= 2
          requestAnimationFrame(scrollToBeginning)
        }
      }
      
      scrollToBeginning()
    }
  }

  const stopScrolling = () => {
    setIsScrolling(false)
  }

  return (
    <div className={`min-h-screen bg-gradient-to-b from-blue-100 via-mecg-blue-light to-mecg-blue-light transition-opacity duration-700 ease-out ${
      isPageVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* Landing Section */}
      <section className="relative h-[95vh] flex items-center justify-start overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/client services/IMG_0087.JPG"
            alt="MECG Consulting Event"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-left text-mecg-orange px-4 sm:px-6 max-w-2xl sm:max-w-3xl md:max-w-4xl lg:max-w-5xl ml-4 sm:ml-6 md:ml-8 lg:ml-16 -mt-8 sm:-mt-12 md:-mt-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-8 leading-tight drop-shadow-lg">
            At MECG, we focus on offering a{' '}
            <span className="relative inline-block">
              <span className="relative z-20">diverse</span>
              <div className="absolute inset-0 w-full h-full border-2 border-mecg-blue-light rounded-[50%] transform rotate-6 scale-110 opacity-90"></div>
              <div className="absolute inset-0 w-full h-full border-2 border-mecg-blue-light rounded-[50%] transform -rotate-3 scale-130 opacity-70"></div>
            </span>
            {' '}mix of traditional consulting and tech consulting projects.
          </h2>
        </div>
      </section>

      {/* Projects Section with Fade Transition */}
      <section id="projects-section" className={`py-20 transition-all duration-1000 ${isProjectsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
                      {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                Our Services
              </h2>
              <div className="w-40 h-1 bg-mecg-dark-blue mx-auto mb-4"></div>
              <p className="text-mecg-dark-blue text-base md:text-lg">Click on any card below to learn more!</p>
            </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {projects.map((service) => (
              <div
                key={service.id}
                onClick={() => handleProjectClick(service.id)}
                className={`
                  relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${selectedProject === service.id 
                    ? 'bg-mecg-orange shadow-lg' 
                    : 'bg-mecg-dark-blue hover:bg-mecg-orange shadow-md'
                  }
                `}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 relative">
                    <Image
                      src={service.icon}
                      alt={service.name}
                      fill
                      className={`object-contain filter brightness-0 invert ${service.id === 'strategy' || service.id === 'data-analytics' ? 'scale-150' : 'scale-125'}`}
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg text-center leading-tight">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Project Description Box */}
          {selectedProject && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-fade-in">
                          <h3 className="text-2xl font-bold text-mecg-dark-blue mb-4">
              {projects.find(s => s.id === selectedProject)?.name} Consulting
            </h3>
              <p className="text-mecg-dark-blue text-lg leading-relaxed">
                {projects.find(s => s.id === selectedProject)?.description}
              </p>
            </div>
          )}
        </div>
      </section>



      {/* Project Timeline Section */}
      <section id="timeline-section" className="py-20">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isTimelineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
                                    <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                          Project Timeline
                        </h2>
            <div className="w-40 h-1 bg-mecg-dark-blue mx-auto"></div>
                      </div>

          {/* Timeline Container */}
                      <div className="relative">
            {/* Main Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-mecg-dark-blue transform -translate-y-1/2 z-0"></div>
            
            {/* Timeline Items - Desktop */}
            <div className="relative z-10 hidden md:flex justify-between items-center max-w-6xl mx-auto">
              {/* Initial Contact - Above Line */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-mecg-dark-blue text-center mb-4">Initial Contact</h3>
                <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/client services/first-contact.png"
                    alt="Initial Contact"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Scoping - Below Line */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/client services/scoping.png"
                    alt="Scoping"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-mecg-dark-blue text-center">Scoping</h3>
              </div>

              {/* Midterm Deliverable - Above Line */}
              <div className="flex flex-col items-center">
                <h3 className="text-lg font-semibold text-mecg-dark-blue text-center mb-4">Midterm Deliverable</h3>
                <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                  <Image
                    src="/images/client services/midterm.png"
                    alt="Midterm Deliverable"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                          </div>
                      </div>

                            {/* Final Deliverable - Below Line */}
              <div className="flex flex-col items-center">
                <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg shadow-lg overflow-hidden">
                  <Image
                    src="/images/client services/final.png"
                    alt="Final Deliverable"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-mecg-dark-blue text-center">Final Deliverable</h3>
              </div>
                            </div>

            {/* Timeline Items - Mobile (Scrollable) */}
            <div className="relative z-10 md:hidden overflow-x-auto pb-4">
              <div className="flex space-x-8 min-w-max px-4">
                                {/* Initial Contact - Above Line */}
                <div className="flex flex-col items-center min-w-[200px]">
                  <h3 className="text-mecg-dark-blue font-bold text-lg text-center mb-4">Initial Contact</h3>
                  <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/images/client services/first-contact.png"
                      alt="Initial Contact"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Scoping - Below Line */}
                <div className="flex flex-col items-center min-w-[200px]">
                  <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/images/client services/scoping.png"
                      alt="Scoping"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-mecg-dark-blue text-center">Scoping</h3>
                </div>

                {/* Midterm Deliverable - Above Line */}
                <div className="flex flex-col items-center min-w-[200px]">
                  <h3 className="text-lg font-semibold text-mecg-dark-blue text-center mb-4">Midterm Deliverable</h3>
                  <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/images/client services/midterm.png"
                      alt="Midterm Deliverable"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                              </div>

                {/* Final Deliverable - Below Line */}
                <div className="flex flex-col items-center min-w-[200px]">
                  <div className="w-36 h-36 bg-mecg-dark-blue rounded-full flex items-center justify-center mb-4 border-4 border-white shadow-lg overflow-hidden">
                    <Image
                      src="/images/client services/final.png"
                      alt="Final Deliverable"
                      width={80}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-mecg-dark-blue font-semibold text-lg text-center">Final Deliverable</h3>
                </div>
              </div>
                                      </div>
                            </div>

          {/* Additional Info Box */}
          <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-mecg-dark-blue mb-4 text-center">What to Expect</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-mecg-dark-blue mb-2">Project Duration</h4>
                <p className="text-mecg-dark-blue">Typically 10-12 weeks per semester, with weekly check-ins and milestone reviews.</p>
              </div>
              <div>
                <h4 className="font-semibold text-mecg-dark-blue mb-2">Team Structure</h4>
                <p className="text-mecg-dark-blue">Dedicated team of 5-8 consultants led by a project manager and strategic lead.</p>
              </div>
              <div>
                <h4 className="font-semibold text-mecg-dark-blue mb-2">Deliverables</h4>
                <p className="text-mecg-dark-blue">Comprehensive reports, presentations, and actionable recommendations tailored to the client's needs.</p>
              </div>
              <div>
                <h4 className="font-semibold text-mecg-dark-blue mb-2">Implementation Guidance</h4>
                <p className="text-mecg-dark-blue">Guidance for post-project implementation to ensure successful execution.</p>
              </div>
                      </div>
          </div>
        </div>
      </section>



      {/* Past Clients Section */}
      <section id="past-clients-section" className="py-20">
        <div className={`container mx-auto px-6 transition-all duration-1000 transform ${
          isPastClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Header */}
          <div className="text-center mb-16">
                                    <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                          Past Clients
                        </h2>
            <div className="w-40 h-1 bg-mecg-dark-blue mx-auto"></div>
          </div>

          {/* Scrollable Client Logos Box */}
          <div className="bg-mecg-dark-blue rounded-3xl pl-12 pr-8 pt-8 pb-6 overflow-hidden relative group">
            <div 
              ref={scrollContainerRef}
              className="flex items-start overflow-x-auto pb-4 scrollbar-hide space-x-6"
              onMouseEnter={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const mouseX = e.clientX - rect.left
                const containerWidth = rect.width
                
                if (mouseX > containerWidth * 0.8) {
                  // Right edge - scroll to end
                  startScrolling()
                } else if (mouseX < containerWidth * 0.2) {
                  // Left edge - scroll to start
                  scrollToStart()
                }
              }}
              onMouseLeave={stopScrolling}
              onMouseMove={(e) => {
                if (!isScrolling) {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const mouseX = e.clientX - rect.left
                  const containerWidth = rect.width
                  
                  if (mouseX > containerWidth * 0.8) {
                    // Right edge - scroll to end
                    startScrolling()
                  } else if (mouseX < containerWidth * 0.2) {
                    // Left edge - scroll to start
                    scrollToStart()
                  }
                }
              }}
            >
              {/* Client 1 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/legendary-sports-xperiences.png"
                    alt="Legendary Sports Xperiences"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Legendary Sports<br/>Xperiences</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 2 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/lynkr.png"
                    alt="Lynkr"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Lynkr</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025 & Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 3 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/frankel-jewish-academy.png"
                    alt="Frankel Jewish Academy"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Frankel Jewish<br/>Academy</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 4 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/dani-plan.png"
                    alt="Dani Plan"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Dani Plan</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 5 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/fired-and-fused.png"
                    alt="Fired and Fused"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Fired and<br/>Fused</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 6 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/probate-pro.png"
                    alt="The Probate Pro"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">The Probate Pro</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 7 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/michigan-creamery.png"
                    alt="Michigan Creamery"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Michigan Creamery</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 8 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/homeschool-connections.png"
                    alt="Homeschool Connections"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Homeschool<br/>Connections</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <Image
                  src="/images/Gear.png"
                  alt="Gear separator"
                  width={32}
                  height={32}
                  className="w-8 h-8 object-contain"
                  style={{ filter: 'brightness(0) saturate(100%) invert(48%) sepia(79%) saturate(2476%) hue-rotate(18deg) brightness(101%) contrast(101%)' }}
                />
              </div>

              {/* Client 9 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/store-house.png"
                    alt="The Store House"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl max-w-[128px] max-h-[128px]"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">The Store House</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom spacing section to ensure proper distance from footer */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* This section provides proper spacing before the footer */}
        </div>
      </section>
    </div>
  )
}
