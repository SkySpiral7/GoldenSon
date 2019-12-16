'use strict';

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
      return !props.names.contains(name);
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

function renderEquipment(equipment) {
   ReactDOM.render(React.createElement(EquipmentList, { names: equipment }), document.getElementById('equipment'));
}