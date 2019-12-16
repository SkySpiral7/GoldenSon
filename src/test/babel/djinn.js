'use strict';
TestSuite.djinn = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-earth-djinn') !== null,
      Description: 'add-earth-djinn exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-fire-djinn') !== null,
      Description: 'add-fire-djinn exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-ice-djinn') !== null,
      Description: 'add-ice-djinn exists'
   });

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-wind-djinn') !== null,
      Description: 'add-wind-djinn exists'
   });

   return TestRunner.displayResults('djinn.js', assertions, testState);
};
