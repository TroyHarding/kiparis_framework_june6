/// <reference types="cypress" />


class demo_brendaProduct_PO {
    constructor(){
this.imageButton = "div[class='item active']";
this.productName = "h2[class='name']";
this.priceButton = "h3.price-container";
this.productDescription = "#more-information";
this.addToCartButton = "a[onclick='addToCart(1)']" 



//Product
this.href = "h4 > a[href='prod.html?idp_=1']" 


    }


clickProduct(product) {
    cy.get(this.href, product).click();
    cy.wait(1000);

}
}


export default demo_brendaProduct_PO;