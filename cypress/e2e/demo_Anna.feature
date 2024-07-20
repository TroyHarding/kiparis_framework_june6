@demo @Anna
Feature: Demoblaze site


    @demo1 @Anna
    Scenario: User Login
        Given I navigate to the Demoblaze homepage
        When I click on the Log In button
        When I enter username "billyjoebob" and password "password1"
        When I click Log In in the modal
        Then I verify should be logged in

    Scenario: Add Product to Cart
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        Then I add the product to the cart
        Then the product should be added to the cart

    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        And I add the product to the cart
        Then the product should be added to the cart
        When I click on the Cart button
        Then  I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation

