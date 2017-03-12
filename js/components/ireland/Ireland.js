define(['exports', 'module', 'react', 'components/navigation/navigation', 'components/ireland/actions', 'components/ireland/store', 'ScrollMagic', 'TweenMax', 'TweenLite', 'TimelineMax', 'TimelineLite', 'scrollmagic-setTween', 'scrollmagic-addIndicators', 'components/ireland/map', 'components/ireland/playlist', 'react-router'], function (exports, module, _react, _componentsNavigationNavigation, _componentsIrelandActions, _componentsIrelandStore, _ScrollMagic, _TweenMax, _TweenLite, _TimelineMax, _TimelineLite, _scrollmagicSetTween, _scrollmagicAddIndicators, _componentsIrelandMap, _componentsIrelandPlaylist, _reactRouter) {
	'use strict';

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _React = _interopRequireDefault(_react);

	var _Navigation = _interopRequireDefault(_componentsNavigationNavigation);

	var _ScrollMagic2 = _interopRequireDefault(_ScrollMagic);

	var _TweenMax2 = _interopRequireDefault(_TweenMax);

	var _TweenLite2 = _interopRequireDefault(_TweenLite);

	var _TimelineMax2 = _interopRequireDefault(_TimelineMax);

	var _TimelineLite2 = _interopRequireDefault(_TimelineLite);

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
							{ className: 'header--date' },
							'December 21st, 2017'
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
						_React['default'].createElement(_Navigation['default'], null)
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
									' - Marriage Ceremony at ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.dublincity.ie/node/14412', target: '_blank' },
										'Dublin City Hall'
									)
								),
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'4:00pm'
									),
									' - Cocktail Hour at ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.louisfitzgerald.com/stagshead', target: '_blank' },
										'The Stag\'s Head'
									),
									' pub'
								),
								_React['default'].createElement(
									'li',
									null,
									_React['default'].createElement(
										'b',
										null,
										'6:00pm'
									),
									' - Dinner and Dancing at ',
									_React['default'].createElement(
										'a',
										{ href: 'http://www.fallonandbyrne.com/', target: '_blank' },
										'Fallon & Byrne'
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
								'Suggested Hotels'
							),
							_React['default'].createElement(
								'p',
								{ className: 'text-center' },
								'All walking distance from ceremony & reception venues'
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
										'6-8 Wellington Quay'
									),
									_React['default'].createElement(
										'a',
										{ href: 'http://theclarence.ie/', target: '_blank' },
										_React['default'].createElement('img', { src: 'images/theclarence.jpeg', height: '300', width: '275' })
									),
									_React['default'].createElement(
										'p',
										null,
										'For block room rate email Lukasz at ',
										_React['default'].createElement(
											'a',
											{ href: 'mailto:reservations@theclarence.ie?subject=Butler%20Lissner%20Wedding%20&body=Dear%20Luckasz%2C%0AI\'d%20like%20do%20reserve%20a%20room%20with%20the%20Lissner-Butler%20Room%20block%20for%20___%20days.%0A%20I%20can%20be%20reached%20at%2001-xxx-xxx-xxx' },
											'reservations@theclarence.ie'
										),
										'. 10% charge to hold a room.'
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
										'Drury Street'
									),
									_React['default'].createElement(
										'a',
										{ href: 'http://www.brookshotel.ie/ ', target: '_blank' },
										_React['default'].createElement('img', { src: 'images/brooks.jpg', height: '300', width: '275' })
									),
									_React['default'].createElement(
										'p',
										null,
										'Closest hotel to the reception venue.'
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
											{ href: 'http://www.themorgan.com/', target: '_blank' },
											' The Morgan '
										)
									),
									_React['default'].createElement(
										'p',
										null,
										'Westmoreland Street, Temple Bar'
									),
									_React['default'].createElement(
										'a',
										{ href: 'http://www.brookshotel.ie/ ', target: '_blank' },
										_React['default'].createElement('img', { src: 'images/themorgan.jpeg', height: '300', width: '275' })
									),
									_React['default'].createElement(
										'p',
										null,
										'Special offers available on the hotel website'
									)
								)
							),
							_React['default'].createElement(
								'div',
								null,
								_React['default'].createElement(
									'h3',
									{ className: 'text-center padding--large' },
									'Need advice on accomodation in Ireland? Contact Kendall at ',
									_React['default'].createElement(
										'a',
										{ href: 'mailto:kendallsb3@gmail.com' },
										'kendallsb3@gmail.com'
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
							{ className: 'relative panel--inner padding background--white' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Tips for Touring Dublin'
							),
							_React['default'].createElement(
								'h3',
								{ className: 'text-center' },
								'Restaurants & Bars'
							),
							_React['default'].createElement(
								'div',
								{ className: 'restaurants flex flex-wrap justify-around text-center' },
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'https://www.avoca.com/explore/our-cafes/suffolkstreetcafe/', target: '_blank' },
										'Avoca'
									),
									_React['default'].createElement(
										'p',
										null,
										'Bright and open cafe space with an excellent and fresh all-day menu; Complete with a rooftop view across Dublin.'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.leoburdock.com', target: '_blank' },
										'Leo Burdock'
									),
									_React['default'].createElement(
										'p',
										null,
										'Best fish & chips in Dublin'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://sophies.ie/menus/', target: '_blank' },
										'Sophie\'s Restaurant in the Dean Hotel'
									),
									_React['default'].createElement(
										'p',
										null,
										'Great view of Dublin'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										null,
										'Italian Quarter'
									)
								)
							),
							_React['default'].createElement(
								'h3',
								{ className: 'text-center' },
								'Tourist Attractions'
							),
							_React['default'].createElement(
								'div',
								{ className: 'tourism flex flex-wrap justify-around text-center' },
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.guiness-storehouse.com', target: '_blank' },
										'Guinness Storehouse Tour'
									),
									_React['default'].createElement(
										'p',
										null,
										'The Storehouse covers seven floors surrounding a glass atrium shaped in the form of a pint of Guinness.'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.tcd.ie/visitors/book-of-kells', target: '_blank' },
										'Book of Kells Exhibition'
									),
									_React['default'].createElement(
										'p',
										null,
										'The Book of Kells is one of the finest and most famous of a group of manuscripts in what is known as the Insular style, produced from the late 6th through the early 9th centuries in monasteries in Ireland.'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'https://en.wikipedia.org/wiki/St_Stephen\'s_Green', target: '_blank' },
										'St Stephens Green'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.gpowitnesshistory.ie/visit/', target: '_blank' },
										'General Post Office (GPO)'
									),
									_React['default'].createElement(
										'p',
										null,
										'During the Easter Rising of 1916, the GPO served as the headquarters of the uprising\'s leaders.'
									)
								)
							),
							_React['default'].createElement(
								'h3',
								{ className: 'text-center' },
								'For More Ideas Checkout:'
							),
							_React['default'].createElement(
								'div',
								{ className: 'flex flex-wrap justify-around flex-column text-center' },
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.Lovindublin.com', target: '_blank' },
										'Lovindublin.com'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'http://www.Totallydublin.ie', target: '_blank' },
										'Totallydublin.ie'
									)
								),
								_React['default'].createElement(
									'div',
									null,
									_React['default'].createElement(
										'a',
										{ href: 'https://www.nytimes.com/2014/11/16/travel/things-to-do-in-36-hours-in-dublin-ireland.html' },
										'New York Times: 36 Hours in Dublin'
									)
								)
							)
						)
					),
					_React['default'].createElement(
						'section',
						{ id: 'ireland5', className: 'parallaxParent panel map' },
						_React['default'].createElement(
							'div',
							{ className: 'relative panel--inner padding' },
							_React['default'].createElement(
								'h1',
								{ className: 'text-center' },
								'Map'
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