"use client"

import Image from "next/image"

export default function RotatingGears() {
  return (
    <div className="hidden md:block relative w-full h-[700px] md:h-[900px] overflow-visible mb-8">
      {/* Larger gear (left) - counter-clockwise rotation */}
      <div className="absolute left-[0px] md:top-[200px] top-0 animate-spin-slow z-10">
        {/* Desktop */}
        <Image
          src="/images/Gear.png"
          alt="Large rotating gear"
          width={600}
          height={600}
          className="w-[600px] h-[600px] object-contain"
        />
      </div>
      {/* Smaller gear (right) - clockwise rotation */}
      <div className="absolute left-[80px] top-[60px] md:left-[340px] md:top-[-175px] animate-spin-reverse">
        {/* Desktop */}
        <Image
          src="/images/Gear.png"
          alt="Small rotating gear"
          width={600}
          height={600}
          className="w-[600px] h-[600px] object-contain"
        />
      </div>
    </div>
  )
} 