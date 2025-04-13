import { t } from '@ae/utils-ae';

export default function LoginPage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>{t('page.login.title')} ({t('common.language')}: {params.lang})</h1>;
}