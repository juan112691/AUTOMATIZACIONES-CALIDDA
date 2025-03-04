class BasePage {
    visit(url){
        cy.visit(url);
    }
    getElement (selector){
        return cy.get(selector);
    }
    clickElement (selector){
        this.getElement(selector).click();
    }
    typeText (selector, text){
        this.getElement(selector).type(text);
    }
    verifyElementVisible (selector){
        this.getElement(selector).should('be.visible');
    }
    verifyAndClick (selector){
        this.getElement(selector).should('be.visible').click();
    }
}

export default BasePage;