import type { StorybookConfig } from '@storybook/react-webpack5';

// Configurazione semplificata senza getAbsolutePath per evitare problemi con ESM
const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": [
    '@storybook/addon-webpack5-compiler-swc',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
    // Rimuoviamo l'addon-postcss che causa problemi di compatibilità con Storybook 8.6.12
    // {
    //   name: '@storybook/addon-postcss',
    //   options: {
    //     postcssLoaderOptions: {
    //       // Storybook caricherà automaticamente postcss dalle dipendenze
    //     },
    //   },
    // },
  ],
  "framework": {
    "name": '@storybook/react-webpack5',
    "options": {}
  },
  "staticDirs": ['../public'],
};

export default config;