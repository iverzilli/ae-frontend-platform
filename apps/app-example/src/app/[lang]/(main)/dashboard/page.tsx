import { t, isFeatureEnabled } from '@ae/utils-ae';

export default function DashboardPage({
  params,
}: {
  params: { lang: string };
}) {
  // Verifica se la feature 'nuovaDashboard' è abilitata
  const showNewDashboardFeature = isFeatureEnabled('nuovaDashboard');

  return (
    <div>
      <h1>{t('page.dashboard.title')} ({t('common.language')}: {params.lang})</h1>
      <p>Contenuto della dashboard principale.</p>

      {/* Mostra condizionalmente la nuova feature */}
      {showNewDashboardFeature && (
        <div className="mt-4 p-4 border border-blue-300 bg-blue-50 rounded">
          <h2>Nuova Sezione Dashboard (Feature Flag Attivo!)</h2>
          <p>Questo contenuto è visibile solo se il feature flag 'nuovaDashboard' è abilitato.</p>
        </div>
      )}

      {!showNewDashboardFeature && (
        <p className="mt-4 text-sm text-gray-500">(Nota: La feature 'nuovaDashboard' è attualmente disabilitata)</p>
      )}
    </div>
  );
}