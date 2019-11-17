'use strict';

function DjinnList(props) {
   var listItems = props.names.map(function (name) {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      TODO: form change buttons, Recovery rounds button
      */
      //TODO: sort display and options by element then name
      return React.createElement(
         'li',
         { key: 'djinn-' + name, id: 'djinn-' + name, 'data-name': name },
         React.createElement(
            'select',
            { onChange: onChangeUpdateDjinn },
            React.createElement(
               'option',
               { value: 'set' },
               'Set'
            ),
            React.createElement(
               'option',
               { value: 'standby' },
               'Standby'
            ),
            React.createElement(
               'option',
               { value: 'recovery' },
               'Recovery'
            ),
            React.createElement(
               'option',
               { value: 'remove' },
               'Remove'
            )
         ),
         ' ',
         React.createElement(
            'b',
            null,
            name
         ),
         '. ' + djinn.description
      );
   });
   var options = database.djinn.names.filter(function (name) {
      return !character.djinn.names.contains(name);
   }).map(function (name) {
      return React.createElement(
         'option',
         { key: name },
         name
      );
   });
   if (0 !== options.length) {
      listItems.push(React.createElement(
         'li',
         { key: 'add-djinn', id: 'add-djinn' },
         React.createElement(DjinnDropDown, { element: 'earth', display: 'Venus (Earth)' }),
         ' ',
         React.createElement(DjinnDropDown, { element: 'fire', display: 'Mars (Fire)' }),
         ' ',
         React.createElement(DjinnDropDown, { element: 'wind', display: 'Jupiter (Wind)' }),
         ' ',
         React.createElement(DjinnDropDown, { element: 'ice', display: 'Mercury (Ice)' })
      ));
   }
   return React.createElement(
      'ul',
      null,
      listItems
   );
}

function DjinnDropDown(props) {
   var options = database.djinn.names.filter(function (name) {
      return database.djinn[name].element === props.element;
   }).filter(function (name) {
      return !character.djinn.names.contains(name);
   }).map(function (name) {
      return React.createElement(
         'option',
         { key: name },
         name
      );
   });
   if (0 !== options.length) {
      return React.createElement(
         'select',
         { onChange: addDjinn },
         React.createElement(
            'option',
            null,
            'Add ',
            props.display,
            ' Djinn...'
         ),
         options
      );
   }
   return '';
}

function renderDjinn() {
   ReactDOM.render(React.createElement(DjinnList, { names: character.djinn.names }), document.getElementById('djinn'));
}