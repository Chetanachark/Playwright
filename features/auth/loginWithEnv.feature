Feature: Login functionality

    Scenario:Login with valid credentials

        Given I open login page
        When I login with valid credentials
        Then I see shop page
