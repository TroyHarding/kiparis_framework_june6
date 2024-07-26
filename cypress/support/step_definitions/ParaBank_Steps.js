/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

//USING CUSTOM Method
Given("I open the parabank site", () => {

  parabank.visitHomePage();
});

When("I click on the Register link", () => {
  parabank.registerLink();
});

When("I add valid registration data", () => {
  parabank.validRegistrationData();
});

//Using just SELECTORS
When("I click on the Register button", () => {
  cy.get('input[value="Register"]').click();
});

Then("I verify user registered successfully", () => {
  cy.contains("Your account was created successfully").should("be.visible");
});

When("I enter the valid username", () => {
  cy.fixture("parabank.json").then((data) => {
    cy.get(parabank.loginPanel.usernameInput).type(data.username);
  });
});

When("I enter the valid password", () => {
  cy.fixture("parabank.json").then((data) => {
    cy.get(parabank.loginPanel.passwordInput).type(data.password);
  });
});

When("I click the Login button", () => {
  cy.get(parabank.loginPanel.loginButton).click();
});

Then("I verify user is able to loggin successfully", () => {
  cy.get(parabank.userNameDisplay).should("be.visible");
});

//INCOMPLETE
When("I navigate to my account page", () => {
  // Navigate to account page
  cy.contains("Accounts Overview").click();
});

When("I click on Open New Account", () => {
  cy.contains("Open New Account").click();
});

Then(
  'I verify that the field "What type of Account would you like to open?" is displayed',
  () => {
    cy.contains("What type of Account would you like to open?").should(
      "be.visible"
    );
  }
);

Then("I verify that the Account Overview page is displayed", () => {
  cy.contains("Account Overview").should("be.visible");
});

When("I click on Accounts Overview", () => {
  cy.contains("Accounts Overview").click();
});

Then("I verify that the user is able to view the Account Overview page", () => {
  cy.contains("Account Overview").should("be.visible");
});
