define(['exports', 'module', 'react-leaflet', 'react'], function (exports, module, _reactLeaflet, _react) {
  'use strict';

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

  var _React = _interopRequireDefault(_react);

  var position = [53.341119, -6.258821];

  // mapbox.accessToken = 'pk.eyJ1IjoidGdpcmdpbiIsImEiOiJlQjdvS05jIn0.h9yB6fjZqcL11l8UH9RLmg';
  // var map = new mapbox.Map({
  //     container: 'map',
  //     style: 'mapbox://styles/tgirgin/ciy2ellxj007v2rmhq2aoo4xt',
  //     zoom: 14.32,
  //     center: [-6.258821, 53.341119]
  // });

  var CustomMap = (function (_React$Component) {
    _inherits(CustomMap, _React$Component);

    function CustomMap(props) {
      _classCallCheck(this, CustomMap);

      _get(Object.getPrototypeOf(CustomMap.prototype), 'constructor', this).call(this, props);
      //this.state = irelandStore.getState();
      //irelandStore.listen(this.storeUpdate.bind(this));

      //document.getElementById('content').classList.remove('overflow-hidden')
    }

    _createClass(CustomMap, [{
      key: 'storeUpdate',
      value: function storeUpdate() {
        //this.setState(irelandStore.getState());
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {}
    }, {
      key: 'render',
      value: function render() {
        var center = [53.341119, -6.258821];
        return _React['default'].createElement(
          'div',
          null,
          _React['default'].createElement(
            _reactLeaflet.Map,
            {
              style: { height: "80vh" },
              center: position,
              zoom: 15 },
            _React['default'].createElement(_reactLeaflet.TileLayer, {
              attribution: '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
              url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            }),
            _React['default'].createElement(_reactLeaflet.Circle, { center: center, fillColor: 'blue', radius: 200 })
          )
        );
      }
    }]);

    return CustomMap;
  })(_React['default'].Component);

  module.exports = CustomMap;
});
//# sourceMappingURL=map.js.map