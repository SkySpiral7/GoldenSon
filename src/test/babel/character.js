'use strict';
TestSuite.characterJs = {};
TestSuite.characterJs.load = function (testState = {})
{
   TestRunner.clearResults(testState);
   const assertions = [];
   let input;

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
TestSuite.characterJs._calcAll = function (testState = {})
{
   TestRunner.clearResults(testState);
   const assertions = [];

   function statOnChange(id, value)
   {
      const input = document.getElementById(id);
      input.value = value;
      character._updateBaseStat({target: input});
   }

   function addEquipment(name)
   {
      const select = document.getElementById('add-equipment-select');
      select.value = name;
      character.addEquipment({target: select});
   }

   function addDjinn(element, name)
   {
      const select = document.getElementById('add-' + element + '-djinn-select');
      select.value = name;
      character.addDjinn({target: select});
   }

   assertions.push({Expected: 'Priestess', Actual: character._calcAll().activeClass, Description: 'class'});

   let val = 100
      - database.elements.earth.statsAddend.defense
      - database.combatTypes.Mage.statsAddend.defense
      - database.backgrounds.Academic.statsAddend.defense;
   statOnChange('defense', val);
   assertions.push(
      {Expected: 90, Actual: character._calcAll().stats.defense, Description: 'defense class multiply'});

   addEquipment('Ixion Mail');
   val -= database.equipment['Ixion Mail'].statsAddend.defense;
   statOnChange('defense', val);
   assertions.push(
      {Expected: 90, Actual: character._calcAll().stats.defense, Description: 'def mul right order'});

   addDjinn('earth', 'Echo');
   addDjinn('earth', 'Mud');
   assertions.push({Expected: 'High Priestess', Actual: character._calcAll().activeClass, Description: 'class 2'});

   return TestRunner.displayResults('character.js _calcAll', assertions, testState);
};
TestSuite.characterJs._calcPsynergy = async function (testState = {})
{
   TestRunner.clearResults(testState);
   const assertions = [];

   assertions.push({
      Expected: [],
      Actual: CharacterApp._calcPsynergy(null),
      Description: 'no class returns empty'
   });

   assertions.push({
      Expected: [],
      Actual: CharacterApp._calcPsynergy('Priestess', 1),
      Description: 'class has no psynergy'
   });

   const previous = database.classes.Priestess.psynergy;
   database.classes.Priestess.psynergy = [{level: 2, name: 'Cure'}, {level: 3, name: 'Quake'}];
   try
   {
      assertions.push({
         Expected: [],
         Actual: CharacterApp._calcPsynergy('Priestess', 1),
         Description: 'too low for any psy'
      });

      assertions.push({
         Expected: ['Cure'],
         Actual: CharacterApp._calcPsynergy('Priestess', 2),
         Description: 'includes equal lv psy'
      });

      assertions.push({
         Expected: ['Cure', 'Quake'],
         Actual: CharacterApp._calcPsynergy('Priestess', 5),
         Description: 'lists lower lv psy'
      });
   }
   finally
   {
      database.classes.Priestess.psynergy = previous;
   }

   return TestRunner.displayResults('character.js _calcPsynergy', assertions, testState);
};
TestSuite.characterJs.determineClass = async function (testState = {})
{
   TestRunner.clearResults(testState);
   const assertions = [];
   let actual;

   const noClass = {
      name: null,
      statsMultiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1}
   };

   try
   {
      actual = CharacterApp._determineClass(null);  //ignore combatType, djinnCount
      assertions.push({Expected: noClass, Actual: actual, Description: 'only adepts have classes'});

      //ignore djinnCount
      actual = CharacterApp._determineClass(database.elements.moon.name, database.combatTypes.Mage.name);
      assertions.push({Expected: noClass, Actual: actual, Description: 'no classes found'});
      //this test (and prod if check) is temporary. eventually all should have classes
   }
   catch (e)
   {
      assertions.push({Error: e, Description: 'no classes'});
   }

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 0, "wind": 0});
   assertions.push({
      Expected: database.classes.Squire.name,
      Actual: actual.name,
      Description: 'base class'
   });

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 1, "wind": 0});
   assertions.push({
      Expected: database.classes.Swordsman.name,
      Actual: actual.name,
      Description: 'takes highest totalDjinn'
   });

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 8, "wind": 0});
   assertions.push({
      Expected: database.classes.Fearless.name,
      Actual: actual.name,
      Description: 'allowed to exceed requirements'
   });

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 6, "fire": 3, "ice": 0, "wind": 3});
   assertions.push({
      Expected: database.classes.Lord.name,
      Actual: actual.name,
      Description: 'Earth: take Earth first'
   });

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 1, "ice": 1, "wind": 1});
   assertions.push({
      Expected: database.classes.Brute.name,
      Actual: actual.name,
      Description: 'Earth: Fire 2nd'
   });

   actual = CharacterApp._determineClass(database.elements.earth.name, database.combatTypes.Warrior.name,
      {"earth": 0, "fire": 0, "ice": 1, "wind": 1});
   assertions.push({
      Expected: database.classes.Swordsman.name,
      Actual: actual.name,
      Description: 'Earth: Ice 3rd'
   });

   return TestRunner.displayResults('character.js determineClass', assertions, testState);
};
