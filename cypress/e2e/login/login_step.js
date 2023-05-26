import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I open login page", () => {
  cy.visit("http://zero.webappsecurity.com/login.html");
});

When("I submit login form", () => {
  cy.get("#user_login").type("username");
  cy.get("#user_password").type("password");
  cy.contains("Sign in").click();
});

Then("I should see the dashboard", () => {
  cy.get("#account_summary_tab").should("be.visible");
});
