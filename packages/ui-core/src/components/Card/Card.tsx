import React from 'react';
import clsx from 'clsx';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Titolo opzionale della card
   */
  title?: string;
  /**
   * Contenuto della card
   */
  children: React.ReactNode;
  /**
   * Classi CSS aggiuntive
   */
  className?: string;
}

/**
 * Componente Card semplice e accessibile
 * 
 * Questo componente è stato creato come esempio di componente custom in ui-core
 * poiché non esiste un componente Card generico nel design-react-kit che soddisfi
 * le esigenze base di un contenitore semplice e accessibile.
 */

export const Card: React.FC<CardProps> = ({ title, children, className = '', ...props }) => {
  // Utilizziamo clsx per gestire le classi condizionali
  
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
    <div className={cardClasses} tabIndex={0} {...props}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};