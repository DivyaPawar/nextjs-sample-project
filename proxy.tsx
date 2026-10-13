// proxy.ts  (use middleware.ts and `function middleware` on older versions)
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  return NextResponse.redirect(new URL('/dashboard', request.url))
}

export const config = { matcher: '/old' }