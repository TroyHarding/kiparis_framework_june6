/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
let username = faker.internet.userName();

class parabank_PO {
  //ELEMENTS
  //Special function that creates the class

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
  }
  //FUNCTIONS
  openParaBank() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }
  clickRegisterLink() {
    cy.get(this.registerLink).click();
  }

  sigUpValidData() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.firstNameField).type(data.validUser.firstName);
      cy.get(this.lastNameField).type(data.validUser.lastName);
      cy.get(this.addressField).type(data.validUser.address);
      cy.get(this.cityField).type(data.validUser.city);
      cy.get(this.stateField).type(data.validUser.state);
      cy.get(this.zipCodeField).type(data.validUser.zip);
      cy.get(this.phoneNumberField).type(data.validUser.phone);
      cy.get(this.ssnField).type(data.validUser.ssn);
      cy.get(this.userNameField).type(username);
      //
      cy.get(this.passwordField).type(data.validUser.password);
      cy.get(this.confirmPasswordField).type(data.validUser.confirmPassword);
    });
  }
  clickRegisterButton() {
    cy.get(this.registerButton).click();
  }
  confirmRegistration() {
    cy.get(this.registrationCompleted).should(
      "have.text",
      `Welcome ${username}`
    );
  }
}

export default parabank_PO;
