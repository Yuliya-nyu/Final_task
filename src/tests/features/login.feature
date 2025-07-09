Feature: Test Login Functionality

  @UC-1@negative
    # Negative test case: both fields (username and password) are cleared.
    # Expected: system should display a "Username is required" error.
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
    # Negative test case: only the username is entered and password is cleared.
    # Expected: system should display a "Password is required" error.
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
    # Positive test case: valid credentials are provided.
    # Expected: user is redirected to dashboard and title "Swag Labs" is displayed.
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