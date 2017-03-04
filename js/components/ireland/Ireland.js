define(['exports', 'module', 'react', 'components/ireland/actions', 'components/ireland/store', 'ScrollMagic', 'TweenMax', 'TweenLite', 'TimelineMax', 'TimelineLite', 'scrollmagic-setTween', 'scrollmagic-addIndicators', 'components/ireland/map', 'components/ireland/playlist', 'react-router'], function (exports, module, _react, _componentsIrelandActions, _componentsIrelandStore, _ScrollMagic, _TweenMax, _TweenLite, _TimelineMax, _TimelineLite, _scrollmagicSetTween, _scrollmagicAddIndicators, _componentsIrelandMap, _componentsIrelandPlaylist, _reactRouter) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = _interopRequireDefault(_react);

	var _ScrollMagic2 = _interopRequireDefault(_ScrollMagic);

	var _TweenMax2 = _interopRequireDefault(_TweenMax);

	var _TweenLite2 = _interopRequireDefault(_TweenLite);

	var _TimelineMax2 = _interopRequireDefault(_TimelineMax);

	var _TimelineLite2 = _interopRequireDefault(_TimelineLite);

	console.log(new _ScrollMagic2['default']());
	// var controller = new ScrollMagic.Controller({
	// 			globalSceneOptions: {
	// 				triggerHook: 'onLeave'
	// 			}
	// 		});

	var Ireland = (function (_React$Component) {
		_inherits(Ireland, _React$Component);

		function Ireland(props) {
			_classCallCheck(this, Ireland);

			_get(Object.getPrototypeOf(Ireland.prototype), 'constructor', this).call(this, props);
			this.state = _componentsIrelandStore.irelandStore.getState();
			_componentsIrelandStore.irelandStore.listen(this.storeUpdate.bind(this));

			document.getElementById('content').classList.remove('overflow-hidden');
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

				var controller = new _ScrollMagic2['default'].Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "200%" } });

				// build scenes
				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland1" }).setTween("#ireland1 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland2" }).setTween("#ireland2 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland3" }).setTween("#ireland3 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland4" }).setTween("#ireland4 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland5" }).setTween("#ireland5 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				new _ScrollMagic2['default'].Scene({ triggerElement: "#ireland6" }).setTween("#ireland6 > div", { y: "20%", ease: 'Linear' }).addTo(controller);

				(0, _componentsIrelandMap.createMap)();
				(0, _componentsIrelandPlaylist.initPlaylist)();
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
						{ id: 'ireland1', className: 'parallaxParent ireland--landing relative panel flex flex-column' },
						_React['default'].createElement(
							'h1',
							{ className: 'header--title' },
							'Kendall & Bart'
						),
						_React['default'].createElement(
							'h3',
							{ className: 'header--hashtag text-center' },
							_React['default'].createElement(
								'a',
								{ href: 'https://twitter.com/intent/tweet?hashtags=GreenWedding', target: '_blank' },
								'#GreenWedding'
							)
						),
						_React['default'].createElement(
							'ul',
							{ className: 'header--navigation flex flex-row justify-center' },
							_React['default'].createElement(
								'li',
								null,
								_React['default'].createElement(
									_reactRouter.Link,
									{ to: '/wedding/' },
									'Wedding'
								)
							),
							_React['default'].createElement(
								'li',
								null,
								_React['default'].createElement(
									_reactRouter.Link,
									{ to: '/dc/' },
									'DC Reception'
								)
							),
							_React['default'].createElement(
								'li',
								null,
								_React['default'].createElement(
									_reactRouter.Link,
									{ to: '/registry/' },
									'Registry'
								)
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland2', className: 'parallaxParent panel itinerary' },
						_React['default'].createElement(
							'div',
							{ className: 'itinerary--inner relative panel--inner flex flex-column padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Itinerary'
							),
							_React['default'].createElement(
								'ul',
								{ className: 'itinerary--list' },
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'3:30pm'
									),
									' ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.dublincity.ie/node/14412', target: '_blank' },
										'Dublin City Hall'
									),
									' Kendall and Bart get married'
								),
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'4:00pm'
									),
									' Pictures of all wedding guest walking to ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.louisfitzgerald.com/stagshead', target: '_blank' },
										'Stag Head Pub'
									),
									' for drinks'
								),
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'6:00pm'
									),
									' Cocktail hour begins at ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.fallonandbyrne.com/', target: '_blank' },
										'Fallon & Byrne'
									),
									' dinner and dancing to follow'
								),
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'1:00am'
									),
									' After’s at The Candle Bar at ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.kellysdublin.com/', target: '_blank' },
										'Kelly’s Hotel'
									)
								)
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland3', className: 'parallaxParent panel afters hotels' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Hotels'
							),
							_React['default'].createElement(
								'div',
								{ className: 'flex flex-wrap justify-around' },
								_React['default'].createElement(
									'div',
									{ className: 'hotel--container text-center' },
									_React['default'].createElement(
										'h2',
										null,
										_React['default'].createElement(
											'a',
											{ href: 'http://theclarence.ie/', target: '_blank' },
											' The Clarence '
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'6-8 Wellington Quay,'
									),
									_React['default'].createElement(
										'p',
										null,
										'Dublin 2'
									),
									_React['default'].createElement('img', { src: 'images/theclarence.jpeg', height: '300', width: '275' }),
									_React['default'].createElement(
										'p',
										null,
										'Lukasz room rate 150 Euro per night.  Limited space, please reserve asap.'
									)
								),
								_React['default'].createElement(
									'div',
									{ className: 'hotel--container text-center' },
									_React['default'].createElement(
										'h2',
										null,
										_React['default'].createElement(
											'a',
											{ href: 'http://www.kellysdublin.com/', target: '_blank' },
											' Kelly\'s Hotel Dublin'
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'35-37 South Great George\'s Street,'
									),
									_React['default'].createElement(
										'p',
										null,
										'Dublin 2'
									),
									_React['default'].createElement('img', { src: 'images/kellys.jpg', height: '300', width: '275' }),
									_React['default'].createElement(
										'p',
										null,
										'VERY limited space.'
									)
								),
								_React['default'].createElement(
									'div',
									{ className: 'hotel--container text-center' },
									_React['default'].createElement(
										'h2',
										null,
										_React['default'].createElement(
											'a',
											{ href: 'http://graftonguesthouse.com/', target: '_blank' },
											' Kelly’s Hotel Guest House'
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'27 S Great George\'s St,'
									),
									_React['default'].createElement(
										'p',
										null,
										'Dublin 2'
									),
									_React['default'].createElement('img', { src: 'images/grafton-guest.jpg', height: '300', width: '275' }),
									_React['default'].createElement(
										'p',
										null,
										'Across the road from Kelly\'s'
									)
								),
								_React['default'].createElement(
									'div',
									{ className: 'hotel--container text-center' },
									_React['default'].createElement(
										'h2',
										null,
										_React['default'].createElement(
											'a',
											{ href: 'http://www.brookshotel.ie/ ', target: '_blank' },
											'The Brooks Hotel'
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'Drury St'
									),
									_React['default'].createElement(
										'p',
										null,
										'Dublin 2'
									),
									_React['default'].createElement('img', { src: 'images/brooks.jpg', height: '300', width: '275' })
								),
								_React['default'].createElement(
									'div',
									{ className: 'hotel--container text-center' },
									_React['default'].createElement(
										'h2',
										null,
										_React['default'].createElement(
											'a',
											{ href: 'http://www.themorgan.com/', target: '_blank' },
											' The Morgan '
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'College Green,'
									),
									_React['default'].createElement(
										'p',
										null,
										'Westmoreland Street,'
									),
									_React['default'].createElement(
										'p',
										null,
										'Dublin, D02 HR67'
									),
									_React['default'].createElement('img', { src: 'images/themorgan.jpeg', height: '300', width: '275' }),
									_React['default'].createElement(
										'p',
										null,
										'Stay and Save promo” 2 nights save10%, 3 nights save 15%'
									)
								)
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland4', className: 'parallaxParent panel checkout' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Things to check out'
							),
							_React['default'].createElement(
								'div',
								{ className: 'flex flex-wrap justify-around' },
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'https://www.nytimes.com/2014/11/16/travel/things-to-do-in-36-hours-in-dublin-ireland.html' },
										'New York Times: 36 Hours in Dublin'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Avoca'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Guinness'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Guinness'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Book of Kells'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'St. Stephens Green'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Lovindublin.com'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Totallydublin.ie'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Dean Hotel bar Sophie’S 360 views of Dublin (skip the guiness tour and get your city views here)'
									)
								)
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland5', className: 'parallaxParent panel rsvp' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'RSVP'
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland6', className: 'parallaxParent panel ' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Playlist'
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