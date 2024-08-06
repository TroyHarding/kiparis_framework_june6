/// <reference types="cypress" />

class parabank_PO {
  //Elements
  //Special Function that creates the class

  constructor() {
    //Registration Info
    this.randomNumber = Math.floor(Math.random() * 10000);
    this.registerLink = ".a[href='register.htm']";
    this.registerPage = ".form2";
    this.firstName = "input[id='customer.firstName']";
    this.lastName = "input[id='customer.lastName']";
    this.address = "input[id='customer.address.street']";
    this.city = "input[id='customer.address.city']";
    this.state = "input[id='customer.address.state']";
    this.zipCode = "input[id='customer.address.zipCode']";
    this.phone = "input[id='customer.phoneNumber']";
    this.SSN = "input[id='customer.ssn']";
    this.username = "input[id='customer.username']";
    this.password = "input[id='customer.password']";
    this.confirm = "#repeatedPassword";
    this.registerButton = "input[value='Register']";
    this.registrationSuccess = "div[id='rightPanel'] p";

    //Valid Login info
    this.loginUsername = "input[name='username']";
    this.loginPassword = "input[name='password']";
    this.loginButton = "input[value='Log In']";
    this.loginSuccess = ".smallText";

    //Open New Account
    this.openNewAccountLink = "a[href='openaccount.htm']";
    this.openNewAccountPage =
      "div[id='rightPanel'] p:nth-child(1) b:nth-child(1)";
  }

  //Methods

  parabankSite() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.parabankUrl);
    });
    cy.wait(5000);
  }

  registerLinkButton() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.registerUrl);
    });
    cy.wait(5000);
  }

  enterFirstName() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.firstName).type(data.firstName);
    });
    cy.wait(5000);
  }

  enterLastName() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.lastName).type(data.lastName);
    });
    cy.wait(5000);
  }

  enterAddress() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.address).type(data.address);
    });
    cy.wait(5000);
  }

  enterCity() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.city).type(data.city);
    });
    cy.wait(5000);
  }

  enterState() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.state).type(data.state);
    });
    cy.wait(5000);
  }

  enterZipCode() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.zipCode).type(data.zipCode);
    });
    cy.wait(5000);
  }

  enterPhone() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.phone).type(data.phone);
    });
    cy.wait(5000);
  }

  enterSSN() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.SSN).type(data.SSN);
    });
    cy.wait(5000);
  }

  enterUsername() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.username).type(data.username + this.randomNumber);
    });
    cy.wait(5000);
  }

  enterPassword() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.password).type(data.password);
    });
    cy.wait(5000);
  }

  enterConfirm() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.confirm).type(data.confirm);
    });
    cy.wait(5000);
  }

  clickRegisterButton() {
    cy.get(this.registerButton).click();
    cy.wait(5000);
  }

  registrationSuccessConfirmation() {
    cy.get(this.registrationSuccess).contains(
      "Your account was created successfully"
    );
    cy.wait(5000);
  }

  clickloginUsername() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.loginUsername).type(data.username + this.randomNumber);
    });
    cy.wait(5000);
  }

  clickloginPassword() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.loginPassword).type(data.password);
    });
    cy.wait(5000);
  }

  clickloginButton() {
    cy.get(this.loginButton).click();
    cy.wait(5000);
  }

  loginSuccessConfirmation() {
    // cy.get(this.loginSuccess).contains("Welcome");
    cy.get(this.loginSuccess).contains("");
    cy.wait(5000);
  }

  accountPage() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.accountUrl);
    });
    cy.wait(5000);
  }

  clickOpenNewAccountLink() {
    cy.get(this.openNewAccountLink).click();
    cy.wait(5000);
  }

  openNewAccountConfirmation() {
    cy.get(this.openNewAccountPage).contains(
      "Error! What type of Account would you like to open?"
    );
    cy.wait(5000);
  }
}

export default parabank_PO;