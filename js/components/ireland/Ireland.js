define(['exports', 'module', 'react', 'components/ireland/actions', 'components/ireland/store', 'scrollmagic', 'components/ireland/map'], function (exports, module, _react, _componentsIrelandActions, _componentsIrelandStore, _scrollmagic, _componentsIrelandMap) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = _interopRequireDefault(_react);

	var _ScrollMagic = _interopRequireDefault(_scrollmagic);

	//console.log(ScrollMagic)
	var controller = new _ScrollMagic['default'].Controller({
		globalSceneOptions: {
			triggerHook: 'onLeave'
		}
	});

	//console.log(controller)

	var Ireland = (function (_React$Component) {
		_inherits(Ireland, _React$Component);

		function Ireland(props) {
			_classCallCheck(this, Ireland);

			_get(Object.getPrototypeOf(Ireland.prototype), 'constructor', this).call(this, props);
			this.state = _componentsIrelandStore.irelandStore.getState();
			_componentsIrelandStore.irelandStore.listen(this.storeUpdate.bind(this));
		}

		_createClass(Ireland, [{
			key: 'storeUpdate',
			value: function storeUpdate() {
				//this.setState(irelandStore.getState());
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				_componentsIrelandActions.irelandActions.initialize();
				var slides = document.querySelectorAll("section.panel");

				// create scene for every slide
				for (var i = 0; i < slides.length; i++) {
					new _ScrollMagic['default'].Scene({
						triggerElement: slides[i],
						duration: 700,
						height: 1000
					}).setPin(slides[i])
					//.addIndicators() // add indicators (requires plugin)
					.addTo(controller);
				}

				(0, _componentsIrelandMap.createMap)();
			}
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {}
		}, {
			key: 'render',
			value: function render() {

				return _React['default'].createElement(
					'div',
					{ id: 'ireland', className: 'ireland-container' },
					_React['default'].createElement(
						'section',
						{ id: 'ireland1', className: 'panel venue' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner panel--inner__white flex flex-column padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Dublin City Hall'
							),
							'\\',
							_React['default'].createElement(
								'p',
								null,
								'City Hall is an outstanding example of the Georgian architecture for which Dublin is world-renowned. Audioguides and leaflets are available in English, Irish, German, Spanish, Italian and French.'
							),
							_React['default'].createElement(
								'p',
								null,
								'The vaults now host the multi-media exhibition, ‘Dublin’s City Hall: The Story of the Capital’. This exhibition traces the evolution of Ireland’s capital city, from before the Anglo-Norman invasion of 1170 to the present day.'
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland2', className: 'panel afters' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Fallon & byrnes'
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ className: 'panel hotels' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Hotels'
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ className: 'panel map' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Map'
							),
							_React['default'].createElement('div', { id: 'map' })
						)
					),
					_React['default'].createElement(
						'section',
						{ className: 'panel ' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Ireland'
							)
						)
					)
				);
			}
		}]);

		return Ireland;
	})(_React['default'].Component);

	module.exports = Ireland;
});
//# sourceMappingURL=Ireland.js.map