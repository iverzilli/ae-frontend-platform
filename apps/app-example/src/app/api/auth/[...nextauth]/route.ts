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
  // Callbacks verranno aggiunti qui (Task 4.4)
  callbacks: {
    // async jwt({ token, account, profile }) { /* ... */ },
    // async session({ session, token, user }) { /* ... */ },
  },
  // Strategy di sessione verrà configurata qui (Task 4.5)
  session: {
    // strategy: "jwt", // o "database"
  },
  // Aggiungere altre opzioni necessarie (es. secret, pages, adapter)
  secret: process.env.NEXTAUTH_SECRET, // OBBLIGATORIO per produzione
  // pages: { signIn: '/auth/signin', /* ... */ }, // Pagine custom (opzionale)
};

// Esporta l'handler
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };