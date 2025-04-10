Certamente. Preparerò una serie di prompt sequenziali progettati per essere forniti a un AI come Cursor, task per task, per generare il "Frontend AdE Starter Kit". Ogni prompt sarà autocontenuto ma farà riferimento ai task precedenti e al documento tecnico "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" come unica fonte di verità.

**Importante:** Questi prompt sono progettati per essere usati *uno alla volta*, in sequenza. Dopo ogni task eseguito dall'AI, dovrai fornire il prompt successivo. L'AI (Cursor) dovrebbe idealmente avere accesso ai file del progetto man mano che vengono creati/modificati.

---

**Istruzioni Generali per l'Utente (Tu):**

1.  **Usa un Prompt alla Volta:** Incolla esattamente un prompt alla volta nell'interfaccia dell'AI (Cursor).
2.  **Fornisci Contesto File (Se Necessario):** Assicurati che l'AI abbia accesso ai file rilevanti del progetto nel tuo workspace. Potrebbe essere necessario selezionare i file o le cartelle su cui deve operare.
3.  **Verifica l'Output:** Dopo ogni task, verifica brevemente che l'output dell'AI corrisponda a quanto richiesto dal prompt e dal documento tecnico, prima di procedere al task successivo. Correggi eventuali piccole deviazioni se necessario.
4.  **Non Saltare Task:** Segui la sequenza rigorosamente, poiché ogni task si basa sui precedenti.
5.  **Mantieni il Documento a Portata di Mano:** Anche se il prompt lo cita, avere il documento sottomano ti aiuterà a verificare meglio l'output dell'AI.

---

**Prompt per Task [0.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit", un foundation kit frontend enterprise-grade per l'Agenzia delle Entrate.

**Documento di Riferimento Esclusivo:** "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" (di seguito "Standard v1.2"). Qualsiasi altra conoscenza esterna o best practice generica DEVE essere ignorata.

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit come definito nello Standard v1.2.

**Task Attuale:** [0.1] Inizializza repository Git per il progetto `ae-frontend-platform`.

**Riferimento Standard v1.2:** Sezione 13.1 (Controllo di Versione (Git)). L'inizializzazione del repository è il primo passo implicito per qualsiasi progetto gestito con Git.

**Prerequisiti:** Nessuno (primo task).

**Istruzioni Specifiche:**
1.  Assicurati di trovarti nella cartella radice del progetto (che dovrebbe chiamarsi `ae-frontend-platform`).
2.  Esegui il comando necessario per inizializzare un nuovo repository Git in questa cartella.

**Output Atteso:** Il comando Git esatto da eseguire.
```

---

**Prompt per Task [0.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedente Completato:** [0.1] Repository Git inizializzato nella root `ae-frontend-platform`.

**Task Attuale:** [0.2] Scegli e implementa lo strumento di gestione Monorepo: **Turborepo v2.0.7+** (Raccomandato). In alternativa, configura **pnpm v9.5.0+** workspaces.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) e Sezione 5 (Struttura del Progetto - Monorepo Dettagliato). La Sezione 3 specifica "Turborepo v2.0.7+ (Raccomandato) o pnpm v9.5.0+ (workspaces)". La Sezione 5 dettaglia la struttura Monorepo. **Rileggi attentamente queste sezioni.**

**Prerequisiti:** Repository Git inizializzato (Task [0.1]).

**Istruzioni Specifiche:**
1.  **Aderisci alla Raccomandazione:** Implementa la gestione del monorepo utilizzando **Turborepo**, come raccomandato dallo Standard v1.2 (Sez. 3). Assicurati di utilizzare una versione compatibile con `v2.0.7+`.
2.  **Inizializzazione:** Esegui i comandi necessari per inizializzare Turborepo all'interno del repository Git esistente. Potrebbe richiedere l'installazione globale o locale di `turbo` e/o l'inizializzazione tramite `npx`.
3.  **Configurazione Iniziale:** Se il comando di inizializzazione non lo fa già, crea un file `turbo.json` di base nella root del progetto.

**Output Atteso:**
1.  I comandi esatti da eseguire per installare (se necessario) e inizializzare Turborepo nel progetto.
2.  Il contenuto iniziale del file `turbo.json` (se creato manualmente o come risultato dell'init).
```

---

**Prompt per Task [0.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1] Git init; [0.2] Turborepo inizializzato.

**Task Attuale:** [0.3] Definisci la struttura base del Monorepo come da Sez. 5: creare cartelle `apps/`, `packages/`, `docs/`, `.github/`, `.husky/`, `.vscode/`.

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato). Questa sezione descrive esplicitamente la struttura delle cartelle a livello root. **Rileggi attentamente la Sezione 5.**

**Prerequisiti:** Repository Git inizializzato ([0.1]), Turborepo configurato ([0.2]).

**Istruzioni Specifiche:**
1.  Assicurati di essere nella cartella radice del monorepo (`ae-frontend-platform`).
2.  Crea le seguenti cartelle *esattamente* a livello root come specificato nella Sezione 5 dello Standard v1.2:
    *   `apps`
    *   `packages`
    *   `docs`
    *   `.github`
    *   `.husky`
    *   `.vscode`

**Output Atteso:** I comandi (es. `mkdir`) per creare queste specifiche cartelle nella root del progetto.
```

---

**Prompt per Task [0.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1] Git init; [0.2] Turborepo init; [0.3] Struttura cartelle root creata.

**Task Attuale:** [0.4] Configura il file `package.json` root del monorepo.

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato) implica l'esistenza di file di configurazione root, tra cui `package.json`. Sezione 3 specifica Node.js v20.x LTS e pnpm v9.5.0+ (anche se usiamo Turborepo, pnpm è spesso usato come package manager sottostante, come indicato anche in Sez 13.3 Esempio Dev Container e Sez 16 Guida Rapida). Sezione 13.1 menziona Conventional Commits. **Rileggi le Sezioni 3, 5, 13.1, 13.3, 16.**

**Prerequisiti:** Struttura cartelle root creata ([0.3]).

**Istruzioni Specifiche:**
1.  Crea un file `package.json` nella cartella radice del monorepo (`ae-frontend-platform`).
2.  Popola il `package.json` con:
    *   Un nome appropriato (es. `"name": "ae-frontend-platform-monorepo"`).
    *   Versione iniziale (es. `"version": "0.1.0"`).
    *   `"private": true` (tipico per root di monorepo).
    *   Specifica del package manager raccomandato dallo Standard v1.2 (Sez. 3, 16): `"packageManager": "pnpm@9.5.0"` (o versione compatibile >= 9.5.0).
    *   Una sezione `scripts` iniziale vuota o con script base (placeholder).
    *   Una sezione `engines` che specifichi la versione di Node.js richiesta: `"node": ">=20.0.0"` (basato su "v20.x LTS" in Sez. 3).
    *   Una sezione `devDependencies` iniziale vuota (verranno aggiunte dopo).

**Output Atteso:** Il contenuto completo del file `package.json` da creare nella root del progetto.
```

---

**Prompt per Task [0.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1] Git init; [0.2] Turborepo init; [0.3] Struttura cartelle root; [0.4] `package.json` root creato.

**Task Attuale:** [0.5] Configura `turbo.json` con pipeline base iniziali (build, test, lint, dev).

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato) menziona `turbo.json` come file di configurazione root. Sezione 16 (Guida Rapida) mostra comandi `turbo run dev --filter=...`, `turbo run storybook --filter=...`, `turbo run test --filter=...`, `turbo run lint`, implicando l'esistenza di queste pipeline. **Rileggi Sezioni 5 e 16.**

**Prerequisiti:** Turborepo inizializzato ([0.2]), file `turbo.json` esistente o da creare/modificare ([0.2]).

**Istruzioni Specifiche:**
1.  Localizza o crea il file `turbo.json` nella root del monorepo.
2.  Modifica/popola il file `turbo.json` per definire le seguenti pipeline di base, come suggerito dai comandi nella Guida Rapida (Sez. 16) e dalle pratiche comuni:
    *   `dev`: Pipeline per avviare ambienti di sviluppo (tipicamente non cachabile e persistente).
    *   `build`: Pipeline per buildare i pacchetti/applicazioni (definire output di base come `dist/**`, `.next/**`).
    *   `test`: Pipeline per eseguire i test (unit/integration).
    *   `lint`: Pipeline per eseguire il linting.
    *   `storybook`: Pipeline per avviare Storybook (se applicabile ai pacchetti UI).
3.  Imposta configurazioni di base sensate per queste pipeline (es. dipendenze implicite, caching, outputs). In questa fase iniziale, la configurazione può essere generica, verrà raffinata quando i pacchetti avranno gli script effettivi.

**Output Atteso:** Il contenuto completo e aggiornato del file `turbo.json`.
```

---

**Prompt per Task [0.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.4] Setup base monorepo; [0.5] `turbo.json` configurato.

**Task Attuale:** [0.6] Crea il file `tsconfig.base.json` nella root del monorepo con configurazioni TypeScript di base condivise.

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato) menziona `tsconfig.base.json` come file di configurazione root. Sezione 3 (Stack Tecnologico Core) specifica "TypeScript v5.8.3+" con `"strict": true` obbligatorio. **Rileggi Sezioni 3 e 5.**

**Prerequisiti:** Struttura base monorepo impostata ([0.1]-[0.4]).

**Istruzioni Specifiche:**
1.  Crea un file chiamato `tsconfig.base.json` nella cartella radice del monorepo (`ae-frontend-platform`).
2.  Popola questo file con le opzioni `compilerOptions` di base per TypeScript che saranno ereditate dai pacchetti e dalle applicazioni nel monorepo.
3.  Includi le seguenti configurazioni *obbligatorie* come specificato nello Standard v1.2 (Sez. 3) e altre opzioni comuni sensate per un ambiente moderno React/Next.js:
    *   `"strict": true` (Obbligatorio da Sez. 3)
    *   Opzioni comuni come `target`, `module`, `lib`, `jsx`, `esModuleInterop`, `skipLibCheck`, `forceConsistentCasingInFileNames`, `resolveJsonModule`, `isolatedModules`, `allowJs` (impostata a `true` o `false` a seconda delle necessità iniziali, spesso `true` per compatibilità).
    *   Imposta `baseUrl` e `paths` per permettere import alias nel monorepo (es. `@ae/package-name/*`). In questa fase, i path specifici potrebbero essere placeholder o vuoti.
    *   Assicurati che le opzioni siano compatibili con la versione di TypeScript richiesta (`v5.8.3+`).

**Output Atteso:** Il contenuto completo del file `tsconfig.base.json`.
```
---

**Prompt per Task [0.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.5] Setup base monorepo; [0.6] `tsconfig.base.json` creato.

**Task Attuale:** [0.7] Assicura che l'ambiente di sviluppo utilizzi **Node.js v20.x LTS** (o successiva LTS attiva) come da Sez. 3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Node.js: v20.x LTS (o successiva LTS attiva)". Sezione 13.3 (Dev Containers) suggerisce di specificarlo nel container. Sezione 0.4 (package.json root) lo include in `engines`. **Rileggi Sezioni 3, 13.3, e il task 0.4.**

**Prerequisiti:** `package.json` root creato ([0.4]).

**Istruzioni Specifiche:**
1.  **Verifica:** Controlla che il campo `engines.node` nel file `package.json` della root sia impostato correttamente a `>=20.0.0` (o specifica LTS equivalente come `>=20.x`) come definito nel task [0.4] e richiesto dalla Sezione 3.
2.  **Crea `.nvmrc`:** Crea un file `.nvmrc` nella cartella radice del monorepo (`ae-frontend-platform`).
3.  **Specifica Versione LTS:** Inserisci nel file `.nvmrc` la stringa che specifica la versione LTS richiesta, ad esempio `lts/iron` (che corrisponde a Node 20 al momento della scrittura dello standard) o semplicemente `20`. Questo aiuta gli sviluppatori che usano `nvm` a selezionare la versione corretta.

**Output Atteso:**
1.  Conferma della corretta impostazione `engines.node` nel `package.json` root.
2.  Il contenuto del file `.nvmrc` da creare nella root.
```

---

**Prompt per Task [0.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.6] Setup base monorepo; [0.7] Setup versione Node.js.

**Task Attuale:** [0.8] Installa **TypeScript v5.9.2+** come dipendenza di sviluppo a livello di monorepo.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Linguaggio: TypeScript v5.9.2+". Essendo un linguaggio usato in tutto il monorepo, va installato come dev dependency nella root. **Rileggi Sezione 3.**

**Prerequisiti:** `package.json` root creato ([0.4]), pnpm configurato come package manager ([0.4]).

**Istruzioni Specifiche:**
1.  Assicurati di essere nella cartella radice del monorepo (`ae-frontend-platform`).
2.  Usa il gestore di pacchetti `pnpm` (specificato in `packageManager` nel task [0.4]) per installare TypeScript come dipendenza di sviluppo (`-D` o `--save-dev`).
3.  Installa una versione compatibile con `v5.9.2+`, preferibilmente l'ultima stabile della linea 5.9 o successiva specificata dallo standard. Comando es.: `pnpm add -D -w typescript@~5.9.2` (il flag `-w` lo installa nella root workspace).

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare TypeScript nella versione richiesta come dev dependency nella root del monorepo.
```

---

**Prompt per Task [0.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.7] Setup base monorepo; [0.8] TypeScript installato.

**Task Attuale:** [0.9] Configura **TypeScript** con `strict: true` nel `tsconfig.base.json` come da Sez. 3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) richiede esplicitamente `strict: true` in `tsconfig.json`. Il task [0.6] ha creato il file `tsconfig.base.json` destinato a contenere questa configurazione base. **Rileggi Sezione 3 e il task [0.6].**

**Prerequisiti:** `tsconfig.base.json` creato ([0.6]).

**Istruzioni Specifiche:**
1.  Apri il file `tsconfig.base.json` nella root del monorepo.
2.  Verifica che all'interno dell'oggetto `compilerOptions`, l'opzione `"strict"` sia presente e impostata su `true`. Se manca o è impostata a `false`, aggiungila o correggila.

**Output Atteso:** Il contenuto aggiornato del file `tsconfig.base.json`, assicurandosi che `compilerOptions.strict` sia `true`.
```

---

**Prompt per Task [0.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.8] Setup base monorepo, TS configurato; [0.9] `strict: true` verificato.

**Task Attuale:** [0.10] Crea un'applicazione Next.js di esempio dentro `apps/` (es. `apps/app-example`).

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato) indica la presenza della cartella `apps/` per le applicazioni. Sezione 3 specifica Next.js come framework. Creare un'app d'esempio è necessario per implementare lo starter kit. **Rileggi Sezioni 3 e 5.**

**Prerequisiti:** Cartella `apps/` creata ([0.3]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/` all'interno del monorepo.
2.  Utilizza il comando standard per creare una nuova applicazione Next.js. Dato che siamo in un monorepo pnpm/turbo, potrebbe essere necessario usare comandi specifici o adattare il processo `create-next-app`. Un approccio comune è creare la struttura base manualmente o con un comando limitato e poi aggiungere le dipendenze.
3.  Crea una nuova cartella chiamata `app-example` dentro `apps/`.
4.  Inizializza un `package.json` base dentro `apps/app-example`.
5.  Non installare ancora Next.js o altre dipendenze specifiche qui, verrà fatto nel task successivo.

**Output Atteso:**
1.  Comandi per creare la cartella `apps/app-example`.
2.  Contenuto base del file `apps/app-example/package.json` (con nome, versione, privato).
```

---

**Prompt per Task [0.11]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.9] Setup monorepo; [0.10] Cartella e package.json base per `apps/app-example` creati.

**Task Attuale:** [0.11] Inizializza l'applicazione `apps/app-example` con **Next.js v15.5.0+** usando l'**App Router** (obbligatorio) come da Sez. 3 e 4.1.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Framework Principale: Next.js v15.5.0+ (App Router obbligatorio)". Sezione 4.1 (Framework e Routing) conferma l'uso dell'App Router. **Rileggi attentamente le Sezioni 3 e 4.1.**

**Prerequisiti:** Cartella `apps/app-example` e `package.json` base esistenti ([0.10]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Installa le dipendenze fondamentali di Next.js usando `pnpm`: `next`, `react`, `react-dom`. Assicurati di installare una versione di `next` compatibile con `v15.5.0+`. Comando es.: `pnpm add next@^15.5.0 react@^19 react-dom@^19`.
3.  Installa le dipendenze di sviluppo necessarie per Next.js con TypeScript: `@types/react`, `@types/node`, `@types/react-dom`. Comando es.: `pnpm add -D @types/react@^18.2.48 @types/node@^20.11.0 @types/react-dom@^18.2.18`.
4.  Crea la struttura di cartelle minima per un progetto Next.js con App Router:
    *   Crea la cartella `src/`.
    *   Crea la cartella `src/app/`.
    *   Crea un file `src/app/layout.tsx` base (può contenere una struttura HTML minima con `<html>` e `<body>`).
    *   Crea un file `src/app/page.tsx` base (può restituire un semplice `<div>Hello World</div>`).
5.  Crea un file `next.config.mjs` minimale nella root di `apps/app-example`.
6.  Crea un file `tsconfig.json` nella root di `apps/app-example` che estenda il `tsconfig.base.json` della root (`extends: '../../tsconfig.base.json'`) e includa le configurazioni specifiche di Next.js (come `include`, `exclude`).

**Output Atteso:**
1.  Comandi `pnpm` per installare le dipendenze Next.js e i tipi.
2.  Comandi per creare la struttura `src/app/`.
3.  Contenuto minimale per `apps/app-example/src/app/layout.tsx`.
4.  Contenuto minimale per `apps/app-example/src/app/page.tsx`.
5.  Contenuto minimale per `apps/app-example/next.config.mjs`.
6.  Contenuto completo per `apps/app-example/tsconfig.json` (che estende quello base e include config Next.js).
```

---

**Prompt per Task [0.12]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.10] Setup monorepo; [0.11] App Next.js `app-example` inizializzata.

**Task Attuale:** [0.12] Crea i package iniziali vuoti in `packages/`: `design-config`, `store-config`, `ui-core`, `utils-ae`. Configura i loro `package.json` e `tsconfig.json` iniziali che estendono `tsconfig.base.json`.

**Riferimento Standard v1.2:** Sezione 5 (Struttura del Progetto - Monorepo Dettagliato) menziona la cartella `packages/` per i pacchetti condivisi. I nomi dei pacchetti (`design-config`, `store-config`, `ui-core`, `utils-ae`) sono derivati dai task successivi che richiedono configurazioni o utility condivise (es. Sez 4.2 per store-config, 4.3 per design-config, 4.6/4.7 per utils-ae, 6 per ui-core). **Rileggi Sezione 5 e le sezioni menzionate.**

**Prerequisiti:** Cartella `packages/` creata ([0.3]), `tsconfig.base.json` creato ([0.6]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/`.
2.  Per ciascuno dei seguenti nomi di pacchetto: `design-config`, `store-config`, `ui-core`, `utils-ae`:
    *   Crea una cartella con quel nome (es. `packages/design-config`).
    *   All'interno di ogni cartella, crea un file `package.json` base. Imposta il `name` usando un namespace (es. `@ae/design-config`), `version` (es. `0.1.0`), e `main` (es. `src/index.ts`).
    *   All'interno di ogni cartella, crea un file `tsconfig.json` che estenda il tsconfig base della root: `{ "extends": "../../tsconfig.base.json", "compilerOptions": { "outDir": "dist" }, "include": ["src"], "exclude": ["node_modules", "dist"] }`.
    *   All'interno di ogni cartella, crea una cartella `src/`.
    *   All'interno di ogni cartella `src/`, crea un file `index.ts` iniziale (può essere vuoto o esportare un commento placeholder).

**Output Atteso:**
Per ciascuno dei 4 pacchetti (`design-config`, `store-config`, `ui-core`, `utils-ae`):
1.  Comandi per creare la cartella del pacchetto e la sua sottocartella `src`.
2.  Contenuto del file `package.json` base.
3.  Contenuto del file `tsconfig.json` base (che estende quello root).
4.  Comando per creare il file `src/index.ts` vuoto.
```

---

**Prompt per Task [1.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[0.12] Setup monorepo, app Next.js, packages base.

**Task Attuale:** [1.1] Definisci la struttura delle cartelle dell'App Router in `apps/app-example/src/app/` come da schema Sez. 4.1 (includendo `[lang]`, gruppi `(main)`, `(auth)`, `layout.tsx` radice, `globals.css`, `loading.tsx`, `error.tsx`, `not-found.tsx`).

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Questa sezione mostra uno schema dettagliato della struttura della cartella `src/app/`. **Rileggi attentamente lo schema della struttura `src/app/` nella Sezione 4.1.**

**Prerequisiti:** App Next.js `app-example` inizializzata con `src/app/` ([0.11]).

**Istruzioni Specifiche:**
1.  Naviga in `apps/app-example/src/app/`.
2.  Modifica la struttura esistente per replicare ESATTAMENTE quella mostrata nello schema della Sezione 4.1:
    *   Crea la cartella dinamica `[lang]/`.
    *   Dentro `[lang]/`, crea i gruppi di rotte `(main)/` e `(auth)/`.
    *   Dentro `(main)/`, crea le cartelle `dashboard/` e `profile/`.
    *   Dentro `(auth)/`, crea la cartella `login/`.
    *   Crea la cartella `api/` a livello di `src/app/`.
    *   Assicurati che esistano (o crea) i seguenti file nei percorsi indicati dallo schema:
        *   `src/app/layout.tsx` (file radice, già creato in [0.11], verificare)
        *   `src/app/globals.css` (creare se non esiste)
        *   `src/app/loading.tsx`
        *   `src/app/error.tsx`
        *   `src/app/not-found.tsx`
        *   `src/app/[lang]/layout.tsx`
        *   `src/app/[lang]/page.tsx`
        *   `src/app/[lang]/(main)/layout.tsx`
        *   `src/app/[lang]/(main)/dashboard/page.tsx`
        *   `src/app/[lang]/(main)/profile/page.tsx`
        *   `src/app/[lang]/(main)/profile/actions.ts`
        *   `src/app/[lang]/(auth)/layout.tsx`
        *   `src/app/[lang]/(auth)/login/page.tsx`
3.  I file `.tsx` possono contenere componenti React placeholder minimali per ora. Il file `.css` può essere vuoto. Il file `actions.ts` può essere vuoto o contenere un commento.

**Output Atteso:**
Comandi (es. `mkdir`, `touch`) per creare la struttura di cartelle e file specificata all'interno di `apps/app-example/src/app/`, replicando lo schema della Sezione 4.1.
```

---

**Prompt per Task [1.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.1] Setup monorepo, app Next.js, struttura App Router definita.

**Task Attuale:** [1.2] Crea i file `layout.tsx` di base per la root (`<html>`, `<body>`, provider globali placeholder), per `[lang]/` (ricevendo `params: { lang }`), e per i gruppi `(main)` e `(auth)`.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Lo schema mostra l'esistenza di questi file di layout. La loro funzione è standard nell'App Router di Next.js. Il layout radice deve contenere `<html>` e `<body>`. Quelli interni ricevono parametri (come `lang`) e `children`. **Rileggi la Sezione 4.1.**

**Prerequisiti:** Struttura di cartelle e file dell'App Router creata ([1.1]).

**Istruzioni Specifiche:**
1.  Popola il file `src/app/layout.tsx` (Root Layout):
    *   Deve definire un componente React che restituisca `<html>` e `<body>`.
    *   Deve accettare `{ children }: { children: React.ReactNode }` come props.
    *   Includi un placeholder `lang="it"` sull'elemento `<html>` (verrà gestito meglio dopo).
    *   Nel `<body>`, renderizza `{children}`. Includi un commento placeholder tipo `{/* Qui verranno inseriti i Provider Globali */}` all'interno del `<body>` prima di `{children}`.
2.  Popola il file `src/app/[lang]/layout.tsx`:
    *   Deve definire un componente React.
    *   Deve accettare `{ children, params }: { children: React.ReactNode, params: { lang: string } }` come props.
    *   Deve restituire `{children}` (potrebbe wrappare in un `div` o `React.Fragment` se necessario). Stampa `params.lang` in un commento per verifica.
3.  Popola il file `src/app/[lang]/(main)/layout.tsx`:
    *   Deve definire un componente React.
    *   Deve accettare `{ children, params }: { children: React.ReactNode, params: { lang: string } }` come props.
    *   Deve restituire `{children}`. Includi un commento placeholder tipo `{/* Layout per sezioni protette (main) - params.lang: ${params.lang} */}`.
4.  Popola il file `src/app/[lang]/(auth)/layout.tsx`:
    *   Deve definire un componente React.
    *   Deve accettare `{ children, params }: { children: React.ReactNode, params: { lang: string } }` come props.
    *   Deve restituire `{children}`. Includi un commento placeholder tipo `{/* Layout per sezioni autenticazione (auth) - params.lang: ${params.lang} */}`.

**Output Atteso:**
Il contenuto React di base per i seguenti file:
1.  `apps/app-example/src/app/layout.tsx`
2.  `apps/app-example/src/app/[lang]/layout.tsx`
3.  `apps/app-example/src/app/[lang]/(main)/layout.tsx`
4.  `apps/app-example/src/app/[lang]/(auth)/layout.tsx`
```

---

**Prompt per Task [1.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.1] Setup monorepo, app Next.js, struttura App Router; [1.2] Layouts base creati.

**Task Attuale:** [1.3] Crea file `page.tsx` di base per la home (`app/[lang]/page.tsx`), e per rotte d'esempio (`dashboard`, `profile`, `login`) come da Sez. 4.1.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Lo schema mostra l'esistenza di questi file `page.tsx`. **Rileggi lo schema della struttura `src/app/` nella Sezione 4.1.**

**Prerequisiti:** Struttura di cartelle e file dell'App Router creata ([1.1]).

**Istruzioni Specifiche:**
Popola i seguenti file `page.tsx` con componenti React di base che restituiscano un semplice elemento (es. `<h1>`) indicante la pagina, accettando `params: { lang: string }` dove appropriato:
1.  `src/app/[lang]/page.tsx`: Componente `HomePage`, deve ricevere `params`. Restituisce `<h1>Home Page (Lingua: {params.lang})</h1>`.
2.  `src/app/[lang]/(main)/dashboard/page.tsx`: Componente `DashboardPage`, deve ricevere `params`. Restituisce `<h1>Dashboard (Lingua: {params.lang})</h1>`.
3.  `src/app/[lang]/(main)/profile/page.tsx`: Componente `ProfilePage`, deve ricevere `params`. Restituisce `<h1>Profilo Utente (Lingua: {params.lang})</h1>`.
4.  `src/app/[lang]/(auth)/login/page.tsx`: Componente `LoginPage`, deve ricevere `params`. Restituisce `<h1>Pagina di Login (Lingua: {params.lang})</h1>`.

**Output Atteso:**
Il contenuto React di base per i seguenti file:
1.  `apps/app-example/src/app/[lang]/page.tsx`
2.  `apps/app-example/src/app/[lang]/(main)/dashboard/page.tsx`
3.  `apps/app-example/src/app/[lang]/(main)/profile/page.tsx`
4.  `apps/app-example/src/app/[lang]/(auth)/login/page.tsx`
```

---

**Prompt per Task [1.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.2] Setup monorepo, app Next.js, layouts; [1.3] Pagine base create.

**Task Attuale:** [1.4] Configura `next.config.mjs` nell'app `app-example` con `reactStrictMode: true` e la configurazione `i18n` specificata in Sez. 4.1 (`locales: ['it']`, `defaultLocale: 'it'`, `localeDetection: false`).

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Contiene un blocco di codice `next.config.mjs` di esempio che specifica queste configurazioni. **Rileggi attentamente il blocco `next.config.mjs` nella Sezione 4.1.**

**Prerequisiti:** File `apps/app-example/next.config.mjs` esistente ([0.11]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/next.config.mjs`.
2.  Modifica il suo contenuto per replicare ESATTAMENTE la configurazione mostrata nella Sezione 4.1:
    *   Assicurati che l'export sia `export default nextConfig;`.
    *   Includi `reactStrictMode: true`.
    *   Includi il blocco `i18n` con:
        *   `locales: ['it']`
        *   `defaultLocale: 'it'`
        *   `localeDetection: false`
    *   Mantieni un commento `// ... altre config` per future aggiunte.

**Output Atteso:** Il contenuto completo e aggiornato del file `apps/app-example/next.config.mjs`.
```

---

**Prompt per Task [1.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.3] Setup monorepo, app Next.js, pagine/layouts; [1.4] `next.config.mjs` configurato.

**Task Attuale:** [1.5] Implementa la utility per la generazione di nonce in `apps/app-example/src/lib/nonce.ts` come referenziato in Sez. 4.1.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Il codice del middleware fa riferimento a `import { generateNonce } from '@/lib/nonce';` e include un commento con un'implementazione di esempio usando `crypto.randomBytes`. È necessario creare questa utility. **Rileggi il blocco di codice del middleware nella Sezione 4.1, in particolare l'import e il commento sulla generazione nonce.**

**Prerequisiti:** App Next.js `app-example` con cartella `src/` ([0.11]).

**Istruzioni Specifiche:**
1.  Crea la cartella `lib/` dentro `apps/app-example/src/`.
2.  Crea un file `nonce.ts` dentro `apps/app-example/src/lib/`.
3.  Implementa la funzione `generateNonce` all'interno di `nonce.ts`. Utilizza l'approccio suggerito nel commento dello Standard v1.2 (o un equivalente sicuro usando API web standard come `crypto.getRandomValues` se più appropriato in ambiente Edge/Next.js middleware):
    ```typescript
    // Esempio usando crypto Web API (adatto per Edge runtime)
    export function generateNonce(): string {
      const buffer = new Uint8Array(16);
      crypto.getRandomValues(buffer);
      // Converti in base64. Potrebbe essere necessario un polyfill o adattamento
      // per `btoa` in ambienti Node puri, ma dovrebbe funzionare in Edge/browser.
      // Node >= 16 ha global.btoa
      return btoa(String.fromCharCode(...buffer));
    }

    // Alternativa se si usa Node crypto (più comune in backend Node puro)
    // import { randomBytes } from 'crypto';
    // export function generateNonce(): string {
    //   return randomBytes(16).toString('base64');
    // }
    // Scegli l'implementazione adatta al contesto di esecuzione del middleware
    // (Edge Runtime o Node.js). La Web API è spesso preferita per Edge.
    ```
4.  Assicurati di esportare la funzione `generateNonce`. Scegli l'implementazione basata sulla Web Crypto API che è generalmente più compatibile con l'Edge Runtime di Next.js.

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/lib/nonce.ts`.
```

---

**Prompt per Task [1.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.4] Setup monorepo, app Next.js, config; [1.5] Utility Nonce creata.

**Task Attuale:** [1.6] Implementa il file `middleware.ts` in `apps/app-example/src/` esattamente come definito in Sez. 4.1, includendo: Logica i18n redirect, Headers Sicurezza (Nonce, Correlation-ID, XFO, XCTO, RP, PP), CSP rigida con nonce, matcher config.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Questa sezione contiene un blocco di codice DETTAGLIATO per `middleware.ts`. **Rileggi ATTENTAMENTE e COMPLETAMENTE il blocco di codice del middleware nella Sezione 4.1.** Presta attenzione a ogni header, alla logica i18n, alla generazione/passaggio del nonce, al Correlation ID (usando `crypto.randomUUID()`), alla struttura della CSP (inclusi `nonce-${nonce}`, `strict-dynamic`, `https:`, `'unsafe-inline'` per `style-src`, e i placeholder env per `SPID_PROVIDER_URL` e `NEXT_PUBLIC_API_BASE_URL`), e al `matcher`.

**Prerequisiti:** App Next.js (`app-example`) creata ([0.11]), utility `generateNonce` in `src/lib/nonce.ts` creata ([1.5]).

**Istruzioni Specifiche:**
1.  Crea un file chiamato `middleware.ts` nel percorso `apps/app-example/src/`.
2.  Popola questo file con il codice TypeScript *esattamente* come mostrato nel blocco di codice della Sezione 4.1 dello Standard v1.2.
3.  Assicurati che:
    *   Gli import da `next/server` siano corretti.
    *   L'import di `generateNonce` punti al percorso corretto (`@/lib/nonce` - verifica che il path alias `@/` sia configurato o usa un percorso relativo `../lib/nonce`). Se l'alias non è configurato, usa il path relativo.
    *   Le costanti `locales` e `defaultLocale` siano impostate a `['it']` e `'it'`.
    *   La generazione e impostazione di `X-Nonce` e `X-Correlation-ID` (usando `crypto.randomUUID()`) siano presenti sia per le request headers (passate a `NextResponse.next`) che per le response headers.
    *   Tutti gli header di sicurezza (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) siano impostati con i valori ESATTI specificati. L'header HSTS è commentato e va lasciato così per ora.
    *   La stringa `Content-Security-Policy` (CSP) sia costruita *esattamente* come nel documento, prestando attenzione a:
        *   `'self'`
        *   `script-src 'self' 'nonce-${nonce}' 'strict-dynamic' https:`
        *   `style-src 'self' 'nonce-${nonce}' 'unsafe-inline'`
        *   `img-src 'self' data:` (con commento per aggiungere CDN)
        *   `font-src 'self'`
        *   `object-src 'none'`
        *   `base-uri 'self'`
        *   `form-action 'self' ${process.env.SPID_PROVIDER_URL}` (assicurati che usi `process.env`)
        *   `frame-ancestors 'none'`
        *   `upgrade-insecure-requests`
        *   La direttiva `connect-src` è commentata; lasciala commentata per ora.
    *   La logica di redirect i18n sia implementata correttamente (check `!pathnameHasLocale && !pathname.startsWith('/api/')`), usando `308` e applicando gli header alla risposta di redirect.
    *   La funzione `NextResponse.next` sia chiamata passando le `requestHeaders` aggiornate.
    *   Gli header di sicurezza siano applicati alla risposta finale (`response.headers.set`).
    *   Il `matcher` in `export const config` sia copiato esattamente come nel documento: `'/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'`.

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/middleware.ts`.
```

---

**Prompt per Task [1.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.5] Setup monorepo, app Next.js, middleware base; [1.6] `middleware.ts` implementato.

**Task Attuale:** [1.7] Crea cartella `src/app/api/` per le API Routes (BFF pattern) come indicato in Sez. 4.1 e 4.4.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing) mostra `api/` nella struttura `src/app/`. Sezione 4.4 (Gestione Chiamate API e Dati) menziona l'uso di API Routes Next.js per il pattern BFF. **Rileggi le Sezioni 4.1 e 4.4.**

**Prerequisiti:** Struttura `src/app/` creata ([1.1]).

**Istruzioni Specifiche:**
1.  Assicurati che la cartella `api/` esista all'interno di `apps/app-example/src/app/`. Se non esiste (dovrebbe essere stata creata nel task [1.1]), creala.
2.  Aggiungi un file `.gitkeep` all'interno della cartella `apps/app-example/src/app/api/` per assicurarti che la cartella vuota venga tracciata da Git.

**Output Atteso:**
1.  Comando per creare la cartella `apps/app-example/src/app/api/` (se non esiste già).
2.  Comando per creare il file `.gitkeep` all'interno di `apps/app-example/src/app/api/`.
```

---

**Prompt per Task [2.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[1.7] Setup monorepo, app Next.js, routing/middleware. Fase 1 completata.

**Task Attuale:** [2.1] Nel package `packages/design-config`, installa **Tailwind CSS v4.1.3+**, **PostCSS v8.4.38+**, **@tailwindcss/forms**, e **@italia/design-tokens** (ultima versione) come da Sez. 3 e 4.3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) elenca queste dipendenze con le relative versioni minime. Sezione 4.3 (Styling e Aderenza al Design System Italia) ne conferma l'uso nella configurazione Tailwind. **Rileggi attentamente le Sezioni 3 e 4.3.**

**Prerequisiti:** Package `packages/design-config` creato con `package.json` ([0.12]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/design-config`.
2.  Usa `pnpm` per installare le seguenti dipendenze come `devDependencies` (`-D`):
    *   `tailwindcss` (versione compatibile con `v4.1.3+`)
    *   `postcss` (versione compatibile con `v8.4.38+`)
    *   `autoprefixer` (tipicamente necessario con PostCSS/Tailwind)
    *   `@tailwindcss/forms` (ultima versione stabile)
    *   `@italia/design-tokens` (ultima versione stabile)
    *   `tailwindcss/nesting` (necessario per il PostCSS config in Sez 4.3)
3.  Comando esempio: `pnpm add -D tailwindcss@^4.1.3 postcss@^8.4.38 autoprefixer @tailwindcss/forms @italia/design-tokens tailwindcss/nesting`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare queste dipendenze in `packages/design-config`.
```

---

**Prompt per Task [2.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.1] Setup monorepo, app Next.js, dipendenze Tailwind/PostCSS installate in `design-config`.

**Task Attuale:** [2.2] Configura `packages/design-config/tailwind.config.js` per mappare rigorosamente i valori da `@italia/design-tokens` (colori, fontFamily, fontSize, spacing, borderRadius, etc.) come indicato in Sez. 4.3. Includere il plugin `@tailwindcss/forms`.

**Riferimento Standard v1.2:** Sezione 4.3 (Styling e Aderenza al Design System Italia). Contiene uno snippet di `tailwind.config.js` che mostra come importare i token e dove mapparli (`theme.extend`). Menziona esplicitamente colori, fontFamily, fontSize, spacing (8pt grid), borderRadius e il plugin forms. **Rileggi attentamente la Sezione 4.3, in particolare lo snippet di `tailwind.config.js`.**

**Prerequisiti:** Dipendenze installate in `packages/design-config` ([2.1]).

**Istruzioni Specifiche:**
1.  Crea un file `tailwind.config.js` nella root di `packages/design-config`.
2.  Popola il file con la configurazione di Tailwind CSS.
3.  **Importa i Token:** Usa `const designTokens = require('@italia/design-tokens/dist/tokens');` all'inizio del file.
4.  **Configura `content`:** Imposta `content` in modo che possa essere sovrascritto o esteso dalle app che useranno questa configurazione. Un array vuoto `content: []` va bene qui, o un placeholder commentato.
5.  **Configura `theme.extend`:** Mappa rigorosamente i token dal `designTokens` importato alle rispettive sezioni di Tailwind:
    *   `colors`: Mappa i colori principali definiti nei token (es. `primary`, `secondary`, `success`, `warning`, `danger`, scale di grigi, etc.). Il nome delle chiavi Tailwind dovrebbe riflettere i nomi dei token AGID/Italia.
    *   `fontFamily`: Mappa almeno il font sans-serif: `sans: [designTokens.fonts['--font-sans'], 'sans-serif']`. Aggiungi altri font se definiti nei token (es. serif, mono).
    *   `fontSize`: Mappa le scale tipografiche definite nei token.
    *   `spacing`: Mappa la scala di spaziatura basata sulla griglia 8pt definita nei token.
    *   `borderRadius`: Mappa i valori di border radius definiti nei token.
    *   *Aggiungi altre estensioni se esplicitamente derivabili dai token @italia/design-tokens.*
6.  **Configura `plugins`:** Includi `require('@tailwindcss/forms')` nell'array `plugins`.

**Output Atteso:** Il contenuto completo del file `packages/design-config/tailwind.config.js`. Il mapping dei token deve essere il più completo possibile basandosi sulla struttura attesa di `@italia/design-tokens`.
```

---

**Prompt per Task [2.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.1] Setup base; [2.2] `tailwind.config.js` creato in `design-config`.

**Task Attuale:** [2.3] Configura `packages/design-config/postcss.config.js` con i plugin `tailwindcss/nesting`, `tailwindcss`, e `autoprefixer` come da Sez. 4.3.

**Riferimento Standard v1.2:** Sezione 4.3 (Styling e Aderenza al Design System Italia). Contiene uno snippet esatto per `postcss.config.js`. **Rileggi attentamente lo snippet di `postcss.config.js` nella Sezione 4.3.**

**Prerequisiti:** Dipendenze PostCSS/Tailwind installate in `packages/design-config` ([2.1]). File `tailwind.config.js` esistente nello stesso package ([2.2]).

**Istruzioni Specifiche:**
1.  Crea un file `postcss.config.js` nella root di `packages/design-config`.
2.  Popola il file con la configurazione PostCSS *esattamente* come mostrato nello snippet della Sezione 4.3:
    ```javascript
    module.exports = {
      plugins: {
        'tailwindcss/nesting': {},
        tailwindcss: { config: './tailwind.config.js' }, // Assicurati che il path punti al config locale
        autoprefixer: {},
      },
    };
    ```
3.  Verifica che il path in `tailwindcss: { config: './tailwind.config.js' }` sia corretto per puntare al file `tailwind.config.js` nella stessa directory.

**Output Atteso:** Il contenuto completo del file `packages/design-config/postcss.config.js`.
```

---

**Prompt per Task [2.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.1] Setup base; [2.2] `tailwind.config.js` in design-config; [2.3] `postcss.config.js` in design-config.

**Task Attuale:** [2.4] Nell'app `app-example`, configura `tailwind.config.js` e `postcss.config.js` per importare/usare le configurazioni dal package `design-config`. Aggiorna la proprietà `content` nel `tailwind.config.js` dell'app per includere i path sorgenti dell'app e dei packages (`../../packages/**/*.{js,ts,jsx,tsx}`).

**Riferimento Standard v1.2:** Implicito nell'uso di un package `design-config`. L'applicazione deve usare la configurazione centralizzata. La configurazione `content` di Tailwind è standard e necessaria per lo scan dei file. **Rivisita Sezioni 4.3 e 5 sulla struttura monorepo.**

**Prerequisiti:** Package `design-config` con configurazioni Tailwind/PostCSS ([2.2], [2.3]). App `app-example` esistente ([0.11]).

**Istruzioni Specifiche:**
1.  **Tailwind Config App:**
    *   Crea (o sovrascrivi se esiste da init) il file `apps/app-example/tailwind.config.js`.
    *   Importa la configurazione base da `design-config`: `const baseConfig = require('@ae/design-config/tailwind.config.js');` (Assumendo che l'import del pacchetto funzioni correttamente nel monorepo, potrebbe richiedere aggiustamenti o traspilazione del package).
    *   Esporta una nuova configurazione che estende quella base:
        ```javascript
        const baseConfig = require('@ae/design-config/tailwind.config.js'); // O path relativo se necessario

        /** @type {import('tailwindcss').Config} */
        module.exports = {
          ...baseConfig, // Eredita la configurazione base
          content: [
            './src/**/*.{js,ts,jsx,tsx,mdx}',
            '../../packages/ui-core/src/**/*.{js,ts,jsx,tsx}', // Includi package UI
            // Aggiungere altri packages se contengono UI
          ],
          theme: {
            extend: {
              // Qui si possono sovrascrivere o estendere ulteriormente i temi, se necessario
              ...baseConfig.theme?.extend,
            },
          },
          plugins: [
             ...(baseConfig.plugins || []),
             // Aggiungere plugin specifici dell'app se necessario
          ]
        };
        ```
    *   Assicurati che il path in `require` sia corretto e che la proprietà `content` includa i percorsi ai file sorgente dell'app (`./src/...`) e dei package UI rilevanti (`../../packages/ui-core/src/...`).
2.  **PostCSS Config App:**
    *   Crea (o sovrascrivi se esiste da init) il file `apps/app-example/postcss.config.js`.
    *   Configuralo per usare il `tailwind.config.js` locale dell'app:
        ```javascript
        module.exports = {
          plugins: {
            'tailwindcss/nesting': {},
            tailwindcss: { config: './tailwind.config.js' }, // Usa il config dell'app
            autoprefixer: {},
          },
        };
        ```
3.  **Installazione Dipendenze App:** Assicurati che le dipendenze necessarie per eseguire Tailwind/PostCSS siano installate anche nell'app `app-example` (potrebbe essere necessario installare `tailwindcss`, `postcss`, `autoprefixer` come dev dependencies qui se non vengono risolte dal workspace automaticamente durante il build). Comando: `pnpm add -D tailwindcss postcss autoprefixer tailwindcss/nesting` dentro `apps/app-example`.

**Output Atteso:**
1.  Comando `pnpm` per installare le dipendenze dev in `app-example`.
2.  Contenuto completo del file `apps/app-example/tailwind.config.js`.
3.  Contenuto completo del file `apps/app-example/postcss.config.js`.
```

---

**Prompt per Task [2.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.3] Setup base; [2.4] Tailwind/PostCSS configurati nell'app usando `design-config`.

**Task Attuale:** [2.5] Configura `apps/app-example/src/app/globals.css` con le direttive `@tailwind base`, `@tailwind components`, `@tailwind utilities`. Applica stili base al `body` usando i token mappati (font, colori) e lo stile `*:focus-visible` obbligatorio come da Sez. 4.3.

**Riferimento Standard v1.2:** Sezione 4.3 (Styling e Aderenza al Design System Italia). Contiene uno snippet CSS per `globals.css` che include le direttive Tailwind, stili per `body` e lo stile `*:focus-visible`. **Rileggi attentamente lo snippet di `globals.css` nella Sezione 4.3.**

**Prerequisiti:** File `apps/app-example/src/app/globals.css` esistente o da creare ([1.1]). Configurazione Tailwind funzionante nell'app ([2.4]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/globals.css`.
2.  Popola il file *esattamente* come mostrato nello snippet della Sezione 4.3:
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

    body {
      /* Usa classi Tailwind che corrispondono ai token mappati in design-config */
      /* Esempio: assumendo che 'background-default' e 'text-default' siano stati mappati */
      /* @apply bg-background-default text-text-default; */
      /* Se non mappati direttamente come classi, usa theme() */
       @apply bg-white text-gray-900; /* SOSTITUIRE con nomi token mappati, es. theme('colors.background.default') */
       font-family: theme('fontFamily.sans');
    }

    /* Stile focus visibile obbligatorio A11Y */
    *:focus-visible {
       /* Usa theme() per accedere ai token mappati */
       outline: 3px solid theme('colors.primary-aede'); /* SOSTITUIRE con nome token colore primario mappato */
       outline-offset: 2px;
       border-radius: theme('borderRadius.sm'); /* SOSTITUIRE con nome token raggio piccolo mappato */
    }
    ```
3.  **Importante:** Sostituisci i commenti `/* SOSTITUIRE... */` con le chiavi ESATTE che sono state definite nel file `tailwind.config.js` del package `design-config` (Task [2.2]) per i colori di background/testo default, il colore primario (`primary-aede` o equivalente definito lì) e il border radius piccolo (`sm` o equivalente definito lì). Fai riferimento al file generato nel task [2.2].

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/app/globals.css`, con le direttive Tailwind e gli stili base/focus-visible implementati usando `theme()` per accedere ai token definiti nella configurazione condivisa.
```

---

**Prompt per Task [2.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.4] Setup base, Tailwind CSS configurato; [2.5] `globals.css` impostato.

**Task Attuale:** [2.6] Nel package `packages/ui-core`, installa **@italia/design-react-kit** (ultima versione) come da Sez. 3 e 6.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "@italia/design-react-kit (ultima versione)" come Libreria Componenti UI (Base). Sezione 6 (Libreria di Componenti Fondamentale) ne richiede l'uso primario. **Rileggi Sezioni 3 e 6.**

**Prerequisiti:** Package `packages/ui-core` creato con `package.json` ([0.12]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/ui-core`.
2.  Usa `pnpm` per installare `@italia/design-react-kit` come dipendenza normale (non dev). Assicurati di installare l'ultima versione stabile disponibile.
3.  Comando: `pnpm add @italia/design-react-kit`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `@italia/design-react-kit` in `packages/ui-core`.
```

---

**Prompt per Task [2.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.5] Setup base, Tailwind CSS; [2.6] `design-react-kit` installato in `ui-core`.

**Task Attuale:** [2.7] Installa opzionalmente **Headless UI v2.2.1+** o **Radix UI v2.0.3+** in `packages/ui-core` se si prevede la creazione di componenti custom non presenti nel kit ufficiale (come da Sez. 3 e 6). La scelta va documentata.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) elenca "Headless UI v2.2.1+" o "Radix UI v2.0.3+" come opzioni *solo* come base non stilizzata per componenti custom necessari. Sezione 6 (Libreria di Componenti Fondamentale) ribadisce questo concetto. **Rileggi Sezioni 3 e 6.**

**Prerequisiti:** Package `packages/ui-core` esistente ([0.12]).

**Istruzioni Specifiche:**
1.  **Decisione:** Lo standard rende *opzionale* l'installazione di queste librerie headless. Per uno starter kit che mira a fornire basi solide, è ragionevole includerne una per facilitare la creazione futura di componenti custom accessibili. **Scegliamo Radix UI** per la sua popolarità e focus sull'accessibilità.
2.  **Installazione:** Naviga nella cartella `packages/ui-core`. Usa `pnpm` per installare `@radix-ui/react-primitive` (spesso un buon punto di partenza) o specifici pacchetti Radix (es. `@radix-ui/react-dialog`) come dipendenze normali. Installa una versione compatibile con `v1.1.3+`. Comando es.: `pnpm add @radix-ui/react-primitive@^1.1.3` (o altri pacchetti Radix necessari).
3.  **Documentazione Decisione (Azione Manuale o Nota):** Prendere nota che è stato scelto Radix UI come base headless opzionale, come consentito dallo standard, per facilitare componenti custom. Questo andrà menzionato nella documentazione del componente (`docs/COMPONENT_LIBRARY.md`).

**Output Atteso:**
1.  Comando `pnpm` esatto per installare il pacchetto Radix UI scelto in `packages/ui-core`.
2.  Nota sulla decisione presa da includere nella documentazione.
```

---

**Prompt per Task [2.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.6] Setup base, UI kit base installati; [2.7] Radix UI (opzionale) installato.

**Task Attuale:** [2.8] Installa e configura **Storybook** per il package `packages/ui-core` (come da Sez. 6).

**Riferimento Standard v1.2:** Sezione 6 (Libreria di Componenti Fondamentale) rende Storybook **obbligatorio** per `ui-core`. Sezione 14 (Documentazione Architetturale) lo menziona come catalogo interattivo. Sezione 16 (Guida Rapida) mostra un comando per avviarlo (`turbo run storybook --filter=@ae/ui-core`). **Rileggi Sezioni 6, 14, 16.**

**Prerequisiti:** Package `packages/ui-core` esistente ([0.12]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella root del monorepo (`ae-frontend-platform`).
2.  Usa il comando `npx storybook@latest init` per inizializzare Storybook. Quando richiesto, specifica che vuoi configurarlo per il package `packages/ui-core`. Assicurati che rilevi React e configuri i builder e renderer appropriati (es. Vite o Webpack).
3.  Segui i passi dell'installer. Potrebbe chiedere di installare dipendenze aggiuntive; approva quelle necessarie.
4.  Verifica che l'inizializzazione abbia:
    *   Aggiunto le dipendenze di Storybook (`@storybook/...`) al `package.json` di `packages/ui-core`.
    *   Creato una cartella `.storybook` in `packages/ui-core` con file di configurazione (`main.js` o `main.ts`, `preview.js` o `preview.ts`).
    *   Creato una cartella `src/stories` (o simile) con esempi.
5.  **Configura Integrazione Tailwind:** Modifica il file `.storybook/main.js` (o `.ts`) per assicurarti che Storybook carichi la configurazione PostCSS/Tailwind correttamente. Potrebbe richiedere l'aggiunta di `addon-postcss`:
    ```javascript
    // Esempio .storybook/main.js (adattare se .ts)
    module.exports = {
      stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
      addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-interactions',
        // Aggiungi addon-postcss per Tailwind
        {
           name: '@storybook/addon-postcss',
           options: {
             postcssLoaderOptions: {
               implementation: require('postcss'),
             },
           },
        },
      ],
      framework: {
        name: '@storybook/react-vite', // o '@storybook/react-webpack5'
        options: {},
      },
      docs: {
        autodocs: 'tag',
      },
      // Aggiunta per risolvere alias del monorepo se necessario
      // async viteFinal(config) {
      //   const { mergeConfig } = await import('vite');
      //   return mergeConfig(config, {
      //     resolve: { // Configura alias qui se usi Vite
      //       alias: { /* ... */ },
      //     },
      //   });
      // },
    };
    ```
6.  **Importa CSS Globale:** Modifica il file `.storybook/preview.js` (o `.ts`) per importare il CSS globale dell'applicazione (che include Tailwind) per applicare gli stili base alle storie. Potrebbe essere necessario importare `globals.css` dall'app, il che può essere complesso in monorepo. Un approccio alternativo è creare un `preview.css` dedicato per Storybook in `ui-core` che importi le direttive Tailwind. Scegliamo la seconda opzione per mantenere `ui-core` più isolato:
    *   Crea `.storybook/preview.css`.
    *   Aggiungi `@tailwind base; @tailwind components; @tailwind utilities;` in `preview.css`.
    *   Importa `'./preview.css';` in `.storybook/preview.js` (o `.ts`).
7.  Aggiungi gli script per avviare e buildare Storybook nel `package.json` di `packages/ui-core`:
    ```json
    "scripts": {
      "storybook": "storybook dev -p 6006",
      "build-storybook": "storybook build"
    }
    ```

**Output Atteso:**
1.  Comando `npx storybook@latest init` (o comandi equivalenti se fatti manualmente).
2.  Contenuto aggiornato di `packages/ui-core/.storybook/main.js` (o `.ts`) con `addon-postcss`.
3.  Contenuto del file `packages/ui-core/.storybook/preview.css`.
4.  Contenuto aggiornato di `packages/ui-core/.storybook/preview.js` (o `.ts`) che importa `preview.css`.
5.  Snippet JSON da aggiungere alla sezione `scripts` di `packages/ui-core/package.json`.
```

---

**Prompt per Task [2.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.7] Setup base, UI kit; [2.8] Storybook installato e configurato in `ui-core`.

**Task Attuale:** [2.9] Integra l'addon **@storybook/addon-a11y** in Storybook (come da Sez. 6).

**Riferimento Standard v1.2:** Sezione 6 (Libreria di Componenti Fondamentale) richiede esplicitamente l'integrazione di test A11y (`@storybook/addon-a11y`) in Storybook. Sezione 7.4 (Testing di Accessibilità Continuo) lo elenca tra i test automatici. **Rileggi Sezioni 6 e 7.4.**

**Prerequisiti:** Storybook inizializzato in `packages/ui-core` ([2.8]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/ui-core`.
2.  Installa l'addon Storybook per l'accessibilità come dev dependency usando `pnpm`: `pnpm add -D @storybook/addon-a11y`.
3.  Modifica il file `.storybook/main.js` (o `.ts`) in `packages/ui-core`.
4.  Aggiungi `'@storybook/addon-a11y'` all'array `addons`.

**Output Atteso:**
1.  Comando `pnpm` per installare `@storybook/addon-a11y`.
2.  Contenuto aggiornato del file `packages/ui-core/.storybook/main.js` (o `.ts`) mostrando l'addon aggiunto all'array `addons`.
```

---

**Prompt per Task [2.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.8] Setup base, Storybook configurato; [2.9] Addon A11y aggiunto a Storybook.

**Task Attuale:** [2.10] Crea un esempio di storia Storybook per un componente base da `@italia/design-react-kit` (es. Button) per validare l'integrazione e l'addon A11y.

**Riferimento Standard v1.2:** Sezione 6 (Libreria di Componenti Fondamentale) richiede Storybook per i componenti usati. Questo task serve a verificare il setup. **Rileggi Sezione 6.**

**Prerequisiti:** `@italia/design-react-kit` installato ([2.6]), Storybook configurato con addon A11y ([2.8], [2.9]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/ui-core/src/`.
2.  Crea una sottocartella, ad esempio `stories/design-react-kit/`.
3.  Crea un file per la storia del bottone, es. `Button.stories.tsx`.
4.  Importa il componente `Button` da `@italia/design-react-kit`.
5.  Scrivi una storia base usando il formato CSF (Component Story Format) 3.0:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import { Button } from '@italia/design-react-kit'; // Verifica path import

    // Configurazione Meta per il componente Button
    const meta: Meta<typeof Button> = {
      title: 'Design React Kit/Button', // Path nella UI di Storybook
      component: Button,
      tags: ['autodocs'], // Abilita documentazione automatica
      argTypes: { // Controlli opzionali per le props
        color: {
          control: 'select',
          options: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
        },
        size: {
          control: 'radio',
          options: ['sm', 'lg'],
        },
        outline: { control: 'boolean' },
        block: { control: 'boolean' },
        active: { control: 'boolean' },
        disabled: { control: 'boolean' },
        // Aggiungere altri argTypes rilevanti per il Button del kit
      },
    };

    export default meta;
    type Story = StoryObj<typeof Button>;

    // Storia Principale (Default)
    export const Primary: Story = {
      args: {
        color: 'primary',
        children: 'Bottone Primario', // Testo del bottone
        onClick: () => alert('Button clicked!'), // Azione di esempio
      },
    };

    // Altre storie per varianti comuni
    export const Secondary: Story = {
      args: {
        ...Primary.args, // Eredita args
        color: 'secondary',
        children: 'Bottone Secondario',
      },
    };

    export const Disabled: Story = {
      args: {
        ...Primary.args,
        disabled: true,
        children: 'Bottone Disabilitato',
      },
    };

    export const Outline: Story = {
      args: {
        ...Primary.args,
        outline: true,
        children: 'Bottone Outline',
      },
    };
    ```
6.  Assicurati che il path di import per `Button` sia corretto. Verifica che le props usate in `args` e `argTypes` corrispondano a quelle reali del componente `Button` di `@italia/design-react-kit`.

**Output Atteso:** Il contenuto completo del file `packages/ui-core/src/stories/design-react-kit/Button.stories.tsx`.
```

---


**Prompt per Task [2.11]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.9] Setup base, Storybook; [2.10] Storia Storybook per componente design-kit creata.

**Task Attuale:** [2.11] Crea un esempio di componente custom *semplice* in `packages/ui-core` (es. `Card`) utilizzando utility Tailwind/Token AGID, assicurando l'accessibilità di base (semantica, focus). Documentare la scelta (assenza nel kit).

**Riferimento Standard v1.2:** Sezione 6 (Libreria di Componenti Fondamentale) permette componenti custom in `ui-core` se mancanti nel kit ufficiale, basati su Headless/Radix + utility Tailwind/Token AGID, A11Y-first. **Rileggi Sezione 6.**

**Prerequisiti:** Package `ui-core` configurato con Tailwind ([2.4], [2.8]). `@italia/design-react-kit` disponibile ([2.6]).

**Istruzioni Specifiche:**
1.  **Verifica Assenza:** Conferma (ipoteticamente, ai fini dell'esercizio) che un componente `Card` generico non sia presente in `@italia/design-react-kit` o non soddisfi le esigenze base.
2.  **Crea File:** Naviga in `packages/ui-core/src/`. Crea una cartella `components/` se non esiste. Crea una sottocartella `Card/` dentro `components/`. Crea un file `Card.tsx` dentro `Card/`.
3.  **Implementa Componente:** Scrivi un componente React `Card` semplice.
    *   Deve accettare `children` e opzionalmente props come `title`, `className`.
    *   Usa un tag HTML semanticamente appropriato come contenitore (es. `div` o `section`, `article` a seconda del contesto d'uso previsto).
    *   Applica stili usando classi Tailwind che accedano ai token AGID mappati (es. per background, ombre, padding, border radius, colori testo). Usa `theme()` se necessario. Esempio base:
        ```typescript
        import React from 'react';
        import clsx from 'clsx'; // Utilità per classi condizionali (installare se non già presente)

        interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
          title?: string;
          children: React.ReactNode;
        }

        export const Card: React.FC<CardProps> = ({ title, children, className, ...props }) => {
          // Installa clsx: pnpm add clsx in packages/ui-core
          const cardClasses = clsx(
            'bg-white', // Usa theme('colors.background.card') se mappato
            'text-gray-900', // Usa theme('colors.text.default') se mappato
            'rounded-md', // Usa theme('borderRadius.md') se mappato
            'shadow-md', // Usa theme('boxShadow.md') se mappato
            'p-4', // Usa theme('spacing.4') se mappato
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-aede', // Stili focus (usa theme())
             className // Permetti classi custom
          );

          return (
            <div className={cardClasses} tabIndex={0} {...props}> {/* tabIndex per focus se interattiva o contenitore */}
              {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>} {/* Stili titolo */}
              <div>{children}</div>
            </div>
          );
        };

        // Esportalo anche da un index.ts per facilitare import
        // In packages/ui-core/src/components/index.ts: export * from './Card/Card';
        // In packages/ui-core/src/index.ts: export * from './components';
        ```
    *   **Accessibilità:** Assicurati che sia focalizzabile se appropriato (`tabIndex={0}`) e che abbia uno stile di focus visibile (ereditato da `globals.css` o specifico). Usa semantica appropriata (es. `h3` per il titolo se la card è una sezione).
4.  **Installa `clsx`:** Esegui `pnpm add clsx` in `packages/ui-core`.
5.  **Esporta:** Esporta il componente da un file indice (es. `packages/ui-core/src/components/index.ts` e poi riesporta da `packages/ui-core/src/index.ts`).

**Output Atteso:**
1.  Comando `pnpm` per installare `clsx`.
2.  Contenuto del file `packages/ui-core/src/components/Card/Card.tsx`.
3.  Contenuto dei file indice per esportare il componente (es. `components/index.ts` e `src/index.ts`).
4.  Nota sulla documentazione della scelta (assenza nel kit).
```

---

**Prompt per Task [2.12]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.10] Setup base, Storybook; [2.11] Componente custom `Card` creato in `ui-core`.

**Task Attuale:** [2.12] Crea una storia Storybook per il componente custom `Card`, includendo controlli A11y tramite l'addon.

**Riferimento Standard v1.2:** Sezione 6 (Libreria di Componenti Fondamentale) richiede Storybook per `ui-core` con test A11y. **Rileggi Sezione 6.**

**Prerequisiti:** Componente `Card` creato ed esportato ([2.11]). Storybook configurato con addon A11y ([2.8], [2.9]).

**Istruzioni Specifiche:**
1.  Naviga in `packages/ui-core/src/`.
2.  Crea un file per la storia della Card, es. `components/Card/Card.stories.tsx`.
3.  Importa il componente `Card` dal percorso corretto (es. `from './Card'`).
4.  Scrivi una storia base usando il formato CSF 3.0:
    ```typescript
    import type { Meta, StoryObj } from '@storybook/react';
    import { Card } from './Card'; // Importa il componente

    const meta: Meta<typeof Card> = {
      title: 'UI Core/Card', // Path nella UI di Storybook
      component: Card,
      tags: ['autodocs'],
      argTypes: {
        title: { control: 'text' },
        children: { control: 'text' }, // Permette di cambiare il contenuto nel pannello Controlli
        className: { control: 'text'},
      },
      parameters: {
         // Opzionale: Aggiungere qui info accessibilità specifiche se necessario
         a11y: {
            // element: '#root', // Target element per i test a11y (opzionale, default è il componente)
            // config: { rules: [] }, // Disabilita/configura regole axe specifiche (usare con cautela)
            // options: {},
         },
         layout: 'padded', // Aggiunge padding attorno alla storia
      },
    };

    export default meta;
    type Story = StoryObj<typeof Card>;

    // Storia di Base
    export const Default: Story = {
      args: {
        title: 'Titolo della Card',
        children: 'Questo è il contenuto della card. Può contenere testo, altri componenti, ecc.',
        className: 'max-w-md', // Esempio classe Tailwind aggiuntiva
      },
    };

    // Storia senza Titolo
    export const NoTitle: Story = {
      args: {
         children: 'Questa card non ha un titolo esplicito. Il contenuto è il focus principale.',
      },
    };

     // Storia con Contenuto Complesso (esempio)
     export const WithComplexContent: Story = {
      args: {
        title: 'Card con Elementi Interni',
        children: (
          <div>
            <p className="mb-2">Paragrafo di testo all'interno della card.</p>
            <button
              type="button"
              className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              onClick={() => alert('Azione!')}
            >
              Azione Esempio
            </button>
          </div>
        ),
      },
    };
    ```
5.  **Verifica A11y:** Una volta avviato Storybook, controlla il pannello "Accessibility" per questa storia. Dovrebbe eseguire i test Axe e mostrare i risultati (idealmente nessuna violazione).

**Output Atteso:** Il contenuto completo del file `packages/ui-core/src/components/Card/Card.stories.tsx`.
```

---

**Prompt per Task [3.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[2.12] Setup Monorepo, App Next.js, Styling, UI Core, Storybook. Fase 2 completata.

**Task Attuale:** [3.1] Nel package `packages/store-config`, installa **Redux Toolkit (RTK) v2.3.4+** come da Sez. 3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Gestione Stato (Core): Redux Toolkit (RTK) v2.3.4+ con RTK Query". **Rileggi Sezione 3.**

**Prerequisiti:** Package `packages/store-config` creato con `package.json` ([0.12]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `packages/store-config`.
2.  Usa `pnpm` per installare le dipendenze necessarie per Redux Toolkit: `@reduxjs/toolkit` e `react-redux`. Assicurati di installare una versione di `@reduxjs/toolkit` compatibile con `v2.3.4+`.
3.  Comando: `pnpm add @reduxjs/toolkit@^2.3.4 react-redux`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `@reduxjs/toolkit` e `react-redux` in `packages/store-config`.
```

---

**Prompt per Task [3.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.1] Setup base, RTK installato; [3.2] `api.ts` (RTK Query base) implementato.

**Task Attuale:** [3.3] Implementa `packages/store-config/src/features/authSlice.ts` (rinominato da `userSlice` per chiarezza) come da Sez. 4.2, includendo stato `user`, `token`, reducers `setCredentials`, `logout`. Definisci l'interfaccia `User` e `AuthState`. Inietta un endpoint d'esempio `getUserProfile` (con placeholder Zod e `transformResponse`), `providesTags`. Esporta hooks, azioni, reducer e selectors.

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Contiene uno snippet dettagliato per `userSlice.ts` (che rinominiamo `authSlice.ts`). Specifica l'uso di `createSlice`, `PayloadAction`, import di `apiSlice` e `RootState` (placeholder), definizione interfacce `User`, `AuthState`, `initialState`, `apiSlice.injectEndpoints` per `getUserProfile` (con `transformResponse` e `providesTags`), export hook, definizione reducers `setCredentials`/`logout`, `extraReducers`, export azioni/reducer/selectors. **Rileggi attentamente lo snippet di `userSlice.ts` (da adattare ad `authSlice.ts`) nella Sezione 4.2.**

**Prerequisiti:** Package `store-config` con RTK installato ([3.1]), file `api.ts` esistente ([3.2]).

**Istruzioni Specifiche:**
1.  Crea la cartella `features/` dentro `packages/store-config/src/`.
2.  Crea un file `authSlice.ts` dentro `packages/store-config/src/features/`.
3.  Popola il file `authSlice.ts` adattando *esattamente* lo snippet di `userSlice.ts` dalla Sezione 4.2:
    *   Rinomina la slice in `'auth'` e le variabili/tipi correlati (es. `AuthState`).
    *   Importa `createSlice`, `PayloadAction` da `@reduxjs/toolkit`.
    *   Importa `apiSlice` da `../api`.
    *   Importa `RootState` da `../store` (commenta temporaneamente se `store.ts` non esiste ancora).
    *   Definisci le interfacce `User` (con `id`, `name`, `email`, `codiceFiscale`) e `AuthState` (con `user: User | null`, `token: string | null`).
    *   Definisci `initialState: AuthState`.
    *   **Placeholder Zod:** Definisci un commento `// TODO: Definire UserApiResponseSchema con Zod (Task 3.5)` e un tipo placeholder `type UserApiResponse = any;`. Nel `transformResponse`, usa un parsing fittizio o commentato: `// const parsed = UserApiResponseSchema.parse(response); return response as User; // ADATTARE DOPO ZOD`.
    *   Implementa `apiSlice.injectEndpoints` per definire `getUserProfile` con `query: () => '/user/profile'`, il `transformResponse` (con placeholder sopra), e `providesTags`.
    *   Esporta l'hook generato `useGetUserProfileQuery`.
    *   Implementa `createSlice` con `name: 'auth'`, `initialState`, e i reducers `setCredentials(state, action: PayloadAction<{ user: User; token: string }>)` e `logout(state)`.
    *   Includi il blocco `extraReducers` (anche se l'esempio commenta l'aggiornamento dello stato lì).
    *   Esporta le actions `setCredentials`, `logout`.
    *   Esporta il reducer `authSlice.reducer`.
    *   Esporta i selectors `selectCurrentUser` e `selectAuthToken` (che leggono da `state.auth`).
4.  Crea un file `index.ts` in `packages/store-config/src/features/` che esporti il reducer: `export { default as authReducer } from './authSlice';`.
5.  Aggiungi l'export delle feature al file `index.ts` principale del package: aggiungi `export * from './features';` a `packages/store-config/src/index.ts`.

**Output Atteso:**
1.  Comando per creare la cartella `features/`.
2.  Contenuto completo del file `packages/store-config/src/features/authSlice.ts` (con placeholder Zod).
3.  Contenuto del file `packages/store-config/src/features/index.ts`.
4.  Riga da aggiungere a `packages/store-config/src/index.ts`.
```

---

**Prompt per Task [3.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.2] Setup base, RTK; [3.3] `authSlice.ts` creato (con placeholder Zod).

**Task Attuale:** [3.4] Installa **Zod v3.23.8+** come da Sez. 3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Validazione Dati: Zod v3.23.8+". Viene usato in diverse sezioni (4.2, 8.1). Installiamo nel package `store-config` dove è usato per la trasformazione API e anche nell'app dove servirà per i form. *Modifica: Installiamolo a livello root workspace per renderlo disponibile ovunque.*
**Rileggi Sezione 3.**

**Prerequisiti:** Monorepo configurato con pnpm ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella **root** del monorepo (`ae-frontend-platform`).
2.  Usa `pnpm` per installare `zod` come dipendenza normale (non dev, può servire a runtime) a livello workspace. Assicurati di installare una versione compatibile con `v3.23.8+`.
3.  Comando: `pnpm add -w zod@^3.23.8` (il flag `-w` lo installa nella root).

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `zod` nella root del monorepo.
```

---

**Prompt per Task [3.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.3] Setup base, RTK, authSlice; [3.4] Zod installato.

**Task Attuale:** [3.5] Definisci lo schema Zod (`UserApiResponseSchema`) in `authSlice.ts` e usalo nel `transformResponse`.

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Lo snippet per `userSlice.ts` (adattato in `authSlice.ts`) include la definizione dello schema `UserApiResponseSchema` e il suo uso in `transformResponse` con `.parse()`. **Rileggi lo snippet di `userSlice.ts` nella Sezione 4.2.**

**Prerequisiti:** `authSlice.ts` esistente ([3.3]), Zod installato ([3.4]).

**Istruzioni Specifiche:**
1.  Apri il file `packages/store-config/src/features/authSlice.ts`.
2.  **Importa Zod:** Aggiungi `import * as z from 'zod';` all'inizio del file.
3.  **Definisci Schema:** Rimuovi il commento `// TODO: Definire UserApiResponseSchema...` e il tipo placeholder. Inserisci la definizione dello schema Zod *esattamente* come nello snippet (adattando i nomi dei campi se necessario per coerenza, ma usiamo quelli dello snippet):
    ```typescript
    const UserApiResponseSchema = z.object({
        userId: z.string(),
        userName: z.string(),
        userEmail: z.string().email(),
        cf: z.string(), // Assumendo che l'API ritorni questi campi
    });
    ```
4.  **Usa Schema in `transformResponse`:** Modifica la funzione `transformResponse` dentro `apiSlice.injectEndpoints` per usare lo schema:
    ```typescript
    transformResponse: (response) => {
      // Validare e trasformare la risposta API nello stato User
      const parsed = UserApiResponseSchema.parse(response); // Usa .parse()
      return {
        id: parsed.userId,
        name: parsed.userName,
        email: parsed.userEmail,
        codiceFiscale: parsed.cf,
      };
    },
    ```

**Output Atteso:** Il contenuto aggiornato del file `packages/store-config/src/features/authSlice.ts` con Zod importato, lo schema definito e utilizzato correttamente nel `transformResponse`.
```

---

**Prompt per Task [3.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.4] Setup base, RTK, authSlice; [3.5] Schema Zod definito e usato in `authSlice.ts`.

**Task Attuale:** [3.6] Verifica l'iniezione dell'endpoint `getUserProfile` e l'esportazione dell'hook `useGetUserProfileQuery` in `authSlice.ts`.

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Lo snippet mostra chiaramente la chiamata a `apiSlice.injectEndpoints` e l'esportazione dell'hook generato (`export const { useGetUserProfileQuery } = userApi;` adattato a `authApi`). **Rileggi lo snippet di `userSlice.ts` (adattato ad `authSlice.ts`) nella Sezione 4.2.**

**Prerequisiti:** `authSlice.ts` aggiornato con Zod ([3.5]).

**Istruzioni Specifiche:**
1.  Apri il file `packages/store-config/src/features/authSlice.ts`.
2.  Verifica che la costante che riceve il risultato di `apiSlice.injectEndpoints` (chiamata `userApi` nello snippet, rinominiamola `authApi` per coerenza) sia definita correttamente.
3.  Verifica che l'export dell'hook sia presente e corretto: `export const { useGetUserProfileQuery } = authApi;`. Assicurati che usi il nome `authApi` (o qualunque nome sia stato dato alla costante nel passo precedente).

**Output Atteso:** Conferma che il codice in `authSlice.ts` per `injectEndpoints` e l'export dell'hook sia corretto come da Standard v1.2 (adattato per `authSlice`). Se non corretto, fornire lo snippet corretto per la definizione di `authApi` e l'export dell'hook. Esempio corretto:
```typescript
// Dentro authSlice.ts
const authApi = apiSlice.injectEndpoints({ // Rinominato da userApi
  endpoints: (builder) => ({
    getUserProfile: builder.query<User, void>({
      query: () => '/user/profile', // Endpoint API per il profilo
      transformResponse: (response) => {
        // ... (implementazione con Zod da Task 3.5)
        const parsed = UserApiResponseSchema.parse(response);
        return {
          id: parsed.userId,
          name: parsed.userName,
          email: parsed.userEmail,
          codiceFiscale: parsed.cf,
        };
      },
      providesTags: (result) => result ? [{ type: 'User', id: result.id }] : [],
    }),
    // Aggiungere qui mutazioni se necessario
  }),
  // overrideExisting: false, // Default è false
});

export const { useGetUserProfileQuery } = authApi; // Esporta l'hook generato usando il nome corretto
```


---

**Prompt per Task [3.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.5] Setup base, RTK, authSlice completo; [3.6] Verifica hook export.

**Task Attuale:** [3.7] Implementa `packages/store-config/src/store.ts` con `makeStore` che configura lo store RTK includendo `apiSlice` e `authReducer`, middleware, DevTools. Esporta tipi `AppStore`, `RootState`, `AppDispatch`.

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Contiene uno snippet dettagliato per `store.ts` che mostra `configureStore`, l'uso di `apiSlice.reducerPath` e `apiSlice.reducer`, l'aggiunta di `authReducer` (esportato da `features/index.ts`), la concatenazione del `apiSlice.middleware`, e l'abilitazione condizionale dei DevTools. Definisce ed esporta i tipi necessari. **Rileggi attentamente lo snippet di `store.ts` nella Sezione 4.2.**

**Prerequisiti:** `apiSlice` definito ed esportato ([3.2]). `authReducer` definito ed esportato da `features/index.ts` ([3.3]).

**Istruzioni Specifiche:**
1.  Crea un file `store.ts` dentro `packages/store-config/src/`.
2.  Popola il file `store.ts` con il codice *esattamente* come mostrato nello snippet della Sezione 4.2:
    ```typescript
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
    ```
3.  **Verifica Import:** Assicurati che l'import di `authReducer` da `./features` sia corretto (deve puntare a `features/index.ts`). Assicurati che l'import di `apiSlice` da `./api` sia corretto.
4.  **Esporta Tipi e Funzione:** Aggiungi gli export necessari al file `index.ts` principale del package: aggiungi `export * from './store';` a `packages/store-config/src/index.ts`. Ora l'import di `RootState` in `api.ts` dovrebbe funzionare (potrebbe essere necessario riavviare il TS server).

**Output Atteso:**
1.  Contenuto completo del file `packages/store-config/src/store.ts`.
2.  Riga da aggiungere a `packages/store-config/src/index.ts`.
3.  *Nota:* Verificare/richiedere all'AI di verificare che l'import di `RootState` in `api.ts` non dia più errore.
```

---

**Prompt per Task [3.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.6] Setup base, RTK Store configurato; [3.7] `store.ts` implementato con tipi esportati.

**Task Attuale:** [3.8] Crea il componente `StoreProvider` in `apps/app-example/src/components/providers/StoreProvider.tsx` usando il pattern `useRef` come da Sez. 4.2, importando `makeStore`, `AppStore` da `@ae/store-config`.

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Contiene uno snippet dettagliato per `StoreProvider.tsx`. Specifica l'uso di `'use client'`, `useRef`, `Provider` da `react-redux`, e l'import di `makeStore`/`AppStore` dal package condiviso (`@ae/store-config`). **Rileggi attentamente lo snippet di `StoreProvider.tsx` nella Sezione 4.2.**

**Prerequisiti:** Funzione `makeStore` e tipo `AppStore` esportati da `packages/store-config` ([3.7]). App `app-example` esistente ([0.11]).

**Istruzioni Specifiche:**
1.  Crea la cartella `components/providers/` dentro `apps/app-example/src/` (se non esiste già).
2.  Crea un file `StoreProvider.tsx` dentro `apps/app-example/src/components/providers/`.
3.  Popola il file `StoreProvider.tsx` con il codice *esattamente* come mostrato nello snippet della Sezione 4.2:
    ```typescript
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
    ```
4.  **Verifica Import:** Assicurati che l'import da `@ae/store-config` funzioni correttamente nel contesto del monorepo (potrebbe richiedere che il package sia buildato o che TS/bundler siano configurati per risolvere i workspace). Se l'alias non funziona, usa un path relativo (es. `../../../../packages/store-config/src`).

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/components/providers/StoreProvider.tsx`.
```

---

**Prompt per Task [3.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.7] Setup base, Store configurato; [3.8] Componente `StoreProvider` creato.

**Task Attuale:** [3.9] Integra `<StoreProvider>` nel layout radice (`apps/app-example/src/app/layout.tsx`).

**Riferimento Standard v1.2:** Implicito nella necessità di fornire lo store all'applicazione. Il layout radice (Sez 4.1) è il posto corretto per i provider globali. **Rivisita Sezione 4.1 e 4.2.**

**Prerequisiti:** Componente `StoreProvider` creato ([3.8]). File `apps/app-example/src/app/layout.tsx` esistente ([1.2]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/layout.tsx`.
2.  Importa il componente `StoreProvider` dal suo percorso: `import StoreProvider from '@/components/providers/StoreProvider';` (verifica che l'alias `@/` funzioni o usa un path relativo).
3.  Nel componente `RootLayout`, individua il tag `<body>`.
4.  Wrappa il `{children}` all'interno del `<body>` con il componente `<StoreProvider>`:
    ```typescript
    // Esempio dentro src/app/layout.tsx
    import StoreProvider from '@/components/providers/StoreProvider'; // Verifica path import
    // ... altri import ...

    export default function RootLayout({ children }: { children: React.ReactNode }) {
      return (
        <html lang="it"> {/* O gestito dinamicamente */}
          <body>
            <StoreProvider> {/* Wrappa i children con il provider */}
              {/* Qui potrebbero esserci altri provider globali */}
              {children}
            </StoreProvider>
          </body>
        </html>
      );
    }
    ```

**Output Atteso:** Il contenuto aggiornato del file `apps/app-example/src/app/layout.tsx` mostrando `<StoreProvider>` che wrappa `{children}`.
```

---

**Prompt per Task [3.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.8] Setup base, Store fornito all'app; [3.9] Provider integrato.

**Task Attuale:** [3.10] Nel package `packages/utils-ae` (o direttamente nell'app se specifico), installa **React Hook Form v7.51.2+** come da Sez. 3. *Decisione: Installiamo nell'app `app-example` dove verrà usato l'esempio.*

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "React Hook Form v7.51.2+". Sezione 4.2 lo menziona insieme a Zod per i form. **Rileggi Sezione 3 e 4.2.**

**Prerequisiti:** App `app-example` esistente ([0.11]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `react-hook-form` come dipendenza normale. Assicurati di installare una versione compatibile con `v7.51.2+`.
3.  Comando: `pnpm add react-hook-form@^7.51.2`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `react-hook-form` in `apps/app-example`.
```

---

**Prompt per Task [3.11]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.9] Setup base, Store; [3.10] React Hook Form installato nell'app.

**Task Attuale:** [3.11] Installa `@hookform/resolvers` per integrare Zod con React Hook Form.

**Riferimento Standard v1.2:** Sezione 4.2 menziona l'uso di React Hook Form con `zodResolver`. Questo resolver si trova nel pacchetto `@hookform/resolvers`. **Rileggi Sezione 4.2.**

**Prerequisiti:** React Hook Form installato ([3.10]). App `app-example` esistente. Zod installato ([3.4]). pnpm.

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `@hookform/resolvers` come dipendenza normale.
3.  Comando: `pnpm add @hookform/resolvers`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `@hookform/resolvers` in `apps/app-example`.
```

---

**Prompt per Task [3.12]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.10] Setup base, RHF installato; [3.11] Resolver installato.

**Task Attuale:** [3.12] Crea un componente d'esempio (es. `ProfileFormStub` in `apps/app-example/src/components/forms/`) che utilizza `useForm` con `zodResolver` e uno schema Zod per la validazione, dimostrando l'integrazione (come da Sez. 4.2).

**Riferimento Standard v1.2:** Sezione 4.2 menziona l'uso di `useForm` con `zodResolver`. Lo Standard v1.0/v1.1 menzionava un `ProfileForm` (non nello snippet v1.2), quindi creiamo uno stub simile. **Rileggi Sezione 4.2.**

**Prerequisiti:** RHF, resolver, Zod installati ([3.10], [3.11], [3.4]). App `app-example` esistente.

**Istruzioni Specifiche:**
1.  Crea la cartella `components/forms/` dentro `apps/app-example/src/` (se non esiste già).
2.  Crea un file `ProfileFormStub.tsx` dentro `apps/app-example/src/components/forms/`.
3.  Implementa un componente React `ProfileFormStub` che sia un client component (`'use client'`).
4.  Importa `useForm` da `react-hook-form`, `zodResolver` da `@hookform/resolvers/zod`, e `z` da `zod`.
5.  Definisci uno schema Zod semplice per i dati del form (es. `name: string`, `email: email`).
6.  Definisci un tipo TypeScript basato sullo schema Zod (`type ProfileFormData = z.infer<typeof profileFormSchema>;`).
7.  Nel componente, chiama `useForm<ProfileFormData>()` passando `{ resolver: zodResolver(profileFormSchema) }`.
8.  Estrai `register`, `handleSubmit`, `formState: { errors }` da `useForm`.
9.  Implementa una funzione `onSubmit` che riceva i dati validati (`data: ProfileFormData`) e li stampi in console.
10. Nel JSX, crea un tag `<form>` con `onSubmit={handleSubmit(onSubmit)}`.
11. Aggiungi campi input (es. per nome ed email) usando `{...register('fieldName')}`.
12. Mostra i messaggi di errore sotto i campi usando `errors.fieldName?.message`.
13. Aggiungi un bottone di submit (`type="submit"`).
14. Usa componenti base HTML o componenti da `@italia/design-react-kit` (se già configurati e appropriati) per gli input e il bottone, applicando stili Tailwind base.

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/components/forms/ProfileFormStub.tsx`.
```

---

**Prompt per Task [3.13]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.11] Setup base, RHF/Zod; [3.12] Form esempio creato.

**Task Attuale:** [3.13] Crea un esempio di API Route in `src/app/api/` (es., `/api/user-summary/route.ts`) che simula il pattern BFF (aggregazione/adattamento dati, anche mockati inizialmente) come da Sez. 4.4. Assicura che usi la validazione Zod per eventuali input.

**Riferimento Standard v1.2:** Sezione 4.4 (Gestione Chiamate API e Dati) raccomanda il pattern BFF usando API Routes. Sez. 8.1 richiede validazione Zod degli input in API Routes. **Rileggi Sezioni 4.4 e 8.1.**

**Prerequisiti:** Cartella `src/app/api/` esistente ([1.7]). Zod installato ([3.4]).

**Istruzioni Specifiche:**
1.  Crea la cartella `user-summary/` dentro `apps/app-example/src/app/api/`.
2.  Crea un file `route.ts` dentro `apps/app-example/src/app/api/user-summary/`.
3.  Implementa una funzione `GET` asincrona che simuli il recupero e l'aggregazione di dati utente.
    *   Importa `NextResponse` da `next/server`.
    *   La funzione `GET` può restituire dati mockati che rappresentano un riassunto del profilo utente.
    *   Esempio:
        ```typescript
        import { NextResponse } from 'next/server';
        // import * as z from 'zod'; // Necessario se ci fosse input da validare

        // Esempio: Schema Zod per validare parametri query se ci fossero
        // const QueryParamsSchema = z.object({ userId: z.string().optional() });

        export async function GET(request: Request) { // Request è standard Web API
          // const { searchParams } = new URL(request.url);
          // try {
          //   // Esempio validazione query params (se applicabile)
          //   const queryParams = QueryParamsSchema.parse(Object.fromEntries(searchParams));
          //   console.log('Validated query params:', queryParams);
          // } catch (error) {
          //   // Gestione errore validazione
          //   return NextResponse.json({ error: 'Invalid query parameters', details: error }, { status: 400 });
          // }

          // Simulazione recupero/aggregazione dati BFF
          await new Promise(resolve => setTimeout(resolve, 100)); // Simula attesa API

          const userSummary = {
            userId: 'mock-user-123',
            name: 'Mario Rossi',
            unreadMessages: 5,
            lastLogin: new Date().toISOString(),
            cfMasked: 'RSSMRA**********A', // Esempio dato aggregato/mascherato
          };

          // Includi Correlation ID nella risposta (opzionale qui, già nel middleware)
          const correlationId = request.headers.get('X-Correlation-ID');
          const headers = new Headers();
          if (correlationId) {
              headers.set('X-Correlation-ID', correlationId);
          }

          return NextResponse.json(userSummary, { headers });
        }

        // Esempio POST con validazione body Zod (se necessario)
        // const PostBodySchema = z.object({ preference: z.string() });
        // export async function POST(request: Request) {
        //   try {
        //     const body = await request.json();
        //     const validatedBody = PostBodySchema.parse(body);
        //     // Logica per salvare la preferenza
        //     return NextResponse.json({ success: true, data: validatedBody });
        //   } catch (error) {
        //     // Gestione errore validazione o altro
        //     return NextResponse.json({ error: 'Invalid request body', details: error }, { status: 400 });
        //   }
        // }
        ```
4.  **Focus su GET:** Implementa solo la funzione `GET` come richiesto dall'esempio BFF `user-summary`, restituendo dati mockati. Lascia i commenti per la validazione Zod (query o body) come riferimento per future implementazioni o altri endpoint.
5.  Assicurati di importare `NextResponse`.

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/app/api/user-summary/route.ts`.
```

---

**Prompt per Task [4.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.13] Setup Monorepo, App Next.js, Styling, State Management, Form, BFF Stub. Fase 3 completata.

**Task Attuale:** [4.1] Nell'app `app-example`, installa **Next-Auth / Auth.js v4.24.11+** come da Sez. 3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica "Autenticazione/Autorizzazione: Next-Auth / Auth.js v4.24.11+". **Rileggi Sezione 3.**

**Prerequisiti:** App `app-example` esistente ([0.11]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `next-auth` come dipendenza normale. Assicurati di installare una versione compatibile con `v4.24.11+`.
3.  Comando: `pnpm add next-auth@^4.24.11`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `next-auth` in `apps/app-example`.
```

---

**Prompt per Task [4.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.1] Setup base, Next-Auth installato.

**Task Attuale:** [4.2] Implementa la route handler di Next-Auth (es. `src/app/api/auth/[...nextauth]/route.ts`) come da Sez. 4.5.

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) discute la configurazione di Next-Auth, implicando la creazione del file route handler standard `[...nextauth]`. **Rileggi Sezione 4.5.**

**Prerequisiti:** Next-Auth installato ([4.1]). Cartella `src/app/api/auth/` (o da creare).

**Istruzioni Specifiche:**
1.  Crea la cartella `auth/` dentro `apps/app-example/src/app/api/`.
2.  Crea la cartella `[...nextauth]/` dentro `apps/app-example/src/app/api/auth/`.
3.  Crea un file `route.ts` dentro `apps/app-example/src/app/api/auth/[...nextauth]/`.
4.  Implementa la struttura base del file:
    ```typescript
    // apps/app-example/src/app/api/auth/[...nextauth]/route.ts
    import NextAuth, { AuthOptions } from 'next-auth';
    // Importa qui i provider e gli adapter necessari (verranno configurati dopo)
    // import OAuthProvider from 'next-auth/providers/oauth'; // Esempio generico

    // Definisci le opzioni di autenticazione
    // Verranno popolate nei task successivi
    export const authOptions: AuthOptions = {
      // Configure one or more authentication providers
      providers: [
        // Provider(s) verranno aggiunti qui (Task 4.3)
        // Esempio Placeholder:
        // OAuthProvider({ /* config */ })
      ],
      // Callbacks verranno aggiunti qui (Task 4.4)
      callbacks: {
        // async jwt({ token, account, profile }) { /* ... */ },
        // async session({ session, token, user }) { /* ... */ },
      },
      // Strategy di sessione verrà configurata qui (Task 4.5)
      session: {
        // strategy: "jwt", // o "database"
      },
      // Aggiungere altre opzioni necessarie (es. secret, pages, adapter)
      secret: process.env.NEXTAUTH_SECRET, // OBBLIGATORIO per produzione
      // pages: { signIn: '/auth/signin', /* ... */ }, // Pagine custom (opzionale)
    };

    // Esporta l'handler
    const handler = NextAuth(authOptions);

    export { handler as GET, handler as POST };
    ```
5.  **Variabile d'Ambiente:** Assicurati che `NEXTAUTH_SECRET` sia menzionato. Sarà necessario aggiungerlo a `.env.local` / `.env.example` (Task 8.9).

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/app/api/auth/[...nextauth]/route.ts` con la struttura base e i placeholder per le configurazioni future.
```


---

**Prompt per Task [4.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.1] Setup base; [4.2] Route handler Next-Auth base creata.

**Task Attuale:** [4.3] Configura il provider OAuth2/OIDC per SPID/CIE in `authOptions` (nel file `[...nextauth]/route.ts`), usando variabili d'ambiente per `clientId`, `clientSecret`, `issuer`, `authorization`, `token`, `userinfo` endpoints. Configura `acr_values` specifici AdE se noti (come placeholder).

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) richiede la configurazione di un provider OAuth2/OIDC specifico per il gateway AdE, menzionando mapping attributi e `acr_values`. Sezione 8.5 (Gestione Sicura dei Segreti) richiede l'uso di env vars. **Rileggi Sezioni 4.5 e 8.5.**

**Prerequisiti:** File `[...nextauth]/route.ts` esistente con `authOptions` ([4.2]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/api/auth/[...nextauth]/route.ts`.
2.  Importa un provider OAuth generico o specifico se disponibile (usiamo `import OIDCProvider from 'next-auth/providers/oidc';`).
3.  Dentro l'array `providers` di `authOptions`, aggiungi la configurazione per il provider OIDC SPID/CIE:
    ```typescript
    // Dentro authOptions:
    providers: [
      OIDCProvider({
        id: "spid", // Identificativo unico per il provider
        name: "SPID/CIE AdE", // Nome visualizzato
        type: "oidc",
        // Usa variabili d'ambiente per tutti i valori sensibili/configurabili
        issuer: process.env.SPID_CIE_OIDC_ISSUER,
        clientId: process.env.SPID_CIE_OIDC_CLIENT_ID,
        clientSecret: process.env.SPID_CIE_OIDC_CLIENT_SECRET,
        authorization: {
          params: {
            scope: "openid profile email offline_access", // Richiedi scope necessari
            // Livelli SPID/CIE richiesti tramite acr_values
            // Esempio: L2 per SPID, l2/l3 per CIE (verificare specifiche AdE)
            acr_values: process.env.SPID_CIE_OIDC_ACR_VALUES || "https://www.spid.gov.it/SpidL2 https://www.cartaidentita.it/cie-l2",
          },
        },
        // Opzionale: definire esplicitamente gli endpoint se non derivabili dall'issuer
        // token: process.env.SPID_CIE_OIDC_TOKEN_ENDPOINT,
        // userinfo: process.env.SPID_CIE_OIDC_USERINFO_ENDPOINT,

        // Mapping del profilo (verrà affinato nel Task 4.4)
        profile(profile) {
          // Mappare gli attributi ricevuti dall'IDP allo User object di NextAuth
          // Esempio base (DA VERIFICARE CON ATTRIBUTI REALI SPID/CIE OIDC AdE):
          return {
            id: profile.sub, // Subject ID è standard OIDC
            name: profile.name || profile.preferred_username,
            email: profile.email,
            // Aggiungere altri campi necessari, es. codice fiscale se presente
            codiceFiscale: profile.fiscal_number || profile.codice_fiscale, // Nome attributo da verificare
          };
        },
      }),
      // Aggiungere altri provider se necessario
    ],
    ```
4.  **Variabili d'Ambiente:** Assicurati che tutte le variabili d'ambiente usate (`SPID_CIE_OIDC_ISSUER`, `CLIENT_ID`, `CLIENT_SECRET`, `ACR_VALUES`, etc.) siano documentate come necessarie (verranno aggiunte a `.env.example` nel Task 8.9). Usa placeholder ragionevoli per `acr_values` se quelli specifici AdE non sono noti.
5.  **Mapping Profilo:** Includi la funzione `profile` base come mostrato, ma con commenti che indicano la necessità di verificare i nomi esatti degli attributi restituiti dal provider AdE (specialmente per il codice fiscale).

**Output Atteso:** Il contenuto aggiornato del file `[...nextauth]/route.ts` con l'array `providers` popolato con la configurazione OIDC per SPID/CIE, utilizzando variabili d'ambiente e includendo un mapping `profile` di base.
```

---

**Prompt per Task [4.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.2] Setup base, handler Next-Auth; [4.3] Provider OIDC SPID/CIE configurato.

**Task Attuale:** [4.4] Configura i callback di Next-Auth (`jwt`, `session`) in `authOptions` per mappare gli attributi SPID/CIE (incluso codice fiscale) alla sessione utente e includere il token di accesso/ID token se necessario.

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) menziona il mapping degli attributi e l'uso della sessione. **Rileggi Sezione 4.5.** I callback `jwt` e `session` sono standard Next-Auth per questo scopo.

**Prerequisiti:** File `[...nextauth]/route.ts` con `authOptions` e provider configurato ([4.3]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/api/auth/[...nextauth]/route.ts`.
2.  Aggiungi la sezione `callbacks` all'interno di `authOptions`.
3.  Implementa il callback `jwt`:
    *   Questo callback viene eseguito quando viene creato/aggiornato un JSON Web Token (se si usa la strategia JWT).
    *   Conserva informazioni importanti nel token JWT, come `id_token`, `access_token`, `refresh_token` (se disponibili e necessari), e attributi utente fondamentali come `codiceFiscale` e `sub` (user id).
    *   Esempio:
        ```typescript
        callbacks: {
          async jwt({ token, user, account, profile }) {
            // Fase iniziale di sign-in
            if (account && user) {
              token.idToken = account.id_token;
              token.accessToken = account.access_token;
              token.refreshToken = account.refresh_token;
              token.expiresAt = account.expires_at; // Scadenza access token
              token.userId = user.id; // o token.sub = user.id; (sub è standard)
              // Aggiungi attributi custom dal profilo mappato o dall'utente
              // Assicurati che 'codiceFiscale' sia nel tipo User o aggiunto qui
              token.codiceFiscale = (user as any).codiceFiscale || (profile as any)?.fiscal_number;
            }

            // TODO: Logica per refresh token se necessario (non inclusa nello snippet base)

            return token; // Il token risultante viene salvato nel cookie
          },
          // ... callback session sotto ...
        }
        ```
4.  Implementa il callback `session`:
    *   Questo callback viene eseguito quando si accede alla sessione (es. `useSession`, `getServerSession`).
    *   Trasferisce i dati dal `token` JWT (o dal database se si usa strategy database) all'oggetto `session` che viene esposto al frontend.
    *   Assicurati di includere `user.id` e `user.codiceFiscale` (e altri campi necessari) nell'oggetto `session.user`. Includi anche `accessToken` se serve al client.
    *   Esempio:
        ```typescript
        // Dentro callbacks:
          async session({ session, token, user }) {
            // 'token' qui è il contenuto del JWT (dal callback jwt)
            // 'user' qui è l'oggetto user dal DB se si usa strategy database

            // Passa info dal token JWT alla sessione client-side
            if (token) {
              session.user.id = token.userId as string || token.sub;
              session.user.codiceFiscale = token.codiceFiscale as string;
              session.accessToken = token.accessToken as string;
              // Aggiungi altri campi utente necessari dal token
              // session.user.name = token.name; // Già presente di default se nel token
              // session.user.email = token.email; // Già presente di default se nel token
            }
            // Se si usa strategy database, 'user' conterrà i dati dal DB
            // if (user) { session.user.id = user.id; /* ... */ }

            return session; // La sessione risultante viene resa disponibile
          },
        } // Fine callbacks
        ```
5.  **Adattamento Tipi:** Potrebbe essere necessario estendere i tipi `User`, `Session`, `JWT` di NextAuth per includere campi custom come `codiceFiscale`, `accessToken`, `idToken`. Crea un file `types/next-auth.d.ts` in `apps/app-example/src/` per il module augmentation:
    ```typescript
    // src/types/next-auth.d.ts
    import NextAuth, { DefaultSession, DefaultUser } from "next-auth"
    import { JWT, DefaultJWT } from "next-auth/jwt"

    declare module "next-auth" {
      /** Estende l'oggetto Session base */
      interface Session {
        user: {
          id: string;
          codiceFiscale?: string | null;
        } & DefaultSession["user"]; // Mantiene name, email, image
        accessToken?: string;
        error?: string; // Esempio per passare errori
      }

      /** Estende l'oggetto User base (usato nel profile e db adapter) */
      interface User extends DefaultUser {
         codiceFiscale?: string | null;
      }
    }

    declare module "next-auth/jwt" {
      /** Estende il token JWT base */
      interface JWT extends DefaultJWT {
        userId?: string;
        codiceFiscale?: string | null;
        accessToken?: string;
        refreshToken?: string;
        idToken?: string;
        expiresAt?: number;
        // Aggiungere altri campi necessari
      }
    }
    ```
6.  Assicurati che i nomi degli attributi (es. `codiceFiscale`, `fiscal_number`, `sub`) siano corretti in base a quanto ricevuto dal provider e definito nel `profile` callback e nei tipi estesi.

**Output Atteso:**
1.  Contenuto aggiornato del file `[...nextauth]/route.ts` con la sezione `callbacks` (`jwt`, `session`) implementata.
2.  Contenuto completo del file `apps/app-example/src/types/next-auth.d.ts` per l'estensione dei tipi.
```

---

**Prompt per Task [4.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.3] Setup base, provider OIDC; [4.4] Callback Next-Auth configurati.

**Task Attuale:** [4.5] Configura la strategia di sessione (raccomandato JWT con opzioni `httpOnly: true`, `secure: true`, `sameSite: 'strict'`).

**Riferimento Standard v1.2:** Sezione 8.4 (Autenticazione e Autorizzazione) raccomanda sessioni sicure (JWT HttpOnly/Secure/Strict o DB). **Rileggi Sezione 8.4.**

**Prerequisiti:** File `[...nextauth]/route.ts` con `authOptions` ([4.2]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/api/auth/[...nextauth]/route.ts`.
2.  Aggiungi (o modifica se già presente) la sezione `session` all'interno di `authOptions`.
3.  Imposta la `strategy` a `"jwt"`.
4.  Aggiungi la configurazione per i cookie JWT per renderli sicuri:
    ```typescript
    // Dentro authOptions:
    session: {
      strategy: "jwt", // Usa JWT per la sessione
      // maxAge: 30 * 24 * 60 * 60, // 30 giorni (opzionale)
      // updateAge: 24 * 60 * 60, // 24 ore (opzionale)
    },
    jwt: {
      // secret: process.env.NEXTAUTH_JWT_SECRET, // Opzionale se NEXTAUTH_SECRET è già definito
      // maxAge: 60 * 60 * 24 * 30, // Opzionale, default 30 giorni
      // encode: async ({ secret, token, maxAge }) => { /* ... custom encode ... */},
      // decode: async ({ secret, token }) => { /* ... custom decode ... */ },
    },
    // Configurazione specifica per i cookie
    cookies: {
      sessionToken: {
        name: `__Secure-next-auth.session-token`, // Prefisso __Secure- per https
        options: {
          httpOnly: true,
          sameSite: 'lax', // 'lax' è un buon default, 'strict' se possibile ma può dare problemi con redirect OIDC
          path: '/',
          secure: process.env.NODE_ENV === 'production', // secure solo in prod (https)
          // domain: 'example.com' // Specifica il dominio se necessario
        }
      },
      // Aggiungere configurazioni per altri cookie (callback, csrf) se necessario
      // Esempio per CSRF token:
      csrfToken: {
         name: `__Host-next-auth.csrf-token`, // Prefisso __Host- più restrittivo (https, no domain, path=/)
         options: {
           httpOnly: true,
           sameSite: 'lax', // Default per CSRF
           path: '/',
           secure: process.env.NODE_ENV === 'production',
         }
      }
    }
    ```
5.  **Considerazioni `sameSite`:** Usa `'lax'` come default ragionevole per il `sessionToken` per evitare problemi con i redirect OIDC post-login. Se le tue analisi di sicurezza lo permettono e non ci sono problemi, `'strict'` è più sicuro. Usa `'lax'` per CSRF come da default NextAuth.
6.  **Prefissi Cookie:** Usa `__Secure-` o `__Host-` per i nomi dei cookie per aumentare la sicurezza (richiedono HTTPS). `__Host-` è più restrittivo.

**Output Atteso:** Il contenuto aggiornato del file `[...nextauth]/route.ts` con le sezioni `session`, `jwt`, e `cookies` configurate per usare JWT in modo sicuro.
```

---

**Prompt per Task [4.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.4] Setup base, Next-Auth configurato; [4.5] Strategia sessione JWT sicura impostata.

**Task Attuale:** [4.6] Crea un componente client d'esempio che usa `useSession()` per mostrare lo stato dell'utente.

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) menziona l'uso di `useSession`. **Rileggi Sezione 4.5.**

**Prerequisiti:** Next-Auth configurato ([4.1]-[4.5]). App Next.js `app-example` esistente.

**Istruzioni Specifiche:**
1.  Crea un nuovo componente, ad esempio `UserInfo.tsx`, nella cartella `apps/app-example/src/components/auth/` (crea le cartelle se non esistono).
2.  Rendi il componente un Client Component (`'use client'`).
3.  Importa `useSession` da `"next-auth/react"`.
4.  Nel componente, chiama `const { data: session, status } = useSession();`.
5.  Renderizza condizionalmente l'output basato sullo `status`:
    *   Se `status === 'loading'`, mostra un messaggio di caricamento.
    *   Se `status === 'authenticated'`, mostra informazioni sull'utente dalla `session` (es. `session.user?.name`, `session.user?.email`, e il campo custom `session.user?.codiceFiscale`). Assicurati di usare optional chaining (`?.`).
    *   Se `status === 'unauthenticated'`, mostra un messaggio indicante che l'utente non è loggato.
    ```typescript
    'use client';
    import { useSession } from 'next-auth/react';

    export default function UserInfo() {
      const { data: session, status } = useSession();

      if (status === 'loading') {
        return <p>Caricamento sessione...</p>;
      }

      if (status === 'authenticated') {
        return (
          <div>
            <p>Accesso effettuato come:</p>
            <ul>
              <li>Nome: {session.user?.name ?? 'N/D'}</li>
              <li>Email: {session.user?.email ?? 'N/D'}</li>
              <li>ID: {session.user?.id ?? 'N/D'}</li>
              <li>CF: {session.user?.codiceFiscale ?? 'N/D'}</li>
              {/* Mostra altri dati se disponibili nella sessione */}
            </ul>
          </div>
        );
      }

      // status === 'unauthenticated'
      return <p>Utente non autenticato.</p>;
    }
    ```
6.  **Utilizzo Esempio:** Importa e usa questo componente `<UserInfo />` in una pagina o layout dell'app (es. nel layout `(main)` o nella pagina Profilo) per testare.

**Output Atteso:**
1.  Comandi per creare le cartelle `components/auth/` se necessario.
2.  Contenuto completo del file `apps/app-example/src/components/auth/UserInfo.tsx`.
3.  Istruzioni su dove aggiungere il componente `<UserInfo />` per testarlo (es. in `src/app/[lang]/(main)/layout.tsx`).
```

---

**Prompt per Task [4.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.5] Next-Auth configurato; [4.6] Componente `UserInfo` creato.

**Task Attuale:** [4.7] Implementa bottoni/azioni d'esempio per `signIn('spid')` e `signOut()`.

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) menziona `signIn('spid')` e `signOut`. **Rileggi Sezione 4.5.**

**Prerequisiti:** Next-Auth configurato, `useSession` disponibile ([4.6]).

**Istruzioni Specifiche:**
1.  Crea un nuovo componente, ad esempio `AuthButtons.tsx`, nella cartella `apps/app-example/src/components/auth/`.
2.  Rendi il componente un Client Component (`'use client'`).
3.  Importa `useSession`, `signIn`, `signOut` da `"next-auth/react"`.
4.  Nel componente, chiama `const { data: session, status } = useSession();`.
5.  Renderizza condizionalmente i bottoni:
    *   Se `status === 'authenticated'`, mostra un bottone "Logout" che chiama `signOut()` al click.
    *   Se `status === 'unauthenticated'`, mostra un bottone "Login SPID/CIE" che chiama `signIn('spid')` al click (usa l'ID del provider configurato nel Task 4.3).
    *   Se `status === 'loading'`, non mostrare nulla o un placeholder disabilitato.
    *   Usa componenti `<button>` HTML base o componenti Button da `@ae/ui-core` o `@italia/design-react-kit` se disponibili e stilizzati.
    ```typescript
    'use client';
    import { useSession, signIn, signOut } from 'next-auth/react';
    // Importa Button se usi un componente UI custom o dal design kit
    // import { Button } from '@ae/ui-core';

    export default function AuthButtons() {
      const { status } = useSession();

      if (status === 'loading') {
        return <button disabled className="px-3 py-1 border rounded bg-gray-200 text-gray-500">...</button>; // Placeholder disabilitato
      }

      if (status === 'authenticated') {
        return (
          <button
             onClick={() => signOut()}
             className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" // Usa stili Tailwind/Token
          >
            Logout
          </button>
        );
      }

      // status === 'unauthenticated'
      return (
        <button
           onClick={() => signIn('spid')} // Usa l'ID del provider configurato!
           className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" // Usa stili Tailwind/Token
        >
          Login con SPID/CIE
        </button>
      );
    }
    ```
6.  **Utilizzo Esempio:** Importa e usa questo componente `<AuthButtons />` in una parte comune dell'interfaccia, ad esempio nell'header o vicino a `<UserInfo />`.

**Output Atteso:**
1.  Contenuto completo del file `apps/app-example/src/components/auth/AuthButtons.tsx`.
2.  Istruzioni su dove aggiungere il componente `<AuthButtons />` per testarlo.
```

---

**Prompt per Task [4.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.6] Next-Auth configurato; [4.7] Bottoni Auth creati.

**Task Attuale:** [4.8] Implementa un esempio di protezione di una pagina/route lato server usando `getServerSession` (es. nella `page.tsx` del profilo).

**Riferimento Standard v1.2:** Sezione 4.5 (Integrazione con Identità Digitale) menziona `getServerSession`. Sezione 8.4 (Autenticazione e Autorizzazione) richiede protezione route/API server-side. **Rileggi Sezioni 4.5 e 8.4.**

**Prerequisiti:** Next-Auth configurato, inclusa la route handler `[...nextauth]/route.ts` con `authOptions` esportate ([4.2]). Pagina `ProfilePage` esistente ([1.3]).

**Istruzioni Specifiche:**
1.  Apri il file della route handler `apps/app-example/src/app/api/auth/[...nextauth]/route.ts`. Assicurati che `authOptions` sia esportato (`export const authOptions: AuthOptions = { ... };`).
2.  Apri il file della pagina del profilo: `apps/app-example/src/app/[lang]/(main)/profile/page.tsx`.
3.  Importa `getServerSession` da `"next-auth/next"` e le `authOptions` dal file della route handler.
4.  Importa `redirect` da `"next/navigation"`.
5.  All'inizio del componente `ProfilePage` (che è un Server Component per default), chiama `getServerSession`:
    ```typescript
    import { getServerSession } from "next-auth/next";
    import { redirect } from "next/navigation";
    import { authOptions } from "@/app/api/auth/[...nextauth]/route"; // Verifica path import

    // Importa componenti UI se necessario

    export default async function ProfilePage({ params }: { params: { lang: string } }) {
      const session = await getServerSession(authOptions);

      // Se non c'è sessione, reindirizza alla pagina di login
      if (!session) {
        // Costruisci URL login con lingua corrente
        const loginPath = `/${params.lang}/login`; // O recupera da authOptions.pages.signIn
        redirect(loginPath);
        // 'redirect' lancia un errore speciale, quindi il codice sottostante non viene eseguito
      }

      // Se la sessione esiste, mostra i dati protetti
      return (
        <div>
          <h1>Profilo Utente Protetto (Lingua: {params.lang})</h1>
          <p>Benvenuto/a, {session.user?.name ?? 'Utente'}!</p>
          <p>Email: {session.user?.email ?? 'N/D'}</p>
          <p>Codice Fiscale: {session.user?.codiceFiscale ?? 'N/D'}</p>
          {/* Mostra altri dati della sessione */}
          <pre className="mt-4 p-2 bg-gray-100 rounded overflow-x-auto text-sm">
            <code>{JSON.stringify(session, null, 2)}</code>
          </pre>
        </div>
      );
    }
    ```
6.  **Verifica Path Import:** Assicurati che il path per importare `authOptions` sia corretto. Potrebbe essere necessario usare un path relativo o assicurarsi che l'alias `@/` sia configurato correttamente per l'ambiente server.
7.  **Pagina Login:** Assicurati che il percorso di redirect (`/${params.lang}/login`) corrisponda a una pagina di login esistente (Task [1.3]).

**Output Atteso:** Il contenuto aggiornato del file `apps/app-example/src/app/[lang]/(main)/profile/page.tsx` che implementa la protezione lato server con `getServerSession` e `redirect`.
```

---

**Prompt per Task [4.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.7] Next-Auth configurato; [4.8] Protezione pagina server-side implementata.

**Task Attuale:** [4.9] Aggiorna il middleware (`middleware.ts`) o i layout dei gruppi (`(main)`) per implementare la protezione delle rotte basata sullo stato di autenticazione (alternativa/complementare a [4.8]). *Decisione: Usiamo il middleware per proteggere tutto il gruppo `(main)`.*

**Riferimento Standard v1.2:** Sezione 8.4 (Autenticazione e Autorizzazione) richiede protezione route server-side. Il middleware (Sez 4.1) è un punto comune per questo. **Rileggi Sezioni 4.1 e 8.4.**

**Prerequisiti:** Middleware `middleware.ts` esistente ([1.6]). Next-Auth configurato ([4.1]-[4.5]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/middleware.ts`.
2.  Importa `getToken` da `"next-auth/jwt"`.
3.  All'interno della funzione `middleware`, dopo la gestione i18n e prima della gestione degli header/CSP, aggiungi la logica per verificare l'autenticazione per le rotte protette.
    ```typescript
    import { NextRequest, NextResponse } from 'next/server';
    import { generateNonce } from '@/lib/nonce'; // Verifica path
    import { getToken } from 'next-auth/jwt'; // Importa getToken

    const locales = ['it'];
    const defaultLocale = 'it';
    const protectedPaths = ['/dashboard', '/profile']; // Percorsi base protetti (senza lingua)

    export async function middleware(request: NextRequest) { // Rendi async
      const nonce = generateNonce();
      const { pathname } = request.nextUrl;
      const locale = pathname.split('/')[1]; // Estrae la lingua (es. 'it')

      // --- INIZIO LOGICA PROTEZIONE ROUTE ---
      const isProtectedRoute = protectedPaths.some(p => pathname.startsWith(`/${locale}${p}`));

      if (isProtectedRoute) {
        const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
        if (!token) {
          // Utente non autenticato, redirect alla pagina di login della lingua corrente
          const loginUrl = new URL(`/${locale}/login`, request.url); // Costruisce URL assoluto
          // Puoi aggiungere un callbackUrl per tornare alla pagina richiesta dopo il login
          loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
          return NextResponse.redirect(loginUrl);
        }
        // Qui potresti aggiungere controlli basati sui ruoli/claim del token se necessario
        // if (token.role !== 'admin') { /* ... redirect a pagina non autorizzato ... */ }
      }
      // --- FINE LOGICA PROTEZIONE ROUTE ---


      // 1. Gestione i18n Redirect (come prima)
      const pathnameHasLocale = locales.some(
        (loc) => pathname.startsWith(`/${loc}/`) || pathname === `/${loc}`
      );

      let targetUrl = request.nextUrl.clone();
      let needsRedirect = false;
      if (!pathnameHasLocale && !pathname.startsWith('/api/') && !pathname.startsWith('/_next/')) { // Escludi anche _next
        targetUrl.pathname = `/${defaultLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`;
        needsRedirect = true;
      }

      // 2. Preparazione Headers di Sicurezza (come prima)
      const requestHeaders = new Headers(request.headers);
      requestHeaders.set('X-Nonce', nonce);
      if (!requestHeaders.has('X-Correlation-ID')) {
          requestHeaders.set('X-Correlation-ID', crypto.randomUUID());
      }

      const responseHeaders = new Headers();
      responseHeaders.set('X-Correlation-ID', requestHeaders.get('X-Correlation-ID')!);
      responseHeaders.set('X-Frame-Options', 'DENY');
      // ... (altri header di sicurezza come prima) ...
      const csp = [ /* ... CSP come prima ... */ ].join('; ');
      responseHeaders.set('Content-Security-Policy', csp);

      // 3. Esegui Redirect i18n se necessario (come prima)
      if (needsRedirect) {
        const redirectResponse = NextResponse.redirect(targetUrl, { status: 308 }); // Rimuovi headers qui, verranno applicati dopo
        // Applica tutti gli header alla risposta di redirect
        responseHeaders.forEach((value, key) => redirectResponse.headers.set(key, value));
        return redirectResponse;
      }

      // 4. Altrimenti, procedi con la richiesta (come prima)
      const response = NextResponse.next({
        request: {
          headers: requestHeaders,
        },
      });
      // Applica tutti gli header di sicurezza alla risposta finale
      responseHeaders.forEach((value, key) => response.headers.set(key, value));

      return response;
    }

    // Matcher (come prima)
    export const config = {
      matcher: [
        '/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)',
      ],
    };
    ```
4.  **Rendi Async:** La funzione `middleware` deve diventare `async` perché `getToken` è asincrono.
5.  **Definisci Percorsi Protetti:** Crea un array `protectedPaths` con i percorsi base (senza lingua) da proteggere.
6.  **Logica di Controllo:** Verifica se il `pathname` attuale inizia con uno dei percorsi protetti (considerando la lingua). Se sì, chiama `getToken`. Se non c'è token, reindirizza alla pagina di login (includendo opzionalmente `callbackUrl`).
7.  **Secret:** Assicurati di passare `secret: process.env.NEXTAUTH_SECRET` a `getToken`.
8.  **Combinazione con Redirect i18n:** Assicurati che la logica di protezione venga eseguita *prima* della gestione degli header e del redirect i18n finale, ma *dopo* l'estrazione del locale e l'eventuale redirect iniziale per aggiungere il locale. Modifica il flusso in modo che gli header vengano aggiunti solo alla risposta finale (sia essa redirect o `NextResponse.next`).

**Output Atteso:** Il contenuto aggiornato del file `apps/app-example/src/middleware.ts` che include la logica di protezione delle rotte per i percorsi specificati usando `getToken`.
```

---

**Prompt per Task [4.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.8] Next-Auth configurato e protezione rotte base; [4.9] Protezione middleware aggiunta.

**Task Attuale:** [4.10] Aggiorna la configurazione CSP nel middleware (`form-action`) per includere l'URL dell'IDP SPID/CIE (da `process.env.SPID_PROVIDER_URL`).

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing - Next.js App Router). Lo snippet del middleware mostra `form-action 'self' ${process.env.SPID_PROVIDER_URL}`. Sezione 8.3 (CSP e Security Headers) ribadisce l'importanza della CSP nel middleware. **Rileggi Sezioni 4.1 e 8.3.**

**Prerequisiti:** Middleware `middleware.ts` esistente ([1.6], aggiornato in [4.9]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/middleware.ts`.
2.  Individua la riga dove viene costruita la stringa `Content-Security-Policy` (CSP).
3.  Verifica che la direttiva `form-action` includa esplicitamente `${process.env.SPID_PROVIDER_URL}` dopo `'self'`. Deve essere *esattamente*:
    `form-action 'self' ${process.env.SPID_PROVIDER_URL}`
4.  Se manca o è diversa, correggila.
5.  **Variabile d'Ambiente:** Nota che `SPID_PROVIDER_URL` è un'altra variabile d'ambiente necessaria che andrà aggiunta a `.env.example` (Task 8.9).

**Output Atteso:** Conferma che la direttiva `form-action` nella CSP all'interno di `middleware.ts` sia corretta come da specifica. Se non corretta, fornire lo snippet aggiornato della costruzione della stringa CSP.
```

---

**Prompt per Task [5.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[4.10] Setup Monorepo, App Next.js, Styling, State Management, Autenticazione. Fase 4 completata.

**Task Attuale:** [5.1] Nel package `packages/utils-ae`, implementa `src/i18n.ts` come da Sez. 4.6, definendo `translationsIt` (con alcune chiavi d'esempio), la funzione `t(key, params?)` con gestione base dei parametri e fallback per chiavi mancanti, e il tipo `TranslationKey`.

**Riferimento Standard v1.2:** Sezione 4.6 (Internazionalizzazione (i18n) e Localizzazione (l10n)). Contiene uno snippet chiave per `i18n.ts` con `translationsIt`, `TranslationKey` e la funzione `t`. Richiede l'estrazione obbligatoria delle stringhe. **Rileggi attentamente la Sezione 4.6.**

**Prerequisiti:** Package `packages/utils-ae` creato con `src/index.ts` ([0.12]).

**Istruzioni Specifiche:**
1.  Crea un file `i18n.ts` dentro `packages/utils-ae/src/`.
2.  Popola il file `i18n.ts` con il codice *esattamente* come mostrato nello snippet (e aggiungendo qualche esempio in più):
    ```typescript
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
    ```
3.  **Esporta:** Aggiungi gli export necessari al file `index.ts` principale del package: aggiungi `export * from './i18n';` a `packages/utils-ae/src/index.ts`.

**Output Atteso:**
1.  Contenuto completo del file `packages/utils-ae/src/i18n.ts`.
2.  Riga da aggiungere a `packages/utils-ae/src/index.ts`.
```

---

**Prompt per Task [5.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.1] Setup base, Utility `t` per i18n creata.

**Task Attuale:** [5.2] Modifica i componenti d'esempio (pagine, UI) per utilizzare la funzione `t()` per tutti i testi visibili all'utente.

**Riferimento Standard v1.2:** Sezione 4.6 (Internazionalizzazione (i18n) e Localizzazione (l10n)) richiede l'uso obbligatorio di `t()`. **Rileggi Sezione 4.6.**

**Prerequisiti:** Funzione `t` esportata da `@ae/utils-ae` ([5.1]). Componenti/pagine d'esempio esistenti ([1.3], [3.12], [4.6], [4.7], [4.8]).

**Istruzioni Specifiche:**
1.  **Importa `t`:** In ogni file componente/pagina che contiene testo visibile all'utente, importa la funzione `t` da `@ae/utils-ae` (verifica il path o l'alias).
2.  **Sostituisci Stringhe:** Cerca tutte le stringhe di testo hardcoded destinate all'utente (titoli, label, messaggi, testo bottoni, etc.) nei seguenti file (e altri se creati):
    *   `src/app/[lang]/page.tsx` (HomePage)
    *   `src/app/[lang]/(main)/dashboard/page.tsx` (DashboardPage)
    *   `src/app/[lang]/(main)/profile/page.tsx` (ProfilePage) - sia versione protetta che non (se presenti)
    *   `src/app/[lang]/(auth)/login/page.tsx` (LoginPage)
    *   `src/components/forms/ProfileFormStub.tsx` (label, errori, bottone)
    *   `src/components/auth/UserInfo.tsx` (label, messaggi stato)
    *   `src/components/auth/AuthButtons.tsx` (testo bottoni)
3.  Sostituisci ogni stringa con una chiamata a `t('chiave.di.traduzione')`. Usa le chiavi definite in `translationsIt` nel task [5.1].
4.  **Parametri:** Se una stringa richiede parametri (es. `{name}`), passa il secondo argomento a `t()`: `t('page.profile.welcome', { name: session.user?.name ?? 'Utente' })`. Assicurati che i nomi dei parametri corrispondano a quelli usati nelle chiavi in `translationsIt`.
5.  **Esempio Modifica (ProfilePage):**
    ```typescript
    // In src/app/[lang]/(main)/profile/page.tsx
    import { t } from '@ae/utils-ae'; // Verifica path import
    // ... altri import ...

    export default async function ProfilePage({ params }: { params: { lang: string } }) {
      const session = await getServerSession(authOptions);
      if (!session) { /* ... redirect ... */ }

      return (
        <div>
          {/* Usa t() per il titolo */}
          <h1>{t('page.profile.protectedTitle')} ({t('common.language')}: {params.lang})</h1>
          {/* Usa t() con parametro */}
          <p>{t('page.profile.welcome', { name: session.user?.name ?? 'Utente' })}</p>
          {/* Usa t() per label statiche */}
          <p>{t('form.profile.email.label')}: {session.user?.email ?? 'N/D'}</p>
          <p>{t('user.codiceFiscaleLabel')}: {session.user?.codiceFiscale ?? 'N/D'}</p>
          {/* ... */}
        </div>
      );
    }
    // Assicurati che 'common.language' e 'user.codiceFiscaleLabel' siano definite in translationsIt
    ```
6.  Applica modifiche simili a tutti i file elencati. Aggiungi nuove chiavi a `translationsIt` se necessario per coprire tutto il testo.

**Output Atteso:** I contenuti aggiornati dei file specificati, dove le stringhe utente sono state sostituite con chiamate a `t()`. Potrebbe anche includere nuove chiavi aggiunte a `packages/utils-ae/src/i18n.ts`.
```

---

**Prompt per Task [5.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.1] Setup base, i18n; [5.2] Testo componenti internazionalizzato.

**Task Attuale:** [5.3] Nel package `packages/utils-ae`, implementa `src/feature-flags.ts` come da Sez. 4.7, definendo `flagsConfig` (con flag d'esempio), la funzione `isFeatureEnabled(key)` che controlla `process.env.NEXT_PUBLIC_FF_*` e `flagsConfig`, e il tipo `FeatureFlagKey`.

**Riferimento Standard v1.2:** Sezione 4.7 (Gestione della Configurazione e Feature Flags). Contiene uno snippet chiave per `feature-flags.ts` con `flagsConfig`, `FeatureFlagKey`, e la funzione `isFeatureEnabled` con logica di priorità env/config. **Rileggi attentamente la Sezione 4.7.**

**Prerequisiti:** Package `packages/utils-ae` creato con `src/index.ts` ([0.12]).

**Istruzioni Specifiche:**
1.  Crea un file `feature-flags.ts` dentro `packages/utils-ae/src/`.
2.  Popola il file `feature-flags.ts` con il codice *esattamente* come mostrato nello snippet della Sezione 4.7 (aggiungendo un flag d'esempio):
    ```typescript
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

    // Esporta la funzione isFeatureEnabled e il tipo FeatureFlagKey dal package
    ```
3.  **Logica di Priorità:** Assicurati che la logica implementata rispetti la priorità: Variabile d'ambiente > `flagsConfig` > `false` (default). Aggiungi un controllo per vedere se la variabile d'ambiente esiste prima di controllare `flagsConfig`.
4.  **Naming Env Var:** Implementa la conversione da `camelCase` a `SNAKE_CASE_UPPER` per il nome della variabile d'ambiente come indicato nello snippet.
5.  **Esporta:** Aggiungi gli export necessari al file `index.ts` principale del package: aggiungi `export * from './feature-flags';` a `packages/utils-ae/src/index.ts`.

**Output Atteso:**
1.  Contenuto completo del file `packages/utils-ae/src/feature-flags.ts`.
2.  Riga da aggiungere a `packages/utils-ae/src/index.ts`.
```

---

**Prompt per Task [5.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.2] Setup base, i18n; [5.3] Utility `isFeatureEnabled` creata.

**Task Attuale:** [5.4] Crea un esempio di utilizzo di `isFeatureEnabled()` in un componente per mostrare/nascondere condizionalmente un elemento UI.

**Riferimento Standard v1.2:** Sezione 4.7 (Gestione della Configurazione e Feature Flags) richiede l'uso di `isFeatureEnabled()` per logica condizionale. **Rileggi Sezione 4.7.**

**Prerequisiti:** Funzione `isFeatureEnabled` esportata da `@ae/utils-ae` ([5.3]). Componente d'esempio esistente (es. `DashboardPage`).

**Istruzioni Specifiche:**
1.  Scegli un componente d'esempio dove inserire la logica condizionale, ad esempio la pagina Dashboard (`src/app/[lang]/(main)/dashboard/page.tsx`).
2.  Importa la funzione `isFeatureEnabled` da `@ae/utils-ae` (verifica path/alias).
3.  All'interno del componente, usa `isFeatureEnabled('nomeFlag')` (es. `'nuovaDashboard'`) per controllare se una feature è attiva.
4.  Renderizza condizionalmente un elemento UI basato sul risultato.
    ```typescript
    // In src/app/[lang]/(main)/dashboard/page.tsx
    import { t } from '@ae/utils-ae';
    import { isFeatureEnabled } from '@ae/utils-ae'; // Importa la funzione FF

    export default function DashboardPage({ params }: { params: { lang: string } }) {
      const showNewDashboardFeature = isFeatureEnabled('nuovaDashboard'); // Usa la chiave del flag

      return (
        <div>
          <h1>{t('nav.dashboard')} ({t('common.language')}: {params.lang})</h1>
          <p>Contenuto della dashboard principale.</p>

          {/* Mostra condizionalmente la nuova feature */}
          {showNewDashboardFeature && (
            <div className="mt-4 p-4 border border-blue-300 bg-blue-50 rounded">
              <h2>Nuova Sezione Dashboard (Feature Flag Attivo!)</h2>
              <p>Questo contenuto è visibile solo se il feature flag 'nuovaDashboard' è abilitato.</p>
            </div>
          )}

          {!showNewDashboardFeature && (
             <p className="mt-4 text-sm text-gray-500">(Nota: La feature 'nuovaDashboard' è attualmente disabilitata)</p>
          )}
        </div>
      );
    }
    ```
5.  **Variabili d'Ambiente:** Ricorda che per testare il flag abilitato, dovrai definire `NEXT_PUBLIC_FF_NUOVA_DASHBOARD=true` nel file `.env.local` dell'app `app-example` (Task 8.9).

**Output Atteso:** Il contenuto aggiornato del file `apps/app-example/src/app/[lang]/(main)/dashboard/page.tsx` mostrando l'uso di `isFeatureEnabled` per rendering condizionale.
```

---

**Prompt per Task [5.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.3] Setup base, i18n, FF; [5.4] Esempio uso FF.

**Task Attuale:** [5.5] Nell'app `app-example`, implementa il file radice `src/app/error.tsx` per la gestione globale degli errori React come da Sez. 4.1 e 12.1. Deve mostrare una UI di fallback e loggare l'errore (stub iniziale).

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing) mostra `error.tsx` nella struttura dell'App Router. Sezione 12.1 (Error Boundaries React) menziona l'uso di `error.tsx` e il logging dell'errore. **Rileggi Sezioni 4.1 e 12.1.**

**Prerequisiti:** File `apps/app-example/src/app/error.tsx` creato ([1.1]). Funzione `t` disponibile ([5.1]).

**Istruzioni Specifiche:**
1.  Apri il file `apps/app-example/src/app/error.tsx`.
2.  Implementa un componente React che sia un Client Component (`'use client'`).
3.  Il componente deve accettare le props `error: Error & { digest?: string }` e `reset: () => void`.
4.  Implementa un `useEffect` per loggare l'errore quando il componente viene montato (simulando il logging richiesto).
5.  Nel JSX, mostra una UI di fallback significativa per l'utente, usando la funzione `t` per i testi.
6.  Includi un bottone che chiami la funzione `reset()` per tentare di ri-renderizzare il segmento.
    ```typescript
    'use client'; // Error components must be Client Components

    import { useEffect } from 'react';
    import { t } from '@ae/utils-ae'; // Importa t per i messaggi

    export default function GlobalError({
      error,
      reset,
    }: {
      error: Error & { digest?: string };
      reset: () => void;
    }) {
      useEffect(() => {
        // Loggare l'errore a un sistema di reporting (stub)
        // In futuro, integrare qui Sentry o simili (Sez. 12.3)
        console.error("Errore Globale Catturato:", error);
        // Il 'digest' può essere utile per correlare errori server-side
        if (error.digest) {
           console.error("Error Digest:", error.digest);
        }
      }, [error]);

      return (
        <html>
          <body>
            <div className="container mx-auto px-4 py-8 text-center">
              <h1 className="text-2xl font-bold text-red-600 mb-4">
                {t('common.error')} {/* Usa chiave i18n */}
              </h1>
              <p className="mb-4">
                {t('error.global.message')} {/* Aggiungere chiave a i18n.ts */}
              </p>
              {/* Mostra dettagli tecnici solo in DEV? */}
              {process.env.NODE_ENV === 'development' && (
                 <details className="mb-4 text-left text-sm text-gray-600 bg-gray-100 p-2 rounded">
                    <summary>{t('error.details')}</summary> {/* Aggiungere chiave */}
                    <pre className="mt-2 whitespace-pre-wrap">
                       {error?.message}
                       {error?.stack && `\n\nStack:\n${error.stack}`}
                       {error?.digest && `\n\nDigest: ${error.digest}`}
                    </pre>
                 </details>
              )}
              <button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" // Usa stili Tailwind/Token
              >
                {t('error.tryAgain')} {/* Aggiungere chiave */}
              </button>
            </div>
          </body>
        </html>
      );
    }

    // Aggiungere chiavi mancanti a packages/utils-ae/src/i18n.ts:
    // 'error.global.message': 'Qualcosa è andato storto. Per favore, prova a ricaricare la pagina o riprova più tardi.'
    // 'error.details': 'Dettagli Errore (Dev Only)'
    // 'error.tryAgain': 'Riprova'
    ```
7.  **Aggiungi Chiavi i18n:** Assicurati di aggiungere le nuove chiavi usate (`error.global.message`, `error.details`, `error.tryAgain`) al file `translationsIt` in `packages/utils-ae/src/i18n.ts`.

**Output Atteso:**
1.  Contenuto completo del file `apps/app-example/src/app/error.tsx`.
2.  Le nuove chiavi di traduzione da aggiungere a `packages/utils-ae/src/i18n.ts`.
```

---

**Prompt per Task [5.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.4] Setup base; [5.5] `error.tsx` globale implementato.

**Task Attuale:** [5.6] Installa `react-error-boundary` come da Sez. 12.1.

**Riferimento Standard v1.2:** Sezione 12.1 (Error Boundaries React) menziona l'uso di `react-error-boundary` per sezioni critiche. **Rileggi Sezione 12.1.**

**Prerequisiti:** App `app-example` esistente ([0.11]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `react-error-boundary` come dipendenza normale.
3.  Comando: `pnpm add react-error-boundary`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `react-error-boundary` in `apps/app-example`.
```

---

**Prompt per Task [5.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.5] Setup base, error.tsx; [5.6] `react-error-boundary` installato.

**Task Attuale:** [5.7] Crea un componente d'esempio che utilizza `<ErrorBoundary>` da `react-error-boundary` per incapsulare una sezione specifica, con una `fallbackRender` prop e `onError` per logging specifico.

**Riferimento Standard v1.2:** Sezione 12.1 (Error Boundaries React) richiede l'uso di `react-error-boundary` per sezioni critiche con fallback UI e log errore. **Rileggi Sezione 12.1.**

**Prerequisiti:** `react-error-boundary` installato ([5.6]). Componente d'esempio esistente (es. `ProfilePage`). Funzione `t` disponibile ([5.1]).

**Istruzioni Specifiche:**
1.  Scegli un componente d'esempio dove incapsulare una parte potenzialmente "fragile", ad esempio, una sezione specifica della `ProfilePage` (`src/app/[lang]/(main)/profile/page.tsx`).
2.  Importa `ErrorBoundary` da `"react-error-boundary"` e `FallbackProps` se usi `fallbackRender`. Importa `t` da `@ae/utils-ae`.
3.  **Crea Componente Fallback:** Definisci un piccolo componente React che funga da UI di fallback. Riceverà `error` e `resetErrorBoundary` tramite le `FallbackProps`.
    ```typescript
    // All'interno di ProfilePage.tsx o in un file separato
    import type { FallbackProps } from 'react-error-boundary';
    // ... altri import

    function ErrorFallbackUI({ error, resetErrorBoundary }: FallbackProps) {
      // Potresti anche loggare l'errore qui o nel prop onError dell'ErrorBoundary
      // console.error("Errore specifico catturato da ErrorBoundary:", error);
      return (
        <div role="alert" className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p><strong>{t('common.error')}:</strong> {t('error.componentSpecificMessage')}</p> {/* Aggiungere chiave */}
          <pre className="mt-2 text-sm">{error.message}</pre>
          <button
            onClick={resetErrorBoundary}
            className="mt-2 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2" // Usa stili Tailwind/Token
          >
            {t('error.tryAgain')}
          </button>
        </div>
      );
    }
    ```
4.  **Wrappa Sezione Critica:** Nel JSX del componente principale (`ProfilePage`), wrappa la sezione che vuoi proteggere con `<ErrorBoundary>`.
5.  **Configura Props:**
    *   Passa il componente `ErrorFallbackUI` alla prop `fallbackRender`.
    *   Implementa la prop `onError` per loggare l'errore specifico catturato da questo boundary (può essere un log più dettagliato o con contesto specifico).
    *   Opzionalmente, puoi passare `onReset` per eseguire azioni custom prima di chiamare `resetErrorBoundary`.
    ```typescript
    // Esempio dentro il return di ProfilePage.tsx
    import { ErrorBoundary } from 'react-error-boundary';
    // ... altri import ...

    // ... (definizione ErrorFallbackUI sopra) ...

    export default async function ProfilePage({ params }: { params: { lang: string } }) {
      // ... (logica getServerSession) ...

      const handleSpecificError = (error: Error, info: { componentStack: string }) => {
        console.error("Errore catturato nel boundary del profilo:", error, info.componentStack);
        // Log a servizio esterno con contesto specifico del profilo
      };

      return (
        <div>
          {/* ... parte superiore del profilo ... */}

          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-3">{t('profile.sensitiveSectionTitle')}</h2> {/* Aggiungere chiave */}
            <ErrorBoundary
              fallbackRender={ErrorFallbackUI}
              onError={handleSpecificError}
              // onReset={() => { /* Logica custom reset se serve */ }}
            >
              {/* Qui va il componente/contenuto "rischioso" */}
              {/* Esempio: <ComponenteChePotrebbeFallire /> */}
              <p>Contenuto della sezione sensibile che potrebbe generare errori.</p>
              {/* <SimulateErrorButton /> Componente per testare l'errore */}
            </ErrorBoundary>
          </div>

          {/* ... resto del profilo ... */}
        </div>
      );
    }
    ```
6.  **Aggiungi Chiavi i18n:** Aggiungi le nuove chiavi (`error.componentSpecificMessage`, `profile.sensitiveSectionTitle`) a `translationsIt`.

**Output Atteso:**
1.  Il contenuto aggiornato del file `apps/app-example/src/app/[lang]/(main)/profile/page.tsx` che include il componente `ErrorFallbackUI` e l'uso di `<ErrorBoundary>` per wrappare una sezione.
2.  Le nuove chiavi di traduzione da aggiungere a `packages/utils-ae/src/i18n.ts`.
```

---

**Prompt per Task [5.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.6] Setup base, error boundaries; [5.7] Esempio ErrorBoundary implementato.

**Task Attuale:** [5.8] Implementa o migliora la gestione centralizzata degli errori API nel middleware RTK Query (`baseQuery` wrapper) o tramite un interceptor dedicato (come menzionato in Sez. 12.2). Deve tentare di tradurre errori per utente usando `t()` e loggare i dettagli tecnici. *Decisione: Miglioriamo il `baseQuery` in `api.ts`.*

**Riferimento Standard v1.2:** Sezione 12.2 (Gestione Errori API Centralizzata) richiede gestione centralizzata, traduzione errori con `t()`, e logging tecnico. Suggerisce middleware RTK Query o interceptor. **Rileggi Sezione 12.2.**

**Prerequisiti:** File `packages/store-config/src/api.ts` con `fetchBaseQuery` ([3.2]). Funzione `t` disponibile ([5.1]).

**Istruzioni Specifiche:**
1.  Apri il file `packages/store-config/src/api.ts`.
2.  Importa `isRejectedWithValue` da `@reduxjs/toolkit/query` e `Middleware` / `MiddlewareAPI` da `@reduxjs/toolkit`. Importa `t` da `@ae/utils-ae` (verifica path/alias).
3.  **Crea Middleware RTK:** Definisci un middleware RTK specifico per il logging degli errori API.
    ```typescript
    // In api.ts
    import { /*...,*/ isRejectedWithValue } from '@reduxjs/toolkit/query';
    import type { MiddlewareAPI, Middleware } from '@reduxjs/toolkit';
    import { t } from '@ae/utils-ae'; // Verifica path/alias

    // ... (definizione apiSlice come prima) ...

    /**
     * Middleware RTK per il logging centralizzato degli errori API
     */
    export const rtkQueryErrorLogger: Middleware =
      (api: MiddlewareAPI) => (next) => (action) => {
        // RTK Query utilizza `isRejectedWithValue` per identificare azioni fallite
        if (isRejectedWithValue(action)) {
          console.warn('Errore API catturato dal middleware RTK!', action.payload);
          // action.payload contiene l'errore restituito da baseQuery o il rejectWithValue manuale

          // Log dettagliato dell'errore per il monitoraggio
          // Qui si potrebbe inviare a Sentry/Datadog ecc. con più contesto
          console.error({
              message: 'Errore RTK Query',
              status: action.payload?.status,
              data: action.payload?.data,
              originalEndpoint: (action.meta?.arg as any)?.endpointName,
              // Potresti voler aggiungere Correlation ID qui se non già nei log server
          });

          // Mostrare una notifica all'utente? (Opzionale, potrebbe essere gestito nel componente)
          // Esempio: dispatch(showGlobalErrorNotification(t('error.api.generic')));
        }

        return next(action);
      };
    ```
4.  **Modifica Config Store:** Aggiorna `packages/store-config/src/store.ts` per includere questo nuovo middleware NELLA CONFIGURAZIONE DEL MIDDLEWARE RTK.
    ```typescript
    // In store.ts
    // ... (import)
    import { rtkQueryErrorLogger } from './api'; // Importa il middleware degli errori

    export const makeStore = () => {
      return configureStore({
        reducer: { /* ... */ },
        middleware: (getDefaultMiddleware) =>
          getDefaultMiddleware()
            .concat(apiSlice.middleware) // Middleware RTK Query principale
            .concat(rtkQueryErrorLogger), // Middleware per log errori API
        devTools: process.env.NODE_ENV !== 'production',
      });
    };
    // ... (tipi)
    ```
5.  **Traduzione Errori (nel Componente):** La traduzione degli errori per l'utente è generalmente meglio gestirla nel componente che effettua la chiamata, dove si ha più contesto. Mostra come recuperare l'errore da un hook RTK Query e usare `t()`:
    ```typescript
    // Esempio in un componente che usa useGetUserProfileQuery
    import { useGetUserProfileQuery } from '@ae/store-config'; // Assumendo sia esportato
    import { t } from '@ae/utils-ae';

    function UserProfileComponent() {
      const { data: user, error, isLoading, isError } = useGetUserProfileQuery();

      if (isLoading) return <p>{t('common.loading')}</p>;

      // Gestione dell'errore specifico della query nel componente
      if (isError) {
        let errorMessage = t('error.api.generic'); // Messaggio generico
        // Tenta di mappare errori specifici se la struttura dell'errore è nota
        if (error && 'status' in error) {
           if (error.status === 404) errorMessage = t('error.api.notFound');
           if (error.status === 401) errorMessage = t('error.api.unauthorized');
           // Aggiungere altri codici/casi specifici
           // Potresti anche leggere error.data per messaggi specifici dall'API
           // if (error.data?.errorCode === 'SPECIFIC_CODE') errorMessage = t('error.api.specificCode');
        }
        return <div role="alert" className="error-message">{errorMessage}</div>;
      }

      if (!user) return <p>{t('error.user.notFound')}</p>; // O altro stato vuoto

      return (
        <div>
          {/* Mostra dati utente */}
        </div>
      );
    }
    // Aggiungere chiavi i18n: 'error.api.generic', 'error.api.notFound', 'error.api.unauthorized', 'error.user.notFound'
    ```

**Output Atteso:**
1.  Il contenuto aggiornato del file `packages/store-config/src/api.ts` con il middleware `rtkQueryErrorLogger`.
2.  Il contenuto aggiornato del file `packages/store-config/src/store.ts` che include il nuovo middleware.
3.  Un esempio di codice (come commento o snippet) che mostra come gestire e tradurre l'errore RTK Query all'interno di un componente React.
4.  Le nuove chiavi i18n da aggiungere.
```

---

**Prompt per Task [5.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.7] Setup base; [5.8] Gestione errori API centralizzata (logging) + esempio gestione in componente.

**Task Attuale:** [5.9] Implementa un logging strutturato di base (JSON) lato server (in API routes / Server Components) usando `console.log` o installando e configurando **Pino** o **Winston** (come raccomandato in Sez. 12.3). Assicura che il Correlation ID sia incluso nei log. *Decisione: Usiamo `console.log` con JSON.stringify per semplicità iniziale.*

**Riferimento Standard v1.2:** Sezione 12.3 (Logging Strutturato) raccomanda Pino/Winston (JSON) lato server e l'inclusione obbligatoria del Correlation ID. **Rileggi Sezione 12.3.**

**Prerequisiti:** API Route d'esempio (`user-summary/route.ts`) esistente ([3.13]). Middleware che aggiunge Correlation ID (`X-Correlation-ID`) agli header della richiesta ([1.6], [4.9]).

**Istruzioni Specifiche:**
1.  Apri il file dell'API Route d'esempio: `apps/app-example/src/app/api/user-summary/route.ts`.
2.  All'inizio della funzione handler (es. `GET`), recupera il Correlation ID dagli header della richiesta (`request.headers.get('X-Correlation-ID')`).
3.  Implementa una funzione helper semplice per il logging strutturato o usala direttamente. Questa funzione dovrebbe prendere un livello (es. 'info', 'error'), un messaggio, e dati aggiuntivi (incluso il correlation ID).
4.  Usa `console.log(JSON.stringify(logObject))` per stampare l'oggetto log.
5.  Aggiungi chiamate di log strutturato in punti chiave (inizio richiesta, fine richiesta, eventuali errori).
    ```typescript
    // In apps/app-example/src/app/api/user-summary/route.ts
    import { NextResponse } from 'next/server';

    // Funzione helper per logging strutturato base
    const log = (level: 'info' | 'warn' | 'error', message: string, data: Record<string, any> = {}) => {
      const logEntry = {
        timestamp: new Date().toISOString(),
        level,
        message,
        ...data, // Include correlationId e altri dati
      };
      // Usa console.log per info/warn, console.error per error
      if (level === 'error') {
         console.error(JSON.stringify(logEntry));
      } else if (level === 'warn') {
         console.warn(JSON.stringify(logEntry));
      } else {
         console.log(JSON.stringify(logEntry));
      }
    };


    export async function GET(request: Request) {
      const correlationId = request.headers.get('X-Correlation-ID') || 'N/A'; // Recupera Correlation ID
      const logData = { correlationId, apiPath: request.url }; // Dati comuni per i log di questa richiesta

      log('info', 'Inizio gestione richiesta GET /api/user-summary', logData);

      try {
        // ... (logica esistente per simulare recupero dati) ...
        await new Promise(resolve => setTimeout(resolve, 100));
        const userSummary = { /* ... dati mockati ... */ };

        log('info', 'Fine gestione richiesta GET /api/user-summary - Successo', logData);

        const headers = new Headers();
        headers.set('X-Correlation-ID', correlationId); // Passa correlation ID nella risposta
        return NextResponse.json(userSummary, { headers });

      } catch (error) {
         const errorDetails = error instanceof Error ? { error_message: error.message, stack: error.stack } : { error_details: String(error) };
         log('error', 'Errore durante gestione richiesta GET /api/user-summary', { ...logData, ...errorDetails });

         const headers = new Headers();
         headers.set('X-Correlation-ID', correlationId);
         return NextResponse.json({ message: 'Internal Server Error' }, { status: 500, headers });
      }
    }
    ```
6.  **Server Components:** Mostra come applicare lo stesso pattern in un Server Component (es. `ProfilePage`): recuperare l'header usando `headers()` da `next/headers`.
    ```typescript
    // Esempio in src/app/[lang]/(main)/profile/page.tsx
    import { headers } from 'next/headers'; // Importa headers
    // ... altri import ...

    // Riutilizza la funzione log (potrebbe essere messa in un utils package)
    const log = (level: 'info' | 'warn' | 'error', message: string, data: Record<string, any> = {}) => {
        // ... (implementazione come sopra) ...
    };

    export default async function ProfilePage({ params }: { params: { lang: string } }) {
      const headerList = headers(); // Ottieni gli headers
      const correlationId = headerList.get('X-Correlation-ID') || 'N/A'; // Recupera Correlation ID
      const logData = { correlationId, page: `/profile`, lang: params.lang };

      log('info', 'Rendering pagina Profilo (Server Component)', logData);

      // ... (logica getServerSession, redirect, etc.) ...
      const session = await getServerSession(authOptions);
      if (!session) { /* ... */ }

      // ... (return JSX) ...
    }
    ```
7.  **Refactoring Helper:** Suggerisci che la funzione `log` potrebbe essere spostata in un package di utility (es. `@ae/utils-ae`) per riutilizzo.

**Output Atteso:**
1.  Il contenuto aggiornato del file `apps/app-example/src/app/api/user-summary/route.ts` con il logging strutturato via `console.log(JSON.stringify(...))` e inclusione del Correlation ID.
2.  Un esempio di codice aggiornato per `apps/app-example/src/app/[lang]/(main)/profile/page.tsx` che mostra come recuperare e loggare il Correlation ID in un Server Component.
3.  Nota sulla possibile centralizzazione della funzione `log`.
```

---

**Prompt per Task [5.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.8] Setup base, error handling; [5.9] Logging strutturato server-side base.

**Task Attuale:** [5.10] Implementa un logging di base lato client (in Error Boundaries, gestori errori API) usando `console.error` (come stub per una libreria tipo Sentry, raccomandata in Sez. 12.3).

**Riferimento Standard v1.2:** Sezione 12.3 (Logging Strutturato) raccomanda Sentry per il client, ma per lo starter kit usiamo `console.error` come stub. Sezione 12.1 (Error Boundaries) e 12.2 (Gestione Errori API) sono i punti dove loggare. **Rileggi Sezioni 12.1, 12.2, 12.3.**

**Prerequisiti:** `GlobalError` component ([5.5]), `ErrorBoundary` con `onError` ([5.7]), Middleware RTK per log errori ([5.8]).

**Istruzioni Specifiche:**
1.  **Global Error Boundary (`error.tsx`):** Verifica che il `useEffect` nel file `apps/app-example/src/app/error.tsx` stia già usando `console.error` per loggare l'errore globale, come implementato nel Task [5.5]. Assicurati che il log includa l'oggetto errore completo.
    ```typescript
    // In src/app/error.tsx
    useEffect(() => {
      // Già implementato: Loggare l'errore a console come stub per Sentry
      console.error("[Global Error Boundary] Errore non gestito:", error);
      if (error.digest) console.error("[Global Error Boundary] Digest:", error.digest);
    }, [error]);
    ```
2.  **Specific Error Boundary (`ProfilePage` Esempio):** Verifica che la prop `onError` passata a `<ErrorBoundary>` nel file `apps/app-example/src/app/[lang]/(main)/profile/page.tsx` (Task [5.7]) stia loggando l'errore specifico usando `console.error`.
    ```typescript
    // In src/app/[lang]/(main)/profile/page.tsx
    const handleSpecificError = (error: Error, info: { componentStack: string }) => {
      // Già implementato: Log specifico a console come stub per Sentry
      console.error("[Profile Page Boundary] Errore specifico catturato:", {
         error: error.message,
         componentStack: info.componentStack
      });
    };
    // ... <ErrorBoundary onError={handleSpecificError} ... /> ...
    ```
3.  **RTK Query Error Middleware:** Verifica che il middleware `rtkQueryErrorLogger` in `packages/store-config/src/api.ts` (Task [5.8]) stia usando `console.error` o `console.warn` per loggare gli errori API rigettati. Assicurati che l'oggetto loggato includa dettagli utili come status, data, endpoint.
    ```typescript
    // In packages/store-config/src/api.ts (rtkQueryErrorLogger)
    if (isRejectedWithValue(action)) {
      // Già implementato: Logging dell'azione rigettata a console
      console.warn('[RTK Middleware] Richiesta API fallita:', action.type);
      console.error('[RTK Middleware] Dettagli Errore API:', {
        status: action.payload?.status,
        data: action.payload?.data,
        endpoint: (action.meta?.arg as any)?.endpointName,
        requestId: action.meta?.requestId,
        // Aggiungere Correlation ID se disponibile nello stato o passato
      });
    }
    ```
4.  **Nessuna Nuova Implementazione:** Questo task consiste principalmente nel verificare che i punti di logging client-side identificati (Error Boundaries, middleware RTK) utilizzino `console.error` come stub per un sistema di logging più avanzato, come già impostato nei task precedenti.

**Output Atteso:** Conferma che i punti di logging client-side identificati (`error.tsx`, `onError` di ErrorBoundary, `rtkQueryErrorLogger`) usano `console.error` come specificato. Nessun nuovo codice necessario se i task precedenti sono stati implementati correttamente.
```

---

**Prompt per Task [6.1]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[5.10] Setup Monorepo, App Next.js, Styling, State Management, Auth, i18n, FF, Error Handling, Logging Stubs. Fase 5 completata.

**Task Attuale:** [6.1] Nella root del monorepo, installa **ESLint v9.6.0+**, **Prettier v3.3.2+**, **Husky v9.0.11+**, **lint-staged v15.2.7+** come da Sez. 3 e 7.1.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) specifica queste dipendenze con le relative versioni. Sezione 7.1 (Linting e Formattazione) ne richiede l'uso e la configurazione pre-commit obbligatoria. **Rileggi Sezioni 3 e 7.1.**

**Prerequisiti:** Monorepo configurato con pnpm ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella **root** del monorepo (`ae-frontend-platform`).
2.  Usa `pnpm` per installare le seguenti dipendenze come `devDependencies` (`-D`) a livello workspace (`-w`):
    *   `eslint` (versione compatibile con `v9.6.0+`)
    *   `prettier` (versione compatibile con `v3.3.2+`)
    *   `husky` (versione compatibile con `v9.0.11+`)
    *   `lint-staged` (versione compatibile con `v15.2.7+`)
3.  Comando: `pnpm add -D -w eslint@^9.6.0 prettier@^3.3.2 husky@^9.0.11 lint-staged@^15.2.7`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare ESLint, Prettier, Husky e lint-staged come dev dependencies nella root del monorepo.
```

---

**Prompt per Task [6.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.1] Setup base, Linter/Formatter/Hooks installati.

**Task Attuale:** [6.2] Configura ESLint (`.eslintrc.js` o `eslint.config.js` per Flat Config) con le estensioni raccomandate per TypeScript, React, Next.js, e accessibilità (`eslint-plugin-jsx-a11y`).

**Riferimento Standard v1.2:** Sezione 7.1 (Linting e Formattazione) richiede ESLint. Sezione 9.3 (Test Accessibilità Integrati) e 7.4 implicano l'uso di linting per accessibilità (`jsx-a11y`). L'uso di TS, React, Next.js è definito nello stack (Sez. 3). **Rileggi Sezioni 3, 7.1, 7.4, 9.3.** ESLint v9 usa Flat Config di default.

**Prerequisiti:** ESLint installato ([6.1]).

**Istruzioni Specifiche:**
1.  **Scegli Formato Config:** Usa il nuovo formato Flat Config (`eslint.config.js`) raccomandato da ESLint v9+.
2.  **Crea File:** Crea un file `eslint.config.js` nella root del monorepo.
3.  **Installa Plugin/Parser:** Installa i plugin e parser necessari come dev dependencies nella root (`-w`):
    *   `typescript-eslint` (contiene parser e plugin per TS)
    *   `eslint-plugin-react`
    *   `eslint-plugin-react-hooks`
    *   `eslint-plugin-jsx-a11y` (per accessibilità)
    *   `@next/eslint-plugin-next` (per regole specifiche Next.js)
    *   `eslint-config-prettier` (per disabilitare regole ESLint che confliggono con Prettier)
    *   Comando: `pnpm add -D -w typescript-eslint eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y @next/eslint-plugin-next eslint-config-prettier`
4.  **Configura `eslint.config.js`:**
    ```javascript
    // eslint.config.js
    import eslint from '@eslint/js';
    import tseslint from 'typescript-eslint';
    import reactPlugin from 'eslint-plugin-react';
    import hooksPlugin from 'eslint-plugin-react-hooks';
    import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
    import nextPlugin from '@next/eslint-plugin-next';
    import eslintConfigPrettier from 'eslint-config-prettier'; // Importa la config Prettier

    export default tseslint.config(
      // Configurazioni di base
      eslint.configs.recommended, // Regole base ESLint
      ...tseslint.configs.recommended, // Regole base TypeScript ESLint

      // Configurazione React
      {
        files: ['**/*.{ts,tsx}'], // Applica a file TS/TSX
        plugins: {
          react: reactPlugin,
          'react-hooks': hooksPlugin,
          'jsx-a11y': jsxA11yPlugin,
        },
        languageOptions: {
          parserOptions: {
            ecmaFeatures: { jsx: true },
          },
        },
        settings: {
          react: { version: 'detect' }, // Rileva automaticamente versione React
        },
        rules: {
          ...reactPlugin.configs.recommended.rules, // Regole raccomandate React
          ...reactPlugin.configs['jsx-runtime'].rules, // Per nuovo JSX runtime
          ...hooksPlugin.configs.recommended.rules, // Regole raccomandate React Hooks
          ...jsxA11yPlugin.configs.recommended.rules, // Regole raccomandate A11y
          // Eventuali override o regole aggiuntive qui
          'react/prop-types': 'off', // Non necessario con TypeScript
          'react/react-in-jsx-scope': 'off', // Non necessario con nuovo JSX runtime
        },
      },

      // Configurazione Next.js (solo per le app)
       {
         files: ['apps/**/*.{ts,tsx}'], // Applica solo ai file dentro /apps
         plugins: {
           '@next/next': nextPlugin,
         },
         rules: {
           ...nextPlugin.configs.recommended.rules,
           ...nextPlugin.configs['core-web-vitals'].rules,
           // Eventuali override specifici Next.js
         },
       },

      // Configurazione per ignorare file/cartelle comuni
      {
        ignores: [
          '**/node_modules/**',
          '**/dist/**',
          '**/.next/**',
          '**/.turbo/**',
          '**/storybook-static/**',
          // Aggiungere altri pattern da ignorare
        ],
      },

      // Applica la configurazione Prettier ALLA FINE per sovrascrivere conflitti
      eslintConfigPrettier,
    );
    ```
5.  **Verifica Configurazione:** Assicurati che i `files` e `ignores` siano appropriati per la struttura del monorepo. La configurazione Next.js è applicata solo alla cartella `apps`. La configurazione Prettier è applicata alla fine.

**Output Atteso:**
1.  Comando `pnpm` per installare i plugin/parser ESLint.
2.  Contenuto completo del file `eslint.config.js` nella root del monorepo.
```

---

**Prompt per Task [6.3]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.1] Setup base; [6.2] ESLint configurato.

**Task Attuale:** [6.3] Configura Prettier (`.prettierrc.js` o simile) e aggiungi `.prettierignore`.

**Riferimento Standard v1.2:** Sezione 7.1 (Linting e Formattazione) richiede Prettier. **Rileggi Sezione 7.1.**

**Prerequisiti:** Prettier installato ([6.1]).

**Istruzioni Specifiche:**
1.  **Crea File Config:** Crea un file `.prettierrc.js` nella root del monorepo.
2.  **Popola Config:** Aggiungi una configurazione Prettier di base. Puoi usare le opzioni di default o specificarne alcune comuni:
    ```javascript
    // .prettierrc.js
    module.exports = {
      semi: true, // Usa punto e virgola
      singleQuote: true, // Usa apici singoli
      trailingComma: 'all', // Virgola finale ovunque possibile
      printWidth: 80, // Larghezza riga
      tabWidth: 2, // Larghezza tabulazione
      arrowParens: 'always', // Parentesi sempre attorno a parametri arrow function
      endOfLine: 'lf', // Formato fine riga
      // Aggiungere altre opzioni se necessario
    };
    ```
3.  **Crea File Ignore:** Crea un file `.prettierignore` nella root del monorepo.
4.  **Popola Ignore:** Aggiungi i pattern dei file/cartelle da ignorare (simili a `.gitignore` e `eslint.config.js` ignores):
    ```
    # Logs
    logs
    *.log
    npm-debug.log*
    yarn-debug.log*
    yarn-error.log*
    pnpm-debug.log*

    # Dependency directories
    node_modules/
    jspm_packages/

    # Build outputs
    dist/
    build/
    .next/
    out/
    storybook-static/

    # Turbo cache
    .turbo/

    # Env files
    .env
    .env.*
    !.env.example

    # Altri file generati o non da formattare
    package-lock.json
    yarn.lock
    pnpm-lock.yaml
    CHANGELOG.md
    ```

**Output Atteso:**
1.  Contenuto del file `.prettierrc.js` nella root.
2.  Contenuto del file `.prettierignore` nella root.
```

---

**Prompt per Task [6.4]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.2] Setup base, ESLint/Prettier configurati; [6.3] Config Prettier creata.

**Task Attuale:** [6.4] Configura Husky per inizializzare Git hooks (`npx husky init`).

**Riferimento Standard v1.2:** Sezione 7.1 (Linting e Formattazione) richiede Husky e configurazione pre-commit obbligatoria. **Rileggi Sezione 7.1.**

**Prerequisiti:** Husky installato ([6.1]). Repository Git inizializzato ([0.1]).

**Istruzioni Specifiche:**
1.  Assicurati di essere nella **root** del monorepo.
2.  Esegui il comando di inizializzazione di Husky v9+. Questo comando tipicamente:
    *   Abilita i Git hooks nel repository locale (`core.hooksPath`).
    *   Crea la cartella `.husky/` (se non esiste già).
    *   Aggiunge uno script `prepare` al `package.json` root per installare gli hook dopo `pnpm install`.
3.  Comando: `npx husky init`
4.  **Verifica:** Controlla che la cartella `.husky/` sia stata creata e che lo script `prepare` sia stato aggiunto al `package.json` root.

**Output Atteso:**
1.  Il comando `npx husky init` da eseguire.
2.  Conferma delle modifiche attese (creazione `.husky/`, aggiunta script `prepare`).
```

---

**Prompt per Task [6.5]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.3] Setup base, Prettier/ESLint; [6.4] Husky inizializzato.

**Task Attuale:** [6.5] Configura `lint-staged` in `package.json` root per eseguire `eslint --fix` e `prettier --write` sui file staged nell'hook `pre-commit` come da Sez. 7.1.

**Riferimento Standard v1.2:** Sezione 7.1 (Linting e Formattazione) richiede `lint-staged` con configurazione pre-commit obbligatoria. **Rileggi Sezione 7.1.**

**Prerequisiti:** lint-staged installato ([6.1]), Husky inizializzato ([6.4]), ESLint e Prettier configurati ([6.2], [6.3]).

**Istruzioni Specifiche:**
1.  **Crea Hook pre-commit:** Usa il comando `husky` per creare un nuovo hook `pre-commit` che esegua `lint-staged`.
    *   Comando: `npx husky add .husky/pre-commit 'npx lint-staged'`
    *   Assicurati che il file `.husky/pre-commit` sia eseguibile (Husky di solito lo fa, ma verifica i permessi se necessario: `chmod +x .husky/pre-commit`).
2.  **Configura lint-staged:** Apri il file `package.json` nella **root** del monorepo.
3.  Aggiungi una sezione `lint-staged` per definire i comandi da eseguire sui file staged:
    ```json
    // Dentro package.json root
    "lint-staged": {
      "*.{js,jsx,ts,tsx}": [ // Target file JS/TS/JSX/TSX staged
        "eslint --fix",     // Esegui ESLint con fix
        "prettier --write"  // Esegui Prettier per formattare
      ],
      "*.{json,md,yaml,yml}": [ // Target altri file comuni
        "prettier --write"  // Esegui solo Prettier
      ]
    }
    ```
4.  Assicurati che i pattern di file (`*.{js,jsx,ts,tsx}`, etc.) e i comandi (`eslint --fix`, `prettier --write`) siano corretti.

**Output Atteso:**
1.  Comando `npx husky add ...` per creare l'hook pre-commit.
2.  Snippet JSON della configurazione `lint-staged` da aggiungere al `package.json` root.
```

---

**Prompt per Task [6.6]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.4] Setup base, linters/hooks; [6.5] lint-staged configurato per pre-commit.

**Task Attuale:** [6.6] Aggiungi script npm/pnpm nella root `package.json` per eseguire `lint` e `format` su tutto il monorepo (usando `turbo run lint` / `turbo run format`).

**Riferimento Standard v1.2:** Sezione 16 (Guida Rapida) mostra `turbo run lint`. È buona pratica avere anche uno script per formattare. **Rileggi Sezione 16.**

**Prerequisiti:** `package.json` root esistente ([0.4]), Turborepo configurato ([0.2], [0.5]). ESLint e Prettier configurati ([6.2], [6.3]).

**Istruzioni Specifiche:**
1.  Apri il file `package.json` nella **root** del monorepo.
2.  Aggiungi/modifica la sezione `scripts` per includere:
    *   Uno script `lint` che esegua ESLint su tutto il progetto. Può usare Turborepo se gli script `lint` sono definiti nei singoli package/app, oppure eseguire ESLint direttamente dalla root. *Decisione: Usiamo Turborepo assumendo che `lint` sarà definito nei package.*
    *   Uno script `format` che esegua Prettier per controllare la formattazione (`--check`).
    *   Uno script `format:fix` che esegua Prettier per applicare la formattazione (`--write`).
    ```json
    // Dentro package.json root
    "scripts": {
      // Script per eseguire il linting su tutti i pacchetti/app via Turborepo
      // Assicura che ogni package/app abbia uno script "lint" nel proprio package.json
      "lint": "turbo run lint",

      // Script per controllare la formattazione con Prettier
      "format": "prettier --check .", // Controlla tutti i file dalla root rispettando .prettierignore

      // Script per applicare la formattazione con Prettier
      "format:fix": "prettier --write .", // Formatta tutti i file dalla root rispettando .prettierignore

      // Mantenere lo script "prepare" aggiunto da Husky
      "prepare": "husky"
      // Aggiungere qui altri script root se necessario (es. build, test globali)
      // "build": "turbo run build",
      // "test": "turbo run test"
    }
    ```
3.  **Script Package:** Assicurati che gli script `lint` (e eventualmente `build`, `test`) vengano definiti nei `package.json` dei singoli pacchetti/applicazioni affinché `turbo run ...` funzioni correttamente. Per ora, definiamo gli script root.

**Output Atteso:** Snippet JSON aggiornato della sezione `scripts` del `package.json` root.
```

---

**Prompt per Task [6.7]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.5] Setup base, linting/formatting/hooks; [6.6] Script root definiti.

**Task Attuale:** [6.7] Installa **Jest v29.7.0+**, **React Testing Library (RTL) v16.3.0+**, **Jest-Axe v5.4.1+** come dipendenze di sviluppo (potrebbe essere a livello di workspace/package) come da Sez. 3 e 7.2. *Decisione: Installiamo nella root workspace.*

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) e Sezione 7.2 (Testing Unitario e di Integrazione) specificano Jest, RTL e Jest-Axe con le relative versioni. **Rileggi Sezioni 3 e 7.2.**

**Prerequisiti:** Monorepo configurato con pnpm ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella **root** del monorepo (`ae-frontend-platform`).
2.  Usa `pnpm` per installare le seguenti dipendenze come `devDependencies` (`-D`) a livello workspace (`-w`):
    *   `jest` (versione compatibile con `v29.7.0+`)
    *   `@types/jest` (tipi per Jest)
    *   `jest-environment-jsdom` (per simulare ambiente browser)
    *   `ts-jest` (o `@swc/jest` se si preferisce SWC per trasformare TS) - *Decisione: Usiamo `ts-jest` come più tradizionale.*
    *   `@testing-library/react` (versione compatibile con `v16.3.0+`)
    *   `@testing-library/jest-dom` (matchers custom per Jest)
    *   `jest-axe` (versione compatibile con `v5.4.1+`)
3.  Comando: `pnpm add -D -w jest@^29.7.0 @types/jest jest-environment-jsdom ts-jest @testing-library/react@^16.3.0 @testing-library/jest-dom jest-axe@^5.4.1`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare Jest, RTL, Jest-Axe e le dipendenze correlate come dev dependencies nella root del monorepo.
```

---

**Prompt per Task [6.8]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.6] Setup base; [6.7] Dipendenze Jest/RTL/Axe installate.

**Task Attuale:** [6.8] Configura Jest (`jest.config.js`) per ogni package/app testabile, includendo preset per TypeScript/SWC, `testEnvironment: 'jsdom'`, mapping moduli, setupFilesAfterEnv, e configurazione coverage con soglia minima dell'85% come richiesto in Sez 7.2. *Decisione: Creiamo una config base nella root e la estendiamo nei package.*

**Riferimento Standard v1.2:** Sezione 7.2 (Testing Unitario e di Integrazione) richiede configurazione Jest per TS, RTL, Axe, coverage > 85%, menzionando file di setup. **Rileggi Sezione 7.2.**

**Prerequisiti:** Dipendenze Jest installate ([6.7]). `tsconfig.base.json` con `paths` configurato ([0.6]).

**Istruzioni Specifiche:**
1.  **Crea Config Base Root:** Crea un file `jest.config.base.js` nella root del monorepo. Questo conterrà le configurazioni comuni.
    ```javascript
    // jest.config.base.js (nella root)
    // const { pathsToModuleNameMapper } = require('ts-jest'); // Da installare se si usa pathsToModuleNameMapper
    // const { compilerOptions } = require('./tsconfig.base.json'); // Leggi tsconfig per i path

    module.exports = {
      preset: 'ts-jest', // Usa il preset ts-jest
      testEnvironment: 'jsdom', // Ambiente di test JSDOM per React
      // File da eseguire dopo l'setup dell'ambiente (verrà creato nel Task 6.9)
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Assumendo setup file nella root
      // Ignora node_modules e cartelle build/dist/etc.
      testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/', '/.turbo/', '/storybook-static/'],
      // Trasformazioni: usa ts-jest per file ts/tsx
      transform: {
        '^.+\\.(ts|tsx)$': ['ts-jest', {
            tsconfig: '<rootDir>/tsconfig.base.json', // Specifica il tsconfig base
            // Opzionale: configurazioni ts-jest specifiche
        }],
        // Aggiungere trasformatori per CSS/file se necessario (es. jest-transform-stub)
      },
      // Module Name Mapper per gestire alias TypeScript (@ae/*)
      // Richiede l'installazione di 'ts-jest' con `pathsToModuleNameMapper`
      // pnpm add -D -w ts-jest (se non già fatto implicitamente)
      // moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>/' }),

      // Configurazione Coverage
      collectCoverage: true, // Abilita la raccolta coverage
      coverageDirectory: 'coverage', // Cartella output coverage
      coverageProvider: 'v8', // o 'babel'
      // Specifica i file da includere/escludere nel coverage
      collectCoverageFrom: [
        '**/src/**/*.{ts,tsx}', // Includi tutti i file TS/TSX in src
        '!**/src/index.{ts,tsx}', // Escludi file index
        '!**/*.stories.{ts,tsx}', // Escludi file stories
        '!**/node_modules/**',
        '!**/dist/**',
        '!**/types/**', // Escludi cartelle/tipi generati
        '!**/.storybook/**', // Escludi config Storybook
      ],
      // Soglia minima coverage globale OBBLIGATORIA come da Standard v1.2
      coverageThreshold: {
        global: {
          branches: 80, // Soglie indicative, Standard v1.2 chiede >85% totale
          functions: 80,
          lines: 85, // Mettere 85 per aderire allo standard
          statements: 85, // Mettere 85 per aderire
        },
      },
      // Watch plugins (opzionale)
      // watchPlugins: [
      //   'jest-watch-typeahead/filename',
      //   'jest-watch-typeahead/testname',
      // ],
      // Aggiungere altre configurazioni Jest necessarie
    };
    ```
2.  **Installa `ts-jest` (se non già fatto):** Assicurati che `ts-jest` sia installato come dev dependency nella root (`pnpm add -D -w ts-jest`).
3.  **Crea Config Package:** In ogni package/app che conterrà test (es. `packages/ui-core`, `packages/utils-ae`, `apps/app-example`), crea un file `jest.config.js`.
4.  **Estendi Config Base:** Nel `jest.config.js` di ogni package, estendi la configurazione base:
    ```javascript
    // Esempio: packages/ui-core/jest.config.js
    const baseConfig = require('../../jest.config.base.js'); // Importa config base dalla root

    module.exports = {
      ...baseConfig, // Eredita tutta la config base
      // Sovrascrivi o aggiungi configurazioni specifiche per questo package
      displayName: 'ui-core', // Nome visualizzato per i test di questo package
      rootDir: '.', // Root per questo specifico test run
      // Aggiorna path per setupFilesAfterEnv se il file è nella root
      setupFilesAfterEnv: ['<rootDir>/../../jest.setup.js'], // Path relativo dalla root del package al setup file
       // Aggiorna moduleNameMapper se necessario per questo package
      moduleNameMapper: {
          // Esempio override o aggiunta specifica per ui-core
         ...baseConfig.moduleNameMapper, // Eredita mapper base
         // '^@/(.*)$': '<rootDir>/src/$1', // Alias specifico del package se necessario
      },
       // Aggiustamenti coverage specifici del package se necessario
       collectCoverageFrom: [
           '<rootDir>/src/**/*.{ts,tsx}', // Ridefinisci path relativo a questo package
           '!<rootDir>/src/index.{ts,tsx}',
           '!**/*.stories.{ts,tsx}',
           // ... altre esclusioni specifiche ...
       ],
    };
    ```
5.  **Adapta Path:** Assicurati che i path come `setupFilesAfterEnv` e `rootDir` siano corretti nei file di configurazione dei singoli package/app rispetto alla posizione del file `jest.config.base.js` e `jest.setup.js` (che verrà creato dopo nella root).
6.  **Soglia Coverage:** Verifica che la soglia `lines` e `statements` in `jest.config.base.js` sia impostata ad almeno `85` come richiesto dallo standard.

**Output Atteso:**
1.  Comando `pnpm` per installare `ts-jest` (se necessario).
2.  Contenuto completo del file `jest.config.base.js` nella root.
3.  Contenuto d'esempio per un file `jest.config.js` all'interno di un package (es. `packages/ui-core/jest.config.js`) che estende la configurazione base.
```
---

**Prompt per Task [6.9]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.7] Setup base, Jest/RTL/Axe installati; [6.8] Configurazione Jest base + package creata.

**Task Attuale:** [6.9] Crea un file di setup Jest (`jest.setup.js` nella root) referenziato in `setupFilesAfterEnv`, che importi `@testing-library/jest-dom` e configuri `jest-axe` con `toHaveNoViolations`.

**Riferimento Standard v1.2:** Sezione 7.2 (Testing Unitario e di Integrazione) menziona la necessità di un file di setup Jest per importare RTL e configurare Axe (`expect(results).toHaveNoViolations();`). **Rileggi Sezione 7.2 e la configurazione `setupFilesAfterEnv` in Task [6.8].**

**Prerequisiti:** Dipendenze `@testing-library/jest-dom` e `jest-axe` installate ([6.7]). Configurazione Jest (`jest.config.base.js`) che referenzia `jest.setup.js` ([6.8]).

**Istruzioni Specifiche:**
1.  Crea un file `jest.setup.js` nella **root** del monorepo (`ae-frontend-platform`).
2.  Popola il file con le importazioni e configurazioni richieste:
    ```javascript
    // jest.setup.js (nella root)

    // Importa i matchers aggiuntivi di jest-dom (es. toBeInTheDocument)
    import '@testing-library/jest-dom';

    // Importa expect.extend per jest-axe
    import { toHaveNoViolations } from 'jest-axe';

    // Estende l'oggetto expect di Jest con il matcher di jest-axe
    expect.extend(toHaveNoViolations);

    // Puoi aggiungere qui altre configurazioni globali per i test, se necessario
    // Esempio: Mock globali, configurazione timezone, etc.
    // process.env.TZ = 'UTC';
    ```
3.  **Verifica Path:** Assicurati che il path specificato in `setupFilesAfterEnv` nei file `jest.config.base.js` e `jest.config.js` dei package punti correttamente a questo file nella root (es. `<rootDir>/jest.setup.js` nella base config, `<rootDir>/../../jest.setup.js` nella config del package).

**Output Atteso:** Il contenuto completo del file `jest.setup.js` nella root del monorepo.
```

---

**Prompt per Task [6.10]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.8] Setup base, Jest configurato; [6.9] File setup Jest creato.

**Task Attuale:** [6.10] Scrivi test unitari/integrazione d'esempio per un componente UI (`ui-core`, es. `Card`) e un componente applicativo (`app-example`, es. `UserInfo`), usando RTL e dimostrando l'asserzione `expect(results).toHaveNoViolations()` per l'accessibilità come da Sez. 7.2.

**Riferimento Standard v1.2:** Sezione 7.2 (Testing Unitario e di Integrazione) richiede test di comportamento e accessibilità con `toHaveNoViolations()`. **Rileggi Sezione 7.2.**

**Prerequisiti:** Componenti `Card` ([2.11]) e `UserInfo` ([4.6]) esistenti. Jest/RTL/Axe configurati ([6.7]-[6.9]).

**Istruzioni Specifiche:**
1.  **Test per `Card` (ui-core):**
    *   Crea una cartella `__tests__` dentro `packages/ui-core/src/components/Card/`.
    *   Crea un file `Card.test.tsx` dentro la cartella `__tests__`.
    *   Scrivi un test usando `@testing-library/react` e `jest-axe`:
        *   Importa `render`, `screen` da `@testing-library/react`.
        *   Importa `axe` da `jest-axe`.
        *   Importa il componente `Card`.
        *   Scrivi un test che renderizzi la `Card` con titolo e children.
        *   Verifica che il titolo e i children siano renderizzati (`toBeInTheDocument`).
        *   Esegui `axe` sul container renderizzato e verifica `toHaveNoViolations()`.
    ```typescript
    // packages/ui-core/src/components/Card/__tests__/Card.test.tsx
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import { axe } from 'jest-axe';
    import { Card } from '../Card'; // Verifica path import

    describe('Card Component', () => {
      it('renders title and children correctly', () => {
        const titleText = 'Test Title';
        const childText = 'Test children content';
        render(<Card title={titleText}>{childText}</Card>);

        expect(screen.getByRole('heading', { name: titleText })).toBeInTheDocument();
        expect(screen.getByText(childText)).toBeInTheDocument();
      });

      it('renders without title correctly', () => {
        const childText = 'Content without title';
        render(<Card>{childText}</Card>);

        expect(screen.queryByRole('heading')).not.toBeInTheDocument();
        expect(screen.getByText(childText)).toBeInTheDocument();
      });

      it('passes className prop', () => {
         const childText = 'Content';
         const testClass = 'my-custom-class';
         const { container } = render(<Card className={testClass}>{childText}</Card>);
         // Il contenitore esterno della card dovrebbe avere la classe
         expect(container.firstChild).toHaveClass(testClass);
      });

      // Test di accessibilità con jest-axe
      it('should have no accessibility violations', async () => {
        const titleText = 'Accessible Title';
        const childText = 'Accessible children content';
        const { container } = render(<Card title={titleText}>{childText}</Card>);

        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });

       it('should have no accessibility violations without title', async () => {
         const childText = 'Accessible content no title';
         const { container } = render(<Card>{childText}</Card>);

         const results = await axe(container);
         expect(results).toHaveNoViolations();
       });
    });
    ```
2.  **Test per `UserInfo` (app-example):**
    *   Crea una cartella `__tests__` dentro `apps/app-example/src/components/auth/`.
    *   Crea un file `UserInfo.test.tsx` dentro la cartella `__tests__`.
    *   Scrivi test usando RTL e Axe. Dovrai mockare `useSession` da `next-auth/react`.
    ```typescript
    // apps/app-example/src/components/auth/__tests__/UserInfo.test.tsx
    import React from 'react';
    import { render, screen } from '@testing-library/react';
    import { axe } from 'jest-axe';
    import UserInfo from '../UserInfo'; // Verifica path import
    import { SessionProvider, useSession } from 'next-auth/react'; // Importa useSession per mock

    // Mock di next-auth/react
    // Fai il mock del modulo completo
    jest.mock('next-auth/react');

    // Crea un tipo per il mock di useSession per TypeScript
    const mockedUseSession = useSession as jest.MockedFunction<typeof useSession>;

    describe('UserInfo Component', () => {
      it('renders loading state', () => {
        mockedUseSession.mockReturnValue({ data: null, status: 'loading' });
        render(<UserInfo />);
        expect(screen.getByText(/Caricamento sessione.../i)).toBeInTheDocument();
      });

      it('renders unauthenticated state', async () => {
        mockedUseSession.mockReturnValue({ data: null, status: 'unauthenticated' });
        const { container } = render(<UserInfo />);
        expect(screen.getByText(/Utente non autenticato./i)).toBeInTheDocument();

        // Check A11y
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });

      it('renders authenticated state with user data', async () => {
        const mockSession = {
          expires: '1', // Mock expires, non usato nel componente ma richiesto dal tipo
          user: {
            id: 'user123',
            name: 'Test User',
            email: 'test@example.com',
            codiceFiscale: 'TSTUSR**********A',
          },
        };
        mockedUseSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

        const { container } = render(<UserInfo />);

        expect(screen.getByText(/Accesso effettuato come:/i)).toBeInTheDocument();
        expect(screen.getByText(/Nome: Test User/i)).toBeInTheDocument();
        expect(screen.getByText(/Email: test@example.com/i)).toBeInTheDocument();
        expect(screen.getByText(/CF: TSTUSR\*\*\*\*\*\*\*\*\*\*A/i)).toBeInTheDocument();
        expect(screen.getByText(/ID: user123/i)).toBeInTheDocument();

        // Check A11y
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });

       it('renders authenticated state with missing user data gracefully', async () => {
         const mockSession = {
           expires: '1',
           user: { id: 'user456' }, // No name, email, cf
         };
         mockedUseSession.mockReturnValue({ data: mockSession, status: 'authenticated' });

         const { container } = render(<UserInfo />);
         expect(screen.getByText(/Nome: N\/D/i)).toBeInTheDocument();
         expect(screen.getByText(/Email: N\/D/i)).toBeInTheDocument();
         expect(screen.getByText(/CF: N\/D/i)).toBeInTheDocument();
         expect(screen.getByText(/ID: user456/i)).toBeInTheDocument();

         // Check A11y
         const results = await axe(container);
         expect(results).toHaveNoViolations();
       });
    });
    ```
3.  **Verifica Import Path:** Assicurati che i path di import per i componenti siano corretti.

**Output Atteso:**
1.  Contenuto completo del file `packages/ui-core/src/components/Card/__tests__/Card.test.tsx`.
2.  Contenuto completo del file `apps/app-example/src/components/auth/__tests__/UserInfo.test.tsx`.
```

---

**Prompt per Task [6.11]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.9] Setup base, Jest configurato; [6.10] Test d'esempio scritti.

**Task Attuale:** [6.11] Aggiungi script `test`, `test:watch`, `test:coverage` nei `package.json` rilevanti e configurali nelle pipeline di Turborepo/pnpm.

**Riferimento Standard v1.2:** Sezione 16 (Guida Rapida) mostra `turbo run test --filter=...`. È buona pratica avere script per watch e coverage. La pipeline Turbo (`turbo.json`) deve includere `test`. **Rileggi Sezione 16 e Task [0.5].**

**Prerequisiti:** Jest configurato ([6.8]). Package `ui-core` e `app-example` con test ([6.10]). File `turbo.json` ([0.5]).

**Istruzioni Specifiche:**
1.  **Script nei Package:**
    *   Apri `packages/ui-core/package.json`. Aggiungi alla sezione `scripts`:
        ```json
        "scripts": {
          // ... altri script come storybook ...
          "test": "jest",
          "test:watch": "jest --watch",
          "test:coverage": "jest --coverage"
          // Aggiungere script lint se non presente
          // "lint": "eslint ."
        }
        ```
    *   Apri `apps/app-example/package.json`. Aggiungi alla sezione `scripts` (o crea la sezione se non esiste):
        ```json
        "scripts": {
          // ... altri script come dev, build ...
          "test": "jest",
          "test:watch": "jest --watch",
          "test:coverage": "jest --coverage"
          // Aggiungere script lint se non presente
          // "lint": "eslint ."
        }
        ```
    *   *Aggiungi script simili in altri package/app che avranno test.*
2.  **Configura Pipeline Turbo:**
    *   Apri il file `turbo.json` nella root del monorepo.
    *   Assicurati che la pipeline `test` sia definita e configurata correttamente. Dovrebbe dipendere da `build` se i test richiedono un build preliminare (non comune per unit/integration con Jest/ts-jest, ma possibile) e avere output di coverage definiti.
    ```json
    {
      "$schema": "https://turbo.build/schema.json",
      "pipeline": {
        "build": {
          "dependsOn": ["^build"],
          "outputs": ["dist/**", ".next/**", "!.next/cache/**"]
        },
        "lint": {
           "outputs": [] // Lint non produce artefatti persistenti
        },
        "test": {
           "dependsOn": ["build"], // Rimuovere se build non è necessario per test
           "outputs": ["coverage/**"], // Output del report di coverage
           "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"] // File che influenzano i test
        },
        "dev": {
          "cache": false,
          "persistent": true
        },
        "storybook": {
           "cache": false,
           "persistent": true
        },
        "test:watch": {
           "cache": false,
           "persistent": true
        },
        "test:coverage": {
           // Simile a test ma con flag coverage
           "dependsOn": ["build"], // Rimuovere se non necessario
           "outputs": ["coverage/**"],
           "inputs": ["src/**/*.tsx", "src/**/*.ts", "test/**/*.ts", "test/**/*.tsx"]
        }
        // ... altre pipeline ...
      }
    }
    ```
    *   Assicurati che `test:watch` e `test:coverage` siano definiti se vuoi eseguirli tramite `turbo run`.

**Output Atteso:**
1.  Snippet JSON da aggiungere alla sezione `scripts` di `packages/ui-core/package.json`.
2.  Snippet JSON da aggiungere alla sezione `scripts` di `apps/app-example/package.json`.
3.  Contenuto aggiornato del file `turbo.json` con la pipeline `test` (e opzionalmente `test:watch`, `test:coverage`) configurata.
```

---

**Prompt per Task [6.12]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.10] Setup base, Jest/RTL/Axe test; [6.11] Script test configurati.

**Task Attuale:** [6.12] Scegli e installa **Playwright v1.51.1+** (preferito) come da Sez. 3 e 7.3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) e Sezione 7.3 (Testing End-to-End) specificano Playwright come scelta preferita (v1.51.1+), con Cypress come alternativa. **Rileggi Sezioni 3 e 7.3.** Installiamo nell'app `app-example` dove verranno eseguiti i test E2E.

**Prerequisiti:** App `app-example` esistente ([0.11]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `@playwright/test` come dev dependency (`-D`). Assicurati di installare una versione compatibile con `v1.51.1+`. Questo comando installerà anche i browser necessari.
3.  Comando: `pnpm add -D @playwright/test@^1.51.1`
4.  **Inizializzazione (Opzionale ma Raccomandata):** Playwright offre un comando di inizializzazione che crea file di configurazione e cartelle di esempio. Eseguilo: `npx playwright install` (per assicurarsi che i browser siano installati) e poi valuta se usare `npx playwright test --init` o creare la config manualmente nel prossimo task. *Decisione: Creiamo la config manualmente nel task [6.14] per seguire lo standard.* Esegui solo `npx playwright install`.

**Output Atteso:**
1.  Comando `pnpm` esatto per installare `@playwright/test`.
2.  Comando `npx playwright install` da eseguire.
```

---

**Prompt per Task [6.13]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.11] Setup base, test unitari; [6.12] Playwright installato.

**Task Attuale:** [6.13] Installa **@axe-core/playwright v4.9.1+** come da Sez. 3 e 7.3.

**Riferimento Standard v1.2:** Sezione 3 (Stack Tecnologico Core) e Sezione 7.3 (Testing End-to-End) specificano `@axe-core/playwright v4.9.1+` per i test E2E con Axe. **Rileggi Sezioni 3 e 7.3.**

**Prerequisiti:** Playwright installato in `app-example` ([6.12]), pnpm configurato ([0.4]).

**Istruzioni Specifiche:**
1.  Naviga nella cartella `apps/app-example`.
2.  Usa `pnpm` per installare `@axe-core/playwright` come dev dependency (`-D`). Assicurati di installare una versione compatibile con `v4.9.1+`.
3.  Comando: `pnpm add -D @axe-core/playwright@^4.9.1`

**Output Atteso:** Il comando `pnpm` esatto da eseguire per installare `@axe-core/playwright` in `apps/app-example`.
```

---

**Prompt per Task [6.14]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[6.12] Setup base; [6.13] Axe-Playwright installato.

**Task Attuale:** [6.14] Configura Playwright (`playwright.config.ts`) nell'app `app-example`, definendo `baseURL`, `webServer` command per avviare l'app dev, e viewport comuni.

**Riferimento Standard v1.2:** Sezione 7.3 (Testing End-to-End) richiede la configurazione di Playwright, menzionando `baseURL` e setup auth. **Rileggi Sezione 7.3.**

**Prerequisiti:** Playwright installato ([6.12]). App `app-example` con script `dev` ([0.11], [6.6]).

**Istruzioni Specifiche:**
1.  Crea un file `playwright.config.ts` nella root di `apps/app-example`.
2.  Popola il file con la configurazione base di Playwright:
    ```typescript
    // apps/app-example/playwright.config.ts
    import { defineConfig, devices } from '@playwright/test';
    import path from 'path';

    // Leggi variabili d'ambiente se necessario (es. per baseURL)
    // require('dotenv').config({ path: path.resolve(__dirname, '.env.local') }); // Se usi dotenv

    const PORT = process.env.PORT || 3000;
    const BASE_URL = process.env.PLAYWRIGHT_TEST_BASE_URL || `http://localhost:${PORT}`;

    export default defineConfig({
      // Directory contenente i file di test (default: tests, creiamo dopo)
      testDir: './tests-e2e',
      // Timeout globale per ogni test (in millisecondi)
      timeout: 30 * 1000, // 30 secondi
      // Timeout per le asserzioni expect()
      expect: {
        timeout: 5000, // 5 secondi
      },
      // Esegui test in parallelo (default: true su CI, false localmente)
      fullyParallel: true,
      // Fail the build on CI if you accidentally left test.only in the source code.
      forbidOnly: !!process.env.CI,
      // Numero di tentativi (0 default, 1 su CI)
      retries: process.env.CI ? 1 : 0,
      // Numero di workers (default: metà CPU cores)
      // workers: process.env.CI ? 1 : undefined,
      // Reporter da usare (es. html, list, dot)
      reporter: 'html', // Genera report HTML

      // Configurazione globale (es. baseURL, httpCredentials, etc.)
      use: {
        // URL base per le azioni come page.goto()
        baseURL: BASE_URL,

        // Cattura screenshot/video/trace solo al primo tentativo fallito (on-first-retry)
        trace: 'on-first-retry',
        // screenshot: 'only-on-failure',
        // video: 'retain-on-failure',
      },

      // Configurazione del server di sviluppo locale
      webServer: {
        // Comando per avviare il server di sviluppo
        // Assicurati che lo script 'dev' sia definito nel package.json dell'app
        command: 'pnpm run dev', // O 'npm run dev' / 'yarn dev'
        // URL da attendere prima di iniziare i test
        url: BASE_URL,
        // Timeout attesa server (in ms)
        timeout: 120 * 1000, // 2 minuti
        // Riutilizza server esistente se già avviato
        reuseExistingServer: !process.env.CI,
        // Opzionale: specifica cwd se playwright.config non è nella root dell'app
        // cwd: path.resolve(__dirname),
        // Opzionale: variabili d'ambiente per il server
        // env: { PORT: '3000' }
      },

      // Configurazione per i browser/progetti
      projects: [
        {
          name: 'chromium',
          use: { ...devices['Desktop Chrome'] },
        },
        /*
        {
          name: 'firefox',
          use: { ...devices['Desktop Firefox'] },
        },
        {
          name: 'webkit',
          use: { ...devices['Desktop Safari'] },
        },
        */
        // Esempi Mobile Viewports
        /*
        {
           name: 'Mobile Chrome',
           use: { ...devices['Pixel 5'] },
        },
        {
           name: 'Mobile Safari',
           use: { ...devices['iPhone 12'] },
        },
        */
        // Esempi Test con specifiche di accessibilità
        /*
        {
           name: 'Desktop Chrome HiContrast',
           use: {
             ...devices['Desktop Chrome'],
             colorScheme: 'dark', // Esempio, verificare opzioni esatte
             forcedColors: 'active', // Esempio forzatura colori
           },
        },
        */
      ],

      // Opzionale: directory per output (screenshot, video, trace, report html)
      // outputDir: 'test-results/',
    });
    ```
3.  **Adattamenti:**
    *   Verifica che `testDir` punti alla cartella dove metterai i test E2E (es. `./tests-e2e`, la creeremo dopo).
    *   Verifica che il comando in `webServer.command` sia corretto (`pnpm run dev`).
    *   Verifica che `webServer.url` (e `use.baseURL`) punti all'URL corretto dell'app dev (`http://localhost:3000` di default).
    *   Includi i progetti/browser richiesti (inizialmente solo Chromium va bene).

**Output Atteso:** Il contenuto completo del file `apps/app-example/playwright.config.ts`.
```

















---

**(Procedo con il task [6.15] e successivi...)**














---

**(Procedo con il task [6.9] e successivi...)**















---
















**(Continuo con la generazione...)**
---

**Prompt per Task [3.2]**

```prompt
**Ruolo AI:** Generatore di codice e configurazione per progetto software.

**Contesto Progetto:** Stiamo costruendo il "Frontend AdE Starter Kit" basandoci ESCLUSIVAMENTE sullo "Standard Tecnico Vincolante: Piattaforma Frontend AdE (v1.2)" ("Standard v1.2").

**Obiettivo Generale:** Implementare sequenzialmente tutti i task tecnici per creare lo Starter Kit.

**Task Precedenti Completati:** [0.1]-[3.1] Setup base, RTK installato in `store-config`.

**Task Attuale:** [3.2] Implementa `packages/store-config/src/api.ts` con `createApi` e `fetchBaseQuery` come da Sez. 4.2. Configura `baseUrl` da `process.env.NEXT_PUBLIC_API_BASE_URL`. Implementa `prepareHeaders` per aggiungere token Auth (da stato Redux) e `X-Correlation-ID`. Definisci `tagTypes` d'esempio (`User`, `Documents`).

**Riferimento Standard v1.2:** Sezione 4.2 (Gestione dello Stato Applicativo). Contiene uno snippet dettagliato per `api.ts` (RTK Query setup). Specifica `createApi`, `fetchBaseQuery`, `baseUrl` da env var, `prepareHeaders` con token e Correlation ID, e `tagTypes`. **Rileggi attentamente lo snippet di `api.ts` nella Sezione 4.2.**

**Prerequisiti:** Package `store-config` con RTK installato ([3.1]), file `src/index.ts` esistente ([0.12]).

**Istruzioni Specifiche:**
1.  Crea un file `api.ts` dentro `packages/store-config/src/`.
2.  Popola il file `api.ts` con il codice *esattamente* come mostrato nello snippet della Sezione 4.2:
    ```typescript
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
    ```
3.  **Note Importanti:**
    *   L'import `RootState` causerà un errore finché `store.ts` e `authSlice.ts` non saranno creati. Puoi commentarlo temporaneamente o usare `any` come indicato nel codice.
    *   Assicurati che il path a `RootState` (`./store`) sia corretto.
    *   Il path per leggere il token (`(getState() as RootState).auth.token`) presuppone una slice chiamata `auth` con una proprietà `token`. Questo dovrà essere coerente con `authSlice.ts`.
    *   L'uso di `crypto.randomUUID()` è corretto per ambienti moderni.
4.  Esporta `apiSlice` dal file `index.ts` del package: aggiungi `export * from './api';` a `packages/store-config/src/index.ts`.

**Output Atteso:**
1.  Contenuto completo del file `packages/store-config/src/api.ts`.
2.  Riga da aggiungere a `packages/store-config/src/index.ts` per esportare `apiSlice`.
```

---

**(Continua con gli altri task...)**
---
**(Continua così per ogni task successivo)**

**Pattern per i Prompt Successivi:**

Per ogni nuovo task `[X.Y]`:

1.  **Copia e Incolla la Struttura del Prompt:** Usa la struttura sopra come template.
2.  **Aggiorna `Task Precedenti Completati`:** Elenca i task precedenti o almeno l'ultimo significativo.
3.  **Aggiorna `Task Attuale`:** Inserisci l'ID e la descrizione del task corrente `[X.Y]`.
4.  **Aggiorna `Riferimento Standard v1.2`:** Identifica *meticolosamente* le sezioni ESATTE del documento v1.2 che giustificano e definiscono il task attuale. Aggiungi l'istruzione "**Rileggi attentamente queste sezioni.**".
5.  **Aggiorna `Prerequisiti`:** Indica quali output/configurazioni dei task precedenti sono necessari per eseguire quello attuale.
6.  **Aggiorna `Istruzioni Specifiche`:** Sii estremamente preciso.
    *   Se si tratta di installare pacchetti: specifica il nome ESATTO del pacchetto e la versione richiesta dallo Standard v1.2 (es. `Next.js v15.4.2+`, `Zod v3.23.8+`). Specifica se è una dipendenza normale o `devDependency`. Indica *dove* installarla (root, app specifica, package specifico). Usa il comando `pnpm add [-D] package@version` se pnpm è il package manager scelto.
    *   Se si tratta di creare/modificare file: specifica il percorso ESATTO del file. Fornisci il contenuto ESATTO o la struttura del contenuto, facendo riferimento diretto a snippet di codice, configurazioni o requisiti presenti nello Standard v1.2. Non inventare configurazioni non menzionate. Usa placeholder (es. `YOUR_CLIENT_ID`) solo se il valore non è definito nello standard e deve essere fornito dall'utente.
    *   Se si tratta di comandi: specifica il comando esatto.
7.  **Aggiorna `Output Atteso`:** Chiarisci cosa ti aspetti che l'AI produca (contenuto di un file, comandi, lista di modifiche).

**Esempio per un task più complesso come [1.18] Middleware:**

```prompt
# ... (boilerplate iniziale come sopra) ...

**Task Precedenti Completati:** [0.1]-[1.17] Setup monorepo, app Next.js, routing base, utility nonce.

**Task Attuale:** [1.18] Implementa il file `middleware.ts` in `apps/app-example/src/` esattamente come definito in Sez. 4.1, includendo: Logica i18n redirect, Headers Sicurezza (Nonce, Correlation-ID, XFO, XCTO, RP, PP), CSP rigida con nonce, matcher config.

**Riferimento Standard v1.2:** Sezione 4.1 (Framework e Routing). Questa sezione contiene un blocco di codice DETTAGLIATO per `middleware.ts`. **Rileggi ATTENTAMENTE e COMPLETAMENTE il blocco di codice del middleware nella Sezione 4.1.** Presta attenzione a ogni header, alla logica i18n, alla generazione/passaggio del nonce, al Correlation ID, alla struttura della CSP (inclusi `nonce-${nonce}`, `strict-dynamic`, placeholders env) e al `matcher`.

**Prerequisiti:** App Next.js (`app-example`) creata ([0.10]/[0.11]), utility `generateNonce` in `src/lib/nonce.ts` creata ([1.7]).

**Istruzioni Specifiche:**
1.  Crea un file chiamato `middleware.ts` nel percorso `apps/app-example/src/`.
2.  Popola questo file con il codice TypeScript *esattamente* come mostrato nel blocco di codice della Sezione 4.1 dello Standard v1.2.
3.  Assicurati che:
    *   L'import di `generateNonce` punti al percorso corretto (`@/lib/nonce` o relativo).
    *   Le costanti `locales` e `defaultLocale` siano impostate a `['it']` e `'it'`.
    *   La generazione/impostazione di `X-Nonce` e `X-Correlation-ID` sia presente.
    *   Tutti gli header di sicurezza (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`) siano impostati con i valori specificati.
    *   La stringa `Content-Security-Policy` (CSP) sia costruita *esattamente* come nel documento, includendo `nonce-${nonce}`, `'strict-dynamic'`, `https:`, `'unsafe-inline'` per `style-src` (come indicato), e i placeholder per le variabili d'ambiente (`${process.env.SPID_PROVIDER_URL}`).
    *   La logica di redirect i18n sia implementata correttamente, preservando gli header.
    *   Il `matcher` in `export const config` sia copiato esattamente come nel documento.

**Output Atteso:** Il contenuto completo del file `apps/app-example/src/middleware.ts`.
```

Seguendo questo approccio per tutti i 140 task, dovresti essere in grado di guidare l'AI passo dopo passo, mantenendo la coerenza con il documento tecnico e minimizzando la necessità di correzioni manuali estese. Buona fortuna!
