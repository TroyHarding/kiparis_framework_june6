/// <reference types="cypress" />

class Roman_ProdPage_PO {
  constructor() {
    // CSS selectors
    this.addToCartButton = "a[onclick='addToCart(1)']";
  }

  //Product Page Methodss
  clickAddToCartBtn() {
    cy.get(this.addToCartButton).click();
  }

  verifyProdAddedToCart() {
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Product added");
    });
  }
  verifyProductDescription() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.get(".name").should("eq", data.productNames["samsung"]);
    });
  }
}
export default Roman_ProdPage_PO;
