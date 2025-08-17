"use client"

import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Building, GraduationCap, Users, CalendarCheck, LibraryBig } from "lucide-react"
import PresidentsWelcome from "@/components/presidents-welcome"

export default function ScrollSection() {
  // Stats data
  const stats = [
    { icon: Users, value: "80+", label: "Members" },
    { icon: Building, value: "20+", label: "Businesses Served" },
    { icon: LibraryBig, value: "15+", label: "Different Majors" },
  ]

  // Welcome section with fade-in animation
  const [welcomeRef, welcomeInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Video section with fade-in animation
  const [videoRef, videoInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // Stats section with counter animation
  const [statsRef, statsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  })

  // President's Welcome section with fade-in animation
  const [presidentRef, presidentInView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Animation for counting up stats
  const [countedStats, setCountedStats] = useState(stats.map(() => 0))
  const statsAnimationRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    if (statsInView) {
      // Clear any existing animation
      if (statsAnimationRef.current) {
        clearTimeout(statsAnimationRef.current)
      }

      // Animate the stats counting up
      const targetValues = stats.map((stat) => Number.parseInt(stat.value.replace(/\D/g, "")))
      const duration = 2000 // 2 seconds
      const steps = 30
      const interval = duration / steps

      let step = 0
      const animate = () => {
        step++
        const progress = Math.min(step / steps, 1)

        setCountedStats(targetValues.map((target) => Math.floor(target * progress)))

        if (step < steps) {
          statsAnimationRef.current = setTimeout(animate, interval)
        }
      }

      animate()
    } else {
      // Reset stats when out of view
      setCountedStats(stats.map(() => 0))
    }

    return () => {
      if (statsAnimationRef.current) {
        clearTimeout(statsAnimationRef.current)
      }
    }
  }, [statsInView])

  return (
    <div className="relative bg-white dark:bg-gray-900">
      {/* Welcome to MECG Section */}
      <section
        ref={welcomeRef}
        className={cn(
          "py-16 md:py-20 lg:py-24 transition-all duration-1000 transform bg-mecg-blue-extraLight",
          welcomeInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-mecg-dark-blue px-4">
            MECG places an emphasis on a community of diverse students that share one thing: a passion to learn more about consulting and gain hands-on experiences in the field. Our four pillars (Professional Development, Education, Project Experience, and Community) drive our impact on real companies and members' careers.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Statistics Section */}
      <section
        ref={statsRef}
        className={cn(
          "py-20 md:py-16 transition-all duration-1000 transform bg-mecg-blue-extraLight",
          statsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <div className="container px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter">Our Impact</h2>
              <div className="h-1 w-20 bg-mecg-dark-blue mx-auto mt-4"></div>
            </div>

            <div className="flex justify-between items-center gap-6 md:gap-10">
              {stats.map((stat, index) => (
                  <Card
                    key={index}
                    className="border-none shadow-lg overflow-hidden group hover:bg-mecg-dark-blue hover:text-white hover:shadow-xl transition-all flex-1"
                  >
                    <CardContent className="p-6 text-center relative z-10 transition-colors duration-300">

                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-mecg-dark-blue group-hover:text-white transition-colors duration-300" />
                    <div className="text-3xl font-bold">
                      {statsInView ? (
                        <>
                          {countedStats[index]}
                          {stat.value.includes("+") && "+"}
                        </>
                      ) : (
                        "0"
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-white/90 transition-colors duration-300">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* President's Welcome Section */}
      <div
        ref={presidentRef}
        className={cn(
          "transition-all duration-1000 transform",
          presidentInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20",
        )}
      >
        <PresidentsWelcome />
      </div>
    </div>
  )
}
