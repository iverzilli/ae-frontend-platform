# Documentazione Componenti ed Esempi

Questo documento contiene la documentazione di tutti i componenti e gli esempi implementati nel progetto Frontend AdE Starter Kit. Sarà aggiornato automaticamente con nuovi componenti e funzionalità man mano che vengono sviluppati.

## Componenti di Autenticazione

### UserInfo

Il componente `UserInfo` visualizza le informazioni dell'utente autenticato utilizzando NextAuth.js.

**Percorso**: `/components/auth/UserInfo.tsx`

**Funzionalità**:
- Visualizza lo stato di caricamento della sessione
- Mostra i dettagli dell'utente quando autenticato (nome, email, ID, codice fiscale)
- Mostra un messaggio quando l'utente non è autenticato

**Esempio di utilizzo**:

```tsx
import UserInfo from '@/components/auth/UserInfo';

export default function ProfilePage() {
  return (
    <div>
      <h1>Profilo Utente</h1>
      <UserInfo />
    </div>
  );
}
```

### AuthButtons

Il componente `AuthButtons` fornisce pulsanti per l'autenticazione e la disconnessione utilizzando NextAuth.js.

**Percorso**: `/components/auth/AuthButtons.tsx`

**Funzionalità**:
- Mostra un pulsante di login con SPID/CIE quando l'utente non è autenticato
- Mostra un pulsante di logout quando l'utente è autenticato
- Visualizza un placeholder durante il caricamento della sessione

**Esempio di utilizzo**:

```tsx
import AuthButtons from '@/components/auth/AuthButtons';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-100">
      <h1>App Example</h1>
      <AuthButtons />
    </header>
  );
}
```

## Componenti di Form

### ProfileFormStub

Il componente `ProfileFormStub` è un esempio di form per il profilo utente con validazione utilizzando React Hook Form e Zod.

**Percorso**: `/components/forms/ProfileFormStub.tsx`

**Funzionalità**:
- Validazione dei campi del form con Zod
- Gestione degli errori di validazione
- Visualizzazione dei dati inviati
- Stili con Tailwind CSS

**Esempio di utilizzo**:

```tsx
import ProfileFormStub from '@/components/forms/ProfileFormStub';

export default function ProfilePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Gestione Profilo</h1>
      <ProfileFormStub />
    </div>
  );
}
```

## API Routes

### user-summary

L'API route `user-summary` fornisce un esempio di endpoint che restituisce un riepilogo dei dati dell'utente.

**Percorso**: `/app/api/user-summary/route.ts`

**Funzionalità**:
- Implementa un handler GET che restituisce dati di esempio dell'utente
- Simula un ritardo di risposta dell'API
- Gestisce l'header X-Correlation-ID
- Include commenti per l'implementazione di validazione con Zod

**Esempio di utilizzo (client)**:

```tsx
'use client';
import { useState, useEffect } from 'react';

export default function UserSummaryComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/user-summary');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Errore nel recupero dei dati:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchData();
  }, []);

  if (loading) return <p>Caricamento...</p>;
  
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Riepilogo Utente</h2>
      {data && (
        <ul className="space-y-2">
          <li><strong>Nome:</strong> {data.name}</li>
          <li><strong>Messaggi non letti:</strong> {data.unreadMessages}</li>
          <li><strong>Ultimo accesso:</strong> {new Date(data.lastLogin).toLocaleString('it-IT')}</li>
          <li><strong>CF (mascherato):</strong> {data.cfMasked}</li>
        </ul>
      )}
    </div>
  );
}
```

## Pagine Protette

### ProfilePage

La pagina `ProfilePage` è un esempio di pagina protetta che richiede l'autenticazione dell'utente utilizzando NextAuth.js con protezione lato server.

**Percorso**: `/app/[lang]/(main)/profile/page.tsx`

**Funzionalità**:
- Verifica l'autenticazione dell'utente utilizzando `getServerSession`
- Reindirizza automaticamente alla pagina di login se l'utente non è autenticato
- Supporta il routing internazionalizzato (parametro `lang`)
- Visualizza i dati dell'utente dalla sessione (nome, email, codice fiscale)

**Esempio di implementazione**:

```tsx
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProfilePage({
  params,
}: {
  params: { lang: string };
}) {
  const session = await getServerSession(authOptions);

  // Se non c'è sessione, reindirizza alla pagina di login
  if (!session) {
    // Costruisci URL login con lingua corrente
    const loginPath = `/${params.lang}/login`;
    redirect(loginPath);
  }

  // Se la sessione esiste, mostra i dati protetti
  return (
    <div>
      <h1>Profilo Utente Protetto (Lingua: {params.lang})</h1>
      <p>Benvenuto/a, {session.user?.name ?? 'Utente'}!</p>
      <p>Email: {session.user?.email ?? 'N/D'}</p>
      {/* Altri dati dell'utente */}
    </div>
  );
}
```

---

## Come Contribuire

Per aggiungere nuovi componenti o esempi a questa documentazione:

1. Creare il nuovo componente o esempio seguendo le best practice del progetto
2. Aggiungere una nuova sezione a questo documento con:
   - Nome e descrizione del componente/esempio
   - Percorso del file
   - Funzionalità principali
   - Esempio di utilizzo con snippet di codice

La documentazione verrà aggiornata automaticamente con i nuovi componenti e funzionalità sviluppati nel progetto.