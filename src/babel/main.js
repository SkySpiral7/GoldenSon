'use strict';

function BackgroundOptions() {
   const options = database.backgrounds.names.map((name) =>
      <option key={name} value={name}>{name}</option>
   );
   return (
      <select id="backgroundSelect" onChange={updateBackground}>
         {options}
      </select>
   );
}

ReactDOM.render(
   <BackgroundOptions/>,
   document.getElementById('backgroundDiv')
);

function DjinnList(props) {
   const listItems = props.names.map((name) => {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      */
      return (<li key={'djinn-' + name} id={'djinn-' + name} data-name={name}>
         <select onChange={onChangeUpdateDjinn}>
            <option value="set">Set</option>
            <option value="standby">Standby</option>
            <option value="recovery">Recovery</option>
            <option value="remove">Remove</option>
         </select>
         {' '}<b>{name}</b>{'. ' + djinn.description}
      </li>);
   });
   const options = database.djinn.names.filter((name) => !character.djinn.names.contains(name)).map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length) {
      listItems.push(<li key={'add-djinn'} id={'add-djinn'}>
         <DjinnDropDown element="earth" display="Venus (Earth)"/>
         {' '}
         <DjinnDropDown element="fire" display="Mars (Fire)"/>
         {' '}
         <DjinnDropDown element="wind" display="Jupiter (Wind)"/>
         {' '}
         <DjinnDropDown element="ice" display="Mercury (Ice)"/>
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}

function DjinnDropDown(props) {
   const options = database.djinn.names
      .filter((name) => database.djinn[name].element === props.element)
      .filter((name) => !character.djinn.names.contains(name))
      .map((name) =>
         <option key={name}>{name}</option>
      );
   if (0 !== options.length) {
      return (<select onChange={addDjinn}>
         <option>Add {props.display} Djinn...</option>
         {options}
      </select>);
   }
   return '';
}

function renderDjinn() {
   ReactDOM.render(
      <DjinnList names={character.djinn.names}/>,
      document.getElementById('djinn')
   );
}

function EquipmentList(props) {
   const listItems = props.names.map((name) => {
      var equipment = database.equipment[name];
      return (<li key={'equipment-' + name} id={'equipment-' + name} data-name={name}>
         <a href="#" onClick={removeEquipment}>Remove</a>
         {' '}<b>{name}</b>{'. ' + equipment.description}
      </li>);
   });
   const options = database.equipment.names.filter((name) => !character.equipment.contains(name)).map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length) {
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

function renderEquipment() {
   ReactDOM.render(
      <EquipmentList names={character.equipment}/>,
      document.getElementById('equipment')
   );
}

function PsynergyList(props) {
   const listItems = props.names.map((name) => {
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

function renderPsynergy() {
   ReactDOM.render(
      <PsynergyList names={character.psynergy}/>,
      document.getElementById('psynergy')
   );
}
