"use client"
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';

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

  // Infinite scrolling effect like the alumni logo carousel
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Wait for container to be fully loaded
    const startAnimation = () => {
      const scrollSpeed = 1.5;
      let animationFrameId: number;
      let scrollPos = 0;

      const scroll = () => {
        scrollPos += scrollSpeed;
        // Reset when we've scrolled through the first set of images
        if (scrollPos >= (container.scrollWidth / 2) + 23) {
          scrollPos = 0; // Reset to start of first set
        }
        container.scrollLeft = scrollPos;
        animationFrameId = requestAnimationFrame(scroll);
      };

      animationFrameId = requestAnimationFrame(scroll);

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
    <div className="w-full flex flex-col items-center overflow-hidden">
      <div className="relative w-full max-w-7xl overflow-hidden">
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
                  style={{ minWidth: 600, maxWidth: 600 }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-2xl border-8 border-mecg-orange object-cover bg-white shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                  style={{ minWidth: 600, maxWidth: 600 }}
                >
                  <Image
                    src={src}
                    alt={`Carousel image ${index + 1}`}
                    width={600}
                    height={400}
                    className="rounded-2xl border-8 border-mecg-orange object-cover bg-white shadow-xl"
                    style={{ aspectRatio: '3/2' }}
                    priority={index < 3}
                  />
                </div>
                {/* Gear icon between all images */}
                <span className="text-mecg-orange flex items-center">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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