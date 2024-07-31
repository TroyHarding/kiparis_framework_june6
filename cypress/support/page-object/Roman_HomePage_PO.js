/// <reference types="cypress" />

class Roman_HomePage_PO {
  constructor() {
    // CSS selectors
    //Outline The Top Bar
    this.homeButton = 'a[href="index.html"][class="nav-link"]';
    this.contactButton = 'a[data-target="#exampleModal"]';
    this.aboutUsButton = "a[data-target='#videoModal']";
    this.cartButton = "#cartur";
    this.loginButton = "#login2";
    this.signUpButton = "#signin2";
    //the Carosel
    this.leftArrow = ".carousel-control-prev-icon";
    this.rightArrow = ".carousel-control-next-icon";
    this.caroselContainer = ".carousel-inner";
    //The catergories
    this.phonesCategory = "a[onclick=byCat('phone')]";
    this.laptopsCategory = "a[onclick=byCat('notebook')]";
    this.monitorsCategory = "a[onclick=byCat('monitor')]";
    //productt
    this.cardtitle = ".card-title";
    //Pages
    this.previousPage = "#prev2";
    this.nextPage = "#next2";
    //LogIn
    this.logInModal = "button[onclick='logIn()']";
    this.nameOfuser = "#nameofuser";
    this.loginUserName = "#loginusername";
    this.loginUserPass = "#loginpassword";
    //SignUp
    this.SignUpUserName = "#sign-username";
    this.SignUpUserPass = "#sign-password";
    this.signUpButtonInModal = "button[onclick='register()']";
  }

  //Methods
  navigateHomePage() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }

  clickHomeButton() {
    cy.get(this.homeButton).click();
  }

  clickContactButton() {
    cy.get(this.contactButton).click();
  }

  clickAboutButton() {
    cy.get(this.aboutUsButton).click();
  }
  clickCartButton() {
    cy.get(this.cartButton).click();
  }

  clickLoginButton() {
    cy.get(this.loginButton).click();
  }

  clickSignupButton() {
    cy.get(this.signUpButton).click();
  }

  clickLeftArrow() {
    cy.get(this.leftArrow).click();
  }

  clickRightArrow() {
    cy.get(this.rightArrow).click();
  }

  clickPhonesCaterory() {
    cy.get(this.phonesCategory).click();
  }

  clickLaptopsCaterory() {
    cy.get(this.laptopsCategory).click();
  }

  clickMonitorsCaterory() {
    cy.get(this.monitorsCategory).click();
  }

  clickPrevPage() {
    cy.get(this.previousPage).click();
  }

  clickNextPage() {
    cy.get(this.nextPage).click();
  }

  clickProduct(product) {
    cy.contains(this.cardtitle, product).click();
    cy.wait(1000);
  }

  //Login Methods
  enterLoginBilly() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.get(this.loginUserName).click().type(data.username);
      cy.wait(1000);
      cy.get(this.loginUserPass).click().type(data.password);
    });
  }

  verifyUserLogin() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.get(this.nameOfuser)
        .should("be.visible")
        .and("have.text", "Welcome " + data.username);
    });
  }

  clickLogInModal() {
    cy.get(this.logInModal).click();
  }

  //Sign Up Methods
  enterSignUpInfo() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.get(this.SignUpUserName).click().type(data.signUpUsername);
      cy.wait(1000);
      cy.get(this.SignUpUserPass).click().type(data.signUpPassword);
    });
  }

  clickSignupButtonInModal() {
    cy.get(this.signUpButtonInModal).click();
  }

  regConfirm() {
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Sign up successful.");
    });
  }
}

export default Roman_HomePage_PO;
