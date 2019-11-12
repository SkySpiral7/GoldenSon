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