/// <reference types="cypress" />

class parabank_PO {
  //Elements
constructor() {                                  //Storing all the elements that we want later
 
  //Registration 
    this.registerButton = "a[href*='register.htm']";
    this.FirstName = "input[id='customer.firstName']";
    this.LastName = "input[id='customer.lastName']";
    this.Address = "input[id='customer.address.street']";
    this.City = "input[id='customer.address.city']";
    this.State = "input[id='customer.address.state']";
    this.ZipCode = "input[id='customer.address.zipCode']";
    this.Phone = "input[id='customer.phoneNumber']";
    this.SSN = "input[id='customer.ssn']";
    this.Username = "input[id='customer.username']";
    this.Password = "input[id='customer.password']";
    this.ConfirmPass = "#repeatedPassword";
    this.clickRegister = "input[value='Register'][type='submit']";
    
    this.registerSuccess = ".title";

    this.WelcomeUser = "#rightPanel";

    //Main Panel
    this.mainpanel = "#mainPanel";

    //Top Panel
    this.adminLink = "div#topPanel a[href='admin.htm']"; 
    this.logoLink =  "div#topPanel a[href='index.htm']";
    this.caption = "div#topPanel .caption";

    //Header Panel
    this.headerPanel = "#headerPanel";
    this.solutions = ".Solutions";

    //this.leftMenuLink 
    this.AboutUs = "#headerPanel  ul[class='leftmenu'] li a[href='about.htm']";
    this.Services = "ul.leftmenu li a[href='services.htm']";
    this.Products = "ul[class='leftmenu'] li a[href='http://www.parasoft.com/jsp/products.jsp']";
    this.Locations = "ul[class='leftmenu'] li a[href='http://www.parasoft.com/jsp/pr/contacts.jsp']";
    this.AdminPage = "ul[class='leftmenu'] li a[href='admin.htm']";

    //this.buttonLinks
    this.home = "div#footermainPanel a[href='index.htm']"
    this.AboutButton = "div#footerPanel li a[href='index.htm']";
    this.contactUs = "div#footerPanel li a[href='contact.htm']";
    

    //LOgin Model
    this.loginUsername = "input[name='username']";
    this.loginPassword = "input[name='password']";
    this.loginButton = "input[value='Log In']";
    this.forgotLoginInfo = "a[href='lookup.htm']";
    this.LogOutLink = "a[href*=logout]";

    this.welcomeloginUser = "#leftPanel";

    this.CustomerLoginHeading  = "div[id='leftPanel'] h2";
    this.loginPanel = {
      usernameInput: "input[name='username']",
      PasswordInput: "input[name='password']",
      loginButton: "input[value='Log In']"
    }

    //Open New Account
    this.openNewAccountLink = "div#leftPanel a[href='openaccount.htm']";
    this.openNewAccountForm = "#openAccountForm";
    this.openNewAccountButton = "input[value='Open New Account']";
    this.AccountOpendConfirm = "#openAccountResult";
    this.AccountNumber = "#newAccountId";
    this.whattypeofAcct = "div[id='openAccountForm'] form"
    this.chooseacct = "#type"
    this.amount = "#fromAccountId"
    //Accounts Overview
    this.AccountsOverviewLink = "a[href='overview.htm']";
    this.AccountOverviewTitle = "#showOverview h1[class='title']"
    this.AccountOverviewShow = "a[href='overview.htm']";

  }  
 
openNewAcct() {
  cy.get(this.openNewAccountForm).should("be.visible");
  cy.get(this.chooseacct).select("CHECKING");
  cy.get(this.amount).select("31881")
  //cy.select(this.chooseacct).click()
  cy.get(this.openNewAccountButton).click();
}

  //Functions
  openParaBank() {
    cy.visit("https://parabank.parasoft.com/parabank/register.htm");
    }

  // visitHomepage() {
  //   cy.fixture("parabank.json").then((data) => {
  //     cy.visit(data.baseUrl);
  //   });
  // }

  login() {
      //cy.fixture("parabank.json").then((data) => {
        cy.get(this.loginUsername).type("iamtester");
        cy.get(this.loginPassword).type("iamtester");
        cy.get(this.loginButton).click();
      };

      UsernameDisplay() {
        cy.fixture("parabank.json").then((data) => {
        cy.get(this.welcomeloginUser).should("be.visible");
      });
    }

  clickRegisterLink () {
    cy.get(this.registerButton).click();
  }


  validregisterData() {
    cy.fixture("parabank.json").then((data) => {
      const randomNumber = Math.floor(Math.random() * 10000);
      let UserNameRand = data.validUser.UserName + randomNumber; 

    cy.get(this.FirstName). click().type(data.validUser.FirstName);
    cy.get(this.LastName).click().type(data.validUser.LastName);
    cy.get(this.Address).click().type(data.validUser.Address);
    cy.get(this.City).click().type(data.validUser.City);
    cy.get(this.State).click().type(data.validUser.State);
    cy.get(this.ZipCode).click().type(data.validUser.ZipCode);
    cy.get(this.Phone).click().type(data.validUser.Phone);
    cy.get(this.SSN).click().type(data.validUser.SSN);
    cy.get(this.Username).click().type(UserNameRand);
    cy.get(this.Password).click().type(UserNameRand);
    cy.get(this.ConfirmPass).click().type(UserNameRand);
    //cy.get(this.clickRegister).click();
  });
}

 clickregisterbutton() {
      cy.get(this.clickRegister).click();
  }

  VerifyUserRegister() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.WelcomeUser).contains("Your account was created successfully. You are now logged in").should("exist");
    });
  }

  validUsername() {
    cy.fixture("parabank.json").then((data) => {
   cy.get(this.loginUsername).type(data.validUser.UserName);
    });
  }

  validPassword() {
    cy.fixture("parabank.json").then((data) => {
    cy.get(this.loginPassword).type(data.validUser.UserPassword);
  });
}

  clickLoginButton() {
    cy.fixture("parabank.json").then((data) => {
  cy.get(this.loginButton).click();
  });
}

  AccountVerification() {
    cy.get()
  }

  openNewAcctLink() {
    //cy.fixture("parabank.json").then((data) => {
    cy.get(this.openNewAccountLink).click();
    ;
  }

  typeofACCT() {
    cy.get(this.whattypeofAcct).should("be.visible");
  }

  OpenNewAcctbutton() {
  
  }

  AcctOverview() {
    cy.get(this.AccountsOverviewLink).click();
}

AcctOverviewDisplay() {
  cy.get(this.AccountOverviewShow).should("be.visible");
}

UserAcctOpenConfirm() {
  cy.get(this.AccountOpendConfirm).should("be.visible");
}

}
  export default parabank_PO;
