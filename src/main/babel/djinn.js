'use strict';

function DjinnList(props) {
   var givenNames = JSON.clone(props.names);
   givenNames.sort(djinnNameSortOrder);
   const listItems = givenNames.map((name) => {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      TODO: form change buttons, Recovery rounds button
      */
      //TODO: label the elements of djinn set
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
