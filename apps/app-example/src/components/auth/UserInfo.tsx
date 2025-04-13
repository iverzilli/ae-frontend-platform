'use client';
import { useSession } from 'next-auth/react';
import { t } from '@ae/utils-ae';

export default function UserInfo() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>{t('common.loading')}</p>;
  }

  if (status === 'authenticated') {
    return (
      <div>
        <p>{t('user.loggedInAs')}</p>
        <ul>
          <li>{t('form.profile.name.label')}: {session.user?.name ?? t('common.notAvailable')}</li>
          <li>{t('form.profile.email.label')}: {session.user?.email ?? t('common.notAvailable')}</li>
          <li>ID: {session.user?.id ?? t('common.notAvailable')}</li>
          <li>{t('user.codiceFiscaleLabel')}: {session.user?.codiceFiscale ?? t('common.notAvailable')}</li>
          {/* Mostra altri dati se disponibili nella sessione */}
        </ul>
      </div>
    );
  }

  // status === 'unauthenticated'
  return <p>{t('user.notAuthenticated')}</p>;
}