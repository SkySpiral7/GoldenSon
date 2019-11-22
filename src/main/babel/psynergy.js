'use strict';

function PsynergyList(props)
{
   const listItems = props.names.map((name) =>
   {
      var psynergy = database.psynergy[name];
      return (<li key={'psynergy-' + name} id={'psynergy-' + name} data-name={name}>
         <b>{name}</b>{'. ' + psynergy.description}
      </li>);
   });
   if (0 === listItems.length) return 'None';
   return (
      <ul>{listItems}</ul>
   );
}

function renderPsynergy()
{
   ReactDOM.render(
      <PsynergyList names={character.psynergy}/>,
      document.getElementById('psynergy')
   );
}
