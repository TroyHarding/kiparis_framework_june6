/// <reference types="cypress" />

class Roman_PO {
  constructor() {
    // CSS selectors
    //Outline The Top Bar
    this.homeButton = 'a[href="index.html"][class="nav-link"]';
    this.contactButton = 'a[data-target="#exampleModal"]';
    // this.aboutUsButton = ""; // Empty selector needs to be defined
    // this.cartButton = ""; // Empty selector needs to be defined
    // this.loginButton = ""; // Empty selector needs to be defined
    // this.signUpButton = ""; // Empty selector needs to be defined
    this.cardtitle = ".card-title";
  }

  clickProduct(product) {
    cy.contains(".card-title", product).click();
  }

  openHomepage() {
    cy.visit("https://demoblaze.com/");
    cy.wait(1000);
  }
}

export default Roman_PO;
