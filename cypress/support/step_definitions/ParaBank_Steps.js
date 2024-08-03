/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

// Scenario: Automate User Registration process

Given(`I open the parabank site`, () => {
  parabank.parabankSite();
});

When(`I click on the Register link`, () => {
  parabank.registerLinkButton();
});

When(`I add valid registration data`, () => {
  parabank.enterFirstName();
  parabank.enterLastName();
  parabank.enterAddress();
  parabank.enterCity();
  parabank.enterState();
  parabank.enterZipCode();
  parabank.enterPhone();
  parabank.enterSSN();
  parabank.enterUsername();
  parabank.enterPassword();
  parabank.enterConfirm();
});

When(`I click on the Register button`, () => {
  parabank.clickRegisterButton();
});

Then(`I verify user registered successfully`, () => {
  parabank.registrationSuccessConfirmation();
});

// Scenario: Automate that user is able to login successfully

When(`I enter the valid username`, () => {
  parabank.clickloginUsername();
});

When(`I enter the valid password`, () => {
  parabank.clickloginPassword();
});

When(`I click the Login button`, () => {
  parabank.clickloginButton();
});

Then(
  `I verify that the user is able to login successfully in the ParaBank application`,
  () => {
    parabank.loginSuccessConfirmation();
  }
);

// Scenario: Automate that User is able to Open the Account successfully

When(`I navigate to my account page`, () => {
  parabank.accountPage();
});

When(`I click on Open New Account`, () => {
  parabank.clickOpenNewAccountLink();
});

Then("I verify Open New Account choices is displayed", () => {
  parabank.openNewAccountConfirmation();
});

// Scenario: Automate that Overview page is displayed

Then(`I verify that the Account Overview page is displayed`, () => {});

// Scenario: Automate that User is able to view the Account Overview page

When(`I click on Accounts Overview`, () => {});
Then(
  "I verify that the user is able to view the Account Overview page",
  () => {}
);
