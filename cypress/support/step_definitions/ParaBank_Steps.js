/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabankLoginPage from "../page-object/parabank_PO";

const parabank = new parabankLoginPage();

//Steps for scenario 1

Given(`I open the parabank site`, () => {
  parabank.openLoginPage();
});

When(`I click on the Register link`, () => {
  parabank.clickRegisterButton();
});

When(`I add valid registration data`, () => {
  parabank.fillOutSignUpForm();
});

When(`I click on the Register button`, () => {
  parabank.clickResiterToSubmitForm();
});

Then(`I verify user registered successfully`, () => {
  parabank.confirmRegistration();
});
/////////////////////////////////////////////////////
//Steps for scenario 2
Given(`I enter the valid username and password`, () => {
  parabank.enterValidLoginCredentials();
});
