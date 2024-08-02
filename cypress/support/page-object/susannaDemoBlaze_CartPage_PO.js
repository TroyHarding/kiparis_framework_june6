/// <reference types="cypress" />

class susannaDemoBlaze_CartPage_PO {
  constructor() {
    this.name = "#name";
    this.country = "#country";
    this.city = "#city";
    this.card = "#card";
    this.month = "#month";
    this.year = "#year";
    this.purchaseButton = "button[onclick='purchaseOrder()']";
    this.closeButton = "div[id='orderModal'] div[class='modal-footer'] button:nth-child(1)";
    // this.cartProductPage = "#tbodyid";
    this.placeOrderButton = ".btn.btn-success";
    this.placeOrderPage = "div[id='orderModal'] div[class='modal-header']";
    this.cartProductPage = "th[width='120']";

  }

  cartPage() {
  cy.get(this.cartProductPage).contains("Pic");
  cy.wait(5000);
  }

  clickPlaceOrderButton() {
    cy.get(this.placeOrderButton).click();
  cy.get(this.placeOrderPage).contains("Place order");
  cy.wait(5000);
  }

  fillPlaceOrderField() {
    cy.fixture("susannaDemoBlaze.json").then((data) => {
        cy.get(this.name).type(data.name);
        cy.get(this.country).type(data.country);
        cy.get(this.city).type(data.city);
        cy.get(this.card).type(data.card);
        cy.get(this.month).type(data.month);
        cy.get(this.year).type(data.year);
        cy.get(this.purchaseButton).click();
    });   
  cy.wait(5000);
  }

  orderConfirmation() {
    cy.contains("Thank you for your purchase!").should("be.visible");
  cy.wait(5000);
  }

}

export default susannaDemoBlaze_CartPage_PO;
