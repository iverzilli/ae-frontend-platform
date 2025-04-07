/**
 * Genera un nonce crittograficamente sicuro per la Content Security Policy (CSP)
 * Utilizza la Web Crypto API che è compatibile con l'Edge Runtime di Next.js
 * 
 * @returns {string} Nonce in formato base64
 */
export function generateNonce(): string {
  const buffer = new Uint8Array(16);
  crypto.getRandomValues(buffer);
  return btoa(String.fromCharCode(...buffer));
} 