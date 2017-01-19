define(['exports', 'js/config', 'components/map/actions', 'components/map/store', 'esri/request', 'esri/geometry/Point', 'esri/graphic', 'esri/symbols/PictureMarkerSymbol'], function (exports, _jsConfig, _componentsMapActions, _componentsMapStore, _esriRequest, _esriGeometryPoint, _esriGraphic, _esriSymbolsPictureMarkerSymbol) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  var _esriRequest2 = _interopRequireDefault(_esriRequest);

  var _Point = _interopRequireDefault(_esriGeometryPoint);

  var _Graphic = _interopRequireDefault(_esriGraphic);

  var _PictureMarkerSymbol = _interopRequireDefault(_esriSymbolsPictureMarkerSymbol);

  var pointInfoArray = ['Healthy Eating', 'Healthy Living', 'Park', 'Other'];

  var addPoint = function addPoint(point, map, icon, data) {
    var sms = new _PictureMarkerSymbol['default']('data:image/png;base64,' + icon, 20, 20);
    var graphic = new _Graphic['default'](point, sms);
    graphic.attributes = {
      Address: data.address,
      Memo: data.memo,
      Name: data.name,
      DataType: data.datatype
    };
    map.getLayer('map_graphics').add(graphic);

    _componentsMapActions.actions.updateGraphics(graphic);
  };

  exports.addPoint = addPoint;
  var addTableRow = function addTableRow(data, tableIndex) {
    if (tableIndex) {
      var item = {
        index: tableIndex,
        data: data
      };
      _componentsMapActions.actions.replaceRow(item);
    } else {
      _componentsMapActions.actions.updateTable(data);
    }
  };

  exports.addTableRow = addTableRow;
  var getIcons = function getIcons() {
    var request = (0, _esriRequest2['default'])({ url: _jsConfig.layerUrl + '/legend', content: { f: 'json' }, handleAs: 'json', callbackParamName: 'callback' });

    request.then(function (response) {
      var icons = [];
      response.layers.map(function (layer) {
        icons.push(layer.legend[0]);
      });
      _componentsMapActions.actions.updateIcon(response.layers[0].legend[0]);
      _componentsMapActions.actions.updateIcons(icons);
    });
  };

  exports.getIcons = getIcons;
  var searchAddress = function searchAddress(addresses, tableIndex) {

    var addressObj = _jsConfig.addressStructure;
    addressObj.records = [];
    addresses.map(function (item) {
      addressObj.records.push({
        attributes: {
          SingleLine: item.address
        }
      });
    });
    var stringAddress = JSON.stringify(addressObj);

    var request = (0, _esriRequest2['default'])({ url: _jsConfig.geocoderUrl, content: { f: 'json', addresses: stringAddress }, handleAs: 'json', callbackParamName: 'callback' });

    request.then(function (response) {
      response.locations.map(function (location, index) {
        var map = _componentsMapStore.store.getState('map').map;

        if (location.location.x !== 'NaN' && pointInfoArray[parseInt(addresses[index].datatype)] !== undefined) {
          var point = new _Point['default'](location.location.x, location.location.y);
          map.centerAndZoom(point, 13);
          var datatypeIndex = addresses[index].datatype ? addresses[index].datatype : parseInt(addresses[index].datatype);
          var datatype = pointInfoArray[parseInt(addresses[index].datatype)];
          var data = {
            name: addresses[index].name,
            memo: addresses[index].memo,
            address: addresses[index].address,
            point: point,
            datatype: datatype
          };
          addTableRow(data, tableIndex);
          addPoint(point, map, _componentsMapStore.store.getState().icons[datatypeIndex].imageData, data);
        } else {
          var datatype = pointInfoArray[parseInt(addresses[index].datatype)] ? pointInfoArray[parseInt(addresses[index].datatype)] : undefined;

          var data = {
            name: addresses[index].name,
            memo: addresses[index].memo,
            address: addresses[index].address,
            point: null,
            datatype: datatype
          };
          addTableRow(data);
        }
      });
    });
  };

  exports.searchAddress = searchAddress;
  var batchUpdate = function batchUpdate(json) {
    searchAddress(json);
  };

  exports.batchUpdate = batchUpdate;
  getIcons();
});
//# sourceMappingURL=utilities.js.map