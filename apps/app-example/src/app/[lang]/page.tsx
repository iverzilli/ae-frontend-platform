export default function HomePage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>Home Page (Lingua: {params.lang})</h1>;
} 