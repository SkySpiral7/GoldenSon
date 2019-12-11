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
   if (undefined === database.classes.byRequirement[classNameListState.element]) return '';
   if (undefined === database.classes.byRequirement[classNameListState.element][classNameListState.combatType]) return '';
   let classList = database.classes.byRequirement[classNameListState.element][classNameListState.combatType]
   .map((myClass) =>
   {
      return {
         name: myClass.name,
         requirements: myClass.requirements[classNameListState.element][classNameListState.combatType]
      }
   })
   .sorted(requirementSortOrder)
   .map((myClass) =>
   {
      let counts = myClass.requirements;
      return (<li key={myClass.name}>{JSON.stringify(counts) + ' ' + myClass.name}</li>);
   });
   return (<ol>{classList}</ol>);
}

function requirementSortOrder(class1, class2)
{
   let req1 = class1.requirements;
   let req2 = class2.requirements;

   if (req1.earth > req2.earth) return 1;
   else if (req1.earth < req2.earth) return -1;

   if (req1.fire > req2.fire) return 1;
   else if (req1.fire < req2.fire) return -1;

   if (req1.ice > req2.ice) return 1;
   else if (req1.ice < req2.ice) return -1;

   if (req1.wind > req2.wind) return 1;
   else if (req1.wind < req2.wind) return -1;

   //name should be a no-op
   if (req1.name > req2.name) return 1;
   else if (req1.name < req2.name) return -1;

   return 0;
}

function renderClassList()
{
   ReactDOM.render(
      (<div>
         <ElementDropDown />
         {' '}
         <CombatTypeDropDown />
         <br />
         <ClassListTable />
      </div>),
      document.getElementById('classNameListDiv')
   );
}

renderClassList();
