'use strict';

/**props: names*/
function DjinnEntireList(props)
{
   const namesByElement = {earth: [], fire: [], ice: [], wind: []};
   props.names.sorted()
   .forEach((name) =>
   {
      const djinn = database.djinn[name];
      namesByElement[djinn.element].push(name);
   });
   return (
      <div>
         <h3>{database.elements.earth.display}</h3>
         <DjinnElementList names={namesByElement.earth} element="earth" />

         <h3>{database.elements.fire.display}</h3>
         <DjinnElementList names={namesByElement.fire} element="fire" />

         <h3>{database.elements.ice.display}</h3>
         <DjinnElementList names={namesByElement.ice} element="ice" />

         <h3>{database.elements.wind.display}</h3>
         <DjinnElementList names={namesByElement.wind} element="wind" />
      </div>
   );
}

/**props: names, element*/
function DjinnElementList(props)
{
   const listItems = props.names.map((name) =>
   {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      TODO: unleashed button, summon check boxes, Recovery rounds button. but still need an easy/quick way?
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
   const options = database.djinn.names
   .filter((name) => !character.djinn.names.contains(name))
   .filter((name) =>
   {
      var djinn = database.djinn[name];
      return djinn.element === props.element;
   })
   .map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length)
   {
      listItems.push(<li key={'add-' + props.element + '-djinn'} id={'add-' + props.element + '-djinn'}>
         <DjinnElementDropDown element={props.element} />
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}

/**props: element*/
function DjinnElementDropDown(props)
{
   const options = database.djinn.names
   .filter((name) => database.djinn[name].element === props.element)
   .filter((name) => !character.djinn.names.contains(name))
   .map((name) =>
      <option key={name}>{name}</option>
   );
   if (0 !== options.length)
   {
      return (<select onChange={addDjinn}>
         <option>Add {database.elements[props.element].display} Djinn...</option>
         {options}
      </select>);
   }
   return '';
}

function renderDjinn()
{
   ReactDOM.render(
      <DjinnEntireList names={character.djinn.names} />,
      document.getElementById('djinn')
   );
}
