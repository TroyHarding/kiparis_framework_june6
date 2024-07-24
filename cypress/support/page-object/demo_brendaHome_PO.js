/// <reference types="cypress" />


class demo_brendaHome_PO {
    //special method
    constructor() {
//CSS selectors
//Outline the Top Bar
this.homeButton = "a[href='index.html'][class='nav-link']";
this.contacButton = "a[data-target='#exampleModal']";
this.aboutUsButton = "a[data-target='#videoModal']";
this.cartButton = "#cartur";
this.loginButton = "#login2";
this.signUpButtton = "a[data-target='#signInModal']";

// the Carousel
this.carouselButton = "div[class='carousel-item active']"
this.leftArrow = "span[class='carousel-control-prev-icon']"
this.rightArrow= "span[class='carousel-control-next-icon']"

// The Categories
this.phonesButton = "#itemc[onclick='byCat('phone')']";
this.laptopsButton = "#itemc[onclick='byCat('notebook')']";
this.monitorsButton = "#itemc[onclick='byCat('monitor')']";

//Product
this.href = "h4 > a[href='prod.html?idp_=1']";

//Footer
this.footerButton = "#footc";

    }

clickLogIn(username, password) {
    cy.get(this.loginButton).click();
    cy.wait(1000);
    cy.get("#loginusername").type(testuser);
    cy.get("#loginpassword").type(password123);
    cy.get("button[onclick='logIn()']").click();
}

    clickProduct(product) {
        cy.get(this.href, product).click();
        cy.wait(1000);
    }
    
    clickHome() {
        cy.get(this.homeButton).click()
    }
    clickContact() {
        cy.get(this.contacButton).click();
    }
    clickAboutUs(){
        cy.get(this.aboutUsButton).click();
    }
    clickCart() {
        cy.get(this.cartButton ).click();
    }
    clickSignUp() {
        cy.get(this.signUpButtton).click();
    }

    clickCarousel(){
        cy.get(this.carouselButton).click();
    }
    clickLeftArrow() {
        cy.click(this.leftArrow).click();
    }
    clickRightArrow(){
        cy.click(this.rightArrow).click();
    }    
   
    clickPhones() {
        cy.click(this.phonesButton).click();
    }
    clickLaptops() {
        cy.click(this.laptopsButton).click();
    }
    clickMonitors() {
        cy.click(this.monitorsButton).click();
    }
    clickFooter() {
        cy.get(this.footerButton).click();
    };

};


export default demo_brendaHome_PO;