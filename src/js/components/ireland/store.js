/*eslint-disable */
import {irelandActions} from 'components/ireland/actions';
import {dispatcher} from 'dispatcher';

class IrelandStore {
	constructor () {
		this.map = {};
		this.bindListeners({
			initialize: irelandActions.initialize
		});
	}

	initialize(){

	}


}

export const irelandStore = dispatcher.createStore(IrelandStore, 'IrelandStore');
