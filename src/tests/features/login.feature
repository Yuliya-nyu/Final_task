Feature: Test Login Functionality

  @UC-1@negative
  Scenario Outline:Login with empty credentials

    Given user is on login page
    When user enter <username> and <password>
    And user clear both fields
    And user clicks the login button
    Then this <errorMsg> is displayed

    Examples:
      | username | password | errorMsg                           |
      | test     | test123  | Epic sadface: Username is required |