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
    loginPage.loginModule.usernameField().type(this.credentials.username);
    loginPage.loginModule.passwordField().type(this.credentials.password);
    loginPage.loginModule.submitBtn().click();

    // Verify the new page URL contains the expected path
    cy.url().should(
      "include",
      "practicetestautomation.com/logged-in-successfully"
    );

    // Verify the page contains expected text
    cy.contains("Congratulations").should("be.visible");
    cy.contains("successfully logged in").should("be.visible");

    // Verify the Log out button is displayed on the new page
    loginPage.loginModule.logoutBtn().should("be.visible");
  });
});
