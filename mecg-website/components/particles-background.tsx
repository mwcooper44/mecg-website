"use client"
import { useEffect, useRef } from "react"
import Script from "next/script"

interface ParticlesBackgroundProps {
  className?: string
}

export default function ParticlesBackground({ className }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 -z-10 ${className || ""}`}
      style={{ backgroundColor: "#ccdeff" }}
    />
  )
}