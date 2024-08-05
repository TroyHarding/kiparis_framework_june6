/// <reference types="cypress" />

class susannaDemoBlaze_ProductPage_PO {
  constructor() {
    this.productPage = ".product-content.product-wrap.clearfix.product-deatil";
    this.productNames = ".name";
    this.productPrices = ".price-container";
    this.productDescriptions = "div[id='more-information'] p";
    this.addToCartButton = "a[onclick='addToCart(1)']";
    this.samsung6 = "h4 > [href$='prod.html?idp_=1']";
  }

  //Add to cart Methods

  verifyProductDescription(product) {
    cy.fixture("susannaDemoBlaze.json").then((data) => {
      cy.get(".name")
        .find(data.productNames["samsung6"])
        .should("eq", data.productNames["samsung6"]);
      // cy.get(this.).should("have.text", data.productDescriptions[samsung6]);
    });
  }

  addToCart() {
    cy.get(this.addToCartButton).click();
    cy.wait(5000);
  }

  verifyProductAddedToCart() {
    cy.on("window:alert", (message) => {
      expect(message).to.equal("Product added");
    });
  }
}

export default susannaDemoBlaze_ProductPage_PO;
