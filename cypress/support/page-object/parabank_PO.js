/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
let username = faker.internet.userName();

class parabankLoginPage {
  //Elements
  constructor() {
    const randomNumber = Math.floor(Math.random() * 10000);
    username = username + randomNumber;
    this.registerLink =
      "div:nth-child(3) div:nth-child(1) div:nth-child(2) p:nth-child(3) > a:nth-child(1)";
    this.firstNameField = "input[id='customer.firstName']";
    this.lastNameField = "input[id='customer.lastName']";
    this.addressField = "input[id='customer.address.street']";
    this.cityField = "input[id='customer.address.city']";
    this.stateField = "input[id='customer.address.state']";
    this.zipCodeField = "input[id='customer.address.zipCode']";
    this.phoneNumberField = "input[id='customer.phoneNumber']";
    this.ssnField = "input[id='customer.ssn']";
    this.userNameField = "input[id='customer.username']";
    this.passwordField = "input[id='customer.password']";
    this.confirmPasswordField = "#repeatedPassword";
    this.registerButton = "input[value='Register']";
    this.registrationCompleted = ".title";
    this.loginUsername = "input[name='username']";
    this.loginPassword = "input[name='password']";
    this.loginButton = "input[value='Log In']";
  }

  //Functions

  openLoginPage() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }
  clickRegisterButton() {
    cy.get(this.registerLink).click();
  }
  fillOutSignUpForm() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.firstNameField).type(data.signUpInfo.firstName);
      cy.get(this.lastNameField).type(data.signUpInfo.lastName);
      cy.get(this.addressField).type(data.signUpInfo.address);
      cy.get(this.cityField).type(data.signUpInfo.city);
      cy.get(this.stateField).type(data.signUpInfo.state);
      cy.get(this.zipCodeField).type(data.signUpInfo.zip);
      cy.get(this.phoneNumberField).type(data.signUpInfo.phone);
      cy.get(this.ssnField).type(data.signUpInfo.ssn);
      cy.get(this.userNameField).type(username);
      cy.get(this.passwordField).type(data.signUpInfo.password);
      cy.get(this.confirmPasswordField).type(data.signUpInfo.confirmPassword);
    });
  }

  clickResiterToSubmitForm() {
    cy.get(this.registerButton).click();
  }

  confirmRegistration() {
    cy.get(this.registrationCompleted).should(
      "have.text",
      `Welcome ${username}`
    );
  }

  enterValidLoginCredentials() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.loginUsername).type(data.username);
      cy.get(this.loginPassword).type(data.password);
      cy.get(this.loginButton).click();
    });
  }

  loginIsSuccessfull() {
    cy.get("h1").contains("Accounts Overview");
  }
}

export default parabankLoginPage;
