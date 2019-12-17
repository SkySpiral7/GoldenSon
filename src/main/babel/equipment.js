'use strict';

/**props: names, onRemove, onAdd*/
function EquipmentList(props)
{
   const listItems = props.names.map((name) =>
   {
      const equipment = database.equipment[name];
      return (<li key={'equipment-' + name} id={'equipment-' + name} data-name={name}>
         <a href="#" onClick={props.onRemove}>Remove</a>
         {' '}<b>{name}</b>{'. ' + equipment.description}
      </li>);
   });
   const options = database.equipment.names.filter((name) => !props.names.contains(name))
   .map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length)
   {
      listItems.push(<li key={'add-equipment'} id={'add-equipment-li'}>
         <select onChange={props.onAdd} id='add-equipment-select'>
            <option>Add Equipment...</option>
            {options}
         </select>
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}
