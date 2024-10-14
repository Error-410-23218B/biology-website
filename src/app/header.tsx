"use client"

import { useState, useEffect } from 'react'
import {Home, Dna, Skull, Leaf, Microscope } from "lucide-react"
import Link from "next/link"

export default function Component() {
  const [isGene, setIsGene] = useState(true)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsGene(prev => !prev)
    }, 3000) // Switch every 3 seconds

    return () => clearInterval(intervalId)
  }, [])

  return (
    <header className="bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <div className="relative w-8 h-8 mr-3">
              <Dna 
                className={`absolute h-8 w-8 transition-all duration-500 ease-in-out ${
                  isGene ? 'opacity-100 rotate-0' : 'opacity-0 rotate-180'
                }`} 
              />
              <Microscope 
                className={`absolute h-8 w-8 transition-all duration-500 ease-in-out ${
                  isGene ? 'opacity-0 -rotate-180' : 'opacity-100 rotate-0'
                }`} 
              />
            </div>
            <h1 
              className="text-2xl sm:text-3xl font-bold transition-transform duration-200 hover:animate-bounce"
            >
              Biology Challenge
            </h1>
          </div>
          <nav className="flex space-x-4">
          <Link href="/"  className="flex items-center hover:text-green-200 transition-colors duration-200">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </Link>

            <Link href="/profile"  className="flex items-center hover:text-green-200 transition-colors duration-200">
              <Leaf className="h-5 w-5 mr-1" />
              <span>About us</span>
            </Link>

 
          </nav>
        </div>
      </div>
    </header>
  )
}