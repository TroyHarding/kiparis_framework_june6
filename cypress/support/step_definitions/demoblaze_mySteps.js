// /// <reference types="cypress" />
// import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
// import "cypress-iframe";

// Given(`I navigate to the Demoblaze homepage`, () => {
//   //   // Fill out the code
//   cy.visit("https://www.demoblaze.com/index.html");
// });

// Given(`I open url {string}`, (url) => {
//   cy.visit("https://www.demoblaze.com/index.html");
// });

// // When I click on element with selector "#signin2"
// When(`I click on element with selector {string}`, (selector) => {
//   cy.get("#signin2").click();
// });

// //When I type Username "testuser" into element with selector "#sign-username" and Password "password567" into element with selector "#sign-password"
// When(
//   `I type Username {string} and Password {string} into element with selector {string} and {string}`,
//   (Username, Password) => {
//     cy.get("#sign-username").type("testuser");
//     cy.get("#sign-password").type("password567");
//     cy.wait(2 * 1000);
//   }
// );

// // Then I click on element with selector "button[onclick='register()']"
// Then(`I click on selector {string}`, (selector) => {
//   cy.get("button[onclick='register()']").click();
//   cy.wait(2000);
// });

// Then(`I should see Sign up successful message alert`, () => {
//   cy.on("window:alert", (message) => {
//     expect(message).to.equal("Sign up successful.");
//   });
// });

// // @demo2
// //   Scenario: User Login

// //  When I click on Log in button with selector "#login2"
// When(`I click on Log in button with selector {string}`, (selector) => {
//   cy.get("#login2").click();
// });

// // When I type Username "madhutest" into element with selector "#loginusername"
// When(
//   `I type Username {string} into element with selector {string}`,
//   (Username) => {
//     cy.get("#loginusername").type("madhutest");
//     cy.wait(2 * 1000);
//   }
// );

// // When I type Password "xyz123456" into element with selector "#loginpassword"
// When(
//   `I type Password {string} into element with selector {string}`,
//   (Password) => {
//     cy.get("#loginpassword").type("xyz123456");
//     cy.wait(2 * 1000);
//   }
// );

// //Then I click on element with selector "button[onclick='logIn()']"
// Then(`I click on Log in element with selector {string}`, (selector) => {
//   cy.get("button[onclick='logIn()']").click();
//   cy.wait(2000);
// });

// //Then I verify user should be logged in
// Then(`I verify user should be logged in`, () => {
//   cy.get("#nameofuser").contains("Welcome madhutest");
// });

// // @demo3 and @demo4 comes together 
// // Scenario:  Add Product to Cart
// // When I click a product "Samsung galaxy s6"
// When("I click a product {string}", (product) => {
// cy.contains(".card-title", product).click();
// cy.wait(1000);
// });

// Then("I add the product to the cart", () => {
// cy.get('a.btn.btn-success.btn-lg[onclick="addToCart(1)"]').click();
// });

// Then("the product should be added to the cart", () => {
//   // the www.demoblaze.com says Product added to the cart doesn't appear in cypress
// });

// //When I click on the Cart button
// When("I click on the Cart button", () => {
//   cy.get('#cartur').click()
//   cy.wait(1000)
// });

// //Then I click the Place Order Button
// Then("I click the Place Order Button", () => {
// cy.get("[data-target='#orderModal']").click()
// });

// //When I fill out the Place Order Field
// When("I fill out the Place Order Field", () => {
//   cy.get("#name").type("sam");
//   cy.get("#country").type("usa");
//   cy.get("#city").type("areacity");
//   cy.get("#card").type("123456789");
//   cy.get("#month").type("01");
//   cy.get("#year").type("2026");
//   cy.get("button[class='btn btn-primary'][onclick='purchaseOrder()']").click();
// });

// Then("I should see an order confirmation", () => {
//   cy.wait(1000)
//   cy.contains("Thank you for your purchase!").should('be.visible')
//   });