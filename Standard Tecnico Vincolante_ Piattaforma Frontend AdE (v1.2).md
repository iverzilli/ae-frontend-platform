**Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)**

**Data:** 6 aprile 2025
**Autore:** [Architetto Capo / Consulente Tecnico PA]
**Destinatari:** Solution Architect, Technical Lead, Team di Sviluppo Frontend, Responsabili Sicurezza, Accessibilità e Privacy

**Indice:**

1.  Introduzione: Visione Strategica e Obiettivi Ineludibili
2.  Principi Architettonici Fondamentali (Non Negoziabili)
3.  Stack Tecnologico Core: Scelte Motivate e Vincolanti
4.  Architettura Applicativa Dettagliata
    4.1. Framework e Routing (Next.js App Router - Standard + i18n Ready)
    4.2. Gestione dello Stato Applicativo (Strategia Multi-livello)
    4.3. Styling e Aderenza al Design System Italia (Tailwind + Token AGID)
    4.4. Gestione Chiamate API e Dati (Approccio Robusto + Pattern BFF)
    4.5. Integrazione con Identità Digitale (SPID/CIE)
    4.6. Internazionalizzazione (i18n) e Localizzazione (l10n) - Pronta all'Uso
    4.7. Gestione della Configurazione e Feature Flags - Pronta all'Uso
5.  Struttura del Progetto (Monorepo Dettagliato)
6.  Libreria di Componenti Fondamentale (`design-react-kit` e Custom UI)
7.  Strategia di Qualità Totale: Testing Multi-Strato
    7.1. Linting e Formattazione (Guardiani della Qualità)
    7.2. Testing Unitario e di Integrazione (Jest + RTL + Axe)
    7.3. Testing End-to-End (Playwright/Cypress + Axe)
    7.4. Testing di Accessibilità Continuo (Mandatorio)
    7.5. Visual Regression Testing (Consigliato)
8.  Sicurezza "By Design": Approccio Olistico Frontend
    8.1. Validazione Rigorosa Input (Zod)
    8.2. Sanitizzazione Output e Prevenzione XSS (DOMPurify)
    8.3. Content Security Policy (CSP) e Security Headers (Middleware)
    8.4. Autenticazione e Autorizzazione (Next-Auth + SPID/CIE)
    8.5. Gestione Sicura dei Segreti
    8.6. Scansione Continua Dipendenze (Snyk/Dependabot)
    8.7. Analisi Statica della Sicurezza (SAST)
    8.8. Analisi Dinamica della Sicurezza (DAST - Raccomandato)
9.  Accessibilità (A11Y) e Conformità AGID: Requisito Primario
    9.1. Standard di Riferimento
    9.2. Implementazione Tecnica (HTML Semantico, ARIA, etc.)
    9.3. Test Accessibilità Integrati e Manuali
    9.4. Dichiarazione di Accessibilità
10. Strategia di Performance Ottimale (Core Web Vitals e Oltre)
11. Privacy by Design e Conformità GDPR
    11.1. Cookie Consent Management
    11.2. Gestione Script Terze Parti
    11.3. Minimizzazione Dati e Trasparenza
12. Strategia di Error Handling, Logging e Monitoring
    12.1. Error Boundaries React
    12.2. Gestione Errori API Centralizzata
    12.3. Logging Strutturato (Client & Server)
    12.4. Monitoring e Alerting
13. Flusso di Lavoro di Sviluppo Standardizzato e Developer Experience (DX)
    13.1. Controllo di Versione (Git - Workflow Definito)
    13.2. Pipeline CI/CD Robusta (Quality Gates Obbligatori)
    13.3. Ambiente di Sviluppo Standardizzato (Dev Containers)
    13.4. Tooling IDE Condiviso
14. Documentazione Architetturale Viva e Operativa
15. Governance della Piattaforma e Manutenzione Evolutiva
    15.1. Processo Contributivo e Review
    15.2. Versioning e Changelog
    15.3. Aggiornamento Tecnologico e Feedback Loop
16. Guida Rapida all'Avvio (Getting Started)
17. Conclusioni: Verso l'Eccellenza Digitale

---

**1. Introduzione: Visione Strategica e Obiettivi Ineludibili**

Questo documento stabilisce le fondamenta tecniche per lo sviluppo frontend all'interno dell'Agenzia delle Entrate. Lo **Starter Kit Frontend Enterprise** qui definito non è un semplice template, ma una **piattaforma di sviluppo strategica**. Il suo scopo è imporre uno standard elevato e uniforme per tutte le nuove applicazioni web, garantendo che ogni servizio digitale offerto sia:

*   **Coerente:** Aderenza ferrea al **Design System Italia** (`https://designers.italia.it/`) per UI/UX.
*   **Accessibile per Tutti:** Conformità nativa e verificabile agli standard **WCAG 2.1 Livello AA** (mirando al 2.2) e alle **Linee Guida AGID sull'Accessibilità**. L'accessibilità è un prerequisito, non un optional.
*   **Sicuro "By Design":** Mitigazione proattiva delle vulnerabilità OWASP Top 10 specifiche del frontend.
*   **Conforme alle Normative:** Rispetto integrale delle direttive AGID, GDPR e della normativa vigente (es. Legge Stanca).
*   **Performante:** Esperienza utente fluida e veloce, ottimizzata per i Core Web Vitals.
*   **Efficiente:** Accelerazione dello sviluppo tramite riuso di componenti, pattern e configurazioni validate.
*   **Manutenibile e Scalabile:** Architettura chiara, modulare, ben documentata e pronta per evoluzioni future (i18n, feature flags) per facilitare aggiornamenti e ridurre il debito tecnico.

L'adozione di questo starter kit è **obbligatoria** per i nuovi progetti e fortemente raccomandata per i refactoring significativi.

**2. Principi Architettonici Fondamentali (Non Negoziabili)**

1.  **Aderenza Assoluta al Design System Italia:** La libreria `design-react-kit` e i Design Tokens ufficiali sono la fonte primaria. Deviazioni minime e solo se tecnicamente indispensabili, documentate tramite ADR (Architecture Decision Record).
2.  **Accessibilità come Pilastro:** L'accessibilità non si aggiunge, si progetta fin dall'inizio. Ogni scelta tecnica deve considerare l'impatto sull'accessibilità. La conformità WCAG 2.1 AA è un *quality gate* non derogabile.
3.  **Security First & Privacy by Design:** La sicurezza e la privacy sono responsabilità di tutti, integrate nel workflow, negli strumenti e nelle scelte architetturali.
4.  **Prestazioni come Funzionalità:** Un'applicazione lenta è un'applicazione difettosa. Ottimizzazione continua per Core Web Vitals e percezione di velocità.
5.  **Mobile-First e Responsive:** Progettazione e implementazione partendo dal mobile, garantendo usabilità ottimale su tutti i dispositivi.
6.  **Correctness by Design:** Gli strumenti e le architetture scelte devono guidare gli sviluppatori verso soluzioni corrette e prevenire errori comuni.
7.  **Testabilità Innata:** Il codice deve essere strutturato per essere facilmente testabile a tutti i livelli.
8.  **Future-Proofing Ragionevole:** Anticipare esigenze future comuni (i18n, feature flags) nell'architettura per minimizzare refactoring.
9.  **Evoluzione Controllata:** Lo stack tecnologico deve essere mantenuto aggiornato, ma con un processo di validazione rigoroso prima dell'adozione di nuove versioni major.

**3. Stack Tecnologico Core: Scelte Motivate e Vincolanti**

Utilizzare sempre le **ultime versioni LTS o stabili supportate** al momento dell'avvio del progetto. Versioni indicative (da aggiornare regolarmente):

*   **Framework Principale:** **Next.js v15.5.0+** (App Router obbligatorio)
*   **Linguaggio:** **TypeScript v5.9.2+** (`strict: true` in `tsconfig.json`)
*   **Gestione Stato (Core):** **Redux Toolkit (RTK) v2.4.0+** con **RTK Query** (per stato complesso e API). **React Hook Form v7.52.0+** con **Zod v3.24.0+** (per form). **Zustand v5.1.0+** (opzione secondaria per stato UI semplice).
*   **Styling:** **Tailwind CSS v3.4.3+** configurato con **design-tokens-italia v1.3.0+** (ultima versione). **PostCSS v8.4.40+** (per Tailwind).
*   **Libreria Componenti UI (Base):** **design-react-kit** (ultima versione stabile, attualmente v5.8.0). Opzionalmente **Headless UI v2.3.0+** o **Radix UI v2.1.0+** *solo* come base non stilizzata per componenti custom necessari mancanti nel kit ufficiale. **Nota:** design-react-kit ha dipendenze che richiedono React <19.0.0, mentre il progetto utilizza React 19. Monitorare eventuali problemi di compatibilità fino a quando non sarà disponibile una versione che supporti ufficialmente React 19.
*   **Test Runner:** **Jest v29.7.0+**
*   **Testing Library:** **React Testing Library (RTL) v16.4.0+**, **Jest-Axe v5.5.0+**
*   **Testing E2E:** **Playwright v1.52.0+** con **@axe-core/playwright v4.9.2+**. (Alternativa: Cypress v13.14.0+ con cypress-axe v1.5.0+).
*   **Autenticazione/Autorizzazione:** **Next-Auth / Auth.js v4.25.0+**
*   **Validazione Dati:** **Zod v3.24.0+**
*   **Linting/Formattazione:** **ESLint v9.7.0+**, **Prettier v3.4.0+**, **Husky v9.1.0+**, **lint-staged v15.3.0+**
*   **Gestione Monorepo:** **Turborepo v2.7.0+** (Raccomandato) o **pnpm v9.8.0+** (workspaces)
*   **Node.js:** **v20.x LTS** (o successiva LTS attiva)

**4. Architettura Applicativa Dettagliata**

**4.1. Framework e Routing (Next.js App Router - Standard + i18n Ready)**

*   **Struttura App Router con `[lang]`:**
    ```
    src/app/
    ├── [lang]/             # Parametro dinamico per locale i18n
    │   ├── (main)/         # Gruppo di rotte protette
    │   │   ├── dashboard/
    │   │   │   └── page.tsx
    │   │   ├── profile/
    │   │   │   ├── page.tsx
    │   │   │   └── actions.ts
    │   │   └── layout.tsx  # Layout main (riceve { params: { lang } })
    │   ├── (auth)/         # Gruppo di rotte auth
    │   │   ├── login/
    │   │   │   └── page.tsx
    │   │   └── layout.tsx
    │   ├── layout.tsx      # Layout specifico per lingua (riceve { params: { lang } })
    │   └── page.tsx        # Pagina Home per una lingua
    ├── api/                # API Routes
    │   └── ...
    ├── layout.tsx          # Layout Radice (<html>, <body>, providers globali)
    ├── globals.css
    ├── loading.tsx         # Indicatore di caricamento globale
    ├── error.tsx           # Gestione errori globale
    └── not-found.tsx       # Pagina 404 custom
    ```
*   **Configurazione `next.config.mjs` i18n:**
    ```javascript
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      reactStrictMode: true,
      i18n: {
        locales: ['it'], // Inizialmente solo italiano
        defaultLocale: 'it',
        localeDetection: false, // Non usare detection automatica
      },
      // ... altre config
    };
    export default nextConfig;
    ```
*   **Middleware i18n/Redirect e Sicurezza (`apps/nome-app/src/middleware.ts`)**:
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';

    // Funzione per generare nonce (da lib/nonce.ts)
    import { generateNonce } from '@/lib/nonce'; // Assicurati che il path sia corretto

    const locales = ['it'];
    const defaultLocale = 'it';

    // Funzione helper per generare nonce (se non in file separato)
    // import { randomBytes } from 'crypto';
    // function generateNonce(): string {
    //   return randomBytes(16).toString('base64');
    // }

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
    ```
*   **Componenti Server/Client/Actions:** Devono usare `t()` per i testi (vedi 4.6) e `isFeatureEnabled()` per logica condizionale (vedi 4.7).

**4.2. Gestione dello Stato Applicativo (Strategia Multi-livello)**

*   **RTK Query (Primario per Dati Server)**: Gestire fetch, cache, invalidazione, optimistic updates.
    ```typescript
    // packages/store-config/src/api.ts (Snippet Completo)
    import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
    import type { RootState } from './store';

    export const apiSlice = createApi({
      reducerPath: 'api',
      baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL,
        prepareHeaders: (headers, { getState }) => {
           const token = (getState() as RootState).auth.token; // Esempio
           if (token) headers.set('authorization', `Bearer ${token}`);
           // Aggiunge ID Correlazione per tracciamento E2E
           if (!headers.has('X-Correlation-ID')) {
               headers.set('X-Correlation-ID', crypto.randomUUID());
           }
           return headers;
        },
      }),
      tagTypes: ['User', 'Documents', /* ...altri tipi... */],
      endpoints: (builder) => ({
          // Gli endpoints verranno iniettati dalle slice specifiche
          // Esempio endpoint base se necessario
          // getHealth: builder.query<{ status: string }, void>({ query: () => '/health' }),
      }),
    });

    // Esportazione vuota iniziale, gli hooks verranno esportati dalle slice iniettate
    // export const {} = apiSlice;
    ```
*   **Redux Toolkit Slice (esempio `userSlice.ts`):**
    ```typescript
    // packages/store-config/src/features/userSlice.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    import { apiSlice } from '../api'; // Importa apiSlice base
    import type { RootState } from '../store';

    // Definire l'interfaccia per lo stato utente
    interface User { id: string; name: string; email: string; codiceFiscale: string; }
    interface AuthState { user: User | null; token: string | null; }

    const initialState: AuthState = { user: null, token: null };

    // Definire lo schema Zod per la risposta API utente (esempio)
    const UserApiResponseSchema = z.object({
        userId: z.string(),
        userName: z.string(),
        userEmail: z.string().email(),
        cf: z.string(), // Assumendo che l'API ritorni questi campi
    });

    // Iniettare l'endpoint per ottenere i dati utente
    const userApi = apiSlice.injectEndpoints({
      endpoints: (builder) => ({
        getUserProfile: builder.query<User, void>({
          query: () => '/user/profile', // Endpoint API per il profilo
          transformResponse: (response) => {
            // Validare e trasformare la risposta API nello stato User
            const parsed = UserApiResponseSchema.parse(response);
            return {
              id: parsed.userId,
              name: parsed.userName,
              email: parsed.userEmail,
              codiceFiscale: parsed.cf,
            };
          },
          providesTags: (result) => result ? [{ type: 'User', id: result.id }] : [],
        }),
        // Aggiungere qui mutazioni per aggiornare il profilo se necessario
      }),
      // overrideExisting: false, // Default è false
    });

    export const { useGetUserProfileQuery } = userApi; // Esporta l'hook generato

    const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
        setCredentials(state, action: PayloadAction<{ user: User; token: string }>) {
          state.user = action.payload.user;
          state.token = action.payload.token;
        },
        logout(state) {
          state.user = null;
          state.token = null;
          // Qui si potrebbe anche invalidare la cache RTK Query
          // dispatch(apiSlice.util.resetApiState());
        },
      },
      extraReducers: (builder) => {
        // Gestire il caso in cui getUserProfile viene completato con successo
        builder.addMatcher(
          userApi.endpoints.getUserProfile.matchFulfilled,
          (state, { payload }) => {
            // Aggiorna lo stato utente nella slice auth quando il profilo viene caricato
            // Questo potrebbe essere ridondante se si usa solo lo stato della cache RTK
            // state.user = payload;
          }
        );
      },
    });

    export const { setCredentials, logout } = authSlice.actions;
    export default authSlice.reducer;

    // Selettori
    export const selectCurrentUser = (state: RootState): User | null => state.auth.user;
    export const selectAuthToken = (state: RootState): string | null => state.auth.token;
    ```
*   **Store Config (`packages/store-config/src/store.ts`):**
    ```typescript
    import { configureStore, combineReducers } from '@reduxjs/toolkit';
    import { apiSlice } from './api';
    import authReducer from './features/authSlice'; // Usa il nome corretto della slice
    // import { setupListeners } from '@reduxjs/toolkit/query'; // Opzionale per refetchOnFocus/Reconnect

    // Combina i reducer non-API qui se ne hai altri
    // const rootReducer = combineReducers({
    //   auth: authReducer,
    //   // ...altri reducers specifici UI...
    // });

    export const makeStore = () => {
      return configureStore({
        reducer: {
          [apiSlice.reducerPath]: apiSlice.reducer, // Reducer RTK Query
          auth: authReducer, // Reducer per autenticazione/utente
          // ...altri reducer...
        },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware().concat(apiSlice.middleware), // Aggiunge middleware RTK Query
        devTools: process.env.NODE_ENV !== 'production', // Abilita DevTools solo non in prod
      });
    };

    export type AppStore = ReturnType<typeof makeStore>;
    export type RootState = ReturnType<AppStore['getState']>;
    export type AppDispatch = AppStore['dispatch'];

    // setupListeners(store.dispatch); // Opzionale
    ```
*   **Provider (`apps/nome-app/src/components/providers/StoreProvider.tsx`)**:
    ```typescript
    'use client';
    import { useRef } from 'react';
    import { Provider } from 'react-redux';
    import { makeStore, AppStore } from '@ae/store-config'; // Importa dallo shared package

    export default function StoreProvider({ children }: { children: React.ReactNode }) {
      const storeRef = useRef<AppStore | null>(null);
      if (!storeRef.current) {
        // Crea lo store solo la prima volta
        storeRef.current = makeStore();
        // Qui potresti inizializzare lo store con dati iniziali se necessario
        // storeRef.current.dispatch(...)
      }
      return <Provider store={storeRef.current}>{children}</Provider>;
    }
    ```
*   **React Hook Form + Zod:** Usare `useForm` con `zodResolver`. La validazione avviene automaticamente. (Vedi esempio `ProfileForm` Sez 4.2 v1.0/v1.1).

**4.3. Styling e Aderenza al Design System Italia (Tailwind + Token AGID)**

*   **Configurazione Tailwind (`packages/design-config/tailwind.config.js`)**: Mappare rigorosamente `design-tokens-italia`.
    ```javascript
    // packages/design-config/tailwind.config.js (Snippet Chiave)
    const designTokens = require('design-tokens-italia/dist/tokens');

    module.exports = {
      content: [ /* ... percorsi a apps e packages ... */ ],
      theme: {
        extend: {
          colors: { /* Mappatura token colori AGID */ },
          fontFamily: { sans: [designTokens.fonts['--font-sans'], 'sans-serif'], /* ... */ },
          fontSize: { /* Mappatura token scale tipo */ },
          spacing: { /* Mappatura token spaziatura (8pt grid) */ },
          borderRadius: { /* Mappatura token raggi */ },
          // ... altre estensioni necessarie dai token
        },
      },
      plugins: [ require('@tailwindcss/forms') ],
    };
    ```
*   **Configurazione PostCSS (`packages/design-config/postcss.config.js`)**:
    ```javascript
    module.exports = { plugins: { 'tailwindcss/nesting': {}, tailwindcss: { config: './tailwind.config.js' }, autoprefixer: {} } };
    ```
*   **CSS Globale (`apps/nome-app/src/app/globals.css`)**:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      @apply bg-white text-gray-900; /* Usa colori mappati dai token */
      font-family: theme('fontFamily.sans');
    }

    /* Stile focus visibile obbligatorio A11Y */
    *:focus-visible {
       outline: 3px solid theme('colors.primary-aede'); /* Usa colore primario mappato */
       outline-offset: 2px;
       border-radius: theme('borderRadius.sm');
    }
    ```

**4.4. Gestione Chiamate API e Dati (Approccio Robusto + Pattern BFF)**

*   **RTK Query:** Definire endpoint in slice API con validazione Zod e gestione cache (`providesTags`/`invalidatesTags`).
*   **Pattern BFF:** Usare API Routes Next.js per aggregare, adattare, astrarre, proteggere e cacherare dati per la UI. (Vedi esempio API Route `user-summary` Sez 4.4 v1.2).

**4.5. Integrazione con Identità Digitale (SPID/CIE)**

*   **Configurazione Next-Auth:** Provider OAuth2/OIDC specifico per gateway AdE, mapping attributi, gestione livelli (`acr_values`). (Vedi esempio config Sez 4.5 v1.0/v1.1).
*   **Uso Sessione:** `useSession`, `signIn('spid')`, `signOut`, `getServerSession`.

**4.6. Internazionalizzazione (i18n) e Localizzazione (l10n) - Pronta all'Uso**

*   **Estrazione Stringhe Obbligatoria:** Usare `t()` da `packages/utils-ae/src/i18n.ts` per tutti i testi UI.
    ```typescript
    // packages/utils-ae/src/i18n.ts (Snippet Chiave)
    const translationsIt = { /* ... chiavi e testi italiani ... */ };
    export type TranslationKey = keyof typeof translationsIt;
    export function t(key: TranslationKey, params?: Record<string, string | number>): string {
      let text = translationsIt[key] || `MISSING_KEY: ${key}`;
      // Logica sostituzione parametri {nomeVar}
      return text;
    }
    ```
*   **Routing `[lang]`:** Struttura cartelle e middleware come in 4.1.

**4.7. Gestione della Configurazione e Feature Flags - Pronta all'Uso**

*   **Isolamento Feature + Funzione Helper:** Usare `isFeatureEnabled()` da `packages/utils-ae/src/feature-flags.ts` per logica condizionale.
    ```typescript
    // packages/utils-ae/src/feature-flags.ts (Snippet Chiave)
    const flagsConfig: Record<string, boolean> = { /* ... flag e valori default/env ... */ };
    export type FeatureFlagKey = keyof typeof flagsConfig | string;
    export function isFeatureEnabled(key: FeatureFlagKey): boolean {
      const envVarKey = `NEXT_PUBLIC_FF_${key.replace(/([A-Z])/g, '_$1').toUpperCase()}`;
      const isEnabledViaEnv = process.env[envVarKey] === 'true';
      return flagsConfig[key] ?? isEnabledViaEnv ?? false; // Logica priorità/fallback
    }
    ```
*   **Controllo via Env Vars:** Usare `NEXT_PUBLIC_FF_*`.

**5. Struttura del Progetto (Monorepo Dettagliato)**

*   **Root Monorepo (`/ae-frontend-platform/`)**: `apps/`, `packages/`, `docs/`, `.devcontainer/`, `.github/`, `.husky/`, `.vscode/`, e file di configurazione root (`package.json`, `turbo.json`, `tsconfig.base.json`, etc.).
*   **Struttura Interna App (`apps/nome-app/`)**: `public/`, `src/` (con `app/`, `components/`, `lib/`, `hooks/`, `types/`, `middleware.ts`), `.env`, `next.config.mjs`, `package.json`, `tsconfig.json`.
*   **Struttura Interna Package (`packages/nome-package/`)**: `src/` (con `index.ts`), `package.json`, `tsconfig.json`.

**6. Libreria di Componenti Fondamentale (`design-react-kit` e Custom UI)**

*   **Uso Primario `design-react-kit`:** Obbligatorio.
*   **Componenti Custom in `packages/ui-core`:** Solo se mancanti nel kit, basati su Headless/Radix + utility Tailwind/Token AGID, A11Y-first. (Vedi esempio `Modal` Sez 6 v1.0/v1.1).
*   **Storybook Obbligatorio:** Per `ui-core` e wrapping componenti `design-react-kit` usati. Test A11y (`@storybook/addon-a11y`) integrati. (Vedi esempio `.stories.tsx` Sez 6 v1.0/v1.1).

**7. Strategia di Qualità Totale: Testing Multi-Strato**

**7.1. Linting e Formattazione (Guardiani della Qualità)**

*   **ESLint + Prettier + Husky + lint-staged:** Configurazione pre-commit obbligatoria. (Vedi config `lint-staged` Sez 7.1 v1.0/v1.1).

**7.2. Testing Unitario e di Integrazione (Jest + RTL + Axe)**

*   **Config Jest + Setup:** Configurazione per TS, RTL, Axe, coverage > 85%. (Vedi config Jest/Setup Sez 7.2 v1.0/v1.1).
*   **Test:** Testare comportamento e accessibilità (`expect(results).toHaveNoViolations();`). (Vedi esempio test Sez 7.2 v1.0/v1.1).

**7.3. Testing End-to-End (Playwright/Cypress + Axe)**

*   **Configurazione:** Definire baseURL, setup auth mock/test.
*   **Test:** Flussi critici + scansione A11Y con Axe (`expect(violations).toEqual([])`). (Vedi esempio Playwright Sez 7.3 v1.0/v1.1).

**7.4. Testing di Accessibilità Continuo (Mandatorio)**

*   **Automatico:** ESLint, Jest+Axe, Playwright+Axe, Storybook+Axe.
*   **Manuale Obbligatorio:** Checklist pre-release (Tastiera, Screen Reader, Zoom, Contrasto). (Vedi Checklist Sez 7.4 v1.0/v1.1).

**7.5. Visual Regression Testing (Consigliato)**

*   **Strumenti:** Playwright snapshots, Chromatic, Percy. Workflow in CI.

**8. Sicurezza "By Design": Approccio Olistico Frontend**

8.1. Validazione Rigorosa Input (Zod)

*   Validazione Zod obbligatoria in API Routes / Server Actions.

**8.2. Sanitizzazione Output e Prevenzione XSS (DOMPurify)**

*   Usare `DOMPurify.sanitize()` solo per HTML da fonti fidate con `dangerouslySetInnerHTML`. (Vedi esempio `SanitizedHtml` Sez 8.2 v1.0/v1.1).

**8.3. Content Security Policy (CSP) e Security Headers (Middleware)**

*   Implementazione rigida nel middleware (CSP con nonce, HSTS, XFO, etc.). (Vedi esempio middleware Sez 4.1 v1.2).

**8.4. Autenticazione e Autorizzazione (Next-Auth + SPID/CIE)**

*   Sessioni sicure (JWT HttpOnly/Secure/Strict o DB). Protezione route/API server-side.

**8.5. Gestione Sicura dei Segreti**

*   Mai committare segreti. Usare `.env.local` + gestori segreti piattaforma. (Vedi esempio `.env.local` Sez 8.5 v1.0/v1.1).

**8.6. Scansione Continua Dipendenze (Snyk/Dependabot)**

*   Obbligatorio in CI, fallire su HIGH/CRITICAL. Aggiornamenti regolari. (Vedi esempio CI Sez 8.6 v1.0/v1.1).

**8.7. Analisi Statica della Sicurezza (SAST)**

*   Obbligatorio in CI (Snyk Code, SonarCloud, CodeQL). Risolvere issue critiche. (Vedi esempio CI Sez 8.7 v1.0/v1.1).

**8.8. Analisi Dinamica della Sicurezza (DAST - Raccomandato)**

*   Integrare OWASP ZAP in pipeline su Staging.

**9. Accessibilità (A11Y) e Conformità AGID: Requisito Primario**

**9.1. Standard di Riferimento**

*   WCAG 2.1 AA+, Linee Guida AGID Accessibilità, Legge Stanca.

**9.2. Implementazione Tecnica (HTML Semantico, ARIA, etc.)**

*   HTML semantico, ARIA corretto, navigazione tastiera, focus visibile, contrasto (token AGID), `alt` text (`t()`), form accessibili, `aria-live`. (Vedi esempi markup Sez 9.2 v1.0/v1.1).

**9.3. Test Accessibilità Integrati e Manuali**

*   Combinazione obbligatoria automatici + manuali.

**9.4. Dichiarazione di Accessibilità**

*   Obbligatoria per app, modello AGID, aggiornata, link footer.

**10. Strategia di Performance Ottimale (Core Web Vitals e Oltre)**

*   **Obiettivi CWV**: LCP < 2.5s, INP < 200ms, CLS < 0.1.
*   **Ottimizzazioni Next.js**: Uso obbligatorio `next/image`, `next/font`. Uso strategico `next/dynamic`, RSC/SSR/SSG/ISR. (Vedi esempi Sez 10 v1.0/v1.1).
*   **Bundle Analysis**: `@next/bundle-analyzer` regolarmente.
*   **Caching**: CDN, Next.js, browser.
*   **Monitoraggio RUM**: Sentry/Datadog etc.

**11. Privacy by Design e Conformità GDPR**

*   **11.1. Cookie Consent Management:** Banner conforme GDPR/Garante, consenso granulare esplicito per non necessari, facile revoca.
*   **11.2. Gestione Script Terze Parti:** Caricamento condizionale a consenso (`next/script`). Inventario script.
*   **11.3. Minimizzazione Dati e Trasparenza:** Raccogliere solo dati necessari. Non loggare PII. Link Privacy Policy.

**12. Strategia di Error Handling, Logging e Monitoring**

*   **12.1. Error Boundaries React:** `error.tsx` + `react-error-boundary` per sezioni critiche. Fallback UI + Log errore.
*   **12.2. Gestione Errori API Centralizzata:** Middleware RTK Query / Interceptor. Tradurre errori per utente (`t()`), loggare dettagli tecnici.
*   **12.3. Logging Strutturato (Client & Server):**
    *   **Client:** Sentry (raccomandato). Log errori JS/API. Masking PII. Source maps caricate.
    *   **Server:** Pino/Winston (JSON). Log richieste, errori, eventi.
    *   **Correlation ID:** Obbligatorio in tutti i log (generato/inoltrato nel middleware).
*   **12.4. Monitoring e Alerting:** Monitorare Error Rate, CWV, Latenza API, Uptime. Alert per soglie critiche.

**13. Flusso di Lavoro di Sviluppo Standardizzato e Developer Experience (DX)**

*   **13.1. Controllo di Versione (Git - Workflow Definito)**: Gitflow + Conventional Commits obbligatori.
*   **13.2. Pipeline CI/CD Robusta (Quality Gates Obbligatori)**: Pipeline automatizzata con quality gates per Lint, Test+Axe, Sicurezza Deps, SAST, E2E+Axe. (Vedi esempio YAML Sez 11.2 v1.1).
*   **13.3. Ambiente di Sviluppo Standardizzato (Dev Containers - Raccomandato):** Fornire `.devcontainer/` per standardizzare ambiente via Docker.
    ```json
    // .devcontainer/devcontainer.json (Esempio)
    {
      "name": "AdE Frontend Platform Dev",
      "dockerComposeFile": "docker-compose.yml", // Opzionale
      "service": "workspace", // Opzionale
      "workspaceFolder": "/workspace",
      "features": {
         "ghcr.io/devcontainers/features/node:1": { "version": "20", "pnpm": "9" }
      },
      "customizations": { "vscode": { /* settings, extensions */ } },
      "postCreateCommand": "pnpm install",
      "remoteUser": "node"
    }
    ```
*   **13.4. Tooling IDE Condiviso:** Fornire `.editorconfig`, `.vscode/settings.json`, `.vscode/extensions.json`.

**14. Documentazione Architetturale Viva e Operativa**

*   **Posizione:** `/docs` nel monorepo.
*   **Contenuti Chiave:** README, ARCHITECTURE, ADRs (con template), GETTING_STARTED, CONTRIBUTING, ACCESSIBILITY_GUIDE, SECURITY, PERFORMANCE_GUIDE, COMPONENT_LIBRARY (link Storybook), DEPLOYMENT. (Vedi template ADR Sez 12 v1.1).
*   **Storybook:** Catalogo interattivo e testabile.

**15. Governance della Piattaforma e Manutenzione Evolutiva**

*   **15.1. Processo Contributivo e Review:** Proposte via Issue/ADR. Implementazione via PR. Review obbligatoria da Platform Core Team (min. 2 approvazioni).
*   **15.2. Versioning e Changelog:** SemVer obbligatorio. Changelog aggiornato (raccomandato `standard-version`/`changesets`).
*   **15.3. Aggiornamento Tecnologico e Feedback Loop:** Monitoraggio stack, aggiornamenti dipendenze regolari (major con ADR), canali feedback, comunicazione release.

**16. Guida Rapida all'Avvio (Getting Started)**

*(Assumendo pnpm e Turborepo)*
1.  **Clonare:** `git clone <URL_REPO_PLATFORM_AE> ae-frontend-platform && cd ae-frontend-platform`
2.  **Installare:** `pnpm install`
3.  **Creare App (se serve):** Seguire procedura documentata.
4.  **Configurare `.env.local`:** Copiare da `.env.example`, compilare segreti e flag `NEXT_PUBLIC_FF_*`.
5.  **Avviare App Dev:** `pnpm --filter nome-app dev` (o `turbo run dev --filter=nome-app`) -> `http://localhost:3000`
6.  **Avviare Storybook:** `pnpm --filter @ae/ui-core storybook` (o `turbo run storybook --filter=@ae/ui-core`)
7.  **Eseguire Test:** `pnpm --filter nome-package test` (o `turbo run test --filter=...`)
8.  **Eseguire Lint:** `pnpm run lint` (o `turbo run lint`)
9.  **Leggere Documentazione:** `CONTRIBUTING.md`, `/docs`. Usare `t()` e `isFeatureEnabled()`.

**17. Conclusioni: Verso l'Eccellenza Digitale**

Questo Standard Tecnico Vincolante è il fondamento su cui l'Agenzia delle Entrate costruirà la prossima generazione di servizi digitali. L'aderenza rigorosa a queste specifiche tecniche, architetturali e procedurali non è solo una questione di conformità, ma un impegno verso l'eccellenza, garantendo ai cittadini e agli operatori applicazioni **accessibili, sicure, performanti, private e coerenti**. L'investimento nella sua creazione, adozione e manutenzione continua è cruciale per il successo della trasformazione digitale dell'Agenzia. Il rispetto di questo standard è responsabilità di ogni membro del team di sviluppo.

---
