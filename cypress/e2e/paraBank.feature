Feature: User Registration and Account Management in ParaBank

  Scenario: Automate User Registration process
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I click on the Register link
    And I add valid registration data
    And I click on the Register button
    Then I verify that the user is able to register successfully in the ParaBank application

  Scenario: Automate that user is able to login successfully
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    And I enter the valid password
    And I click the Login button
    Then I verify that the user is able to login successfully in the ParaBank application

  Scenario: Automate that User is able to Open the Account successfully
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    And I enter the valid password
    And I click the Login button
    And I navigate to my account page
    And I click on Open New Account
    Then I verify that the field "What type of Account would you like to open?" is displayed

  Scenario: Automate that Overview page is displayed
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    And I enter the valid password
    And I click the Login button
    And I navigate to my account page
    And I click on Open New Account
    Then I verify that the Account Overview page is displayed

  Scenario: Automate that User is able to view the Account Overview page
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    And I enter the valid password
    And I click the Login button
    And I navigate to my account page
    And I click on Open New Account
    And I click on Accounts Overview
    Then I verify that the user is able to view the Account Overview page