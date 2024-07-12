import demoblaze_PO from "./NatashaDemo_Home_PO";

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
