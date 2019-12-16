'use strict';

function CharacterApp()
{
   //for class: (rename to this.#charCalc etc. can make some methods static)
   //#charCalc; static #classElementSortOrder; state;

   var charCalc = {
      activeClass: null,
      stats: {
         //see character for base
         addend: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
         multiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1},
         final: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}
      },
      djinn: {
         counts: {earth: 0, fire: 0, ice: 0, wind: 0},
         names: [],
         //see character for state
         set: [],
         standby: [],
         recovery: []
      }
   };
   var classElementSortOrder = {
      //element => symbiotic, neutral, conflict
      earth: ['fire', 'ice', 'wind'],
      fire: ['earth', 'wind', 'ice'],
      ice: ['wind', 'earth', 'fire'],
      wind: ['ice', 'fire', 'earth']
   };

   this.state = {
      //gameVersion, parserVersion are ignored until there is reason to use them
      //gameVersion, parserVersion are strings to support possible future semantic versioning
      //gameVersion: '1',
      //parserVersion: '1',
      name: '',
      adept: database.elementOrder[0],
      combatType: database.combatTypes.names[0],
      background: database.backgrounds.names[0],
      level: 1,
      stats: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
      djinn: {},
      equipment: []
   };

   this.saveToFile = function ()
   {
      var link = document.getElementById('save-to-file-link');
      link.download = document.getElementById('name').value + '.json';
      link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(this.saveAsString());
   };

   this.saveAsString = function ()
   {
      return JSON.stringify(this.save());
   };

   this.saveToTextArea = function ()
   {
      document.getElementById('code-box').value = this.saveAsString();
   };

   this.save = function ()
   {
      return JSON.clone(this.state);
   };

   this.loadFile = function ()
   {
      var filePath = document.getElementById('file-chooser').files[0];
      if (undefined === filePath || null === filePath) return;  //no file to load
      var oFReader = new FileReader();  //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
      oFReader.readAsText(filePath);
      oFReader.onload = function (oFREvent) {character.loadFromString(oFREvent.target.result);};
   };

   this.loadFromTextArea = function ()
   {
      this.loadFromString(document.getElementById('code-box').value);
   };

   this.loadFromString = function (fileString)
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

      this.load(jsonDoc);
   };

   this.load = function (jsonDoc)
   {
      charCalc.stats = {
         //see this.state for base
         addend: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
         multiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1},
         final: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}
      };
      //this.state = jsonDoc  don't do this: we don't want to keep redundant fields
      //gameVersion, parserVersion are ignored until there is reason to use them
      document.getElementById('name').value = this.state.name = jsonDoc.name;
      if (null === jsonDoc.adept)
      {
         document.getElementById('adeptSelect').value = 'none';
         this.state.adept = null;
      }
      else document.getElementById('adeptSelect').value = this.state.adept = jsonDoc.adept;
      document.getElementById('combatTypeSelect').value = this.state.combatType = jsonDoc.combatType;
      document.getElementById('backgroundSelect').value = this.state.background = jsonDoc.background;
      document.getElementById('level').value = this.state.level = jsonDoc.level;
      document.getElementById('hp').value = this.state.stats.hp = jsonDoc.stats.hp;
      document.getElementById('pp').value = this.state.stats.pp = jsonDoc.stats.pp;
      document.getElementById('attack').value = this.state.stats.attack = jsonDoc.stats.attack;
      document.getElementById('defense').value = this.state.stats.defense = jsonDoc.stats.defense;
      document.getElementById('agility').value = this.state.stats.agility = jsonDoc.stats.agility;
      document.getElementById('luck').value = this.state.stats.luck = jsonDoc.stats.luck;
      charCalc.djinn = {
         counts: {earth: 0, fire: 0, ice: 0, wind: 0},
         names: [],
         //see this.state for state
         set: [],
         standby: [],
         recovery: []
      };
      this.state.djinn = jsonDoc.djinn;
      charCalc.djinn.names = Object.keys(this.state.djinn);
      this.state.equipment = jsonDoc.equipment;

      var i;
      for (i = 0; i < charCalc.djinn.names.length; ++i)
      {
         var djinnName = charCalc.djinn.names[i];
         this.updateDjinn(djinnName, this.state.djinn[djinnName], 'remove');
      }
      for (i = 0; i < this.state.equipment.length; ++i)
      {
         var equipment = database.equipment[this.state.equipment[i]];
         charCalc.stats.addend.hp += equipment.statsAddend.hp;
         charCalc.stats.addend.pp += equipment.statsAddend.pp;
         charCalc.stats.addend.attack += equipment.statsAddend.attack;
         charCalc.stats.addend.defense += equipment.statsAddend.defense;
         charCalc.stats.addend.agility += equipment.statsAddend.agility;
         charCalc.stats.addend.luck += equipment.statsAddend.luck;
      }
      this.updateAllFinalStats();
   };

   this.updateLevel = function ()
   {
      this.state.level = Number.parseInt(document.getElementById('level').value);
      this.updatePsynergy();
   };

   this.updateAdept = function ()
   {
      /*
      var equipment = database.elements[this.state.adept];
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

      this.state.adept = document.getElementById('adeptSelect').value;
      //this is an option in the select
      if ('none' === this.state.adept) this.state.adept = null;
      this.updateAllFinalStats();
   };

   this.updateBackground = function ()
   {
      this.state.background = document.getElementById('backgroundSelect').value;
   };

   this.updateCombatType = function ()
   {
      this.state.combatType = document.getElementById('combatTypeSelect').value;
      this.updateAllFinalStats();
   };

   this.updateCharacterName = function ()
   {
      this.state.name = document.getElementById('name').value;
   };

   this.updateBaseStat = function (onChangeEvent)
   {
      var stat = onChangeEvent.target.id;
      this.state.stats[stat] = Number.parseInt(document.getElementById(stat).value);
      this.updateFinalStat(stat);
   };

   this.updateFinalStat = function (stat)
   {
      charCalc.stats.final[stat] = (this.state.stats[stat] + charCalc.stats.addend[stat]) * charCalc.stats.multiplier[stat];
      document.getElementById(stat + '-final').innerHTML = '' + Math.round(charCalc.stats.final[stat]);
   };

   this.determineClass = function (adept, combatType, djinnCount)
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
   };

   this.updateClass = function ()
   {
      var activeClass = this.determineClass(this.state.adept, this.state.combatType, charCalc.djinn.counts);
      charCalc.activeClass = activeClass.name;
      charCalc.stats.multiplier.hp = activeClass.statsMultiplier.hp;
      charCalc.stats.multiplier.pp = activeClass.statsMultiplier.pp;
      charCalc.stats.multiplier.attack = activeClass.statsMultiplier.attack;
      charCalc.stats.multiplier.defense = activeClass.statsMultiplier.defense;
      charCalc.stats.multiplier.agility = activeClass.statsMultiplier.agility;
      charCalc.stats.multiplier.luck = activeClass.statsMultiplier.luck;

      if (null === activeClass.name) document.getElementById('class').innerHTML = 'None';
      else document.getElementById('class').innerHTML = '' + activeClass.name;
   };

   this.updatePsynergy = function ()
   {
      var psynergyList = [];
      if (null !== charCalc.activeClass)
      {
         var activeClass = database.classes[charCalc.activeClass];
         //if (undefined === activeClass) return;  //should only be when class is none
         for (var i = 0; i < activeClass.psynergy.length; ++i)
         {
            var psynergy = activeClass.psynergy[i];
            if (this.state.level >= psynergy.level)
            {
               psynergyList.push(psynergy.name);
            }
         }
      }
      renderPsynergy(psynergyList);
   };

   this.updateAllFinalStats = function ()
   {
      renderDjinn(charCalc.djinn.names);
      renderEquipment(this.state.equipment);
      this.updateClass();
      this.updatePsynergy();
      this.updateFinalStat('hp');
      this.updateFinalStat('pp');
      this.updateFinalStat('attack');
      this.updateFinalStat('defense');
      this.updateFinalStat('agility');
      this.updateFinalStat('luck');
   };

   this.addDjinn = function (onClickEvent)
   {
      var newName = onClickEvent.target.value;
      var djinn = database.djinn[newName];
      charCalc.djinn.names.push(newName);
      charCalc.djinn.set.push(newName);
      this.state.djinn[newName] = 'set';

      charCalc.stats.addend.hp += djinn.statsAddend.hp;
      charCalc.stats.addend.pp += djinn.statsAddend.pp;
      charCalc.stats.addend.attack += djinn.statsAddend.attack;
      charCalc.stats.addend.defense += djinn.statsAddend.defense;
      charCalc.stats.addend.agility += djinn.statsAddend.agility;
      charCalc.stats.addend.luck += djinn.statsAddend.luck;
      ++charCalc.djinn.counts[djinn.element];

      this.updateAllFinalStats();
   };

   this.onChangeUpdateDjinn = function (onClickEvent)
   {
      var djinnName = onClickEvent.target.parentNode.dataset.name;
      var action = onClickEvent.target.value;
      this.updateDjinn(djinnName, action, this.state.djinn[djinnName]);
   };

   this.updateDjinn = function (djinnName, action, previousState)
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
         this.state.djinn[djinnName] = action;
         charCalc.djinn[action].push(djinnName);
      }

      this.updateAllFinalStats();
   };

   this.addEquipment = function (onClickEvent)
   {
      var newName = onClickEvent.target.value;
      var equipment = database.equipment[newName];
      this.state.equipment.push(newName);

      charCalc.stats.addend.hp += equipment.statsAddend.hp;
      charCalc.stats.addend.pp += equipment.statsAddend.pp;
      charCalc.stats.addend.attack += equipment.statsAddend.attack;
      charCalc.stats.addend.defense += equipment.statsAddend.defense;
      charCalc.stats.addend.agility += equipment.statsAddend.agility;
      charCalc.stats.addend.luck += equipment.statsAddend.luck;

      this.updateAllFinalStats();
   };

   this.removeEquipment = function (onClickEvent)
   {
      var oldName = onClickEvent.target.parentNode.dataset.name;
      var equipment = database.equipment[oldName];
      this.state.equipment.removeByValue(oldName);

      charCalc.stats.addend.hp -= equipment.statsAddend.hp;
      charCalc.stats.addend.pp -= equipment.statsAddend.pp;
      charCalc.stats.addend.attack -= equipment.statsAddend.attack;
      charCalc.stats.addend.defense -= equipment.statsAddend.defense;
      charCalc.stats.addend.agility -= equipment.statsAddend.agility;
      charCalc.stats.addend.luck -= equipment.statsAddend.luck;

      this.updateAllFinalStats();
   };
}
