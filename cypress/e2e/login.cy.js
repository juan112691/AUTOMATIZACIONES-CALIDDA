/// <reference types="cypress"/>
describe('login calidda',()=>{
    it('login',()=>{
        cy.visit('https://appwebdev.calidda.com.pe/WebFNBDEV/login')
        cy.get('#usuario').type('super')
        cy.get('#password').type('ABC@abc2025')
        cy.get('#submit').click()
        cy.wait(20000)
        cy.get('.round-state-color').should('be.visible')
        cy.get('#31 _header').click()
    })
})