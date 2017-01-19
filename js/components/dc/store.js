define(['exports', 'components/dc/actions', 'dispatcher', 'config'], function (exports, _componentsDcActions, _dispatcher, _config) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var DcStore = (function () {
		function DcStore() {
			_classCallCheck(this, DcStore);

			this.pageName = 'dc';

			this.bindListeners({
				initialize: _componentsDcActions.dcActions.initialize

			});
		}

		_createClass(DcStore, [{
			key: 'initialize',
			value: function initialize() {}
		}, {
			key: 'currentPage',
			value: function currentPage(pageName) {
				this.currentPage = pageName;
			}
		}, {
			key: 'updateNewRecipes',
			value: function updateNewRecipes(newRecipes) {
				this.newRecipes = newRecipes;
			}
		}]);

		return DcStore;
	})();

	var dcStore = _dispatcher.dispatcher.createStore(DcStore, 'dcStore');
	exports.dcStore = dcStore;
});
//# sourceMappingURL=store.js.map