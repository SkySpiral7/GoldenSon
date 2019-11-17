'use strict';

function DataTable() {
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
         React.createElement(DataTableRow, { element: name })
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

function DataTableRow(props) {
   return database.combatTypes.names.map(function (name) {
      return React.createElement(
         'td',
         { key: props.element + '/' + name },
         countClasses(props.element, name)
      );
   });
}

function countClasses(element, combatTypes) {
   if (undefined === database.classRequirements[element]) return 0;
   var count = 0;
   var _iteratorNormalCompletion = true;
   var _didIteratorError = false;
   var _iteratorError = undefined;

   try {
      for (var _iterator = database.classRequirements[element].names[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
         var className = _step.value;

         if (database.classRequirements[element][className].combatType.contains(combatTypes)) ++count;
      }
   } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
   } finally {
      try {
         if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
         }
      } finally {
         if (_didIteratorError) {
            throw _iteratorError;
         }
      }
   }

   return count;
}

ReactDOM.render(React.createElement(DataTable, null), document.getElementById('dataTable'));