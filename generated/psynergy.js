'use strict';

function PsynergyList(props) {
   var listItems = props.names.map(function (name) {
      var psynergy = database.psynergy[name];
      return React.createElement(
         'li',
         { key: 'psynergy-' + name, id: 'psynergy-' + name },
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