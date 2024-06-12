const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    urldev: "https://practicetestautomation.com/practice-test-login/",
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/Projects/practiceTestAutomation/*.js",
  },
});
