/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

Given(`I open the parabank site`, () => {
  const navHomePage = new parabank_PO();
  navHomePage.navigateHomePagePara();
});

When(`I click on the Register link`, () => {
  const openRegLink = new parabank_PO();
  openRegLink.clickOnRegLink();
});

When(`I add valid registration data`, () => {
  const validReg = new parabank_PO();
  validReg.validRegDataFill();
});

When(`I click on the Register button`, () => {
  const clickOnRegButton = new parabank_PO();
  clickOnRegButton.clickOnRegButton();
});

Then(`I verify user registered successfully`, () => {
  const verifyUserRegister = new parabank_PO();
  verifyUserRegister.verifyUserRegister();
});
