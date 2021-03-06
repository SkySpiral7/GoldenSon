'use strict';

/**props: names, onDjinnChange, onDjinnAdd*/

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
         database.elements.earth.display
      ),
      React.createElement(DjinnElementList, { names: namesByElement.earth, element: "earth",
         onDjinnChange: props.onDjinnChange,
         onDjinnAdd: props.onDjinnAdd }),
      React.createElement(
         "h3",
         null,
         database.elements.fire.display
      ),
      React.createElement(DjinnElementList, { names: namesByElement.fire, element: "fire",
         onDjinnChange: props.onDjinnChange,
         onDjinnAdd: props.onDjinnAdd }),
      React.createElement(
         "h3",
         null,
         database.elements.ice.display
      ),
      React.createElement(DjinnElementList, { names: namesByElement.ice, element: "ice",
         onDjinnChange: props.onDjinnChange,
         onDjinnAdd: props.onDjinnAdd }),
      React.createElement(
         "h3",
         null,
         database.elements.wind.display
      ),
      React.createElement(DjinnElementList, { names: namesByElement.wind, element: "wind",
         onDjinnChange: props.onDjinnChange,
         onDjinnAdd: props.onDjinnAdd })
   );
}

/**props: names, element, onDjinnChange, onDjinnAdd*/
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
            { onChange: props.onDjinnChange },
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
      return !props.names.contains(name);
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
         { key: 'add-' + props.element + '-djinn', id: 'add-' + props.element + '-djinn-li' },
         React.createElement(DjinnElementDropDown, { names: props.names, element: props.element, onDjinnAdd: props.onDjinnAdd })
      ));
   }
   return React.createElement(
      "ul",
      null,
      listItems
   );
}

/**props: names, element, onDjinnAdd*/
function DjinnElementDropDown(props) {
   var options = database.djinn.names.filter(function (name) {
      return database.djinn[name].element === props.element;
   }).filter(function (name) {
      return !props.names.contains(name);
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
         { onChange: props.onDjinnAdd, id: 'add-' + props.element + '-djinn-select' },
         React.createElement(
            "option",
            null,
            "Add ",
            database.elements[props.element].display,
            " Djinn..."
         ),
         options
      );
   }
   return null;
}