/ <reference types="cypress"  />

class demo_brendaCart_PO {
    constructor() {
// Place Order to Cart     
this.cartButton = "#cartur";        
this.tableBody = "#tbodyid";
this.deleteButton = "a[onclick='deleteItem('ba1e866f-b084-69c4-572d-b86cd358891a')']";
this.placeOrderButton = "button[data-target='#orderModal']";
this.name = "#name";
this.country = "#country";
this.city = "#city";
this.creditCard = "#card";
this.month = "#month";
this.year = "#year";
this.purchaseButton = "button[onclick='purchaseOrder()']";
this.closeButton = "button.btn.btn-secondary";
this.OrderConfirmation = "div[data-animation='pop']";

    }

clickCart() {
    cy.get(this.cartButton ).click();
} 
clickTable() {
    cy.get(this.tableBody).click();
}
clickTotal() {
    cy.get(this.total).click();
}
clickPlaceOrder() {
    cy.get(this.placeOrderButton).click();
}

}


export default demo_brendaCart_PO;