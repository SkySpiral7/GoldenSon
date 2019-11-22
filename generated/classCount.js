'use strict';

function ClassCountTable() {
   var headers = database.combatTypes.names.map(function (name) {
      return React.createElement(
         'th',
         { key: 'th-' + name },
         name
      );
   });
   headers.unshift(React.createElement(
      'th',
      { key: 'th-x' },
      'x'
   ));
   var headerRow = React.createElement(
      'tr',
      { key: 'tr-headers' },
      headers
   );
   var rows = database.adeptTypes.names.map(function (name) {
      return React.createElement(
         'tr',
         { key: 'tr-' + name },
         React.createElement(
            'td',
            { key: 'vth-' + name },
            name
         ),
         React.createElement(ClassCountTableRow, { element: name })
      );
   });
   return React.createElement(
      'table',
      null,
      React.createElement(
         'thead',
         null,
         headerRow
      ),
      React.createElement(
         'tbody',
         null,
         rows
      )
   );
}

function ClassCountTableRow(props) {
   return database.combatTypes.names.map(function (name) {
      return React.createElement(
         'td',
         { key: props.element + '/' + name },
         countClasses(props.element, name)
      );
   });
}

function countClasses(element, combatType) {
   if (undefined === database.classes.byRequirement[element]) return 0;
   if (undefined === database.classes.byRequirement[element][combatType]) return 0;
   return database.classes.byRequirement[element][combatType].length;
}

ReactDOM.render(React.createElement(ClassCountTable, null), document.getElementById('classCountDiv'));