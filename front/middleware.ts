// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('authToken');
  // if (authCookie) {
  return NextResponse.next();
  // }
  const loginUrl = new URL('/login', request.url);

  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     * - login (login page)
     */
    '/((?!api|_next/static|favicon.ico|login).*)',
  ],
};
