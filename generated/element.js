'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ElementOptions = function (_React$Component) {
   _inherits(ElementOptions, _React$Component);

   function ElementOptions() {
      _classCallCheck(this, ElementOptions);

      return _possibleConstructorReturn(this, (ElementOptions.__proto__ || Object.getPrototypeOf(ElementOptions)).apply(this, arguments));
   }

   _createClass(ElementOptions, [{
      key: "render",
      value: function render() {
         var options = this.props.names.sorted(function (name1, name2) {
            var index1 = database.elementOrder.indexOf(name1);
            var index2 = database.elementOrder.indexOf(name2);

            if (index1 > index2) return 1;
            if (index1 < index2) return -1;

            return 0;
         }).map(function (name) {
            return React.createElement(
               "option",
               { key: name, value: name },
               database.elements[name].display
            );
         });
         return React.createElement(
            "select",
            { id: "adeptSelect", onChange: this.props.onChange },
            options
         );
      }
   }]);

   return ElementOptions;
}(React.Component);

function updateAdeptEventForward(onClickEvent) {
   character.updateAdept(onClickEvent);
}