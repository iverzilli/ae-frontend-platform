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