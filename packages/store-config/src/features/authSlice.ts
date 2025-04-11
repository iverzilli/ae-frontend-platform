// packages/store-config/src/features/authSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiSlice } from '../api';
import * as z from 'zod';
// Importa RootState dopo aver creato store.ts
// import { RootState } from '../store'; // Temporaneamente commentato

// Definizione dell'interfaccia User
export interface User {
  id: string;
  name: string;
  email: string;
  codiceFiscale: string;
}

// Definizione dell'interfaccia AuthState
export interface AuthState {
  user: User | null;
  token: string | null;
}

// Definizione dello stato iniziale
const initialState: AuthState = {
  user: null,
  token: null,
};

// Schema Zod per la risposta API utente
const UserApiResponseSchema = z.object({
  userId: z.string(),
  userName: z.string(),
  userEmail: z.string().email(),
  cf: z.string(), // Assumendo che l'API ritorni questi campi
});

// Iniettiamo l'endpoint getUserProfile nell'apiSlice
const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query<User, void>({
      query: () => '/user/profile',
      transformResponse: (response) => {
        // Validare e trasformare la risposta API nello stato User
        const parsed = UserApiResponseSchema.parse(response);
        return {
          id: parsed.userId,
          name: parsed.userName,
          email: parsed.userEmail,
          codiceFiscale: parsed.cf,
        };
      },
      providesTags: ['User'],
    }),
  }),
});

// Esportiamo l'hook generato
export const { useGetUserProfileQuery } = authApi;

// Creazione della slice
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: User; token: string }>) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // Qui possiamo gestire altri stati come pending/fulfilled/rejected
    // builder.addMatcher(
    //   authApiSlice.endpoints.getUserProfile.matchFulfilled,
    //   (state, { payload }) => {
    //     state.user = payload;
    //   }
    // );
  },
});

// Esportiamo le actions
export const { setCredentials, logout } = authSlice.actions;

// Esportiamo il reducer
export default authSlice.reducer;

// Esportiamo i selectors
// Nota: RootState sarà definito in store.ts
// Per ora commentiamo o usiamo 'any' temporaneamente
export const selectCurrentUser = (state: any /* RootState */) => state.auth.user;
export const selectAuthToken = (state: any /* RootState */) => state.auth.token;