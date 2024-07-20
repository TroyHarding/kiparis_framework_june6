/// <reference types="cypress" />
import demo_home_PO_Anna from "../page-object/demo_Anna_PO";

import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";

const home = new demo_home_PO_Anna();

Given("I navigate to the Demoblaze homepage", () => {
  cy.visit("https://www.demoblaze.com/");
});

When("I click on the Log In button", () => {
  cy.get("#login2").click();
  cy.wait(1000);
});

When(
  `I enter username {string} and password {string}`,
  (username, password) => {
    //Fill Out the code with the right commands
    home.clickLogin(username, password);
  }
);

When("I click Log In in the modal", () => {
  cy.get('.modal-footer .btn.btn-primary[onclick="logIn()"]').click();
  cy.wait(2000);
});
Then("I verify should be logged in", () => {
  cy.get("#nameofuser").should("have.text", "Welcome billyjoebob");
});

When("I click a product {string}", (product) => {
  cy.contains(".card-title", product).click();
  cy.wait(1000);
});
Then("I add the product to the cart", () => {
  cy.get('a[onclick="addToCart(1)"]').click();
});

Then("the product should be added to the cart", () => {
  Cypress.on("window:alert", (message) => {
    expect(message).to.equal("Product added");
  });
});

When("I click on the Cart button", () => {
  cy.get("#cartur").click();
  cy.wait(1000);
});

Then("I click the Place Order Button", () => {
  cy.get('[data-target="#orderModal"]').click();
});

When("I fill out the Place Order Field", () => {
  cy.get("#name").type("billyjoebob");
  cy.get("#country").type("USA");
  cy.get("#city").type("Boulder");
  cy.get("#card").type("4111111111111111");
  cy.get("#month").type("03");
  cy.get("#year").type("2028");
  cy.get(
    'button.btn.btn-primary[type="button"][onclick="purchaseOrder()"]'
  ).click();
});

Then("I should see an order confirmation", () => {
  cy.wait(1000);
  cy.contains("Thank you for your purchase!").should("be.visible");
});
