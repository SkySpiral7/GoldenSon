'use strict';

function EquipmentList(props)
{
   const listItems = props.names.map((name) =>
   {
      var equipment = database.equipment[name];
      return (<li key={'equipment-' + name} id={'equipment-' + name} data-name={name}>
         <a href="#" onClick={removeEquipment}>Remove</a>
         {' '}<b>{name}</b>{'. ' + equipment.description}
      </li>);
   });
   const options = database.equipment.names.filter((name) => !character.equipment.contains(name))
   .map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length)
   {
      listItems.push(<li key={'add-equipment'} id={'add-equipment'}>
         <select onChange={addEquipment}>
            <option>Add Equipment...</option>
            {options}
         </select>
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}

function renderEquipment()
{
   ReactDOM.render(
      <EquipmentList names={character.equipment}/>,
      document.getElementById('equipment')
   );
}
