'use strict';

function BackgroundOptions()
{
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
   <BackgroundOptions />,
   document.getElementById('backgroundDiv')
);
