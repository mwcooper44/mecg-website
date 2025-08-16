"use client"

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

export default function ProjectsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isServicesVisible, setIsServicesVisible] = useState(false)
  const [isPastClientsVisible, setIsPastClientsVisible] = useState(false)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      id: 'strategy',
      name: 'Strategy',
      icon: '/images/client services/strategy.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'operations',
      name: 'Operations & Management',
      icon: '/images/client services/operations.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'data-analytics',
      name: 'Data Analytics',
      icon: '/images/client services/data-analytics.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'product-dev',
      name: 'Product Development',
      icon: '/images/client services/product-dev.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      id: 'marketing',
      name: 'Marketing',
      icon: '/images/client services/marketing.png',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ]

  const handleServiceClick = (serviceId: string) => {
    setSelectedService(selectedService === serviceId ? null : serviceId)
  }

  useEffect(() => {
    const handleScroll = () => {
      const servicesSection = document.getElementById('services-section')
      const pastClientsSection = document.getElementById('past-clients-section')
      
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsServicesVisible(true)
        }
      }
      
      if (pastClientsSection) {
        const rect = pastClientsSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsPastClientsVisible(true)
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
    <div className="min-h-screen bg-mecg-blue-light">
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
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-left text-mecg-orange px-6 max-w-6xl ml-8 md:ml-16 -mt-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-lg">
            At MECG, we focus on offering a{' '}
            <span className="relative inline-block">
              <span className="relative z-20">diverse</span>
              <div className="absolute inset-0 w-full h-full border-2 border-mecg-blue-light rounded-[50%] transform rotate-6 scale-110 opacity-90"></div>
              <div className="absolute inset-0 w-full h-full border-2 border-mecg-blue-light rounded-[50%] transform -rotate-3 scale-130 opacity-70"></div>
            </span>
            {' '}mix of traditional consulting and tech consulting projects.
          </h1>
        </div>
      </section>

      {/* Services Section with Fade Transition */}
      <section id="services-section" className={`py-20 bg-gradient-to-b from-mecg-blue-light to-mecg-blue-light transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mecg-dark-blue mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-mecg-orange mx-auto"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
            {services.map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.id)}
                className={`
                  relative p-6 rounded-2xl cursor-pointer transition-all duration-300 transform hover:scale-105
                  ${selectedService === service.id 
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

          {/* Service Description Box */}
          {selectedService && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-fade-in">
                          <h3 className="text-2xl font-bold text-mecg-dark-blue mb-4">
              {services.find(s => s.id === selectedService)?.name} Consulting
            </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {services.find(s => s.id === selectedService)?.description}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Past Clients Section */}
      <section id="past-clients-section" className={`py-20 bg-gradient-to-b from-mecg-blue-light to-mecg-blue-light transition-all duration-1000 ${isPastClientsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-mecg-dark-blue mb-4">
              Past Clients
            </h2>
            <div className="w-24 h-1 bg-mecg-orange mx-auto"></div>
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
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Legendary Sports<br/>Xperiences</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 2 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/lynkr.png"
                    alt="Lynkr"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Lynkr</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025 & Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 3 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/frankel-jewish-academy.png"
                    alt="Frankel Jewish Academy"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Frankel Jewish<br/>Academy</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 4 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/dani-plan.png"
                    alt="Dani Plan"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Dani Plan</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 5 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/fired-and-fused.png"
                    alt="Fired and Fused"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Fired and<br/>Fused</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 6 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/probate-pro.png"
                    alt="The Probate Pro"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">The Probate Pro</h3>
                <p className="text-mecg-blue-light text-sm">Winter 2025</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 7 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/michigan-creamery.png"
                    alt="Michigan Creamery"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Michigan Creamery</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 8 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/homeschool-connections.png"
                    alt="Homeschool Connections"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">Homeschool<br/>Connections</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>

              {/* Gear Separator */}
              <div className="flex-shrink-0 flex items-start justify-center w-16 pt-12">
                <svg className="w-8 h-8 text-mecg-orange" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
                </svg>
              </div>

              {/* Client 9 */}
              <div className="flex-shrink-0 text-center w-32 flex flex-col items-center">
                <div className="w-32 h-32 mb-4 flex items-center justify-center">
                  <Image
                    src="/images/client services/store-house.png"
                    alt="The Store House"
                    width={128}
                    height={128}
                    className="object-contain rounded-2xl"
                  />
                </div>
                <h3 className="text-white font-semibold text-base leading-none">The Store House</h3>
                <p className="text-mecg-blue-light text-sm">Fall 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
