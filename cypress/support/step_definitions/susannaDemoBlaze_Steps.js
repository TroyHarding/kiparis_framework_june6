/// <reference types="cypress" />
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
  //import susannaDemoBlaze_PO() from "../page-object/susannaDemoBlaze_PO()";

  //const demo = new susannaDemoBlaze_PO();

// Sign Up
Given(`I navigate to the Demoblaze homepage`, () => {
  cy.visit("https://demoblaze.com/");
  cy.wait(5000);
});

When(`I click on the Sign Up button`, () => {
  cy.get("#signin2").click();
  cy.get("#signInModalLabel").should("be.visible");
  cy.wait(5000);
});

When(
  `I enter username {string} and password {string}`,
  (username, password) => {
    cy.get("#sign-username").type(username);
    cy.get("#sign-password").type(password);
    cy.wait(5000);
  }
);

When(`I click on Sign Up button`, () => {
  cy.get("button[onclick='register()']").click();
  cy.wait(5000);
});

Then(`I should see a registration confirmation`, () => {
  cy.contains("Sign up successful.").should("be.visible");
  cy.wait(5000);
});

// Login

When(`I click on the Log In button`, () => {
  cy.get("#login2").click();
  cy.get("div[id='logInModal'] div[class='modal-header']").contains("Log in");
  cy.wait(5000);
});

When(
  `I enter login username {string} and login password {string}`,
  (username2, password2) => {
    cy.get("#loginusername").type(username2);
    cy.get("#loginpassword").type(password2);
    cy.wait(5000);
  }
);

When(`I click Log In in the modal`, () => {
  cy.get("button[onclick='logIn()']").click();
  cy.wait(5000);
});

Then(`I verify should be logged in`, () => {
  cy.get("#nameofuser").should("be.visible");
  cy.wait(5000);
});

When(`I click a product {string}`, (product) => {
  cy.get("h4 > [href$='prod.html?idp_=1']").click();
  cy.get("#tbodyid").contains("Samsung galaxy s6");
  cy.wait(5000);
});

When(`I add the product to the cart`, () => {
  cy.get(".btn.btn-success.btn-lg").click();
  cy.wait(5000);
});

// Then(`I should see product added to the cart`, () => {
//   cy.contains("Product added").should("be.visible").click();
//   cy.wait(5000);
// });

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
