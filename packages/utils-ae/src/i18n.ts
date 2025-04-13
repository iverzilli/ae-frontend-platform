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