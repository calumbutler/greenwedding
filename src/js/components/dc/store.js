import {dcActions} from 'components/dc/actions';
import {dispatcher} from 'dispatcher';
import {Config} from 'config';

class DcStore {
	constructor () {
		this.pageName = 'dc';

		this.bindListeners({
			initialize: dcActions.initialize,

		});
	}

	initialize(){

	}

	currentPage(pageName){
		this.currentPage = pageName;
	}

	updateNewRecipes(newRecipes){
		this.newRecipes = newRecipes;
	}

}
export const dcStore = dispatcher.createStore(DcStore, 'dcStore');
