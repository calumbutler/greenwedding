define(['exports', 'dispatcher'], function (exports, _dispatcher) {
		'use strict';

		Object.defineProperty(exports, '__esModule', {
				value: true
		});

		var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

		function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

		var StlouisActions = (function () {
				function StlouisActions() {
						_classCallCheck(this, StlouisActions);
				}

				_createClass(StlouisActions, [{
						key: 'initialize',
						value: function initialize() {
								this.dispatch();
						}
				}]);

				return StlouisActions;
		})();

		var stlouisActions = _dispatcher.dispatcher.createActions(StlouisActions);
		exports.stlouisActions = stlouisActions;
});
//# sourceMappingURL=actions.js.map