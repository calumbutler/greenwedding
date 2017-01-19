define(['exports', 'components/ireland/actions', 'dispatcher'], function (exports, _componentsIrelandActions, _dispatcher) {
	/*eslint-disable */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var IrelandStore = (function () {
		function IrelandStore() {
			_classCallCheck(this, IrelandStore);

			this.map = {};
			this.bindListeners({
				initialize: _componentsIrelandActions.irelandActions.initialize
			});
		}

		_createClass(IrelandStore, [{
			key: 'initialize',
			value: function initialize() {}
		}]);

		return IrelandStore;
	})();

	var irelandStore = _dispatcher.dispatcher.createStore(IrelandStore, 'IrelandStore');
	exports.irelandStore = irelandStore;
});
//# sourceMappingURL=store.js.map