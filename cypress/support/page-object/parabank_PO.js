/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
let firstName = faker.person.firstName();
let lastName = faker.person.lastName();
let address = faker.location.streetAddress();
let city = faker.location.city();
let state = faker.location.state();
let zip = faker.location.zipCode();
let phone = faker.phone.number();
let username = faker.internet.userName();
let password = faker.internet.password();

class parabank_PO {
  //ELEMENTS
  //Special function that creates the class

  constructor() {
    const randomNumber = Math.floor(Math.random() * 10000);
    username = username + randomNumber;
    password = password + randomNumber;
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
    this.customerUsername = "input[name='username']";
    this.customerPassword = "input[name='password']";
    this.loginButton = "input[value='Log In']";
    this.loginPage = "div[id='showOverview'] h1[class='title']";
    this.confirmLogin = ".smallText";
    this.openNewAccountLink = "a[href='openaccount.htm']";
    this.newAccountMessage =
      "div[id='rightPanel'] p:nth-child(1) b:nth-child(1)";
    this.afterLogin = "div[id='showOverview'] h1[class='title']";
    this.accountTypeDropdown = "#type";
    this.openNewAccountButton = "input[value='Open New Account']";
    this.accountOpened = "div[id='openAccountResult'] h1[class='title']";
    this.accountsOverviewLink = "a[href='overview.htm']";   
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
      cy.get(this.firstNameField).type(firstName);
      cy.get(this.lastNameField).type(lastName);
      cy.get(this.addressField).type(address);
      cy.get(this.cityField).type(city);
      cy.get(this.stateField).type(state);
      cy.get(this.zipCodeField).type(zip);
      cy.get(this.phoneNumberField).type(phone);
      cy.get(this.ssnField).type(data.validUser.ssn);
      cy.get(this.userNameField).type(username);
      cy.get(this.passwordField).type(password);
      cy.get(this.confirmPasswordField).type(password);
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
  enterCustomerUsername() {
    cy.get(this.customerUsername).type(username);
  }
  enterCustomerPassword() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.customerPassword).type(password);
    });
  }
  clickLoginButton() {
    cy.get(this.loginButton).click();
  }
  loginSuccess() {
    cy.get(this.confirmLogin).should(
      "have.text",
      `Welcome ${firstName} ${lastName}`
    );
  }
  navigateToAccountPage() {
    cy.get(this.afterLogin).should("contain", "Accounts Overview");
  }
  navigateToOpenNewAccount() {
    cy.get(this.openNewAccountLink).click();
  }
  openNewAccountField(field1) {
    cy.get(this.newAccountMessage).should("have.text", field1);
    cy.get(this.accountTypeDropdown).should("be.visible");
  }

//And I click on Open New Account button
  openCheckingAccount(){
    cy.get(this.openNewAccountLink).click();
    cy.get(this.openNewAccountButton).click();
    cy.get(this.accountOpened).should("contain", "Account Opened!")
  }

  allAccountsOverviewPage() {
    cy.get(this.accountsOverviewLink).click();
  }











}

export default parabank_PO;
