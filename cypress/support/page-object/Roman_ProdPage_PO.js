/// <reference types="cypress" />

class Roman_ProdPage_PO {
  constructor() {
    // CSS selectors
    this.addToCartButton = "a[onclick*='addToCart']";
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
  verifyProductDescription(product) {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      // cy.get(".name")
      //   .find(data.productNames["samsung"])
      //   .should("eq", data.productNames["samsung"]);
      cy.get("#tbodyid>.name").should("have.text", data.productNames[product]);
    });
  }
}
export default Roman_ProdPage_PO;
