const { defineConfig } = require("cypress");
const cucumber= require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({
  e2e: {
    specPattern:"**/*.feature",
    baseUrl:"https://appwebdev.calidda.com.pe/WebFNBDEV/login",
    setupNodeEvents(on, config) {
      on("file:preprocessor",cucumber());
    },
  },
});
