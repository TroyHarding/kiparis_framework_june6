/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  import demoblaze_PO from "../page-object/demoblaze_PO";
  import demo_brendaHome_PO from "../page-object/demo_brendaHome_PO"; 

  // const demo = new demoblaze_PO();
  
    // Given(`I login to Demoblaze as a valid user`, () => {
    //   demo.loginValid();
    // });
  
    // var homepage = new demo_brendaHome_PO();

    Given(`I navigate to the Demoblaze homepage`, () => {
      //fill Out the code w/ r/ commands.
      cy.visit("https://www.demoblaze.com/index.html");
    });
  
    When(`I click on the Log In button`, () => {
      cy.get("#login2").click();
      cy.wait(1000);
    });
  
    When(`I enter username {string} and password {string}`, (testuser, password) => {
      cy.get("#loginusername").type(testuser);
      cy.wait(1000);
      cy.get("#loginpassword").type(password);
      cy.wait(1000);
    });
  
    When(`I click Log In in the modal`, () => {
      cy.get("button[onclick='logIn()']").click().and("have.text", "Welcome testuser");
    });
  
    Then(`I verify should be logged in`, () => {
      cy.get("button[onclick='login()']").click(); 
    });
  
    When(`I click a product {string}`, (product) => {
      cy.get("h4 > a[href='prod.html?idp_=1']", product).click();
      cy.wait(1000);
      // homepage.clickProduct(product)
    });
  
    When(`I add the product to the cart`, () => {
       cy.get('a.btn.btn-success.btn-lg[onclick="addToCart(1)"]').click();
      // cy.get("a[onclick='addToCart(1)'").click();
      // cy.visit("a[onclick='showcart()']").click();
    });
  
    Then(`the product should be verified to the cart`, () => {
      cy.get("#tbodyid").should("have.text", "Samsung galaxy s6");
    });
  
  //Click the Cart
  //Verify something is there
   
    When(`I click on the Cart button`, () => {
      cy.get("#cartur").click();
      cy.wait(1000);
    });


    When(`I click the Place Order Button`, () => {
      cy.get("button[data-target='#orderModal']").click();
    });
  
    When(`I fill out the Place Order Field`, () => {
      cy.get("#name").type("billyjoebob");
      cy.get("#country").type("USA");
      cy.get("#city").type("Florida");
      cy.get("#card").type("246800");
      cy.get("#month").type("06");
      cy.get("#year").type("2024");
      cy.get("button[onclick='purchaseOrder()']").click();
    });
  
    Then(`I should see an order confirmation`, () => {
      cy.wait(1000);
      cy.contains("Thank you for your purchase!").should("be.visisble");
    });
  
  
  
   