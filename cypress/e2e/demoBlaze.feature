
@anatoly
Feature: Demoblaze site

  @anatoly1
  Scenario: User Login
    Given I navigate to the Demoblaze homepage
    When I click on the Log In button
    When I enter username and password 
    When I click Log In in the modal
    Then I verify should be logged in

#   @demo2
#   Scenario: Add Product to Cart
#     Given I navigate to the Demoblaze homepage
#     When I click a product "Samsung galaxy s6"
#     And I add the product to the cart
#     Then the product should be added to the cart

#   @demo3
#   Scenario: Place an Order
#     Given I navigate to the Demoblaze homepage
#     When I click a product "Samsung galaxy s6"
#     And I add the product to the cart
#     When I click on the Cart button
#     And  I click the Place Order Button
#     When I fill out the Place Order Field
#     Then I should see an order confirmation
