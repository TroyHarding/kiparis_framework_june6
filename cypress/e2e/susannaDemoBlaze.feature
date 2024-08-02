@demo @susanna
Feature: Demoblaze site

    @demo1 @susanna
    Scenario: User Registration
        Given I navigate to the Demoblaze homepage
        When I click on the Sign Up button
        When I enter username "susanan333" and password "password1"
        When I click on Sign Up button
        Then I should see a registration confirmation

    @demo2 @susanna
    Scenario: User Login
        Given I navigate to the Demoblaze homepage
        When I click on the Log In button
        When I enter login username "billyjoebob" and login password "password1"
        When I click Log In in the modal
        Then I verify should be logged in

    # @demo3 @susanna
    # Scenario: Add Product to Cart
    #     Given I navigate to the Demoblaze homepage
    #     When I click a product "Samsung galaxy s6"
    #     When I add the product to the cart
    #     Then the product should be added to the cart

#      @demo3 @susanna3
# Scenario Outline: Scenario Outline name: Add Product to Cart
# When I click on a product "<pr>"
# Then Verify description shows description for "<pr>"
# When I add the product to the cart
# Then the product should be added to the cart
# Examples:
#     | pr | 
#     | samsung6 |
#     | nokia  |
#     | nexus |

    # | product_name      | product | 
    # | Samsung galaxy s6 | samsung |
    # | Nokia lumia 1520  | nokia  |
    # | Nexus 6           | nexus |

    @demo4 @susanna
    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        # When I click on a product "Samsung galaxy s6"
        # When I add the product to the cart
        When I click on the Cart button
        When  I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation
