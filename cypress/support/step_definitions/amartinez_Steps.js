/// <reference types="cypress" />
import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import "cypress-iframe";
  import demoblaze_PO from "../page-object/amartinez_PO";
import amartinez_PO from "../page-object/amartinez_PO";

  let demo = new amartinez_PO;

  Given('I navigate to the Demoblaze homepage and login with valid credentials', () =>{
    demo.loginValid(); 
  });

  Then ('Welcome User message is displayed', () =>{
    demo.loginValidation();

  });

  Given('I navigate to the Demoblaze homepage', () =>{
    demo.openHomepage();
  });
  When('I click a product {string}', () => {
    demo.clickProduct();

  }); 
  When('I click a category phone', () => {
    demo.clickCategoryPhones();

  });

  When('I add the product to the cart', () => {
    demo.addProductToCart();

  });

  Then('the product should be added to the cart', () => {
    demo.itemInCart();
  });

  When('I click the Place Order Button', () => {
    demo.placeOrder();
  })

  When('I fill out the Place Order Field', () =>{
    demo.filloutPlaceOrderModal(); 
  })

  Then('I should see an order confirmation', () =>{
    demo.confirmPurchase();
  })