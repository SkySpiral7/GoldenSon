'use strict';

function DataTable()
{
   const headers = database.combatTypes.names.map((name) =>
   {
      return (<th key={'th-' + name}>{name}</th>);
   });
   headers.unshift((<th key="th-x">x</th>));
   const headerRow = (
      <tr key="tr-headers">{headers}</tr>
   );
   const rows = database.adeptTypes.names.map((name) =>
   {
      return (<tr key={'tr-' + name}>
         <td key={'vth-' + name}>{name}</td>
         <DataTableRow element={name}/>
      </tr>);
   });
   return (
      <table>
         <thead>{headerRow}</thead>
         <tbody>{rows}</tbody>
      </table>
   );
}

function DataTableRow(props)
{
   return database.combatTypes.names.map((name) =>
   {
      return (<td key={props.element + '/' + name}>{countClasses(props.element, name)}</td>);
   });
}

function countClasses(element, combatTypes)
{
   if (undefined === database.classRequirements[element]) return 0;
   var count = 0;
   for (var className of database.classRequirements[element].names)
   {
      if (database.classRequirements[element][className].combatType.contains(combatTypes)) ++count;
   }
   return count;
}

ReactDOM.render(
   <DataTable/>,
   document.getElementById('dataTable')
);
