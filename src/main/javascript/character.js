'use strict';

function saveToFile()
{
   var link = document.getElementById('save-to-file-link');
   link.download = document.getElementById('name').value + '.json';
   link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(saveAsString());
}

function saveAsString()
{
   return JSON.stringify(save());
}

function saveToTextArea()
{
   document.getElementById('code-box').value = saveAsString();
}

function save()
{
   return JSON.clone(character);
}

function loadFile()
{
   var filePath = document.getElementById('file-chooser').files[0];
   if (undefined === filePath || null === filePath) return;  //no file to load
   var oFReader = new FileReader();  //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
   oFReader.readAsText(filePath);
   oFReader.onload = function (oFREvent) {loadFromString(oFREvent.target.result);};
}

function loadFromTextArea()
{
   loadFromString(document.getElementById('code-box').value);
}

function loadFromString(fileString)
{
   fileString = fileString.trim();
   if ('' === fileString) return;  //ignore

   var jsonDoc;
   try
   {
      jsonDoc = JSON.parse(fileString);
      document.getElementById('code-box').value = '';
   }
   catch (e)
   {
      alert('A parsing error has occurred. The document you provided is not legal JSON.\n\n' + e);
      //yeah I know the error message is completely unhelpful but there's nothing more I can do
      throw e;  //stop the process and cause a console.error
   }

   load(jsonDoc);
}

function load(jsonDoc)
{
   charCalc.stats = {
      //see character for base
      addend: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
      multiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1},
      final: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}
   };
   //character = jsonDoc  don't do this: we don't want to keep redundant fields
   //gameVersion, parserVersion are ignored until there is reason to use them
   document.getElementById('name').value = character.name = jsonDoc.name;
   if (null === jsonDoc.adept)
   {
      document.getElementById('adeptSelect').value = 'none';
      character.adept = null;
   }
   else document.getElementById('adeptSelect').value = character.adept = jsonDoc.adept;
   document.getElementById('combatTypeSelect').value = character.combatType = jsonDoc.combatType;
   document.getElementById('backgroundSelect').value = character.background = jsonDoc.background;
   document.getElementById('level').value = character.level = jsonDoc.level;
   document.getElementById('hp').value = character.stats.hp = jsonDoc.stats.hp;
   document.getElementById('pp').value = character.stats.pp = jsonDoc.stats.pp;
   document.getElementById('attack').value = character.stats.attack = jsonDoc.stats.attack;
   document.getElementById('defense').value = character.stats.defense = jsonDoc.stats.defense;
   document.getElementById('agility').value = character.stats.agility = jsonDoc.stats.agility;
   document.getElementById('luck').value = character.stats.luck = jsonDoc.stats.luck;
   charCalc.djinn = {
      counts: {earth: 0, fire: 0, ice: 0, wind: 0},
      names: [],
      //see character for state
      set: [],
      standby: [],
      recovery: []
   };
   character.djinn = jsonDoc.djinn;
   charCalc.djinn.names = Object.keys(character.djinn);
   character.equipment = jsonDoc.equipment;

   var i;
   for (i = 0; i < charCalc.djinn.names.length; ++i)
   {
      var djinnName = charCalc.djinn.names[i];
      updateDjinn(djinnName, character.djinn[djinnName], 'remove');
   }
   for (i = 0; i < character.equipment.length; ++i)
   {
      var equipment = database.equipment[character.equipment[i]];
      charCalc.stats.addend.hp += equipment.statsAddend.hp;
      charCalc.stats.addend.pp += equipment.statsAddend.pp;
      charCalc.stats.addend.attack += equipment.statsAddend.attack;
      charCalc.stats.addend.defense += equipment.statsAddend.defense;
      charCalc.stats.addend.agility += equipment.statsAddend.agility;
      charCalc.stats.addend.luck += equipment.statsAddend.luck;
   }
   updateAllFinalStats();
}

function updateLevel()
{
   character.level = Number.parseInt(document.getElementById('level').value);
   updatePsynergy();
}

function updateAdept()
{
   /*
   var equipment = database.elements[character.adept];
   charCalc.stats.addend.hp -= equipment.statsAddend.hp;
   charCalc.stats.addend.pp -= equipment.statsAddend.pp;
   charCalc.stats.addend.attack -= equipment.statsAddend.attack;
   charCalc.stats.addend.defense -= equipment.statsAddend.defense;
   charCalc.stats.addend.agility -= equipment.statsAddend.agility;
   charCalc.stats.addend.luck -= equipment.statsAddend.luck;

   charCalc.stats.addend.hp += equipment.statsAddend.hp;
   charCalc.stats.addend.pp += equipment.statsAddend.pp;
   charCalc.stats.addend.attack += equipment.statsAddend.attack;
   charCalc.stats.addend.defense += equipment.statsAddend.defense;
   charCalc.stats.addend.agility += equipment.statsAddend.agility;
   charCalc.stats.addend.luck += equipment.statsAddend.luck;
   */
   //TODO: I'm thinking I need react to manage state for me

   character.adept = document.getElementById('adeptSelect').value;
   //this is an option in the select
   if ('none' === character.adept) character.adept = null;
   updateAllFinalStats();
}

function updateBackground()
{
   character.background = document.getElementById('backgroundSelect').value;
}

function updateCombatType()
{
   character.combatType = document.getElementById('combatTypeSelect').value;
   updateAllFinalStats();
}

function updateCharacterName()
{
   character.name = document.getElementById('name').value;
}

function updateBaseStat(onChangeEvent)
{
   var stat = onChangeEvent.target.id;
   character.stats[stat] = Number.parseInt(document.getElementById(stat).value);
   updateFinalStat(stat);
}

function updateFinalStat(stat)
{
   charCalc.stats.final[stat] = (character.stats[stat] + charCalc.stats.addend[stat]) * charCalc.stats.multiplier[stat];
   document.getElementById(stat + '-final').innerHTML = '' + Math.round(charCalc.stats.final[stat]);
}

function determineClass(adept, combatType, djinnCount)
{
   if (null === adept || undefined === database.classes.byRequirement[adept]
      || undefined === database.classes.byRequirement[adept][combatType])
   {
      return {
         name: null,
         //need to return all 1 for updateClass
         statsMultiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1}
      };
   }

   var classList = database.classes.byRequirement[adept][combatType]
   //remove classes you don't qualify for
   .filter((newClass) =>
   {
      var requirementsInQuestion = newClass.requirements[adept][combatType];

      return (
         djinnCount.earth >= requirementsInQuestion.earth &&
         djinnCount.fire >= requirementsInQuestion.fire &&
         djinnCount.ice >= requirementsInQuestion.ice &&
         djinnCount.wind >= requirementsInQuestion.wind
      );
   })
   .sorted((class1, class2) =>
   {
      if (class1.totalDjinn > class2.totalDjinn) return -1;
      if (class1.totalDjinn < class2.totalDjinn) return 1;

      var req1 = class1.requirements[adept][combatType];
      var req2 = class2.requirements[adept][combatType];

      if (req1[adept] > req2[adept]) return -1;
      if (req1[adept] < req2[adept]) return 1;

      var elementOrder = classElementSortOrder[adept];
      if (req1[elementOrder[0]] > req2[elementOrder[0]]) return -1;
      if (req1[elementOrder[0]] < req2[elementOrder[0]]) return 1;

      if (req1[elementOrder[1]] > req2[elementOrder[1]]) return -1;
      if (req1[elementOrder[1]] < req2[elementOrder[1]]) return 1;

      //2 is a no-op since they have same totalDjinn
      if (req1[elementOrder[2]] > req2[elementOrder[2]]) return -1;
      if (req1[elementOrder[2]] < req2[elementOrder[2]]) return 1;

      return 0;
   });
   return classList[0];
}

var classElementSortOrder = {
   //element => symbiotic, neutral, conflict
   earth: ['fire', 'ice', 'wind'],
   fire: ['earth', 'wind', 'ice'],
   ice: ['wind', 'earth', 'fire'],
   wind: ['ice', 'fire', 'earth']
};

function updateClass()
{
   var activeClass = determineClass(character.adept, character.combatType, charCalc.djinn.counts);
   charCalc.activeClass = activeClass.name;
   charCalc.stats.multiplier.hp = activeClass.statsMultiplier.hp;
   charCalc.stats.multiplier.pp = activeClass.statsMultiplier.pp;
   charCalc.stats.multiplier.attack = activeClass.statsMultiplier.attack;
   charCalc.stats.multiplier.defense = activeClass.statsMultiplier.defense;
   charCalc.stats.multiplier.agility = activeClass.statsMultiplier.agility;
   charCalc.stats.multiplier.luck = activeClass.statsMultiplier.luck;

   if (null === activeClass.name) document.getElementById('class').innerHTML = 'None';
   else document.getElementById('class').innerHTML = '' + activeClass.name;
}

function updatePsynergy()
{
   var psynergyList = [];
   if (null !== charCalc.activeClass)
   {
      var activeClass = database.classes[charCalc.activeClass];
      //if (undefined === activeClass) return;  //should only be when class is none
      for (var i = 0; i < activeClass.psynergy.length; ++i)
      {
         var psynergy = activeClass.psynergy[i];
         if (character.level >= psynergy.level)
         {
            psynergyList.push(psynergy.name);
         }
      }
   }
   renderPsynergy(psynergyList);
}

function updateAllFinalStats()
{
   renderDjinn(charCalc.djinn.names);
   renderEquipment(character.equipment);
   updateClass();
   updatePsynergy();
   updateFinalStat('hp');
   updateFinalStat('pp');
   updateFinalStat('attack');
   updateFinalStat('defense');
   updateFinalStat('agility');
   updateFinalStat('luck');
}

function addDjinn(onClickEvent)
{
   var newName = onClickEvent.target.value;
   var djinn = database.djinn[newName];
   charCalc.djinn.names.push(newName);
   charCalc.djinn.set.push(newName);
   character.djinn[newName] = 'set';

   charCalc.stats.addend.hp += djinn.statsAddend.hp;
   charCalc.stats.addend.pp += djinn.statsAddend.pp;
   charCalc.stats.addend.attack += djinn.statsAddend.attack;
   charCalc.stats.addend.defense += djinn.statsAddend.defense;
   charCalc.stats.addend.agility += djinn.statsAddend.agility;
   charCalc.stats.addend.luck += djinn.statsAddend.luck;
   ++charCalc.djinn.counts[djinn.element];

   updateAllFinalStats();
}

function onChangeUpdateDjinn(onClickEvent)
{
   var djinnName = onClickEvent.target.parentNode.dataset.name;
   var action = onClickEvent.target.value;
   updateDjinn(djinnName, action, character.djinn[djinnName]);
}

function updateDjinn(djinnName, action, previousState)
{
   var djinn = database.djinn[djinnName];

   if ('set' === previousState)
   {
      charCalc.stats.addend.hp -= djinn.statsAddend.hp;
      charCalc.stats.addend.pp -= djinn.statsAddend.pp;
      charCalc.stats.addend.attack -= djinn.statsAddend.attack;
      charCalc.stats.addend.defense -= djinn.statsAddend.defense;
      charCalc.stats.addend.agility -= djinn.statsAddend.agility;
      charCalc.stats.addend.luck -= djinn.statsAddend.luck;
      --charCalc.djinn.counts[djinn.element];
   }
   else if ('set' === action)
   {
      charCalc.stats.addend.hp += djinn.statsAddend.hp;
      charCalc.stats.addend.pp += djinn.statsAddend.pp;
      charCalc.stats.addend.attack += djinn.statsAddend.attack;
      charCalc.stats.addend.defense += djinn.statsAddend.defense;
      charCalc.stats.addend.agility += djinn.statsAddend.agility;
      charCalc.stats.addend.luck += djinn.statsAddend.luck;
      ++charCalc.djinn.counts[djinn.element];
   }

   //if Standby/Recovery do nothing

   //previous remove is only possible when loading
   if ('remove' !== previousState) charCalc.djinn[previousState].removeByValue(djinnName);

   if ('remove' === action)
   {
      charCalc.djinn.names.removeByValue(djinnName);
   }
   else
   {
      character.djinn[djinnName] = action;
      charCalc.djinn[action].push(djinnName);
   }

   updateAllFinalStats();
}

function addEquipment(onClickEvent)
{
   var newName = onClickEvent.target.value;
   var equipment = database.equipment[newName];
   character.equipment.push(newName);

   charCalc.stats.addend.hp += equipment.statsAddend.hp;
   charCalc.stats.addend.pp += equipment.statsAddend.pp;
   charCalc.stats.addend.attack += equipment.statsAddend.attack;
   charCalc.stats.addend.defense += equipment.statsAddend.defense;
   charCalc.stats.addend.agility += equipment.statsAddend.agility;
   charCalc.stats.addend.luck += equipment.statsAddend.luck;

   updateAllFinalStats();
}

function removeEquipment(onClickEvent)
{
   var oldName = onClickEvent.target.parentNode.dataset.name;
   var equipment = database.equipment[oldName];
   character.equipment.removeByValue(oldName);

   charCalc.stats.addend.hp -= equipment.statsAddend.hp;
   charCalc.stats.addend.pp -= equipment.statsAddend.pp;
   charCalc.stats.addend.attack -= equipment.statsAddend.attack;
   charCalc.stats.addend.defense -= equipment.statsAddend.defense;
   charCalc.stats.addend.agility -= equipment.statsAddend.agility;
   charCalc.stats.addend.luck -= equipment.statsAddend.luck;

   updateAllFinalStats();
}
