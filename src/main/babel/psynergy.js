'use strict';

function PsynergyList(props)
{
   const listItems = props.names.map((name) =>
   {
      const psynergy = database.psynergy[name];
      return (<li key={'psynergy-' + name} id={'psynergy-' + name}>
         <b>{name}</b>{'. ' + psynergy.description}
      </li>);
   });
   if (0 === listItems.length) return 'None';
   return (
      <ul>{listItems}</ul>
   );
}
