Feature: This is a test

  @testsearch
  Scenario Outline: test1
    When I open the chrome
    And type the "<name>" into the input(id = kw)
    And click the button id="su"
    Then I got the page title="<result>"


    Examples: 
      | name     | result        |
      | 三吉彩花     | 三吉彩花_百度搜索     |
      | 桐谷美玲     | 桐谷美玲_百度搜索     |
      | 新垣结衣     | 新垣结衣_百度搜索     |

  @1 @2
  Scenario: testhock
    When I aa
    Then I bb

  @1
  Scenario: Search By JS
    When I type by JS
    Then the search result show

  
