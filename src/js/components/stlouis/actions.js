import {dispatcher} from 'dispatcher';

class StlouisActions {
  initialize(){
		this.dispatch();
	}
}
export const stlouisActions = dispatcher.createActions(StlouisActions);
