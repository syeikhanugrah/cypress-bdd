Feature: Login to dashboard

  As an user
  I want to login into the dashboard

  Scenario: Registered user
    Given I open login page
    When I submit login form
    Then I should see the dashboard