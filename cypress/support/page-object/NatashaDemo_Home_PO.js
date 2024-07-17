/// <reference types="cypress" />

class demo_home_PO {
  //special method
  constructor() {
    //CSS selectors
    //Outline the Top Bar
    this.homeButton = "a[href='index.html'][class='nav-link']";
    this.contactButton = "a[data-target='#exampleModal']";
    this.aboutUsButton = "a[data-target='#videoModal']";
    this.cartButton = "#cartur";
    this.loginButton = "#login2";
    this.signUpButton = "#signin2";
    //the Carosel
    this.leftArrow = ".carousel-control-prev-icon";
    this.rightArrow = ".carousel-control-next-icon";
    this.caroselContainer = ".carousel-inner";
    //The catergories
    this.phonesCategory = "a[onclick='byCat('phone')']";
    this.laptopsCategory = "a[onclick='byCat('notebook')']";
    this.monitorsCategory = "a[onclick='byCat('monitor')']";
    //product
    this.cardtitle = ".card-title";
    //Pages
    this.previousPage = "#prev2";
    this.nextPage = "#next2";
    //Login Form
    this.usernameField = "#loginusername";
    this.passwordField = "#loginpassword";
    this.loginConfirm = "button[onclick='logIn()']";
    //SignUp Form
    this.newUserField = "#sign-username";
    this.newPasswordField = "#sign-password";
  }

  clickHome() {
    cy.get(this.homeButton).click();
  }

  clickContact() {
    cy.get(this.contactButton).click();
    cy.get("#recipient-email").type("testcustomer@test.com");
    cy.get("#recipient-name").type("Tom Jones");
    cy.get("#message-text").type("Test Message");
    cy.get("button[onclick='send()']").click();
  }

  clickAboutUs() {
    cy.get(this.aboutUsButton).click();
  }

  clickCart() {
    cy.get(this.cartButton).click();
  }

  clickLogin(username, password) {
    cy.fixture("NatashaDemoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginButton).click();
      cy.wait(1000);
      cy.get(this.usernameField).type(data.username);
      cy.get(this.passwordField).type(data.password);
      cy.get(this.loginConfirm).click();
    });
  }

  clickSignUp(username, password) {
    cy.get(this.signUpButton).click();
    cy.wait(1000);
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.get("button[onclick='register()']").click();
  }

  typeUsernamePassword(username, password) {
    cy.fixture("NatashaDemoblaze.json").then((data) => {
      cy.get(this.newUserField).type(data.username);
      cy.get(this.newPasswordField).type(data.password);
    });
  }

  clickProduct(product) {
    cy.contains(this.cardtitle, product).click();
    cy.wait(1000);
  }
}

export default demo_home_PO;
