'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BackgroundOptions = function (_React$PureComponent) {
   _inherits(BackgroundOptions, _React$PureComponent);

   function BackgroundOptions() {
      _classCallCheck(this, BackgroundOptions);

      return _possibleConstructorReturn(this, (BackgroundOptions.__proto__ || Object.getPrototypeOf(BackgroundOptions)).apply(this, arguments));
   }

   _createClass(BackgroundOptions, [{
      key: 'render',
      value: function render() {
         var options = this.props.names.map(function (name) {
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
   }]);

   return BackgroundOptions;
}(React.PureComponent);

ReactDOM.render(React.createElement(BackgroundOptions, { names: database.backgrounds.names }), document.getElementById('backgroundDiv'));
document.getElementById('backgroundDiv').onchange();