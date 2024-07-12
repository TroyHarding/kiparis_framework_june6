@demo @roman
Feature: Demoblaze site


Background: Navigate to the Demoblaze homepage
Given I nnavigate to the Demoblaze homepage

@demo1 @roman
Scenario: User Registration
    When I click on the Sign Up button
    When I enter username "E4443234ma" and password "ABC1"
    When I click on Sign Up button
    Then I wait for 1 sec
    Then I should see a registration confirmation

@demo2 @roman 
Scenario: User Login
    When I click on the Log In button
    Then I enter login username "Billyjoebob" and password "password1"
    Then I click Log In in the modal
    Then I verify "Billyjoebob" should be logged in

@demo3 @roman
Scenario: Add Product to Cart
    When I click a product "Samsung galaxy s6"
    Then I add the product to the cart
    Then the product should be added to the cart

@demo4 @roman
Scenario: Place an Order
    When I click a product "Samsung galaxy s6"
    Then I add the product to the cart
    Then I click on the Cart button
    Then  I click the Place Order Button
    Then I fill out the Place Order Field
    Then I click on Purchase button
    Then I should see an order confirmation

