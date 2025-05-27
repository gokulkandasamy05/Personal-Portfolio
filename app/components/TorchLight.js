'use client'

import React, { useEffect, useState } from 'react'

const TorchLight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{
        background: `radial-gradient(
          circle 500px at ${position.x}px ${position.y}px,
          transparent 50%,
          rgba(0, 0, 0, 0.25) 100%
        )`,
        transition: 'background 0.05s ease-out',
      }}
    />
  )
}

export default TorchLight
