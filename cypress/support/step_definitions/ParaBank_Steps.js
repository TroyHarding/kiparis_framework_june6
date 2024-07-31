/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

//Scenario: Automate User Registration process

Given(`I open the parabank site`, () => {
  parabank.openParaBank();
});

When(`I click on the Register link`, () => {
  parabank.clickRegisterLink();
});

When(`I add valid registration data`, () => {
  parabank.sigUpValidData();
});

When(`I click on the Register button`, () => {
  parabank.clickRegisterButton();
});

Then(`I verify user registered successfully`, () => {
  parabank.confirmRegistration();
});

//Scenario: Automate User Registration process

When(`I enter the valid username`, () => {
  parabank.enterCustomerUsername();
});

When(`I enter the valid password`, () => {
  parabank.enterCustomerPassword();
});

When(`I click the Login button`, () => {
  parabank.clickLoginButton();
});

Then(
  `I verify that the user is able to login successfully in the ParaBank application`,
  () => {
    parabank.loginSuccess();
  }
);

//Scenario: Automate that User is able to Open the Account successfully

When(`I navigate to my account page`, () => {
  parabank.navigateToAccountPage();
});

When(`I click on Open New Account link`, () => {
  parabank.navigateToOpenNewAccount();
});

Then(`I verify that the field {string} is displayed`, (field) => {
  parabank.openNewAccountField(field);});

//Scenario: Automate that Overview page is displayed

When(`I click on Open New Account button`, () => {
  parabank.openCheckingAccount();
});

Then(`I verify that the Account Overview page is displayed`, () => {
  parabank.navigateToAccountPage();
})

//Scenario: Automate that User is able to view the Account Overview page

When(`I click on Open New Account`, () => {
  
});

When(`I click on Accounts Overview`, () => {
  
});

Then(`I verify that the user is able to view the Account Overview page`, () => {
  
});