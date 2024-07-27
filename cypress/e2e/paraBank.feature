@para
Feature: User Registration and Account Management in ParaBank

Background: Open Parabank Url
    Given I open the parabank site

@para1
  Scenario: Automate User Registration process
    When I click on the Register link
    When I add valid registration data
    When I click on the Register button
    Then I verify user registered successfully

@para2
  Scenario: Automate that user is able to login successfully
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I verify that the user is able to login successfully in the ParaBank application

@para3
  Scenario: Automate that User is able to Open the Account successfully
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I navigate to my account page
    Then I click on Open New Account
    Then I verify field What type of Account would you like to open?

@para4
  Scenario: Automate that Overview page is displayed
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I verify that the Account Overview page is displayed

@para5
  Scenario: Automate that User is able to view the Account Overview page
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I navigate to my account page
    Then I click on Open New Account
    Then I click to my account Overview page
    Then I verify that the Account Overview page is displayed
