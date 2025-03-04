import BasePage from '../../../pageObjects/basePage.cy';
class LoginPage extends BasePage {
    visit(){
        super.visit('/');
    }
    ingresarEmailPasword(username, password){
        this.typeText('#usuario', username);
        this.typeText('#password', password);
        this.clickElement('#submit');
        cy.wait (20000);
        return this;
    }
    visualizarEstado(){
        return this.verifyElementVisible('.round-state-color');
    }
}

const login = new LoginPage();
export default login;