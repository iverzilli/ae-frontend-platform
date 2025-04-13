import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  /** Estende l'oggetto Session base */
  interface Session {
    user: {
      id: string;
      codiceFiscale?: string | null;
    } & DefaultSession["user"]; // Mantiene name, email, image
    accessToken?: string;
    error?: string; // Esempio per passare errori
  }

  /** Estende l'oggetto User base (usato nel profile e db adapter) */
  interface User extends DefaultUser {
     codiceFiscale?: string | null;
  }
}

declare module "next-auth/jwt" {
  /** Estende il token JWT base */
  interface JWT extends DefaultJWT {
    userId?: string;
    codiceFiscale?: string | null;
    accessToken?: string;
    refreshToken?: string;
    idToken?: string;
    expiresAt?: number;
    // Aggiungere altri campi necessari
  }
}