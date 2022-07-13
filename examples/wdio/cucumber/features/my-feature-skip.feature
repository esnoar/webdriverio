Feature: Example feature
  As a user of WebdriverIO
  I should be able to use different commands
  to get informations about elements on the page
  
  @Skip
  Scenario: Get size of an element
    Given I go on the website "https://github.com/"
    Then  should the element ".header-logged-out a" be 32px wide and 35px high