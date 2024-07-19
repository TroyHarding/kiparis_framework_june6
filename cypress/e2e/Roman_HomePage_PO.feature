@demo @roman
Feature: Demoblaze site

Background: Navigate to the Demoblaze homepage
Given I navigate to the Demoblaze homepage

@demo1 @roman1
Scenario: User Registration
    When I click on the Sign Up button
    When I enter sign up username and password
    When I click on Sign Up button in modal
    Then I wait for 1 sec
    Then I should see a registration confirmation


@demo2 @roman2 
Scenario: User Loginn
When I clickk on the Log In button
Then I wait for 1 sec
Then I enter VALID login username and password
Then I click Log In in the modal
Then I verify user should be logged in

@demo3 @roman3
Scenario: Add Product to Cart
When I click on a product "Samsung galaxy s6"
# Then Verify description shows descritpion for samsung
Then I add the product to the cart
Then the product should be added to the cart
