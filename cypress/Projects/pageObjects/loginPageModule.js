class loginModule {
  usernameField() {
    return cy.get("#username");
  }

  passwordField() {
    return cy.get("#password");
  }

  submitBtn() {
    return cy.get("#submit");
  }

  logoutBtn() {
    return cy.get(".wp-block-button__link").contains("Log out");
  }

  errorMessage() {
    return cy.get("#error.show");
  }
}

class loginPage {
  constructor() {
    this.loginModule = new loginModule();
  }
}
export default new loginPage();
