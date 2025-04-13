# Libreria di Componenti

## Panoramica

Questo documento descrive la libreria di componenti utilizzata nel Frontend AdE Starter Kit, in conformità con lo Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2).

## Componenti Base

La libreria principale di componenti è basata su **design-react-kit v5.7.0+**, che implementa il Design System Italia ufficiale.

## Componenti Custom

Per i componenti custom non presenti nel kit ufficiale, è stata scelta **Radix UI v2.0.3+** come base non stilizzata. Questa scelta è stata fatta per i seguenti motivi:

- **Accessibilità**: Radix UI è progettato con un forte focus sull'accessibilità, garantendo che i componenti custom rispettino gli standard WCAG 2.1 Livello AA.
- **Flessibilità**: Offre primitive UI non stilizzate che possono essere facilmente personalizzate con Tailwind CSS per aderire al Design System Italia.
- **Modularità**: Permette di installare solo i componenti necessari, mantenendo il bundle size ottimizzato.
- **Comunità attiva**: Ampia adozione nella comunità React, con buon supporto e documentazione.

L'uso di Radix UI è limitato esclusivamente ai componenti non disponibili nel design-react-kit ufficiale, come specificato nella Sezione 3 e 6 dello Standard Tecnico.

## Sistema di Internazionalizzazione

Il progetto implementa un sistema di internazionalizzazione (i18n) conforme alla Sezione 4.6 dello Standard Tecnico, basato sul package `@ae/utils-ae`. Questo sistema offre:

- **Dizionario centralizzato**: Tutte le stringhe dell'applicazione sono estratte in un dizionario centralizzato per facilitare la manutenzione e la traduzione.
- **Tipizzazione forte**: Le chiavi di traduzione sono tipizzate con TypeScript per prevenire errori e facilitare l'autocompletamento.
- **Supporto per parametri**: La funzione di traduzione supporta l'interpolazione di parametri dinamici nelle stringhe.
- **Fallback per chiavi mancanti**: Gestione automatica delle chiavi di traduzione mancanti con messaggi di avviso in console.

L'implementazione attuale supporta la lingua italiana, con predisposizione per l'aggiunta di altre lingue in futuro.