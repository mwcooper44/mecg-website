import React from "react"

interface BlueLineProps {
  className?: string
}

export default function BlueLine({ className = "" }: BlueLineProps) {
  return (
    <div className={`w-32 h-2 bg-[#3f63af] rounded-full ${className}`}></div>
  )
}
