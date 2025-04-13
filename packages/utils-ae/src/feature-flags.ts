// packages/utils-ae/src/feature-flags.ts

// Configurazione di default dei feature flags
// Questi valori possono essere sovrascritti da variabili d'ambiente
const flagsConfig: Record<string, boolean> = {
  'nuovaDashboard': false, // Esempio: feature disabilitata di default
  'usaApiMock': true,   // Esempio: feature abilitata di default
  // Aggiungere qui altri flag con i loro valori di default
};

// Tipo per le chiavi dei feature flag, include string per flessibilità
export type FeatureFlagKey = keyof typeof flagsConfig | string;

/**
 * Verifica se un feature flag è abilitato.
 * Priorità:
 * 1. Variabile d'ambiente (NEXT_PUBLIC_FF_NOME_FLAG_IN_MAIUSCOLO = 'true')
 * 2. Configurazione locale (flagsConfig)
 * 3. Default: false
 * @param key La chiave del feature flag (es. 'nuovaDashboard').
 * @returns true se il flag è abilitato, false altrimenti.
 */
export function isFeatureEnabled(key: FeatureFlagKey): boolean {
  // Converte camelCase/PascalCase in SNAKE_CASE_UPPER per la variabile d'ambiente
  const envVarKey = `NEXT_PUBLIC_FF_${key
    .replace(/([A-Z])/g, '_$1') // Inserisce _ prima delle maiuscole
    .toUpperCase()}`; // Converte tutto in maiuscolo

  const isEnabledViaEnv = process.env[envVarKey] === 'true';

  // Verifica se la variabile d'ambiente è esplicitamente impostata
  if (process.env[envVarKey] !== undefined) {
    return isEnabledViaEnv;
  }

  // Altrimenti, usa il valore dalla configurazione locale, se presente
  if (key in flagsConfig) {
    return flagsConfig[key];
  }

  // Se non definito né in env né in config, ritorna false (default sicuro)
  // console.warn(`[Feature Flag] Chiave non definita: ${key}. Default a false.`);
  return false;
}