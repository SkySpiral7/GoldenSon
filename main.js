function saveToFile() {
   var link = document.getElementById('save-to-file-link');
   link.download = document.getElementById('name').value + '.json';
   link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(saveAsString());
}

function saveAsString() {
   return JSON.stringify(save());
}

function saveToTextArea() {
   document.getElementById('code-box').value = saveAsString();
}

function save() {
   var jsonDoc = {stats: {}};
   //gameVersion, parserVersion are ignored until there is reason to use them
   //gameVersion, parserVersion are strings to support possible future semantic versioning
   //jsonDoc.gameVersion = '1';
   //jsonDoc.parserVersion = '1';
   jsonDoc.name = character.name;
   jsonDoc.adept = character.adept;
   jsonDoc.combatType = character.combatType;
   jsonDoc.background = character.background;
   jsonDoc.level = character.level;
   jsonDoc.stats.hp = character.stats.base.hp;
   jsonDoc.stats.pp = character.stats.base.pp;
   jsonDoc.stats.attack = character.stats.base.attack;
   jsonDoc.stats.defense = character.stats.base.defense;
   jsonDoc.stats.agility = character.stats.base.agility;
   jsonDoc.stats.luck = character.stats.base.luck;
   jsonDoc.djinn = character.djinn.names;
   jsonDoc.equipment = character.equipment;
   return jsonDoc;
}

function loadFile() {
   var filePath = document.getElementById('file-chooser').files[0];
   if (undefined === filePath || null === filePath) return;  //no file to load
   var oFReader = new FileReader();  //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
   oFReader.readAsText(filePath);
   oFReader.onload = function (oFREvent) {
      loadFromString(oFREvent.target.result);
   };
}

function loadFromTextArea() {
   loadFromString(document.getElementById('code-box').value);
}

function loadFromString(fileString) {
   fileString = fileString.trim();
   if ('' === fileString) return;  //ignore

   var jsonDoc;
   try {
      jsonDoc = JSON.parse(fileString);
      document.getElementById('code-box').value = '';
   }
   catch (e) {
      alert('A parsing error has occurred. The document you provided is not legal JSON.\n\n' + e);
      //yeah I know the error message is completely unhelpful but there's nothing more I can do
      throw e;  //stop the process and cause a console.error
   }

   load(jsonDoc);
}

function load(jsonDoc) {
   character.stats = {
      base: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
      addend: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
      multiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1},
      final: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}
   };
   //gameVersion, parserVersion are ignored until there is reason to use them
   document.getElementById('name').value = character.name = jsonDoc.name;
   document.getElementById('adept').value = character.adept = jsonDoc.adept;
   document.getElementById('combatType').value = character.combatType = jsonDoc.combatType;
   document.getElementById('backgroundSelect').value = character.background = jsonDoc.background;
   document.getElementById('level').value = character.level = jsonDoc.level;
   document.getElementById('hp').value = character.stats.base.hp = jsonDoc.stats.hp;
   document.getElementById('pp').value = character.stats.base.pp = jsonDoc.stats.pp;
   document.getElementById('attack').value = character.stats.base.attack = jsonDoc.stats.attack;
   document.getElementById('defense').value = character.stats.base.defense = jsonDoc.stats.defense;
   document.getElementById('agility').value = character.stats.base.agility = jsonDoc.stats.agility;
   document.getElementById('luck').value = character.stats.base.luck = jsonDoc.stats.luck;
   character.djinn.counts = {earth: 0, fire: 0, wind: 0, ice: 0};
   character.djinn.names = jsonDoc.djinn;
   character.equipment = jsonDoc.equipment;

   var i;
   for (i = 0; i < character.djinn.length; ++i) {
      var djinn = database.djinn[character.djinn[i]];
      character.stats.addend.hp += djinn.statsAddend.hp;
      character.stats.addend.pp += djinn.statsAddend.pp;
      character.stats.addend.attack += djinn.statsAddend.attack;
      character.stats.addend.defense += djinn.statsAddend.defense;
      character.stats.addend.agility += djinn.statsAddend.agility;
      character.stats.addend.luck += djinn.statsAddend.luck;
      ++character.djinn.counts[djinn.element];
   }
   for (i = 0; i < character.equipment.length; ++i) {
      var equipment = database.equipment[character.equipment[i]];
      character.stats.addend.hp += equipment.statsAddend.hp;
      character.stats.addend.pp += equipment.statsAddend.pp;
      character.stats.addend.attack += equipment.statsAddend.attack;
      character.stats.addend.defense += equipment.statsAddend.defense;
      character.stats.addend.agility += equipment.statsAddend.agility;
      character.stats.addend.luck += equipment.statsAddend.luck;
   }
   updateAllFinalStats();
}

function updateLevel() {
   character.level = Number.parseInt(document.getElementById('level').value);
   updatePsynergy();
}

function updateAdept() {
   /*
   var equipment = database.adeptTypes[character.adept];
   character.stats.addend.hp -= equipment.statsAddend.hp;
   character.stats.addend.pp -= equipment.statsAddend.pp;
   character.stats.addend.attack -= equipment.statsAddend.attack;
   character.stats.addend.defense -= equipment.statsAddend.defense;
   character.stats.addend.agility -= equipment.statsAddend.agility;
   character.stats.addend.luck -= equipment.statsAddend.luck;

   character.stats.addend.hp += equipment.statsAddend.hp;
   character.stats.addend.pp += equipment.statsAddend.pp;
   character.stats.addend.attack += equipment.statsAddend.attack;
   character.stats.addend.defense += equipment.statsAddend.defense;
   character.stats.addend.agility += equipment.statsAddend.agility;
   character.stats.addend.luck += equipment.statsAddend.luck;
   */
   //TODO: I'm thinking I need react to manage state for me

   character.adept = document.getElementById('adept').value;
   updateAllFinalStats();
}

function updateBackground() {
   character.background = document.getElementById('backgroundSelect').value;
}

function updateCombatType() {
   character.combatType = document.getElementById('combatType').value;
   updateAllFinalStats();
}

function updateBaseStat(stat) {
   character.stats.base[stat] = Number.parseInt(document.getElementById(stat).value);
   updateFinalStat(stat);
}

function updateFinalStat(stat) {
   character.stats.final[stat] = (character.stats.base[stat] + character.stats.addend[stat]) * character.stats.multiplier[stat];
   document.getElementById(stat + '-final').innerHTML = '' + Math.round(character.stats.final[stat]);
}

function updateClass() {
   var activeClass = {
      name: 'None',
      priority: -Infinity,
      statsMultiplier: {hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1},
      psynergy: []
   };
   //TODO: should really use null instead of "none" etc
   if ('none' !== character.adept) {
      for (var i = 0; i < database.classRequirements[character.adept].names.length; ++i) {
         var className = database.classRequirements[character.adept].names[i];
         var newClass = database.classes[className];
         var requirementsInQuestion = database.classRequirements[character.adept][className];

         var hasMatchingCombatType = requirementsInQuestion.combatType.contains(character.combatType);
         var hasEnoughDjinnEquipped = (
            character.djinn.counts.earth >= requirementsInQuestion.djinnCount.earth &&
            character.djinn.counts.fire >= requirementsInQuestion.djinnCount.fire &&
            character.djinn.counts.wind >= requirementsInQuestion.djinnCount.wind &&
            character.djinn.counts.ice >= requirementsInQuestion.djinnCount.ice
         );
         var meetsRequirements = (hasMatchingCombatType && hasEnoughDjinnEquipped);

         if (meetsRequirements &&
            newClass.priority > activeClass.priority) {
            activeClass = newClass;
         }
      }
   }
   character.activeClass = activeClass.name;
   character.stats.multiplier.hp = activeClass.statsMultiplier.hp;
   character.stats.multiplier.pp = activeClass.statsMultiplier.pp;
   character.stats.multiplier.attack = activeClass.statsMultiplier.attack;
   character.stats.multiplier.defense = activeClass.statsMultiplier.defense;
   character.stats.multiplier.agility = activeClass.statsMultiplier.agility;
   character.stats.multiplier.luck = activeClass.statsMultiplier.luck;

   document.getElementById('class').innerHTML = '' + activeClass.name;
}

function updatePsynergy() {
   if ('None' !== character.activeClass) {
      var activeClass = database.classes[character.activeClass];
      character.psynergy = [];
      //if (undefined === activeClass) return;  //should only be when class is none
      for (var i = 0; i < activeClass.psynergy.length; ++i) {
         var psynergy = activeClass.psynergy[i];
         if (character.level >= psynergy.level) {
            character.psynergy.push(psynergy.name);
         }
      }
   }
   renderPsynergy();
}

function updateAllFinalStats() {
   renderDjinn();
   renderEquipment();
   updateClass();
   updatePsynergy();
   updateFinalStat('hp');
   updateFinalStat('pp');
   updateFinalStat('attack');
   updateFinalStat('defense');
   updateFinalStat('agility');
   updateFinalStat('luck');
}

function addDjinn(onClickEvent) {
   var newName = onClickEvent.target.value;
   var djinn = database.djinn[newName];
   character.djinn.names.push(newName);

   character.stats.addend.hp += djinn.statsAddend.hp;
   character.stats.addend.pp += djinn.statsAddend.pp;
   character.stats.addend.attack += djinn.statsAddend.attack;
   character.stats.addend.defense += djinn.statsAddend.defense;
   character.stats.addend.agility += djinn.statsAddend.agility;
   character.stats.addend.luck += djinn.statsAddend.luck;
   ++character.djinn.counts[djinn.element];

   updateAllFinalStats();
}

function removeDjinn(onClickEvent) {
   var oldName = onClickEvent.target.parentNode.dataset.name;
   var djinn = database.djinn[oldName];
   character.djinn.names.removeByValue(oldName);

   character.stats.addend.hp -= djinn.statsAddend.hp;
   character.stats.addend.pp -= djinn.statsAddend.pp;
   character.stats.addend.attack -= djinn.statsAddend.attack;
   character.stats.addend.defense -= djinn.statsAddend.defense;
   character.stats.addend.agility -= djinn.statsAddend.agility;
   character.stats.addend.luck -= djinn.statsAddend.luck;
   --character.djinn.counts[djinn.element];

   updateAllFinalStats();
}

function addEquipment(onClickEvent) {
   var newName = onClickEvent.target.value;
   var equipment = database.equipment[newName];
   character.equipment.push(newName);

   character.stats.addend.hp += equipment.statsAddend.hp;
   character.stats.addend.pp += equipment.statsAddend.pp;
   character.stats.addend.attack += equipment.statsAddend.attack;
   character.stats.addend.defense += equipment.statsAddend.defense;
   character.stats.addend.agility += equipment.statsAddend.agility;
   character.stats.addend.luck += equipment.statsAddend.luck;

   updateAllFinalStats();
}

function removeEquipment(onClickEvent) {
   var oldName = onClickEvent.target.parentNode.dataset.name;
   var equipment = database.equipment[oldName];
   character.equipment.removeByValue(oldName);

   character.stats.addend.hp -= equipment.statsAddend.hp;
   character.stats.addend.pp -= equipment.statsAddend.pp;
   character.stats.addend.attack -= equipment.statsAddend.attack;
   character.stats.addend.defense -= equipment.statsAddend.defense;
   character.stats.addend.agility -= equipment.statsAddend.agility;
   character.stats.addend.luck -= equipment.statsAddend.luck;

   updateAllFinalStats();
}
