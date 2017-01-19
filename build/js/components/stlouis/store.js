define(['exports', 'components/stlouis/actions', 'dispatcher'], function (exports, _componentsStlouisActions, _dispatcher) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var StlouisStore = (function () {
		function StlouisStore() {
			_classCallCheck(this, StlouisStore);

			this.bindListeners({
				initialize: _componentsStlouisActions.stlouisActions.initialize
			});
		}

		_createClass(StlouisStore, [{
			key: 'initialize',
			value: function initialize() {}
		}]);

		return StlouisStore;
	})();

	var stlouisStore = _dispatcher.dispatcher.createStore(StlouisStore, 'StlouisStore');
	exports.stlouisStore = stlouisStore;
});
//# sourceMappingURL=store.js.map