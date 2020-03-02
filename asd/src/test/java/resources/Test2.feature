Feature: this is test2
  @2
  Scenario Outline: test2
    When inputaa "<a>","<b>","<c>"
    Then aab
    Examples:
      | a | b | c |
      |1  |2  | 3  |