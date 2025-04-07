export default function DashboardPage({
  params,
}: {
  params: { lang: string };
}) {
  return <h1>Dashboard (Lingua: {params.lang})</h1>;
} 