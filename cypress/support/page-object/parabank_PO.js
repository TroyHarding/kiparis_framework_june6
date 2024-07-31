/// <reference types="cypress" />

class parabank_PO { 

  //Elements
constructor() {
//registration
  this.registerLink = "a[href='register.htm']";

  this.firstName = "input[id='customer.firstName']";
  this.lastName = "input[id='customer.lastName']";
  this.addressStreet = "input[id='customer.address.street']"; 
  this.addressCity = "input[id='customer.address.city']";
  this.addressState = "input[id='customer.address.state']";
  this.addressZip = "input[id='customer.address.zipCode']";
  this.phoneNumber = "input[id='customer.phoneNumber']";
  this.customerSSN = "input[id='customer.ssn']";
  this.registrationUsername = "input[id='customer.username']";
  this.registrationPassword = "input[id='customer.password']";
  this.confirmPassword = "input[id='repeatedPassword']";
  
  this.registerButton = "input[value='Register']"; 

  this.registerSuccess = ".title";
  // "#rightPanel"; 

  //homepage links
   this.solutions= ".Solutions";

  //login
  this.username = "input[name='username']";
  this.userPassword = "input[name='password']";
  this.logInButton = "input[value='Log In']";

  //account
  this.accountTable = "#accountTable";
  this.openNewAccountLink = "a[href='openaccount.htm']"; 

  //open New Account page
  this.openNewAccountForm = "#openAccountForm"; 
  this.checking = "option[value='0']";
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

//Functions 

openParaBank() {
  cy.visit("https://parabank.parasoft.com/parabank/index.htm"); 
}

registerLinkClick(){
  cy.visit("https://parabank.parasoft.com/parabank/register.htm");
}

inputRegisterInfo() {

  // const randomNumber = Math.floor(Math.random() * 10000);
  //  username1 = data.registrationUsername + randomNumber; 

  cy.fixture("parabank.json").then((data) => {
    const randomNumber = Math.floor(Math.random() * 10000);
    let username1 = data.user1.registrationUsername + randomNumber; 

   cy.get(this.firstName).type(data.user1.firstName);
   cy.get(this.lastName).type(data.user1.lastName);
   cy.get(this.addressStreet).type(data.user1.addressStreet);
   cy.get(this.addressCity).type(data.user1.addressCity);
   cy.get(this.addressState).type(data.user1.addressState);
   cy.get(this.addressZip).type(data.user1.addressZip);
   cy.get(this.phoneNumber).type(data.user1.phoneNumber);
   cy.get(this.customerSSN).type(data.user1.customerSSN);
   cy.get(this.registrationUsername).type(username1);
   cy.get(this.registrationPassword).type(data.user1.registrationPassword);
   cy.get(this.confirmPassword).type(data.user1.confirmPassword);

  }); 

}

  // cy.get(this.firstName).type("Alex");
  // cy.get(this.lastName).type("Martini");
  // cy.get(this.addressStreet).type("101 Main");
  // cy.get(this.addressCity).type("Austin");
  // cy.get(this.addressState).type("TX");
  // cy.get(this.addressZip).type("78502");
  // cy.get(this.phoneNumber).type("502-502-5502");
  // cy.get(this.customerSSN).type("555-44-3333");
  // cy.get(this.registrationUsername).type("amartini3");
  // cy.get(this.registrationPassword).type("password1");
  // cy.get(this.confirmPassword).type("password1");

registerButtonClick(){
  cy.get(this.registerButton).click();
}

verifyRegistration(){
  cy.get(this.registerSuccess).should("contain.text", "Welcome"); 
}

validUsername(uname){
  cy.get(this.username).type(uname); 
}

validPassword(pswrd){
  cy.get(this.userPassword).type(pswrd); 
}

clickLoginButton(){
  cy.get(this.logInButton).click();
}

accountVerification(){
  cy.get(this.accountTable).should("be.visible");
  cy.get(this.accountTable).should("contain", "Balance");
}

openNewAccount(){
  cy.get(this.openNewAccountLink).click();
}

verifyNewAccountType(){
  cy.get(this.openNewAccountForm).should("contain", "What type of Account "); 
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
  
}
  
  export default parabank_PO;