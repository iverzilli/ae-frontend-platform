export default function ProfilePage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>Profilo Utente (Lingua: {params.lang})</h1>;
} 