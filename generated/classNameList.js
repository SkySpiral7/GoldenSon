'use strict';

var classNameListState = { element: 'earth', combatType: 'Mage' };

function ElementDropDown() {
   var options = database.adeptTypes.names.map(function (name) {
      return React.createElement(
         'option',
         { key: name, selected: classNameListState.element === name },
         name
      );
   });
   return React.createElement(
      'select',
      { onChange: updateElement, id: 'elementDropDown' },
      options
   );
}

function updateElement() {
   classNameListState.element = document.getElementById('elementDropDown').value;
   renderClassList();
}

function CombatTypeDropDown() {
   var options = database.combatTypes.names.map(function (name) {
      return React.createElement(
         'option',
         { key: name, selected: classNameListState.combatType === name },
         name
      );
   });
   return React.createElement(
      'select',
      { onChange: updateCombatType, id: 'combatTypeDropDown' },
      options
   );
}

function updateCombatType() {
   classNameListState.combatType = document.getElementById('combatTypeDropDown').value;
   renderClassList();
}

function ClassListTable() {
   //TODO: include djinn count requirements
   if (undefined === database.classRequirements[classNameListState.element]) return '';
   var nameList = database.classRequirements[classNameListState.element].names.filter(function (name) {
      return database.classRequirements[classNameListState.element][name].combatType.contains(classNameListState.combatType);
   }).map(function (name) {
      return React.createElement(
         'li',
         { key: name },
         name
      );
   });
   return React.createElement(
      'ol',
      null,
      nameList
   );
}

function renderClassList() {
   ReactDOM.render(React.createElement(
      'div',
      null,
      React.createElement(ElementDropDown, null),
      ' ',
      React.createElement(CombatTypeDropDown, null),
      React.createElement('br', null),
      React.createElement(ClassListTable, null)
   ), document.getElementById('classNameListDiv'));
}

renderClassList();