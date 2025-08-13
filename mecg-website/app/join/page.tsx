"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Event data with updated descriptions and details
const timelineEvents = [
  {
    id: "festifall",
    title: "FESTIFALL",
    icon: "/images/join/1.png",
    date: "Wednesday, August 27th",
    time: "7-8 PM",
    location: "@ The Diag",
    description: "Come learn about MECG and other clubs on campus!"
  },
  {
    id: "mass-meeting",
    title: "MASS MEETING",
    icon: "/images/join/3.png",
    date: "Wednesday, September 4th",
    time: "7-8 PM",
    location: "@ The League (Hussey)",
    description: "Learn about MECG's mission, community, and opportunities for members."
  },
  {
    id: "application-opens",
    title: "APPLICATION OPENS",
    icon: "/images/join/2.png",
    date: "Wednesday, September 4th",
    time: "8 PM",
    location: "Online",
    description: "Explain why you would like to be a part of MECG."
  },
  {
    id: "career-panel",
    title: "CAREER PANEL",
    icon: "/images/join/4.png",
    date: "Sunday, September 8th",
    time: "8-9 PM",
    location: "@ Palmer Commons (Forum Hall)",
    description: "Hear about members' diverse career experiences."
  },
  {
    id: "office-hours",
    title: "OFFICE HOURS",
    icon: "/images/join/5.png",
    date: "Tuesday, September 10th",
    time: "6-8 PM",
    location: "Zoom (Virtual)",
    description: "Ask questions about the club, recruitment process, or application."
  },
  {
    id: "application-closes",
    title: "APPLICATION CLOSES",
    icon: "/images/join/6.png",
    date: "Wednesday, September 11th",
    time: "11:59 PM",
    location: "Online",
    description: "All applications must be submitted by this deadline."
  },
  {
    id: "speed-dating",
    title: "SPEED DATING",
    icon: "/images/join/7.png",
    date: "Sunday, September 15th",
    time: "",
    location: "",
    description: "Speak to current members in a casual but fast-paced environment."
  },
  {
    id: "coffee-chats",
    title: "COFFEE CHATS",
    icon: "/images/join/8.png",
    date: "Saturday, September 14th - Wednesday, September 18th",
    time: "",
    location: "",
    description: "Get to know members and our club culture on a more personal level."
  },
  {
    id: "interviews",
    title: "INTERVIEWS",
    icon: "/images/join/9.png",
    date: "Saturday, September 21st - Sunday, September 22nd",
    time: "",
    location: "",
    description: "Showcase your skills, interests, and alignment with MECG's mission and activities."
  }
]

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState("festifall")

  const getEventDetails = () => {
    return timelineEvents.find(event => event.id === activeEvent) || timelineEvents[0]
  }

  const currentEvent = getEventDetails()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <main className="flex-1 flex flex-col justify-center">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Call to Action Section */}
            <div className="text-center mb-20 pt-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-mecg-orange">
                Apply to MECG this Fall!
              </h1>
              <p className="text-xl text-mecg-dark-blue mb-8 max-w-3xl mx-auto">
                Want to receive information about our Fall 2025 rush process? Fill out this form!
              </p>
              <Button asChild className="bg-mecg-dark-blue hover:bg-mecg-orange text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-300">
                <Link href="https://forms.gle/S4FTRZU5SnGcoyE47" target="_blank" rel="noopener noreferrer">
                  Fall 2025 Interest Form
                </Link>
              </Button>
            </div>

            {/* Orange separator line */}
            <div className="w-full h-1 bg-mecg-orange mb-20 rounded-full"></div>

            {/* Main Timeline Header - Left Aligned */}
            <div className="mb-16 pl-4 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                Fall 2025 Recruitment Timeline
              </h2>
              <div className="flex items-center gap-4">
                <div 
                  className="w-32 h-2 rounded-full"
                  style={{
                    backgroundImage: 'url(/images/blue-line.png)',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                ></div>
              </div>
            </div>

            {/* Vertical Timeline with Orange Line */}
            <div className="relative pl-4 md:pl-8 mb-20">
              {/* Continuous orange line centered behind all icons */}
              <div className="absolute left-20 top-0 bottom-0 w-1 bg-mecg-orange z-0"></div>
              
              {/* Timeline Events */}
              <div className="space-y-8 relative z-10">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="flex items-start gap-6">
                    {/* Event Icon */}
                    <button
                      onClick={() => setActiveEvent(event.id)}
                      className="w-20 h-20 rounded-lg flex items-center justify-center bg-mecg-dark-blue border-2 border-mecg-dark-blue flex-shrink-0"
                    >
                      <Image 
                        src={event.icon} 
                        alt={event.title}
                        width={40}
                        height={40}
                        className="w-10 h-10"
                      />
                    </button>
                    
                    {/* Event Details */}
                    <div className="flex-1">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-4 mb-3">
                          <h3 className="text-xl font-bold text-mecg-dark-blue">
                            {event.title}
                          </h3>
                          <span className="text-sm text-mecg-dark-blue bg-mecg-orange/10 px-3 py-1 rounded-full">
                            {index < 6 ? "Open Rush" : "Closed Rush"}
                          </span>
                        </div>
                        <p className="text-sm text-mecg-dark-blue mb-2">
                          {event.date}
                        </p>
                        {event.time && event.location && (
                          <>
                            <p className="text-sm text-mecg-dark-blue mb-2">
                              {event.time}
                            </p>
                            <p className="text-sm text-mecg-dark-blue mb-3">
                              {event.location}
                            </p>
                          </>
                        )}
                        {index >= 6 && (
                          <p className="text-sm text-mecg-dark-blue mb-3 font-semibold">
                            Invite-Only
                          </p>
                        )}
                        <p className="text-sm text-mecg-dark-blue leading-relaxed">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
