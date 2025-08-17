"use client"

import Image from "next/image"

export default function RotatingGears() {
  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] overflow-visible mb-2 md:mb-4">
      {/* Larger gear (left) - counter-clockwise rotation */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-0 md:top-[200px] md:transform-none animate-spin-slow z-10">
        {/* Mobile Small */}
        <Image
          src="/images/gear.png"
          alt="Large rotating gear"
          width={200}
          height={200}
          className="block sm:hidden w-[200px] h-[200px] object-contain"
        />
        {/* Mobile Medium */}
        <Image
          src="/images/gear.png"
          alt="Large rotating gear"
          width={300}
          height={300}
          className="hidden sm:block md:hidden w-[300px] h-[300px] object-contain"
        />
        {/* Desktop */}
        <Image
          src="/images/gear.png"
          alt="Large rotating gear"
          width={600}
          height={600}
          className="hidden md:block w-[600px] h-[600px] object-contain"
        />
      </div>
      {/* Smaller gear (right) - clockwise rotation */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-[100px] sm:ml-[150px] md:left-[350px] md:top-[-175px] md:transform-none animate-spin-reverse">
        {/* Mobile Small */}
        <Image
          src="/images/gear.png"
          alt="Small rotating gear"
          width={200}
          height={200}
          className="block sm:hidden w-[200px] h-[200px] object-contain"
        />
        {/* Mobile Medium */}
        <Image
          src="/images/gear.png"
          alt="Small rotating gear"
          width={300}
          height={300}
          className="hidden sm:block md:hidden w-[300px] h-[300px] object-contain"
        />
        {/* Desktop */}
        <Image
          src="/images/gear.png"
          alt="Small rotating gear"
          width={600}
          height={600}
          className="hidden md:block w-[600px] h-[600px] object-contain"
        />
      </div>
    </div>
  )
} 