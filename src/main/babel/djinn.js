'use strict';

/**props: names*/
function DjinnEntireList(props)
{
   const namesByElement = {earth: [], fire: [], ice: [], wind: []};
   props.names.sort();
   props.names.forEach((name) =>
   {
      const djinn = database.djinn[name];
      namesByElement[djinn.element].push(name);
   });
   return (
      <div>
         <h3>Venus (Earth)</h3>
         <DjinnElementList names={namesByElement.earth} element="earth" display="Venus (Earth)" />

         <h3>Mars (Fire)</h3>
         <DjinnElementList names={namesByElement.fire} element="fire" display="Mars (Fire)" />

         <h3>Jupiter (Wind)</h3>
         <DjinnElementList names={namesByElement.wind} element="wind" display="Jupiter (Wind)" />

         <h3>Mercury (Ice)</h3>
         <DjinnElementList names={namesByElement.ice} element="ice" display="Mercury (Ice)" />
      </div>
   );
}

/**props: names, element, display*/
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
         <DjinnElementDropDown element={props.element} display={props.display} />
      </li>);
   }
   return (
      <ul>{listItems}</ul>
   );
}

/**props: element, display*/
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
         <option>Add {props.display} Djinn...</option>
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
