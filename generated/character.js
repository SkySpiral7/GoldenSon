'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function updateCharacterNameCharacterForward() {
   character.updateCharacterName();
}

function updateLevelCharForward() {
   character.updateLevel();
}

function saveToFileCharForward() {
   character.saveToFile();
}

function saveToTextAreaCharForward() {
   character.saveToTextArea();
}

function loadFileCharForward() {
   character.loadFile();
}

function loadFromTextAreaCharForward() {
   character.loadFromTextArea();
}

var CharacterComponent = function (_React$Component) {
   _inherits(CharacterComponent, _React$Component);

   function CharacterComponent(props) {
      _classCallCheck(this, CharacterComponent);

      var _this = _possibleConstructorReturn(this, (CharacterComponent.__proto__ || Object.getPrototypeOf(CharacterComponent)).call(this, props));

      character = _this;
      _this.state = { hp: 0 };
      _this.updateBaseStatCharForward = _this.updateBaseStatCharForward.bind(_this);
      return _this;
   }

   _createClass(CharacterComponent, [{
      key: "updateBaseStatCharForward",
      value: function updateBaseStatCharForward(event) {
         character.updateBaseStat(event);
         var newVal = event.target.value;
         this.setState(function (state, props) {
            return { hp: newVal };
         });
      }
   }, {
      key: "render",
      value: function render() {
         return React.createElement(
            "div",
            null,
            React.createElement(
               "h2",
               null,
               "General"
            ),
            React.createElement(
               "label",
               null,
               "Name: ",
               React.createElement("input", { type: "text", id: "name", value: "",
                  onChange: updateCharacterNameCharacterForward })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Adept (Elemental Alignment):",
               React.createElement(ElementOptions, { names: database.elements.names, onChange: updateAdeptEventForward })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Combat type:",
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.combatTypes.names, id: "combatTypeSelect",
                  onChange: updateCombatTypeEventForward })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Background:",
               React.createElement(BackgroundOrCombatTypeOptions, { names: database.backgrounds.names, id: "backgroundSelect",
                  onChange: updateBackgroundEventForward })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Level: ",
               React.createElement("input", { type: "number", id: "level", value: "1", min: "1",
                  onChange: updateLevelCharForward })
            ),
            React.createElement("br", null),
            React.createElement(
               "h2",
               null,
               "Base stats"
            ),
            React.createElement(
               "label",
               null,
               "HP: ",
               React.createElement("input", { type: "number", id: "hp", onChange: this.updateBaseStatCharForward,
                  value: this.state.hp,
                  min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "PP: ",
               React.createElement("input", { type: "number", id: "pp", onChange: this.updateBaseStatCharForward, value: "0",
                  min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Attack: ",
               React.createElement("input", { type: "number", id: "attack", onChange: this.updateBaseStatCharForward,
                  value: "0", min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Defense: ",
               React.createElement("input", { type: "number", id: "defense", onChange: this.updateBaseStatCharForward,
                  value: "0", min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Agility: ",
               React.createElement("input", { type: "number", id: "agility", onChange: this.updateBaseStatCharForward,
                  value: "0", min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "label",
               null,
               "Luck: ",
               React.createElement("input", { type: "number", id: "luck", onChange: this.updateBaseStatCharForward, value: "0",
                  min: "0" })
            ),
            React.createElement("br", null),
            React.createElement(
               "h2",
               null,
               "Djinn"
            ),
            React.createElement("div", { id: "djinn" }),
            React.createElement(
               "h2",
               null,
               "Equipment"
            ),
            React.createElement("div", { id: "equipment" }),
            React.createElement(
               "h2",
               null,
               "Final stats"
            ),
            "Class: ",
            React.createElement("span", { id: "class" }),
            React.createElement("br", null),
            "HP: ",
            React.createElement("span", { id: "hp-final" }),
            React.createElement("br", null),
            "PP: ",
            React.createElement("span", { id: "pp-final" }),
            React.createElement("br", null),
            "Attack: ",
            React.createElement("span", { id: "attack-final" }),
            React.createElement("br", null),
            "Defense: ",
            React.createElement("span", { id: "defense-final" }),
            React.createElement("br", null),
            "Agility: ",
            React.createElement("span", { id: "agility-final" }),
            React.createElement("br", null),
            "Luck: ",
            React.createElement("span", { id: "luck-final" }),
            React.createElement("br", null),
            React.createElement(
               "h2",
               null,
               "Psynergy"
            ),
            React.createElement("div", { id: "psynergy" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement(
               "span",
               { onClick: saveToFileCharForward },
               React.createElement(
                  "a",
                  {
                     href: "javascript:alert('This link changes to data as you click it');",
                     download: "",
                     id: "save-to-file-link" },
                  "Save to File"
               )
            ),
            React.createElement("input", { type: "button", value: "Save To Text Area", onClick: saveToTextAreaCharForward,
               id: "save-text-button" }),
            React.createElement("br", null),
            React.createElement("input", { type: "file", id: "file-chooser", accept: ".js,.json" }),
            React.createElement("br", null),
            React.createElement("input", { type: "button", value: "Load from File", onClick: loadFileCharForward }),
            React.createElement("input", { type: "button", value: "Load from Text Area", onClick: loadFromTextAreaCharForward,
               id: "load-text-button" }),
            React.createElement("br", null),
            React.createElement("br", null),
            React.createElement("textarea", { id: "code-box", rows: "10", cols: "50" })
         );
      }
   }]);

   return CharacterComponent;
}(React.Component);

ReactDOM.render(React.createElement(CharacterComponent, null), document.getElementById('characterDiv'));