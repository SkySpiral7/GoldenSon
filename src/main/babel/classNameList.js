'use strict';

let classNameListState = {element: 'earth', combatType: 'Mage'};

function ElementDropDown()
{
   const options = database.adeptTypes.names
   .map((name) =>
      <option key={name}>{name}</option>
   );
   return (<select onChange={updateElement} id="elementDropDown" value={classNameListState.element}>
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
      <option key={name}>{name}</option>
   );
   return (<select onChange={updateCombatType} id="combatTypeDropDown" value={classNameListState.combatType}>
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
   if (undefined === database.classRequirements[classNameListState.element]) return '';
   let nameList = database.classRequirements[classNameListState.element].names
   .map((name) => database.classRequirements[classNameListState.element][name])
   .filter((classReq) => classReq.combatType.contains(classNameListState.combatType));
   nameList.sort(requirementSortOrder);
   nameList = nameList.map((classReq) =>
   {
      return (<li key={classReq.name}>{JSON.stringify(classReq.djinnCount) + ' ' + classReq.name}</li>);
   });
   return (<ol>{nameList}</ol>);
}

function requirementSortOrder(req1, req2)
{
   if (req1.djinnCount.earth > req2.djinnCount.earth) return 1;
   else if (req1.djinnCount.earth < req2.djinnCount.earth) return -1;

   if (req1.djinnCount.fire > req2.djinnCount.fire) return 1;
   else if (req1.djinnCount.fire < req2.djinnCount.fire) return -1;

   if (req1.djinnCount.wind > req2.djinnCount.wind) return 1;
   else if (req1.djinnCount.wind < req2.djinnCount.wind) return -1;

   if (req1.djinnCount.ice > req2.djinnCount.ice) return 1;
   else if (req1.djinnCount.ice < req2.djinnCount.ice) return -1;

   if (req1.name > req2.name) return 1;
   else if (req1.name < req2.name) return -1;

   return 0;
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
