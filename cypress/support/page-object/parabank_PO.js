/// <reference types="cypress" />

let userName = "Usesr";

class parabank_PO {
  constructor() {
    const randomNumber = Math.floor(Math.random() * 1000);
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
    this.loginPanelUser = "input[type*=text][name=username]";
    this.loginPanelPass = "input[type=password]";
    this.loginPanelButton = "input[type=submit]";
    this.loginSuccLogOutButton = "a[href*=logout]";
    this.accountPagetitle = "#overviewAccountsApp";
    this.openNewAcc = "a[href*=openaccount]";
    this.openAccForm = "div[id='rightPanel'] p:nth-child(1) b:nth-child(1)";
    this.accOverwiew = "a[href*=overview]";
    this.accOverTitle = ".title";
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
      cy.writeFile("cypress/fixtures/parauser.json", { userName });
      // cy.task("setEnv", { userName });
      cy.wait(1000);
      cy.get(this.FirstName).click().type(data.validUser.FirstName);
      cy.get(this.LastName).click().type(data.validUser.LastName);
      cy.get(this.Address).click().type(data.validUser.Address);
      cy.get(this.City).click().type(data.validUser.City);
      cy.get(this.State).click().type(data.validUser.State);
      cy.get(this.Zip).click().type(data.validUser.Zip);
      cy.get(this.phone).click().type(data.validUser.phone);
      cy.get(this.ssn).click().type(data.validUser.ssn);
      cy.get(this.SignUpUserPass).click().type(data.validUser.signUpPassword);
      cy.get(this.SignUpUserPassConfirm)
        .click()
        .type(data.validUser.signUpPassword);
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

  enterValidUserName() {
    cy.fixture("parauser.json").then((data) => {
      cy.get(this.loginPanelUser).click().type(data.userName);
    });
  }

  enterValidPass() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.loginPanelPass).click().type(data.validUser.signUpPassword);
    });
  }

  clickOnLoginButton() {
    cy.get(this.loginPanelButton).click();
  }

  verifyUserLogin() {
    cy.get(this.loginSuccLogOutButton).should("be.visible");
  }

  verifyAccountPage() {
    cy.get(this.accountPagetitle).should("be.visible");
  }

  clickOnOpenNewAcc() {
    cy.get(this.openNewAcc).click();
  }

  verifyAcc() {
    cy.get(this.openAccForm)
      .should("be.visible")
      .and("have.text", "What type of Account would you like to open?");
  }

  clickOnAccOverwiev() {
    cy.get(this.accOverwiew).click();
  }
  verifyAccOverwiev() {
    cy.get(this.accOverTitle).should("be.visible");
  }
}

export default parabank_PO;
