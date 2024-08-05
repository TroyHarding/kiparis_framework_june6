@demo @susanna
Feature: Demoblaze site

    @demo1 @susanna1
    Scenario: User Registration
        Given I navigate to the Demoblaze homepage
        When I click on the Sign Up button
        When I enter username "susanan333" and password "password1"
        When I click on Sign Up button
        Then I should see a registration confirmation

    @demo2 @susanna2
    Scenario: User Login
        Given I navigate to the Demoblaze homepage
        When I click on the Log In button
        When I enter login username "billyjoebob" and login password "password1"
        When I click Log In in the modal
        Then I verify should be logged in

    @demo3 @susanna3
    Scenario: Add Product to Cart
        Given I navigate to the Demoblaze homepage
        When I click on a product "Samsung galaxy s6"
        # Then Verify description shows description for "Samsung galaxy s6"
        When I add the product to the cart
        Then the product should be added to the cart

    @demo4 @susanna4
    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        When I click on a product "Samsung galaxy s6"
        When I add the product to the cart
        When I click on the Cart button
        When  I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation