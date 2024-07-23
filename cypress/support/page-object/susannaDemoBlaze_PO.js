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
    this.catogoriesPhones = "a[onclick='byCat('phone')']";
    this.catagoriesLaptops = "a[onclick='byCat('notebook')']";
    this.catagoriesMonitors = "a[onclick='byCat('monitor')']";

    //The products
    this.cardtitle = ".card-title";


  clickHome() {
    cy.get(this.homeButton).click();
  }

  clickContact() {
    cy.get(this.contactButton).click();
  }

  clickAboutUs() {
    cy.get(this.aboutUsButton).click();
  }

  clickCart() {
    cy.get(this.cartButton).click();
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  clickSignUp() {
    cy.get(this.signUpButton).click();
  }

  clickCatagoriesPhones() {
    cy.get(this.catogoriesPhones).click();
  }

  clickCatagoriesLaptops() {
    cy.get(this.catagoriesLaptops).click();
  }

  clickCatagoriesMonitors() {
    cy.get(this.catagoriesMonitors).click();
  }

  clickProduct(product) {
    cy.contains(this.card - title, product).click();
    cy.wait(1000);
  }
}

}

export default susannaDemoBlaze_PO;
