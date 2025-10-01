"use client"

import type React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface PresidentsWelcomeProps {
  className?: string
}

export default function PresidentsWelcome({ className }: PresidentsWelcomeProps) {
  return (
    <div className={cn("relative py-12 md:py-24 bg-mecg-blue-light", className)}>
      <div className="container px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Title */}
          <div className="text-right mb-12 lg:ml-16 lg:pl-12 mr-44">
            <h2 className="text-5xl md:text-6xl font-bold tracking-wide text-mecg-dark-blue font-signature">President&apos;s Welcome</h2>
          </div>

          {/* Main Content Container */}
          <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
            {/* President's Image - Positioned to overlap */}
            <div className="lg:w-1/3 flex justify-center lg:justify-start relative z-20">
              <div className="relative -ml-4 lg:-ml-0">
                <div className="w-80 h-96 rounded-2xl bg-orange-300 p-3 shadow-lg">
                  <div className="w-full h-full rounded-xl overflow-hidden">
                    <Image
                      src="/images/presidentswelcome/jules.png"
                      alt="Jules Hwang, President of MECG"
                      width={320}
                      height={384}
                      className="w-full h-full object-cover object-center"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div className="lg:w-2/3 relative">
              <div className="bg-mecg-dark-blue rounded-3xl p-8 md:p-12 text-white relative overflow-hidden lg:ml-8 w-full">
                {/* Orange Gear Overlay */}
                <div className="absolute bottom-0 right-0 w-32 h-32 md:w-40 md:h-40 opacity-20">
                  <Image
                    src="/images/Gear.png"
                    alt=""
                    width={160}
                    height={160}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="relative z-10 space-y-8">
                  <p className="text-md leading-relaxed">
                    Welcome to the Michigan Engineering Consulting Group! I&apos;m thrilled to introduce you to our dynamic community of passionate students and professionals.
                  </p>

                  <p className="text-md leading-relaxed">
                    At MECG, we believe in delivering <span className="font-semibold text-white">high-impact solutions</span> to real-world challenges. Our diverse team of consultants works with clients across <span className="font-semibold text-white">all</span> industries, from startups to Fortune 500 companies, providing strategic insights and actionable recommendations.
                  </p>

                  <p className="text-md leading-relaxed">
                    What sets MECG apart is our commitment to excellence and our <span className="font-semibold text-white">eagerness to learn</span>. Every project is an opportunity to grow, innovate, and make a meaningful impact. Whether you&apos;re interested in strategy, operations, technology, or any other consulting domain, MECG provides the platform to develop your skills and build your network.
                  </p>

                  <p className="text-md leading-relaxed">
                    Our members come from various backgrounds and majors, bringing unique perspectives to every engagement. This diversity of thought, combined with our rigorous training and mentorship programs, enables us to tackle complex business challenges with creativity and precision.
                  </p>

                  <p className="text-md leading-relaxed">
                    I invite you to explore our website, attend our events, and connect with our team. Whether you&apos;re a potential client looking for strategic guidance or a student eager to join our community, we&apos;d love to hear from you.
                  </p>
                
                  <div className="pt-4">
                    {/* Signature */}
                    <p className="text-md font-medium">
                      Best,<br />
                      <span className="text-3xl font-signature">Jules Hwang</span><br />
                      President of MECG, 2025
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
