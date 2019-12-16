'use strict';

ReactDOM.render(React.createElement(ElementOptions, { names: database.elements.names, onChange: updateAdeptEventForward }), document.getElementById('adeptDiv'));

ReactDOM.render(React.createElement(BackgroundOrCombatTypeOptions, { names: database.combatTypes.names, id: 'combatTypeSelect',
   onChange: updateCombatTypeEventForward }), document.getElementById('combatTypeDiv'));
ReactDOM.render(React.createElement(BackgroundOrCombatTypeOptions, { names: database.backgrounds.names, id: 'backgroundSelect',
   onChange: updateBackgroundEventForward }), document.getElementById('backgroundDiv'));