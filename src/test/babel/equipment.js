'use strict';
TestSuite.equipment = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-equipment-li') !== null,
      Description: 'add-equipment-li exists'
   });

   return TestRunner.displayResults('equipment.js', assertions, testState);
};
