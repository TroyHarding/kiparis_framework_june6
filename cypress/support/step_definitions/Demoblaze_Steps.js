/// <reference types="cypress" />
import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import "cypress-iframe";
import demoblaze_PO from "../page-object/demoblaze_PO";

const demo = new demoblaze_PO();


  Given(`I login to Demoblaze as a valid user`, () => {
    demo.loginValid();
  });


  Given('I open the demoblaze website', () => {
    cy.fixture('demoblaze.json').then((data) => {
      cy.visit(data.baseUrl);
    });
  });
  
  When('I register as a new user', () => {
    demo.register();
  });
  
  Then('I should see the registration success message', () => {
    // Add assertion for successful registration if applicable
  });
  
  When('I login with valid credentials', () => {
    demo.loginValid();
  });
  
  Then('I should see the user logged in', () => {
    cy.get(demo.userNameDisplay).should('be.visible');
  });
  
  When('I add {string} to the cart', (productName) => {
    demo.addProductToCart(productName);
  });
  
  Then('I should see the product added to the cart', () => {
    // Add assertion for product added confirmation if applicable
  });
  
  When('I checkout', () => {
    demo.checkout();
  });
  
  Then('I should see the order confirmation', () => {
    // Add assertion for order confirmation if applicable
  });