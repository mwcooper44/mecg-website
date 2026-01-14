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
  '/images/carousel/20251116_235836_2827D0.JPEG',
  '/images/carousel/IMG_9274.jpg',
  '/images/carousel/IMG_9278.jpg',
  '/images/carousel/IMG_9347.JPG',
  '/images/carousel/IMG_9371.jpg',
  '/images/carousel/IMG_9391.jpg',
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
                    minWidth: windowWidth < 640 ? 250 : windowWidth < 1024 ? 350 : 500, 
                    maxWidth: windowWidth < 640 ? 250 : windowWidth < 1024 ? 350 : 500 
                  }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={500}
                    height={333}
                    className="rounded-lg sm:rounded-xl md:rounded-2xl border-4 sm:border-6 md:border-8 border-mecg-orange object-cover bg-white shadow-lg md:shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
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
                    minWidth: windowWidth < 640 ? 250 : windowWidth < 1024 ? 350 : 500, 
                    maxWidth: windowWidth < 640 ? 250 : windowWidth < 1024 ? 350 : 500 
                  }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={500}
                    height={333}
                    className="rounded-lg sm:rounded-xl md:rounded-2xl border-4 sm:border-6 md:border-8 border-mecg-orange object-cover bg-white shadow-lg md:shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.08 2.14 13.82 2 13.53 2h-4c-.29 0-.55.14-.74.38l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.22-.08-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98c0 .33.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.19.24.45.38.74.38h4c.29 0 .55-.14.74-.38l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
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