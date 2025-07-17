"use client"

import Image from "next/image"

export default function RotatingGears() {
  return (
    <div className="relative w-full h-[700px] md:h-[900px] overflow-visible mb-8">
      {/* Larger gear (left) - counter-clockwise rotation */}
      <div className="absolute left-[0px] md:top-[200px] top-0 animate-spin-slow z-10">
        {/* Desktop */}
        <Image
          src="/images/gear.png"
          alt="Large rotating gear"
          width={600}
          height={600}
          className="hidden md:block w-[600px] h-[600px] object-contain"
        />
        {/* Mobile */}
        <Image
          src="/images/gear.png"
          alt="Large rotating gear"
          width={400}
          height={400}
          className="block md:hidden w-[400px] h-[400px] object-contain"
        />
      </div>
      {/* Smaller gear (right) - clockwise rotation */}
      <div className="absolute left-[180px] top-[60px] md:left-[350px] md:top-[-175px] animate-spin-reverse">
        {/* Desktop */}
        <Image
          src="/images/gear.png"
          alt="Small rotating gear"
          width={600}
          height={600}
          className="hidden md:block w-[600px] h-[600px] object-contain"
        />
        {/* Mobile */}
        <Image
          src="/images/gear.png"
          alt="Small rotating gear"
          width={400}
          height={400}
          className="block md:hidden w-[400px] h-[400px] object-contain"
        />
      </div>
    </div>
  )
} 