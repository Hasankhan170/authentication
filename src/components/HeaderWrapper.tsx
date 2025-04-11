// components/HeaderWrapper.tsx
'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import Header from './Header'

export default function HeaderWrapper() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const hideHeaderRoutes = ['/login', '/signup']

  if (hideHeaderRoutes.includes(pathname)) {
    return null
  }

  return <Header />
}
