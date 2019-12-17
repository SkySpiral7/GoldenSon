'use strict';
TestSuite.backgroundOrCombatType = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], expected;

   expected = '<select id="combatTypeSelect">' +
      '<option value="Mage">Mage</option>' +
      '<option value="Rogue">Rogue</option>' +
      '<option value="Warrior">Warrior</option>' +
      '</select>';
   assertions.push({
      Expected: expected,
      Actual: document.getElementById('combatTypeSelect').outerHTML,
      Description: 'combatTypeSelect'
   });

   //checking this select's html would be redundant and large
   assertions.push({
      Expected: database.backgrounds.names.length,
      Actual: document.getElementById('backgroundSelect').length,
      Description: 'backgroundSelect right size'
   });

   assertions.push({
      Expected: database.backgrounds.names[0],
      Actual: document.getElementById('backgroundSelect').options[0].value,
      Description: 'backgroundSelect first option correct'
   });

   return TestRunner.displayResults('backgroundOrCombatType.js', assertions, testState);
};
