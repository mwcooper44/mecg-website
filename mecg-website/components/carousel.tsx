"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

// Hook to safely access window object
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768,
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

const images = [
  '/images/carousel/100_0548.JPG',
  '/images/carousel/20250402_153917_22C7D3.JPG',
  '/images/carousel/Screenshot_DEI_Panel_Event.JPG',
  '/images/carousel/Screenshot_heart.JPG',
  '/images/carousel/Screenshot_MichaelRyan.JPG',
  '/images/carousel/IMG_5437.JPG',
];

export default function Carousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width: windowWidth } = useWindowSize();

  // Fade-in animation when carousel comes into view
  const [carouselRef, carouselInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Infinite scrolling effect like the alumni logo carousel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for container to be fully loaded
    const startAnimation = () => {
      const scrollSpeed = 1.5;
      let animationFrameId: number;
      let scrollPos = 0;
      let lastScrollPos = 0;
      let isMoving = false;
      let retryCount = 0;
      const maxRetries = 5;

      const scroll = () => {
        scrollPos += scrollSpeed;
        // Reset when we've scrolled through the first set of images
        if (scrollPos >= (container.scrollWidth / 2) + 23) {
          scrollPos = 0; // Reset to start of first set
        }
        container.scrollLeft = scrollPos;
        
        // Check if carousel is actually moving
        if (Math.abs(container.scrollLeft - lastScrollPos) > 0) {
          isMoving = true;
        }
        lastScrollPos = container.scrollLeft;
        
        animationFrameId = requestAnimationFrame(scroll);
      };

      const checkAndRestart = () => {
        if (!isMoving || container.scrollLeft === 0) {
          retryCount++;
          console.log(`Carousel not moving, restart attempt ${retryCount}/${maxRetries}...`);
          
          if (retryCount < maxRetries) {
            cancelAnimationFrame(animationFrameId);
            scrollPos = 0;
            isMoving = false;
            lastScrollPos = 0;
            animationFrameId = requestAnimationFrame(scroll);
            
            // Check again in 1 second
            setTimeout(checkAndRestart, 1000);
          } else {
            console.log('Max retries reached, forcing carousel to start...');
            // Force start even if max retries reached
            cancelAnimationFrame(animationFrameId);
            scrollPos = 0;
            isMoving = false;
            lastScrollPos = 0;
            animationFrameId = requestAnimationFrame(scroll);
          }
        } else {
          console.log('Carousel is moving successfully!');
        }
      };

      animationFrameId = requestAnimationFrame(scroll);

      // Start checking after 1 second
      setTimeout(checkAndRestart, 1000);

      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };

    // Small delay to ensure container is ready
    const timeoutId = setTimeout(startAnimation, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div 
      ref={carouselRef}
      className={cn(
        "w-full flex flex-col items-center overflow-hidden transition-all duration-1000 transform",
        carouselInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      )}
    >
      <div className="relative w-full max-w-7xl overflow-hidden">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-mecg-blue-light via-mecg-blue-light/80 to-transparent z-10 pointer-events-none"></div>
        
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-mecg-blue-light via-mecg-blue-light/80 to-transparent z-10 pointer-events-none"></div>
        
        <div className="overflow-hidden">
          <div
            ref={containerRef}
            className="flex gap-10 py-6 overflow-x-auto scrollbar-hide"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              pointerEvents: "none",
              userSelect: "none"
            }}
          >
            {/* First set of images */}
            {images.map((src, index) => (
              <React.Fragment key={`image-1-${index}`}>
                <div
                  className="flex-shrink-0 flex flex-col items-center"
                  style={{ 
                    minWidth: windowWidth < 640 ? 300 : windowWidth < 1024 ? 400 : 600, 
                    maxWidth: windowWidth < 640 ? 300 : windowWidth < 1024 ? 400 : 600 
                  }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-lg sm:rounded-xl md:rounded-2xl border-4 sm:border-6 md:border-8 border-mecg-orange object-cover bg-white shadow-lg md:shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </React.Fragment>
            ))}

            {/* Duplicate images for seamless loop */}
            {images.map((src, index) => (
              <React.Fragment key={`image-2-${index}`}>
                <div
                  className="flex-shrink-0 flex flex-col items-center"
                  style={{ 
                    minWidth: windowWidth < 640 ? 300 : windowWidth < 1024 ? 400 : 600, 
                    maxWidth: windowWidth < 640 ? 300 : windowWidth < 1024 ? 400 : 600 
                  }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-lg sm:rounded-xl md:rounded-2xl border-4 sm:border-6 md:border-8 border-mecg-orange object-cover bg-white shadow-lg md:shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 