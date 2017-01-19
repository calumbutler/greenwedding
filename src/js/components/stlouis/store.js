import {stlouisActions} from 'components/stlouis/actions';
import {dispatcher} from 'dispatcher';

class StlouisStore{
	constructor () {


		this.bindListeners({
			initialize: stlouisActions.initialize
		});
	}

	initialize(){

	}

}

export const stlouisStore = dispatcher.createStore(StlouisStore, 'StlouisStore');
