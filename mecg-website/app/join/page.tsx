"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

// Event data with updated descriptions and details
const timelineEvents = [
  {
    id: 1,
    title: "Festifall",
    icon: "/images/join/1.png",
    date: "Wednesday, August 27th",
    time: "7:00 - 8:30 PM",
    location: "The Diag",
    description: "Come learn about MECG and other clubs on campus!"
  },
          {
          id: 2,
          title: "Mass Meeting",
          icon: "/images/join/3.png",
          date: "Wednesday, September 4th",
          time: "7:00 - 8:00 PM",
          location: "Michigan League (Hussey room)",
          description: "Learn about MECG's mission, community, and opportunities for members."
        },
        {
          id: 3,
          title: "Application Opens",
          icon: "/images/join/2.png",
          date: "Wednesday, September 4th",
          time: "8:00 PM",
          location: null,
          description: "Explain why you would like to be a part of MECG."
        },
  {
    id: 4,
    title: "Career Panel",
    icon: "/images/join/4.png",
    date: "Monday, September 8th",
    time: "8:00 - 9:00 PM",
    location: "Palmer Commons (Forum Hall room)",
    description: "Hear about members' diverse career experiences."
  },
  {
    id: 5,
    title: "Office Hours",
    icon: "/images/join/5.png",
    date: "Wednesday, September 10th",
    time: "6:00 - 8:00 PM",
    location: "Zoom",
    description: "Ask questions about the club, recruitment process, or application."
  },
  {
    id: 6,
    title: "Application Closes",
    icon: "/images/join/6.png",
    date: "Thursday, September 11th",
    time: null,
    location: null,
    description: "All applications must be submitted by this deadline."
  },
          {
          id: 7,
          title: "Coffee Chats",
          icon: "/images/join/8.png",
          date: "Monday, September 15th - Thursday, September 18th",
          time: null,
          location: null,
          description: "Get to know members and our club culture on a more personal level."
        },
        {
          id: 8,
          title: "Speed Dating",
          icon: "/images/join/7.png",
          date: "Monday, September 15th",
          time: null,
          location: null,
          description: "Speak to current members in a casual but fast-paced environment."
        },
        {
          id: 9,
          title: "Interviews",
          icon: "/images/join/9.png",
          date: "Sunday, September 21st and Monday, September 22nd",
          time: null,
          location: null,
          description: "Showcase your skills, interests, and alignment with MECG's mission and activities."
        }
];

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState<number | null>(1);
  const [pictureOrder, setPictureOrder] = useState([1, 2, 3]);

  const handlePictureClick = (pictureId: number) => {
    setPictureOrder(prev => {
      const newOrder = [...prev];
      const clickedIndex = newOrder.indexOf(pictureId);
      const frontPicture = newOrder[0];
      
      // Move clicked picture to front
      newOrder.splice(clickedIndex, 1);
      newOrder.unshift(pictureId);
      
      return newOrder;
    });
  };

  const getEventDetails = () => {
    const event = timelineEvents.find(e => e.id === activeEvent);
    return event || timelineEvents[0];
  };

  const currentEvent = getEventDetails()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <main className="flex-1 flex flex-col justify-center">
        <div className="w-full px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Call to Action Section */}
            <div className="text-center mb-20 pt-20">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-mecg-orange">
                Apply to MECG this Fall!
              </h1>

              <Button asChild className="bg-mecg-dark-blue hover:bg-mecg-orange text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-300">
                <Link href="https://forms.gle/S4FTRZU5SnGcoyE47" target="_blank" rel="noopener noreferrer">
                  Fall 2025 Interest Form
                </Link>
              </Button>
            </div>

            {/* Orange separator line */}
            <div className="w-full h-0.5 bg-mecg-orange mb-20 rounded-full"></div>

            {/* Main Timeline Header - Left Aligned */}
            <div className="mb-12 pl-4 md:pl-8">
              <h2 className="text-2xl md:text-3xl font-bold text-mecg-dark-blue mb-4">
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
            <div className="relative pl-4 md:pl-8 mb-16">
              {/* Continuous orange line centered behind all blue icon boxes */}
              <div className="absolute left-16 top-0 bottom-0 w-1 bg-mecg-orange z-0"></div>
              
              {/* Timeline Events */}
              <div className="space-y-6 relative z-10">
                {timelineEvents.map((event, index) => (
                  <div key={event.id} className="flex items-start gap-4">
                    {/* Event Icon positioned to align with orange line */}
                    <div className="relative flex-shrink-0 w-20">
                      {/* Event Icon */}
                      <button
                        onClick={() => setActiveEvent(event.id)}
                        className="w-20 h-20 rounded-lg flex items-center justify-center bg-mecg-dark-blue border-2 border-mecg-dark-blue z-10"
                      >
                        <Image 
                          src={event.icon} 
                          alt={event.title}
                          width={40}
                          height={40}
                          className="w-10 h-10"
                        />
                      </button>
                    </div>
                    
                    {/* Event Details - perfectly aligned with icon */}
                    <div className="flex-1 max-w-6xl ml-2">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl py-3 px-5 shadow-lg border border-gray-200">
                        <div className="flex items-center gap-4 mb-0.5">
                          <h3 className="text-xl font-bold text-mecg-dark-blue">
                            {event.title}
                          </h3>
                          <span className="text-sm text-mecg-dark-blue bg-mecg-orange/10 px-3 py-1 rounded-full">
                            {index < 6 ? "Open Rush" : "Closed Rush"}
                          </span>
                          
                          {/* Application button for Application Opens event */}
                          {event.id === 3 && (
                            <button 
                              className="bg-mecg-orange hover:bg-mecg-orange/80 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 ml-auto"
                              onClick={() => window.open('APPLICATION_LINK_HERE', '_blank')}
                            >
                              Apply Now!
                            </button>
                          )}
                          
                          {/* Zoom button for Office Hours event */}
                          {event.id === 5 && (
                            <button 
                              className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 ml-auto"
                              onClick={() => window.open('ZOOM_LINK_HERE', '_blank')}
                            >
                              Join Zoom
                            </button>
                          )}
                          
                          {/* Google Calendar button for other events */}
                          {![3, 5].includes(event.id) && (
                            <button 
                              className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 ml-auto"
                              onClick={() => {
                                const eventTitle = `MECG ${event.title}`;
                                const eventDate = event.date;
                                const eventTime = event.time;
                                const eventLocation = event.location;
                                const eventDescription = event.description;
                                
                                // Format date for Google Calendar (convert to YYYYMMDD format)
                                const formatDateForGoogle = (dateStr: string): string => {
                                  // Hardcode the dates for Fall 2025 to avoid parsing issues
                                  const dateMap: { [key: string]: string } = {
                                    'Wednesday, August 27th': '20250827',
                                    'Wednesday, September 4th': '20250904',
                                    'Monday, September 8th': '20250908',
                                    'Wednesday, September 10th': '20250910',
                                    'Thursday, September 11th': '20250911',
                                    'Monday, September 15th - Thursday, September 18th': '20250915',
                                    'Monday, September 15th': '20250915',
                                    'Sunday, September 21st and Monday, September 22nd': '20250921'
                                  };
                                  
                                  return dateMap[dateStr] || '20250901';
                                };
                                
                                // Format time for Google Calendar
                                const formatTimeForGoogle = (timeStr: string): string => {
                                  if (!timeStr) return '';
                                  
                                  // Hardcode the times to avoid parsing issues
                                  const timeMap: { [key: string]: string } = {
                                    '7:00 - 8:30 PM': '1900/2100',
                                    '7:00 - 8:00 PM': '1900/2000',
                                    '8:00 PM': '2000/2000',
                                    '8:00 - 9:00 PM': '2000/2100',
                                    '6:00 - 8:00 PM': '1800/2000'
                                  };
                                  
                                  return timeMap[timeStr] || '';
                                };
                                
                                // Get full address for location
                                const getFullAddress = (location: string): string => {
                                  if (!location) return '';
                                  
                                  if (location.includes('Michigan League')) {
                                    return '911 N University Ave, Ann Arbor, MI 48109';
                                  } else if (location.includes('Palmer Commons')) {
                                    return '100 Washtenaw Ave, Ann Arbor, MI 48109';
                                  } else if (location === 'The Diag') {
                                    return 'The Diag, University of Michigan, Ann Arbor, MI 48109';
                                  } else if (location === 'Zoom') {
                                    return 'Zoom Meeting';
                                  }
                                  return location;
                                };
                                
                                // Build description with room information
                                const buildDescription = (description: string, location: string): string => {
                                  let desc = description;
                                  
                                  if (location && (location.includes('Michigan League') || location.includes('Palmer Commons'))) {
                                    const roomMatch = location.match(/\((.*?)\)/);
                                    if (roomMatch) {
                                      const room = roomMatch[1];
                                      desc += `\n\nRoom: ${room}`;
                                    }
                                  }
                                  
                                  return desc;
                                };
                                
                                const date = formatDateForGoogle(eventDate);
                                const time = formatTimeForGoogle(eventTime || '');
                                const location = getFullAddress(eventLocation || '');
                                const description = buildDescription(eventDescription, eventLocation || '');
                                
                                let googleCalendarUrl;
                                
                                if (time) {
                                  // Event with specific time
                                  const [startTime, endTime] = time.split('/');
                                  googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${date}T${startTime}00/${date}T${endTime}00&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
                                } else {
                                  // All-day event
                                  googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventTitle)}&dates=${date}/${date}&details=${encodeURIComponent(description)}&location=${encodeURIComponent(location)}`;
                                }
                                
                                window.open(googleCalendarUrl, '_blank');
                              }}
                            >
                              Add to Google Calendar
                            </button>
                          )}
                        </div>
                        
                        {/* Date, Time, and Location on same line */}
                        <div className="flex items-center gap-4 mb-1">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-mecg-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
                            </svg>
                            <span className="text-base font-bold text-mecg-dark-blue">
                              {event.date}
                            </span>
                          </div>
                          
                          {/* Time with clock icon if available */}
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-base font-bold text-mecg-dark-blue">
                                {event.time}
                              </span>
                            </div>
                          )}
                          
                          {/* Location if available */}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-base font-bold text-mecg-dark-blue">{event.location}</span>
                            </div>
                          )}
                          
                          {/* Invite-Only for closed rush events */}
                          {index >= 6 && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              <span className="text-base font-bold text-mecg-dark-blue">Invite-Only</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Event description for non-application events */}
                        {event.id !== 3 && (
                          <p className="text-sm text-mecg-dark-blue leading-relaxed">
                            {event.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Orange separator line */}
            <div className="w-full h-0.5 bg-mecg-orange mb-20 rounded-full"></div>

            {/* Pictures and FAQ Section */}
            <div className="flex gap-12 items-start">
              {/* Left side - Stacked picture boxes */}
              <div className="flex-1 max-w-md">
                <div className="relative">
                  {/* Picture boxes with dynamic ordering */}
                  {pictureOrder.map((pictureId, index) => (
                    <div 
                      key={pictureId}
                      className="bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 h-64 flex items-center justify-center absolute cursor-pointer hover:shadow-xl transition-all duration-300"
                      style={{
                        top: `${index * 2}px`,
                        left: `${index * 2}px`,
                        zIndex: 30 - index * 10,
                        transform: `rotate(${index === 0 ? 0 : index === 1 ? 2 : -1}deg)`
                      }}
                      onClick={() => handlePictureClick(pictureId)}
                    >
                      <span className="text-mecg-dark-blue text-lg">Picture {pictureId}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right side - FAQ Section */}
              <div className="flex-1">
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-mecg-dark-blue mb-4">
                    Frequently Asked Questions
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

                {/* FAQ Items */}
                <div className="space-y-4">
                  {/* FAQ Item 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-mecg-dark-blue">
                        Who is eligible to apply to MECG?
                      </h3>
                      <svg className="w-5 h-5 text-mecg-dark-blue transform rotate-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-mecg-dark-blue">
                        So, what does MECG look for in candidates?
                      </h3>
                      <svg className="w-5 h-5 text-mecg-dark-blue transform rotate-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-mecg-dark-blue">
                        What does the time commitment look like for members?
                      </h3>
                      <svg className="w-5 h-5 text-mecg-dark-blue transform rotate-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>

                  {/* FAQ Item 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-mecg-dark-blue">
                        How do I apply?
                      </h3>
                      <svg className="w-5 h-5 text-mecg-dark-blue transform rotate-0 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  )
}
