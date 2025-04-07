export default function LoginPage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>Pagina di Login (Lingua: {params.lang})</h1>;
} 