import {addressStructure} from 'js/config';
import {geocoderUrl} from 'js/config';
import {actions} from 'components/map/actions';
import {store} from 'components/map/store';
import esriRequest from 'esri/request';
import Point from 'esri/geometry/Point';
import {layerUrl} from 'js/config';
import Graphic from 'esri/graphic';
import PictureMarkerSymbol from 'esri/symbols/PictureMarkerSymbol';

let pointInfoArray = [
  'Healthy Eating',
  'Healthy Living',
  'Park',
  'Other'
];

export let addPoint = (point, map, icon, data) =>{
	let sms = new PictureMarkerSymbol('data:image/png;base64,' + icon, 20, 20);
	let graphic = new Graphic(point, sms);
  graphic.attributes = {
      Address: data.address,
      Memo: data.memo,
      Name: data.name,
      DataType: data.datatype
  };
	map.getLayer('map_graphics').add(graphic);

  actions.updateGraphics(graphic);
};

export let addTableRow = (data, tableIndex) =>{
  if(tableIndex){
    var item = {
      index: tableIndex,
      data: data
    };
    actions.replaceRow(item);
  } else{
    actions.updateTable(data);
  }
};

export let getIcons = () => {
	let request = esriRequest({url: layerUrl + '/legend', content: {f: 'json'}, handleAs: 'json', callbackParamName: 'callback'});

	request.then(function(response){
    let icons = [];
		response.layers.map(function(layer){
			icons.push(layer.legend[0]);

		});
    actions.updateIcon(response.layers[0].legend[0]);
    actions.updateIcons(icons);
	});
};


export let searchAddress = (addresses, tableIndex) =>{

  let addressObj = addressStructure;
  addressObj.records = [];
  addresses.map(function(item){
    addressObj.records.push({
      attributes: {
        SingleLine: item.address
      }
    });
  });
  let stringAddress = JSON.stringify(addressObj);

	let request = esriRequest({url: geocoderUrl, content: {f: 'json', addresses: stringAddress}, handleAs: 'json', callbackParamName: 'callback'});

	request.then(function(response){
    response.locations.map(function(location, index){
			let map = store.getState('map').map;

      if((location.location.x !== 'NaN') && (pointInfoArray[parseInt(addresses[index].datatype)] !== undefined)) {
        let point = new Point(location.location.x, location.location.y);
        map.centerAndZoom(point, 13);
        let datatypeIndex = addresses[index].datatype ? addresses[index].datatype : parseInt(addresses[index].datatype);
        let datatype = pointInfoArray[parseInt(addresses[index].datatype)];
        let data = {
            name: addresses[index].name,
            memo: addresses[index].memo,
            address: addresses[index].address,
            point: point,
            datatype: datatype
        };
        addTableRow(data, tableIndex);
        addPoint(point, map, store.getState().icons[datatypeIndex].imageData, data);
      }else{
        let datatype = pointInfoArray[parseInt(addresses[index].datatype)] ? pointInfoArray[parseInt(addresses[index].datatype)] : undefined;
  
        let data = {
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

export let batchUpdate = (json) => {
    searchAddress(json);
};


getIcons();
