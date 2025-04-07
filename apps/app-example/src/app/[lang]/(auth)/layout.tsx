export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  {/* Layout per sezioni autenticazione (auth) - params.lang: ${params.lang} */}
  return <>{children}</>;
} 