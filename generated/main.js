'use strict';

function BackgroundOptions() {
   var options = database.backgrounds.names.map(function (name) {
      return React.createElement(
         'option',
         { key: name, value: name },
         name
      );
   });
   return React.createElement(
      'select',
      { id: 'backgroundSelect', onChange: updateBackground },
      options
   );
}

ReactDOM.render(React.createElement(BackgroundOptions, null), document.getElementById('backgroundDiv'));

function DjinnList(props) {
   var listItems = props.names.map(function (name) {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      */
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

function EquipmentList(props) {
   var listItems = props.names.map(function (name) {
      var equipment = database.equipment[name];
      return React.createElement(
         'li',
         { key: 'equipment-' + name, id: 'equipment-' + name, 'data-name': name },
         React.createElement(
            'a',
            { href: '#', onClick: removeEquipment },
            'Remove'
         ),
         ' ',
         React.createElement(
            'b',
            null,
            name
         ),
         '. ' + equipment.description
      );
   });
   var options = database.equipment.names.filter(function (name) {
      return !character.equipment.contains(name);
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
         { key: 'add-equipment', id: 'add-equipment' },
         React.createElement(
            'select',
            { onChange: addEquipment },
            React.createElement(
               'option',
               null,
               'Add Equipment...'
            ),
            options
         )
      ));
   }
   return React.createElement(
      'ul',
      null,
      listItems
   );
}

function renderEquipment() {
   ReactDOM.render(React.createElement(EquipmentList, { names: character.equipment }), document.getElementById('equipment'));
}

function PsynergyList(props) {
   var listItems = props.names.map(function (name) {
      var psynergy = database.psynergy[name];
      return React.createElement(
         'li',
         { key: 'psynergy-' + name, id: 'psynergy-' + name, 'data-name': name },
         React.createElement(
            'b',
            null,
            name
         ),
         '. ' + psynergy.description
      );
   });
   if (0 === listItems.length) return 'None';
   return React.createElement(
      'ul',
      null,
      listItems
   );
}

function renderPsynergy() {
   ReactDOM.render(React.createElement(PsynergyList, { names: character.psynergy }), document.getElementById('psynergy'));
}