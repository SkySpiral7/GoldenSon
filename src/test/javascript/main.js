'use strict';
TestSuite.main = {};
TestSuite.main.djinnNameSortOrder = async function (testState = {}) {
   TestRunner.clearResults(testState);
   var assertions = [];

   try {
      var djinnNames = ['Char', 'Echo', 'Spark', 'Reflux'];
      djinnNames.sort(djinnNameSortOrder);
      var expected = ['Echo', 'Char', 'Reflux', 'Spark'];
      assertions.push({Expected: expected, Actual: djinnNames, Description: 'Sort element then name'});
   } catch (e) {
      assertions.push({Error: e, Description: 'Sort element then name'});
   }

   return TestRunner.displayResults('TestSuite.main.djinnNameSortOrder', assertions, testState);
};
