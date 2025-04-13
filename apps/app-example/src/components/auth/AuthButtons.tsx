'use client';
import { useSession, signIn, signOut } from 'next-auth/react';
import { t } from '@ae/utils-ae';

export default function AuthButtons() {
  const { status } = useSession();

  if (status === 'loading') {
    return <button disabled className="px-3 py-1 border rounded bg-gray-200 text-gray-500">{t('auth.loading')}</button>; // Placeholder disabilitato
  }

  if (status === 'authenticated') {
    return (
      <button
        onClick={() => signOut()}
        className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        {t('auth.logout')}
      </button>
    );
  }

  // status === 'unauthenticated'
  return (
    <button
      onClick={() => signIn('spid')} // Usa l'ID del provider configurato
      className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {t('auth.loginWithSpid')}
    </button>
  );
}