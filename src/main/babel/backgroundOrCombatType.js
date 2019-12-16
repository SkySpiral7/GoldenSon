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

function updateCombatTypeEventForward(onClickEvent)
{
   character.updateCombatType(onClickEvent);
}

function updateBackgroundEventForward(onClickEvent)
{
   character.updateBackground(onClickEvent);
}

ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect"
                                  onChange={updateCombatTypeEventForward} />,
   document.getElementById('combatTypeDiv')
);
ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect"
                                  onChange={updateBackgroundEventForward} />,
   document.getElementById('backgroundDiv')
);
