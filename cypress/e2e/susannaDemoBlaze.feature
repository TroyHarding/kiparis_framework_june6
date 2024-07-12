 @demo
# Feature: Demoblaze site


#     @demo1
#     Scenario: User Registration
#         # Given I navigate to the Demoblaze homepage
#         # When I click on the Sign Up button
#         # And I enter username "testuser" and password "password123"
#         # And I click on Sign Up button
#         # Then I should see a registration confirmation
#         Given I open url "https://www.demoblaze.com/index.html"
#         When I click on element with selector "#signin2"
#         When I type "testdfdfdfdfd" into element with selector "#sign-username"
#         When I type "abc" into element with selector "#sign-password"
#         When I click on element with selector "button[onclick='register()']"

# # @demo2
# # Scenario: User Login
# #     Given I navigate to the Demoblaze homepage
# #     When I click on the Log In button
# #     And I enter username "testuser" and password "password123"
# #     And I click Log In in the modal
# #     Then I verify should be logged in


# # @demo3:
# #  Scenario: Add Product to Cart
# #  Given I navigate to the Demoblaze homepage
# #  When I click a product "Samsung galaxy s6"
# #  And I add the product to the cart
# #  Then the product should be added to the cart

# #  @demo4:
# #  Scenario: Place an Order
# #  Given I navigate to the Demoblaze
# # homepage
# #  When I click a product "Samsung galaxy s6"
# #  And I add the product to the cart
# #  When I click on the Cart button
# #  And I click the Place Order Button
# #  When I fill out the Place Order Field
# #  Then I should see an order confirmation


@demo
Feature: Demoblaze site

  @demo1 @susanna
  Scenario: User Login
    Given I navigate to the Demoblaze homepage
    When I click on the Log In button
    And I enter username "testuser" and password "password123"
    And I click Log In in the modal
    Then I verify should be logged in

  @demo2 @susanna
  Scenario: Add Product to Cart
    Given I navigate to the Demoblaze homepage
    When I click a product "Samsung galaxy s6"
    And I add the product to the cart
    Then the product should be added to the cart

  @demo3 @susanna
  Scenario: Place an Order
    Given I navigate to the Demoblaze homepage
    When I click a product "Samsung galaxy s6"
    And I add the product to the cart
    When I click on the Cart button
    And  I click the Place Order Button
    When I fill out the Place Order Field
    Then I should see an order confirmation