/// <reference types="cypress" />

class susannaDemoBlaze_PO {
  constructor() {
    // CSS selectors
    //Outline the Top Bar
    this.homeButton = "a[href='index.html'][class='nav-link']";
    this.contactButton = "a[data-target='#exampleModal']";
    this.aboutUsButton = "a[data-target='#videoModal']";
    this.cartButton = "#cartur";
    this.loginButton = "#login2";
    this.signUpButton = "#signin2";

    //The Carousel
    this.leftArrow = ".carousel-control-prev-icon";
    this.carouselContent = "img[alt='Third slide']";
    this.rightArrow = ".carousel-control-next-icon";

    //The categories
    this.categoriesPhones = "a[onclick='byCat('phone')']";
    this.categoriesLaptops = "a[onclick='byCat('notebook')']";
    this.categoriesMonitors = "a[onclick='byCat('monitor')']";
    this.previousButton = "#prev2";
    this.nextButton = "#next2";

    //The products
    this.cardtitle = ".card-title";
  }

  clickHomeButton() {
    cy.get(this.homeButton).click();
  }

  clickContactButton() {
    cy.get(this.contactButton).click();
  }

  clickAboutUsButton() {
    cy.get(this.aboutUsButton).click();
  }

  clickCartButton() {
    cy.get(this.cartButton).click();
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  clickSignUpButton() {
    cy.get(this.signUpButton).click();
  }

  clickCatagoriesPhones() {
    cy.get(this.categoriesPhones).click();
  }

  clickCatagoriesLaptops() {
    cy.get(this.categoriesLaptops).click();
  }

  clickCatagoriesMonitors() {
    cy.get(this.categoriesMonitors).click();
  }

  clickNextButton() {
    cy.get(this.nextButton).click();
  }

  clickPreviousButton() {
    cy.get(this.previousButton).click();
  }

  clickProduct(product) {
    cy.contains(this.card - title, product).click();
    cy.wait(1000);
  }
}

export default susannaDemoBlaze_PO;
