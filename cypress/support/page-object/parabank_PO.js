/// <reference types="cypress" />

class parabank_PO {
  // Elements
  constructor() {
    // Main Panel
    this.mainPanel = "div#mainPanel";

    // Top Panel
    this.adminLink = "div#topPanel a[href='admin.htm']";
    this.logoLink = "div#topPanel a[href='index.htm']";
    this.caption = "div#topPanel p.caption";

    // Header Panel
    this.headerPanel = "div#headerPanel";
    this.solutionsListItem = "ul.leftmenu li.Solutions";
    this.leftMenuLinks = {
      aboutUs: "ul.leftmenu li a[href='about.htm']",
      services: "ul.leftmenu li a[href='services.htm']",
      products:
        "ul.leftmenu li a[href='http://www.parasoft.com/jsp/products.jsp']",
      locations:
        "ul.leftmenu li a[href='http://www.parasoft.com/jsp/pr/contacts.jsp']",
      adminPage: "ul.leftmenu li a[href='admin.htm']",
    };
    this.buttonLinks = {
      home: "ul.button li.home a[href='index.htm']",
      about: "ul.button li.aboutus a[href='about.htm']",
      contact: "ul.button li.contact a[href='contact.htm']",
    };

    // Body Panel
    this.bodyPanel = "div#bodyPanel";
    this.leftPanel = "div#leftPanel";
    this.customerLoginHeading = "div#leftPanel h2";
    
    
    this.loginPanel = {
      usernameInput: "div#loginPanel input[name='username']",
      passwordInput: "div#loginPanel input[name='password']",
      loginButton: "div#loginPanel input[type='submit']",
      forgotLoginInfoLink: "div#loginPanel a[href='lookup.htm']",
      registerLink: "a[href*='register.htm']",
    };

    this.rightPanel = "div#rightPanel";
    this.atmServicesHeading = "ul.services li.captionone";
    this.atmServicesLinks = "ul.services li a";
    this.onlineServicesHeading = "ul.servicestwo li.captiontwo";
    this.onlineServicesLinks = "ul.servicestwo li a";
    this.readMoreServicesLink = "div#rightPanel p.more a[href='services.htm']";
    this.latestNewsHeading = "div#rightPanel h4";
    this.latestNewsDates = "ul.events li.captionthree";
    this.latestNewsLinks = "ul.events li a";
    this.readMoreNewsLink = "div#rightPanel p.more a[href='news.htm']";

    // Footer Panel
    this.footerMainPanel = "div#footermainPanel";
    this.footerPanel = "div#footerPanel";
    this.footerLinks = {
      home: "div#footerPanel a[href='index.htm']",
      aboutUs: "div#footerPanel a[href='about.htm']",
      services: "div#footerPanel a[href='services.htm']",
      products:
        "div#footerPanel a[href='http://www.parasoft.com/jsp/products.jsp']",
      locations:
        "div#footerPanel a[href='http://www.parasoft.com/jsp/pr/contacts.jsp']",
      forum: "div#footerPanel a[href='http://forums.parasoft.com/']",
      siteMap: "div#footerPanel a[href='sitemap.htm']",
      contactUs: "div#footerPanel a[href='contact.htm']",
    };
    this.copyrightText = "div#footerPanel p.copyright";
    this.visitUsText = "div#footerPanel ul.visit li:first-child";
    this.visitUsLink =
      "div#footerPanel ul.visit li a[href='http://www.parasoft.com/']";

    // Registration Panel
    this.registrationPanel = {
      firstNameInput: 'input[name="customer.firstName"]',
      lastNameInput: 'input[name="customer.lastName"]',
      streetInput: 'input[name="customer.address.street"]',
      cityInput: 'input[name="customer.address.city"]',
      stateInput: 'input[name="customer.address.state"]',
      zipCodeInput: 'input[name="customer.address.zipCode"]',
      phoneNumberInput: 'input[name="customer.phoneNumber"]',
      ssnInput: 'input[name="customer.ssn"]',
      usernameInput: 'input[name="customer.username"]',
      passwordInput: 'input[name="customer.password"]',
      repeatedPasswordInput: 'input[name="repeatedPassword"]',
      registerButton: 'input[value="Register"]',
    };

    this.userNameDisplay = "a#nameofuser";
  }

  // Functions
  visitHomePage() {
    cy.fixture("parabank.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }

  iterateLeftMenuLinks() {
    cy.get("ul.leftmenu li a").each(($el, index) => {
      cy.wrap($el)
        .invoke("attr", "href")
        .then((href) => {
          cy.log(`Left Menu Link ${index + 1}: ${href}`);
        });
    });
  }

  iterateServicesLinks() {
    // ( 1,  2,  3 ) 
    cy.get("ul.services li a, ul.servicestwo li a").each(($el, index) => {
      cy.wrap($el)
        .invoke("attr", "href")
        .then((href) => {
          cy.log(`Service Link ${index + 1}: ${href}`);
        });
    });
  }

  login() {
    cy.fixture('parabank.json').then((data) => {
      cy.get(this.loginPanel.usernameInput).type(data.username);
      cy.get(this.loginPanel.passwordInput).type(data.password);
      cy.get(this.loginPanel.loginButton).click();
    });
  }

  registerLink() {
    cy.get(this.loginPanel.registerLink).click();
  }

  validRegistrationData() {
    cy.fixture("parabank.json").then((data) => {

      //JS dot nontation and bracket notation
      cy.get('input[name="customer.firstName"]').type(data["validUser"]["firstName"]);
      cy.get('input[name="customer.lastName"]').type(data.validUser.lastName);

      //cy.get('input[name="customer.address.street"]').type(data.validUser.address);
      cy.get(this.registrationPanel.streetInput).type(data.validUser.address);


      cy.get('input[name="customer.address.city"]').type(data.validUser.city);
      cy.get('input[name="customer.address.state"]').type(data.validUser.state);
      cy.get('input[name="customer.address.zipCode"]').type(data.validUser.zipCode);
      cy.get('input[name="customer.phoneNumber"]').type(data.validUser.phoneNumber);
      cy.get('input[name="customer.ssn"]').type(data.validUser.ssn);
      cy.get('input[name="customer.username"]').type(data.validUser.newUsername);
      cy.get('input[name="customer.password"]').type(data.validUser.newPassword);
      cy.get('input[name="repeatedPassword"]').type(data.validUser.newPassword);
    });
  }

  forgotLoginInfo() {
    cy.get(this.loginPanel.forgotLoginInfoLink).click();
  }
}

export default parabank_PO;
