import { NextResponse } from 'next/server';
// import * as z from 'zod'; // Necessario se ci fosse input da validare

// Esempio: Schema Zod per validare parametri query se ci fossero
// const QueryParamsSchema = z.object({ userId: z.string().optional() });

export async function GET(request: Request) { // Request è standard Web API
  // const { searchParams } = new URL(request.url);
  // try {
  //   // Esempio validazione query params (se applicabile)
  //   const queryParams = QueryParamsSchema.parse(Object.fromEntries(searchParams));
  //   console.log('Validated query params:', queryParams);
  // } catch (error) {
  //   // Gestione errore validazione
  //   return NextResponse.json({ error: 'Invalid query parameters', details: error }, { status: 400 });
  // }

  // Simulazione recupero/aggregazione dati BFF
  await new Promise(resolve => setTimeout(resolve, 100)); // Simula attesa API

  const userSummary = {
    userId: 'mock-user-123',
    name: 'Mario Rossi',
    unreadMessages: 5,
    lastLogin: new Date().toISOString(),
    cfMasked: 'RSSMRA**********A', // Esempio dato aggregato/mascherato
  };

  // Includi Correlation ID nella risposta (opzionale qui, già nel middleware)
  const correlationId = request.headers.get('X-Correlation-ID');
  const headers = new Headers();
  if (correlationId) {
      headers.set('X-Correlation-ID', correlationId);
  }

  return NextResponse.json(userSummary, { headers });
}

// Esempio POST con validazione body Zod (se necessario)
// const PostBodySchema = z.object({ preference: z.string() });
// export async function POST(request: Request) {
//   try {
//     const body = await request.json();
//     const validatedBody = PostBodySchema.parse(body);
//     // Logica per salvare la preferenza
//     return NextResponse.json({ success: true, data: validatedBody });
//   } catch (error) {
//     // Gestione errore validazione o altro
//     return NextResponse.json({ error: 'Invalid request body', details: error }, { status: 400 });
//   }
// }