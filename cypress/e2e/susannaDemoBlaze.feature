@demo @susanna
Feature: Demoblaze site

  @demo1 @susanna
  Scenario: User Registration
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "#signin2"
    Then element with selector "#signInModalLabel" should be present
    When I type "susanna321" into element with selector "#sign-username"
    When I type "passworD" into element with selector "#sign-password"
    When I click on element with selector "button[onclick='register()']"

  @demo2 @susanna
  Scenario: User Login
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "#login2"
    Then element with selector "div[id='logInModal'] div[class='modal-header']" should be present
    When I type "susanna321" into element with selector "#loginusername"
    When I type "passworD" into element with selector "#loginpassword"
    When I click on element with selector "button[onclick='logIn()']"
    Then element with selector "#nameofuser" should be present

  @demo3 @susanna
  Scenario: Add Product to Cart
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
    Then I wait for 2 sec
    When I click on element with selector ".btn.btn-success.btn-lg"
    When I click on element with selector "#cartur"
    Then I wait for element with selector "#tbodyid" to be present

  @demo4 @susanna
  Scenario: Place an Order
    Given I open url "https://demoblaze.com/"
    When I click on element with selector "body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > h4:nth-child(1) > a:nth-child(1)"
    Then I wait for 2 sec
    When I click on element with selector ".btn.btn-success.btn-lg"
    When I click on element with selector "#cartur"
    And  I click on element with selector "body:nth-child(2) div:nth-child(7) div.row div.col-lg-1 > button.btn.btn-success:nth-child(3)"
    When I type "susanna" into element with selector "#name"
    When I type "usa" into element with selector "#country"
    When I type "san francisco" into element with selector "#city"
    When I type "123456123456789" into element with selector "#card"
    When I type "07" into element with selector "#month"
    When I type "2024" into element with selector "#year"
    When I click on element with selector "button[onclick='purchaseOrder()']"