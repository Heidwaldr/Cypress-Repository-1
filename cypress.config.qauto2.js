const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qauto2.forstudy.space/',
    env: {
      email: 'qauto.test.v2.kubrak@gmail.com',
      password: 'Qauto@2025v2'
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      overwrite: false,
      html: true,
      json: true,
    },
  },
});