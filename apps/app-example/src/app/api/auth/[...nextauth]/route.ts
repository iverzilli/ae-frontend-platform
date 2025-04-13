import NextAuth, { AuthOptions } from 'next-auth';
// Importa il provider OIDC per SPID/CIE
import OIDCProvider from 'next-auth/providers/oidc';

// Definisci le opzioni di autenticazione
// Verranno popolate nei task successivi
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    OIDCProvider({
      id: "spid", // Identificativo unico per il provider
      name: "SPID/CIE AdE", // Nome visualizzato
      type: "oidc",
      // Usa variabili d'ambiente per tutti i valori sensibili/configurabili
      issuer: process.env.SPID_CIE_OIDC_ISSUER,
      clientId: process.env.SPID_CIE_OIDC_CLIENT_ID,
      clientSecret: process.env.SPID_CIE_OIDC_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid profile email offline_access", // Richiedi scope necessari
          // Livelli SPID/CIE richiesti tramite acr_values
          // Esempio: L2 per SPID, l2/l3 per CIE (verificare specifiche AdE)
          acr_values: process.env.SPID_CIE_OIDC_ACR_VALUES || "https://www.spid.gov.it/SpidL2 https://www.cartaidentita.it/cie-l2",
        },
      },
      // Opzionale: definire esplicitamente gli endpoint se non derivabili dall'issuer
      // token: process.env.SPID_CIE_OIDC_TOKEN_ENDPOINT,
      // userinfo: process.env.SPID_CIE_OIDC_USERINFO_ENDPOINT,

      // Mapping del profilo (verrà affinato nel Task 4.4)
      profile(profile) {
        // Mappare gli attributi ricevuti dall'IDP allo User object di NextAuth
        // Esempio base (DA VERIFICARE CON ATTRIBUTI REALI SPID/CIE OIDC AdE):
        return {
          id: profile.sub, // Subject ID è standard OIDC
          name: profile.name || profile.preferred_username,
          email: profile.email,
          // Aggiungere altri campi necessari, es. codice fiscale se presente
          codiceFiscale: profile.fiscal_number || profile.codice_fiscale, // Nome attributo da verificare
        };
      },
    }),
  ],
  // Callbacks per gestire token JWT e sessione
  callbacks: {
    async jwt({ token, user, account, profile }) {
      // Fase iniziale di sign-in
      if (account && user) {
        token.idToken = account.id_token;
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
        token.expiresAt = account.expires_at; // Scadenza access token
        token.userId = user.id; // o token.sub = user.id; (sub è standard)
        // Aggiungi attributi custom dal profilo mappato o dall'utente
        token.codiceFiscale = (user as any).codiceFiscale || (profile as any)?.fiscal_number;
      }
      // TODO: Logica per refresh token se necessario
      return token;
    },
    async session({ session, token, user }) {
      if (token) {
        session.user.id = token.userId as string || token.sub;
        // Nota: L'IDE potrebbe segnalare errore su session.user.codiceFiscale e session.accessToken
        // perché i tipi non sono ancora stati estesi. Lo faremo nel prossimo task.
        (session.user as any).codiceFiscale = token.codiceFiscale as string;
        (session as any).accessToken = token.accessToken as string;
      }
      return session;
    },
  }
  // Configurazione della strategia di sessione (Task 4.5)
  session: {
    strategy: "jwt", // Usa JWT per la sessione
    // maxAge: 30 * 24 * 60 * 60, // 30 giorni (opzionale)
    // updateAge: 24 * 60 * 60, // 24 ore (opzionale)
  },
  // Configurazione JWT (opzionale se si usa NEXTAUTH_SECRET)
  jwt: {
    // secret: process.env.NEXTAUTH_JWT_SECRET, // Opzionale se NEXTAUTH_SECRET è già definito
    // maxAge: 60 * 60 * 24 * 30, // Opzionale, default 30 giorni
  },
  // Configurazione specifica per i cookie
  cookies: {
    sessionToken: {
      name: `__Secure-next-auth.session-token`, // Prefisso __Secure- per https
      options: {
        httpOnly: true,
        sameSite: 'lax', // 'lax' è un buon default, 'strict' se possibile ma può dare problemi con redirect OIDC
        path: '/',
        secure: process.env.NODE_ENV === 'production', // secure solo in prod (https)
        // domain: 'example.com' // Specifica il dominio se necessario
      }
    },
    // Configurazione per CSRF token
    csrfToken: {
      name: `__Host-next-auth.csrf-token`, // Prefisso __Host- più restrittivo (https, no domain, path=/)
      options: {
        httpOnly: true,
        sameSite: 'lax', // Default per CSRF
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      }
    }
  },
  // Aggiungere altre opzioni necessarie (es. pages, adapter)
  secret: process.env.NEXTAUTH_SECRET, // OBBLIGATORIO per produzione
  // pages: { signIn: '/auth/signin', /* ... */ }, // Pagine custom (opzionale)
};

// Esporta l'handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };