'use strict';
TestSuite.database={};
TestSuite.database.hasIntegrity=function(testState={})
{
   TestRunner.clearResults(testState);
   var assertions=[];

   //TODO: ADD TESTS. make sure no classes overlap

   return TestRunner.displayResults('TestSuite.advantageRow.setAdvantage', assertions, testState);
};
