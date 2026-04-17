import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'pt'];
const defaultLocale = 'en';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname has a locale
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) {
    // Rewrite internally to the actual path without the locale prefix
    // This allows /en/blogs to render src/app/blogs/page.tsx
    const locale = pathname.split('/')[1];
    const newPathname = pathname.replace(`/${locale}`, '') || '/';
    
    const url = request.nextUrl.clone();
    url.pathname = newPathname;
    
    return NextResponse.rewrite(url);
  }

  // Redirect if there is no locale
  const locale = request.cookies.get('locale')?.value || defaultLocale;
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  
  return NextResponse.redirect(url);
}

export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static assets)
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)',
  ],
};
