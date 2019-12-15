'use strict';

class CombatTypeOptions extends React.PureComponent
{
   render()
   {
      const options = this.props.names.map((name) =>
         <option key={name} value={name}>{name}</option>
      );
      return (
         <select id="combatTypeSelect" onChange={updateCombatType}>
            {options}
         </select>
      );
   }
}

ReactDOM.render(
   <CombatTypeOptions names={database.combatTypes.names} />,
   document.getElementById('combatTypeDiv')
);
