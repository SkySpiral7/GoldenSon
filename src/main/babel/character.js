'use strict';

ReactDOM.render(
   <ElementOptions names={database.elements.names} onChange={updateAdeptEventForward} />,
   document.getElementById('adeptDiv')
);

ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.combatTypes.names} id="combatTypeSelect"
                                  onChange={updateCombatTypeEventForward} />,
   document.getElementById('combatTypeDiv')
);
ReactDOM.render(
   <BackgroundOrCombatTypeOptions names={database.backgrounds.names} id="backgroundSelect"
                                  onChange={updateBackgroundEventForward} />,
   document.getElementById('backgroundDiv')
);
