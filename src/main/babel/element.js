'use strict';

class ElementOptions extends React.Component
{
   render()
   {
      const options = this.props.names.sorted((name1, name2) =>
      {
         const index1 = database.elementOrder.indexOf(name1);
         const index2 = database.elementOrder.indexOf(name2);

         if (index1 > index2) return 1;
         if (index1 < index2) return -1;

         return 0;
      })
      .map((name) =>
         <option key={name} value={name}>{database.elements[name].display}</option>
      );
      return (
         <select id="adeptSelect" onChange={this.props.onChange}>
            {options}
         </select>
      );
   }
}

function updateAdeptEventForward(onClickEvent)
{
   character.updateAdept(onClickEvent);
}

ReactDOM.render(
   <ElementOptions names={database.elements.names} onChange={updateAdeptEventForward} />,
   document.getElementById('adeptDiv')
);
