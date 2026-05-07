Feature: Shop page functionality

    Background: 
        Given I open shop page

    Scenario: Logged in user can access shop page and view products
     Then products should be visible
    
    Scenario: User can add product to cart
        When I add "iphone X" to cart
        Then Cart badge should show "1"

    Scenario: User can add multiple product to cart
        When I add multiple items to cart and check cart count
            |iphone X       |
            |Samsung Note 8 |
            |Nokia Edge     |
        Then Cart badge should show "3"
        
    