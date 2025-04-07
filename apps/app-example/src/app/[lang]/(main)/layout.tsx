export default function MainLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  {/* Layout per sezioni protette (main) - params.lang: ${params.lang} */}
  return <>{children}</>;
} 