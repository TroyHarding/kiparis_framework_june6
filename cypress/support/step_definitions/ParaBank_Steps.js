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

When(`I enter the valid username`, () => {
  const enterValidUserName = new parabank_PO();
  enterValidUserName.enterValidUserName();
});

Then(`I enter the valid password`, () => {
  const enterValidPass = new parabank_PO();
  enterValidPass.enterValidPass();
});

Then(`I click the Login button`, () => {
  const clickOnLoginButton = new parabank_PO();
  clickOnLoginButton.clickOnLoginButton();
});

Then(
  `I verify that the user is able to login successfully in the ParaBank application`,
  () => {
    const verifyUserlogin = new parabank_PO();
    verifyUserlogin.verifyUserLogin();
  }
);

Then(`I navigate to my account page`, () => {
  const verifyAccountPage = new parabank_PO();
  verifyAccountPage.verifyAccountPage();
});

Then(`I click on Open New Account`, () => {
  const clickOnOpenNewAcc = new parabank_PO();
  clickOnOpenNewAcc.clickOnOpenNewAcc();
});

Then(`I verify field What type of Account would you like to open?`, () => {
  const verifyAcc = new parabank_PO();
  verifyAcc.verifyAcc();
});

Then(`I click to my account Overview page`, () => {
  const clickOnAccOverwiev = new parabank_PO();
  clickOnAccOverwiev.clickOnAccOverwiev();
});

Then(`I verify that the Account Overview page is displayed`, () => {
  const verifyAcc = new parabank_PO();
  verifyAcc.verifyAccOverwiev();
});
