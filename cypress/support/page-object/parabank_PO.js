/// <reference types="cypress" />

var userName = "User";

class parabank_PO {
  constructor() {
    const randomNumber = Math.floor(Math.random() * 10000);
    userName = userName + randomNumber;
    // CSS selectors
    this.homeButton = 'a[href="index.html"][class="nav-link"]';
    this.regLink = "a[href*=register]";
    this.SignUpUserName = "input[id='customer.username']";
    this.SignUpUserPass = "input[id='customer.password']";
    this.SignUpUserPassConfirm = "input[id='repeatedPassword']";
    this.FirstName = "input[id='customer.firstName']";
    this.LastName = "input[id='customer.lastName']";
    this.Address = "input[id='customer.address.street']";
    this.City = "input[id='customer.address.city']";
    this.State = "input[id='customer.address.state']";
    this.Zip = "input[id='customer.address.zipCode']";
    this.phone = "input[id='customer.phoneNumber']";
    this.ssn = "input[id='customer.ssn']";
    this.RegButton = "input[value='Register']";
    this.welcomeUser = "div[id='rightPanel'] p";
  }

  //Methods
  navigateHomePagePara() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }
  clickOnRegLink() {
    cy.get(this.regLink).click();
  }

  validRegDataFill() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.SignUpUserName).click().type(userName);
      cy.wait(1000);
      cy.get(this.FirstName).click().type(data.FirstName);
      cy.get(this.LastName).click().type(data.LastName);
      cy.get(this.Address).click().type(data.Address);
      cy.get(this.City).click().type(data.City);
      cy.get(this.State).click().type(data.State);
      cy.get(this.Zip).click().type(data.Zip);
      cy.get(this.phone).click().type(data.phone);
      cy.get(this.ssn).click().type(data.ssn);
      cy.get(this.SignUpUserPass).click().type(data.signUpPassword);
      cy.get(this.SignUpUserPassConfirm).click().type(data.signUpPassword);
    });
  }
  clickOnRegButton() {
    cy.get(this.RegButton).click();
  }

  verifyUserRegister() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.welcomeUser)
        .should("be.visible")
        .and(
          "have.text",
          "Your account was created successfully. You are now logged in."
        );
    });
  }
}

export default parabank_PO;
