'use strict';

class CharacterApp extends React.Component
{
   //TODO: make class things private and static
   //rename to this.#charCalc etc. can make some methods static
   //static #classElementSortOrder; state;
   classElementSortOrder;
   state;

   constructor(props)
   {
      super(props);
      character = this;

      this.classElementSortOrder = {
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

      this.saveToFile = this.saveToFile.bind(this);
      this.saveAsString = this.saveAsString.bind(this);
      this.saveToTextArea = this.saveToTextArea.bind(this);
      this.save = this.save.bind(this);
      this.loadFile = this.loadFile.bind(this);
      this.loadFromTextArea = this.loadFromTextArea.bind(this);
      this.loadFromString = this.loadFromString.bind(this);
      this.load = this.load.bind(this);
      this.updateLevel = this.updateLevel.bind(this);
      this.updateAdept = this.updateAdept.bind(this);
      this.updateBackground = this.updateBackground.bind(this);
      this.updateCombatType = this.updateCombatType.bind(this);
      this.updateCharacterName = this.updateCharacterName.bind(this);
      this.updateBaseStat = this.updateBaseStat.bind(this);
      this.determineClass = this.determineClass.bind(this);
      this.updateClass = this.updateClass.bind(this);
      this.calcPsynergy = this.calcPsynergy.bind(this);
      this.calcAll = this.calcAll.bind(this);
      this.addDjinn = this.addDjinn.bind(this);
      this.onChangeUpdateDjinn = this.onChangeUpdateDjinn.bind(this);
      this.updateDjinn = this.updateDjinn.bind(this);
      this.addEquipment = this.addEquipment.bind(this);
      this.removeEquipment = this.removeEquipment.bind(this);
   }

   saveToFile()
   {
      var link = document.getElementById('save-to-file-link');
      link.download = document.getElementById('name').value + '.json';
      link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(this.saveAsString());
   }

   saveAsString()
   {
      return JSON.stringify(this.save());
   }

   saveToTextArea()
   {
      document.getElementById('code-box').value = this.saveAsString();
   }

   save()
   {
      return JSON.clone(this.state);
   }

   loadFile()
   {
      var filePath = document.getElementById('file-chooser').files[0];
      if (undefined === filePath || null === filePath) return;  //no file to load
      var oFReader = new FileReader();  //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
      oFReader.readAsText(filePath);
      oFReader.onload = function (oFREvent) {character.loadFromString(oFREvent.target.result);};
   }

   loadFromTextArea()
   {
      this.loadFromString(document.getElementById('code-box').value);
   }

   loadFromString(fileString)
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
   }

   load(jsonDoc)
   {
      //this.state = jsonDoc  don't do this: we don't want to keep redundant fields
      var newState = {
         stats: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0},
         djinn: {},
         equipment: []
      };
      //gameVersion, parserVersion are ignored until there is reason to use them
      document.getElementById('name').value = newState.name = jsonDoc.name;
      if (null === jsonDoc.adept)
      {
         document.getElementById('adeptSelect').value = 'none';
         newState.adept = null;
      }
      else document.getElementById('adeptSelect').value = newState.adept = jsonDoc.adept;
      document.getElementById('combatTypeSelect').value = newState.combatType = jsonDoc.combatType;
      document.getElementById('backgroundSelect').value = newState.background = jsonDoc.background;
      document.getElementById('level').value = newState.level = jsonDoc.level;
      document.getElementById('hp').value = newState.stats.hp = jsonDoc.stats.hp;
      document.getElementById('pp').value = newState.stats.pp = jsonDoc.stats.pp;
      document.getElementById('attack').value = newState.stats.attack = jsonDoc.stats.attack;
      document.getElementById('defense').value = newState.stats.defense = jsonDoc.stats.defense;
      document.getElementById('agility').value = newState.stats.agility = jsonDoc.stats.agility;
      document.getElementById('luck').value = newState.stats.luck = jsonDoc.stats.luck;
      newState.djinn = jsonDoc.djinn;
      newState.equipment = jsonDoc.equipment;
      this.setState(newState);
   }

   updateLevel()
   {
      var level = Number.parseInt(document.getElementById('level').value);
      this.setState({level: level});
   }

   updateAdept()
   {
      var adept = document.getElementById('adeptSelect').value;
      //this is an option in the select
      if ('none' === adept) adept = null;
      this.setState({adept: adept});
   }

   updateBackground()
   {
      var background = document.getElementById('backgroundSelect').value;
      this.setState({background: background});
   }

   updateCombatType()
   {
      var combatType = document.getElementById('combatTypeSelect').value;
      this.setState({combatType: combatType});
   }

   updateCharacterName()
   {
      var name = document.getElementById('name').value;
      this.setState({name: name});
   }

   updateBaseStat(onChangeEvent)
   {
      var stat = onChangeEvent.target.id;
      var newVal = Number.parseInt(document.getElementById(stat).value);
      this.setState((state, props) =>
      {
         state.stats[stat] = newVal;
         return state;
      });
   }

   determineClass(adept, combatType, djinnCount)
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

         var elementOrder = this.classElementSortOrder[adept];
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

   updateClass(charCalc)
   {
      var activeClass = this.determineClass(this.state.adept, this.state.combatType, charCalc.djinn.counts);
      charCalc.activeClass = activeClass.name;

      if (null === activeClass.name) charCalc.activeClassDisplay = 'None';
      else charCalc.activeClassDisplay = '' + activeClass.name;

      return activeClass.statsMultiplier;
   }

   calcPsynergy(activeClassName)
   {
      var psynergyList = [];
      if (null !== activeClassName)
      {
         var activeClass = database.classes[activeClassName];
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
      return psynergyList;
   }

   calcAll()
   {
      var statList = ['hp', 'pp', 'attack', 'defense', 'agility', 'luck'];
      //these are final stats
      var charCalc = {stats: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}};
      charCalc.djinn = {
         counts: {earth: 0, fire: 0, ice: 0, wind: 0},
         names: []
         //see this.state for state
         /*set: [], might be useful for summon but not used now
         standby: [],
         recovery: []*/
      };
      charCalc.djinn.names = Object.keys(this.state.djinn);

      var addend = {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0};
      for (var djinnName of charCalc.djinn.names)
      {
         var djinnState = this.state.djinn[djinnName];
         if ('set' === djinnState)
         {
            var djinn = database.djinn[djinnName];
            statList.forEach(stat =>
               {addend[stat] += djinn.statsAddend[stat];}
            );
            ++charCalc.djinn.counts[djinn.element];
         }
         //charCalc.djinn[djinnState].push(djinnName);
      }
      for (var equipmentName of this.state.equipment)
      {
         var equipment = database.equipment[equipmentName];
         statList.forEach(stat =>
            {addend[stat] += equipment.statsAddend[stat];}
         );
      }
      var multiplier = this.updateClass(charCalc);
      charCalc.psynergy = this.calcPsynergy(charCalc.activeClass);
      statList.forEach(stat =>
         {charCalc.stats[stat] = (this.state.stats[stat] + addend[stat]) * multiplier[stat];}
      );

      return charCalc;
   }

   addDjinn(onClickEvent)
   {
      var newName = onClickEvent.target.value;
      this.setState((state, props) =>
      {
         state.djinn[newName] = 'set';
         return state;
      });
   }

   onChangeUpdateDjinn(onClickEvent)
   {
      var djinnName = onClickEvent.target.parentNode.dataset.name;
      var action = onClickEvent.target.value;
      this.updateDjinn(djinnName, action);
   }

   updateDjinn(djinnName, action)
   {
      if ('remove' === action)
      {
         this.setState((state, props) =>
         {
            delete state.djinn[djinnName];
            return state;
         });
      }
      else
      {
         this.setState((state, props) =>
         {
            state.djinn[djinnName] = action;
            return state;
         });
      }
   }

   addEquipment(onClickEvent)
   {
      var newName = onClickEvent.target.value;
      this.setState((state, props) =>
      {
         state.equipment.push(newName);
         return state;
      });
   }

   removeEquipment(onClickEvent)
   {
      var oldName = onClickEvent.target.parentNode.dataset.name;
      this.setState((state, props) =>
      {
         state.equipment.removeByValue(oldName);
         return state;
      });
   }

   render()
   {
      var charCalc = this.calcAll();
      return (
         <div>
            <h2>General</h2>
            <label>Name: <input type="text" id="name" value={this.state.name}
                                onChange={this.updateCharacterName} /></label><br />
            <label>Adept (Elemental Alignment):
               <ElementOptions names={database.elements.names} onChange={this.updateAdept} /></label>
            <br />
            <label>Combat type:
               <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect"
                                              onChange={this.updateCombatType} /></label>
            <br />
            <label>Background:
               <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect"
                                              onChange={this.updateBackground} /></label>
            <br />
            <label>Level: <input type="number" id="level" value={this.state.level} min="1"
                                 onChange={this.updateLevel} /></label><br />
            <h2>Base stats</h2>
            <label>HP: <input type="number" id="hp" onChange={this.updateBaseStat}
                              defaultValue={"0"} value={this.state.hp} min="0" /></label><br />
            <label>PP: <input type="number" id="pp" onChange={this.updateBaseStat} defaultValue={"0"}
                              value={this.state.pp} min="0" /></label><br />
            <label>Attack: <input type="number" id="attack" onChange={this.updateBaseStat}
                                  defaultValue={"0"} value={this.state.attack} min="0" /></label><br />
            <label>Defense: <input type="number" id="defense" onChange={this.updateBaseStat}
                                   defaultValue={"0"} value={this.state.defense} min="0" /></label><br />
            <label>Agility: <input type="number" id="agility" onChange={this.updateBaseStat}
                                   defaultValue={"0"} value={this.state.agility} min="0" /></label><br />
            <label>Luck: <input type="number" id="luck" onChange={this.updateBaseStat}
                                defaultValue={"0"} value={this.state.luck}
                                min="0" /></label><br />
            <h2>Djinn</h2>
            <DjinnEntireList names={charCalc.djinn.names} />
            <h2>Equipment</h2>
            <EquipmentList names={this.state.equipment} />
            <h2>Final stats</h2>
            Class: {charCalc.activeClassDisplay}<br />
            HP: {Math.round(charCalc.stats.hp)}<br />
            PP: {Math.round(charCalc.stats.pp)}<br />
            Attack: {Math.round(charCalc.stats.attack)}<br />
            Defense: {Math.round(charCalc.stats.defense)}<br />
            Agility: {Math.round(charCalc.stats.agility)}<br />
            Luck: {Math.round(charCalc.stats.luck)}<br />
            <h2>Psynergy</h2>
            <PsynergyList names={charCalc.psynergy} />
            <br /><br />
            <span onClick={this.saveToFile}><a
               href="javascript:alert('This link changes to data as you click it');"
               download=""
               id="save-to-file-link">Save to File</a></span>
            <input type="button" value="Save To Text Area" onClick={this.saveToTextArea}
                   id="save-text-button" />
            <br />
            <input type="file" id="file-chooser" accept=".js,.json" /><br />
            <input type="button" value="Load from File" onClick={this.loadFile} />
            <input type="button" value="Load from Text Area" onClick={this.loadFromTextArea}
                   id="load-text-button" /><br />
            <br />
            <textarea id="code-box" rows="10" cols="50"></textarea>
         </div>
      );
   }
}

ReactDOM.render(
   <CharacterApp />,
   document.getElementById('characterDiv')
);
