// packages/store-config/src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api';
import { authReducer } from './features'; // Importa da features/index.ts

// Lo snippet originale aveva un rootReducer commentato, lo omettiamo perché non usato.
// Lo snippet originale aveva setupListeners commentato, lo omettiamo per ora.

export const makeStore = () => {
  return configureStore({
    reducer: {
      [apiSlice.reducerPath]: apiSlice.reducer, // Reducer RTK Query
      auth: authReducer, // Reducer per autenticazione/utente
      // ...altri reducer...
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(apiSlice.middleware), // Aggiunge middleware RTK Query
    devTools: process.env.NODE_ENV !== 'production', // Abilita DevTools solo non in prod
  });
};

// Tipi esportati come richiesto
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

// setupListeners(store.dispatch); // Opzionale, come da snippet originale