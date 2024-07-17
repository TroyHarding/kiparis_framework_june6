/// <reference types="cypress" />

class HomePage {
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

    //The catergories
    this.categoryPhones =
      "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(2)";
    this.categoryLaptops =
      "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(3)";
    this.categoryMonitors =
      "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)";
    //product
    this.cardtitle = ".card-title";
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get("#login2").click();
      cy.get("#loginusername").type(data.username);
      cy.get("#loginpassword").type(data.password);
      cy.get(
        "#logInModal > div > div > div.modal-footer > button.btn.btn-primary"
      ).click();
    });
  }

  clickOnlogIn() {
    cy.get(this.loginButton).click();
  }

  enterLoginCredentials() {
    cy.get("#loginusername").type("millwaukee");
    cy.wait(1000);
    cy.get("#loginpassword").type("72348");
  }

  clickingLogIn() {
    cy.get('.modal-footer .btn.btn-primary[onclick="logIn()"]').click();
    cy.wait(2000);
  }
}

export default HomePage;
