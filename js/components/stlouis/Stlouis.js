define(['exports', 'module', 'react', 'components/stlouis/actions', 'components/stlouis/store', 'components/navigation/navigation'], function (exports, module, _react, _componentsStlouisActions, _componentsStlouisStore, _componentsNavigationNavigation) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = _interopRequireDefault(_react);

	var _Navigation = _interopRequireDefault(_componentsNavigationNavigation);

	var Stlouis = (function (_React$Component) {
		_inherits(Stlouis, _React$Component);

		function Stlouis(props) {
			_classCallCheck(this, Stlouis);

			_get(Object.getPrototypeOf(Stlouis.prototype), 'constructor', this).call(this, props);
			this.state = _componentsStlouisStore.stlouisStore.getState();
			_componentsStlouisStore.stlouisStore.listen(this.storeUpdate.bind(this));
		}

		_createClass(Stlouis, [{
			key: 'storeUpdate',
			value: function storeUpdate() {
				this.setState(_componentsStlouisStore.stlouisStore.getState());
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
				return _React['default'].createElement(
					'div',
					{ className: 'stlouis--container' },
					_React['default'].createElement(_Navigation['default'], null),
					_React['default'].createElement(
						'h1',
						{ className: 'tbd--title' },
						'Spring 2018 details to follow'
					)
				);
			}
		}]);

		return Stlouis;
	})(_React['default'].Component);

	module.exports = Stlouis;
});
//# sourceMappingURL=Stlouis.js.map