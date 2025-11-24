@login @regression
Feature: Login
  As a user of SauceDemo
  I want to log in with different types of credentials
  So that I can verify the system behaviour


  Scenario: Verify login with valid credentials
    Given I am on the login page
    And I see the login instructions
    When I enter "standard_user" as username
    And I enter "secret_sauce" as password
    And I click the login button
    Then I should see "Products"
    And I should not see the login instructions
