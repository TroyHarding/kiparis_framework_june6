@demo @alex
Feature: Demoblaze site

    # @demo1 @alex1
    # Scenario: Valid Login

    # Given I navigate to the Demoblaze homepage and login with valid credentials
    # Then Welcome User message is displayed

    @demo3 @alex3
    Scenario: Add Product to Cart
        Given I navigate to the Demoblaze homepage
        #When I click a category phone
        When I click a product "Samsung galaxy s6"
        And I add the product to the cart
        Then the product should be added to the cart

    @demo4 @alex4
    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        When I add the product to the cart
        When the product should be added to the cart
        When  I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation





