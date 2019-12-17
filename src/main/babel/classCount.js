'use strict';

function ClassCountTable()
{
   const headers = database.combatTypes.names.map((name) =>
   {
      return (<th key={'th-' + name}>{name}</th>);
   });
   headers.unshift((<th key="th-x">x</th>));
   const headerRow = (
      <tr key="tr-headers">{headers}</tr>
   );
   const rows = database.elements.names.map((name) =>
   {
      return (<tr key={'tr-' + name}>
         <td key={'vth-' + name}>{name}</td>
         <ClassCountTableRow element={name} />
      </tr>);
   });
   return (
      <table>
         <thead>{headerRow}</thead>
         <tbody>{rows}</tbody>
      </table>
   );
}

function ClassCountTableRow(props)
{
   return database.combatTypes.names.map((name) =>
   {
      return (<td key={props.element + '/' + name}>{countClasses(props.element, name)}</td>);
   });
}

function countClasses(element, combatType)
{
   if (undefined === database.classes.byRequirement[element]) return 0;
   if (undefined === database.classes.byRequirement[element][combatType]) return 0;
   return database.classes.byRequirement[element][combatType].length;
}

ReactDOM.render(
   <ClassCountTable />,
   document.getElementById('classCountDiv')
);
