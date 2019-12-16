'use strict';
TestSuite.characterJs = {};
TestSuite.characterJs.load = function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], input;

   try
   {
      Loader.resetData();
      input = {
         name: 'name',
         adept: 'fire',
         combatType: 'Warrior',
         background: 'Farmer',
         level: 2,
         stats: {hp: 1, pp: 2, attack: 3, defense: 4, agility: 5, luck: 6},
         djinn: {"Cannon": "standby"},
         equipment: ['Ixion Mail']
      };
      Loader.sendData(input);
      assertions.push({Expected: input, Actual: save(), Description: 'mirror'});
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'mirror'});
   }

   return TestRunner.displayResults('character.js save/load', assertions, testState);
};
TestSuite.characterJs.determineClass = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], actual;

   var noClass = {
      name: null,
      statsMultiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1}
   };

   try
   {
      actual = determineClass(null);  //ignore combatType, djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'only adepts have classes'});

      actual = determineClass(database.elements.moon.name, database.combatTypes.Mage.name);  //ignore djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'no classes found'});
      //this test (and prod if check) is temporary. eventually all should have classes
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'no classes'});
   }

   actual = determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 0, "wind": 0});
   assertions.push({
      Expected: database.classes.Squire.name,
      Actual: actual.name,
      Description: 'base class'
   });

   actual = determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 1, "wind": 0});
   assertions.push({
      Expected: database.classes.Swordsman.name,
      Actual: actual.name,
      Description: 'takes highest totalDjinn'
   });

   actual = determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 8, "wind": 0});
   assertions.push({
      Expected: database.classes.Fearless.name,
      Actual: actual.name,
      Description: 'allowed to exceed requirements'
   });

   actual = determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 1, "ice": 1, "wind": 1});
   assertions.push({
      Expected: database.classes.Brute.name,
      Actual: actual.name,
      Description: 'Earth: take Fire first'
   });
   //TODO: will likely need to mock the DB to test every element

   return TestRunner.displayResults('character.js determineClass', assertions, testState);
};
