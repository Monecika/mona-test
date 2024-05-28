Feature: Skoda search

  Scenario Outline: As a skoda lover, i wanna search for a skoda
    Given I am on the <main> page
    When I search for <search>
    Then I should get redirected to another page after selecting the product
    Then I should see the result in the json file

    Examples:
      | main  | search |
      | 999.md | skoda octavia  |
