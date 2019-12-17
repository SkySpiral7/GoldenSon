'use strict';

class CharacterApp extends React.Component
{
   static _classElementSortOrder = {
      //element => symbiotic, neutral, conflict
      earth: ['fire', 'ice', 'wind'],
      fire: ['earth', 'wind', 'ice'],
      ice: ['wind', 'earth', 'fire'],
      wind: ['ice', 'fire', 'earth']
   };
   state;

   constructor(props)
   {
      super(props);
      character = this;

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

      this._saveToFile = this._saveToFile.bind(this);
      this.saveAsString = this.saveAsString.bind(this);
      this._saveToTextArea = this._saveToTextArea.bind(this);
      this.save = this.save.bind(this);
      this._loadFile = this._loadFile.bind(this);
      this._loadFromTextArea = this._loadFromTextArea.bind(this);
      this._loadFromString = this._loadFromString.bind(this);
      this.load = this.load.bind(this);
      this._updateLevel = this._updateLevel.bind(this);
      this._updateAdept = this._updateAdept.bind(this);
      this._updateBackground = this._updateBackground.bind(this);
      this._updateCombatType = this._updateCombatType.bind(this);
      this._updateCharacterName = this._updateCharacterName.bind(this);
      this._updateBaseStat = this._updateBaseStat.bind(this);
      this._updateClass = this._updateClass.bind(this);
      this._calcAll = this._calcAll.bind(this);
      this.addDjinn = this.addDjinn.bind(this);
      this.onChangeUpdateDjinn = this.onChangeUpdateDjinn.bind(this);
      this._updateDjinn = this._updateDjinn.bind(this);
      this.addEquipment = this.addEquipment.bind(this);
      this.removeEquipment = this.removeEquipment.bind(this);
   }

   _saveToFile()
   {
      const link = document.getElementById('save-to-file-link');
      link.download = document.getElementById('name').value + '.json';
      link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(this.saveAsString());
   }

   //could be private
   saveAsString()
   {
      return JSON.stringify(this.save());
   }

   _saveToTextArea()
   {
      document.getElementById('code-box').value = this.saveAsString();
   }

   save()
   {
      return JSON.clone(this.state);
   }

   //could be static
   _loadFile()
   {
      const filePath = document.getElementById('file-chooser').files[0];
      if (undefined === filePath || null === filePath) return;  //no file to load
      const oFReader = new FileReader();  //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
      oFReader.readAsText(filePath);
      oFReader.onload = function (oFREvent) {character._loadFromString(oFREvent.target.result);};
   }

   _loadFromTextArea()
   {
      this._loadFromString(document.getElementById('code-box').value);
   }

   _loadFromString(fileString)
   {
      fileString = fileString.trim();
      if ('' === fileString) return;  //ignore

      let jsonDoc;
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
      const newState = {
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

   _updateLevel()
   {
      const level = Number.parseInt(document.getElementById('level').value);
      this.setState({level: level});
   }

   _updateAdept()
   {
      let adept = document.getElementById('adeptSelect').value;
      //this is an option in the select
      if ('none' === adept) adept = null;
      this.setState({adept: adept});
   }

   _updateBackground()
   {
      const background = document.getElementById('backgroundSelect').value;
      this.setState({background: background});
   }

   _updateCombatType()
   {
      const combatType = document.getElementById('combatTypeSelect').value;
      this.setState({combatType: combatType});
   }

   _updateCharacterName()
   {
      const name = document.getElementById('name').value;
      this.setState({name: name});
   }

   _updateBaseStat(onChangeEvent)
   {
      const stat = onChangeEvent.target.id;
      const newVal = Number.parseInt(onChangeEvent.target.value);
      this.setState((state) =>
      {
         state.stats[stat] = newVal;
         return state;
      });
   }

   static _determineClass(adept, combatType, djinnCount)
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

      const classList = database.classes.byRequirement[adept][combatType]
      //remove classes you don't qualify for
      .filter((newClass) =>
      {
         const requirementsInQuestion = newClass.requirements[adept][combatType];

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

         const req1 = class1.requirements[adept][combatType];
         const req2 = class2.requirements[adept][combatType];

         if (req1[adept] > req2[adept]) return -1;
         if (req1[adept] < req2[adept]) return 1;

         const elementOrder = CharacterApp._classElementSortOrder[adept];
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

   _updateClass(charCalc)
   {
      const activeClass = CharacterApp._determineClass(this.state.adept, this.state.combatType, charCalc.djinn.counts);
      charCalc.activeClass = activeClass.name;

      if (null === activeClass.name) charCalc.activeClassDisplay = 'None';
      else charCalc.activeClassDisplay = '' + activeClass.name;

      return activeClass.statsMultiplier;
   }

   static _calcPsynergy(activeClassName, level)
   {
      const psynergyList = [];
      if (null !== activeClassName)
      {
         const activeClass = database.classes[activeClassName];
         //if (undefined === activeClass) return;  //should only be when class is none
         for (let i = 0; i < activeClass.psynergy.length; ++i)
         {
            const psynergy = activeClass.psynergy[i];
            if (level >= psynergy.level)
            {
               psynergyList.push(psynergy.name);
            }
         }
      }
      return psynergyList;
   }

   _calcAll()
   {
      const statList = ['hp', 'pp', 'attack', 'defense', 'agility', 'luck'];
      //these are final stats
      const charCalc = {stats: {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0}};
      charCalc.djinn = {
         counts: {earth: 0, fire: 0, ice: 0, wind: 0},
         names: []
         //see this.state for state
         /*set: [], might be useful for summon but not used now
         standby: [],
         recovery: []*/
      };
      charCalc.djinn.names = Object.keys(this.state.djinn);

      const addend = {hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0};
      for (let djinnName of charCalc.djinn.names)
      {
         const djinnState = this.state.djinn[djinnName];
         if ('set' === djinnState)
         {
            const djinn = database.djinn[djinnName];
            statList.forEach(stat =>
               {addend[stat] += djinn.statsAddend[stat];}
            );
            ++charCalc.djinn.counts[djinn.element];
         }
         //charCalc.djinn[djinnState].push(djinnName);
      }
      for (let equipmentName of this.state.equipment)
      {
         const equipment = database.equipment[equipmentName];
         statList.forEach(stat =>
            {addend[stat] += equipment.statsAddend[stat];}
         );
      }
      const multiplier = this._updateClass(charCalc);
      charCalc.psynergy = CharacterApp._calcPsynergy(charCalc.activeClass, this.state.level);
      statList.forEach(stat =>
         {charCalc.stats[stat] = (this.state.stats[stat] + addend[stat]) * multiplier[stat];}
      );

      return charCalc;
   }

   addDjinn(onClickEvent)
   {
      const newName = onClickEvent.target.value;
      this.setState((state) =>
      {
         state.djinn[newName] = 'set';
         return state;
      });
   }

   onChangeUpdateDjinn(onClickEvent)
   {
      const djinnName = onClickEvent.target.parentNode.dataset.name;
      const action = onClickEvent.target.value;
      this._updateDjinn(djinnName, action);
   }

   _updateDjinn(djinnName, action)
   {
      if ('remove' === action)
      {
         this.setState((state) =>
         {
            delete state.djinn[djinnName];
            return state;
         });
      }
      else
      {
         this.setState((state) =>
         {
            state.djinn[djinnName] = action;
            return state;
         });
      }
   }

   addEquipment(onClickEvent)
   {
      const newName = onClickEvent.target.value;
      this.setState((state) =>
      {
         state.equipment.push(newName);
         return state;
      });
   }

   removeEquipment(onClickEvent)
   {
      const oldName = onClickEvent.target.parentNode.dataset.name;
      this.setState((state) =>
      {
         state.equipment.removeByValue(oldName);
         return state;
      });
   }

   render()
   {
      const charCalc = this._calcAll();
      return (
         <div>
            <h2>General</h2>
            <label>Name: <input type="text" id="name" value={this.state.name}
                                onChange={this._updateCharacterName} /></label><br />
            <label>Adept (Elemental Alignment):
               <ElementOptions names={database.elements.names} onChange={this._updateAdept} /></label>
            <br />
            <label>Combat type:
               <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect"
                                              onChange={this._updateCombatType} /></label>
            <br />
            <label>Background:
               <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect"
                                              onChange={this._updateBackground} /></label>
            <br />
            <label>Level: <input type="number" id="level" value={this.state.level} min="1"
                                 onChange={this._updateLevel} /></label><br />
            <h2>Base stats</h2>
            <label>HP: <input type="number" id="hp" onChange={this._updateBaseStat}
                              defaultValue={"0"} value={this.state.hp} min="0" /></label><br />
            <label>PP: <input type="number" id="pp" onChange={this._updateBaseStat} defaultValue={"0"}
                              value={this.state.pp} min="0" /></label><br />
            <label>Attack: <input type="number" id="attack" onChange={this._updateBaseStat}
                                  defaultValue={"0"} value={this.state.attack} min="0" /></label><br />
            <label>Defense: <input type="number" id="defense" onChange={this._updateBaseStat}
                                   defaultValue={"0"} value={this.state.defense} min="0" /></label><br />
            <label>Agility: <input type="number" id="agility" onChange={this._updateBaseStat}
                                   defaultValue={"0"} value={this.state.agility} min="0" /></label><br />
            <label>Luck: <input type="number" id="luck" onChange={this._updateBaseStat}
                                defaultValue={"0"} value={this.state.luck}
                                min="0" /></label><br />
            <h2>Djinn</h2>
            <DjinnEntireList names={charCalc.djinn.names}
                             onDjinnChange={this.onChangeUpdateDjinn}
                             onDjinnAdd={this.addDjinn} />
            <h2>Equipment</h2>
            <EquipmentList names={this.state.equipment}
                           onRemove={this.removeEquipment}
                           onAdd={this.addEquipment} />
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
            <span onClick={this._saveToFile}><a
               href="javascript:alert('This link changes to data as you click it');"
               download=""
               id="save-to-file-link">Save to File</a></span>
            <input type="button" value="Save To Text Area" onClick={this._saveToTextArea}
                   id="save-text-button" />
            <br />
            <input type="file" id="file-chooser" accept=".js,.json" /><br />
            <input type="button" value="Load from File" onClick={this._loadFile} />
            <input type="button" value="Load from Text Area" onClick={this._loadFromTextArea}
                   id="load-text-button" /><br />
            <br />
            <textarea id="code-box" rows="10" cols="50" />
         </div>
      );
   }
}

ReactDOM.render(
   <CharacterApp />,
   document.getElementById('characterDiv')
);
