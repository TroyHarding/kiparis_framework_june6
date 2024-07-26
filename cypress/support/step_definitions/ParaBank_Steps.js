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
