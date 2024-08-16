const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://cypress-test-nextjs.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
