export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  {/* params.lang: ${params.lang} */}
  return <>{children}</>;
} 