const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    siteBaseUrl: "https://katalon-demo-cura.herokuapp.com/",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
