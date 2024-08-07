@demo @alex
Feature: Demoblaze site

    @demo1 @alex1
    Scenario: Home page tabs verification
        Given I navigate to the Demoblaze homepage
        Then I verify a carousel element is present
        When I click "Contact" tab
        Then New Message pop up opens up and I can send a message
        When I click "About Us" tab
        Then I verify about us video
        When I click "Log In" tab
        Then log in modal opens up
        When I click "Sign Up" tab
        Then sign up modal opens up

    @demo2 @alex2
    Scenario: Home page Products verification for phone, laptop and tablet 
        Given I navigate to the Demoblaze homepage
        Then I verify products display in the Home page
        When I click Next page Button
        Then I verify products display in the Next page
        When I click Previous page Button
        Then I verify products display in the Home page

    # @demo2.1 @alex2.1
    # Scenario: Home page Products verification
    #     Given I navigate to the Demoblaze homepage
    #     When I click a category <category>
    #     Then I verify <product> products display 
        
    #     Examples:
    #         | category   | product         |
    #         | phone      | nokia           |
    #         | laptop     | dell            |
    #         | monitor    | MacBook         |


    @demo3 @alex3
    Scenario: Add Product to Cart
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        And I add the product to the cart
        Then the product "Samsung galaxy s6" should be added to the cart

    @demo4 @alex4
    Scenario: Place an Order
        Given I navigate to the Demoblaze homepage
        When I click a product "Samsung galaxy s6"
        When I add the product to the cart
        When the product "Samsung galaxy s6" should be added to the cart
        When  I click the Place Order Button
        When I fill out the Place Order Field
        Then I should see an order confirmation

