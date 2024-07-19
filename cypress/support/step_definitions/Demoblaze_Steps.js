// /// <reference types="cypress" />
// import {
//   Given,
//   When,
//   Then,
//   And,
// } from "@badeball/cypress-cucumber-preprocessor";
// import "cypress-iframe";
// import demoblaze_PO from "../page-object/demoblaze_PO";
// import demo_home_PO from "../page-object/demo_home_PO";

// const demo = new demoblaze_PO();
// const home = new demo_home_PO();

// Given(`I navigate to the Demoblaze homepage`, () => {
//   //Fill Out the code with the right commands
//   cy.visit("https://www.demoblaze.com/index.html");
// });

// // When(`I click on the Log In button`, () => {
// //   cy.get("#login2").click();
// // });

// // When(
// //   `I enter username {string} and password {string}`,
// //   (username, password) => {
// //     //Fill Out the code with the right commands
// //     cy.get("#loginusername").type(username);
// //     cy.get("#loginpassword").type(password);
// //   }
// // );

// When(`I enter username {string} and password {string}`,(username, password) => {
//   //Fill Out the code with the right commands
//   home.clickLogin(username, password);
// });

// Then(`I verify should be logged in`, () => {
//   //Fill Out the code with the right commands
//   cy.get("#nameofuser")
//     .should("be.visible")
//     .and("have.text", "Welcome billyjoebob");
// });
