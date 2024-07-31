@para
Feature: User Registration and Account Management in ParaBank
  Background: Open Parabank Url
    
@para1  
  Scenario: Automate User Registration process
    Given I open the parabank Site
    When I click on the Register link
    When I add valid registration data
    When I click on the Register button
    Then I verify user registered successfully

@para2
  Scenario: Automate that user is able to login successfully
    Given I open the parabank Site
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I verify that the user is able to login successfully in the ParaBank application


@para3  
  Scenario: Automate that User is able to Open the Account successfully
    Given I open the parabank Site
    When I enter the valid username "GGG"
    When I enter the valid password "p@ssword"
    When I click the Login button
    When I click on Open New Account
    Then I verify that the Account Overview page is displayed

@para4
  Scenario: Automate that Overview page is displayed
    Given I open the parabank Site
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I verify that the Account Overview page is displayed

@para5
  Scenario: Automate that User is able to view the Account Overview page
    Given I open the parabank Site
    When I enter the valid username
    Then I enter the valid password
    Then I click the Login button
    Then I navigate to my account page
    Then I click on Open New Account
    Then I click to my account Overview page
    Then I verify that the Account Overview page is displayed

