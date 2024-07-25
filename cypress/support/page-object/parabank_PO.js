/// <reference types="cypress" />


class parabank_PO {
  constructor() {
    // CSS selectors
    this.homeButton = 'a[href="index.html"][class="nav-link"]';

  }

  //Methods
  navigateHomePage() {
    cy.fixture("Roman_HomePage_PO_fixture.json").then((data) => {
      cy.visit(data.baseUrl);
    });
  }




}
  
  export default parabank_PO;
  