'use strict';

function EquipmentList(props)
{
   const listItems = props.names.map((name) =>
   {
      var equipment = database.equipment[name];
      return (<li key={'equipment-' + name} id={'equipment-' + name} data-name={name}>
         <a href="#" onClick={removeEquipmentEventForward}>Remove</a>
         {' '}<b>{name}</b>{'. ' + equipment.description}
      </li>);
   });
   const options = database.equipment.names.filter((name) => !props.names.contains(name))
   .map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length)
   {
      listItems.push(<li key={'add-equipment'} id={'add-equipment'}>
         <select onChange={addEquipmentEventForward}>
            <option>Add Equipment...</option>
            {options}
         </select>
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}

function removeEquipmentEventForward(onClickEvent)
{
   character.removeEquipment(onClickEvent);
}

function addEquipmentEventForward(onClickEvent)
{
   character.addEquipment(onClickEvent);
}

function renderEquipment(equipment)
{
   ReactDOM.render(
      <EquipmentList names={equipment} />,
      document.getElementById('equipment')
   );
}
