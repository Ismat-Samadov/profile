// src/middleware.ts
import { NextResponse } from 'next/server';

// Simplified middleware - no custom tracking, GA4 handles analytics
export async function middleware() {
  const response = NextResponse.next();
  return response;
}

// Configure paths for the middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public directory
     * - api routes
     */
    '/((?!_next/static|_next/image|favicon.ico|android-chrome|apple-touch|favicon|site.webmanifest|api/).*)',
  ],
};
