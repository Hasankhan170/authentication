import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const isPubicPath = path ===  '/' || path ===  '/login' || path === '/signup' || path === '/verifyemail'

    const token = request.cookies.get('token')?.value || '';

    if(isPubicPath && token) return NextResponse.redirect(new URL('/', request.url))
    if(!isPubicPath && !token) return NextResponse.redirect(new URL('/login', request.url))

    // return NextResponse.redirect(new URL('/home', request.url))
}
 
export const config = {
  matcher: [
    "/",
    "/verifyemail",
    "/login",
    "/signup",
    "/profile",
  ]
}