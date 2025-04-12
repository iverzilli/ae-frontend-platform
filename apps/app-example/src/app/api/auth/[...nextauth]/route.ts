import NextAuth, { AuthOptions } from 'next-auth';
// Importa qui i provider e gli adapter necessari (verranno configurati dopo)
// import OAuthProvider from 'next-auth/providers/oauth'; // Esempio generico

// Definisci le opzioni di autenticazione
// Verranno popolate nei task successivi
export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    // Provider(s) verranno aggiunti qui (Task 4.3)
    // Esempio Placeholder:
    // OAuthProvider({ /* config */ })
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