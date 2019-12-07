'use strict';

/**props: names*/

function DjinnEntireList(props) {
   var namesByElement = { earth: [], fire: [], ice: [], wind: [] };
   props.names.sorted().forEach(function (name) {
      var djinn = database.djinn[name];
      namesByElement[djinn.element].push(name);
   });
   return React.createElement(
      "div",
      null,
      React.createElement(
         "h3",
         null,
         "Venus (Earth)"
      ),
      React.createElement(DjinnElementList, { names: namesByElement.earth, element: "earth", display: "Venus (Earth)" }),
      React.createElement(
         "h3",
         null,
         "Mars (Fire)"
      ),
      React.createElement(DjinnElementList, { names: namesByElement.fire, element: "fire", display: "Mars (Fire)" }),
      React.createElement(
         "h3",
         null,
         "Jupiter (Wind)"
      ),
      React.createElement(DjinnElementList, { names: namesByElement.wind, element: "wind", display: "Jupiter (Wind)" }),
      React.createElement(
         "h3",
         null,
         "Mercury (Ice)"
      ),
      React.createElement(DjinnElementList, { names: namesByElement.ice, element: "ice", display: "Mercury (Ice)" })
   );
}

/**props: names, element, display*/
function DjinnElementList(props) {
   var listItems = props.names.map(function (name) {
      var djinn = database.djinn[name];
      /*
      Set: gives you stats and class. can be "unleashed" which uses their ability which converts to Standby
      Standby: can be summoned (big attack) which converts to Recovery
      Recovery: does nothing for a bit then becomes Set
      TODO: unleashed button, summon check boxes, Recovery rounds button. but still need an easy/quick way?
      */
      return React.createElement(
         "li",
         { key: 'djinn-' + name, id: 'djinn-' + name, "data-name": name },
         React.createElement(
            "select",
            { onChange: onChangeUpdateDjinn },
            React.createElement(
               "option",
               { value: "set" },
               "Set"
            ),
            React.createElement(
               "option",
               { value: "standby" },
               "Standby"
            ),
            React.createElement(
               "option",
               { value: "recovery" },
               "Recovery"
            ),
            React.createElement(
               "option",
               { value: "remove" },
               "Remove"
            )
         ),
         ' ',
         React.createElement(
            "b",
            null,
            name
         ),
         '. ' + djinn.description
      );
   });
   var options = database.djinn.names.filter(function (name) {
      return !character.djinn.names.contains(name);
   }).filter(function (name) {
      var djinn = database.djinn[name];
      return djinn.element === props.element;
   }).map(function (name) {
      return React.createElement(
         "option",
         { key: name },
         name
      );
   });
   if (0 !== options.length) {
      listItems.push(React.createElement(
         "li",
         { key: 'add-' + props.element + '-djinn', id: 'add-' + props.element + '-djinn' },
         React.createElement(DjinnElementDropDown, { element: props.element, display: props.display })
      ));
   }
   return React.createElement(
      "ul",
      null,
      listItems
   );
}

/**props: element, display*/
function DjinnElementDropDown(props) {
   var options = database.djinn.names.filter(function (name) {
      return database.djinn[name].element === props.element;
   }).filter(function (name) {
      return !character.djinn.names.contains(name);
   }).map(function (name) {
      return React.createElement(
         "option",
         { key: name },
         name
      );
   });
   if (0 !== options.length) {
      return React.createElement(
         "select",
         { onChange: addDjinn },
         React.createElement(
            "option",
            null,
            "Add ",
            props.display,
            " Djinn..."
         ),
         options
      );
   }
   return '';
}

function renderDjinn() {
   ReactDOM.render(React.createElement(DjinnEntireList, { names: character.djinn.names }), document.getElementById('djinn'));
}