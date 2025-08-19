"use client"

import React, { useState, useEffect } from "react"
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
          title: "Speed Dating",
          icon: "/images/join/7.png",
          date: "Monday, September 15th",
          time: null,
          location: null,
          description: "Speak to current members in a casual but fast-paced environment."
        },
        {
          id: 8,
          title: "Coffee Chats",
          icon: "/images/join/8.png",
          date: "Tuesday, September 16th - Friday, September 19th",
          time: null,
          location: null,
          description: "Get to know members and our club culture on a more personal level."
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

// Community photos for the Join Our Community section (randomized order)
const communityPhotos = [
  "/images/join/IMG_5088.jpeg",
  "/images/join/100_0640.JPG",
  "/images/join/100_0516.JPG",
  "/images/join/IMG_2727.jpeg",
  "/images/join/100_0658.JPG",
  "/images/join/100_0637.JPG",
  "/images/join/100_0525.JPG",
  "/images/join/IMG_0128.jpeg",
  "/images/join/100_0671.JPG",
  "/images/join/100_0502.JPG"
];

export default function JoinPage() {
  const [activeEvent, setActiveEvent] = useState<number | null>(1);
  const [pictureOrder, setPictureOrder] = useState([1, 2, 3, 4, 5]);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [isPageVisible, setIsPageVisible] = useState(false);

  useEffect(() => {
    setIsPageVisible(true)
  }, []);

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

  const toggleFAQ = (faqId: number) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % communityPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + communityPhotos.length) % communityPhotos.length);
  };

  // Scroll effect for dynamic background - optimized with throttling
  React.useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getEventDetails = () => {
    const event = timelineEvents.find(e => e.id === activeEvent);
    return event || timelineEvents[0];
  };

  const currentEvent = getEventDetails()

  return (
    <div className={`min-h-screen relative overflow-hidden transition-opacity duration-700 ease-out ${
      isPageVisible ? 'opacity-100' : 'opacity-0'
    }`}>
      {/* MECG Blue Light Background */}
      <div 
        className="fixed inset-0 transition-all duration-1000 ease-out bg-mecg-blue-light"
      />
      
      {/* Floating geometric shapes - simplified for performance */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-blue-200/20 rounded-full blur-xl animate-float-slow"
        />
        <div 
          className="absolute top-40 right-20 w-24 h-24 bg-blue-300/15 rounded-full blur-xl animate-float-medium"
        />
        <div 
          className="absolute bottom-40 left-1/4 w-20 h-20 bg-blue-400/10 rounded-full blur-xl animate-float-fast"
        />
      </div>
      
      <main className="flex-1 flex flex-col justify-center relative z-10">
        <div className="w-full px-2 md:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Call to Action Section */}
            <div className="text-center mb-20 pt-20">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-mecg-orange">
                Apply to MECG this Fall!
              </h2>

              <Button asChild className="bg-mecg-dark-blue hover:bg-mecg-orange text-white px-8 py-4 text-lg font-semibold rounded-lg transition-colors duration-300">
                <Link href="https://forms.gle/S4FTRZU5SnGcoyE47" target="_blank" rel="noopener noreferrer">
                  Fall 2025 Interest Form
                </Link>
              </Button>
            </div>

            {/* Orange separator line */}
            <div className="w-full h-1 bg-mecg-orange mb-20 rounded-full"></div>

            {/* Main Timeline Header - Centered */}
            <div className="mb-12 text-center animate-fade-in-delay">
              <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                Fall 2025 Recruitment Timeline
              </h2>
              <div className="w-40 h-1 bg-mecg-dark-blue mx-auto"></div>
            </div>

            {/* Vertical Timeline with Orange Line */}
            <div className="relative pl-2 md:pl-8 mb-16">
              {/* Continuous orange line centered behind all blue icon boxes */}
              <div className="absolute left-10 md:left-16 top-0 bottom-0 w-1 bg-mecg-orange z-0"></div>
              
              {/* Timeline Events */}
              <div className="space-y-6 relative z-10">
                {timelineEvents.map((event, index) => (
                  <div
                    key={event.id}
                    className="flex items-start gap-2 md:gap-4 animate-fade-in-up"
                  >
                    {/* Event Icon positioned to align with orange line */}
                    <div className="relative flex-shrink-0 w-16 md:w-20">
                      {/* Event Icon */}
                      <button
                        onClick={() => setActiveEvent(event.id)}
                        className="w-16 h-16 md:w-20 md:h-20 rounded-lg flex items-center justify-center bg-mecg-dark-blue border-2 border-mecg-dark-blue z-10"
                      >
                        <Image 
                          src={event.icon} 
                          alt={event.title}
                          width={40}
                          height={40}
                          className="w-8 h-8 md:w-10 md:h-10"
                        />
                      </button>
                    </div>
                    
                    {/* Event Details - perfectly aligned with icon */}
                    <div className="flex-1 min-w-0 ml-2">
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl py-3 px-3 md:px-5 shadow-lg border border-gray-200">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="text-lg md:text-xl font-bold text-mecg-dark-blue">
                      {event.title}
                            </h3>
                            <span className="text-xs md:text-sm text-mecg-dark-blue bg-mecg-orange/10 px-2 md:px-3 py-1 rounded-full whitespace-nowrap">
                              {index < 6 ? "Open Rush" : "Closed Rush"}
                            </span>
            </div>

                          {/* Application button for Application Opens event */}
                          {event.id === 3 && (
                            <button 
                              className="bg-mecg-orange hover:bg-mecg-orange/80 text-white font-medium px-3 md:px-4 py-2 rounded-lg transition-colors duration-200 text-sm md:text-base whitespace-nowrap"
                              onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSf4s7Ym6syGEH9egGPvAq0bQLAJ1Tx1eUsuRI5oH9RFHkK1ww/closedform', '_blank')}
                            >
                              Apply Now!
                            </button>
                          )}
                          
                          {/* Zoom button for Office Hours event */}
                          {event.id === 5 && (
                            <button 
                              className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white font-medium px-3 md:px-4 py-2 rounded-lg transition-colors duration-200 text-sm md:text-base whitespace-nowrap"
                              onClick={() => window.open('ZOOM_LINK_HERE', '_blank')}
                            >
                              Join Zoom
                            </button>
                          )}
                          
                          {/* Google Calendar button for other events */}
                          {![3, 5].includes(event.id) && (
                            <button 
                              className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white font-medium px-3 md:px-4 py-2 rounded-lg transition-colors duration-200 text-sm md:text-base whitespace-nowrap"
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
                        
                        {/* Date, Time, and Location - responsive layout */}
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-2">
                          <div className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-mecg-dark-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
                            </svg>
                            <span className="text-sm md:text-base font-bold text-mecg-dark-blue">
                              {event.date}
                            </span>
                            </div>
                          
                          {/* Time with clock icon if available */}
                          {event.time && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                              <span className="text-sm md:text-base font-bold text-mecg-dark-blue">
                              {event.time}
                              </span>
                            </div>
                          )}
                          
                          {/* Location if available */}
                          {event.location && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              <span className="text-sm md:text-base font-bold text-mecg-dark-blue break-words">{event.location}</span>
                            </div>
                          )}
                          
                          {/* Invite-Only for closed rush events */}
                          {index >= 6 && (
                            <div className="flex items-center gap-2">
                              <svg className="w-4 h-4 text-mecg-dark-blue flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                              <span className="text-sm md:text-base font-bold text-mecg-dark-blue">Invite-Only</span>
                            </div>
                          )}
                      </div>

                        {/* Event description for non-application events */}
                        {event.id !== 3 && (
                          <p className="text-sm text-mecg-dark-blue leading-relaxed break-words">
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
            <div className="w-full h-1 bg-mecg-orange mb-20 rounded-full"></div>

                        {/* Pictures and FAQ Section */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start mb-32 animate-fade-in-delay-2">
              {/* Left side - Join Our Community Section */}
              <div className="flex-1 w-full lg:w-auto">
                <div className="text-center mb-6 lg:mb-8">
                  <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                    Join Our Community!!
                  </h2>
                  <div className="w-40 h-1 bg-mecg-dark-blue mx-auto mb-6 lg:mb-8"></div>
                </div>
                <div className="relative px-4 lg:px-0">
                  {/* Main photo display */}
                  <div className="bg-white rounded-3xl p-2 lg:p-4 shadow-lg border border-gray-200 h-64 lg:h-96 w-full max-w-lg mx-auto overflow-hidden">
                    <Image 
                      src={communityPhotos[currentPhotoIndex]}
                      alt={`MECG Community Photo ${currentPhotoIndex + 1}`}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                  
                  {/* Navigation arrows - perfectly centered with the photo */}
                  <div className="absolute -left-2 lg:-left-6 top-1/2 transform -translate-y-1/2 z-40">
                    <button 
                      onClick={prevPhoto}
                      className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white p-2 lg:p-3 rounded-full shadow-lg transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    </div>
                  
                  <div className="absolute -right-2 lg:-right-6 top-1/2 transform -translate-y-1/2 z-40">
                    <button 
                      onClick={nextPhoto}
                      className="bg-mecg-dark-blue hover:bg-mecg-dark-blue/80 text-white p-2 lg:p-3 rounded-full shadow-lg transition-colors duration-200"
                    >
                      <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right side - FAQ Section */}
              <div className="flex-1 w-full lg:w-auto mt-8 lg:mt-0">
                <div className="mb-4 text-center">
                  <h2 className="text-2xl md:text-4xl font-bold text-mecg-dark-blue mb-4">
                    Frequently Asked Questions:
                  </h2>
                  <div className="w-40 h-1 bg-mecg-dark-blue mx-auto mb-2"></div>
                  <div className="flex items-center gap-4">
                    <div 
                      className="w-24 lg:w-32 h-2 rounded-full"
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
                <div className="space-y-3 lg:space-y-4">
                  {/* FAQ Item 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(1)}>
                      <h3 className="text-base lg:text-lg font-semibold text-mecg-dark-blue">
                        What prior experience do I need to join MECG?
                      </h3>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 text-mecg-dark-blue transform transition-transform duration-200 ${openFAQ === 1 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
                    {openFAQ === 1 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm lg:text-base text-mecg-dark-blue leading-relaxed">
                          No prior consulting or professional experience is required. We welcome students from all backgrounds who are genuinely interested in learning about consulting and contributing to MECG. What matters most is enthusiasm, willingness to engage, and the potential to grow into leadership roles within the club.
                    </p>
                  </div>
                    )}

                </div>

                  {/* FAQ Item 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(2)}>
                      <h3 className="text-base lg:text-lg font-semibold text-mecg-dark-blue">
                        What is the expected time commitment for members?
                      </h3>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 text-mecg-dark-blue transform transition-transform duration-200 ${openFAQ === 2 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                  </div>
                    {openFAQ === 2 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm lg:text-base text-mecg-dark-blue leading-relaxed">
                          New members can expect to dedicate about 5-6 hours per week. This includes weekly education meetings, project work, and additional activities like coffee chats, mentorship, and socials.
                    </p>
                  </div>
                    )}
          </div>

                  {/* FAQ Item 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(3)}>
                      <h3 className="text-base lg:text-lg font-semibold text-mecg-dark-blue">
                        Who is eligible to apply—are there restrictions by major or year?
                      </h3>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 text-mecg-dark-blue transform transition-transform duration-200 ${openFAQ === 3 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {openFAQ === 3 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm lg:text-base text-mecg-dark-blue leading-relaxed">
                          MECG is open to all majors and all undergraduate years. We especially encourage freshmen and sophomores to apply, as they have the most time to grow within the club. Juniors and seniors are also eligible, though upperclassmen should note that spots may be more competitive due to limited availability and alignment with club goals. There are no GPA requirements.
                        </p>
                      </div>
                    )}
                  </div>

                  {/* FAQ Item 4 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(4)}>
                      <h3 className="text-base lg:text-lg font-semibold text-mecg-dark-blue">
                        What will my first semester as a member look like?
                      </h3>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 text-mecg-dark-blue transform transition-transform duration-200 ${openFAQ === 4 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {openFAQ === 4 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm lg:text-base text-mecg-dark-blue leading-relaxed">
                          Your first semester will be structured and supportive. New members join a project team, attend weekly education sessions on consulting skills, and participate in workshops and bonding events. You'll also have opportunities to connect socially at club events and retreats. This combination of professional training and community-building ensures you feel prepared and welcomed from the start.
                        </p>
                      </div>
                    )}
                    </div>

                  {/* FAQ Item 5 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 lg:p-4 shadow-lg border border-gray-200">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFAQ(5)}>
                      <h3 className="text-base lg:text-lg font-semibold text-mecg-dark-blue">
                        What does the recruitment process look like?
                      </h3>
                      <svg className={`w-4 h-4 lg:w-5 lg:h-5 text-mecg-dark-blue transform transition-transform duration-200 ${openFAQ === 5 ? 'rotate-180' : 'rotate-0'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                    {openFAQ === 5 && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <p className="text-sm lg:text-base text-mecg-dark-blue leading-relaxed">
                          Recruitment begins with open rush events such as our mass meeting, career panel, and office hours, where you can meet members and learn about MECG. Selected applicants are invited to closed rush, which includes: coffee chats, speed-dating, and interviews.
                          <br /><br />
                          Throughout the process, we look for candidates who show genuine interest, consistency, and engagement.
                        </p>
                  </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom spacing section to ensure proper distance from footer */}
            <div className="h-32 lg:h-40"></div>

          </div>
        </div>
      </main>
    </div>
  )
}
