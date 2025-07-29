import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('middleware');
  const authCookie = request.cookies.get('auth');
  const isAuthenticated = authCookie?.value === 'true';

  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/checkout') && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('redirect', pathname);
    console.log('/checkout middleware');
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/checkout'],
};
