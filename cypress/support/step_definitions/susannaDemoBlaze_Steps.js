/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import susannaDemoBlaze_HomePage_PO from "../page-object/susannaDemoBlaze_HomePage_PO";
import susannaDemoBlaze_ProductPage_PO from "../page-object/susannaDemoBlaze_ProductPage_PO";

const home = new susannaDemoBlaze_HomePage_PO();
const product = new susannaDemoBlaze_ProductPage_PO();

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
  cy.get("#cartur").click();
  cy.get("#tbodyid").contains("Samsung galaxy s6");
  cy.wait(5000);
});

When(`I click the Place Order Button`, () => {
  cy.get(".btn.btn-success").click();
  cy.get("div[id='orderModal'] div[class='modal-header']").contains(
    "Place order"
  );
  cy.wait(5000);
});

When("I fill out the Place Order Field", () => {
  cy.get("#name").type("billyjoebob");
  cy.get("#country").type("usa");
  cy.get("#city").type("san francisco");
  cy.get("#card").type("12345678910");
  cy.get("#month").type("march");
  cy.get("#year").type("2024");
  cy.get("button[onclick='purchaseOrder()']").click();
  cy.wait(5000);
});

Then(`I should see an order confirmation`, () => {
  cy.contains("Thank you for your purchase!").should("be.visible");
  cy.wait(5000);
});
