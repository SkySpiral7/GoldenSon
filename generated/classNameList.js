'use strict';

var classNameListState = { element: 'earth', combatType: 'Mage' };

function ElementDropDown() {
   var options = database.elements.names.map(function (name) {
      return React.createElement(
         'option',
         { key: name },
         name
      );
   });
   return React.createElement(
      'select',
      { onChange: updateElement, id: 'elementDropDown', value: classNameListState.element },
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
         { key: name },
         name
      );
   });
   return React.createElement(
      'select',
      { onChange: updateCombatType, id: 'combatTypeDropDown', value: classNameListState.combatType },
      options
   );
}

function updateCombatType() {
   classNameListState.combatType = document.getElementById('combatTypeDropDown').value;
   renderClassList();
}

function ClassListTable() {
   if (undefined === database.classes.byRequirement[classNameListState.element]) return '';
   if (undefined === database.classes.byRequirement[classNameListState.element][classNameListState.combatType]) return '';
   var classList = database.classes.byRequirement[classNameListState.element][classNameListState.combatType].map(function (myClass) {
      return {
         name: myClass.name,
         requirements: myClass.requirements[classNameListState.element][classNameListState.combatType]
      };
   }).sorted(requirementSortOrder).map(function (myClass) {
      var counts = myClass.requirements;
      return React.createElement(
         'li',
         { key: myClass.name },
         JSON.stringify(counts) + ' ' + myClass.name
      );
   });
   return React.createElement(
      'ol',
      null,
      classList
   );
}

function requirementSortOrder(class1, class2) {
   var req1 = class1.requirements;
   var req2 = class2.requirements;

   if (req1.earth > req2.earth) return 1;else if (req1.earth < req2.earth) return -1;

   if (req1.fire > req2.fire) return 1;else if (req1.fire < req2.fire) return -1;

   if (req1.ice > req2.ice) return 1;else if (req1.ice < req2.ice) return -1;

   if (req1.wind > req2.wind) return 1;else if (req1.wind < req2.wind) return -1;

   //name should be a no-op
   if (req1.name > req2.name) return 1;else if (req1.name < req2.name) return -1;

   return 0;
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