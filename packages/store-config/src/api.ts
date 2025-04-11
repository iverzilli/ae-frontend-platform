// packages/store-config/src/api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// Importa RootState dopo aver creato store.ts e authSlice.ts
// Temporaneamente commentato o usare 'any' se RootState non è ancora definito
import type { RootState } from './store'; // ASSICURATI che questo import funzioni dopo la creazione dello store

// Assicurati che crypto sia disponibile (dovrebbe esserlo in ambienti moderni)
// Potrebbe servire un polyfill in ambienti molto vecchi, ma Next.js/Node LTS dovrebbero averlo.

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_BASE_URL, // Da variabile d'ambiente
    prepareHeaders: (headers, { getState }) => {
       // Il tipo 'RootState' sarà definito in store.ts
       // Usa 'any' temporaneamente se dà errore prima della definizione di RootState
       const token = (getState() as RootState /* | any */)?.auth?.token; // Path allo stato auth (da definire in authSlice)
       if (token) {
          headers.set('authorization', `Bearer ${token}`);
       }
       // Aggiunge ID Correlazione per tracciamento E2E
       // Usa crypto.randomUUID() che è standard web/node
       if (!headers.has('X-Correlation-ID') && typeof crypto !== 'undefined' && crypto.randomUUID) {
           headers.set('X-Correlation-ID', crypto.randomUUID());
       }
       return headers;
    },
  }),
  tagTypes: ['User', 'Documents' /* ...altri tipi... */], // Tipi di cache tag
  endpoints: (builder) => ({
      // Gli endpoints verranno iniettati dalle slice specifiche usando injectEndpoints
      // Lasciare vuoto qui come indicato nello snippet originale
  }),
});

// Esportazione vuota iniziale, gli hooks verranno esportati dalle slice iniettate
// Lo snippet originale commentava questo, quindi lo lasciamo così.
// export const {} = apiSlice;