define(['exports', 'components/map/actions', 'dispatcher', 'esri/map'], function (exports, _componentsMapActions, _dispatcher, _esriMap) {
	/*eslint-disable */
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _Map = _interopRequireDefault(_esriMap);

	var MapStore = (function () {
		function MapStore() {
			_classCallCheck(this, MapStore);

			this.map = {};
			this.bindListeners({
				initialize: _componentsMapActions.mapActions.initialize,
				changeMapSize: _componentsMapActions.mapActions.changeMapSize
			});
		}

		_createClass(MapStore, [{
			key: 'initialize',
			value: function initialize() {
				var map = new _Map['default']("map", {
					center: [-118, 34.5],
					zoom: 8,
					basemap: "topo"
				});
				this.map = map;
			}
		}, {
			key: 'changeMapSize',
			value: function changeMapSize(size) {
				this.mapSize = size;
				document.getElementById('map').style.height = this.mapSize;
			}
		}, {
			key: 'getMap',
			value: function getMap() {
				return this.map;
			}
		}, {
			key: 'setMap',
			value: function setMap(map) {
				this.map = map;
			}
		}]);

		return MapStore;
	})();

	var mapStore = alt.createStore(MapStore, 'MapStore');
	exports.mapStore = mapStore;
});
//# sourceMappingURL=store.js.map