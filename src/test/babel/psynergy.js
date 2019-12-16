'use strict';
TestSuite.psynergy = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: 'None',
      Actual: document.getElementById('psynergy').innerHTML,
      Description: 'psynergy is empty'
   });

   return TestRunner.displayResults('psynergy.js', assertions, testState);
};
