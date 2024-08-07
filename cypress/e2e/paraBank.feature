
@para
Feature: User Registration and Account Management in ParaBank


  @para1

    @para1
      Scenario: Automate User Registration process
        Given I open the parabank site
        When I click on the Register link
        When I add valid registration data
        When I click on the Register button
        Then I verify user registered successfully

    @para2
    Scenario: Automate that user is able to login successfully
        Given I open the parabank site
        When I enter the valid username
        When I enter the valid password
        When I click the Login button
        Then I verify that the user is able to login successfully in the ParaBank application

# @para2
#   Scenario: Automate that user is able to login successfully
#     Given I open the parabank site
#     When I completed the login panel
#     Then I verify that the user is able to login successfully in the ParaBank application

@para3
  Scenario: Automate that User is able to Open the Account successfully
    Given I open the parabank site
    When I enter the valid username
    When I enter the valid password
    When I click the Login button
   # When I navigate to my account page
    When I click on Open New Account link
    Then I verify that the field What type of Account would you like to open is displayed
    When I click on Open New Account button
    Then I verify new Account is opened


@para4
  Scenario: Automate that Overview page is displayed
    Given I open the parabank site
    When I enter the valid username
    And I enter the valid password
    And I click the Login button
    And I navigate Account Overview page
    # And I click on Open New Account
    Then I verify that the Account Overview page is displayed

# @para5
# Scenario: Automate that User is able to view the Account Overview page
#   Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
#   When I enter the valid username
#   And I enter the valid password
#   And I click the Login button
#   And I navigate to my account page
#   And I click on Open New Account
#   And I click on Accounts Overview
#   Then I verify that the user is able to view the Account Overview page

# @para3
#   Scenario: Automate that User is able to Open the Account successfully
#     Given I open the parabank site
#     When I enter the valid username
#     When I enter the valid password
#     When I click the Login button
#     # When I navigate to my account page
#     When I click on Open New Account
#     Then I verify that the field What type of Account would you like to open is displayed

@para @myro
Feature: User Registration and Account Management in ParaBank

@para1

  Scenario: Automate User Registration process
    Given I open the parabank site
    When I click on the Register link
    When I add valid registration data
    When I click on the Register button
    Then I verify user registered successfully


  # @para2
  # Scenario: Automate that user is able to login successfully
  #   Given I open the parabank site
  #   When I enter the valid username
  #   When I enter the valid password
  #   When I click the Login button
  #   Then I verify that the user is able to login successfully in the ParaBank application

  # @para3
  # Scenario: Automate that User is able to Open the Account successfully
    # Given I open the parabank site
    # When I enter the valid username
    # When I enter the valid password
    # When I click the Login button
    # When I navigate to my account page
    # When I click on Open New Account
    # Then I verify Open New Account choices is displayed

  # @para4
  # Scenario: Automate that Overview page is displayed
  #   Given I open the parabank site
  #   When I enter the valid username
  #   When I enter the valid password
  #   When I click the Login button
  #   When I navigate to my account page
  #   When I click on Open New Account
  #   Then I verify that the Account Overview page is displayed

  # @para5
  # Scenario: Automate that User is able to view the Account Overview page
  #   Given I open the parabank site
  #   When I enter the valid username
  #   When I enter the valid password
  #   When I click the Login button
  #   When I navigate to my account page
  #   When I click on Open New Account
  #   When I click on Accounts Overview
  #   Then I verify that the user is able to view the Account Overview page

  Scenario: Automate that user is able to login successfully
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    When I enter the valid password
    Then I click the Login button
    Then I verify that the user is able to login successfully in the ParaBank application

  Scenario: Automate that User is able to Open the Account successfully
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    When I enter the valid password
    Then I click the Login button
    When I navigate to my account page
    Then I click on Open New Account
    Then I verify that the field "What type of Account would you like to open?" is displayed

  Scenario: Automate that Overview page is displayed
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    When I enter the valid password
    Then I click the Login button
    When I navigate to my account page
    Then I click on Open New Account
    Then I verify that the Account Overview page is displayed

  Scenario: Automate that User is able to view the Account Overview page
    Given I open the URL "https://parabank.parasoft.com/parabank/index.htm"
    When I enter the valid username
    And I enter the valid password
    Then I click the Login button
    When I navigate to my account page
    Then I click on Open New Account
    Then I click on Accounts Overview
    Then I verify that the user is able to view the Account Overview page


