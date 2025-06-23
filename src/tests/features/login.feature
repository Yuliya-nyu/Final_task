Feature: Test Login Functionality

  @UC-1@negative
  Scenario Outline:Login with empty credentials

    Given user is on login page
    When user enter <username> and <password>
    And user clear both fields
    And user clicks the login button
    Then this <errorMsg> is displayed

    Examples:
      | username | password | errorMsg             |
      | test     | test123  | Username is required |

  @UC-2 @negative
  Scenario Outline:Login with missing password
    Given user is on login page
    When user enter <username> and <password>
    And user clears only the password
    And user clicks the login button
    Then this <errorMsg> is displayed

    Examples:
      | username | password | errorMsg             |
      | user     | user123  | Password is required |

  @UC-3 @positive
  Scenario Outline:Login with valid credentials
    Given user is on login page
    When user enter <username> and <password>
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