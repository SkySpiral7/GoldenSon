'use strict';
TestSuite.element = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('adeptSelect') !== null,
      Description: 'adeptSelect exists'
   });

   assertions.push({
      Expected: database.elementOrder.length,
      Actual: document.getElementById('adeptSelect').length,
      Description: 'adeptSelect right size'
   });

   assertions.push({
      Expected: database.elementOrder[0],
      Actual: document.getElementById('adeptSelect').options[0].value,
      Description: 'adeptSelect first option correct'
   });

   return TestRunner.displayResults('element.js', assertions, testState);
};
