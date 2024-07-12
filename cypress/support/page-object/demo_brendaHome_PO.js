
/// <refereence types="cypress"  />
class demo_brendaHome_PO {

    //special method
    constructor() {
//CSS selectors
//Outline the Top Bar
this.homeButton = "a[href='index.html'][class='nav-link']";
this.contacButton = "a[dat-target='#exampleModal']";
this.aboutUsButton = "";
this.cartButton = "#cartur";
this.loginButton = "#login2";
this.signUpButtton = "a[data-target='#signInModal']";

// the Carousel
this.carouselButton = "div[class='carousel-item active']"

// The Categories
this.categoriesButton = "#cat";
this.phonesButton = "#itemc[onclick='byCat('phone')']";
this.laptopsButton = "#itemc[onclick='byCat('notebook')']";
this.monitorsButton = "#itemc[onclick='byCat('monitor')']";

//Product
this.cardtitle = ".card-title"

    }

    clickProduct(product) {
        cy.contains(this.cardtitle, product).click();
        cy.wait(1000);

    }
    
    clickHome() {
        cy.get(this.homeButton).click()
    }

}


export default demo_brendaHome_PO;