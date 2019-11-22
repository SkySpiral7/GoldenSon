'use strict';

let classNameListState = {element: 'earth', combatType: 'Mage'};

function ElementDropDown()
{
   const options = database.adeptTypes.names
   .map((name) =>
      <option key={name} selected={classNameListState.element === name}>{name}</option>
   );
   return (<select onChange={updateElement} id="elementDropDown">
      {options}
   </select>);
}

function updateElement()
{
   classNameListState.element = document.getElementById('elementDropDown').value;
   renderClassList();
}

function CombatTypeDropDown()
{
   const options = database.combatTypes.names
   .map((name) =>
      <option key={name} selected={classNameListState.combatType === name}>{name}</option>
   );
   return (<select onChange={updateCombatType} id="combatTypeDropDown">
      {options}
   </select>);
}

function updateCombatType()
{
   classNameListState.combatType = document.getElementById('combatTypeDropDown').value;
   renderClassList();
}

function ClassListTable()
{
   //TODO: include djinn count requirements
   if (undefined === database.classRequirements[classNameListState.element]) return '';
   let nameList = database.classRequirements[classNameListState.element].names
   .filter((name) => database.classRequirements[classNameListState.element][name].combatType.contains(
      classNameListState.combatType))
   .map((name) =>
   {
      return (<li key={name}>{name}</li>);
   });
   return (<ol>{nameList}</ol>);
}

function renderClassList()
{
   ReactDOM.render(
      (<div>
         <ElementDropDown/>
         {' '}
         <CombatTypeDropDown/>
         <br/>
         <ClassListTable/>
      </div>),
      document.getElementById('classNameListDiv')
   );
}

renderClassList();
