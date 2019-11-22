'use strict';

var classNameListState = { element: 'earth', combatType: 'Mage' };

function ElementDropDown() {
   var options = database.adeptTypes.names.map(function (name) {
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
   //TODO: include djinn count requirements
   if (undefined === database.classRequirements[classNameListState.element]) return '';
   var nameList = database.classRequirements[classNameListState.element].names.map(function (name) {
      return database.classRequirements[classNameListState.element][name];
   }).filter(function (classReq) {
      return classReq.combatType.contains(classNameListState.combatType);
   });
   nameList.sort(requirementSortOrder);
   nameList = nameList.map(function (classReq) {
      return React.createElement(
         'li',
         { key: classReq.name },
         JSON.stringify(classReq.djinnCount) + ' ' + classReq.name
      );
   });
   return React.createElement(
      'ol',
      null,
      nameList
   );
}

function requirementSortOrder(req1, req2) {
   if (req1.djinnCount.earth > req2.djinnCount.earth) return 1;else if (req1.djinnCount.earth < req2.djinnCount.earth) return -1;

   if (req1.djinnCount.fire > req2.djinnCount.fire) return 1;else if (req1.djinnCount.fire < req2.djinnCount.fire) return -1;

   if (req1.djinnCount.wind > req2.djinnCount.wind) return 1;else if (req1.djinnCount.wind < req2.djinnCount.wind) return -1;

   if (req1.djinnCount.ice > req2.djinnCount.ice) return 1;else if (req1.djinnCount.ice < req2.djinnCount.ice) return -1;

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