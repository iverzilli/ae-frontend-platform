module.exports = {
  plugins: {
    // 'tailwindcss/nesting': {}, // Omesso a causa di problemi di installazione
    tailwindcss: { config: './tailwind.config.js' }, // Usa il config dell'app
    autoprefixer: {},
  },
}; 