'use client'; // Obbligatorio per useRef e Provider
import { useRef } from 'react';
import { Provider } from 'react-redux';
// Assicurati che l'alias funzioni o usa un path relativo
import { makeStore, AppStore } from '@ae/store-config'; // Importa dallo shared package

export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    // Crea lo store solo la prima volta che il componente renderizza
    storeRef.current = makeStore();
    // Qui potresti inizializzare lo store con dati iniziali se necessario
    // Esempio: storeRef.current.dispatch(...)
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}