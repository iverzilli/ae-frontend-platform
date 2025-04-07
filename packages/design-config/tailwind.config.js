const designTokens = require('design-tokens-italia/dist/tokens');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // I percorsi verranno sovrascritti dalle app che utilizzano questa configurazione
  ],
  theme: {
    extend: {
      colors: {
        // Colori principali
        primary: designTokens.colors['--color-primary'],
        secondary: designTokens.colors['--color-secondary'],
        success: designTokens.colors['--color-success'],
        warning: designTokens.colors['--color-warning'],
        danger: designTokens.colors['--color-danger'],
        // Scale di grigi
        gray: {
          50: designTokens.colors['--color-gray-50'],
          100: designTokens.colors['--color-gray-100'],
          200: designTokens.colors['--color-gray-200'],
          300: designTokens.colors['--color-gray-300'],
          400: designTokens.colors['--color-gray-400'],
          500: designTokens.colors['--color-gray-500'],
          600: designTokens.colors['--color-gray-600'],
          700: designTokens.colors['--color-gray-700'],
          800: designTokens.colors['--color-gray-800'],
          900: designTokens.colors['--color-gray-900'],
        },
        // Colori di sfondo
        background: {
          primary: designTokens.colors['--color-background-primary'],
          secondary: designTokens.colors['--color-background-secondary'],
        },
        // Colori di testo
        text: {
          primary: designTokens.colors['--color-text-primary'],
          secondary: designTokens.colors['--color-text-secondary'],
        },
      },
      fontFamily: {
        sans: [designTokens.fonts['--font-sans'], 'sans-serif'],
        serif: [designTokens.fonts['--font-serif'], 'serif'],
        mono: [designTokens.fonts['--font-mono'], 'monospace'],
      },
      fontSize: {
        xs: designTokens.fontSizes['--font-size-xs'],
        sm: designTokens.fontSizes['--font-size-sm'],
        base: designTokens.fontSizes['--font-size-base'],
        lg: designTokens.fontSizes['--font-size-lg'],
        xl: designTokens.fontSizes['--font-size-xl'],
        '2xl': designTokens.fontSizes['--font-size-2xl'],
        '3xl': designTokens.fontSizes['--font-size-3xl'],
        '4xl': designTokens.fontSizes['--font-size-4xl'],
      },
      spacing: {
        // Scala di spaziatura basata sulla griglia 8pt
        0: '0',
        1: designTokens.spacing['--spacing-1'],
        2: designTokens.spacing['--spacing-2'],
        3: designTokens.spacing['--spacing-3'],
        4: designTokens.spacing['--spacing-4'],
        5: designTokens.spacing['--spacing-5'],
        6: designTokens.spacing['--spacing-6'],
        8: designTokens.spacing['--spacing-8'],
        10: designTokens.spacing['--spacing-10'],
        12: designTokens.spacing['--spacing-12'],
        16: designTokens.spacing['--spacing-16'],
        20: designTokens.spacing['--spacing-20'],
        24: designTokens.spacing['--spacing-24'],
        32: designTokens.spacing['--spacing-32'],
        40: designTokens.spacing['--spacing-40'],
        48: designTokens.spacing['--spacing-48'],
        56: designTokens.spacing['--spacing-56'],
        64: designTokens.spacing['--spacing-64'],
      },
      borderRadius: {
        none: '0',
        sm: designTokens.borderRadius['--border-radius-sm'],
        DEFAULT: designTokens.borderRadius['--border-radius-base'],
        md: designTokens.borderRadius['--border-radius-md'],
        lg: designTokens.borderRadius['--border-radius-lg'],
        xl: designTokens.borderRadius['--border-radius-xl'],
        '2xl': designTokens.borderRadius['--border-radius-2xl'],
        full: '9999px',
      },
      // Altre estensioni dai token se necessarie
      boxShadow: {
        sm: designTokens.shadows['--shadow-sm'],
        DEFAULT: designTokens.shadows['--shadow-base'],
        md: designTokens.shadows['--shadow-md'],
        lg: designTokens.shadows['--shadow-lg'],
        xl: designTokens.shadows['--shadow-xl'],
      },
      zIndex: {
        // Z-index standardizzati
        dropdown: designTokens.zIndex['--z-index-dropdown'],
        sticky: designTokens.zIndex['--z-index-sticky'],
        fixed: designTokens.zIndex['--z-index-fixed'],
        modal: designTokens.zIndex['--z-index-modal'],
        popover: designTokens.zIndex['--z-index-popover'],
        tooltip: designTokens.zIndex['--z-index-tooltip'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}; 