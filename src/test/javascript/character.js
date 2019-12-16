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
      assertions.push({Expected: input, Actual: character.save(), Description: 'mirror'});
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'mirror'});
   }

   return TestRunner.displayResults('character.js save/load', assertions, testState);
};
TestSuite.characterJs.updateFinalStat = function (testState = {})
{
   TestRunner.clearResults(testState);
   var assertions = [];

   function statOnChange(id, value)
   {
      var input = document.getElementById(id);
      input.value = value;
      updateBaseStatCharForward({target: input});
   }

   function domInnerHtml(id)
   {
      return document.getElementById(id).innerHTML;
   }

   function addEquipment(name)
   {
      var select = document.getElementById('add-equipment-select');
      select.value = name;
      character.addEquipment({target: select});
   }

   function addDjinn(element, name)
   {
      var select = document.getElementById('add-' + element + '-djinn-select');
      select.value = name;
      character.addDjinn({target: select});
   }

   try
   {
      assertions.push({Expected: 'Priestess', Actual: domInnerHtml('class'), Description: 'class'});

      statOnChange('defense', '100');
      assertions.push({Expected: '90', Actual: domInnerHtml('defense-final'), Description: 'defense class multiply'});

      addEquipment('Ixion Mail');
      statOnChange('defense', '74');
      assertions.push({Expected: '90', Actual: domInnerHtml('defense-final'), Description: 'def mul right order'});

      addDjinn('earth', 'Echo');
      addDjinn('earth', 'Mud');
      assertions.push({Expected: 'High Priestess', Actual: domInnerHtml('class'), Description: 'class 2'});
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'mirror'});
   }

   return TestRunner.displayResults('character.js updateFinalStat', assertions, testState);
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
      actual = character.determineClass(null);  //ignore combatType, djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'only adepts have classes'});

      //ignore djinnCount
      actual = character.determineClass(database.elements.moon.name, database.combatTypes.Mage.name);
      assertions.push({Expected: noClass, Actual: actual, Description: 'no classes found'});
      //this test (and prod if check) is temporary. eventually all should have classes
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'no classes'});
   }

   actual = character.determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 0, "wind": 0});
   assertions.push({
      Expected: database.classes.Squire.name,
      Actual: actual.name,
      Description: 'base class'
   });

   actual = character.determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 1, "wind": 0});
   assertions.push({
      Expected: database.classes.Swordsman.name,
      Actual: actual.name,
      Description: 'takes highest totalDjinn'
   });

   actual = character.determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 8, "wind": 0});
   assertions.push({
      Expected: database.classes.Fearless.name,
      Actual: actual.name,
      Description: 'allowed to exceed requirements'
   });

   actual = character.determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 1, "ice": 1, "wind": 1});
   assertions.push({
      Expected: database.classes.Brute.name,
      Actual: actual.name,
      Description: 'Earth: take Fire first'
   });
   //TODO: will likely need to mock the DB to test every element

   return TestRunner.displayResults('character.js determineClass', assertions, testState);
};
