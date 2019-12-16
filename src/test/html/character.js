'use strict';
TestSuite.character = {};
TestSuite.character.backgroundOrCombatType = async function (testState = {})
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

   return TestRunner.displayResults('TestSuite.character.backgroundOrCombatType', assertions, testState);
};
TestSuite.character.djinn = async function (testState = {})
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

   return TestRunner.displayResults('TestSuite.character.djinn', assertions, testState);
};
TestSuite.character.element = async function (testState = {})
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

   return TestRunner.displayResults('TestSuite.character.element', assertions, testState);
};
TestSuite.character.equipment = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: true,
      Actual: document.getElementById('add-equipment') !== null,
      Description: 'add-equipment exists'
   });

   return TestRunner.displayResults('TestSuite.character.equipment', assertions, testState);
};
TestSuite.character.psynergy = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   assertions.push({
      Expected: 'None',
      Actual: document.getElementById('psynergy').innerHTML,
      Description: 'psynergy is empty'
   });

   return TestRunner.displayResults('TestSuite.character.psynergy', assertions, testState);
};
