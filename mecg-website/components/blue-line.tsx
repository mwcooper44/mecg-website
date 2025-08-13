import React from "react"

interface BlueLineProps {
  className?: string
}

export default function BlueLine({ className = "" }: BlueLineProps) {
  return (
    <div className={`w-32 h-1 bg-mecg-dark-blue rounded-full ${className}`}></div>
  )
}
