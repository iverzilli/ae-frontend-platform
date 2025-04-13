import { NextRequest, NextResponse } from 'next/server';
import { generateNonce } from './lib/nonce';
import { getToken } from 'next-auth/jwt';

// --- FUNZIONE HELPER PER HEADERS RISPOSTA (Task 4.9b) ---
function prepareResponseHeaders(request: NextRequest, nonce: string, correlationId?: string | null): Headers {
    const headers = new Headers();
    // Assicura Correlation ID (o usa quello dalla richiesta se già presente via requestHeaders)
    headers.set('X-Correlation-ID', correlationId || request.headers.get('X-Correlation-ID') || crypto.randomUUID());
    headers.set('X-Nonce', nonce); // Includi nonce anche nella risposta
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    // Policy Permessi - adattare secondo necessità specifiche
    headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

    // CSP - Costruita esattamente come da Sez 4.1
    const cspDirectives = [
      `default-src 'self'`,
      // script-src permette 'self', nonce, strict-dynamic e https:
      `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`,
      // style-src permette 'self', nonce, e 'unsafe-inline' (come richiesto dallo snippet Sez 4.1)
      `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`,
      `img-src 'self' data:`, // Aggiungere qui eventuali CDN per immagini
      `font-src 'self'`, // Aggiungere qui eventuali CDN per font
      `object-src 'none'`,
      `base-uri 'self'`,
      // form-action permette 'self' e l'URL del provider SPID/CIE (da variabile env)
      `form-action 'self' ${process.env.SPID_PROVIDER_URL || ''}`,
      `frame-ancestors 'none'`,
      `upgrade-insecure-requests`
      // connect-src è commentato come nello snippet originale
      // `connect-src 'self' ${process.env.NEXT_PUBLIC_API_BASE_URL || ''}`,
    ];
    headers.set('Content-Security-Policy', cspDirectives.join('; '));

    // HSTS - Commentato come da Sez 4.1. Decommentare SOLO in produzione HTTPS.
    // headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');

    return headers;
}

const locales = ['it'];
const defaultLocale = 'it';
const protectedPaths = ['/dashboard', '/profile']; // Percorsi base protetti (senza lingua)

export async function middleware(request: NextRequest) {
  const nonce = generateNonce();
  const { pathname } = request.nextUrl;
  const locale = pathname.split('/')[1] || defaultLocale; // Estrae la lingua o usa default
  
  // Preparazione degli header di richiesta
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('X-Nonce', nonce);
  if (!requestHeaders.has('X-Correlation-ID')) {
      requestHeaders.set('X-Correlation-ID', crypto.randomUUID());
  }
  const currentCorrelationId = requestHeaders.get('X-Correlation-ID');
  
  // --- INIZIO LOGICA PROTEZIONE ROUTE (Task 4.9a) ---
  const isProtectedRoute = protectedPaths.some(p => {
    // Controlla se il pathname inizia con /locale/percorso_protetto
    // Aggiungere '/' alla fine del percorso protetto per match esatto della cartella
    const pathToMatch = `/${locale}${p}/`;
    // Controlla anche la root del percorso protetto (es. /it/dashboard)
    const exactPathMatch = `/${locale}${p}`;
    return pathname.startsWith(pathToMatch) || pathname === exactPathMatch;
  });

  if (isProtectedRoute) {
    // Recupera il token JWT. Assicurati che NEXTAUTH_SECRET sia impostato nell'ambiente.
    const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });

    if (!token) {
      // Utente non autenticato, redirect alla pagina di login della lingua corrente
      const loginUrl = new URL(`/${locale}/login`, request.url); // Costruisce URL assoluto
      // Aggiungi callbackUrl per tornare alla pagina richiesta dopo il login
      loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
      console.log(`[Middleware] Utente non autenticato per route protetta ${pathname}. Redirect a ${loginUrl.toString()}`);
      // Applica gli header di sicurezza alla risposta di redirect
      const redirectResponse = NextResponse.redirect(loginUrl);
      const responseHeaders = prepareResponseHeaders(request, nonce, currentCorrelationId);
      responseHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
      return redirectResponse;
    }
    // Qui potresti aggiungere controlli basati sui ruoli/claim del token se necessario
    // console.log('[Middleware] Utente autenticato:', token.sub); // Log per debug
    // if (token.role !== 'admin') { /* ... redirect a pagina non autorizzato ... */ }
  }
  // --- FINE LOGICA PROTEZIONE ROUTE (Task 4.9a) ---

  // Ottieni gli header di risposta centralizzati
  const responseHeaders = prepareResponseHeaders(request, nonce, currentCorrelationId);

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

  // 2. Esegui Redirect i18n se necessario, applicando gli header
  if (needsRedirect) {
    // Usare 308 (Permanent Redirect) per SEO se appropriato
    const redirectResponse = NextResponse.redirect(targetUrl, { status: 308 });
    responseHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
    return redirectResponse;
  }

  // 3. Altrimenti, procedi con la richiesta, applicando gli header alla risposta
  const response = NextResponse.next({
    request: {
      headers: requestHeaders, // Passa request headers aggiornati
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