import { t } from '@ae/utils-ae';

export default function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>{t('page.home.title', { lang: params.lang })}</h1>;
}