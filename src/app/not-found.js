'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { GridBackground } from '@/components/grid-background'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'

export default function NotfoundPage() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <GridBackground className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div 
        className="absolute bg-blue-500 rounded-full blur-3xl opacity-50 w-64 h-64 transition-all duration-300 ease-out"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      <div className="text-center z-10">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8 typewriter">Oops! Page not found</p>
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 blur-lg opacity-75 animate-pulse"></div>
          <Link href="/" passHref>
            <Button size="lg" className="relative bg-black hover:bg-gray-800 text-white border border-white/20 group transition-all duration-300">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </GridBackground>
  )
}