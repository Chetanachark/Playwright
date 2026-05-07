Feature: Shop page functionality

    Background: 
        Given I open shop page
    
    @smoke
    Scenario: Logged in user can access shop page and view products
        Then products should be visible
    
    @smoke
    Scenario: User can add product to cart
        When I add "iphone X" to cart
        Then Cart badge should show "1"
    
    @regression
    Scenario: User can add multiple product to cart
        When I add multiple items to cart and check cart count
            |iphone X       |
            |Samsung Note 8 |
            |Nokia Edge     |
        Then Cart badge should show "3"

    @smoke
    Scenario: User can tow  product to cart
        When I add multiple items to cart and check cart count
            |iphone X       |
            |Samsung Note 8 |
        Then Cart badge should show "2"
        
    