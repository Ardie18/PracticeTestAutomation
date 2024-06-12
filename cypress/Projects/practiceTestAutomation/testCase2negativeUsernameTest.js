/// <reference types="cypress" />
import loginPage from "../pageObjects/loginPageModule";

describe("LogIn", function () {
  beforeEach(function () {
    // Load fixture data
    cy.fixture("credentials").then((credentials) => {
      this.credentials = credentials;
    });
  });

  it("Practice Test Automation", function () {
    //Visit Login Page
    cy.visit(Cypress.env("urldev"));
    cy.wait(2000);

    // Enter login credentials and submit
    loginPage.loginModule
      .usernameField()
      .type(this.credentials.incorrectUsername);
    loginPage.loginModule.passwordField().type(this.credentials.password);
    loginPage.loginModule.submitBtn().click();

    // Verify error message is displayed
    loginPage.loginModule.errorMessage().should("be.visible");

    // Verify error message text
    loginPage.loginModule
      .errorMessage()
      .should("have.text", "Your username is invalid!");
  });
});
