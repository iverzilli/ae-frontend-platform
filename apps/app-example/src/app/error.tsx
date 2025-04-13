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
          {/* Mostra dettagli tecnici solo in DEV */}
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