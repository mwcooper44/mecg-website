"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const images = [
  '/images/carousel/100_0548.JPG',
  '/images/carousel/20250402_153917_22C7D3.JPG',
  '/images/carousel/Screenshot 2025-07-16 at 10.42.57 PM.png',
  '/images/carousel/Screenshot 2025-07-16 at 10.42.46 PM.png',
  '/images/carousel/Screenshot 2025-07-16 at 10.42.32 PM.png',
  '/images/carousel/IMG_5437.JPG',
];

const IMAGE_WIDTH = 600 + 40; // 600px image + 40px gap

export default function Carousel() {
  const [paused, setPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>();
  const [offset, setOffset] = useState(0);

  // Duplicate images for seamless loop
  const allImages = [...images, ...images];
  const totalWidth = images.length * IMAGE_WIDTH;

  // Animation loop (left to right)
  useEffect(() => {
    let lastTime = performance.now();
    function animate(time: number) {
      if (!paused) {
        const delta = time - lastTime;
        lastTime = time;
        setOffset((prev) => {
          let next = prev - (delta * 0.10); // speed in px/ms, negative for rightward
          if (next <= -totalWidth) return 0;
          return next;
        });
      } else {
        lastTime = time;
      }
      animationRef.current = requestAnimationFrame(animate);
    }
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
    // eslint-disable-next-line
  }, [paused, totalWidth]);

  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  const handleTouchStart = () => setPaused(true);
  const handleTouchEnd = () => setPaused(false);

  return (
    <div
      className="w-full flex flex-col items-center overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full max-w-7xl overflow-hidden">
        <div
          ref={trackRef}
          className="flex items-center gap-10"
          style={{
            transform: `translateX(${offset}px)`,
            transition: paused ? 'none' : 'transform 0.1s linear',
            width: `${allImages.length * IMAGE_WIDTH}px`,
          }}
        >
          {allImages.map((src, idx) => (
            <React.Fragment key={src + '-' + idx}>
              <div
                className="relative flex flex-col items-center"
                style={{ minWidth: 600, maxWidth: 600 }}
              >
                <Image
                  src={src}
                  alt={`Carousel image ${idx + 1}`}
                  width={600}
                  height={400}
                  className="rounded-2xl border-8 border-mecg-orange object-cover bg-white shadow-xl"
                  style={{ aspectRatio: '3/2' }}
                  priority={idx < images.length}
                />
              </div>
              {/* Gear icon between images, except after last */}
              {idx !== allImages.length - 1 && (
                <span className="text-mecg-orange">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
} 