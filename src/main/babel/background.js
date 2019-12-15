'use strict';

class BackgroundOptions extends React.PureComponent
{
   render()
   {
      const options = this.props.names.map((name) =>
         <option key={name} value={name}>{name}</option>
      );
      return (
         <select id="backgroundSelect" onChange={updateBackground}>
            {options}
         </select>
      );
   }
}

ReactDOM.render(
   <BackgroundOptions names={database.backgrounds.names} />,
   document.getElementById('backgroundDiv')
);
