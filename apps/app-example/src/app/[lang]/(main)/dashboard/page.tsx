import { t } from '@ae/utils-ae';

export default function DashboardPage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>{t('page.dashboard.title')} ({t('common.language')}: {params.lang})</h1>;
}