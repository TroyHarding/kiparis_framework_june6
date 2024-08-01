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

//   clickProduct(product) {
//     cy.get(this.samsung6).click();
//     cy.get(this.productPage).contains(
//     cy.fixture(susannaDemoBlaze.json).then((data) => {
//       cy.get(this.productNames).contains(data.productNames[samsung6]);
//       cy.get(this.productPrices).contains(data.productPrices[samsung6]);
//       cy.get(this.productDescriptions).contains(
//         data.productDescriptions[samsung6]
//       );
//     }));
//     cy.wait(5000);
//   }

verifyProductDescription(product) {
    cy.fixture("Practice_HomePage_PO_fixture.json").then((data) => {
      // cy.get(".name")
      //   .find(data.productNames["samsung"])
      //   .should("eq", data.productNames["samsung"]);
      cy.get("#tbodyid>.name").should("have.text", data.productNames[product]);
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
