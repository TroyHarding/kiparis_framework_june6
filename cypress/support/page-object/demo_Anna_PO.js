/// <reference types="cypress" />

class demo_home_PO_Anna {
  constructor() {
    //CSS selectors
    this.homeButton = "a[href='index.html'][class='nav-link']";
    this.contactButton = "a[data-target='#exampleModal']";
    this.aboutUsButton = "a[data-target='#videoModal']";
    this.cartButton = "#cartur";
    this.loginButton = "login2";
    this.logoutButton = "";
    this.signUpButton = "#signin2";

    // the Carosel
    this.leftArrow = ".carousel-control-prev-icon";
    this.rightArrow = ".carousel-control-next-icon";
    this.caroselContainer = ".carousel-inner";

    // The categories
    this.phonesCategory = "a[onclick='byCat('phone')']";
    this.laptopsCategory = "a[onclick='byCat('notebook')']";
    this.monitorsCategory = "a[onclick='byCat('monitor')']";

    // product
    this.cardtitle = ".card-title";
  }

  clickLogin(username, password) {
    cy.wait(1000);
    cy.get("#loginusername").type(username);
    cy.get("#loginpassword").type(password);
    cy.get("button[onclick='logIn()']").click();
  }

  clickProduct(product) {
    cy.contains(this.cardtitle, product).click();
    cy.wait(1000);
  }

  clickHome() {
    cy.get(this.homeButton).click();
  }
}

export default demo_home_PO_Anna;
