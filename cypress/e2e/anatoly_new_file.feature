@demo @anatoly
Feature: Demoblaze site

  @demo1
  Scenario: User Login
    Given I navigate to the Demoblaze homepage
    When I click on the Log In button
    When I enter username and password 
    When I click Log In in the modal
    Then I verify should be logged in