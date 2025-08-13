"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Event data with PNG icon references
const openRushEvents = [
  {
    id: "festifall",
    title: "FESTIFALL",
    icon: "/images/join/1.png",
    date: "Wed, Aug. 27th",
    time: "7-8 PM",
    location: "@ The Diag (Table XX)",
    description: "Come learn about MECG and other clubs on campus!"
  },
  {
    id: "application-opens",
    title: "APPLICATION OPENS",
    icon: "/images/join/2.png",
    date: "September 4th",
    time: "8 PM",
    location: "Online",
    description: "Applications go live on September 4th (8 PM) following the Mass Meeting and close on September 11th (11:59 PM), giving candidates one week to complete it. Show us why you're passionate about joining MECG. Submit through our Google Form on the website before the deadline."
  },
  {
    id: "mass-meeting",
    title: "MASS MEETING",
    icon: "/images/join/3.png",
    date: "September 4th",
    time: "7-8 PM",
    location: "@ the League (Hussey)",
    description: "Learn about MECG's mission, projects, and opportunities for members. Hear from current members about their experiences in the club. Get details about the recruitment process and ask any questions."
  },
  {
    id: "career-panel",
    title: "CAREER PANEL",
    icon: "/images/join/4.png",
    date: "September 8th",
    time: "8-9 PM",
    location: "@ Palmer Commons (Forum Hall)",
    description: "Attend a special event focused on Diversity, Equity, and Inclusion in MECG. Learn about our commitment to fostering a welcoming and supportive environment. Discuss how DEI initiatives and diverse careers shape our club culture and impact. Hear about the diverse career experiences that members have had in internships, professional opportunities, etc."
  },
  {
    id: "office-hours",
    title: "OFFICE HOURS",
    icon: "/images/join/5.png",
    date: "September 10th",
    time: "6-8 PM",
    location: "Zoom (Virtual)",
    description: "Have personal conversations to learn about their experiences and the club's culture. Ask questions about the recruitment process, applications, or projects."
  },
  {
    id: "application-closes",
    title: "APPLICATION CLOSES",
    icon: "/images/join/6.png",
    date: "September 11th",
    time: "11:59 PM",
    location: "Online",
    description: "All applications must be submitted by this deadline."
  }
]

const closedRushEvents = [
  {
    id: "speed-dating",
    title: "SPEED DATING",
    icon: "/images/join/7.png",
    date: "September 15th",
    time: "6-9 PM (2 back to back sessions)",
    location: "@ Palmer Commons (Great Lakes North)",
    description: "Selected applicants will receive a speed dating event invite. Set up will include a 2:1 or 1:1 ratio for current member to applicant ratio. Get the chance to know their personalities better and whether they would make a good social fit in MECG's community. Room booking starts and ends 15 minutes from the start and end time."
  },
  {
    id: "coffee-chats",
    title: "COFFEE CHATS",
    icon: "/images/join/8.png",
    date: "September 14th - 18th",
    time: "Various Times",
    location: "Dependent on candidate",
    description: "Set up a coffee chat with a current member to connect personally. Schedule the coffee chat themselves given a timeline of a few days this week. Learn more about MECG's teams, culture, and community vibe."
  },
  {
    id: "interviews",
    title: "INTERVIEWS",
    icon: "/images/join/9.png",
    date: "September 21st - 22nd",
    time: "TBD",
    location: "@ Union (Blain)",
    description: "Selected applicants will receive interview invites via email. Interviews will be held in person. Showcase your skills, interests, and alignment with MECG's mission."
  }
]

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState("festifall")

  const getEventDetails = () => {
    const allEvents = [...openRushEvents, ...closedRushEvents]
    return allEvents.find(event => event.id === activeEvent) || openRushEvents[0]
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
            <div className="w-full h-3 bg-[#f58e4f] mb-20 rounded-full"></div>

            {/* Main Timeline Header - Left Aligned */}
            <div className="mb-16 pl-4 md:pl-8">
              <h2 className="text-3xl md:text-4xl font-bold text-[#3f63af] mb-4">
                Fall 2025 Recruitment Timeline
              </h2>
              <div className="flex items-center gap-4">
                <p className="text-lg text-[#3f63af]">
                  The events outlined below include our <strong>open rush</strong> events!
                </p>
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

            {/* Open Rush Events Section - Horizontal Row with Orange Timeline Line */}
            <div className="mb-16 pl-4 md:pl-8">
              <div className="relative">
                {/* Orange timeline line that goes THROUGH/BEHIND the icon cards - USING PNG */}
                <div 
                  className="absolute top-12 left-0 right-0 z-0 h-2"
                  style={{
                    backgroundImage: 'url(/images/join/orange-timeline.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                <div className="flex flex-wrap justify-start gap-8 md:gap-12 mb-8 relative z-10">
                  {openRushEvents.map((event, index) => (
                    <div key={event.id} className="flex flex-col items-center">
                      {/* Event Icon with PNG - BIGGER blue background for white icons */}
                      <button
                        onClick={() => setActiveEvent(event.id)}
                        className={`w-20 h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer bg-[#3f63af] border-2 ${
                          activeEvent === event.id 
                            ? 'border-[#f58e4f] shadow-lg' 
                            : 'border-[#3f63af] hover:border-[#f58e4f]'
                        }`}
                      >
                        <Image 
                          src={event.icon} 
                          alt={event.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </button>
                      
                      {/* Event Title */}
                      <p className="text-sm font-semibold text-[#3f63af] mt-3 text-center max-w-24">
                        {event.title}
                      </p>
                    </div>
                  ))}
                </div>
                
                <p className="text-[#3f63af] mb-8">
                  Click on an event to view more details!
                </p>
              </div>
            </div>

            {/* Event Details Card and Closed Rush Section - Side by Side */}
            <div className="grid md:grid-cols-2 gap-12 items-start pl-4 md:pl-8 mb-8">
              
              {/* Event Details Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
                <div className="text-center mb-4">
                  <p className="text-sm text-[#3f63af] mb-1">
                    {currentEvent.date} • {currentEvent.time}
                  </p>
                  <h3 className="text-xl font-bold text-[#3f63af] mb-2">
                    {currentEvent.title}
                  </h3>
                  <p className="text-sm text-[#3f63af] mb-3">
                    {currentEvent.location}
                  </p>
                </div>
                <p className="text-[#3f63af] text-sm leading-relaxed">
                  {currentEvent.description}
                </p>
              </div>

              {/* Closed Rush Events Section */}
              <div>
                <p className="text-lg text-[#3f63af] mb-6">
                  These events are <strong>closed rush</strong> events, meaning they are invite-only.
                </p>
                
                {/* Curved orange line from subheading to closed rush events */}
                <div className="relative mb-8">
                  <div className="absolute top-0 left-0 w-32 h-2 bg-[#f58e4f] transform -translate-y-2"></div>
                  <div className="absolute top-0 left-32 w-2 h-16 bg-[#f58e4f] transform -translate-y-2"></div>
                  <div className="absolute top-14 left-32 w-32 h-2 bg-[#f58e4f] transform -translate-y-2"></div>
                </div>
                
                <div className="flex flex-wrap justify-start gap-8 md:gap-12">
                  {closedRushEvents.map((event, index) => (
                    <div key={event.id} className="flex flex-col items-center">
                      {/* Event Icon with PNG - BIGGER blue background for white icons */}
                      <button
                        onClick={() => setActiveEvent(event.id)}
                        className={`w-20 h-20 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer bg-[#3f63af] border-2 ${
                          activeEvent === event.id 
                            ? 'border-[#f58e4f] shadow-lg' 
                            : 'border-[#3f63af] hover:border-[#f58e4f]'
                        }`}
                      >
                        <Image 
                          src={event.icon} 
                          alt={event.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </button>
                      
                      {/* Event Title */}
                      <p className="text-sm font-semibold text-[#3f63af] mt-3 text-center max-w-24">
                        {event.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
