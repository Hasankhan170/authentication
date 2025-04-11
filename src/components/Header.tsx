'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

const Header = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <header className="fixed w-full bg-transparent py-5 px-6 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white">
          <Link href="/">MyApp</Link>
        </div>
        <Navigation/>
        <div className="space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 rounded-lg bg-white text-gray-800 hover:bg-gray-200 transition duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header