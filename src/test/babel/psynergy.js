'use strict';
TestSuite.psynergy = async function (testState = {})
{
   TestRunner.clearResults(testState);
   const assertions = [];

   assertions.push({
      Expected: 'None',
      Actual: PsynergyList({names: []}),
      Description: 'No psynergy returns placeholder'
   });

   return TestRunner.displayResults('psynergy.js', assertions, testState);
};
