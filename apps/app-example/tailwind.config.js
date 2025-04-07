const baseConfig = require('@ae/design-config/tailwind.config.js');

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui-core/src/**/*.{js,ts,jsx,tsx}', // Includi package UI
    // Aggiungere altri packages se contengono UI
  ],
  theme: {
    extend: {
      // Estende i temi base senza sovrascriverli completamente
      ...baseConfig.theme?.extend,
      // Qui si possono aggiungere estensioni specifiche dell'app se necessario
      // Esempio: colors: { 'app-specific': '#ff0000' }
    },
  },
  plugins: [
     ...(baseConfig.plugins || []),
     // Aggiungere plugin specifici dell'app se necessario
  ]
}; 