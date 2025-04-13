import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function ProfilePage({
  params,
}: {
  params: { lang: string };
}) {
  const session = await getServerSession(authOptions);

  // Se non c'è sessione, reindirizza alla pagina di login
  if (!session) {
    // Costruisci URL login con lingua corrente
    const loginPath = `/${params.lang}/login`;
    redirect(loginPath);
    // 'redirect' lancia un errore speciale, quindi il codice sottostante non viene eseguito
  }

  // Se la sessione esiste, mostra i dati protetti
  return (
    <div>
      <h1>Profilo Utente Protetto (Lingua: {params.lang})</h1>
      <p>Benvenuto/a, {session.user?.name ?? 'Utente'}!</p>
      <p>Email: {session.user?.email ?? 'N/D'}</p>
      <p>Codice Fiscale: {session.user?.codiceFiscale ?? 'N/D'}</p>
      {/* Mostra altri dati della sessione */}
      <pre className="mt-4 p-2 bg-gray-100 rounded overflow-x-auto text-sm">
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
}