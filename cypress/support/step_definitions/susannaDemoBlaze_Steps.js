/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import susannaDemoBlaze_HomePage_PO from "../page-object/susannaDemoBlaze_HomePage_PO";
import susannaDemoBlaze_ProductPage_PO from "../page-object/susannaDemoBlaze_ProductPage_PO";
import susannaDemoBlaze_CartPage_PO from "../page-object/susannaDemoBlaze_CartPage_PO";

const home = new susannaDemoBlaze_HomePage_PO();
const product = new susannaDemoBlaze_ProductPage_PO();
const cart = new susannaDemoBlaze_CartPage_PO();

// Sign Up
Given(`I navigate to the Demoblaze homepage`, () => {
  home.visitDemoBlazeSite();
});

When(`I click on the Sign Up button`, () => {
  home.clickSignUpButton();
});

When(
  `I enter username {string} and password {string}`,
  (username, password) => {
    home.userSignUp();
  }
);

When(`I click on Sign Up button`, () => {
  home.clickSignUpRegisterButton();
});

Then("I should see a registration confirmation", () => {
  home.registrationConfirmation();
});

// Login

When(`I click on the Log In button`, () => {
  home.clickLoginButton();
});

When(
  `I enter login username {string} and login password {string}`,
  (username2, password2) => {
    home.enterLoginInfo();
  }
);

When(`I click Log In in the modal`, () => {
  home.clickLoginRegisterButton();
});

Then(`I verify should be logged in`, () => {
  home.verifyLoginSuccess();
});

// Click product and product page

When(`I click on a product {string}`, (product) => {
  home.clickProduct();
});

// Add Product to Cart


Then("Verify description shows description for {string}", (product) => {
  //   const verifyProductDescription = new Practice_ProdPage_PO();
    product.verifyProductDescription(product);
  });

When(`I add the product to the cart`, () => {
  product.addToCart();
});

Then("the product should be added to the cart", () => {
  product.verifyProductAddedToCart();
});

// Place an Order

When(`I click on the Cart button`, () => {
  home.clickCartButton();
  cart.cartPage();
  cy.wait(5000);
});

When(`I click the Place Order Button`, () => {
  cart.clickPlaceOrderButton();
});

When("I fill out the Place Order Field", () => {
  cart.fillPlaceOrderField();
});

Then(`I should see an order confirmation`, () => {
  cart.orderConfirmation();
});
