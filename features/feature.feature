Feature: Sbitany website test

  @sbitany
  Scenario: Sbitany Website validations
    Given I open sbitany website
    When i login to sbitany with this account details
      | email                    | password |
      | moqbelhammodeh@gmail.com | Test1234 |
    Then I validate that the cart exists
    And I validate account login
    And  I validate language change
    When I search of an item and add it to the cart "TV"
    Then I validate the item added in the cart
    And I validate that these items are existed in the cart
      | name                                                                | model           | price  |
      | LG Television OLED, A2 Series, Size 55 Inch 4K UHD, Smart WebOS TV. | OLED55A26LA.BMT | ₪4,290 |
      | Giveaway gift with purchase                                         | Giveaway gift   | ₪0     |
    And I validate the items in the cart icon
      | name                                                                |
      | LG Television OLED, A2 Series, Size 55 Inch 4K UHD, Smart WebOS TV. |
      | Giveaway gift with purchase                                         |
    And I compare items in the cart and items in the cart icon
    And I validate the bottom of home page
      | name                |
      | Company             |
      | Programs & Services |
      | Customer Service    |
      | News & Updates      |
    And I validate about company section
      | name                   |
      | Branches (Our Network) |
      | Brands                 |
      | About Us               |
      | Contact (Corporate)    |
      | Dealers                |
      | ARP                    |
      | Milestones             |
      | Vacancies              |

