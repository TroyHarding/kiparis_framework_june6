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

  constructor() {
    this.RegisterLinkSelector = "#loginPanel > p:nth-child(3) > a";
    this.FirstNameSelector = "input[id='customer.firstName']";
    this.LastNameSelector = "input[id='customer.lastName']";
    this.AddressSelector = "input[id='customer.address.street']";
    this.CitySelector = "input[id='customer.address.city']";
    this.StateSelector = "input[id='customer.address.state']";
    this.ZipCodeSelector = "input[id='customer.address.zipCode']";
    this.PhoneSelector = "input[id='customer.phoneNumber']";
    this.SsnSelector = "input[id='customer.ssn']";
    this.UserNameRegistSelector = "input[id='customer.username']";
    this.PasswordRegistSelector = "input[id='customer.password']";
    this.ConfirmPasswordSelector = "#repeatedPassword";
    this.RegisterBtnSelector = "input[value='Register']";
    this.VerificationTxtRegistrationSelector = "#rightPanel > p";
    this.LoginBtnSelector = "input[value='Log In']";
    this.UserNameLoginSelector = "input[name='username']";
    this.PasswordLoginSelector = "input[name='password']";
    this.AccountOverviewSelector = "a[href='overview.htm']";
    this.OpenNewAccountLocator = "a[href='openaccount.htm']";
    this.VerificationTxtOfTypeAcc = "#openAccountForm > form > p:nth-child(1) > b";
    
  }

  //Functions
  clickRegisterLink() {
    cy.get(this.RegisterLinkSelector).click();
  }
  clickRegisterBtn() {
    cy.get(this.RegisterBtnSelector).click();
  }
  clickLoginBtn() {
    cy.get(this.LoginBtnSelector).click();
  }
  clickOpenNewAcc(){
    cy.get(this.OpenNewAccountLocator).click()
  }
  clickAccOverview(){
    cy.get(this.AccountOverviewSelector).click()
  }
  

  fillRegistrationForm() {
    cy.fixture("parabank.json").then((data) => {
      const randomNumber = Math.floor(Math.random() * 10000);
      const randomUsername = `user${randomNumber}`;
      Cypress.env("randomUsername", randomUsername);

      cy.get(this.FirstNameSelector).type(data.registrationData.FirstName);
      cy.get(this.LastNameSelector).type(data.registrationData.LastName);
      cy.get(this.AddressSelector).type(data.registrationData.Address);
      cy.get(this.CitySelector).type(data.registrationData.City);
      cy.get(this.StateSelector).type(data.registrationData.State);
      cy.get(this.ZipCodeSelector).type(data.registrationData.ZipCode);
      cy.get(this.PhoneSelector).type(data.registrationData.Phone);
      cy.get(this.SsnSelector).type(data.registrationData.Ssn);
      cy.get(this.UserNameRegistSelector).type(randomUsername);
      cy.get(this.PasswordRegistSelector).type(data.registrationData.Password);
      cy.get(this.ConfirmPasswordSelector).type(data.registrationData.ConfirmPassword);
    });
  }

  verifyUserRegistration() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.VerificationTxtRegistrationSelector).should(
        "have.text",
        data.RegistrationTextVerification
      );
    });
  }


  fillUserNameLogin() {
    const randomUsername = Cypress.env("randomUsername");
    cy.get(this.UserNameLoginSelector).type(randomUsername);
  }

  fillPasswordLogin() {
    cy.fixture("parabank.json").then((data) => {
      cy.get(this.PasswordLoginSelector).type(data.registrationData.Password);
    });
  }

  verifyLoginSuccess(){
    cy.fixture("parabank.json").then((data) => {
      cy.contains(data.AccountsOverviewTxt).should("be.visible");

    })
  }

  verifyTxtOfOpenAcc(){
    cy.fixture("parabank.json").then((data)=> {
      cy.get(this.VerificationTxtOfTypeAcc).should("have.text",data.TypeOfAccountsverification)
    })
  }

  verifyAccountPageOverview(){
    cy.fixture("parabank.json").then((data) => {
      cy.contains(data.AccountsOverviewTxt).should("be.visible");

    })
  }

  

}

export default parabank_PO;

