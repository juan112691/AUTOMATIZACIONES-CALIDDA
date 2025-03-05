/// <reference types="cypress"/>
import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import login from "../../pages/loginPages/loginPage.cy.js";

Given('Un usuario ingresa a la web Calidda', () => {
  login.visit();
});

When('El usuario ingresa las credenciales {string} y {string}', (username, password) => {
    login.ingresarEmailPasword(username, password); 
});

Then('El usuario visualiza el esatado de la plataforma', () => {
    login.visualizarEstado();
});