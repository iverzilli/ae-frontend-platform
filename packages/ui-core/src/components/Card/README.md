# Componente Card

## Motivazione

Questo componente è stato creato come esempio di componente custom in `ui-core` poiché non esiste un componente Card generico nel `@italia/design-react-kit` che soddisfi le esigenze base di un contenitore semplice e accessibile.

In accordo con la Sezione 6 (Libreria di Componenti Fondamentale) dello Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2), è possibile implementare componenti custom in `ui-core` quando questi non sono presenti nel kit ufficiale, a condizione che siano basati su principi di accessibilità e utilizzino utility Tailwind/Token AGID.

## Caratteristiche

- Componente semplice e accessibile
- Utilizza classi Tailwind che accedono ai token AGID mappati
- Implementa le best practice di accessibilità con focus visibile e semantica appropriata
- Accetta props come `title`, `children` e `className` per massima flessibilità

## Dipendenze

Il componente richiede l'installazione di `clsx` per la gestione delle classi condizionali:

```bash
pnpm add clsx --filter @ae/ui-core
```

## Utilizzo

```tsx
import { Card } from '@ae/ui-core';

function MyComponent() {
  return (
    <Card title="Titolo della Card">
      Questo è il contenuto della Card.
    </Card>
  );
}
```