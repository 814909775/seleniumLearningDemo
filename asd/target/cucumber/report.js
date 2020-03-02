$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/Test1.feature");
formatter.feature({
  "line": 1,
  "name": "This is a test",
  "description": "",
  "id": "this-is-a-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "test1",
  "description": "",
  "id": "this-is-a-test;test1",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@testsearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the chrome",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "type the \"\u003cname\u003e\" into the input(id \u003d kw)",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click the button id\u003d\"su\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I got the page title\u003d\"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "this-is-a-test;test1;",
  "rows": [
    {
      "cells": [
        "name",
        "result"
      ],
      "line": 12,
      "id": "this-is-a-test;test1;;1"
    },
    {
      "cells": [
        "三吉彩花",
        "三吉彩花_百度搜索"
      ],
      "line": 13,
      "id": "this-is-a-test;test1;;2"
    },
    {
      "cells": [
        "桐谷美玲",
        "桐谷美玲_百度搜索"
      ],
      "line": 14,
      "id": "this-is-a-test;test1;;3"
    },
    {
      "cells": [
        "新垣结衣",
        "新垣结衣_百度搜索"
      ],
      "line": 15,
      "id": "this-is-a-test;test1;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "test1",
  "description": "",
  "id": "this-is-a-test;test1;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@testsearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the chrome",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "type the \"三吉彩花\" into the input(id \u003d kw)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click the button id\u003d\"su\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I got the page title\u003d\"三吉彩花_百度搜索\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iOpenTheChrome()"
});
formatter.result({
  "duration": 4698685795,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "三吉彩花",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.typeTheIntoTheInputIdKw(String)"
});
formatter.result({
  "duration": 135600372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "su",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.clickTheButtonId(String)"
});
formatter.result({
  "duration": 113245115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "三吉彩花_百度搜索",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iGotThePageTitle(String)"
});
formatter.result({
  "duration": 1747786600,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "test1",
  "description": "",
  "id": "this-is-a-test;test1;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@testsearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the chrome",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "type the \"桐谷美玲\" into the input(id \u003d kw)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click the button id\u003d\"su\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I got the page title\u003d\"桐谷美玲_百度搜索\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iOpenTheChrome()"
});
formatter.result({
  "duration": 3179381672,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "桐谷美玲",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.typeTheIntoTheInputIdKw(String)"
});
formatter.result({
  "duration": 135521424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "su",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.clickTheButtonId(String)"
});
formatter.result({
  "duration": 102169920,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "桐谷美玲_百度搜索",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iGotThePageTitle(String)"
});
formatter.result({
  "duration": 1989675205,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "test1",
  "description": "",
  "id": "this-is-a-test;test1;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@testsearch"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I open the chrome",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "type the \"新垣结衣\" into the input(id \u003d kw)",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click the button id\u003d\"su\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I got the page title\u003d\"新垣结衣_百度搜索\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iOpenTheChrome()"
});
formatter.result({
  "duration": 3900215883,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "新垣结衣",
      "offset": 10
    }
  ],
  "location": "MyStepdefs.typeTheIntoTheInputIdKw(String)"
});
formatter.result({
  "duration": 135127080,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "su",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.clickTheButtonId(String)"
});
formatter.result({
  "duration": 100281093,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "新垣结衣_百度搜索",
      "offset": 22
    }
  ],
  "location": "MyStepdefs.iGotThePageTitle(String)"
});
formatter.result({
  "duration": 1624849062,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "testhock",
  "description": "",
  "id": "this-is-a-test;testhock",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@1"
    },
    {
      "line": 17,
      "name": "@2"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I aa",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I bb",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAa()"
});
formatter.result({
  "duration": 91579,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iBb()"
});
formatter.result({
  "duration": 35527,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search By JS",
  "description": "",
  "id": "this-is-a-test;search-by-js",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 22,
      "name": "@1"
    }
  ]
});
formatter.step({
  "line": 24,
  "name": "I type by JS",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "the search result show",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iTypeByJS()"
});
formatter.result({
  "duration": 4731543086,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.theSearchResultShow()"
});
formatter.result({
  "duration": 650868288,
  "status": "passed"
});
formatter.uri("src/test/java/resources/Test2.feature");
formatter.feature({
  "line": 1,
  "name": "this is test2",
  "description": "",
  "id": "this-is-test2",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "test2",
  "description": "",
  "id": "this-is-test2;test2",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@2"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "inputaa \"\u003ca\u003e\",\"\u003cb\u003e\",\"\u003cc\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "aab",
  "keyword": "Then "
});
formatter.examples({
  "line": 6,
  "name": "",
  "description": "",
  "id": "this-is-test2;test2;",
  "rows": [
    {
      "cells": [
        "a",
        "b",
        "c"
      ],
      "line": 7,
      "id": "this-is-test2;test2;;1"
    },
    {
      "cells": [
        "1",
        "2",
        "3"
      ],
      "line": 8,
      "id": "this-is-test2;test2;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 8,
  "name": "test2",
  "description": "",
  "id": "this-is-test2;test2;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@2"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "inputaa \"1\",\"2\",\"3\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "aab",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    },
    {
      "val": "2",
      "offset": 13
    },
    {
      "val": "3",
      "offset": 17
    }
  ],
  "location": "MyStepdefs.inputaa(String,String,String)"
});
formatter.result({
  "duration": 237633,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.aab()"
});
formatter.result({
  "duration": 51711,
  "status": "passed"
});
});