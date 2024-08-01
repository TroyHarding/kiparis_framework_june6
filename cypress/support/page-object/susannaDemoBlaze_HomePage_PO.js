/// <reference types="cypress" />

class susannaDemoBlaze_HomePage_PO {
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
    // this.cardtitle = "h4 > [href$='prod.html?idp_=1']";
  //  this.cardtitle = "#tbodyid";

    //SignUp page
    this.signUpPage = "#signInModalLabel";
    this.signUpUsername = "#sign-username";
    this.signUpPassword = "#sign-password";
    this.signUpRegisterButton = "button[onclick='register()']";

    //Login page
    this.loginPage = "div[id='logInModal'] div[class='modal-header']";
    this.loginUsername = "#loginusername";
    this.loginPassword = "#loginpassword";
    this.loginRegisterButton = "button[onclick='logIn()']";
    this.loginSuccessPage = "#nameofuser";
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
    cy.fixture("susannaDemoBlaze.json").then((data) => {
      cy.contains(this.cardtitle, data.productNames[product]).click();
      cy.wait(10000);
    });
  }

  // clickProduct(product) {
  //   // cy.fixture("susannaDemoBlaze.json").then((data) => {
  //   //   cy.contains(this.cardtitle, data.productNames[product]).click();
  //     cy.contains(this.cardtitle, product).click();
  //     cy.wait(5000);
  //   }

    // clickProduct(product) {
    //   cy.contains(this.cardtitle, product).click();
    //   cy.wait(1000);
    // }
  




  visitDemoBlazeSite() {
    cy.fixture("susannaDemoBlaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.wait(5000);
    });
  }

  //SignUp Methods

  clickSignUpButton() {
    cy.get(this.signUpButton).click();
    cy.get(this.signUpPage).should("be.visible");
    cy.wait(5000);
  }

  userSignUp() {
    cy.fixture("susannaDemoBlaze.json").then((data) => {
      cy.get(this.signUpUsername).type(data.username);
      cy.get(this.signUpPassword).type(data.password);
      cy.wait(5000);
    });
  }

  clickSignUpRegisterButton() {
    cy.get(this.signUpRegisterButton).click();
    cy.wait(5000);
  }

  registrationConfirmation() {
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Sign up successful.");
    });
  }

  //Login Methods

  clickLoginButton() {
    cy.get(this.loginButton).click();
    cy.get(this.loginPage).contains("Log in");
    cy.wait(5000);
  }

  enterLoginInfo() {
    cy.fixture("susannaDemoBlaze.json").then((data) => {
      cy.get(this.loginUsername).type(data.username2);
      cy.get(this.loginPassword).type(data.password2);
      cy.wait(5000);
    });
  }

  clickLoginRegisterButton() {
    cy.get(this.loginRegisterButton).click();
    cy.wait(5000);
  }

  verifyLoginSuccess() {
    cy.get(this.loginSuccessPage).should("be.visible");
    cy.wait(5000);
  }
}

export default susannaDemoBlaze_HomePage_PO;
