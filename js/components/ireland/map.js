define(['exports', 'mapbox-gl'], function (exports, _mapboxGl) {
    'use strict';

    Object.defineProperty(exports, '__esModule', {
        value: true
    });

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    var _mapboxgl = _interopRequireDefault(_mapboxGl);

    console.log(_mapboxgl['default']);
    //console.log(Map)
    var createMap = function createMap() {
        _mapboxgl['default'].accessToken = 'pk.eyJ1IjoidGdpcmdpbiIsImEiOiJlQjdvS05jIn0.h9yB6fjZqcL11l8UH9RLmg';
        var map = new _mapboxgl['default'].Map({
            container: 'map',
            style: 'mapbox://styles/tgirgin/ciy2ellxj007v2rmhq2aoo4xt',
            zoom: 14.32,
            center: [-6.258821, 53.341119]
        });
    };
    exports.createMap = createMap;
});
//# sourceMappingURL=map.js.map