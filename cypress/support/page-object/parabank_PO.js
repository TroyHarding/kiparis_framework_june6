/// <reference types="cypress" />


class parabank_PO {

    //Elements
    //Special Function that creates the class

    constructor() {
      this.firstName = "input[id='customer.firstName']";
      this.lastName = "input[id='customer.lastName']";
      this.address = "input[id='customer.address.street']";
      this.city = "input[id='customer.address.city']";
      this.state = "input[id='customer.address.state']";
      this.zipCode = "input[id='customer.address.zipCode']";
      this.phone = "input[id='customer.phoneNumber']";
      this.SSN = "input[id='customer.ssn']";
      this.userName = "input[id='customer.username']";
      this.password = "input[id='customer.password']";
      this.confirm = "#repeatedPassword";
      this.registerButton = "input[value='Register']";
    }

    //Functions

    clickFirstName() {
      cy.get(this.firstName).type("susanna");
    }

    clickLastName() {
      cy.get(this.lastName).type("chang");
    }

    clickAddress() {
      cy.get(this.address).type("888 Main Street");
    }

    clickCity() {
      cy.get(this.city).type("San Francisco");
    }

    clickZipCode() {
      cy.get(this.zipCode).type();
    }

    clickPhone() {
      cy.get(this.phone).type();
    }

    clickSSN() {
      cy.get(this.SSN).type();
    }

    clickUserName() {
      cy.get(this.userName).type();
    }

    clickPassword() {
      cy.get(this.password).type();
    }

    clickConfirm() {
      cy.get(this.confirm).type();
    }

    clickRegisterButton() {
      cy.get(this.registerButton).type();
    }

}
  
  export default parabank_PO;
  