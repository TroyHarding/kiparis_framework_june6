/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import demoblaze_PO from "../page-object/demoblaze_PO";
import HomePage from "../page-object/HomePage";

const demo = new demoblaze_PO();
const home = new HomePage();

Given("I navigate to the Demoblaze homepage", () => {
  cy.visit("https://www.demoblaze.com/");
});

When("I click on the Log In button", () => {
  home.clickOnlogIn();
});

When("I enter username and password", () => {
  home.enterLoginCredentials();
});

When("I click Log In in the modal", () => {
  home.clickingLogIn();
});
Then("I verify should be logged in", () => {
  cy.get("#nameofuser").should("have.text", "Welcome millwaukee");
});
//////////////////////////////////////////////////////////////
// When("I click a product {string}", (product) => {
//   home.clickProduct(product);
// });
// Then("I add the product to the cart", () => {
//   cy.get('a.btn.btn-success.btn-lg[onclick="addToCart(1)"]').click();
// });

// Then("the product should be added to the cart", () => {
//   // the www.demoblaze.com says Product added to the cart doesn't appear in cypress
// });

// When("I click on the Cart button", () => {
//   cy.get("#cartur").click();
//   cy.wait(1000);
// });

// Then("I click the Place Order Button", () => {
//   cy.get('[data-target="#orderModal"]').click();
// });

// When("I fill out the Place Order Field", () => {
//   cy.get("#name").type("billyjoebob");
//   cy.get("#country").type("USA");
//   cy.get("#city").type("Boulder");
//   cy.get("#card").type("4111111111111111");
//   cy.get("#month").type("03");
//   cy.get("#year").type("2028");
//   cy.get(
//     'button.btn.btn-primary[type="button"][onclick="purchaseOrder()"]'
//   ).click();
// });

// Then("I should see an order confirmation", () => {
//   cy.wait(1000);
//   cy.contains("Thank you for your purchase!").should("be.visible");
// });
