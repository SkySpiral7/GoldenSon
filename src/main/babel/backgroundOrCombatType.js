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
