@demo
Feature: Demoblaze site

    @demo1
    Scenario: Register a new user
        Given I open the demoblaze website
        When I register as a new user
        Then I should see the registration success message

    @demo2
    Scenario: Login with valid credentials
        Given I open the demoblaze website
        When I login with valid credentials
        Then I should see the user logged in

    @demo3
    Scenario: Add a product to the cart
        Given I open the demoblaze website
        When I add "Samsung galaxy s6" to the cart
        Then I should see the product added to the cart

    @demo4
    Scenario: Complete the checkout process
        Given I open the demoblaze website
        And I login with valid credentials
        When I checkout
        Then I should see the order confirmation