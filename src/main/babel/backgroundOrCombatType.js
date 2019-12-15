'use strict';

class BackgroundOrCombatTypeOptions extends React.PureComponent
{
   render()
   {
      const options = this.props.names.map((name) =>
         <option key={name} value={name}>{name}</option>
      );
      return (
         <select id={this.props.id} onChange={this.props.onChange}>
            {options}
         </select>
      );
   }
}

ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect" onChange={updateCombatType} />,
   document.getElementById('combatTypeDiv')
);
ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect" onChange={updateBackground} />,
   document.getElementById('backgroundDiv')
);
