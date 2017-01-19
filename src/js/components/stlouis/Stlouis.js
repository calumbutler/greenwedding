import React from 'react';
import {stlouisActions} from 'components/stlouis/actions';
import {stlouisStore} from 'components/stlouis/store';


export default class Stlouis extends React.Component {
	constructor(props){
		super(props);
		this.state = stlouisStore.getState();
		stlouisStore.listen(this.storeUpdate.bind(this));
	}

	storeUpdate(){
		this.setState(stlouisStore.getState());
	}

	componentDidMount(){
	}

	componentDidUpdate(){
	}


	render(){
      return (
        <div>
				stlouis
        </div>
    );
  }
}
