import React from 'react';

export interface ButtonProps {
  /**
   * Il testo del pulsante
   */
  label: string;
  /**
   * Variante del pulsante
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Dimensione del pulsante
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Callback per il click
   */
  onClick?: () => void;
  /**
   * Disabilita il pulsante
   */
  disabled?: boolean;
}

/**
 * Componente Button primario per l'interazione utente
 */
export const Button: React.FC<ButtonProps> = ({
  label,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  const baseClasses = 'font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary',
    secondary: 'bg-secondary text-white hover:bg-secondary-dark focus:ring-secondary',
    outline: 'bg-transparent text-primary border border-primary hover:bg-primary-50 focus:ring-primary',
  };
  
  const sizeClasses = {
    small: 'py-1 px-3 text-sm',
    medium: 'py-2 px-4 text-base',
    large: 'py-3 px-6 text-lg',
  };
  
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';
  
  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;