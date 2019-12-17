'use strict';
TestSuite.djinn = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-earth-djinn-li') !== null,
      Description: 'add-earth-djinn-li exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-fire-djinn-li') !== null,
      Description: 'add-fire-djinn-li exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-ice-djinn-li') !== null,
      Description: 'add-ice-djinn-li exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-wind-djinn-li') !== null,
      Description: 'add-wind-djinn-li exists'
   });

   return TestRunner.displayResults('djinn.js', assertions, testState);
};
