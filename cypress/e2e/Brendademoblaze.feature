@demo @brenda
Feature: Brendademoblaze site

    @demo1 @brenda1
    Scenario: User Registration
        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#signin2"
        When I type "testuser" into element with selector "#sign-username"
        When I type "123456" into element with selector "#sign-password"
        When I click on element with selector "button[onclick='register()']"

    @demo2 @brenda2
    Scenario: User Login
        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#login2"
        When I type "testuser" into element with selector "#loginusername"
        When I type "123456" into element with selector "#loginpassword"
        When I click on element with selector "button[onclick='logIn()']"


    @demo3 @brenda3
    Scenario: Add Product to Cart
        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "h4 > a[href='prod.html?idp_=1']"
        When I click on element with selector "a.btn.btn-success.btn-lg"
        When I click on element with selector "#cartur"
        Then I wait for element with selector "#tbodyid" to be present


    @demo4 @brenda4
    Scenario: Place an Order
        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "h4 a[href='prod.html?idp_=1']"
        When I click on element with selector ".btn.btn-success.btn-lg"
        Then I accept alert
        When I click on element with selector "#cartur"
        When I click on element with selector "button[data-target='#orderModal']"
        When I type "name" into element with selector "#name"
        When I type "country" into element with selector "#country"
        When I type "city" into element with selector "#city"
        When I type "number" into element with selector "#card"
        When I type "month" into element with selector "#month"
        When I type "year" into element with selector "#year"
        When I click on element with selector "button[onclick='purchaseOrder()']"
        Then I accept alert



















