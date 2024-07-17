#  @demo
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

  # @demo1 @susanna
  # Scenario: User Login
  #   Given I navigate to the Demoblaze homepage
  #   When I click on the Log In button
  #   And I enter username "testuser" and password "password123"
  #   And I click Log In in the modal
  #   Then I verify should be logged in

  # @demo2 @susanna
  # Scenario: Add Product to Cart
  #   Given I navigate to the Demoblaze homepage
  #   When I click a product "Samsung galaxy s6"
  #   And I add the product to the cart
  #   Then the product should be added to the cart

  # @demo3 @susanna
  # Scenario: Place an Order
  #   Given I navigate to the Demoblaze homepage
  #   When I click a product "Samsung galaxy s6"
  #   And I add the product to the cart
  #   When I click on the Cart button
  #   And  I click the Place Order Button
  #   When I fill out the Place Order Field
  #   Then I should see an order confirmation


    @demo @susanna
Scenario: Add Product to Cart
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
    Then I wait for 2 sec
    When I click on element with selector ".btn.btn-success.btn-lg"
    When I click on element with selector "#cartur"
    Then I wait for element with selector "#tbodyid" to be present

    @demo @susanna
  Scenario: Place an Order
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
    Then I wait for 2 sec
    When I click on element with selector ".btn.btn-success.btn-lg"
    When I click on element with selector "#cartur"
    And  I click on element with selector "body:nth-child(2) div:nth-child(7) div.row div.col-lg-1 > button.btn.btn-success:nth-child(3)"
    When I type "abc" into element with selector "#name"
    When I type "abc" into element with selector "#country"
    When I type "abc" into element with selector "#city"
    When I type "123456" into element with selector "#card"
    When I type "12" into element with selector "#month"
    When I type "2024" into element with selector "#year"
    When I click on element with selector "button[onclick=‘purchaseOrder()’]"