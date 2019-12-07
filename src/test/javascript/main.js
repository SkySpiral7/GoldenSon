'use strict';
TestSuite.main = {};
TestSuite.main.determineClass = async function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [], actual;

   var noClass = {
      name: null,
      priority: -Infinity,  //priority doesn't need to be tested but makes Expected simple
      statsMultiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1}
   };

   try
   {
      actual = determineClass(null);  //ignore combatType, djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'only adepts have classes'});

      actual = determineClass(database.adeptTypes.moon.name, database.combatTypes.Mage.name);  //ignore djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'no classes found'});
      //this test (and prod if check) is temporary. eventually all should have classes
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'no classes'});
   }

   actual = determineClass(database.adeptTypes.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "wind": 0, "ice": 0});
   assertions.push({
      Expected: database.classes.Squire.name,
      Actual: actual.name,
      Description: 'base class'
   });

   actual = determineClass(database.adeptTypes.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "wind": 0, "ice": 1});
   assertions.push({
      Expected: database.classes.Swordsman.name,
      Actual: actual.name,
      Description: 'takes highest priority'
   });

   actual = determineClass(database.adeptTypes.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "wind": 0, "ice": 8});
   assertions.push({
      Expected: database.classes.Fearless.name,
      Actual: actual.name,
      Description: 'allowed to exceed requirements'
   });

   actual = determineClass(database.adeptTypes.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 1, "wind": 1, "ice": 1});
   assertions.push({
      Expected: database.classes.Brute.name,
      Actual: actual.name,
      Description: 'Earth: take Fire first'
   });

   return TestRunner.displayResults('TestSuite.main.determineClass', assertions, testState);
};
