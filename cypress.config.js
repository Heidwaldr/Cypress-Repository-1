const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // залиш пустим або додай події, якщо треба
    },
    specPattern: 'cypress/e2e/**/*.spec.js', // ✅ шлях до тестів
  },
});

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {},
    specPattern: 'cypress/e2e/**/*.spec.js',
  },
});