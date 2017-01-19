import {dispatcher} from 'dispatcher';

class IrelandActions {

	initialize(){
		this.dispatch();
	}
	changeMapSize(size){
		this.dispatch(size);
	}

}
export const irelandActions = dispatcher.createActions(IrelandActions);
