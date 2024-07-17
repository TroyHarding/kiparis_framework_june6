import demoblaze_PO from "./madhu_demo_home_PO";
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
    this.caroselContainter = ".carousel-inner"; //#contcar

    //The catergories
    this.categories = "#cat";
    this.phonesCategory = "a[onclick='byCat('phone')'']";
    this.laptopsCategory = "a[onclick='byCat('notebook')']";
    this.MonitorsCategory = "a[onclick='byCat('monitor')']";

    //product
    this.cardtitle = ".card-title";

    //Pages
    this.previousPage = "#prev2";
    this.nextPage = "#next2";

    //Login
    this.loginUsername = "#loginusername";
    this.loginPassword = "#loginpassword";
    this.loginButton = "button[onclick='logIn()']";
    this.nameofuser = "#nameofuser";

    //Logout
    this.logout = "#logout2";

    //Signup
    this.signupUsername = "#sign-username";
    this.signupPassword = "#sign-password";
    this.signupButton = "button[onclick='register()']";
  }

  clickProduct(product) {
    cy.contains(this.cardtitle, product).click();
    cy.wait(1000);
  }

  clickHome() {
    cy.get(this.homeButton).click();
  }

  clickContact() {
    cy.get(this.contactButton).click();
    cy.get("#recipient-email").type("madhu@test.com");
    cy.get("#recipient-name").type("madhutest");
    cy.get("#message-text").type("message to test");
    cy.get("button[onclick='send()']").click();
  }
  clickAboutUs() {
    cy.get(this.aboutUsButton).click();
  }
  clickCart() {
    cy.get(this.cartButton).click();
  }
  clickSignUp(username, password) {
    cy.get(this.signUpButton).click();
    cy.wait(1000);
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.get("button[onclick='register()']").click();
  }
  clickLogin(username, password) {
    cy.get(this.loginButton).click();
    cy.wait(1000);
    cy.get("#loginusername").type(username);
    cy.get("#loginpassword").type(password);
    cy.get("button[onclick='logIn()']").click();
  }
  clickProduct(product) {
    cy.contains(this.cardtitle, product).click();
    cy.wait(1000);
  }
}

export default demo_home_PO;
