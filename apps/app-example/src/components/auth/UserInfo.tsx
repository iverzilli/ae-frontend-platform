'use client';
import { useSession } from 'next-auth/react';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Caricamento sessione...</p>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <p>Accesso effettuato come:</p>
        <ul>
          <li>Nome: {session.user?.name ?? 'N/D'}</li>
          <li>Email: {session.user?.email ?? 'N/D'}</li>
          <li>ID: {session.user?.id ?? 'N/D'}</li>
          <li>CF: {session.user?.codiceFiscale ?? 'N/D'}</li>
          {/* Mostra altri dati se disponibili nella sessione */}
        </ul>
      </div>
    );
  }

  // status === 'unauthenticated'
  return <p>Utente non autenticato.</p>;
}