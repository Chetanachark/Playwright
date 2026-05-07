Feature: Login functionality

  Scenario Outline: Login with multiple users
    Given I open the login page
    When I login with username "<username>" and password "<password>"
    Then I should see "<result>"

    Examples:
      |username           |password           |result    |
      |rahulshettyacademy |Learning@830$3mK2  |shop      | 
      |chetanachar        | chetan            |practise  |