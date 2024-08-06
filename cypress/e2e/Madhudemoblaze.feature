@demo @madhu
Feature: Demoblaze site

    @demo1 @madhu1
    Scenario: User Registration
        Given I open url "https://www.demoblaze.com/index.html"
        When I click on element with selector "#signin2"
        When I type Username "madhutest" and Password "xyz123456" into element with selector "#sign-username" and "#sign-password"
        Then I click on selector "button[onclick='register()']"
        Then I should see Sign up successful message alert

    @demo2 @madhu2
    Scenario: User Login
        Given I navigate to the Demoblaze homepage
        When I click on Log in button with selector "#login2"
        When I type Username "madhutest" into element with selector "#loginusername"
        When I type Password "xyz123456" into element with selector "#loginpassword"
        Then I click on Log in element with selector "button[onclick='logIn()']"
        Then I verify user should be logged in

    @demo3 @madhu3
    Scenario:  Add Product to Cart
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        Then I add the product to the cart
        Then the product should be added to the cart

    @demo4 @madhu4
    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        Then I add the product to the cart
        Then the product should be added to the cart
        When I click on the Cart button
        Then I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation

