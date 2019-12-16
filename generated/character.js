'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CharacterApp = function (_React$Component) {
   _inherits(CharacterApp, _React$Component);

   function CharacterApp(props) {
      _classCallCheck(this, CharacterApp);

      var _this = _possibleConstructorReturn(this, (CharacterApp.__proto__ || Object.getPrototypeOf(CharacterApp)).call(this, props));

      character = _this;

      //TODO: recreate charCalc each render
      _this.charCalc = {
         activeClass: null,
         activeClassDisplay: null,
         stats: {
            //see character for base
            addend: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 },
            multiplier: { hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1 },
            final: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 }
         },
         djinn: {
            counts: { earth: 0, fire: 0, ice: 0, wind: 0 },
            names: [],
            //see character for state
            set: [],
            standby: [],
            recovery: []
         },
         psynergy: []
      };
      _this.classElementSortOrder = {
         //element => symbiotic, neutral, conflict
         earth: ['fire', 'ice', 'wind'],
         fire: ['earth', 'wind', 'ice'],
         ice: ['wind', 'earth', 'fire'],
         wind: ['ice', 'fire', 'earth']
      };

      _this.state = {
         //gameVersion, parserVersion are ignored until there is reason to use them
         //gameVersion, parserVersion are strings to support possible future semantic versioning
         //gameVersion: '1',
         //parserVersion: '1',
         name: '',
         adept: database.elementOrder[0],
         combatType: database.combatTypes.names[0],
         background: database.backgrounds.names[0],
         level: 1,
         stats: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 },
         djinn: {},
         equipment: []
      };

      _this.saveToFile = _this.saveToFile.bind(_this);
      _this.saveAsString = _this.saveAsString.bind(_this);
      _this.saveToTextArea = _this.saveToTextArea.bind(_this);
      _this.save = _this.save.bind(_this);
      _this.loadFile = _this.loadFile.bind(_this);
      _this.loadFromTextArea = _this.loadFromTextArea.bind(_this);
      _this.loadFromString = _this.loadFromString.bind(_this);
      _this.load = _this.load.bind(_this);
      _this.updateLevel = _this.updateLevel.bind(_this);
      _this.updateAdept = _this.updateAdept.bind(_this);
      _this.updateBackground = _this.updateBackground.bind(_this);
      _this.updateCombatType = _this.updateCombatType.bind(_this);
      _this.updateCharacterName = _this.updateCharacterName.bind(_this);
      _this.updateBaseStat = _this.updateBaseStat.bind(_this);
      _this.updateFinalStat = _this.updateFinalStat.bind(_this);
      _this.determineClass = _this.determineClass.bind(_this);
      _this.updateClass = _this.updateClass.bind(_this);
      _this.updatePsynergy = _this.updatePsynergy.bind(_this);
      _this.updateAllFinalStats = _this.updateAllFinalStats.bind(_this);
      _this.addDjinn = _this.addDjinn.bind(_this);
      _this.onChangeUpdateDjinn = _this.onChangeUpdateDjinn.bind(_this);
      _this.updateDjinn = _this.updateDjinn.bind(_this);
      _this.addEquipment = _this.addEquipment.bind(_this);
      _this.removeEquipment = _this.removeEquipment.bind(_this);
      return _this;
   }
   //TODO: make class things private and static
   //rename to this.#charCalc etc. can make some methods static
   //#charCalc; static #classElementSortOrder; state;


   _createClass(CharacterApp, [{
      key: 'saveToFile',
      value: function saveToFile() {
         var link = document.getElementById('save-to-file-link');
         link.download = document.getElementById('name').value + '.json';
         link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(this.saveAsString());
      }
   }, {
      key: 'saveAsString',
      value: function saveAsString() {
         return JSON.stringify(this.save());
      }
   }, {
      key: 'saveToTextArea',
      value: function saveToTextArea() {
         document.getElementById('code-box').value = this.saveAsString();
      }
   }, {
      key: 'save',
      value: function save() {
         return JSON.clone(this.state);
      }
   }, {
      key: 'loadFile',
      value: function loadFile() {
         var filePath = document.getElementById('file-chooser').files[0];
         if (undefined === filePath || null === filePath) return; //no file to load
         var oFReader = new FileReader(); //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
         oFReader.readAsText(filePath);
         oFReader.onload = function (oFREvent) {
            character.loadFromString(oFREvent.target.result);
         };
      }
   }, {
      key: 'loadFromTextArea',
      value: function loadFromTextArea() {
         this.loadFromString(document.getElementById('code-box').value);
      }
   }, {
      key: 'loadFromString',
      value: function loadFromString(fileString) {
         fileString = fileString.trim();
         if ('' === fileString) return; //ignore

         var jsonDoc;
         try {
            jsonDoc = JSON.parse(fileString);
            document.getElementById('code-box').value = '';
         } catch (e) {
            alert('A parsing error has occurred. The document you provided is not legal JSON.\n\n' + e);
            //yeah I know the error message is completely unhelpful but there's nothing more I can do
            throw e; //stop the process and cause a console.error
         }

         this.load(jsonDoc);
      }
   }, {
      key: 'load',
      value: function load(jsonDoc) {
         this.charCalc.stats = {
            //see this.state for base
            addend: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 },
            multiplier: { hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1 },
            final: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 }
         };
         //this.state = jsonDoc  don't do this: we don't want to keep redundant fields
         var newState = {
            stats: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 },
            djinn: {},
            equipment: []
         };
         //gameVersion, parserVersion are ignored until there is reason to use them
         document.getElementById('name').value = newState.name = jsonDoc.name;
         if (null === jsonDoc.adept) {
            document.getElementById('adeptSelect').value = 'none';
            newState.adept = null;
         } else document.getElementById('adeptSelect').value = newState.adept = jsonDoc.adept;
         document.getElementById('combatTypeSelect').value = newState.combatType = jsonDoc.combatType;
         document.getElementById('backgroundSelect').value = newState.background = jsonDoc.background;
         document.getElementById('level').value = newState.level = jsonDoc.level;
         document.getElementById('hp').value = newState.stats.hp = jsonDoc.stats.hp;
         document.getElementById('pp').value = newState.stats.pp = jsonDoc.stats.pp;
         document.getElementById('attack').value = newState.stats.attack = jsonDoc.stats.attack;
         document.getElementById('defense').value = newState.stats.defense = jsonDoc.stats.defense;
         document.getElementById('agility').value = newState.stats.agility = jsonDoc.stats.agility;
         document.getElementById('luck').value = newState.stats.luck = jsonDoc.stats.luck;
         this.charCalc.djinn = {
            counts: { earth: 0, fire: 0, ice: 0, wind: 0 },
            names: [],
            //see newState for state
            set: [],
            standby: [],
            recovery: []
         };
         newState.djinn = jsonDoc.djinn;
         this.charCalc.djinn.names = Object.keys(newState.djinn);
         newState.equipment = jsonDoc.equipment;

         var i;
         for (i = 0; i < this.charCalc.djinn.names.length; ++i) {
            var djinnName = this.charCalc.djinn.names[i];
            this.updateDjinn(djinnName, newState.djinn[djinnName], 'remove');
         }
         for (i = 0; i < newState.equipment.length; ++i) {
            var equipment = database.equipment[newState.equipment[i]];
            this.charCalc.stats.addend.hp += equipment.statsAddend.hp;
            this.charCalc.stats.addend.pp += equipment.statsAddend.pp;
            this.charCalc.stats.addend.attack += equipment.statsAddend.attack;
            this.charCalc.stats.addend.defense += equipment.statsAddend.defense;
            this.charCalc.stats.addend.agility += equipment.statsAddend.agility;
            this.charCalc.stats.addend.luck += equipment.statsAddend.luck;
         }
         this.setState(newState);
      }
   }, {
      key: 'updateLevel',
      value: function updateLevel() {
         var level = Number.parseInt(document.getElementById('level').value);
         this.setState({ level: level });
         this.updatePsynergy();
      }
   }, {
      key: 'updateAdept',
      value: function updateAdept() {
         /*
         var equipment = database.elements[this.state.adept];
         this.charCalc.stats.addend.hp -= equipment.statsAddend.hp;
         this.charCalc.stats.addend.pp -= equipment.statsAddend.pp;
         this.charCalc.stats.addend.attack -= equipment.statsAddend.attack;
         this.charCalc.stats.addend.defense -= equipment.statsAddend.defense;
         this.charCalc.stats.addend.agility -= equipment.statsAddend.agility;
         this.charCalc.stats.addend.luck -= equipment.statsAddend.luck;
          this.charCalc.stats.addend.hp += equipment.statsAddend.hp;
         this.charCalc.stats.addend.pp += equipment.statsAddend.pp;
         this.charCalc.stats.addend.attack += equipment.statsAddend.attack;
         this.charCalc.stats.addend.defense += equipment.statsAddend.defense;
         this.charCalc.stats.addend.agility += equipment.statsAddend.agility;
         this.charCalc.stats.addend.luck += equipment.statsAddend.luck;
         */
         //TODO: I'm thinking I need react to manage state for me

         var adept = document.getElementById('adeptSelect').value;
         //this is an option in the select
         if ('none' === adept) adept = null;
         this.setState({ adept: adept });
      }
   }, {
      key: 'updateBackground',
      value: function updateBackground() {
         var background = document.getElementById('backgroundSelect').value;
         this.setState({ background: background });
      }
   }, {
      key: 'updateCombatType',
      value: function updateCombatType() {
         var combatType = document.getElementById('combatTypeSelect').value;
         this.setState({ combatType: combatType });
      }
   }, {
      key: 'updateCharacterName',
      value: function updateCharacterName() {
         var name = document.getElementById('name').value;
         this.setState({ name: name });
      }
   }, {
      key: 'updateBaseStat',
      value: function updateBaseStat(onChangeEvent) {
         var stat = onChangeEvent.target.id;
         var newVal = Number.parseInt(document.getElementById(stat).value);
         this.setState(function (state, props) {
            state.stats[stat] = newVal;
            return state;
         });
         this.updateFinalStat(stat);
      }
   }, {
      key: 'updateFinalStat',
      value: function updateFinalStat(stat) {
         this.charCalc.stats.final[stat] = (this.state.stats[stat] + this.charCalc.stats.addend[stat]) * this.charCalc.stats.multiplier[stat];
      }
   }, {
      key: 'determineClass',
      value: function determineClass(adept, combatType, djinnCount) {
         var _this2 = this;

         if (null === adept || undefined === database.classes.byRequirement[adept] || undefined === database.classes.byRequirement[adept][combatType]) {
            return {
               name: null,
               //need to return all 1 for updateClass
               statsMultiplier: { hp: 1, pp: 1, attack: 1, defense: 1, agility: 1, luck: 1 }
            };
         }

         var classList = database.classes.byRequirement[adept][combatType]
         //remove classes you don't qualify for
         .filter(function (newClass) {
            var requirementsInQuestion = newClass.requirements[adept][combatType];

            return djinnCount.earth >= requirementsInQuestion.earth && djinnCount.fire >= requirementsInQuestion.fire && djinnCount.ice >= requirementsInQuestion.ice && djinnCount.wind >= requirementsInQuestion.wind;
         }).sorted(function (class1, class2) {
            if (class1.totalDjinn > class2.totalDjinn) return -1;
            if (class1.totalDjinn < class2.totalDjinn) return 1;

            var req1 = class1.requirements[adept][combatType];
            var req2 = class2.requirements[adept][combatType];

            if (req1[adept] > req2[adept]) return -1;
            if (req1[adept] < req2[adept]) return 1;

            var elementOrder = _this2.classElementSortOrder[adept];
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
   }, {
      key: 'updateClass',
      value: function updateClass() {
         var activeClass = this.determineClass(this.state.adept, this.state.combatType, this.charCalc.djinn.counts);
         this.charCalc.activeClass = activeClass.name;
         this.charCalc.stats.multiplier.hp = activeClass.statsMultiplier.hp;
         this.charCalc.stats.multiplier.pp = activeClass.statsMultiplier.pp;
         this.charCalc.stats.multiplier.attack = activeClass.statsMultiplier.attack;
         this.charCalc.stats.multiplier.defense = activeClass.statsMultiplier.defense;
         this.charCalc.stats.multiplier.agility = activeClass.statsMultiplier.agility;
         this.charCalc.stats.multiplier.luck = activeClass.statsMultiplier.luck;

         if (null === activeClass.name) this.charCalc.activeClassDisplay = 'None';else this.charCalc.activeClassDisplay = '' + activeClass.name;
      }
   }, {
      key: 'updatePsynergy',
      value: function updatePsynergy() {
         this.charCalc.psynergy = [];
         if (null !== this.charCalc.activeClass) {
            var activeClass = database.classes[this.charCalc.activeClass];
            //if (undefined === activeClass) return;  //should only be when class is none
            for (var i = 0; i < activeClass.psynergy.length; ++i) {
               var psynergy = activeClass.psynergy[i];
               if (this.state.level >= psynergy.level) {
                  this.charCalc.psynergy.push(psynergy.name);
               }
            }
         }
      }
   }, {
      key: 'updateAllFinalStats',
      value: function updateAllFinalStats() {
         this.updateClass();
         this.updatePsynergy();
         this.updateFinalStat('hp');
         this.updateFinalStat('pp');
         this.updateFinalStat('attack');
         this.updateFinalStat('defense');
         this.updateFinalStat('agility');
         this.updateFinalStat('luck');
      }
   }, {
      key: 'addDjinn',
      value: function addDjinn(onClickEvent) {
         var newName = onClickEvent.target.value;
         var djinn = database.djinn[newName];
         this.charCalc.djinn.names.push(newName);
         this.charCalc.djinn.set.push(newName);
         this.setState(function (state, props) {
            state.djinn[newName] = 'set';
            return state;
         });

         this.charCalc.stats.addend.hp += djinn.statsAddend.hp;
         this.charCalc.stats.addend.pp += djinn.statsAddend.pp;
         this.charCalc.stats.addend.attack += djinn.statsAddend.attack;
         this.charCalc.stats.addend.defense += djinn.statsAddend.defense;
         this.charCalc.stats.addend.agility += djinn.statsAddend.agility;
         this.charCalc.stats.addend.luck += djinn.statsAddend.luck;
         ++this.charCalc.djinn.counts[djinn.element];
      }
   }, {
      key: 'onChangeUpdateDjinn',
      value: function onChangeUpdateDjinn(onClickEvent) {
         var djinnName = onClickEvent.target.parentNode.dataset.name;
         var action = onClickEvent.target.value;
         this.updateDjinn(djinnName, action, this.state.djinn[djinnName]);
      }
   }, {
      key: 'updateDjinn',
      value: function updateDjinn(djinnName, action, previousState) {
         var djinn = database.djinn[djinnName];

         if ('set' === previousState) {
            this.charCalc.stats.addend.hp -= djinn.statsAddend.hp;
            this.charCalc.stats.addend.pp -= djinn.statsAddend.pp;
            this.charCalc.stats.addend.attack -= djinn.statsAddend.attack;
            this.charCalc.stats.addend.defense -= djinn.statsAddend.defense;
            this.charCalc.stats.addend.agility -= djinn.statsAddend.agility;
            this.charCalc.stats.addend.luck -= djinn.statsAddend.luck;
            --this.charCalc.djinn.counts[djinn.element];
         } else if ('set' === action) {
            this.charCalc.stats.addend.hp += djinn.statsAddend.hp;
            this.charCalc.stats.addend.pp += djinn.statsAddend.pp;
            this.charCalc.stats.addend.attack += djinn.statsAddend.attack;
            this.charCalc.stats.addend.defense += djinn.statsAddend.defense;
            this.charCalc.stats.addend.agility += djinn.statsAddend.agility;
            this.charCalc.stats.addend.luck += djinn.statsAddend.luck;
            ++this.charCalc.djinn.counts[djinn.element];
         }

         //if Standby/Recovery do nothing

         //previous remove is only possible when loading
         if ('remove' !== previousState) this.charCalc.djinn[previousState].removeByValue(djinnName);

         if ('remove' === action) {
            this.charCalc.djinn.names.removeByValue(djinnName);
         } else {
            this.setState(function (state, props) {
               state.djinn[djinnName] = action;
               return state;
            });
            this.charCalc.djinn[action].push(djinnName);
         }
      }
   }, {
      key: 'addEquipment',
      value: function addEquipment(onClickEvent) {
         var newName = onClickEvent.target.value;
         var equipment = database.equipment[newName];
         this.setState(function (state, props) {
            state.equipment.push(newName);
            return state;
         });

         this.charCalc.stats.addend.hp += equipment.statsAddend.hp;
         this.charCalc.stats.addend.pp += equipment.statsAddend.pp;
         this.charCalc.stats.addend.attack += equipment.statsAddend.attack;
         this.charCalc.stats.addend.defense += equipment.statsAddend.defense;
         this.charCalc.stats.addend.agility += equipment.statsAddend.agility;
         this.charCalc.stats.addend.luck += equipment.statsAddend.luck;
      }
   }, {
      key: 'removeEquipment',
      value: function removeEquipment(onClickEvent) {
         var oldName = onClickEvent.target.parentNode.dataset.name;
         var equipment = database.equipment[oldName];
         this.setState(function (state, props) {
            state.equipment.removeByValue(oldName);
            return state;
         });

         this.charCalc.stats.addend.hp -= equipment.statsAddend.hp;
         this.charCalc.stats.addend.pp -= equipment.statsAddend.pp;
         this.charCalc.stats.addend.attack -= equipment.statsAddend.attack;
         this.charCalc.stats.addend.defense -= equipment.statsAddend.defense;
         this.charCalc.stats.addend.agility -= equipment.statsAddend.agility;
         this.charCalc.stats.addend.luck -= equipment.statsAddend.luck;
      }
   }, {
      key: 'render',
      value: function render() {
         this.updateAllFinalStats();
         return React.createElement(
            'div',
            null,
            React.createElement(
               'h2',
               null,
               'General'
            ),
            React.createElement(
               'label',
               null,
               'Name: ',
               React.createElement('input', { type: 'text', id: 'name', value: this.state.name,
                  onChange: this.updateCharacterName })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Adept (Elemental Alignment):',
               React.createElement(ElementOptions, { names: database.elements.names, onChange: this.updateAdept })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Combat type:',
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.combatTypes.names, id: 'combatTypeSelect',
                  onChange: this.updateCombatType })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Background:',
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.backgrounds.names, id: 'backgroundSelect',
                  onChange: this.updateBackground })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Level: ',
               React.createElement('input', { type: 'number', id: 'level', value: this.state.level, min: '1',
                  onChange: this.updateLevel })
            ),
            React.createElement('br', null),
            React.createElement(
               'h2',
               null,
               'Base stats'
            ),
            React.createElement(
               'label',
               null,
               'HP: ',
               React.createElement('input', { type: 'number', id: 'hp', onChange: this.updateBaseStat,
                  defaultValue: "0", value: this.state.hp, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'PP: ',
               React.createElement('input', { type: 'number', id: 'pp', onChange: this.updateBaseStat, defaultValue: "0",
                  value: this.state.pp, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Attack: ',
               React.createElement('input', { type: 'number', id: 'attack', onChange: this.updateBaseStat,
                  defaultValue: "0", value: this.state.attack, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Defense: ',
               React.createElement('input', { type: 'number', id: 'defense', onChange: this.updateBaseStat,
                  defaultValue: "0", value: this.state.defense, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Agility: ',
               React.createElement('input', { type: 'number', id: 'agility', onChange: this.updateBaseStat,
                  defaultValue: "0", value: this.state.agility, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Luck: ',
               React.createElement('input', { type: 'number', id: 'luck', onChange: this.updateBaseStat,
                  defaultValue: "0", value: this.state.luck,
                  min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'h2',
               null,
               'Djinn'
            ),
            React.createElement(DjinnEntireList, { names: this.charCalc.djinn.names }),
            React.createElement(
               'h2',
               null,
               'Equipment'
            ),
            React.createElement(EquipmentList, { names: this.state.equipment }),
            React.createElement(
               'h2',
               null,
               'Final stats'
            ),
            'Class: ',
            this.charCalc.activeClassDisplay,
            React.createElement('br', null),
            'HP: ',
            Math.round(this.charCalc.stats.final.hp),
            React.createElement('br', null),
            'PP: ',
            Math.round(this.charCalc.stats.final.pp),
            React.createElement('br', null),
            'Attack: ',
            Math.round(this.charCalc.stats.final.attack),
            React.createElement('br', null),
            'Defense: ',
            Math.round(this.charCalc.stats.final.defense),
            React.createElement('br', null),
            'Agility: ',
            Math.round(this.charCalc.stats.final.agility),
            React.createElement('br', null),
            'Luck: ',
            Math.round(this.charCalc.stats.final.luck),
            React.createElement('br', null),
            React.createElement(
               'h2',
               null,
               'Psynergy'
            ),
            React.createElement(PsynergyList, { names: this.charCalc.psynergy }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
               'span',
               { onClick: this.saveToFile },
               React.createElement(
                  'a',
                  {
                     href: 'javascript:alert(\'This link changes to data as you click it\');',
                     download: '',
                     id: 'save-to-file-link' },
                  'Save to File'
               )
            ),
            React.createElement('input', { type: 'button', value: 'Save To Text Area', onClick: this.saveToTextArea,
               id: 'save-text-button' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'file', id: 'file-chooser', accept: '.js,.json' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'button', value: 'Load from File', onClick: this.loadFile }),
            React.createElement('input', { type: 'button', value: 'Load from Text Area', onClick: this.loadFromTextArea,
               id: 'load-text-button' }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('textarea', { id: 'code-box', rows: '10', cols: '50' })
         );
      }
   }]);

   return CharacterApp;
}(React.Component);

ReactDOM.render(React.createElement(CharacterApp, null), document.getElementById('characterDiv'));