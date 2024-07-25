/// <reference types="cypress" />

class demoblaze_PO {
  constructor() {
    // Navigation and Header
    this.navbarBrand = "a.navbar-brand";
    this.navbarLinks = "ul.navbar-nav li.nav-item a.nav-link";
    this.homeLink = "ul.navbar-nav li.nav-item.active a.nav-link";
    this.contactLink = "ul.navbar-nav li.nav-item:nth-child(2) a.nav-link";
    this.aboutUsLink = "ul.navbar-nav li.nav-item:nth-child(3) a.nav-link";
    this.cartLink = "ul.navbar-nav li.nav-item:nth-child(4) a.nav-link";
    this.loginLink = "a#login2";
    this.logoutLink = "a#logout2";
    this.userNameDisplay = "a#nameofuser";
    this.signUpLink = "a#signin2";

    // Modals
    this.newMessageModal = "div#exampleModal";
    this.emailInput = "input#recipient-email";
    this.nameInput = "input#recipient-name";
    this.messageTextarea = "textarea#message-text";
    this.sendButton = "div.modal-footer button.btn-primary";
    this.signUpModal = "div#signInModal";
    this.signUpUsernameInput = "input#sign-username";
    this.signUpPasswordInput = "input#sign-password";
    this.signUpButton = "div.modal-footer button.btn-primary";
    this.logInModal = "div#logInModal";
    this.loginUsernameInput = "input#loginusername";
    this.loginPasswordInput = "input#loginpassword";
    this.loginButton = "div.modal-footer button.btn-primary";
    this.videoModal = "div#videoModal";

    // Carousel
    this.carousel = "div#carouselExampleIndicators";
    this.carouselItems = "div.carousel-inner div.carousel-item";
    this.firstSlide = "div.carousel-inner div.carousel-item.active";
    this.nextSlideButton = "a.carousel-control-next";
    this.previousSlideButton = "a.carousel-control-prev";

    // Main Content
    this.categoriesSection = "div.list-group";
    this.categoriesHeader = "a#cat";
    this.phonesCategory = "a.list-group-item:nth-child(2)";
    this.laptopsCategory = "a.list-group-item:nth-child(3)";
    this.monitorsCategory = "a.list-group-item:nth-child(4)";
    this.productCards = "div#tbodyid div.col-lg-4";
    this.eachProductCard = "div.card";
    this.productImageLink = "div.card a";
    this.productTitleLink = "div.card h4.card-title a";
    this.productPrice = "div.card h5";
    this.productDescription = "div.card p.card-text";

    // Pagination
    this.pagination = "ul.pagination";
    this.previousButton = "li.page-item:first-child button.page-link";
    this.nextButton = "li.page-item:last-child button.page-link";

    // Footer
    this.footerSections = "div#footc div.thumbnail";
    this.aboutUsSection = "div.thumbnail:nth-child(1)";
    this.getInTouchSection = "div.thumbnail:nth-child(2)";
    this.productStoreSection = "div.thumbnail:nth-child(3)";

    // Other Selectors
    this.contactUsModalTrigger = 'a[data-target="#exampleModal"]';
    this.aboutUsModalTrigger = 'a[data-target="#videoModal"]';

    // Checkout form selectors
    this.checkoutNameInput = "#name";
    this.checkoutCountryInput = "#country";
    this.checkoutCityInput = "#city";
    this.checkoutCardInput = "#card";
    this.checkoutMonthInput = "#month";
    this.checkoutYearInput = "#year";
    this.placeOrderButton = "button:contains('Place Order')";
    this.purchaseButton = "button:contains('Purchase')";
  }

  loginValid() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.loginLink).click();
      cy.get(this.loginUsernameInput).type(data.username);
      cy.get(this.loginPasswordInput).type(data.password);
      cy.get(this.loginButton).click();
    });
  }

  register() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.get(this.signUpLink).click();
      cy.get(this.signUpUsernameInput).type(data.newUsername);
      cy.get(this.signUpPasswordInput).type(data.newPassword);
      cy.get(this.signUpButton).click();
    });
  }

  addProductToCart(productName) {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      cy.contains(productName).click();
      cy.get("a").contains("Add to cart").click();
      cy.on("window:alert", (alertText) => {
        expect(alertText).to.contains("Product added");
      });
    });
  }

  checkout() {
    cy.fixture("demoblaze.json").then((data) => {
      cy.visit(data.baseUrl);
      this.loginValid(); // Ensure user is logged in before checkout
      cy.get(this.cartLink).click();
      cy.get(this.placeOrderButton).click();
      cy.get(this.checkoutNameInput).type(data.checkoutName);
      cy.get(this.checkoutCountryInput).type(data.checkoutCountry);
      cy.get(this.checkoutCityInput).type(data.checkoutCity);
      cy.get(this.checkoutCardInput).type(data.checkoutCard);
      cy.get(this.checkoutMonthInput).type(data.checkoutMonth);
      cy.get(this.checkoutYearInput).type(data.checkoutYear);
      cy.get(this.purchaseButton).click();
    });
  }
}

export default demoblaze_PO;
