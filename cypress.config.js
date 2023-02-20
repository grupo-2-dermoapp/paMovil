const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "DermoApp",
  chromeWebSecurity: false,
  e2e: {
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
    baseUrl: 'https://grupo-2-dermoapp.github.io/frontend',
    userAgent:'Mobile'
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
  },
});
