import { NextRequest, NextResponse } from 'next/server';
import { generateNonce } from './lib/nonce';

const locales = ['it'];
const defaultLocale = 'it';

export function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const { pathname } = request.nextUrl;

  // 1. Gestione i18n Redirect
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  let targetUrl = request.nextUrl.clone();
  let needsRedirect = false;
  if (!pathnameHasLocale && !pathname.startsWith('/api/')) { // Non reindirizzare API calls
    targetUrl.pathname = `/${defaultLocale}${pathname}`;
    needsRedirect = true;
  }

  // 2. Preparazione Headers di Sicurezza
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('X-Nonce', nonce); // Passa nonce alla richiesta
  // Aggiungi Correlation ID se non già presente (o inoltra se arriva da upstream)
  if (!requestHeaders.has('X-Correlation-ID')) {
      requestHeaders.set('X-Correlation-ID', crypto.randomUUID());
  }

  const responseHeaders = new Headers();
  // Imposta Correlation ID anche sulla risposta
  responseHeaders.set('X-Correlation-ID', requestHeaders.get('X-Correlation-ID')!);
  responseHeaders.set('X-Frame-Options', 'DENY');
  responseHeaders.set('X-Content-Type-Options', 'nosniff');
  responseHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  responseHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
  // HSTS (considerare impostazione a livello Ingress/CDN)
  // responseHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

  // Content Security Policy (CSP)
  const csp = [
    `default-src 'self'`,
    `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`, // strict-dynamic è potente ma richiede attenzione
    // Rimuovere 'unsafe-inline' se possibile, altrimenti limitare con hash/nonce se fattibile
    `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
    `img-src 'self' data:`, // Aggiungere qui URL di CDN approvati per immagini
    `font-src 'self'`,
    `object-src 'none'`,
    `base-uri 'self'`,
    `form-action 'self' ${process.env.SPID_PROVIDER_URL}`, // URL IDP SPID/CIE
    `frame-ancestors 'none'`,
    `upgrade-insecure-requests`,
    // `connect-src 'self' ${process.env.NEXT_PUBLIC_API_BASE_URL};`, // Permette connessioni all'API BFF e self
  ].join('; ');
  responseHeaders.set('Content-Security-Policy', csp);

  // 3. Esegui Redirect i18n se necessario, applicando gli header
  if (needsRedirect) {
    // Usare 308 (Permanent Redirect) per SEO se appropriato
    const redirectResponse = NextResponse.redirect(targetUrl, { status: 308, headers: responseHeaders });
    // Applica di nuovo gli header perché redirect può perderli o non applicarli tutti
    responseHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
    return redirectResponse;
  }

  // 4. Altrimenti, procedi con la richiesta, applicando gli header alla risposta
  const response = NextResponse.next({
    request: {
      headers: requestHeaders, // Passa nonce e correlation ID alla richiesta server-side
    },
  });
  // Applica tutti gli header di sicurezza alla risposta finale
  responseHeaders.forEach((value, key) => response.headers.set(key, value));

  return response;
}

// Matcher per applicare middleware (esclude API, file statici, etc.)
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
  ],
}; 