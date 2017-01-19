import {dispatcher} from 'dispatcher';

class DcActions {

  initialize(){
		this.dispatch();
	}
  currentPage(pageName){
    this.dispatch(pageName)
  }

  updateNewRecipes(newRecipes){
    this.dispatch(newRecipes)
  }

}
export const dcActions = dispatcher.createActions(DcActions);
