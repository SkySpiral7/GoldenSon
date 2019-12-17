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

      _this._saveToFile = _this._saveToFile.bind(_this);
      _this.saveAsString = _this.saveAsString.bind(_this);
      _this._saveToTextArea = _this._saveToTextArea.bind(_this);
      _this.save = _this.save.bind(_this);
      _this._loadFile = _this._loadFile.bind(_this);
      _this._loadFromTextArea = _this._loadFromTextArea.bind(_this);
      _this._loadFromString = _this._loadFromString.bind(_this);
      _this.load = _this.load.bind(_this);
      _this._updateLevel = _this._updateLevel.bind(_this);
      _this._updateAdept = _this._updateAdept.bind(_this);
      _this._updateBackground = _this._updateBackground.bind(_this);
      _this._updateCombatType = _this._updateCombatType.bind(_this);
      _this._updateCharacterName = _this._updateCharacterName.bind(_this);
      _this._updateBaseStat = _this._updateBaseStat.bind(_this);
      _this._updateClass = _this._updateClass.bind(_this);
      _this._calcAll = _this._calcAll.bind(_this);
      _this.addDjinn = _this.addDjinn.bind(_this);
      _this.onChangeUpdateDjinn = _this.onChangeUpdateDjinn.bind(_this);
      _this._updateDjinn = _this._updateDjinn.bind(_this);
      _this.addEquipment = _this.addEquipment.bind(_this);
      _this.removeEquipment = _this.removeEquipment.bind(_this);
      return _this;
   }

   _createClass(CharacterApp, [{
      key: '_saveToFile',
      value: function _saveToFile() {
         var link = document.getElementById('save-to-file-link');
         link.download = document.getElementById('name').value + '.json';
         link.href = 'data:application/json;charset=utf-8,' + encodeURIComponent(this.saveAsString());
      }

      //could be private

   }, {
      key: 'saveAsString',
      value: function saveAsString() {
         return JSON.stringify(this.save());
      }
   }, {
      key: '_saveToTextArea',
      value: function _saveToTextArea() {
         document.getElementById('code-box').value = this.saveAsString();
      }
   }, {
      key: 'save',
      value: function save() {
         return JSON.clone(this.state);
      }

      //could be static

   }, {
      key: '_loadFile',
      value: function _loadFile() {
         var filePath = document.getElementById('file-chooser').files[0];
         if (undefined === filePath || null === filePath) return; //no file to load
         var oFReader = new FileReader(); //reference: https://developer.mozilla.org/en-US/docs/DOM/FileReader
         oFReader.readAsText(filePath);
         oFReader.onload = function (oFREvent) {
            character._loadFromString(oFREvent.target.result);
         };
      }
   }, {
      key: '_loadFromTextArea',
      value: function _loadFromTextArea() {
         this._loadFromString(document.getElementById('code-box').value);
      }
   }, {
      key: '_loadFromString',
      value: function _loadFromString(fileString) {
         fileString = fileString.trim();
         if ('' === fileString) return; //ignore

         var jsonDoc = void 0;
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
         newState.djinn = jsonDoc.djinn;
         newState.equipment = jsonDoc.equipment;
         this.setState(newState);
      }
   }, {
      key: '_updateLevel',
      value: function _updateLevel() {
         var level = Number.parseInt(document.getElementById('level').value);
         this.setState({ level: level });
      }
   }, {
      key: '_updateAdept',
      value: function _updateAdept() {
         var adept = document.getElementById('adeptSelect').value;
         //this is an option in the select
         if ('none' === adept) adept = null;
         this.setState({ adept: adept });
      }
   }, {
      key: '_updateBackground',
      value: function _updateBackground() {
         var background = document.getElementById('backgroundSelect').value;
         this.setState({ background: background });
      }
   }, {
      key: '_updateCombatType',
      value: function _updateCombatType() {
         var combatType = document.getElementById('combatTypeSelect').value;
         this.setState({ combatType: combatType });
      }
   }, {
      key: '_updateCharacterName',
      value: function _updateCharacterName() {
         var name = document.getElementById('name').value;
         this.setState({ name: name });
      }
   }, {
      key: '_updateBaseStat',
      value: function _updateBaseStat(onChangeEvent) {
         var stat = onChangeEvent.target.id;
         var newVal = Number.parseInt(onChangeEvent.target.value);
         this.setState(function (state) {
            state.stats[stat] = newVal;
            return state;
         });
      }
   }, {
      key: '_updateClass',
      value: function _updateClass(charCalc) {
         var activeClass = CharacterApp._determineClass(this.state.adept, this.state.combatType, charCalc.djinn.counts);
         charCalc.activeClass = activeClass.name;

         if (null === activeClass.name) charCalc.activeClassDisplay = 'None';else charCalc.activeClassDisplay = '' + activeClass.name;

         return activeClass.statsMultiplier;
      }
   }, {
      key: '_calcAll',
      value: function _calcAll() {
         var _this2 = this;

         var statList = ['hp', 'pp', 'attack', 'defense', 'agility', 'luck'];
         //these are final stats
         var charCalc = { stats: { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 } };
         charCalc.djinn = {
            counts: { earth: 0, fire: 0, ice: 0, wind: 0 },
            names: []
            //see this.state for state
            /*set: [], might be useful for summon but not used now
            standby: [],
            recovery: []*/
         };
         charCalc.djinn.names = Object.keys(this.state.djinn);

         var addend = { hp: 0, pp: 0, attack: 0, defense: 0, agility: 0, luck: 0 };
         var statsAddend = database.elements[this.state.adept].statsAddend;
         statList.forEach(function (stat) {
            addend[stat] += statsAddend[stat];
         });
         statsAddend = database.backgrounds[this.state.background].statsAddend;
         statList.forEach(function (stat) {
            addend[stat] += statsAddend[stat];
         });
         statsAddend = database.combatTypes[this.state.combatType].statsAddend;
         statList.forEach(function (stat) {
            addend[stat] += statsAddend[stat];
         });
         var _iteratorNormalCompletion = true;
         var _didIteratorError = false;
         var _iteratorError = undefined;

         try {
            for (var _iterator = charCalc.djinn.names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
               var djinnName = _step.value;

               var djinnState = this.state.djinn[djinnName];
               if ('set' === djinnState) {
                  (function () {
                     var djinn = database.djinn[djinnName];
                     statList.forEach(function (stat) {
                        addend[stat] += djinn.statsAddend[stat];
                     });
                     ++charCalc.djinn.counts[djinn.element];
                  })();
               }
               //charCalc.djinn[djinnState].push(djinnName);
            }
         } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
         } finally {
            try {
               if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
               }
            } finally {
               if (_didIteratorError) {
                  throw _iteratorError;
               }
            }
         }

         var _loop = function _loop(equipmentName) {
            var equipment = database.equipment[equipmentName];
            statList.forEach(function (stat) {
               addend[stat] += equipment.statsAddend[stat];
            });
         };

         var _iteratorNormalCompletion2 = true;
         var _didIteratorError2 = false;
         var _iteratorError2 = undefined;

         try {
            for (var _iterator2 = this.state.equipment[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
               var equipmentName = _step2.value;

               _loop(equipmentName);
            }
         } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
         } finally {
            try {
               if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
               }
            } finally {
               if (_didIteratorError2) {
                  throw _iteratorError2;
               }
            }
         }

         var multiplier = this._updateClass(charCalc);
         charCalc.psynergy = CharacterApp._calcPsynergy(charCalc.activeClass, this.state.level);
         statList.forEach(function (stat) {
            charCalc.stats[stat] = (_this2.state.stats[stat] + addend[stat]) * multiplier[stat];
         });

         return charCalc;
      }
   }, {
      key: 'addDjinn',
      value: function addDjinn(onClickEvent) {
         var newName = onClickEvent.target.value;
         this.setState(function (state) {
            state.djinn[newName] = 'set';
            return state;
         });
      }
   }, {
      key: 'onChangeUpdateDjinn',
      value: function onChangeUpdateDjinn(onClickEvent) {
         var djinnName = onClickEvent.target.parentNode.dataset.name;
         var action = onClickEvent.target.value;
         this._updateDjinn(djinnName, action);
      }
   }, {
      key: '_updateDjinn',
      value: function _updateDjinn(djinnName, action) {
         if ('remove' === action) {
            this.setState(function (state) {
               delete state.djinn[djinnName];
               return state;
            });
         } else {
            this.setState(function (state) {
               state.djinn[djinnName] = action;
               return state;
            });
         }
      }
   }, {
      key: 'addEquipment',
      value: function addEquipment(onClickEvent) {
         var newName = onClickEvent.target.value;
         this.setState(function (state) {
            state.equipment.push(newName);
            return state;
         });
      }
   }, {
      key: 'removeEquipment',
      value: function removeEquipment(onClickEvent) {
         var oldName = onClickEvent.target.parentNode.dataset.name;
         this.setState(function (state) {
            state.equipment.removeByValue(oldName);
            return state;
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var charCalc = this._calcAll();
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
                  onChange: this._updateCharacterName })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Adept (Elemental Alignment):',
               React.createElement(ElementOptions, { names: database.elements.names, onChange: this._updateAdept })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Combat type:',
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.combatTypes.names, id: 'combatTypeSelect',
                  onChange: this._updateCombatType })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Background:',
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.backgrounds.names, id: 'backgroundSelect',
                  onChange: this._updateBackground })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Level: ',
               React.createElement('input', { type: 'number', id: 'level', value: this.state.level, min: '1',
                  onChange: this._updateLevel })
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
               React.createElement('input', { type: 'number', id: 'hp', onChange: this._updateBaseStat,
                  defaultValue: "0", value: this.state.hp, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'PP: ',
               React.createElement('input', { type: 'number', id: 'pp', onChange: this._updateBaseStat, defaultValue: "0",
                  value: this.state.pp, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Attack: ',
               React.createElement('input', { type: 'number', id: 'attack', onChange: this._updateBaseStat,
                  defaultValue: "0", value: this.state.attack, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Defense: ',
               React.createElement('input', { type: 'number', id: 'defense', onChange: this._updateBaseStat,
                  defaultValue: "0", value: this.state.defense, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Agility: ',
               React.createElement('input', { type: 'number', id: 'agility', onChange: this._updateBaseStat,
                  defaultValue: "0", value: this.state.agility, min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'label',
               null,
               'Luck: ',
               React.createElement('input', { type: 'number', id: 'luck', onChange: this._updateBaseStat,
                  defaultValue: "0", value: this.state.luck,
                  min: '0' })
            ),
            React.createElement('br', null),
            React.createElement(
               'h2',
               null,
               'Djinn'
            ),
            React.createElement(DjinnEntireList, { names: charCalc.djinn.names,
               onDjinnChange: this.onChangeUpdateDjinn,
               onDjinnAdd: this.addDjinn }),
            React.createElement(
               'h2',
               null,
               'Equipment'
            ),
            React.createElement(EquipmentList, { names: this.state.equipment,
               onRemove: this.removeEquipment,
               onAdd: this.addEquipment }),
            React.createElement(
               'h2',
               null,
               'Final stats'
            ),
            'Class: ',
            charCalc.activeClassDisplay,
            React.createElement('br', null),
            'HP: ',
            Math.round(charCalc.stats.hp),
            React.createElement('br', null),
            'PP: ',
            Math.round(charCalc.stats.pp),
            React.createElement('br', null),
            'Attack: ',
            Math.round(charCalc.stats.attack),
            React.createElement('br', null),
            'Defense: ',
            Math.round(charCalc.stats.defense),
            React.createElement('br', null),
            'Agility: ',
            Math.round(charCalc.stats.agility),
            React.createElement('br', null),
            'Luck: ',
            Math.round(charCalc.stats.luck),
            React.createElement('br', null),
            React.createElement(
               'h2',
               null,
               'Psynergy'
            ),
            React.createElement(PsynergyList, { names: charCalc.psynergy }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement(
               'span',
               { onClick: this._saveToFile },
               React.createElement(
                  'a',
                  {
                     href: 'javascript:alert(\'This link changes to data as you click it\');',
                     download: '',
                     id: 'save-to-file-link' },
                  'Save to File'
               )
            ),
            React.createElement('input', { type: 'button', value: 'Save To Text Area', onClick: this._saveToTextArea,
               id: 'save-text-button' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'file', id: 'file-chooser', accept: '.js,.json' }),
            React.createElement('br', null),
            React.createElement('input', { type: 'button', value: 'Load from File', onClick: this._loadFile }),
            React.createElement('input', { type: 'button', value: 'Load from Text Area', onClick: this._loadFromTextArea,
               id: 'load-text-button' }),
            React.createElement('br', null),
            React.createElement('br', null),
            React.createElement('textarea', { id: 'code-box', rows: '10', cols: '50' })
         );
      }
   }], [{
      key: '_determineClass',
      value: function _determineClass(adept, combatType, djinnCount) {
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

            var elementOrder = CharacterApp._classElementSortOrder[adept];
            if (req1[elementOrder[0]] > req2[elementOrder[0]]) return -1;
            if (req1[elementOrder[0]] < req2[elementOrder[0]]) return 1;

            if (req1[elementOrder[1]] > req2[elementOrder[1]]) return -1;
            if (req1[elementOrder[1]] < req2[elementOrder[1]]) return 1;

            //[2] is a no-op since they have same totalDjinn
            return 0;
         });
         return classList[0];
      }
   }, {
      key: '_calcPsynergy',
      value: function _calcPsynergy(activeClassName, level) {
         var psynergyList = [];
         if (null !== activeClassName) {
            var activeClass = database.classes[activeClassName];
            //if (undefined === activeClass) return;  //should only be when class is none
            for (var i = 0; i < activeClass.psynergy.length; ++i) {
               var psynergy = activeClass.psynergy[i];
               if (level >= psynergy.level) {
                  psynergyList.push(psynergy.name);
               }
            }
         }
         return psynergyList;
      }
   }]);

   return CharacterApp;
}(React.Component);

CharacterApp._classElementSortOrder = {
   //element => symbiotic, neutral, conflict. conflict isn't used
   earth: ['fire', 'ice', 'wind'],
   fire: ['earth', 'wind', 'ice'],
   ice: ['wind', 'earth', 'fire'],
   wind: ['ice', 'fire', 'earth']
};


ReactDOM.render(React.createElement(CharacterApp, null), document.getElementById('characterDiv'));