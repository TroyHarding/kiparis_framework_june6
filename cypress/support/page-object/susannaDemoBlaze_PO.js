/// <reference types="cypress" />

class demo_home_PO{
    constructor(){
        // CSS selectors
        //Outline the Top Bar
        this.homeButton = "a[href='index.html'][class='nav-link']";
        this.contactButton = "a[data-target='#exampleModal']";
        this.aboutUsButton = "";
        this.cartButton = "";
        this.loginButton = "";
        this.signUpButton = "";

        //The Carosel

        //The categories

        //product
        this.cardtitle =".card-title";
    }

    clickProduct(product){
        cy.contains(this.card-title, product).click();
        cy.wait(1000);
    }

    clickHome(){
        cy.get(this.homeButton).click()
    }

}

export default demo_home_PO;

