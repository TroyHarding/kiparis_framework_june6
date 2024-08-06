/// <reference types="cypress" />

import { 
    Given, 
    When, 
    Then,
} from "@badeball/cypress-cucumber-preprocessor";
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

    parabank.openParaBank();

});

When(`I click on the Register link`, () => {
    parabank.clickRegisterLink();
});

When(`I add valid registration data`, () => {
    parabank. validregisterData();
});

When(`I click on the Register button`, () => {
    parabank.clickregisterbutton();
});

Then(`I verify user registered successfully`, () => {
   parabank.VerifyUserRegister()
});





When("I enter the valid username", () => {
    parabank.validUsername();
    // cy.fixture("parabank.json").then((data)  => {
    //     cy.get(parabank.this.loginUsername).type(data.Username);
    // });
});

When("I enter the valid password", () => {
    parabank.validPassword();
    // cy.fixture("parabank.json").then((data)  => {
    //     cy.get(parabank.this.loginPassword).type(data.Password);
    // });
});

// When("I completed the login panel", () => {
//     parabank.login();
// });

When("I click the Login button", () => {
    parabank.clickLoginButton()
});

Then ("I verify that the user is able to login successfully in the ParaBank application", () => {
   parabank.UsernameDisplay();
});

When("I click on Open New Account link", () => {
    parabank. openNewAcctLink()
});

Then("I verify that the field What type of Account would you like to open is displayed", () => {
    parabank.typeofACCT()
});

When("I click on Open New Account button", () => {
    parabank.openNewAcct()
});

Then("I verify new Account is opened", () => {
    parabank.UserAcctOpenConfirm()
});




When("I navigate Account Overview page", () => {
    parabank.AcctOverview()
});

Then("I verify that the Account Overview page is displayed", () => {
    parabank.AcctOverviewDisplay()

});

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

import parabank_PO from "../page-object/parabank_PO";

const parabank = new parabank_PO();

Given(`I open the parabank site`, () => {
  cy.fixture("parabank.json").then((data) => {
    cy.visit(data.baseUrl);
  });
});

When(`I click on the Register link`, () => {
  parabank.clickRegisterLink();
});

When(`I add valid registration data`, () => {
  parabank.fillRegistrationForm();
});

When(`I click on the Register button`, () => {
  parabank.clickRegisterBtn();
});

Then(`I verify user registered successfully`, () => {
  parabank.verifyUserRegistration();
});

Given(`I open the URL {string}`, (url) => {
  cy.visit(url);
});

When(`I enter the valid username`, () => {
  parabank.fillUserNameLogin();
});

When(`I enter the valid password`, () => {
  parabank.fillPasswordLogin();
});

Then(`I click the Login button`, () => {
  parabank.clickLoginBtn();
});

Then(
  `I verify that the user is able to login successfully in the ParaBank application`,
  () => {
    parabank.verifyLoginSuccess()
  }
);

When(`I navigate to my account page`, () => {
  
});

Then(`I click on Open New Account`, () => {
  parabank.clickOpenNewAcc()
  
});

Then(`I verify that the field {string} is displayed`, () => {
 parabank.verifyTxtOfOpenAcc()
});

Then(`I verify that the Account Overview page is displayed`, () => {
  parabank.verifyAccountPageOverview()
 });

 Then(`I click on Accounts Overview`, () => {
  parabank.clickAccOverview()
 });

 Then(`I verify that the user is able to view the Account Overview page`, () => {
  parabank.verifyAccountPageOverview()
 });
 
 

