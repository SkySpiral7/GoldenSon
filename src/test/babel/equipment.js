'use strict';
TestSuite.equipment = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-equipment') !== null,
      Description: 'add-equipment exists'
   });

   return TestRunner.displayResults('equipment.js', assertions, testState);
};
