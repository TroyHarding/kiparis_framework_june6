@demoblaze @natasha
Feature: Demoblaze site Practice

    @demoblaze1 @natasha1
    Scenario: User Registration
        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#signin2"
        When I type "natasha9876" into element with selector "#sign-username"
        And I type "password123" into element with selector "#sign-password"
        When I click on element with selector "button[onclick='register()']"

    @demoblaze2 @natasha2
    Scenario: User Login

        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#login2"
        When I type "natasha9876" into element with selector "#loginusername"
        And I type "password123" into element with selector "#loginpassword"
        When I click on element with selector "button[onclick='logIn()']"

    @demoblaze3 @natasha3
    Scenario: Add Product to Cart

        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#tbodyid > div:nth-child(1) > div > div > h4 > a"
        And I click on element with selector ".btn.btn-success.btn-lg"

    @demoblaze4 @natasha4
    Scenario: Place an Order

        Given I open url "https://www.demoblaze.com/"
        When I click on element with selector "#tbodyid > div:nth-child(1) > div > div > h4 > a"
        When I click on element with selector ".btn.btn-success.btn-lg"
        When I click on element with selector "#cartur"
        When I click on element with selector ".btn.btn-success"
        When I type "Natasha" into element with selector "#name"
        When I type "USA" into element with selector "#country"
        When I type "Phoenix" into element with selector "#city"
        When I type "1234567890" into element with selector "#card"
        When I type "12" into element with selector "#month"
        When I type "2025" into element with selector "#year"
        And I click on element with selector "button[onclick='purchaseOrder()']"