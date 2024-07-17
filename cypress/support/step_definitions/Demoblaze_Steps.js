// /// <reference types="cypress" />
// import {
//   Given,
//   When,
//   Then,
//   And,
// } from "@badeball/cypress-cucumber-preprocessor";
// import "cypress-iframe";
// import demoblaze_PO from "../page-object/demoblaze_PO";

// const demo = new demoblaze_PO();

// // import demoblaze_PO from "../page-object/demoblaze_PO";

// // const demo = new demoblaze_PO();

// //   Given(`I login to Demoblaze as a valid user`, () => {
// //    demo.loginValid();
// //   });

// Given("I navigate to the Demoblaze homepage", () => {
//   cy.visit("https://www.demoblaze.com/");
// });

// When("I click on the Log In button", () => {
//   cy.get("#login2").click();
//   cy.wait(1000);
// });

// When(
//   "I enter username {string} and password {string}",
//   (username, password) => {
//     cy.get("#loginusername").type(username);
//     cy.wait(1000);
//     cy.get("#loginpassword").type(password);
//   }
// );

// When("I click Log In in the modal", () => {
//   cy.get('.modal-footer .btn.btn-primary[onclick="logIn()"]').click();
//   cy.wait(2000);
// });
// Then("I verify should be logged in", () => {
//   cy.get("#nameofuser").should("have.text", "Welcome billyjoebob");
// });

// Then("I wait for 2 Sec", () => {
//     cy.wait(2000);
// });

// When("I click a product {string}", (product) => {
//   cy.contains(".card-title", product).click();
//   cy.wait(1000);
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

// Given(`I navigate to the Demoblaze homepage`, () => {
//   // Fill out the code
//   cy.visit("https://www.demoblaze.com/index.html");
// });

// When(`I click a product "Samsung galaxy s6`, () => {
//   // Fill out the code
//   cy.get().click();
// });

// When(`I add the product to the cart`, () => {
//   // Fill out the code
//   demo.loginValid();
// });

// When(`I click on the Cart button`, () => {
//   // Fill out the code
//   demo.loginValid();
// });

// When(`I click the Place Order Button`, () => {
//   // Fill out the code
//   demo.loginValid();
// });

// When(`I fill out the Place Order Field`, () => {
//   // Fill out the code
//   demo.loginValid();
// });

// Then(`I should see an order confirmation`, () => {
//   // Fill out the code
//   demo.loginValid();
// });
