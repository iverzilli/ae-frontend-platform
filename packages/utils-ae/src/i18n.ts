// packages/utils-ae/src/i18n.ts

// Dizionario delle traduzioni per l'italiano
const translationsIt = {
  // Generali
  'common.loading': 'Caricamento...',
  'common.error': 'Si è verificato un errore.',
  'common.submit': 'Invia',
  'common.cancel': 'Annulla',
  'common.save': 'Salva',
  'common.requiredField': 'Campo obbligatorio',
  'common.notAvailable': 'N/D',
  'common.language': 'Lingua',
  'common.close': 'Chiudi',

  // Header / Navigazione
  'nav.dashboard': 'Dashboard',
  'nav.profile': 'Profilo',
  'nav.login': 'Accedi',
  'nav.logout': 'Esci',

  // Pagine Esempio
  'page.home.title': 'Home Page (Lingua: {lang})', // Esempio con parametro
  'page.dashboard.title': 'Dashboard',
  'page.profile.title': 'Profilo Utente',
  'page.login.title': 'Pagina di Login',
  'page.profile.protectedTitle': 'Profilo Utente Protetto',
  'page.profile.welcome': 'Benvenuto/a, {name}!', // Esempio con parametro

  // Form Esempio
  'form.profile.name.label': 'Nome',
  'form.profile.email.label': 'Indirizzo Email',
  'form.profile.email.invalid': 'Indirizzo email non valido',
  'form.profile.name.minLength': 'Il nome deve contenere almeno 2 caratteri',
  'form.profile.name.maxLength': 'Il nome non può superare i 50 caratteri',
  'form.profile.email.minLength': 'L\'email deve contenere almeno 5 caratteri',
  'form.profile.email.maxLength': 'L\'email non può superare i 100 caratteri',
  'form.profile.codiceFiscale.label': 'Codice Fiscale',
  'form.profile.codiceFiscale.optional': 'Codice Fiscale (opzionale)',
  'form.profile.codiceFiscale.invalid': 'Inserisci un codice fiscale valido (formato: XXXXXX00X00X000X)',
  'form.profile.name.placeholder': 'Inserisci il tuo nome completo',
  'form.profile.email.placeholder': 'Inserisci la tua email',
  'form.profile.codiceFiscale.placeholder': 'Inserisci il tuo codice fiscale',
  'form.profile.submit': 'Salva Profilo',
  'form.profile.submitting': 'Invio in corso...',
  'form.profile.success': 'Form inviato con successo!',
  'form.profile.title': 'Profilo Utente',

  // Utente
  'user.loggedInAs': 'Accesso effettuato come:',
  'user.notAuthenticated': 'Utente non autenticato.',
  'user.codiceFiscaleLabel': 'CF',
  'user.idLabel': 'ID',
  
  // Auth
  'auth.loginWithSpid': 'Login con SPID/CIE',
  'auth.logout': 'Logout',
  'auth.loading': '...',
  
  // Aggiungere qui altre chiavi necessarie...
};

// Tipo per le chiavi di traduzione, derivato dalle chiavi dell'oggetto
export type TranslationKey = keyof typeof translationsIt;

/**
 * Funzione di traduzione base.
 * Recupera una stringa dal dizionario 'it' e sostituisce i placeholder {nomeVar}.
 * @param key La chiave della traduzione (deve esistere in translationsIt).
 * @param params Un oggetto opzionale con i valori per i placeholder.
 * @returns La stringa tradotta e interpolata, o un messaggio di fallback.
 */
export function t(key: TranslationKey, params?: Record<string, string | number>): string {
  let text = translationsIt[key];

  if (!text) {
    console.warn(`[i18n] Chiave mancante: ${key}`);
    return `MISSING_KEY: ${key}`;
  }

  // Sostituzione semplice dei parametri {nomeVar}
  if (params) {
    Object.keys(params).forEach((paramKey) => {
      const regex = new RegExp(`{${paramKey}}`, 'g');
      text = text.replace(regex, String(params[paramKey]));
    });
  }

  return text;
}

// Esporta la funzione t e il tipo TranslationKey dal package