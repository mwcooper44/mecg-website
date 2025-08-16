"use client"

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

export default function ProjectsPage() {
  const [selectedService, setSelectedService] = useState<string | null>(null)
  const [isServicesVisible, setIsServicesVisible] = useState(false)

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
      if (servicesSection) {
        const rect = servicesSection.getBoundingClientRect()
        if (rect.top < window.innerHeight * 0.8) {
          setIsServicesVisible(true)
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
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
      <section id="services-section" className={`py-20 bg-gradient-to-b from-white to-blue-50 transition-all duration-1000 ${isServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                      className="object-contain filter brightness-0 invert"
                    />
                  </div>
                  <h3 className="text-white font-semibold text-lg">{service.name}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Service Description Box */}
          {selectedService && (
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 animate-fade-in">
              <h3 className="text-2xl font-bold text-mecg-dark-blue mb-4">
                {services.find(s => s.id === selectedService)?.name}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {services.find(s => s.id === selectedService)?.description}
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
