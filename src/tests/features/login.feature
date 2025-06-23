Feature: Test Login Functionality

  @UC-1@negative
  Scenario Outline:Test Login form with empty credentials

    Given user is on login page
    When user enters <username> and <password>
    And user clears both fields
    And user clicks the login button
    Then this <errorMsg> is displayed

    Examples:
      | username | password | errorMsg             |
      | test     | test123  | Username is required |

  @UC-2 @negative
  Scenario Outline:Test Login form with credentials by passing Username

    Given user is on login page
    When user enters <username> and <password>
    And user clears the password
    And user clicks the login button
    Then this <errorMsg> is displayed

    Examples:
      | username | password | errorMsg             |
      | user     | user123  | Password is required |

  @UC-3 @positive
  Scenario Outline:Test Login form with credentials by passing Username & Password

    Given user is on login page
    When user enters <username> and <password>
    And user clicks the login button
    Then this <expectedTitle> should be displayed

    Examples:
      | username                | password     | expectedTitle |
      | standard_user           | secret_sauce | Swag Labs     |
      | locked_out_user         | secret_sauce | Swag Labs     |
      | problem_user            | secret_sauce | Swag Labs     |
      | performance_glitch_user | secret_sauce | Swag Labs     |
      | error_user              | secret_sauce | Swag Labs     |
      | visual_user             | secret_sauce | Swag Labs     |