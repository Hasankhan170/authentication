import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <nav className="space-x-6 text-white font-medium">
    <Link href="/" className="hover:text-blue-500 transition">
      Home
    </Link>
    <Link href="/about" className="hover:text-blue-500 transition">
      About
    </Link>
    <Link href="/contact" className="hover:text-blue-500 transition">
      Contact
    </Link>
  </nav>

  )
}

export default Navigation